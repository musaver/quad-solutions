"use client";

import Link from "next/link";
import { useState } from "react";
import { TemplateFooter } from "@/components/TemplateFooter";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { ServiceArrowIcon } from "@/components/ServiceArrowIcon";

const TEAM = "/assets/figma-service-details";
const WORK = "/assets/figma-case-studies";

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

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What does your brand strategy process involve?",
    a: "Our process follows five key phases: Immersion, Analysis, Positioning, Messaging, and Delivery. Each phase includes collaborative workshops, research deliverables, and strategic documentation you can activate across your organization.",
  },
  {
    q: "How long does a typical brand strategy project take?",
    a: "Most engagements run 6–8 weeks depending on research depth and stakeholder availability. We provide a fixed timeline and milestones in your proposal.",
  },
  {
    q: "Do you work with existing marketing teams or in-house designers?",
    a: "Yes. We regularly partner with internal teams — aligning on process, handoffs, and file formats so strategy translates cleanly into execution.",
  },
  {
    q: "What deliverables do we receive at the end?",
    a: "You receive a strategy playbook, positioning and messaging frameworks, and recommendations for visual and channel activation — tailored to what you commissioned.",
  },
  {
    q: "How do you measure the success of a brand strategy?",
    a: "We align on KPIs up front — awareness, conversion, retention, or internal clarity — and define how we will track them post-launch.",
  },
  {
    q: "How do I get started with Awake Agency?",
    a: "Book a discovery call or use the form below. We will respond with next steps and a tailored scope within a few business days.",
  },
];

const FOUNDATION_STEPS = [
  {
    title: "Market Research",
    bg: "rgba(186, 129, 238, 0.08)",
    border: "rgba(186, 129, 238, 0.22)",
    accent: "#6d28d9",
    numBg: "rgba(186, 129, 238, 0.16)",
  },
  {
    title: "Brand Positioning",
    bg: "rgba(112, 181, 255, 0.1)",
    border: "rgba(112, 181, 255, 0.26)",
    accent: "#1d4ed8",
    numBg: "rgba(112, 181, 255, 0.18)",
  },
  {
    title: "Messaging Framework",
    bg: "rgba(255, 175, 104, 0.12)",
    border: "rgba(255, 175, 104, 0.28)",
    accent: "#c2410c",
    numBg: "rgba(255, 175, 104, 0.2)",
  },
  {
    title: "Competitive Analysis",
    bg: "rgba(121, 212, 94, 0.1)",
    border: "rgba(121, 212, 94, 0.26)",
    accent: "#15803d",
    numBg: "rgba(121, 212, 94, 0.18)",
  },
  {
    title: "Brand Architecture",
    bg: "rgba(244, 136, 154, 0.1)",
    border: "rgba(244, 136, 154, 0.24)",
    accent: "#be185d",
    numBg: "rgba(244, 136, 154, 0.18)",
  },
] as const;

const DELIVERABLES = [
  {
    n: "01",
    t: "Complete Brand Identity",
    d: "Logo design, color palette, typography system, and visual elements that define your brand's unique look and feel.",
    bg: "rgba(73, 40, 253, 0.05)",
    border: "rgba(73, 40, 253, 0.12)",
    num: "#4928fd",
    arrowBg: "rgba(73, 40, 253, 0.13)",
  },
  {
    n: "02",
    t: "Brand Guidelines",
    d: "Comprehensive documentation covering logo usage, color specifications, typography rules, and application examples.",
    bg: "rgba(186, 129, 238, 0.08)",
    border: "rgba(186, 129, 238, 0.2)",
    num: "#7c3aed",
    arrowBg: "rgba(186, 129, 238, 0.18)",
  },
  {
    n: "03",
    t: "Marketing Collateral",
    d: "Business cards, letterheads, presentations, and other essential materials ready for print and digital use.",
    bg: "rgba(255, 175, 104, 0.1)",
    border: "rgba(255, 175, 104, 0.26)",
    num: "#ea580c",
    arrowBg: "rgba(255, 175, 104, 0.2)",
  },
  {
    n: "04",
    t: "Digital Assets",
    d: "Social media templates, email signatures, website graphics, and all digital touchpoint designs.",
    bg: "rgba(112, 181, 255, 0.1)",
    border: "rgba(112, 181, 255, 0.24)",
    num: "#2563eb",
    arrowBg: "rgba(112, 181, 255, 0.18)",
  },
  {
    n: "05",
    t: "Source Files",
    d: "All original design files in multiple formats (AI, PSD, PDF, PNG, SVG) for complete creative control.",
    bg: "rgba(121, 212, 94, 0.1)",
    border: "rgba(121, 212, 94, 0.24)",
    num: "#16a34a",
    arrowBg: "rgba(121, 212, 94, 0.18)",
  },
  {
    n: "06",
    t: "Implementation Support",
    d: "Ongoing guidance and support to ensure consistent brand application across all channels and touchpoints.",
    bg: "rgba(244, 136, 154, 0.1)",
    border: "rgba(244, 136, 154, 0.22)",
    num: "#db2777",
    arrowBg: "rgba(244, 136, 154, 0.18)",
  },
] as const;

const WEEK_PHASES = [
  {
    w: "WEEK 1–2",
    t: "Immersion",
    items: ["Stakeholder interviews", "Customer research", "Competitive audit"],
    bg: "rgba(124, 58, 237, 0.07)",
    border: "rgba(124, 58, 237, 0.18)",
    accent: "#5b21b6",
    tagBg: "rgba(124, 58, 237, 0.14)",
    bullet: "#7c3aed",
  },
  {
    w: "WEEK 3–4",
    t: "Analysis",
    items: ["Market gap mapping", "Audience segmentation", "Opportunity framing"],
    bg: "rgba(59, 130, 246, 0.08)",
    border: "rgba(59, 130, 246, 0.2)",
    accent: "#1e40af",
    tagBg: "rgba(59, 130, 246, 0.14)",
    bullet: "#2563eb",
  },
  {
    w: "WEEK 5–6",
    t: "Positioning",
    items: ["Workshop sessions", "Positioning statement", "Value pillars"],
    bg: "rgba(249, 115, 22, 0.09)",
    border: "rgba(249, 115, 22, 0.22)",
    accent: "#c2410c",
    tagBg: "rgba(249, 115, 22, 0.16)",
    bullet: "#ea580c",
  },
  {
    w: "WEEK 7–8",
    t: "Delivery",
    items: ["Messaging framework", "Strategy playbook", "Activation roadmap"],
    bg: "rgba(34, 197, 94, 0.08)",
    border: "rgba(34, 197, 94, 0.2)",
    accent: "#166534",
    tagBg: "rgba(34, 197, 94, 0.14)",
    bullet: "#16a34a",
  },
] as const;

const HOW_STEPS = [
  {
    n: "01",
    title: "Immersion & Audit",
    body: "We immerse ourselves in your business — conducting stakeholder interviews, customer research, and a full competitive audit to uncover opportunities.",
    badge: "Step 1 of 5",
  },
  {
    n: "02",
    title: "Strategic Analysis",
    body: "We analyze market trends, audience insights, and competitive positioning to identify where your brand can win.",
    badge: "Step 2 of 5",
  },
  {
    n: "03",
    title: "Positioning Workshop",
    body: "Through collaborative sessions, we define your brand's unique value proposition, personality, and market position.",
    badge: "Step 3 of 5",
  },
  {
    n: "04",
    title: "Messaging Architecture",
    body: "We build a comprehensive messaging framework — from elevator pitch to channel-specific copy guidelines.",
    badge: "Step 4 of 5",
  },
  {
    n: "05",
    title: "Strategy Playbook",
    body: "You receive a detailed brand strategy document with actionable recommendations for implementation across all touchpoints.",
    badge: "Step 5 of 5",
  },
];

export function ServiceDetailsPageBody() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="main qs-sd-page">
      <div className="gradient-background" />
      <TemplateNavbar />

      <header className="qs-sd-hero">
        <div className="qs-inner qs-sd-hero-inner">
          
          <h1 className="qs-sd-hero-title-block">
            <span className="qs-sd-hero-line1">Transform your brand</span>
            <span className="qs-sd-hero-line2">
              with <span className="qs-sd-serif">expert strategy</span>
            </span>
          </h1>
          <p className="qs-sd-hero-lede">
            From brand strategy to visual identity, we create comprehensive
            solutions that help businesses stand out, connect with their
            audience, and achieve lasting growth.
          </p>
          <div className="qs-sd-hero-actions">
            <Link href="/contact" className="qs-sd-btn-primary-lg w-inline-block">
              Get Started
              <span className="qs-sd-icon-circle" aria-hidden>
                <ServiceArrowIcon variant="on-light" />
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
      </header>

      <section className="qs-sd-section">
        <div className="qs-inner qs-sd-split">
          <div>
            <div className="qs-sd-kicker">
              <span className="qs-sd-kicker-bar is-pink" aria-hidden />
              <span>The Challenge</span>
            </div>
            <h2>
              Standing out in a <span className="qs-sd-serif">crowded market</span>
            </h2>
            <p className="qs-sd-prose">
              Many businesses have great products but struggle to communicate
              their value visually. Without professional creative direction and
              cohesive design, brands blend into the background and miss
              opportunities to connect with their ideal customers.
            </p>
            <div className="qs-sd-list-card is-challenge">
              <h3>Key challenges</h3>
              {[
                "Unclear brand identity and visual inconsistency",
                "Generic messaging that fails to connect with audience",
                "Outdated design that doesn't reflect business growth",
                "Lack of cohesive strategy across all touchpoints",
              ].map((t) => (
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
              <span>Our Approach</span>
            </div>
            <h2>
              Creative excellence meets{" "}
              <span className="qs-sd-serif">strategic vision</span>
            </h2>
            <p className="qs-sd-prose">
              We combine strategic thinking with exceptional design to create
              brands that not only look beautiful but work hard for your
              business. From logo design to full brand identity systems, every
              element is crafted to tell your story and drive results.
            </p>
            <div className="qs-sd-list-card is-approach">
              <h3>Key highlights</h3>
              {[
                "Comprehensive Brand Audit",
                "Strategic Creative Direction",
                "End-to-End Design Solutions",
                "Implementation Support",
              ].map((t) => (
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
            <h2>
              Meet the creative minds
              <br />
              behind <span className="qs-sd-serif">our success</span>
            </h2>
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
                <h2>
                  Measurable results for{" "}
                  <span className="qs-sd-serif">every brand we build</span>
                </h2>
                <p>
                  150+ brand strategies delivered. 94% client retention. We
                  measure what matters and design for outcomes — not just
                  aesthetics.
                </p>
              </div>
              <div className="qs-sd-impact-side">
                <div className="qs-sd-impact-metrics">
                  <div>
                    <strong>3.2x</strong>
                    <span>Brand value</span>
                    <span>increase</span>
                  </div>
                  <div>
                    <strong>94%</strong>
                    <span>Client</span>
                    <span>retention</span>
                  </div>
                </div>
                <Link href="/case-studies" className="qs-sd-link-light w-inline-block">
                  Explore Our Work
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
              <h2>
                What you <span className="qs-sd-serif">receive</span>
              </h2>
              <p>
                Everything you need to launch and maintain a professional brand
                identity that stands out and drives results.
              </p>
            </div>
            <div className="qs-sd-pill-count">
              <strong>6</strong>
              <span>deliverables included</span>
            </div>
          </div>
          <div className="qs-sd-deliverables-grid">
            {DELIVERABLES.map((x) => (
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
                    style={{ background: x.arrowBg }}
                    aria-hidden
                  >
                    <ServiceArrowIcon variant="on-light" />
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
            <h2>How we work</h2>
            <p>A proven methodology — built for strategic clarity</p>
          </div>
          <div className="qs-sd-process-grid">
            {[
              {
                n: "01",
                t: "Research",
                p: "We dive deep into your market, competitors, and audience — turning insight into a clear creative brief.",
              },
              {
                n: "02",
                t: "Position",
                p: "We define your brand's distinct place in the market and the promise you own.",
              },
              {
                n: "03",
                t: "Articulate",
                p: "We build your messaging framework — distilling strategy into language your team can use everywhere.",
              },
              {
                n: "04",
                t: "Activate",
                p: "We deliver a comprehensive brand strategy playbook with practical next steps for launch and scale.",
              },
            ].map((c) => (
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
            <p>
              Position Your Brand for Growth.
              <br />
              Let&apos;s Build Your Strategic Foundation!
            </p>
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
              <h2>
                Our work <span className="qs-sd-serif">in action</span>
              </h2>
              <p>
                Real projects, real results — see how we&apos;ve helped leading
                brands define their position and accelerate growth.
              </p>
            </div>
            <Link href="/case-studies" className="qs-sd-explore-all w-inline-block">
              <span>View All Work</span>
              <span className="qs-sd-explore-all-icon" aria-hidden>
                <ServiceArrowIcon variant="on-light" />
              </span>
            </Link>
          </div>
          <div className="qs-sd-work-grid">
            <Link href="/contact" className="qs-sd-work-card w-inline-block">
              <div className="img">
                <img src={`${WORK}/featured.jpg`} alt="" width={800} height={520} />
                <span className="badge blue">Brand Strategy</span>
              </div>
              <div className="body">
                <div className="row">
                  <div>
                    <h3>FlowBank</h3>
                    <p className="sub">FlowBank Ltd · 2024</p>
                  </div>
                  <span className="qs-sd-arrow-36" aria-hidden>
                    <ServiceArrowIcon variant="on-light" />
                  </span>
                </div>
                <div className="qs-sd-work-tags">
                  {["Brand Positioning", "Market Strategy", "Messaging"].map(
                    (t) => (
                      <span key={t}>{t}</span>
                    ),
                  )}
                </div>
              </div>
            </Link>
            <Link href="/contact" className="qs-sd-work-card w-inline-block">
              <div className="img">
                <img src={`${WORK}/project-0.jpg`} alt="" width={800} height={520} />
                <span className="badge">Brand Identity</span>
              </div>
              <div className="body">
                <div className="row">
                  <div>
                    <h3>Academy.co</h3>
                    <p className="sub">Academy.co · 2024</p>
                  </div>
                  <span className="qs-sd-arrow-36" aria-hidden>
                    <ServiceArrowIcon variant="on-light" />
                  </span>
                </div>
                <div className="qs-sd-work-tags">
                  {["Brand Identity", "Visual System", "Brand Guidelines"].map(
                    (t) => (
                      <span key={t}>{t}</span>
                    ),
                  )}
                </div>
              </div>
            </Link>
            <Link href="/contact" className="qs-sd-work-card w-inline-block">
              <div className="img">
                <img src={`${WORK}/project-1.jpg`} alt="" width={800} height={520} />
                <span className="badge">UI/UX Design</span>
              </div>
              <div className="body">
                <div className="row">
                  <div>
                    <h3>Genome Health</h3>
                    <p className="sub">Genome Health · 2023</p>
                  </div>
                  <span className="qs-sd-arrow-36" aria-hidden>
                    <ServiceArrowIcon variant="on-light" />
                  </span>
                </div>
                <div className="qs-sd-work-tags">
                  {["UI/UX Design", "User Research", "Design System"].map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="qs-sd-testimonials">
        <div className="qs-inner">
          <div className="qs-sd-testimonials-head">
            <h2>
              What our <span className="qs-sd-serif">customers</span>
              <br />
              are saying about us
            </h2>
          </div>
          <div className="qs-sd-testimonial-grid">
            <div className="qs-sd-testimonial-card is-dark">
              <p className="quote">
                &ldquo;Awake helped us discover who we really are as a brand.
                Their strategic process uncovered insights that transformed how we
                position ourselves in the market.&rdquo;
              </p>
              <div className="qs-sd-testimonial-stat">
                <strong>3.5x</strong>
                <span>Brand awareness increase in 6 months</span>
              </div>
              <div className="qs-sd-testimonial-author">
                <div className="qs-sd-avatar is-light" aria-hidden />
                <div>
                  <h4>Sarah Mitchell</h4>
                  <p>CEO, FlowBank</p>
                </div>
              </div>
            </div>
            <div className="qs-sd-testimonial-card is-cream">
              <p className="quote">
                &ldquo;The brand strategy work gave us absolute clarity on who we
                are and what we stand for. Our entire team now speaks with one
                voice.&rdquo;
              </p>
              <div className="qs-sd-testimonial-author">
                <div className="qs-sd-avatar" aria-hidden />
                <div>
                  <h4>James Okafor</h4>
                  <p>Founder, Academy.co</p>
                </div>
              </div>
            </div>
            <div className="qs-sd-testimonial-card is-sky">
              <p className="quote">
                &ldquo;The strategic foundation they built became our north star.
                We&apos;ve seen a 42% increase in customer engagement since
                implementing the new positioning.&rdquo;
              </p>
              <div className="qs-sd-testimonial-author">
                <div className="qs-sd-avatar" aria-hidden />
                <div>
                  <h4>Priya Sharma</h4>
                  <p>CMO, Hotto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="qs-sd-faq-wrap">
        <div className="qs-inner qs-sd-faq-split">
          <div className="qs-sd-faq-lede">
            <h2>
              Simple answers to{" "}
              <span className="qs-sd-serif">frequent questions</span>
            </h2>
            <p>
              Questions about the brand strategy process, timelines, or
              deliverables? We&apos;ve answered the most common ones below.
            </p>
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
            {FAQ_ITEMS.map((item, i) => (
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
                Explore our other{" "}
                <span className="qs-sd-serif">services</span>
              </h2>
              <p>
                From strategy to execution, explore our comprehensive range of
                creative services designed to elevate your brand.
              </p>
            </div>
            <Link href="/services" className="qs-sd-explore-all w-inline-block">
              <span>All Services</span>
              <span className="qs-sd-explore-all-icon" aria-hidden>
                <ServiceArrowIcon variant="on-light" />
              </span>
            </Link>
          </div>
          <div className="qs-sd-explore-grid">
            {[
              {
                tag: "Brand Identity",
                tagBg: "rgba(186,129,238,0.15)",
                tagColor: "#ba81ee",
                cardBg: "rgba(186,129,238,0.05)",
                title: "Brand Identity Design",
                desc: "We bring your strategy to life visually — crafting distinctive identities with logos, typography, color systems, and comprehensive brand guidelines.",
                chips: ["Logo Design", "Visual Systems", "Brand Guidelines"],
                href: "/services",
              },
              {
                tag: "UI/UX Design",
                tagBg: "rgba(112,181,255,0.15)",
                tagColor: "#70b5ff",
                cardBg: "rgba(112,181,255,0.05)",
                title: "UI/UX Design & Research",
                desc: "We design digital experiences rooted in user empathy — blending research, wireframing, prototyping, and testing to create products people love.",
                chips: ["User Research", "Interface Design", "Usability Testing"],
                href: "/services",
              },
              {
                tag: "Content Strategy",
                tagBg: "rgba(255,175,104,0.15)",
                tagColor: "#ffaf68",
                cardBg: "rgba(255,175,104,0.05)",
                title: "Content Strategy & Copywriting",
                desc: "We craft compelling narratives that engage audiences — from web copy and campaign messaging to content frameworks that guide all brand communications.",
                chips: ["Brand Copy", "Content Plans", "Storytelling"],
                href: "/services",
              },
              {
                tag: "Marketing",
                tagBg: "rgba(121,212,94,0.15)",
                tagColor: "#79d45e",
                cardBg: "rgba(121,212,94,0.05)",
                title: "Marketing Strategy & Campaigns",
                desc: "We turn brand strategy into action — building go-to-market plans, integrated campaigns, and growth initiatives that drive measurable business results.",
                chips: ["GTM Strategy", "Campaign Planning", "Growth Marketing"],
                href: "/services",
              },
            ].map((c) => (
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
                <span>Start a project</span>
              </div>
              <h2>
                <span className="qs-sd-final-head-sans">
                  Let&apos;s build something worth{" "}
                </span>
                <span className="qs-sd-serif">remembering.</span>
              </h2>
              <p>
                Tell us about your brand challenge. We&apos;ll respond within 4
                hours with a clear path forward — no fluff, no hard sell.
              </p>
              <div className="qs-sd-final-stats">
                <div>
                  <strong>150+</strong>
                  <span>Brands launched</span>
                </div>
                <div>
                  <strong>94%</strong>
                  <span>Client retention</span>
                </div>
                <div>
                  <strong>3.2x</strong>
                  <span>Avg. growth</span>
                </div>
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
