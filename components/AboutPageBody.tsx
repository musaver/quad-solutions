"use client";

import Link from "next/link";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { TemplateFooter } from "@/components/TemplateFooter";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

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
    title: "Strategy First",
    text: "Every visual decision we make is rooted in strategic thinking. We don't start designing until we understand your business, your audience, and your competitive landscape.",
  },
  {
    num: "02",
    title: "Craft & Rigour",
    text: "We hold ourselves to an unusually high standard of execution. Details matter — in the kerning of a headline, the rhythm of a layout, and the precision of a copyline.",
  },
  {
    num: "03",
    title: "Honest Partnership",
    text: "We tell clients what they need to hear, not what they want to hear. Honest feedback builds better work and stronger long-term relationships.",
  },
  {
    num: "04",
    title: "Lasting Impact",
    text: "We design for the long term. Our goal is to build brands that age well — not trendy aesthetics that need refreshing every two years.",
  },
];

const TEAM = [
  { name: "Musawir", role: "CEO & Co-Founder", image: "/assets/about/team-musawir.jpg" },
  { name: "Hamzah", role: "Business Operations & Co-Founder", image: "/assets/about/team-hamzah.jpg" },
  { name: "Shabal", role: "Digital Manager", image: "/assets/about/team-shabal.jpg" },
  { name: "Umer", role: "UI-UX Specialist", image: "/assets/about/team-umer.jpg" },
];

export function AboutPageBody() {
  const heroRef = useHeroAnimation();

  return (
    <div className="main qs-about-page">
      <TemplateNavbar />

      {/* Hero */}
      <header className="qs-about-hero">
        <div className="qs-inner">
          <h1 ref={heroRef} className="qs-about-title">
            A studio built to create brands that{" "}
            <span className="qs-about-italic">matter</span>
          </h1>
          <p className="qs-about-lede">
            Based in Lahore, Pakistan — we partner with ambitious businesses to
            build meaningful brands through strategic design, creative thinking,
            and digital experiences.
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
              Trusted by 1000+ clients worldwide
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
              Where strategy meets{" "}
              <span className="qs-about-italic">creative ambition</span>
            </h2>
            <div className="qs-about-story-copy">
              <p>
                Founded in 2012, Awake Studio was built on one conviction — that
                great design is never just aesthetic. It&apos;s strategic,
                intentional, and always in service of real business outcomes.
              </p>
              <p>
                Over a decade later, we&apos;ve helped more than 1,000
                businesses — from early-stage startups to established
                enterprises — build brands that stand for something. We&apos;re a
                small, senior team and we intend to stay that way.
              </p>
              <p>
                Every project we take on gets our full attention. No hand-offs
                to junior staff. No templated thinking. Just rigorous strategy
                and craft, delivered with care.
              </p>
            </div>
          </div>
          <div className="qs-about-story-image">
            <img src="/assets/about/story.jpg" alt="The Awake Studio team at work" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="qs-about-values">
        <div className="qs-inner">
          <div className="qs-about-values-head">
            <h2 className="qs-about-values-title">
              How we <span className="qs-about-italic">think &amp; work</span>
            </h2>
            <p className="qs-about-values-sub">
              Four principles guide every project we take on — regardless of
              size, industry, or scope.
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
                The people behind <span className="qs-about-italic">the work</span>
              </h2>
              <p className="qs-about-team-sub">
                A small senior team, each a specialist in their discipline —
                working together on every project.
              </p>
            </div>
            <span className="qs-about-team-chip">
              <strong>{TEAM.length}</strong> core members
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
