"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { TemplateFooter } from "@/components/TemplateFooter";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { ServiceArrowIcon } from "@/components/ServiceArrowIcon";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

const ASSET = "/assets/figma-case-studies";

type FilterId =
  | "all"
  | "brand-strategy"
  | "brand-identity"
  | "ui-ux"
  | "marketing";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  category: FilterId;
  image: string;
  tags: string[];
};

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "brand-strategy", label: "Brand Strategy" },
  { id: "brand-identity", label: "Brand Identity" },
  { id: "ui-ux", label: "UI/UX Design" },
  { id: "marketing", label: "Marketing" },
];

const PROJECTS: Project[] = [
  {
    id: "academy",
    title: "Academy.co",
    subtitle: "Academy.co · 2024",
    badge: "Brand Identity",
    category: "brand-identity",
    image: `${ASSET}/project-0.jpg`,
    tags: ["Brand Identity", "Visual System", "Brand Guidelines"],
  },
  {
    id: "genome",
    title: "Genome Health",
    subtitle: "Genome Health · 2023",
    badge: "UI/UX Design",
    category: "ui-ux",
    image: `${ASSET}/project-1.jpg`,
    tags: ["UI/UX Design", "User Research", "Design System"],
  },
  {
    id: "hotto",
    title: "Hotto",
    subtitle: "Hotto Inc. · 2024",
    badge: "Marketing",
    category: "marketing",
    image: `${ASSET}/project-2.jpg`,
    tags: ["Marketing Strategy", "Campaign Design", "Brand Narrative"],
  },
  {
    id: "verdant",
    title: "Verdant Co.",
    subtitle: "Verdant Co. · 2023",
    badge: "Brand Identity",
    category: "brand-identity",
    image: `${ASSET}/project-3.jpg`,
    tags: ["Packaging Design", "Visual Identity", "Logo Design"],
  },
  {
    id: "nova",
    title: "Nova Labs",
    subtitle: "Nova Labs SaaS · 2024",
    badge: "UI/UX Design",
    category: "ui-ux",
    image: `${ASSET}/project-4.jpg`,
    tags: ["Product Design", "Design System", "Prototyping"],
  },
  {
    id: "craft",
    title: "Craft Studio",
    subtitle: "Craft Studio · 2023",
    badge: "Brand Strategy",
    category: "brand-strategy",
    image: `${ASSET}/project-5.jpg`,
    tags: ["Content Strategy", "Brand Voice", "Copywriting"],
  },
  {
    id: "pulse",
    title: "Pulse Media",
    subtitle: "Pulse Media Group · 2023",
    badge: "Marketing",
    category: "marketing",
    image: `${ASSET}/project-6.jpg`,
    tags: ["Digital Marketing", "Growth Strategy", "Content Marketing"],
  },
];

const MARQUEE_NAMES = [
  "FlowBank",
  "Academy.co",
  "Genome Health",
  "Hotto",
  "Verdant Co.",
  "Nova Labs",
  "Craft Studio",
  "Pulse Media",
];

export function CaseStudiesPageBody() {
  const [filter, setFilter] = useState<FilterId>("all");
  const heroRef = useHeroAnimation();

  const visibleProjects = useMemo(
    () =>
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <div className="main qs-case-studies-page">
      <div className="gradient-background" />
      <TemplateNavbar />

      <header className="qs-case-hero">
        <div className="qs-inner">
          <div className="qs-case-hero-badge-wrap">
          </div>
          <h1 ref={heroRef} className="qs-case-hero-title">
            Work that <span className="qs-case-hero-italic">speaks</span>
            <br />
            for itself
          </h1>
          <p className="qs-case-hero-lede">
            A curated collection of brand strategies, identities, digital
            products, and campaigns — each one built to make a lasting impact.
          </p>
          <div className="qs-case-stats-card hidden">

          </div>
        </div>
      </header>

      <div className="qs-case-process-strip">
        <div className="qs-inner qs-case-process-inner">
          <div className="qs-case-process-steps">
            <div className="qs-case-process-step">
              <p className="qs-case-process-num">01</p>
              <div>
                <p className="qs-case-process-title">Discovery call</p>
                <p className="qs-case-process-sub">45-min conversation</p>
              </div>
            </div>
            <div className="qs-case-process-step">
              <p className="qs-case-process-num">02</p>
              <div>
                <p className="qs-case-process-title">Proposal sent</p>
                <p className="qs-case-process-sub">Within 48 hours</p>
              </div>
            </div>
            <div className="qs-case-process-step">
              <p className="qs-case-process-num">03</p>
              <div>
                <p className="qs-case-process-title">Kick-off</p>
                <p className="qs-case-process-sub">Deep-dive immersion</p>
              </div>
            </div>
            <div className="qs-case-process-step">
              <p className="qs-case-process-num">04</p>
              <div>
                <p className="qs-case-process-title">Deliver</p>
                <p className="qs-case-process-sub">On time, every time</p>
              </div>
            </div>
          </div>
          <Link href="/contact" className="qs-case-process-cta w-inline-block">
            Start your project
            <span className="qs-case-arrow-on-light" aria-hidden>
              <ServiceArrowIcon variant="on-light" />
            </span>
          </Link>
        </div>
      </div>

      <section className="qs-case-latest">
        <div className="qs-inner">
          <div className="qs-case-latest-top">
            <div className="qs-case-section-label">
              <span className="qs-case-section-label-bar" aria-hidden />
              <p className="qs-case-section-label-text">Latest Project</p>
            </div>
            <Link
              href="/case-study-details?project=flowbank"
              className="qs-case-link-pill w-inline-block"
            >
              Open case study
              <span className="qs-case-arrow-muted" aria-hidden>
                <ServiceArrowIcon variant="on-light" />
              </span>
            </Link>
          </div>
          <Link
            href="/case-study-details?project=flowbank"
            className="qs-case-featured w-inline-block"
          >
            <div className="qs-case-featured-bg" aria-hidden>
              <img
                src={`${ASSET}/featured.jpg`}
                alt=""
                width={1920}
                height={1280}
              />
              <div className="qs-case-featured-overlay" />
            </div>
            <div className="qs-case-featured-top">
              <span className="qs-case-pill-glass">Featured Project</span>
              <span className="qs-case-pill-glass is-regular">Brand Strategy</span>
            </div>
            <div className="qs-case-featured-bottom">
              <div>
                <p className="qs-case-featured-name">FlowBank</p>
                <p className="qs-case-featured-meta">
                  FlowBank Ltd · FinTech · 2024
                </p>
                <div className="qs-case-featured-tags">
                  <span className="qs-case-tag-glass">Brand Positioning</span>
                  <span className="qs-case-tag-glass">Market Strategy</span>
                  <span className="qs-case-tag-glass">Messaging</span>
                </div>
              </div>
              <span className="qs-case-featured-btn">
                View Case Study
                <span className="qs-case-arrow-dark" aria-hidden>
                  <ServiceArrowIcon variant="on-dark" />
                </span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="qs-case-categories">
        <div className="qs-inner">
          <div className="qs-case-cat-grid">
            <div
              className="qs-case-cat-card"
              style={{
                background: "rgba(73,40,253,0.03)",
                borderColor: "rgba(73,40,253,0.19)",
              }}
            >
              <p className="qs-case-cat-count">2 projects</p>
              <div>
                <p className="qs-case-cat-title">Brand Strategy</p>
                <p className="qs-case-cat-desc">Positioning &amp; messaging</p>
              </div>
            </div>
            <div
              className="qs-case-cat-card"
              style={{
                background: "rgba(186,129,238,0.03)",
                borderColor: "rgba(186,129,238,0.19)",
              }}
            >
              <p className="qs-case-cat-count">2 projects</p>
              <div>
                <p className="qs-case-cat-title">Brand Identity</p>
                <p className="qs-case-cat-desc">Logo &amp; visual systems</p>
              </div>
            </div>
            <div
              className="qs-case-cat-card"
              style={{
                background: "rgba(112,181,255,0.03)",
                borderColor: "rgba(112,181,255,0.19)",
              }}
            >
              <p className="qs-case-cat-count">2 projects</p>
              <div>
                <p className="qs-case-cat-title">UI/UX Design</p>
                <p className="qs-case-cat-desc">Digital experiences</p>
              </div>
            </div>
            <div
              className="qs-case-cat-card"
              style={{
                background: "rgba(121,212,94,0.03)",
                borderColor: "rgba(121,212,94,0.19)",
              }}
            >
              <p className="qs-case-cat-count">2 projects</p>
              <div>
                <p className="qs-case-cat-title">Marketing</p>
                <p className="qs-case-cat-desc">Campaigns &amp; growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="qs-case-projects-section">
        <div className="qs-inner">
          <div className="qs-case-projects-head">
            <div>
              <h2 className="qs-case-projects-title home-heading-h2">
                All <span className="span-txt">projects</span>
              </h2>
              <p className="qs-case-projects-count">8 projects</p>
            </div>
            <div className="qs-case-filter-bar" role="tablist" aria-label="Filter projects">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === f.id}
                  className={`qs-case-filter-btn${filter === f.id ? " is-active" : ""}`}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="qs-case-project-grid">
            {visibleProjects.map((p) => (
              <Link
                key={p.id}
                href={`/case-study-details?project=${p.id}`}
                className="qs-case-project-card w-inline-block"
              >
                <div className="qs-case-project-img-wrap">
                  <img src={p.image} alt="" width={1080} height={720} />
                  <span className="qs-case-project-badge">{p.badge}</span>
                </div>
                <div className="qs-case-project-body">
                  <div className="qs-case-project-title-row">
                    <p className="qs-case-project-name">{p.title}</p>
                    <span className="qs-case-project-arrow" aria-hidden>
                      <ServiceArrowIcon variant="on-light" />
                    </span>
                  </div>
                  <p className="qs-case-project-sub">{p.subtitle}</p>
                  <div className="qs-case-project-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="qs-case-project-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      

      
      <section className="qs-csd-final-cta qs-case-final-cta">
        <div className="qs-inner">
          <div className="qs-csd-final-card">
            <div className="qs-csd-final-glow qs-csd-final-glow--1" aria-hidden />
            <div className="qs-csd-final-glow qs-csd-final-glow--2" aria-hidden />
            <div className="qs-csd-final-glow qs-csd-final-glow--3" aria-hidden />
            <div className="qs-csd-final-left">
              <div className="qs-csd-final-kicker">
                <span className="qs-csd-final-kicker-bar" aria-hidden />
                <span>Start a project</span>
              </div>
              <h2 className="qs-csd-final-title">
                Let&apos;s build something
                <br />
                <span className="qs-csd-final-title-serif qs-csd-serif">
                  worth remembering.
                </span>
              </h2>
              <p className="qs-csd-final-lede">
                Tell us about your brand challenge. We&apos;ll respond within 4
                hours with a clear path forward — no fluff, no hard sell.
              </p>
              <div className="qs-csd-final-stats">
                <div className="qs-csd-final-stat">
                  <p className="qs-csd-final-stat-num">150+</p>
                  <p className="qs-csd-final-stat-label">Brands launched</p>
                </div>
                <span className="qs-csd-final-stat-sep" aria-hidden />
                <div className="qs-csd-final-stat">
                  <p className="qs-csd-final-stat-num">94%</p>
                  <p className="qs-csd-final-stat-label">Client retention</p>
                </div>
                <span className="qs-csd-final-stat-sep" aria-hidden />
                <div className="qs-csd-final-stat">
                  <p className="qs-csd-final-stat-num">3.2×</p>
                  <p className="qs-csd-final-stat-label">Avg. growth</p>
                </div>
              </div>
              <div className="qs-csd-final-contact-label">Prefer to reach out directly?</div>
              <div className="qs-csd-final-pills">
                <a href="tel:+9201051923556" className="qs-csd-final-pill">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden><path d="M14.6 11.267c0 .24-.053.474-.166.7a2.74 2.74 0 0 1-.454.633c-.306.34-.64.514-1 .52-.254 0-.527-.067-.82-.206a8.42 8.42 0 0 1-.82-.467 13.28 13.28 0 0 1-.82-.633 13.5 13.5 0 0 1-.787-.754 13.04 13.04 0 0 1-.633-.82 8.79 8.79 0 0 1-.467-.82c-.14-.293-.206-.567-.206-.82 0-.247.053-.48.16-.7.106-.22.266-.42.493-.6.274-.213.567-.32.874-.32.12 0 .24.027.347.08.113.053.213.133.293.247l1.014 1.427c.08.107.14.207.18.3.04.094.063.18.063.26 0 .1-.027.2-.08.293a1.3 1.3 0 0 1-.22.294l-.3.313a.21.21 0 0 0-.06.153c0 .033.006.06.013.094.013.033.027.06.04.086.08.147.213.34.4.573.193.234.4.474.62.707.227.233.447.44.674.633.233.187.426.314.58.394.02.013.046.027.073.04.034.013.067.02.107.02a.22.22 0 0 0 .16-.067l.3-.293c.1-.1.2-.174.294-.22a.536.536 0 0 1 .293-.08c.08 0 .166.02.26.067.093.046.193.106.3.186l1.44 1.027c.114.08.194.173.247.286.046.114.073.227.073.354Z" stroke="currentColor" strokeWidth="1.2"/></svg>
                  +92 0105 192 3556
                </a>
                <a href="mailto:hello@awake.agency" className="qs-csd-final-pill">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden><path d="M2.667 4h10.666C14.253 4 15 4.747 15 5.667v6.666C15 13.253 14.253 14 13.333 14H2.667C1.747 14 1 13.253 1 12.333V5.667C1 4.747 1.747 4 2.667 4Z" stroke="currentColor" strokeWidth="1.2"/><path d="m1 5.667 7 4.666 7-4.666" stroke="currentColor" strokeWidth="1.2"/></svg>
                  hello@awake.agency
                </a>
              </div>
            </div>
            <div className="qs-csd-final-form-wrap">
              <div className="qs-csd-final-form">
                <div className="qs-csd-final-form-head">
                  <h3 className="qs-csd-final-form-title">Start your project</h3>
                  <p className="qs-csd-final-form-sub">
                    Free consultation · No commitment required
                  </p>
                </div>
                <form className="qs-csd-form" action="/contact" method="get">
                  <div className="qs-csd-form-row">
                    <label className="qs-csd-field">
                      <span className="qs-csd-field-label">Your name</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="e.g. Sara Ahmed"
                        className="qs-csd-input"
                        autoComplete="name"
                      />
                    </label>
                    <label className="qs-csd-field">
                      <span className="qs-csd-field-label">Company</span>
                      <input
                        type="text"
                        name="company"
                        placeholder="Your company"
                        className="qs-csd-input"
                      />
                    </label>
                  </div>
                  <label className="qs-csd-field qs-csd-field--full">
                    <span className="qs-csd-field-label">Email address</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      className="qs-csd-input"
                      autoComplete="email"
                    />
                  </label>
                  <label className="qs-csd-field qs-csd-field--full">
                    <span className="qs-csd-field-label">
                      Tell us about your project
                    </span>
                    <textarea
                      name="message"
                      placeholder="What are you looking to achieve? Any challenges you're facing?"
                      className="qs-csd-textarea"
                      rows={4}
                    />
                  </label>
                  <button type="submit" className="qs-csd-form-submit">
                    <span>Send message</span>
                    <span className="qs-csd-form-submit-icon" aria-hidden>
                      <ServiceArrowIcon variant="on-light" />
                    </span>
                  </button>
                </form>
                <p className="qs-csd-form-foot">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><rect x="1" y="5" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M3.5 5V3.5a2.5 2.5 0 0 1 5 0V5" stroke="currentColor" strokeWidth="1.2"/></svg>
                  We reply within 4 hours · 100% confidential
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TemplateFooter />
    </div>
  );
}
