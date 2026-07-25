/** Meta (Facebook) Pixel helpers. The pixel itself is mounted by `components/MetaPixel.tsx`. */

export const META_PIXEL_ID = "1672971480455601";

/**
 * Production only, so local form testing doesn't land in Events Manager as real leads.
 * Set `NEXT_PUBLIC_META_PIXEL_ENABLED=1` to opt a dev/preview build back in when you need
 * to verify events with the Pixel Helper. Both values are inlined at build time.
 */
export const META_PIXEL_ENABLED =
  process.env.NODE_ENV === "production" ||
  process.env.NEXT_PUBLIC_META_PIXEL_ENABLED === "1";

type Fbq = (...args: unknown[]) => void;
type PixelWindow = Window & { fbq?: Fbq };

/**
 * `fbq` is a queueing stub from the moment the base snippet runs, so calls made before
 * `fbevents.js` finishes downloading are replayed once it loads. When the pixel is blocked
 * outright (ad blockers, `beforeInteractive` never reached) `fbq` is undefined and this no-ops.
 */
function fbq(): Fbq | undefined {
  if (!META_PIXEL_ENABLED || typeof window === "undefined") return undefined;
  return (window as PixelWindow).fbq;
}

/** Send one of Meta's standard events (PageView, Lead, Contact, …). */
export function trackPixelEvent(
  event: string,
  params?: Record<string, unknown>,
) {
  fbq()?.("track", event, params);
}

/** Send a custom (non-standard) event. Must be created manually in Events Manager to be usable. */
export function trackPixelCustom(
  event: string,
  params?: Record<string, unknown>,
) {
  fbq()?.("trackCustom", event, params);
}

/** Drops empty strings/arrays so the pixel payload stays clean in Events Manager. */
export function leadParams(input: {
  formName: string;
  services?: string[];
  budget?: string;
}): Record<string, unknown> {
  const params: Record<string, unknown> = { content_name: input.formName };
  if (input.services?.length) params.content_category = input.services.join(", ");
  if (input.budget) params.budget = input.budget;
  return params;
}
