"use client";

import { useEffect, useMemo, useState } from "react";

type AiAspectRatio = "16:9" | "9:16" | "1:1";
type AiResolution = "480p" | "720p" | "1080p";

type T2VModel = {
  id: string;
  label: string;
  blurb: string;
  pricePer5s: string;
};

type FalCredits = {
  balance: number;
  currency: string;
  formatted: string;
  username?: string;
};

type T2VStatus = {
  models: T2VModel[];
  hasKey: boolean;
  credits: FalCredits | { error: string } | null;
  keySetupUrl: string;
  billingUrl?: string;
  onVercel?: boolean;
  setupHint?: string;
};

type AiVideoResult = {
  videoUrl: string;
  source: { id: string; label: string };
  meta: { prompt: string; duration: number; width: number; height: number; seed: number };
};

type Attempt = {
  id: string;
  label: string;
  error: string;
};

const VIDEO_PROMPT_IDEAS = [
  "A spaceship flying through a colorful nebula, deep space, cinematic",
  "Time-lapse of a city from day to night, neon lights coming alive",
  "A peaceful waterfall in a tropical jungle, golden hour, mist rising",
  "A futuristic robot walking through a cyberpunk market, rain, neon",
  "Drone shot soaring over snowy mountains at sunrise, epic landscape",
  "A small wooden boat sailing on calm ocean under starry sky",
  "Magical forest with glowing fireflies and ancient trees, fantasy",
  "Modern luxury sports car driving down a coastal road at sunset",
];

export function VideoGeneratorOptionsPanel() {
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiDuration, setAiDuration] = useState(5);
  const [aiAspect, setAiAspect] = useState<AiAspectRatio>("16:9");
  const [aiResolution, setAiResolution] = useState<AiResolution>("720p");
  const [aiModel, setAiModel] = useState<string>("");
  const [aiModels, setAiModels] = useState<T2VModel[]>([]);
  const [aiHasKey, setAiHasKey] = useState<boolean | null>(null);
  const [aiCredits, setAiCredits] = useState<FalCredits | null>(null);
  const [aiCreditsError, setAiCreditsError] = useState<string | null>(null);
  const [aiBillingUrl, setAiBillingUrl] = useState("https://fal.ai/dashboard/billing");
  const [aiKeySetupUrl, setAiKeySetupUrl] = useState("https://fal.ai/dashboard/keys");
  const [aiKeySetupHint, setAiKeySetupHint] = useState<string | null>(null);
  const [aiOnVercel, setAiOnVercel] = useState(false);
  const [aiStatus, setAiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [aiAttempts, setAiAttempts] = useState<Attempt[]>([]);
  const [aiGenerating, setAiGenerating] = useState(false);
  const [aiResult, setAiResult] = useState<AiVideoResult | null>(null);

  useEffect(() => {
    let alive = true;

    const applyStatus = (data: T2VStatus) => {
      if (Array.isArray(data.models)) setAiModels(data.models);
      if (typeof data.hasKey === "boolean") setAiHasKey(data.hasKey);
      if (data.keySetupUrl) setAiKeySetupUrl(data.keySetupUrl);
      if (data.billingUrl) setAiBillingUrl(data.billingUrl);
      setAiOnVercel(Boolean(data.onVercel));
      setAiKeySetupHint(data.setupHint ?? null);

      if (data.credits && "balance" in data.credits) {
        setAiCredits(data.credits);
        setAiCreditsError(null);
      } else if (data.credits && "error" in data.credits) {
        setAiCredits(null);
        setAiCreditsError(data.credits.error);
      } else {
        setAiCredits(null);
        setAiCreditsError(null);
      }
    };

    const loadStatus = async () => {
      try {
        const res = await fetch("/api/admin/ai-studio/text-to-video", { credentials: "include" });
        const data = (await res.json()) as T2VStatus;
        if (!alive) return;
        applyStatus(data);
      } catch {
        if (alive) setErrorMessage("Could not load AI video model status.");
      }
    };

    void loadStatus();
    return () => {
      alive = false;
    };
  }, []);

  const selectedModelLabel = useMemo(() => {
    if (!aiModel) return "Auto";
    return aiModels.find((m) => m.id === aiModel)?.label ?? "Auto";
  }, [aiModel, aiModels]);

  const handleGenerate = async () => {
    if (!aiPrompt.trim()) {
      setErrorMessage("Please describe your video first.");
      return;
    }

    setAiGenerating(true);
    setErrorMessage(null);
    setAiResult(null);
    setAiAttempts([]);
    setAiStatus("Sending prompt to fal.ai...");

    const statuses = [
      "Sending prompt to fal.ai...",
      "Queuing on model...",
      "Generating frames...",
      "Adding motion details...",
      "Encoding video...",
      "Almost done...",
    ];
    let statusIdx = 0;
    const statusTimer = window.setInterval(() => {
      statusIdx = Math.min(statusIdx + 1, statuses.length - 1);
      setAiStatus(statuses[statusIdx]);
    }, 5000);

    try {
      const res = await fetch("/api/admin/ai-studio/text-to-video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          prompt: aiPrompt.trim(),
          duration: aiDuration,
          aspectRatio: aiAspect,
          resolution: aiResolution,
          model: aiModel || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        if (Array.isArray(data.attempts)) setAiAttempts(data.attempts as Attempt[]);
        if (data.needsKey) {
          setAiHasKey(false);
          if (data.error) setAiKeySetupHint(data.error);
          if (typeof data.onVercel === "boolean") setAiOnVercel(data.onVercel);
        }
        throw new Error(data.error || `Video generation failed (${res.status})`);
      }
      setAiResult(data as AiVideoResult);
      setAiAttempts((data.attempts as Attempt[]) || []);
      setAiStatus("");

      try {
        const statusRes = await fetch("/api/admin/ai-studio/text-to-video", {
          credentials: "include",
        });
        const statusData = (await statusRes.json()) as T2VStatus;
        if (statusData.credits && "balance" in statusData.credits) {
          setAiCredits(statusData.credits);
          setAiCreditsError(null);
        }
      } catch {
        // Non-blocking refresh after generation.
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Video generation failed.");
      setAiStatus("");
    } finally {
      window.clearInterval(statusTimer);
      setAiGenerating(false);
    }
  };

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[420px_1fr]">
      <div className="h-fit rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-violet-700">
            Premium
          </span>
          <span className="inline-flex rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
            Pay per clip
          </span>
          {aiCredits ? (
            <a
              href={aiBillingUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide transition hover:opacity-90 ${
                aiCredits.balance < 1
                  ? "bg-amber-100 text-amber-800"
                  : "bg-slate-100 text-slate-700"
              }`}
              title={
                aiCredits.username
                  ? `fal.ai account: ${aiCredits.username}`
                  : "fal.ai account balance"
              }
            >
              Credits: {aiCredits.formatted}
            </a>
          ) : aiCreditsError ? (
            <span className="inline-flex rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800">
              Credits unavailable
            </span>
          ) : null}
        </div>
        <h3 className="text-xl font-bold text-slate-900">Real AI Video Generator</h3>
        <p className="mt-1 text-xs text-slate-500">
          Generate real motion AI clips with model, resolution, and aspect control.
        </p>

        {aiHasKey === false && (
          <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-3">
            <p className="text-xs font-semibold text-amber-900">
              {aiOnVercel ? "FAL_KEY missing on Vercel" : "FAL_KEY not loaded in local env"}
            </p>
            {aiKeySetupHint && <p className="mt-1 text-xs text-amber-800">{aiKeySetupHint}</p>}
            <a
              href={aiKeySetupUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-xs font-semibold text-amber-900 underline"
            >
              Open fal.ai keys
            </a>
          </div>
        )}

        {errorMessage && (
          <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700">
            {errorMessage}
          </div>
        )}

        <label className="mt-5 block text-sm font-semibold text-slate-800">Describe your video</label>
        <textarea
          value={aiPrompt}
          onChange={(e) => setAiPrompt(e.target.value)}
          rows={5}
          placeholder="A red sports car driving through a neon-lit cyberpunk city at night, rain falling, cinematic camera tracking shot"
          className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
        />
        <button
          type="button"
          onClick={() => setAiPrompt(VIDEO_PROMPT_IDEAS[Math.floor(Math.random() * VIDEO_PROMPT_IDEAS.length)])}
          className="mt-2 inline-flex items-center rounded-lg border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 transition hover:border-violet-300 hover:bg-violet-100"
        >
          ✨ Surprise me
        </button>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-semibold text-slate-800">
            Duration: {aiDuration}s
          </label>
          <input
            type="range"
            min={2}
            max={10}
            step={1}
            value={aiDuration}
            onChange={(e) => setAiDuration(Number(e.target.value))}
            className="w-full accent-violet-600"
          />
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-sm font-semibold text-slate-800">Aspect</label>
          <div className="grid grid-cols-3 gap-2">
            {(["16:9", "9:16", "1:1"] as const).map((aspect) => (
              <button
                type="button"
                key={aspect}
                onClick={() => setAiAspect(aspect)}
                className={`rounded-xl border-2 py-2.5 text-xs font-semibold shadow-sm transition ${
                  aiAspect === aspect
                    ? "border-violet-500 bg-violet-50 text-violet-700"
                    : "border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {aspect === "16:9" ? "Landscape" : aspect === "9:16" ? "Portrait" : "Square"}
                <div className="text-[10px] font-normal text-slate-400">{aspect}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-sm font-semibold text-slate-800">Resolution</label>
          <div className="grid grid-cols-3 gap-2">
            {(["480p", "720p", "1080p"] as const).map((resolution) => (
              <button
                type="button"
                key={resolution}
                onClick={() => setAiResolution(resolution)}
                className={`rounded-xl border-2 py-2 text-xs font-semibold shadow-sm transition ${
                  aiResolution === resolution
                    ? "border-violet-500 bg-violet-50 text-violet-700"
                    : "border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {resolution}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-sm font-semibold text-slate-800">Model</label>
          <div className="space-y-1.5 grid gap-[28px] mb-[28px]">
            <button
              type="button"
              onClick={() => setAiModel("")}
              className={`w-full rounded-lg border-2 px-3 py-2 text-left shadow-sm transition ${
                aiModel === ""
                  ? "border-violet-500 bg-violet-50"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <span className="text-sm font-medium text-slate-900">Auto (best value first)</span>
            </button>
            {aiModels.map((model) => (
              <button
                type="button"
                key={model.id}
                onClick={() => setAiModel(model.id)}
                className={`w-full rounded-lg border-2 px-3 py-2 text-left shadow-sm transition ${
                  aiModel === model.id
                    ? "border-violet-500 bg-violet-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-900">{model.label}</span>
                  <span className="text-[10px] font-semibold text-emerald-600">{model.pricePer5s}</span>
                </div>
                <p className="mt-0.5 text-[10px] text-slate-400">{model.blurb}</p>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={aiGenerating}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 py-3.5 font-bold text-white shadow-lg transition disabled:opacity-60"
        >
          {aiGenerating ? "Generating..." : "🎬 Generate Video"}
        </button>
      </div>

      <div>
        <div className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-violet-900 p-10 text-center text-white shadow-2xl">
          {!aiResult && !aiGenerating ? (
            <>
              <div className="mb-6 text-7xl">🎥</div>
              <h3 className="mb-3 text-3xl font-bold">Ready to Generate</h3>
              <p className="max-w-lg leading-relaxed text-slate-300">
                Enter a prompt and generate your AI video. The output player appears here.
              </p>
              <div className="mt-6 rounded-xl bg-white/10 px-4 py-3 text-sm">
                Selected: {aiDuration}s • {aiAspect} • {aiResolution} • {selectedModelLabel}
              </div>
            </>
          ) : aiGenerating ? (
            <>
              <div className="mb-6 h-20 w-20 animate-spin rounded-full border-4 border-white/20 border-t-white" />
              <h3 className="mb-2 text-2xl font-bold">{aiStatus || "Generating your video..."}</h3>
              <p className="max-w-lg text-sm text-slate-300">This usually takes 20s to 2 minutes.</p>
              {aiAttempts.length > 0 && (
                <div className="mt-3 w-full max-w-lg space-y-1">
                  {aiAttempts.map((attempt, idx) => (
                    <div key={`${attempt.id}-${idx}`} className="rounded bg-rose-900/40 px-2 py-1 text-left text-xs">
                      {attempt.label}: {attempt.error}
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : aiResult ? (
            <div className="w-full rounded-2xl bg-white p-4 text-slate-900">
              <video
                src={
                  aiResult.videoUrl.startsWith("http")
                    ? `/api/admin/ai-studio/proxy?url=${encodeURIComponent(aiResult.videoUrl)}`
                    : aiResult.videoUrl
                }
                controls
                autoPlay
                loop
                className="max-h-[520px] w-full rounded-xl bg-black"
              />
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
                <div className="rounded-lg bg-slate-100 px-2 py-1.5">Duration: {aiResult.meta.duration}s</div>
                <div className="rounded-lg bg-slate-100 px-2 py-1.5">
                  Size: {aiResult.meta.width}x{aiResult.meta.height}
                </div>
                <div className="rounded-lg bg-slate-100 px-2 py-1.5">Seed: {aiResult.meta.seed}</div>
                <div className="rounded-lg bg-slate-100 px-2 py-1.5">Model: {aiResult.source.label}</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
