import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { fal } from "@fal-ai/client";
import { SESSION_COOKIE_NAME, verifyAdminSessionToken } from "@/lib/admin-session";
import { falKeySetupMessage, getFalKey } from "@/lib/fal-credentials";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

type AspectRatio = "16:9" | "9:16" | "1:1";
type Resolution = "480p" | "720p" | "1080p";

interface GenOpts {
  duration: number;
  aspectRatio: AspectRatio;
  resolution: Resolution;
  seed?: number;
}

interface ModelConfig {
  id: string;
  endpoint: string;
  label: string;
  blurb: string;
  pricePer5s: string;
  buildInput: (prompt: string, opts: GenOpts) => Record<string, unknown>;
}

const MODELS: ModelConfig[] = [
  {
    id: "seedance",
    endpoint: "fal-ai/bytedance/seedance/v1/lite/text-to-video",
    label: "Seedance 1.0 (Cheapest)",
    blurb: "Best price and fast output for social clips.",
    pricePer5s: "~$0.10",
    buildInput: (prompt, opts) => ({
      prompt,
      aspect_ratio: opts.aspectRatio,
      resolution: opts.resolution,
      duration: String(clampDuration(opts.duration, 2, 12)),
      ...(opts.seed !== undefined ? { seed: opts.seed } : {}),
    }),
  },
  {
    id: "seedance2",
    endpoint: "fal-ai/bytedance/seedance-2.0/fast/text-to-video",
    label: "Seedance 2.0 Fast (Best value)",
    blurb: "Sharper motion and detail, strong value option.",
    pricePer5s: "~$0.30",
    buildInput: (prompt, opts) => ({
      prompt,
      aspect_ratio: opts.aspectRatio,
      resolution: opts.resolution === "1080p" ? "720p" : opts.resolution,
      duration: String(clampDuration(opts.duration, 4, 15)),
      ...(opts.seed !== undefined ? { seed: opts.seed } : {}),
    }),
  },
  {
    id: "kling",
    endpoint: "fal-ai/kling-video/v2.6/pro/text-to-video",
    label: "Kling 2.6 Pro (Premium)",
    blurb: "Top-tier cinematic motion output.",
    pricePer5s: "~$0.50",
    buildInput: (prompt, opts) => ({
      prompt,
      duration: clampDuration(opts.duration, 5, 10) >= 8 ? "10" : "5",
      aspect_ratio: opts.aspectRatio,
      negative_prompt:
        "blur, distort, low quality, deformed, disfigured, bad anatomy, watermark, text, jitter, flicker",
      cfg_scale: 0.5,
    }),
  },
];

function clampDuration(d: number, min: number, max: number) {
  return Math.min(Math.max(Math.round(d) || min, min), max);
}

function extractUrl(data: unknown): string | null {
  if (!data || typeof data !== "object") return null;
  const d = data as Record<string, unknown>;
  const video = d.video as Record<string, unknown> | undefined;
  if (video && typeof video.url === "string") return video.url;
  if (typeof d.url === "string") return d.url;
  const videos = d.videos as Array<Record<string, unknown>> | undefined;
  if (Array.isArray(videos) && videos[0] && typeof videos[0].url === "string") {
    return videos[0].url as string;
  }
  return null;
}

function describeError(err: unknown): string {
  const msg = err instanceof Error ? err.message : String(err);
  const status = (err as { status?: number })?.status;
  if (status === 401 || /unauthorized|invalid.*key|forbidden/i.test(msg)) {
    return "fal.ai rejected your API key. Check FAL_KEY.";
  }
  if (status === 402 || /payment|insufficient|balance|credit/i.test(msg)) {
    return "Out of fal.ai credit. Top up your balance.";
  }
  if (status === 429 || /rate.?limit|too many/i.test(msg)) {
    return "Rate limited by fal.ai. Try again shortly.";
  }
  if (/timeout|timed out|ECONNRESET|ETIMEDOUT/i.test(msg)) {
    return "Model timeout. Try again or pick a faster model.";
  }
  return msg;
}

function dimsFor(ratio: AspectRatio, res: Resolution) {
  const longEdge = res === "1080p" ? 1920 : res === "480p" ? 854 : 1280;
  const shortEdge = res === "1080p" ? 1080 : res === "480p" ? 480 : 720;
  switch (ratio) {
    case "9:16":
      return { w: shortEdge, h: longEdge };
    case "1:1":
      return { w: shortEdge, h: shortEdge };
    case "16:9":
    default:
      return { w: longEdge, h: shortEdge };
  }
}

async function isAuthorized() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  return Boolean(sessionToken && verifyAdminSessionToken(sessionToken));
}

export async function POST(req: NextRequest) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: {
    prompt?: string;
    duration?: number;
    aspectRatio?: AspectRatio;
    resolution?: Resolution;
    seed?: number;
    model?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const prompt = body.prompt?.trim();
  if (!prompt) return NextResponse.json({ error: "Please describe your video" }, { status: 400 });

  const falKey = getFalKey();
  if (!falKey) {
    return NextResponse.json(
      {
        ok: false,
        needsKey: true,
        error: falKeySetupMessage(),
        keySetupUrl: "https://fal.ai/dashboard/keys",
        onVercel: Boolean(process.env.VERCEL),
      },
      { status: 401 },
    );
  }

  fal.config({ credentials: falKey });

  const opts: GenOpts = {
    duration: clampDuration(Number(body.duration) || 5, 2, 12),
    aspectRatio: (["16:9", "9:16", "1:1"] as const).includes(body.aspectRatio as AspectRatio)
      ? (body.aspectRatio as AspectRatio)
      : "16:9",
    resolution: (["480p", "720p", "1080p"] as const).includes(body.resolution as Resolution)
      ? (body.resolution as Resolution)
      : "720p",
    seed: Number.isFinite(body.seed) ? Number(body.seed) : undefined,
  };

  const chosen = MODELS.find((m) => m.id === body.model || m.endpoint === body.model);
  const order = chosen ? [chosen, ...MODELS.filter((m) => m !== chosen)] : MODELS;
  const attempts: { id: string; label: string; error: string }[] = [];

  for (const model of order) {
    try {
      const result = await fal.subscribe(model.endpoint, {
        input: model.buildInput(prompt, opts),
        logs: false,
      });

      const videoUrl = extractUrl(result.data);
      if (!videoUrl) {
        attempts.push({ id: model.id, label: model.label, error: "No video URL in response" });
        continue;
      }

      const seed = (result.data as { seed?: number })?.seed ?? opts.seed ?? 0;
      return NextResponse.json({
        ok: true,
        videoUrl,
        source: { id: model.id, label: model.label },
        meta: {
          prompt,
          duration: opts.duration,
          width: dimsFor(opts.aspectRatio, opts.resolution).w,
          height: dimsFor(opts.aspectRatio, opts.resolution).h,
          seed,
        },
        attempts,
      });
    } catch (err) {
      const friendly = describeError(err);
      attempts.push({ id: model.id, label: model.label, error: friendly });
      if (/API key|credit|Top up/i.test(friendly)) break;
    }
  }

  return NextResponse.json(
    {
      ok: false,
      error: attempts[0]?.error || "Video generation failed. Please try again.",
      attempts,
    },
    { status: 503 },
  );
}

export async function GET() {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    models: MODELS.map((m) => ({
      id: m.id,
      label: m.label,
      blurb: m.blurb,
      pricePer5s: m.pricePer5s,
    })),
    hasKey: Boolean(getFalKey()),
    keySetupUrl: "https://fal.ai/dashboard/keys",
    onVercel: Boolean(process.env.VERCEL),
    setupHint: getFalKey() ? undefined : falKeySetupMessage(),
  });
}
