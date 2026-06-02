import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SESSION_COOKIE_NAME, verifyAdminSessionToken } from "@/lib/admin-session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_HOSTS = [
  "image.pollinations.ai",
  "pollinations.ai",
  "stablehorde.net",
  "r2.stablehorde.net",
  "blob.vercel-storage.com",
  "hf.space",
  "huggingface.co",
  "fal.media",
  "fal.run",
  "fal.ai",
];

function isAllowed(host: string): boolean {
  return ALLOWED_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
}

async function isAuthorized() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  return Boolean(sessionToken && verifyAdminSessionToken(sessionToken));
}

export async function GET(req: NextRequest) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const target = req.nextUrl.searchParams.get("url");
  if (!target) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(target);
  } catch {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }

  if (parsed.protocol !== "https:" || !isAllowed(parsed.hostname)) {
    return NextResponse.json({ error: "Host not allowed" }, { status: 403 });
  }

  try {
    const res = await fetch(parsed.toString(), { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json({ error: `Upstream ${res.status}` }, { status: 502 });
    }
    const buf = await res.arrayBuffer();
    return new NextResponse(new Uint8Array(buf) as unknown as BodyInit, {
      headers: {
        "Content-Type": res.headers.get("content-type") || "application/octet-stream",
        "Cache-Control": "public, max-age=3600",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Proxy failed" },
      { status: 502 },
    );
  }
}
