export const DEFAULT_SERVICE_SLUG = "brand-strategy";

/** Serif accent line in service details hero: “Transform your brand with ___”. */
export const SERVICE_HERO_SERIF: Record<string, string> = {
  "brand-strategy": "expert strategy",
  "brand-identity": "bold identity",
  "ui-ux-design": "thoughtful UX",
  "content-strategy": "clear storytelling",
  marketing: "measurable growth",
  "web-design": "standout digital",
  "digital-marketing": "digital growth",
  "motion-design": "motion that moves",
};

export function getServiceHeroSerif(slug: string | null | undefined): string {
  const key = (slug ?? DEFAULT_SERVICE_SLUG).toLowerCase().trim();
  return SERVICE_HERO_SERIF[key] ?? SERVICE_HERO_SERIF[DEFAULT_SERVICE_SLUG];
}
