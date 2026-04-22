import Link from "next/link";
import { ServicesTestimonials } from "@/components/ServicesTestimonials";
import { TemplateFooter } from "@/components/TemplateFooter";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { TemplateHero } from "@/components/TemplateHero";
import { ServiceArrowIcon } from "@/components/ServiceArrowIcon";

type ServiceCard = {
  tag: string;
  tagBg: string;
  tagColor: string;
  cardBg: string;
  title: string;
  desc: string;
  chips: string[];
};

const SERVICES: ServiceCard[] = [
  {
    tag: "Brand Strategy",
    tagBg: "rgba(73,40,253,0.12)",
    tagColor: "#4928fd",
    cardBg: "rgba(73,40,253,0.04)",
    title: "Brand Strategy & Positioning",
    desc: "We help businesses discover their unique voice and place in the market — creating strategic foundations that drive growth, loyalty, and lasting competitive advantage.",
    chips: ["Market Research", "Brand Positioning", "Messaging Framework"],
  },
  {
    tag: "Brand Identity",
    tagBg: "rgba(186,129,238,0.15)",
    tagColor: "#ba81ee",
    cardBg: "rgba(186,129,238,0.05)",
    title: "Brand Identity Design",
    desc: "We bring your strategy to life visually — crafting distinctive identities with logos, typography, color systems, and comprehensive brand guidelines that ensure consistency.",
    chips: ["Logo Design", "Visual Systems", "Brand Guidelines"],
  },
  {
    tag: "UI/UX Design",
    tagBg: "rgba(112,181,255,0.15)",
    tagColor: "#70b5ff",
    cardBg: "rgba(112,181,255,0.05)",
    title: "UI/UX Design & Research",
    desc: "We design digital experiences rooted in user empathy — blending research, wireframing, prototyping, and testing to create products people genuinely love to use.",
    chips: ["User Research", "Interface Design", "Usability Testing"],
  },
  {
    tag: "Content Strategy",
    tagBg: "rgba(255,175,104,0.15)",
    tagColor: "#ffaf68",
    cardBg: "rgba(255,175,104,0.05)",
    title: "Content Strategy & Copywriting",
    desc: "We craft compelling narratives that engage audiences — from web copy and campaign messaging to content frameworks that guide all brand communications with a consistent voice.",
    chips: ["Brand Copy", "Content Plans", "Storytelling"],
  },
  {
    tag: "Marketing",
    tagBg: "rgba(121,212,94,0.15)",
    tagColor: "#79d45e",
    cardBg: "rgba(121,212,94,0.05)",
    title: "Marketing Strategy & Campaigns",
    desc: "We turn brand strategy into action — building go-to-market plans, integrated campaigns, and growth initiatives that drive measurable, sustainable business results.",
    chips: ["GTM Strategy", "Campaign Planning", "Growth Marketing"],
  },
  {
    tag: "Web Design",
    tagBg: "rgba(244,136,154,0.15)",
    tagColor: "#f4889a",
    cardBg: "rgba(244,136,154,0.05)",
    title: "Web Design & Development",
    desc: "We design and build high-performance websites that convert — combining beautiful visual design with clean, scalable code to create digital homes your brand deserves.",
    chips: ["Web Design", "Frontend Dev", "CMS Integration"],
  },
  {
    tag: "Digital Marketing",
    tagBg: "rgba(255,215,0,0.2)",
    tagColor: "#c8960c",
    cardBg: "rgba(255,215,0,0.04)",
    title: "Digital Marketing & SEO",
    desc: "We grow your online presence with precision — combining search optimisation, paid media, and analytics to attract the right audiences and maximise return on every penny spent.",
    chips: ["SEO", "Paid Media", "Analytics"],
  },
  {
    tag: "Motion Design",
    tagBg: "rgba(91,159,212,0.15)",
    tagColor: "#5b9fd4",
    cardBg: "rgba(91,159,212,0.04)",
    title: "Motion Design & Animation",
    desc: "We bring brands to life through movement — creating animations, motion graphics, and interactive micro-interactions that elevate digital products and campaigns.",
    chips: ["Brand Animation", "UI Motion", "Video Production"],
  },
];

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "How long does a typical brand strategy project take?",
    a: "Most strategy engagements run 4–8 weeks depending on research depth and stakeholder workshops. We will give you a fixed timeline in the proposal.",
  },
  {
    q: "Do you work with startups or only established businesses?",
    a: "We partner with both. Startups get lean, focused deliverables; established brands get deeper audits and rollout support.",
  },
  {
    q: "Can I hire you for just one service, or is there a minimum?",
    a: "Yes, you can engage us for a single discipline. Many clients start with one service and expand once they see results.",
  },
  {
    q: "What makes your approach different from other agencies?",
    a: "We combine strategy, design, and execution in one team so recommendations ship as real work — not slideware that gets handed off.",
  },
  {
    q: "What does the onboarding process look like?",
    a: "After you sign, we schedule a kick-off, share a shared workspace, and align on milestones, communication rhythm, and success metrics.",
  },
];

export function ServicesPageBody() {
  return (
    <div className="main qs-services-page">
      <div className="gradient-background" />
      <TemplateNavbar />
      <TemplateHero />

      <section className="section qs-stats-section">
        <div className="qs-inner">
          <div className="qs-stats-row">
            <div className="qs-stat">
              <p className="qs-stat-num">12+</p>
              <p className="qs-stat-label">
                Years of
                <br />
                expertise
              </p>
            </div>
            <div className="qs-stat-divider" aria-hidden />
            <div className="qs-stat">
              <p className="qs-stat-num">8</p>
              <p className="qs-stat-label">
                Core service
                <br />
                disciplines
              </p>
            </div>
            <div className="qs-stat-divider" aria-hidden />
            <div className="qs-stat">
              <p className="qs-stat-num">94%</p>
              <p className="qs-stat-label">
                Client retention
                <br />
                rate
              </p>
            </div>
            <div className="qs-stat-divider" aria-hidden />
            <div className="qs-stat">
              <p className="qs-stat-num">1000+</p>
              <p className="qs-stat-label">
                Clients served
                <br />
                worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section qs-section-pad">
        <div className="qs-inner">
          <div className="qs-services-header">
            <div>
              <h1 className="home-heading-h2 qs-h2">
                Everything you need to <span className="span-txt">grow</span>
              </h1>
              <p className="qs-services-lede">
                Eight core disciplines, one cohesive team. Click any service to
                explore its full process, pricing, and case studies.
              </p>
            </div>
            <div className="qs-pill-count">
              <strong>8</strong>
              <span>services available</span>
            </div>
          </div>

          <div className="qs-services-grid w-dyn-items" role="list">
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                href="/contact"
                className="qs-service-card w-inline-block w-dyn-item"
                role="listitem"
                style={{ backgroundColor: s.cardBg }}
              >
                <div>
                  <span
                    className="qs-service-tag"
                    style={{
                      backgroundColor: s.tagBg,
                      color: s.tagColor,
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h2 className="qs-service-title">{s.title}</h2>
                <p className="qs-service-desc">{s.desc}</p>
                <div className="qs-chip-row">
                  {s.chips.map((c) => (
                    <span key={c} className="qs-chip">
                      {c}
                    </span>
                  ))}
                </div>
                <div className="qs-card-footer">
                  <span className="qs-learn">Learn more</span>
                  <span className="qs-arrow-btn" aria-hidden>
                    <ServiceArrowIcon variant="on-dark" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="qs-process-section">
        <div className="qs-inner">
          <div className="qs-process-head">
            <h2 className="home-heading-h2 qs-h2">
              How every <span className="span-txt">engagement starts</span>
            </h2>
            <p className="qs-process-sub">
              Regardless of which service you choose, every client relationship
              begins the same way — with genuine curiosity about your business.
            </p>
          </div>
          <div className="qs-process-grid">
            <div className="qs-process-card">
              <p className="qs-process-num">01</p>
              <div>
                <h3 className="qs-process-title">Discovery Call</h3>
                <p className="qs-process-text">
                  A 45-minute conversation to understand your goals, challenges,
                  and what success looks like for your brand.
                </p>
              </div>
            </div>
            <div className="qs-process-card">
              <p className="qs-process-num">02</p>
              <div>
                <h3 className="qs-process-title">Proposal &amp; Scope</h3>
                <p className="qs-process-text">
                  A tailored proposal with a clear scope, timeline, and
                  investment — in your inbox within 48 hours.
                </p>
              </div>
            </div>
            <div className="qs-process-card">
              <p className="qs-process-num">03</p>
              <div>
                <h3 className="qs-process-title">Kick-off &amp; Immersion</h3>
                <p className="qs-process-text">
                  We dive deep into your brand, market, and audience before any
                  creative or strategic work begins.
                </p>
              </div>
            </div>
            <div className="qs-process-card">
              <p className="qs-process-num">04</p>
              <div>
                <h3 className="qs-process-title">Delivery &amp; Support</h3>
                <p className="qs-process-text">
                  We deliver with precision and stay close post-launch to ensure
                  everything performs as intended.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesTestimonials />

      <section className="section qs-faq-section">
        <div className="qs-inner">
          <div className="qs-faq-grid">
            <div>
              <div className="qs-faq-lede">
                <h2 className="home-heading-h2 qs-h2">
                  Simple answers to{" "}
                  <span className="span-txt">frequent questions</span>
                </h2>
                <p className="qs-services-lede" style={{ marginTop: 16 }}>
                  If you have a question that&apos;s not covered here, our team
                  is happy to answer it directly.
                </p>
              </div>
              <Link href="/contact" className="qs-cta-dark w-inline-block">
                Ask us directly
                <span className="qs-arrow-light" aria-hidden>
                  <ServiceArrowIcon variant="on-light" />
                </span>
              </Link>
              <div className="qs-response-box">
                <p className="qs-response-label">Average response time</p>
                <p className="qs-response-value">&lt; 4 hrs</p>
                <p className="qs-response-note">
                  During business hours, Mon–Fri
                </p>
              </div>
            </div>

            <div className="qs-faq-aside">
              <div className="div-block-41 qs-faq-list">
                {FAQ_ITEMS.map((item, i) => (
                  <div
                    key={item.q}
                    data-hover="false"
                    data-delay="0"
                    data-w-id={`qs-faq-${i}`}
                    className="accordian-item w-dropdown qs-faq-item"
                  >
                    <div className="accordion-toggle w-dropdown-toggle">
                      <p className="qs-faq-q">{item.q}</p>
                      <span className="qs-faq-plus-wrap" aria-hidden>
                        <svg
                          className="qs-faq-plus"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 5V19M5 12H19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <nav className="dropdown-list w-dropdown-list">
                      <div className="text-block-34 qs-faq-a">{item.a}</div>
                    </nav>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <TemplateFooter />
    </div>
  );
}
