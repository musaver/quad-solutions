"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { useSearchParams } from "next/navigation";
import { TemplateFooter } from "@/components/TemplateFooter";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { ServiceArrowIcon } from "@/components/ServiceArrowIcon";
import {
  getServiceDetailsContent,
  type HeadingPair,
  type ServiceDetailsContent,
} from "@/lib/serviceDetailsContent";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

const TEAM = "/assets/figma-service-details";

function ListIconX() {
  return (
    <svg width="14" height="14" viewBox="0 0 9 9" fill="none" aria-hidden>
      <path
        d="M2 2L7 7M7 2L2 7"
        stroke="#b91c1c"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ListIconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 9 9" fill="none" aria-hidden>
      <path
        d="M1.5 4.5L3.5 6.5L7.5 2.5"
        stroke="#4928fd"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FinalCtaPhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10.853 9.56c.184.367.072.816-.25 1.138l-.354.354a8 8 0 01-8.485 0 8 8 0 010-11.314l.354-.354c.322-.322.77-.434 1.138-.25l1.414.707c.276.138.456.414.456.728v1.638a.727.727 0 01-.213.514L4.12 4.707a5.818 5.818 0 005.172 5.172l.232-.232a.727.727 0 01.514-.213h1.638c.314 0 .59.18.728.456l.707 1.414z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FinalCtaMailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FinalCtaLockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4.083 6.417V4.083a2.917 2.917 0 015.834 0v2.334M3.5 6.417h7a1.167 1.167 0 011.167 1.166v4.667A1.167 1.167 0 0110.5 13.417h-7a1.167 1.167 0 01-1.167-1.167V7.583A1.167 1.167 0 013.5 6.417z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function renderDeliverableIcon(n: string) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (n) {
    case "01":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="8" cy="10" r="1" fill="currentColor" />
          <circle cx="12" cy="7.5" r="1" fill="currentColor" />
          <circle cx="16" cy="10" r="1" fill="currentColor" />
          <path d="M12 21a3 3 0 0 1 0-6 1.5 1.5 0 0 0 0-3" />
        </svg>
      );
    case "02":
      return (
        <svg {...common}>
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5z" />
          <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v4H6.5A2.5 2.5 0 0 1 4 19.5" />
        </svg>
      );
    case "03":
      return (
        <svg {...common}>
          <path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1z" />
          <path d="M17 9a3 3 0 0 1 0 6" />
        </svg>
      );
    case "04":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      );
    case "05":
      return (
        <svg {...common}>
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      );
    case "06":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="m4.9 4.9 4.6 4.6M14.5 14.5l4.6 4.6M4.9 19.1l4.6-4.6M14.5 9.5l4.6-4.6" />
        </svg>
      );
    default:
      return null;
  }
}

function renderHeadingPair(h: HeadingPair) {
  return (
    <>
      {renderWithBreaks(h.prefix)}
      <span className="qs-sd-serif">{h.serif}</span>
      {h.suffix ? renderWithBreaks(h.suffix) : null}
    </>
  );
}

function renderWithBreaks(text: string) {
  const parts = text.split("\n");
  return parts.map((p, i) => (
    <Fragment key={i}>
      {i > 0 ? <br /> : null}
      {p}
    </Fragment>
  ));
}

type ServiceDetailsPageBodyProps = {
  slug?: string;
};

export function ServiceDetailsPageBody({ slug }: ServiceDetailsPageBodyProps = {}) {
  const searchParams = useSearchParams();
  const effectiveSlug = slug ?? searchParams.get("service");
  const content = getServiceDetailsContent(effectiveSlug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const heroRef = useHeroAnimation();

  const testimonialVariantClass: Record<string, string> = {
    dark: "is-dark",
    cream: "is-cream",
    sky: "is-sky",
  };

  return (
    <div className="main qs-sd-page">
      <div className="gradient-background" />
      <TemplateNavbar />

      <header className="qs-sd-hero">
        <div className="qs-inner qs-sd-hero-inner">
          <h1 ref={heroRef} className="qs-sd-hero-title-block">
            <span className="qs-sd-hero-line1">{content.hero.line1}</span>
            <span className="qs-sd-hero-line2">
              {content.hero.line2Prefix}
              <span className="qs-sd-serif">{content.hero.serif}</span>
            </span>
          </h1>
          <p className="qs-sd-hero-lede">{content.hero.lede}</p>
          <div className="qs-sd-hero-actions">
            <Link
              href={content.hero.primary.href}
              className="qs-sd-btn-primary-lg w-inline-block"
            >
              {content.hero.primary.label}
              <span className="qs-sd-icon-circle" aria-hidden>
                <ServiceArrowIcon variant="on-light" />
              </span>
            </Link>
            {content.hero.secondary ? (
              <Link
                href={content.hero.secondary.href}
                className="qs-sd-btn-dark-outline w-inline-block"
              >
                {content.hero.secondary.label}
                <span className="qs-sd-icon-circle-sm" aria-hidden>
                  <ServiceArrowIcon variant="on-light" />
                </span>
              </Link>
            ) : null}
          </div>
        </div>
      </header>

      <section className="qs-sd-section">
        <div className="qs-inner qs-sd-split">
          <div>
            <div className="qs-sd-kicker">
              <span className="qs-sd-kicker-bar is-pink" aria-hidden />
              <span>{content.challenge.kicker}</span>
            </div>
            <h2>{renderHeadingPair(content.challenge.heading)}</h2>
            <p className="qs-sd-prose">{content.challenge.prose}</p>
            <div className="qs-sd-list-card is-challenge">
              <h3>{content.challenge.listTitle}</h3>
              {content.challenge.items.map((t) => (
                <div key={t} className="qs-sd-list-row">
                  <span className="qs-sd-list-icon is-x" aria-hidden>
                    <ListIconX />
                  </span>
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="qs-sd-kicker">
              <span className="qs-sd-kicker-bar is-purple" aria-hidden />
              <span>{content.approach.kicker}</span>
            </div>
            <h2>{renderHeadingPair(content.approach.heading)}</h2>
            <p className="qs-sd-prose">{content.approach.prose}</p>
            <div className="qs-sd-list-card is-approach">
              <h3>{content.approach.listTitle}</h3>
              {content.approach.items.map((t) => (
                <div key={t} className="qs-sd-list-row">
                  <span className="qs-sd-list-icon is-check" aria-hidden>
                    <ListIconCheck />
                  </span>
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="qs-sd-team-section">
        <div className="qs-inner">
          <div className="qs-sd-team-head">
            <h2>{renderHeadingPair(content.teamHeading)}</h2>
          </div>
          <div className="qs-sd-team-grid">
            {[
              { name: "Musawir", role: "CEO & Co-Founder", img: `${TEAM}/team-0.jpg` },
              {
                name: "Hamzah",
                role: "Business Operations & Co-Founder",
                img: `${TEAM}/team-1.jpg`,
              },
              { name: "Shabal", role: "Digital Manager", img: `${TEAM}/team-2.jpg` },
              { name: "Umer", role: "UI-UX Specialist", img: `${TEAM}/team-3.jpg` },
            ].map((m) => (
              <div key={m.name} className="qs-sd-team-card">
                <div className="qs-sd-team-photo">
                  <img src={m.img} alt="" width={400} height={500} />
                </div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="qs-sd-impact">
        <div className="qs-inner">
          <div className="qs-sd-impact-card">
            <div className="qs-sd-impact-inner">
              <div className="qs-sd-impact-copy">
                <h2>{renderHeadingPair(content.impact.heading)}</h2>
                <p>{content.impact.body}</p>
              </div>
              <div className="qs-sd-impact-side">
                <div className="qs-sd-impact-metrics">
                  {content.impact.metrics.map((m) => (
                    <div key={m.value}>
                      <strong>{m.value}</strong>
                      {m.labelLines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </div>
                  ))}
                </div>
                <Link
                  href={content.impact.link.href}
                  className="qs-sd-link-light w-inline-block"
                >
                  {content.impact.link.label}
                  <span className="qs-sd-icon-circle-sm" aria-hidden>
                    <ServiceArrowIcon variant="on-dark" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="qs-sd-deliverables">
        <div className="qs-inner">
          <div className="qs-sd-deliverables-head">
            <div>
              <h2>{renderHeadingPair(content.deliverables.heading)}</h2>
              <p>{content.deliverables.lede}</p>
            </div>
            <div className="qs-sd-pill-count">
              <strong>{content.deliverables.items.length}</strong>
              <span>{content.deliverables.pillLabel}</span>
            </div>
          </div>
          <div className="qs-sd-deliverables-grid">
            {content.deliverables.items.map((x) => (
              <div
                key={x.n}
                className="qs-sd-deliverable-card"
                style={{
                  background: x.bg,
                  borderColor: x.border,
                }}
              >
                <header>
                  <span className="num" style={{ color: x.num }}>
                    {x.n}
                  </span>
                  <span
                    className="arrow"
                    style={{ background: x.arrowBg, color: x.num }}
                    aria-hidden
                  >
                    {renderDeliverableIcon(x.n)}
                  </span>
                </header>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="qs-sd-process">
        <div className="qs-inner">
          <div className="qs-sd-process-head">
            <h2>{content.process.heading}</h2>
            <p>{content.process.lede}</p>
          </div>
          <div className="qs-sd-process-grid">
            {content.process.items.map((c) => (
              <div key={c.n} className="qs-sd-process-card">
                <div className="big-num">{c.n}</div>
                <h3>{c.t}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="qs-sd-foundations">
        <div className="qs-inner">
          <div className="qs-sd-foundations-cta">
            <p>{renderWithBreaks(content.foundations.text)}</p>
            <div className="qs-sd-foundations-btns">
              <Link href="/contact" className="qs-sd-link-light w-inline-block">
                Let&apos;s Collaborate
                <span className="qs-sd-icon-circle-sm" aria-hidden>
                  <ServiceArrowIcon variant="on-dark" />
                </span>
              </Link>
              <Link
                href="/case-studies"
                className="qs-sd-btn-dark-outline w-inline-block"
              >
                View Portfolio
                <span className="qs-sd-icon-circle-sm" aria-hidden>
                  <ServiceArrowIcon variant="on-light" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="qs-sd-work">
        <div className="qs-inner">
          <div className="qs-sd-work-head">
            <div>
              <h2>{renderHeadingPair(content.work.heading)}</h2>
              <p>{content.work.lede}</p>
            </div>
            <Link href="/case-studies" className="qs-sd-explore-all w-inline-block">
              <span>View All Work</span>
              <span className="qs-sd-explore-all-icon" aria-hidden>
                <ServiceArrowIcon variant="on-light" />
              </span>
            </Link>
          </div>
          <div className="qs-sd-work-grid">
            {content.work.cards.map((c) => (
              <Link
                key={c.title}
                href="/contact"
                className="qs-sd-work-card w-inline-block"
              >
                <div className="img">
                  <img src={c.img} alt="" width={800} height={520} />
                  <span className={`badge${c.badgeColor === "blue" ? " blue" : ""}`}>
                    {c.badge}
                  </span>
                </div>
                <div className="body">
                  <div className="row">
                    <div>
                      <h3>{c.title}</h3>
                      <p className="sub">{c.sub}</p>
                    </div>
                    <span className="qs-sd-arrow-36" aria-hidden>
                      <ServiceArrowIcon variant="on-light" />
                    </span>
                  </div>
                  <div className="qs-sd-work-tags">
                    {c.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="qs-sd-testimonials">
        <div className="qs-inner">
          <div className="qs-sd-testimonials-head">
            <h2>
              {content.testimonials.heading.prefix}
              <span className="qs-sd-serif">
                {content.testimonials.heading.serif}
              </span>
              {content.testimonials.heading.suffix
                ? renderWithBreaks(content.testimonials.heading.suffix)
                : null}
            </h2>
          </div>
          <div className="qs-sd-testimonial-grid">
            {content.testimonials.cards.map((t) => (
              <div
                key={t.name + t.role}
                className={`qs-sd-testimonial-card ${
                  testimonialVariantClass[t.variant]
                }`}
              >
                <p className="quote">&ldquo;{t.quote}&rdquo;</p>
                {t.stat ? (
                  <div className="qs-sd-testimonial-stat">
                    <strong>{t.stat.value}</strong>
                    <span>{t.stat.label}</span>
                  </div>
                ) : null}
                <div className="qs-sd-testimonial-author">
                  <div
                    className={`qs-sd-avatar${t.variant === "dark" ? " is-light" : ""}`}
                    aria-hidden
                  />
                  <div>
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="qs-sd-faq-wrap">
        <div className="qs-inner qs-sd-faq-split">
          <div className="qs-sd-faq-lede">
            <h2>{renderHeadingPair(content.faq.heading)}</h2>
            <p>{content.faq.lede}</p>
            <Link href="/contact" className="qs-sd-ask-btn w-inline-block">
              Ask us directly
              <span className="qs-sd-icon-circle-sm" aria-hidden>
                <ServiceArrowIcon variant="on-light" />
              </span>
            </Link>
            <div className="qs-sd-response">
              <span>Average response time</span>
              <strong>&lt; 4 hrs</strong>
              <span>During business hours, Mon–Fri</span>
            </div>
          </div>
          <div>
            {content.faq.items.map((item, i) => (
              <div key={item.q} className="qs-sd-faq-item">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {item.q}
                  <span aria-hidden>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i ? (
                  <div className="qs-sd-faq-panel">{item.a}</div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="qs-sd-explore">
        <div className="qs-inner">
          <div className="qs-sd-explore-head">
            <div>
              <h2 className="qs-sd-explore-title">
                {renderHeadingPair(content.explore.heading)}
              </h2>
              <p>{content.explore.lede}</p>
            </div>
            <Link href="/services" className="qs-sd-explore-all w-inline-block">
              <span>All Services</span>
              <span className="qs-sd-explore-all-icon" aria-hidden>
                <ServiceArrowIcon variant="on-light" />
              </span>
            </Link>
          </div>
          <div className="qs-sd-explore-grid">
            {content.explore.cards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="qs-sd-explore-card w-inline-block"
                style={{ backgroundColor: c.cardBg }}
              >
                <span
                  className="tag"
                  style={{
                    backgroundColor: c.tagBg,
                    color: c.tagColor,
                  }}
                >
                  {c.tag}
                </span>
                <h3>{c.title}</h3>
                <p className="qs-sd-explore-desc">{c.desc}</p>
                <div className="qs-sd-chip-row">
                  {c.chips.map((ch) => (
                    <span key={ch} className="qs-sd-chip">
                      {ch}
                    </span>
                  ))}
                </div>
                <div className="qs-sd-explore-foot">
                  <span className="qs-sd-explore-learn">Learn more</span>
                  <span className="qs-sd-explore-arrow" aria-hidden>
                    <ServiceArrowIcon variant="on-dark" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="qs-sd-final">
        <div className="qs-inner">
          <div className="qs-sd-final-card">
            <div className="qs-sd-final-left">
              <div className="qs-sd-final-kicker">
                <i className="is-purple" aria-hidden />
                <span>{content.finalCta.kicker}</span>
              </div>
              <h2>
                <span className="qs-sd-final-head-sans">
                  {content.finalCta.headingSans}
                </span>
                <span className="qs-sd-serif">{content.finalCta.headingSerif}</span>
              </h2>
              <p>{content.finalCta.lede}</p>
              <div className="qs-sd-final-stats">
                {content.finalCta.stats.map((s) => (
                  <div key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="qs-sd-final-contact">
                <p className="qs-sd-final-contact-label">
                  Prefer to reach out directly?
                </p>
                <div className="qs-sd-final-links">
                  <a href="tel:+9201051923556">
                    <FinalCtaPhoneIcon />
                    +92 0105 192 3556
                  </a>
                  <a href="mailto:hello@awake.agency">
                    <FinalCtaMailIcon />
                    hello@awake.agency
                  </a>
                </div>
              </div>
            </div>
            <div className="qs-sd-final-form-wrap">
              <h3>Start your project</h3>
              <p className="hint">Free consultation · No commitment required</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="qs-sd-form-grid2">
                  <div className="qs-sd-field">
                    <label htmlFor="sd-name">Your name</label>
                    <input id="sd-name" name="name" placeholder="e.g. Sara Ahmed" />
                  </div>
                  <div className="qs-sd-field">
                    <label htmlFor="sd-co">Company</label>
                    <input id="sd-co" name="company" placeholder="Your company" />
                  </div>
                </div>
                <div className="qs-sd-field qs-sd-form-full">
                  <label htmlFor="sd-email">Email address</label>
                  <input
                    id="sd-email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="qs-sd-field qs-sd-form-full">
                  <label htmlFor="sd-msg">Tell us about your project</label>
                  <textarea
                    id="sd-msg"
                    name="message"
                    placeholder="What are you looking to achieve? Any challenges you're facing?"
                  />
                </div>
                <button type="submit" className="qs-sd-submit">
                  Send message
                  <span className="qs-sd-icon-circle-sm" aria-hidden>
                    <ServiceArrowIcon variant="on-light" />
                  </span>
                </button>
              </form>
              <p className="qs-sd-form-note">
                <FinalCtaLockIcon />
                We reply within 4 hours · 100% confidential
              </p>
            </div>
          </div>
        </div>
      </section>
      <TemplateFooter />
    </div>
  );
}

export type { ServiceDetailsContent };
