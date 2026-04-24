"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TemplateFooter } from "@/components/TemplateFooter";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { ServiceArrowIcon } from "@/components/ServiceArrowIcon";
import {
  getCaseStudyVariant,
  getOtherCaseStudies,
} from "@/lib/caseStudyProject";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

const ASSET = "/assets/figma-case-study-details";

export function CaseStudyDetailsPageBody() {
  const searchParams = useSearchParams();
  const v = getCaseStudyVariant(searchParams.get("project"));
  const moreProjects = getOtherCaseStudies(v.id, 2);
  const heroRef = useHeroAnimation();

  const testimonialQuote = v.testimonial.quote.replace(
    "{sector}",
    v.quoteSectorPhrase,
  );

  return (
    <div className="main qs-csd-page">
      <div className="gradient-background" />
      <TemplateNavbar />

      <section className="qs-csd-hero" aria-labelledby="qs-csd-hero-title">
        <div className="qs-inner">
          <nav className="qs-csd-breadcrumb" aria-label="Breadcrumb">
            <Link href="/case-studies" className="qs-csd-breadcrumb-link">
              Case studies
            </Link>
            <Image
              src={`${ASSET}/icon-chevron.svg`}
              alt=""
              width={16}
              height={16}
              className="qs-csd-breadcrumb-sep"
            />
            <span className="qs-csd-breadcrumb-current">{v.clientName}</span>
          </nav>

          <div className="qs-csd-hero-top">
            <div className="qs-csd-hero-copy">
              <div className="qs-csd-hero-badges">
                <span className="qs-csd-badge qs-csd-badge--accent">
                  {v.primaryBadge}
                </span>
                <span className="qs-csd-badge qs-csd-badge--muted">
                  {v.secondaryBadge}
                </span>
              </div>
              <h1 ref={heroRef} id="qs-csd-hero-title" className="qs-csd-hero-title">
                <span className="qs-csd-hero-title-strong">{v.clientName}</span>
                <span className="qs-csd-serif qs-csd-hero-title-serif">
                  {" "}
                  — {v.industryShort}
                </span>
              </h1>
              <p className="qs-csd-hero-lede">{v.lede}</p>
            </div>

            <aside className="qs-csd-meta-card-wrap">
              <div className="qs-csd-meta-card">
                <div className="qs-csd-meta-row">
                  <span className="qs-csd-meta-label">Client</span>
                  <span className="qs-csd-meta-value">{v.clientLegal}</span>
                </div>
                <div className="qs-csd-meta-row">
                  <span className="qs-csd-meta-label">Year</span>
                  <span className="qs-csd-meta-value">{v.year}</span>
                </div>
                <div className="qs-csd-meta-row">
                  <span className="qs-csd-meta-label">Industry</span>
                  <span className="qs-csd-meta-value">{v.industry}</span>
                </div>
                <div className="qs-csd-meta-row">
                  <span className="qs-csd-meta-label">Services</span>
                  <span className="qs-csd-meta-value">{v.servicesLine}</span>
                </div>
                <div className="qs-csd-meta-tags">
                  {v.metaTags.map((tag) => (
                    <span key={tag} className="qs-csd-meta-tag">
                      {tag}
                    </span>
                  ))}
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
              src={v.heroImage}
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
                {v.challengeMarket} {v.challengeStruggle}
              </p>
              <div className="qs-csd-key-box qs-csd-key-box--challenge">
                <p className="qs-csd-key-box-title">Key challenges</p>
                <ul className="qs-csd-key-list">
                  {v.challengeItems.map((t) => (
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
              <p className="qs-csd-body">{v.approachLead}</p>
              <div className="qs-csd-key-box qs-csd-key-box--approach">
                <p className="qs-csd-key-box-title">Key highlights</p>
                <ul className="qs-csd-key-list">
                  {v.approachItems.map((t) => (
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
              {v.processHeading.strong}
              <span className="span-txt">{v.processHeading.serif}</span>
            </h2>
            <p className="qs-csd-process-sub">
              A structured process designed to uncover insight, build clarity,
              and deliver results.
            </p>
          </div>
          <div className="qs-csd-process-grid">
            {v.processSteps.map((s) => (
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
              {v.resultsHeading.strong}
              <span className="qs-csd-serif">{v.resultsHeading.serif}</span>
            </h2>
            <p className="qs-csd-results-lede">{v.resultsLede}</p>
          </div>
          <div className="qs-csd-results-grid">
            {v.results.map((r) => {
              const tone = r.tone ?? "tint";
              return (
                <div
                  key={r.label}
                  className={`qs-csd-stat qs-csd-stat--${tone}`}
                >
                  <p className="qs-csd-stat-num">{r.value}</p>
                  <p
                    className={`qs-csd-stat-label${tone === "tint" ? " qs-csd-stat-label--dark" : ""}`}
                  >
                    {r.label}
                  </p>
                </div>
              );
            })}
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
          src={v.heroImage}
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
            &ldquo;{testimonialQuote}&rdquo;
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
              <p className="qs-csd-quote-banner-name">{v.testimonial.name}</p>
              <p className="qs-csd-quote-banner-role">{v.testimonial.role}</p>
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
            &ldquo;{testimonialQuote}&rdquo;
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
              <p className="qs-csd-testimonial-name">{v.testimonial.name}</p>
              <p className="qs-csd-testimonial-role">{v.testimonial.role}</p>
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
                  {v.conclusionHeading.strong}
                </span>
                <span className="qs-csd-serif">
                  {v.conclusionHeading.serif}
                </span>
              </h2>
              <p className="qs-csd-conclusion-title-line">
                {v.conclusionSubtitle}
              </p>
              <div className="qs-csd-conclusion-stats">
                {v.results.map((r) => (
                  <div key={r.label}>
                    <p className="qs-csd-conclusion-stat-num">{r.value}</p>
                    <p className="qs-csd-conclusion-stat-label">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="qs-csd-conclusion-copy">
              {v.conclusionParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
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
            {moreProjects.map((p) => (
              <Link
                key={p.id}
                href={`/case-study-details?project=${p.id}`}
                className="qs-csd-more-card w-inline-block"
              >
                <div className="qs-csd-more-img-wrap">
                  <Image
                    src={p.heroImage}
                    alt=""
                    width={624}
                    height={280}
                    className="qs-csd-more-img"
                  />
                  <span className="qs-csd-more-badge">{p.primaryBadge}</span>
                </div>
                <div className="qs-csd-more-body">
                  <div className="qs-csd-more-title-row">
                    <div className="qs-csd-more-text">
                      <p className="qs-csd-more-card-name">{p.clientName}</p>
                      <p className="qs-csd-more-card-meta">
                        {p.clientName} · {p.year}
                      </p>
                    </div>
                    <span className="qs-csd-more-arrow" aria-hidden>
                      <ServiceArrowIcon variant="on-light" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
                <a href="tel:+13074272883" className="qs-csd-final-pill">
                  <Image
                    src={`${ASSET}/icon-phone.svg`}
                    alt=""
                    width={16}
                    height={16}
                  />
                  +1 (307) 427-2883
                </a>
                <a
                  href="mailto:hello@quadsolutions.ai"
                  className="qs-csd-final-pill"
                >
                  <Image
                    src={`${ASSET}/icon-mail.svg`}
                    alt=""
                    width={16}
                    height={16}
                  />
                  hello@quadsolutions.ai
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
