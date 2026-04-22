import Link from "next/link";
import { ServicesTestimonials } from "@/components/ServicesTestimonials";
import { TemplateFooter } from "@/components/TemplateFooter";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { TemplateHero } from "@/components/TemplateHero";
import { ServiceArrowIcon } from "@/components/ServiceArrowIcon";

type ServiceCard = {
  slug: string;
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
    slug: "brand-strategy",
    tag: "Brand Strategy",
    tagBg: "rgba(73,40,253,0.12)",
    tagColor: "#4928fd",
    cardBg: "rgba(73,40,253,0.04)",
    title: "Brand Strategy & Positioning",
    desc: "We help businesses discover their unique voice and place in the market — creating strategic foundations that drive growth, loyalty, and lasting competitive advantage.",
    chips: ["Market Research", "Brand Positioning", "Messaging Framework"],
  },
  {
    slug: "brand-identity",
    tag: "Brand Identity",
    tagBg: "rgba(186,129,238,0.15)",
    tagColor: "#ba81ee",
    cardBg: "rgba(186,129,238,0.05)",
    title: "Brand Identity Design",
    desc: "We bring your strategy to life visually — crafting distinctive identities with logos, typography, color systems, and comprehensive brand guidelines that ensure consistency.",
    chips: ["Logo Design", "Visual Systems", "Brand Guidelines"],
  },
  {
    slug: "ui-ux-design",
    tag: "UI/UX Design",
    tagBg: "rgba(112,181,255,0.15)",
    tagColor: "#70b5ff",
    cardBg: "rgba(112,181,255,0.05)",
    title: "UI/UX Design & Research",
    desc: "We design digital experiences rooted in user empathy — blending research, wireframing, prototyping, and testing to create products people genuinely love to use.",
    chips: ["User Research", "Interface Design", "Usability Testing"],
  },
  {
    slug: "content-strategy",
    tag: "Content Strategy",
    tagBg: "rgba(255,175,104,0.15)",
    tagColor: "#ffaf68",
    cardBg: "rgba(255,175,104,0.05)",
    title: "Content Strategy & Copywriting",
    desc: "We craft compelling narratives that engage audiences — from web copy and campaign messaging to content frameworks that guide all brand communications with a consistent voice.",
    chips: ["Brand Copy", "Content Plans", "Storytelling"],
  },
  {
    slug: "marketing",
    tag: "Marketing",
    tagBg: "rgba(121,212,94,0.15)",
    tagColor: "#79d45e",
    cardBg: "rgba(121,212,94,0.05)",
    title: "Marketing Strategy & Campaigns",
    desc: "We turn brand strategy into action — building go-to-market plans, integrated campaigns, and growth initiatives that drive measurable, sustainable business results.",
    chips: ["GTM Strategy", "Campaign Planning", "Growth Marketing"],
  },
  {
    slug: "web-design",
    tag: "Web Design",
    tagBg: "rgba(244,136,154,0.15)",
    tagColor: "#f4889a",
    cardBg: "rgba(244,136,154,0.05)",
    title: "Web Design & Development",
    desc: "We design and build high-performance websites that convert — combining beautiful visual design with clean, scalable code to create digital homes your brand deserves.",
    chips: ["Web Design", "Frontend Dev", "CMS Integration"],
  },
  {
    slug: "digital-marketing",
    tag: "Digital Marketing",
    tagBg: "rgba(255,215,0,0.2)",
    tagColor: "#c8960c",
    cardBg: "rgba(255,215,0,0.04)",
    title: "Digital Marketing & SEO",
    desc: "We grow your online presence with precision — combining search optimisation, paid media, and analytics to attract the right audiences and maximise return on every penny spent.",
    chips: ["SEO", "Paid Media", "Analytics"],
  },
  {
    slug: "motion-design",
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
                href={`/service-details?service=${s.slug}`}
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
      <section className="qs-svc-final-cta">
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
