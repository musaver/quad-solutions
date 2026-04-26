"use client";

import type { KeyboardEvent } from "react";
import { useId, useLayoutEffect, useState } from "react";

const QUOTE_ICON = "/assets/figma-services/quote-icon.svg";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
  iconWrapBg: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "QUAD Solutions transformed our single-product brand into a market leader. By combining cultural insights with technical ad optimization, they scaled our orders by 26× and helped us hit $50K+ in monthly revenue.",
    name: "MexiVida",
    role: "E-commerce Brand",
    initials: "MV",
    avatarBg: "rgba(73,40,253,0.12)",
    avatarColor: "#4928fd",
    iconWrapBg: "rgba(73, 40, 253, 0.12)",
  },
  {
    quote:
      "By combining UGC marketing and data-driven ads, they turned our startup into a UAE fashion powerhouse. We saw a 4× improvement in conversion rates and hit $80K+ in monthly sales from a standing start.",
    name: "Heyam.ae",
    role: "Luxury Fashion (UAE)",
    initials: "HA",
    avatarBg: "rgba(186,129,238,0.15)",
    avatarColor: "#ba81ee",
    iconWrapBg: "rgba(186, 129, 238, 0.15)",
  },
  {
    quote:
      "We went from struggling to get foot traffic to having 100% of our appointment slots filled every week. Their hyper-local ad strategy paved the way for us to open our second location.",
    name: "Blends Barbershop",
    role: "Local Business (Australia)",
    initials: "BB",
    avatarBg: "rgba(255,175,104,0.15)",
    avatarColor: "#ea580c",
    iconWrapBg: "rgba(255, 175, 104, 0.15)",
  },
  {
    quote:
      "They didn't just generate leads; they generated high-intent appointments. Their service-specific funnels increased our lead-to-appointment conversion rate by 3.2× across 15 different service lines.",
    name: "US Home Services",
    role: "Lead Generation",
    initials: "HS",
    avatarBg: "rgba(121,212,94,0.2)",
    avatarColor: "#79d45e",
    iconWrapBg: "rgba(121, 212, 94, 0.15)",
  },
];

export function ServicesTestimonials() {
  const [active, setActive] = useState(0);
  const headingId = useId();
  const panelId = useId();
  const tabPrefix = useId();
  const n = TESTIMONIALS.length;

  const tabId = (i: number) => `${tabPrefix}${i}`;

  useLayoutEffect(() => {
    const tabs = TESTIMONIALS.map((_, i) =>
      document.getElementById(tabId(i)),
    );
    const el = document.activeElement;
    if (!tabs.some((node) => node === el)) return;
    document.getElementById(tabId(active))?.focus();
  }, [active, tabPrefix]);

  const onDotsKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % n);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + n) % n);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(n - 1);
    }
  };

  const t = TESTIMONIALS[active];

  return (
    <section
      className="qs-testimonials-section"
      aria-labelledby={headingId}
    >
      <div className="qs-inner">
        <div className="qs-testimonials-top">
          <div>
            <h2 className="home-heading-h2 qs-h2" id={headingId}>
              Clients who <span className="span-txt">trust us</span>
            </h2>
            <p className="qs-services-lede" style={{ marginTop: 16 }}>
              Real words from real clients — brands who invested in their
              identity and got back more than they expected.
            </p>
          </div>
          <div
            className="qs-dots"
            role="tablist"
            aria-label="Choose testimonial"
            onKeyDown={onDotsKeyDown}
          >
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                id={tabId(i)}
                aria-selected={active === i}
                aria-controls={panelId}
                tabIndex={active === i ? 0 : -1}
                aria-label={`${item.name}, testimonial ${i + 1} of ${n}`}
                className={`qs-dot${active === i ? " is-active" : ""}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>

        <div className="qs-testimonial-layout">
          <div
            className="qs-testimonial-feature"
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId(active)}
          >
            <div
              className="qs-quote-icon-wrap"
              style={{ background: t.iconWrapBg }}
            >
              <img src={QUOTE_ICON} alt="" />
            </div>
            <p className="qs-quote-text">&ldquo;{t.quote}&rdquo;</p>
            <div className="qs-testimonial-author">
              <div
                className="qs-avatar"
                style={{ background: t.avatarBg, color: t.avatarColor }}
              >
                {t.initials}
              </div>
              <div>
                <p className="qs-author-name">{t.name}</p>
                <p className="qs-author-role">{t.role}</p>
              </div>
            </div>
          </div>

          <div
            className="qs-testimonial-stack"
            role="group"
            aria-label="All testimonials"
          >
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.name}
                type="button"
                className={`qs-testimonial-mini${active === i ? " is-active" : ""}`}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
              >
                <p className="qs-mini-quote">&ldquo;{item.quote}&rdquo;</p>
                <div className="qs-mini-meta">
                  <div
                    className="qs-mini-avatar"
                    style={{
                      background: item.avatarBg,
                      color: item.avatarColor,
                    }}
                  >
                    {item.initials}
                  </div>
                  <p className="qs-mini-name">{item.name}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
