"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { TemplateFooter } from "@/components/TemplateFooter";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { ServiceArrowIcon } from "@/components/ServiceArrowIcon";

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
          <h1 className="qs-case-hero-title">
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
            <Link href="/contact" className="qs-case-link-pill w-inline-block">
              Open case study
              <span className="qs-case-arrow-muted" aria-hidden>
                <ServiceArrowIcon variant="on-light" />
              </span>
            </Link>
          </div>
          <Link href="/case-study-details" className="qs-case-featured w-inline-block">
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
                href="/contact"
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

      <div className="qs-case-marquee" aria-hidden>
        <div className="qs-case-marquee-track">
          {[0, 1].map((loop) => (
            <div key={loop} style={{ display: "flex" }}>
              {MARQUEE_NAMES.map((name) => (
                <div key={`${loop}-${name}`} className="qs-case-marquee-item">
                  <p className="qs-case-marquee-name">{name}</p>
                  <span className="qs-case-marquee-dot" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="qs-case-bottom">
        <div className="qs-inner">
          <div className="qs-case-bottom-card">
            <div className="qs-case-bottom-inner">
              <h2 className="qs-case-bottom-title">Have a project in mind?</h2>
              <p className="qs-case-bottom-lede">
                We&apos;d love to hear about your brand challenges and explore
                how we can help you achieve your goals.
              </p>
              <div className="qs-case-bottom-pills">
                <span className="qs-case-bottom-pill">Discovery</span>
                <span className="qs-case-bottom-arrow-sep" aria-hidden>
                  →
                </span>
                <span className="qs-case-bottom-pill">Proposal</span>
                <span className="qs-case-bottom-arrow-sep" aria-hidden>
                  →
                </span>
                <span className="qs-case-bottom-pill">Kick-off</span>
                <span className="qs-case-bottom-arrow-sep" aria-hidden>
                  →
                </span>
                <span className="qs-case-bottom-pill">Delivery</span>
              </div>
            </div>
            <div className="qs-case-bottom-actions">
              <Link href="/contact" className="qs-case-btn-white w-inline-block">
                Start a Project
                <span className="qs-case-arrow-dark" aria-hidden>
                  <ServiceArrowIcon variant="on-dark" />
                </span>
              </Link>
              <Link
                href="/services"
                className="qs-case-btn-outline w-inline-block"
              >
                View Services
                <span className="qs-case-arrow-ghost" aria-hidden>
                  <ServiceArrowIcon variant="on-dark" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <TemplateFooter />
    </div>
  );
}
