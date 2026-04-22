"use client";

import Image from "next/image";
import Link from "next/link";
import { TemplateFooter } from "@/components/TemplateFooter";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { ServiceArrowIcon } from "@/components/ServiceArrowIcon";

const ASSET = "/assets/figma-case-study-details";

const CHALLENGE_ITEMS = [
  "Limited brand recognition in competitive market",
  "Inconsistent visual identity across touchpoints",
  "Unclear positioning and messaging strategy",
  "Low customer engagement and retention rates",
];

const APPROACH_ITEMS = [
  "Discovery & Immersion",
  "Competitive Positioning",
  "Positioning Workshop",
  "Strategy Playbook",
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Immersion",
    body: "Deep-dive interviews with 40+ customers and 12 stakeholders to map brand perception gaps and market opportunities.",
  },
  {
    num: "02",
    title: "Competitive Positioning",
    body: "Mapped 24 fintech competitors across 8 strategic dimensions to identify the white space FlowBank could uniquely own.",
  },
  {
    num: "03",
    title: "Positioning Workshop",
    body: "Facilitated a 2-day leadership workshop to define the brand essence, promise, and personality pillars.",
  },
  {
    num: "04",
    title: "Strategy Playbook",
    body: "Delivered a 60-page brand strategy document with messaging framework, tone of voice, and implementation roadmap.",
  },
];

export function CaseStudyDetailsPageBody() {
  return (
    <div className="main qs-csd-page">
      <div className="gradient-background" />
      <TemplateNavbar />

      <section className="qs-csd-hero" aria-labelledby="qs-csd-hero-title">
        <div className="qs-inner">
          <nav className="qs-csd-breadcrumb" aria-label="Breadcrumb">
            <Link href="/#work" className="qs-csd-breadcrumb-link">
              Work
            </Link>
            <Image
              src={`${ASSET}/icon-chevron.svg`}
              alt=""
              width={16}
              height={16}
              className="qs-csd-breadcrumb-sep"
            />
            <span className="qs-csd-breadcrumb-current">FlowBank</span>
          </nav>

          <div className="qs-csd-hero-top">
            <div className="qs-csd-hero-copy">
              <div className="qs-csd-hero-badges">
                <span className="qs-csd-badge qs-csd-badge--accent">
                  Brand Strategy
                </span>
                <span className="qs-csd-badge qs-csd-badge--muted">FinTech</span>
              </div>
              <h1 id="qs-csd-hero-title" className="qs-csd-hero-title">
                <span className="qs-csd-hero-title-strong">FlowBank</span>
                <span className="qs-csd-serif qs-csd-hero-title-serif">
                  {" "}
                  — FinTech
                </span>
              </h1>
              <p className="qs-csd-hero-lede">
                FlowBank needed to carve out a distinct identity in an
                increasingly crowded fintech space — moving from a generic
                digital bank to a trusted financial partner with a clear
                strategic narrative.
              </p>
            </div>

            <aside className="qs-csd-meta-card-wrap">
              <div className="qs-csd-meta-card">
                <div className="qs-csd-meta-row">
                  <span className="qs-csd-meta-label">Client</span>
                  <span className="qs-csd-meta-value">FlowBank Ltd</span>
                </div>
                <div className="qs-csd-meta-row">
                  <span className="qs-csd-meta-label">Year</span>
                  <span className="qs-csd-meta-value">2024</span>
                </div>
                <div className="qs-csd-meta-row">
                  <span className="qs-csd-meta-label">Industry</span>
                  <span className="qs-csd-meta-value">FinTech</span>
                </div>
                <div className="qs-csd-meta-row">
                  <span className="qs-csd-meta-label">Services</span>
                  <span className="qs-csd-meta-value">Brand Positioning</span>
                </div>
                <div className="qs-csd-meta-tags">
                  <span className="qs-csd-meta-tag">Brand Positioning</span>
                  <span className="qs-csd-meta-tag">Market Strategy</span>
                  <span className="qs-csd-meta-tag">Messaging</span>
                </div>
              </div>
              <Link href="/contact" className="qs-csd-btn-similar w-inline-block">
                <span>Start a similar project</span>
                <span className="qs-csd-btn-similar-icon" aria-hidden>
                  <ServiceArrowIcon variant="on-light" />
                </span>
              </Link>
            </aside>
          </div>

          <div className="qs-csd-hero-image-wrap">
            <Image
              src={`${ASSET}/hero-terminal.jpg`}
              alt=""
              width={1272}
              height={520}
              className="qs-csd-hero-image"
              priority
              sizes="(max-width: 1304px) 100vw, 1272px"
            />
          </div>
        </div>
      </section>

      <section className="qs-csd-section qs-csd-challenge">
        <div className="qs-inner">
          <div className="qs-csd-two-col">
            <div className="qs-csd-col">
              <div className="qs-csd-label-row">
                <span className="qs-csd-label-bar" aria-hidden />
                <span className="qs-csd-label-text">The Challenge</span>
              </div>
              <h2 className="qs-csd-heading-line">
                <span className="qs-csd-heading-strong">Identifying the </span>
                <span className="qs-csd-serif">real problem</span>
              </h2>
              <p className="qs-csd-body">
                The fintech market had become saturated with similar-looking
                brands all promising the same values: speed, simplicity, and
                security. FlowBank struggled to communicate what made them
                genuinely different — their human-first approach to digital
                banking.
              </p>
              <div className="qs-csd-key-box qs-csd-key-box--challenge">
                <p className="qs-csd-key-box-title">Key challenges</p>
                <ul className="qs-csd-key-list">
                  {CHALLENGE_ITEMS.map((t) => (
                    <li key={t} className="qs-csd-key-item">
                      <span className="qs-csd-key-icon qs-csd-key-icon--red">
                        <Image
                          src={`${ASSET}/icon-check-red.svg`}
                          alt=""
                          width={9}
                          height={9}
                        />
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="qs-csd-col">
              <div className="qs-csd-label-row">
                <span className="qs-csd-label-bar" aria-hidden />
                <span className="qs-csd-label-text">Our Approach</span>
              </div>
              <h2 className="qs-csd-heading-line">
                <span className="qs-csd-heading-strong">
                  Turning insight into{" "}
                </span>
                <span className="qs-csd-serif">strategy</span>
              </h2>
              <p className="qs-csd-body">
                We began with a comprehensive market audit and stakeholder
                immersion, interviewing 40+ customers to uncover what they
                truly valued in a financial partner. This research revealed an
                underserved emotional need: people didn&apos;t just want fast
                banking — they wanted to feel financially empowered.
              </p>
              <div className="qs-csd-key-box qs-csd-key-box--approach">
                <p className="qs-csd-key-box-title">Key highlights</p>
                <ul className="qs-csd-key-list">
                  {APPROACH_ITEMS.map((t) => (
                    <li key={t} className="qs-csd-key-item">
                      <span className="qs-csd-key-icon qs-csd-key-icon--blue">
                        <Image
                          src={`${ASSET}/icon-check-blue.svg`}
                          alt=""
                          width={9}
                          height={9}
                        />
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="qs-csd-section qs-csd-process-section">
        <div className="qs-inner">
          <div className="qs-csd-process-head">
            <h2 className="qs-csd-process-title home-heading-h2">
              How we <span className="span-txt">approached it</span>
            </h2>
            <p className="qs-csd-process-sub">
              A structured process designed to uncover insight, build clarity,
              and deliver results.
            </p>
          </div>
          <div className="qs-csd-process-grid">
            {PROCESS_STEPS.map((s) => (
              <div key={s.num} className="qs-csd-process-card">
                <p className="qs-csd-process-num">{s.num}</p>
                <div>
                  <h3 className="qs-csd-process-card-title">{s.title}</h3>
                  <p className="qs-csd-process-card-body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="qs-csd-section qs-csd-results">
        <div className="qs-inner">
          <div className="qs-csd-results-head">
            <h2 className="qs-csd-results-title">
              The <span className="qs-csd-serif">results</span>
            </h2>
            <p className="qs-csd-results-lede">
              Measurable outcomes that demonstrate the real-world impact of
              strategic thinking.
            </p>
          </div>
          <div className="qs-csd-results-grid">
            <div className="qs-csd-stat qs-csd-stat--dark">
              <p className="qs-csd-stat-num">3.5x</p>
              <p className="qs-csd-stat-label">
                Brand awareness increase in 6 months
              </p>
            </div>
            <div className="qs-csd-stat qs-csd-stat--tint">
              <p className="qs-csd-stat-num">40%</p>
              <p className="qs-csd-stat-label qs-csd-stat-label--dark">
                New customer acquisition growth
              </p>
            </div>
            <div className="qs-csd-stat qs-csd-stat--tint">
              <p className="qs-csd-stat-num">+185%</p>
              <p className="qs-csd-stat-label qs-csd-stat-label--dark">
                Brand value increase post-launch
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="qs-csd-section qs-csd-gallery-section">
        <div className="qs-inner">
          <div className="qs-csd-gallery-head">
            <div className="qs-csd-label-row">
              <span className="qs-csd-label-bar" aria-hidden />
              <span className="qs-csd-label-text">Project Gallery</span>
            </div>
            <span className="qs-csd-gallery-count">3 Images</span>
          </div>
          <div className="qs-csd-gallery-grid">
            <div className="qs-csd-gallery-main">
              <Image
                src={`${ASSET}/gallery-main.jpg`}
                alt=""
                width={843}
                height={520}
                className="qs-csd-gallery-img"
                sizes="(max-width: 991px) 100vw, 66%"
              />
            </div>
            <div className="qs-csd-gallery-stack">
              <Image
                src={`${ASSET}/gallery-top.jpg`}
                alt=""
                width={413}
                height={252}
                className="qs-csd-gallery-img"
                sizes="(max-width: 991px) 100vw, 34%"
              />
              <Image
                src={`${ASSET}/gallery-bottom.jpg`}
                alt=""
                width={413}
                height={252}
                className="qs-csd-gallery-img"
                sizes="(max-width: 991px) 100vw, 34%"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="qs-csd-quote-banner" aria-label="Project overview">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${ASSET}/hero-terminal.jpg`}
          alt=""
          className="qs-csd-quote-banner-bg"
        />
        <div className="qs-csd-quote-banner-gradient" />
        <div className="qs-inner qs-csd-quote-banner-inner">
          <div className="qs-csd-label-row qs-csd-label-row--on-dark">
            <span className="qs-csd-label-bar" aria-hidden />
            <span className="qs-csd-label-text qs-csd-label-text--on-dark">
              Project overview
            </span>
          </div>
          <blockquote className="qs-csd-quote-banner-text">
            &ldquo;Awake helped us discover who we really are as a brand.&rdquo;
          </blockquote>
          <div className="qs-csd-quote-banner-person">
            <Image
              src={`${ASSET}/avatar.jpg`}
              alt=""
              width={40}
              height={40}
              className="qs-csd-quote-banner-avatar"
            />
            <div>
              <p className="qs-csd-quote-banner-name">Michael Chen</p>
              <p className="qs-csd-quote-banner-role">CEO, FlowBank</p>
            </div>
          </div>
        </div>
      </section>

      <section className="qs-csd-section qs-csd-testimonial">
        <div className="qs-inner qs-csd-testimonial-inner">
          <Image
            src={`${ASSET}/icon-quote.svg`}
            alt=""
            width={48}
            height={36}
            className="qs-csd-testimonial-quote-icon"
          />
          <blockquote className="qs-csd-testimonial-quote">
            &ldquo;Awake helped us discover who we really are as a brand. Their
            strategic process uncovered insights that transformed how we
            position ourselves in the market. We went from being just another
            fintech to a brand people genuinely connect with.&rdquo;
          </blockquote>
          <div className="qs-csd-stars" aria-label="5 out of 5 stars">
            {[0, 1, 2, 3].map((i) => (
              <Image
                key={i}
                src={`${ASSET}/icon-star.svg`}
                alt=""
                width={18}
                height={18}
              />
            ))}
            <Image
              src={`${ASSET}/icon-star-half.svg`}
              alt=""
              width={18}
              height={18}
            />
          </div>
          <div className="qs-csd-testimonial-author">
            <Image
              src={`${ASSET}/avatar.jpg`}
              alt=""
              width={48}
              height={48}
              className="qs-csd-testimonial-avatar"
            />
            <div>
              <p className="qs-csd-testimonial-name">Michael Chen</p>
              <p className="qs-csd-testimonial-role">CEO, FlowBank</p>
            </div>
          </div>
        </div>
      </section>

      <section className="qs-csd-section qs-csd-conclusion">
        <div className="qs-inner">
          <div className="qs-csd-conclusion-grid">
            <div>
              <div className="qs-csd-label-row">
                <span className="qs-csd-label-bar" aria-hidden />
                <span className="qs-csd-label-text qs-csd-label-text--sm">
                  Final conclusion
                </span>
              </div>
              <h2 className="qs-csd-conclusion-title">
                <span className="qs-csd-heading-strong">
                  A project built on{" "}
                </span>
                <span className="qs-csd-serif">precision</span>
              </h2>
              <p className="qs-csd-conclusion-title-line">
                and lasting impact
              </p>
              <div className="qs-csd-conclusion-stats">
                <div>
                  <p className="qs-csd-conclusion-stat-num">3.5x</p>
                  <p className="qs-csd-conclusion-stat-label">
                    Brand awareness increase in 6 months
                  </p>
                </div>
                <div>
                  <p className="qs-csd-conclusion-stat-num">40%</p>
                  <p className="qs-csd-conclusion-stat-label">
                    New customer acquisition growth
                  </p>
                </div>
                <div>
                  <p className="qs-csd-conclusion-stat-num">+185%</p>
                  <p className="qs-csd-conclusion-stat-label">
                    Brand value increase post-launch
                  </p>
                </div>
              </div>
            </div>
            <div className="qs-csd-conclusion-copy">
              <p>
                We began with a comprehensive market audit and stakeholder
                immersion, interviewing 40+ customers to uncover what they
                truly valued in a financial partner. This research revealed an
                underserved emotional need: people didn&apos;t just want fast
                banking — they wanted to feel financially empowered. The work
                we delivered for FlowBank Ltd represents exactly the kind of
                impact we pursue with every engagement — strategic clarity
                translated into measurable commercial outcomes.
              </p>
              <p>
                From initial discovery through to final delivery, every decision
                was guided by a single question: what will genuinely move this
                brand forward? The results speak for themselves.
              </p>
              <div className="qs-csd-conclusion-actions">
                <Link href="/contact" className="qs-csd-btn-dark w-inline-block">
                  <span>Start your project</span>
                  <span className="qs-csd-btn-dark-icon" aria-hidden>
                    <ServiceArrowIcon variant="on-light" />
                  </span>
                </Link>
                <Link
                  href="/case-studies"
                  className="qs-csd-btn-outline w-inline-block"
                >
                  <span>View all work</span>
                  <span className="qs-csd-btn-outline-icon" aria-hidden>
                    <ServiceArrowIcon variant="on-light" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="qs-csd-section qs-csd-more">
        <div className="qs-inner">
          <div className="qs-csd-more-head">
            <div>
              <h2 className="qs-csd-more-title home-heading-h2">
                More of our <span className="span-txt">work</span>
              </h2>
              <p className="qs-csd-more-lede">
                Explore other projects where we&apos;ve applied the same rigour
                and creative thinking to real brand challenges.
              </p>
            </div>
            <Link href="/case-studies" className="qs-csd-btn-all w-inline-block">
              <span>All projects</span>
              <span className="qs-csd-btn-all-icon" aria-hidden>
                <ServiceArrowIcon variant="on-light" />
              </span>
            </Link>
          </div>
          <div className="qs-csd-more-grid">
            <Link
              href="/contact"
              className="qs-csd-more-card w-inline-block"
            >
              <div className="qs-csd-more-img-wrap">
                <Image
                  src={`${ASSET}/project-academy.jpg`}
                  alt=""
                  width={624}
                  height={280}
                  className="qs-csd-more-img"
                />
                <span className="qs-csd-more-badge">Brand Identity</span>
              </div>
              <div className="qs-csd-more-body">
                <div className="qs-csd-more-title-row">
                  <div className="qs-csd-more-text">
                    <p className="qs-csd-more-card-name">Academy.co</p>
                    <p className="qs-csd-more-card-meta">Academy.co · 2024</p>
                  </div>
                  <span className="qs-csd-more-arrow" aria-hidden>
                    <ServiceArrowIcon variant="on-light" />
                  </span>
                </div>
              </div>
            </Link>
            <Link
              href="/contact"
              className="qs-csd-more-card w-inline-block"
            >
              <div className="qs-csd-more-img-wrap">
                <Image
                  src={`${ASSET}/project-genome.jpg`}
                  alt=""
                  width={624}
                  height={280}
                  className="qs-csd-more-img"
                />
                <span className="qs-csd-more-badge">UI/UX Design</span>
              </div>
              <div className="qs-csd-more-body">
                <div className="qs-csd-more-title-row">
                  <div className="qs-csd-more-text">
                    <p className="qs-csd-more-card-name">Genome Health</p>
                    <p className="qs-csd-more-card-meta">Genome Health · 2023</p>
                  </div>
                  <span className="qs-csd-more-arrow" aria-hidden>
                    <ServiceArrowIcon variant="on-light" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="qs-csd-next">
        <div className="qs-inner">
          <p className="qs-csd-next-label">Next Project</p>
          <Link href="/contact" className="qs-csd-next-card w-inline-block">
            <div className="qs-csd-next-bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/project-academy.jpg`}
                alt=""
                className="qs-csd-next-bg-img"
              />
              <div className="qs-csd-next-overlay" />
            </div>
            <div className="qs-csd-next-content">
              <div>
                <p className="qs-csd-next-name">Academy.co</p>
                <p className="qs-csd-next-meta">
                  Brand Identity · Education
                </p>
              </div>
              <span className="qs-csd-next-btn">
                View Project
                <span className="qs-csd-next-btn-icon" aria-hidden>
                  <ServiceArrowIcon variant="on-dark" />
                </span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="qs-csd-final-cta">
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
                  <Image
                    src={`${ASSET}/icon-phone.svg`}
                    alt=""
                    width={16}
                    height={16}
                  />
                  +92 0105 192 3556
                </a>
                <a
                  href="mailto:hello@awake.agency"
                  className="qs-csd-final-pill"
                >
                  <Image
                    src={`${ASSET}/icon-mail.svg`}
                    alt=""
                    width={16}
                    height={16}
                  />
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
                  <Image
                    src={`${ASSET}/icon-lock.svg`}
                    alt=""
                    width={12}
                    height={12}
                  />
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
