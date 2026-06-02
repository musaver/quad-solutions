/**
 * Resolve fal.ai API credentials from server environment.
 * Supports FAL_KEY and FAL_API_KEY.
 */
export function getFalKey(): string | undefined {
  const raw = process.env.FAL_KEY ?? process.env.FAL_API_KEY;
  if (!raw) return undefined;
  const trimmed = raw.trim();
  if (!trimmed) return undefined;
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim() || undefined;
  }
  return trimmed;
}

export function falKeySetupMessage(): string {
  if (process.env.VERCEL) {
    return "FAL_KEY is not set on Vercel. Add it in Project Settings > Environment Variables, then redeploy.";
  }
  return "FAL_KEY is not loaded. Add it in .env.local and restart npm run dev.";
}
