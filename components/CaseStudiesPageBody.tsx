"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { TemplateFooter } from "@/components/TemplateFooter";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { ServiceArrowIcon } from "@/components/ServiceArrowIcon";
import { CTASection } from "@/components/home";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

const ASSET = "/assets/figma-case-studies";

type FilterId =
  | "all"
  | "ecommerce"
  | "local-business"
  | "lead-gen";

type ProjectCategory = Exclude<FilterId, "all">;

type Project = {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  category: ProjectCategory;
  image: string;
  tags: string[];
};

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "local-business", label: "Local Business" },
  { id: "lead-gen", label: "Lead Generation" },
];

const CATEGORY_CARDS: {
  category: ProjectCategory;
  title: string;
  desc: string;
  style: { background: string; borderColor: string };
}[] = [
  {
    category: "ecommerce",
    title: "E-commerce",
    desc: "DTC growth & marketplaces",
    style: {
      background: "rgba(255,175,104,0.04)",
      borderColor: "rgba(255,175,104,0.22)",
    },
  },
  {
    category: "local-business",
    title: "Local Business",
    desc: "Hyper-local growth & bookings",
    style: {
      background: "rgba(244,136,154,0.04)",
      borderColor: "rgba(244,136,154,0.22)",
    },
  },
  {
    category: "lead-gen",
    title: "Lead Generation",
    desc: "Funnels, qualification & CRM",
    style: {
      background: "rgba(73,40,253,0.03)",
      borderColor: "rgba(73,40,253,0.2)",
    },
  },
];

const PROJECTS: Project[] = [
  {
    id: "mexivida",
    title: "MexiVida",
    subtitle: "MexiVida · 2025",
    badge: "E-commerce Growth",
    category: "ecommerce",
    image: `${ASSET}/mexivida.jpg`,
    tags: ["Meta Ads", "Amazon SEO", "Cultural Content"],
  },
  {
    id: "heyam",
    title: "Heyam.ae",
    subtitle: "Heyam.ae · UAE Luxury · 2025",
    badge: "E-commerce Growth",
    category: "ecommerce",
    image: `${ASSET}/heyam.jpg`,
    tags: ["Shopify CRO", "Meta Ads", "Influencer & UGC"],
  },
  {
    id: "blends",
    title: "Blends Barbershop",
    subtitle: "Blends Barbershop · AU · 2025",
    badge: "Local Growth",
    category: "local-business",
    image: `${ASSET}/blends.jpg`,
    tags: ["Hyper-Local Ads", "Booking Funnel", "Review Loops"],
  },
  {
    id: "home-services",
    title: "US Home Services",
    subtitle: "Home Services · US · 2025",
    badge: "Lead Generation",
    category: "lead-gen",
    image: `${ASSET}/home-services.jpg`,
    tags: ["Lead Funnels", "CRM Integration", "Paid Media"],
  },
  {
    id: "wellness",
    title: "Aesthetics & Health",
    subtitle: "UK Clinics & Balanze · 2025",
    badge: "Lead Generation",
    category: "lead-gen",
    image: `${ASSET}/wellness.jpg`,
    tags: ["Compliance Ads", "Educational Funnels", "Appointment Nurture"],
  },
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

  const categoryCounts = useMemo(() => {
    const counts = new Map<ProjectCategory, number>();
    for (const p of PROJECTS) {
      counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
    }
    return counts;
  }, []);

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
              href="/case-study-details?project=heyam"
              className="qs-case-link-pill w-inline-block"
            >
              Open case study
              <span className="qs-case-arrow-muted" aria-hidden>
                <ServiceArrowIcon variant="on-light" />
              </span>
            </Link>
          </div>
          <Link
            href="/case-study-details?project=heyam"
            className="qs-case-featured w-inline-block"
          >
            <div className="qs-case-featured-bg" aria-hidden>
              <img
                src={`${ASSET}/heyam.jpg`}
                alt=""
                width={1920}
                height={1280}
              />
              <div className="qs-case-featured-overlay" />
            </div>
            <div className="qs-case-featured-top">
              <span className="qs-case-pill-glass">Featured Project</span>
              <span className="qs-case-pill-glass is-regular">
                E-commerce Growth
              </span>
            </div>
            <div className="qs-case-featured-bottom">
              <div>
                <p className="qs-case-featured-name">Heyam.ae</p>
                <p className="qs-case-featured-meta">
                  Heyam.ae · UAE Luxury Fashion · 2025
                </p>
                <div className="qs-case-featured-tags">
                  <span className="qs-case-tag-glass">Shopify CRO</span>
                  <span className="qs-case-tag-glass">Meta Ads</span>
                  <span className="qs-case-tag-glass">Influencer &amp; UGC</span>
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
            {CATEGORY_CARDS.map((c) => {
              const count = categoryCounts.get(c.category) ?? 0;
              return (
                <div key={c.category} className="qs-case-cat-card" style={c.style}>
                  <p className="qs-case-cat-count">
                    {count} {count === 1 ? "project" : "projects"}
                  </p>
                  <div>
                    <p className="qs-case-cat-title">{c.title}</p>
                    <p className="qs-case-cat-desc">{c.desc}</p>
                  </div>
                </div>
              );
            })}
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
              <p className="qs-case-projects-count">
                {PROJECTS.length} projects
              </p>
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

      

      
      <CTASection className="qs-csd-final-cta qs-case-final-cta" />

      <TemplateFooter />
    </div>
  );
}
