"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowIcon } from "@/components/GrowthFunnelIcons";
import { NICHE_FUNNELS } from "@/lib/growthFunnelNiches";

/**
 * Animated niche picker on `/growth-funnel`.
 *
 * Cards stagger into view once the grid scrolls into the viewport. The reveal is
 * driven by a single IntersectionObserver on the grid (not one per card) and the
 * per-card delay comes from the `--gf-niche-i` custom property, so the animation
 * stays entirely in CSS and costs nothing on the main thread.
 */
export function GrowthFunnelNicheCards() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    // Nothing to subscribe to without IntersectionObserver — reveal on the next
    // frame so the cards never sit permanently hidden.
    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setRevealed(true));
      return () => cancelAnimationFrame(frame);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="gf-section gf-section--niches" id="niches">
      <div className="gf-inner">
        <p className="gf-eyebrow">Built for your industry</p>
        <h2 className="gf-h2">Pick the funnel built for your business</h2>
        <p className="gf-lede">
          The platform is the same. The funnel isn&rsquo;t. Choose your industry to see the pages,
          automations and follow-up sequences we set up for businesses exactly like yours.
        </p>

        <div
          ref={gridRef}
          className={`gf-niches${revealed ? " gf-niches--in" : ""}`}
        >
          {NICHE_FUNNELS.map((niche, i) => (
            <Link
              key={niche.slug}
              href={`/growth-funnel/${niche.slug}`}
              className="gf-niche"
              style={
                {
                  "--gf-niche-a": niche.accent[0],
                  "--gf-niche-b": niche.accent[1],
                  "--gf-niche-i": i,
                } as CSSProperties
              }
            >
              <span className="gf-niche-glow" aria-hidden="true" />
              <span className="gf-niche-icon" aria-hidden="true">
                {niche.icon}
              </span>
              <h3 className="gf-niche-title">{niche.name}</h3>
              <p className="gf-niche-text">{niche.tagline}</p>
              <span className="gf-niche-points">
                {niche.cardPoints.map((point) => (
                  <span className="gf-niche-point" key={point}>
                    {point}
                  </span>
                ))}
              </span>
              <span className="gf-niche-cta">
                See the funnel
                <ArrowIcon />
              </span>
            </Link>
          ))}

          <div className="gf-niche gf-niche--ask">
            <span className="gf-niche-icon" aria-hidden="true">
              💬
            </span>
            <h3 className="gf-niche-title">Not on the list?</h3>
            <p className="gf-niche-text">
              We build the same system for any business with a sales pipeline. Tell us what you do
              and we&rsquo;ll map the funnel around it.
            </p>
            <a className="gf-niche-cta gf-niche-cta--link" href="#free-trial">
              Talk to a specialist
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
