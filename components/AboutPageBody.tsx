"use client";

import Link from "next/link";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { TemplateFooter } from "@/components/TemplateFooter";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { TEAM_MEMBERS } from "@/lib/team";

const ARROW_DARK = "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67a9e2599fa438b2b5ca91b6_arrow-top-right.png";
const ARROW_LIGHT = "/assets/figma-case-study-details/icon-arrow-on-dark.svg";
const ICON_LINKEDIN = "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67b02256c742c6b7cb28f718_si-linkedin.svg";
const ICON_TWITTER = "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67b02255b31413b811c048ab_si-twitter.svg";
const ICON_PHONE = "/assets/figma-case-study-details/icon-phone.svg";

const STATS = [
  { num: "12+", label: ["Years of", "expertise"] },
  { num: "280+", label: ["Projects", "delivered"] },
  { num: "94%", label: ["Client retention", "rate"] },
  { num: "1000+", label: ["Clients served", "worldwide"] },
];

const VALUES = [
  {
    num: "01",
    title: "Specialists, Not Generalists",
    text: "Every engagement is staffed by senior experts in the exact discipline you need — Growth, Creative, Digital, or AI. No junior hand-offs, no generalists pretending to be specialists.",
  },
  {
    num: "02",
    title: "One Unified Roof",
    text: "You get the depth of multiple specialist agencies and the simplicity of one partner. A single project manager keeps every division aligned, eliminating silos and miscommunication.",
  },
  {
    num: "03",
    title: "ROI-Focused, Always",
    text: "We define clear KPIs before any project begins — CPA for ad campaigns, conversion rates for stores, hours saved through automation. Outcomes, not vanity metrics.",
  },
  {
    num: "04",
    title: "Built for Scale",
    text: "Our model is engineered for ambitious businesses. We deploy the exact specialists you need, when you need them, so growth never bottlenecks on agency capacity.",
  },
];

const TEAM = TEAM_MEMBERS.map((m) => ({
  name: m.name,
  role: m.position,
  image: m.image,
}));

export function AboutPageBody() {
  const heroRef = useHeroAnimation();

  return (
    <div className="main qs-about-page">
      <TemplateNavbar />

      {/* Hero */}
      <header className="qs-about-hero">
        <div className="qs-inner">
          <h1 ref={heroRef} className="qs-about-title">
            The power of specialists.{" "}
            <span className="qs-about-italic">
              The simplicity of one partner.
            </span>
          </h1>
          <p className="qs-about-lede">
            We are QUAD Solutions — a premium digital collective. We partner
            with ambitious businesses worldwide to deliver specialized
            expertise in Growth, Creative, Digital, and AI, all managed under
            one unified roof.
          </p>
          <div className="qs-about-cta-row">
            <Link href="/case-studies" className="qs-btn-primary">
              <span>See Our Work</span>
              <span className="qs-btn-arrow" aria-hidden="true">
                <img src={ARROW_DARK} alt="" />
              </span>
            </Link>
            <Link href="/contact" className="qs-btn-dark">
              <span>Get In Touch</span>
              <span className="qs-btn-arrow" aria-hidden="true">
                <img src={ARROW_DARK} alt="" />
              </span>
            </Link>
          </div>
          <div className="qs-about-trust">
            <span className="qs-about-trust-line" />
            <p className="qs-about-trust-text">
              Four specialized divisions. One unified point of contact.
            </p>
            <span className="qs-about-trust-line is-right" />
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="qs-about-stats">
        <div className="qs-inner">
          <div className="qs-about-stats-row">
            {STATS.map((s) => (
              <div key={s.num} className="qs-about-stat">
                <p className="qs-about-stat-num">{s.num}</p>
                <p className="qs-about-stat-label">
                  {s.label[0]}
                  <br />
                  {s.label[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="qs-about-story">
        <div className="qs-inner">
          <div className="qs-about-eyebrow">
            <span className="qs-about-eyebrow-bar" />
            <p className="qs-about-eyebrow-text">Our Story</p>
          </div>
          <div className="qs-about-story-grid">
            <h2 className="qs-about-story-title">
              Built for the modern{" "}
              <span className="qs-about-italic">business landscape</span>
            </h2>
            <div className="qs-about-story-copy">
              <p>
                The digital world has become too complex for generalist
                agencies. Businesses today need deep, niche expertise — but
                managing multiple specialized vendors is a logistical
                nightmare.
              </p>
              <p>
                That&apos;s why we built QUAD Solutions. We brought together
                top-tier specialists across four core disciplines — Growth
                Marketing, Creative Production, Digital Products, and AI &amp;
                Automation. Our unique structure allows us to deploy the exact
                experts you need, while providing you with a single, seamless
                point of contact.
              </p>
              <p>
                No silos. No miscommunication. Just integrated, high-performance
                results — delivered by senior specialists who own their craft.
              </p>
            </div>
          </div>
          <div className="qs-about-story-image">
            <img src="/assets/about/story.jpg" alt="The QUAD Solutions team at work" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="qs-about-values">
        <div className="qs-inner">
          <div className="qs-about-values-head">
            <h2 className="qs-about-values-title">
              How we <span className="qs-about-italic">operate</span>
            </h2>
            <p className="qs-about-values-sub">
              Four principles shape every engagement — from a one-off campaign
              to a multi-division partnership.
            </p>
          </div>
          <div className="qs-about-values-grid">
            {VALUES.map((v) => (
              <article key={v.num} className="qs-about-value-card">
                <p className="qs-about-value-num">{v.num}</p>
                <div>
                  <h3 className="qs-about-value-title">{v.title}</h3>
                  <p className="qs-about-value-text">{v.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="qs-about-team">
        <div className="qs-inner">
          <div className="qs-about-team-head">
            <div>
              <h2 className="qs-about-team-title">
                Meet your{" "}
                <span className="qs-about-italic">specialist leaders</span>
              </h2>
              <p className="qs-about-team-sub">
                Our divisions are led by industry experts who ensure every
                project is executed with precision and deep domain knowledge.
              </p>
            </div>
            <span className="qs-about-team-chip">
              <strong>{TEAM.length}</strong> division leads
            </span>
          </div>
          <div className="qs-about-team-grid">
            {TEAM.map((m) => (
              <article key={m.name} className="qs-about-team-card">
                <div className="qs-about-team-photo">
                  <img src={m.image} alt={`${m.name}, ${m.role}`} loading="lazy" />
                </div>
                <div className="qs-about-team-info">
                  <p className="qs-about-team-name">{m.name}</p>
                  <p className="qs-about-team-role">{m.role}</p>
                  <div className="qs-about-team-socials">
                    <a href="https://www.linkedin.com" aria-label={`${m.name} on LinkedIn`}>
                      <img src={ICON_LINKEDIN} alt="" />
                    </a>
                    <a href="https://x.com" aria-label={`${m.name} on X`}>
                      <img src={ICON_TWITTER} alt="" />
                    </a>
                    <a href="/contact" aria-label={`Call ${m.name}`}>
                      <img src={ICON_PHONE} alt="" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="qs-about-quote">
        <div className="qs-inner">
          <div className="qs-about-quote-card">
            <div className="qs-about-quote-text-wrap">
              <h3 className="qs-about-quote-title">
                Need something custom?{" "}
                <span className="qs-about-italic">We build bespoke packages</span>
              </h3>
              <p className="qs-about-quote-sub">
                For complex briefs and ongoing partnerships.
              </p>
            </div>
            <Link href="/contact" className="qs-btn-primary">
              <span>Get a Custom Quote</span>
              <span className="qs-btn-arrow" aria-hidden="true">
                <img src={ARROW_DARK} alt="" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="qs-about-cta">
        <div className="qs-inner">
          <div className="qs-about-cta-card">
            <h2 className="qs-about-cta-title">
              Ready to build something{" "}
              <span className="qs-about-italic">remarkable?</span>
            </h2>
            <p className="qs-about-cta-sub">
              Let&apos;s talk about your brand. A 45-minute discovery call is
              all it takes to explore how we can help.
            </p>
            <div className="qs-about-cta-row">
              <Link href="/contact" className="qs-btn-light">
                <span>Start a Conversation</span>
                <span className="qs-btn-arrow" aria-hidden="true">
                  <img src={ARROW_LIGHT} alt="" />
                </span>
              </Link>
              <Link href="/services" className="qs-btn-ghost">
                <span>Explore Services</span>
                <span className="qs-btn-arrow" aria-hidden="true">
                  <img src={ARROW_LIGHT} alt="" />
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
