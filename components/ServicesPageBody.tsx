"use client";

import Link from "next/link";
import { useState } from "react";
import { ServicesTestimonials } from "@/components/ServicesTestimonials";
import { TemplateFooter } from "@/components/TemplateFooter";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { ServiceArrowIcon } from "@/components/ServiceArrowIcon";
import { ServicesCardsSection } from "@/components/ServicesCardsSection";
import { CTASection } from "@/components/home";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

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
  const heroRef = useHeroAnimation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="main qs-services-page qs-case-studies-page">
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

      

      <ServicesCardsSection />

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
                {FAQ_ITEMS.map((item, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div
                      key={item.q}
                      data-hover="false"
                      data-delay="0"
                      className={`accordian-item w-dropdown qs-faq-item${
                        isOpen ? " w--open" : ""
                      }`}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className={`accordion-toggle w-dropdown-toggle${
                          isOpen ? " w--open" : ""
                        }`}
                        style={{
                          background: "transparent",
                          border: 0,
                          width: "100%",
                          textAlign: "left",
                          cursor: "pointer",
                          font: "inherit",
                          color: "inherit",
                        }}
                      >
                        <p className="qs-faq-q">{item.q}</p>
                        <span className="qs-faq-plus-wrap" aria-hidden>
                          <svg
                            className="qs-faq-plus"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              transform: isOpen ? "rotate(45deg)" : "none",
                              transition: "transform 0.2s ease",
                            }}
                          >
                            <path
                              d="M12 5V19M5 12H19"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      </button>
                      <nav
                        className={`dropdown-list w-dropdown-list${
                          isOpen ? " w--open" : ""
                        }`}
                      >
                        <div className="text-block-34 qs-faq-a">{item.a}</div>
                      </nav>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />

      <TemplateFooter />
    </div>
  );
}
