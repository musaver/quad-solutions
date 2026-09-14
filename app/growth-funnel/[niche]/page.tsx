import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NicheFunnelPageBody } from "@/components/NicheFunnelPageBody";
import { NICHE_FUNNELS, getNicheFunnel } from "@/lib/growthFunnelNiches";
import "../growth-funnel-page.css";

type Params = { niche: string };

/** Prerenders every niche at build time — required for the static Pages export. */
export function generateStaticParams(): Params[] {
  return NICHE_FUNNELS.map(({ slug }) => ({ niche: slug }));
}

/** Anything outside `generateStaticParams` is a 404 rather than an on-demand render. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { niche: slug } = await params;
  const niche = getNicheFunnel(slug);
  if (!niche) return {};

  return {
    title: niche.metaTitle,
    description: niche.metaDescription,
    alternates: { canonical: `/growth-funnel/${niche.slug}` },
  };
}

export default async function NicheGrowthFunnelPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { niche: slug } = await params;
  const niche = getNicheFunnel(slug);
  if (!niche) notFound();

  return <NicheFunnelPageBody niche={niche} />;
}
