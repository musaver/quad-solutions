"use client";

import Link from "next/link";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/home/TeamSection";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

const ARROW_DARK =
  "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67a9e2599fa438b2b5ca91b6_arrow-top-right.png";

const DIVISIONS = [
  {
    num: "01",
    title: "Growth Marketing",
    desc: "Paid &amp; organic acquisition, CRO, and full-funnel performance built around clear KPIs.",
  },
  {
    num: "02",
    title: "Creative Production",
    desc: "Visual content, video &amp; post-production, and AI-assisted creative that scales with your campaigns.",
  },
  {
    num: "03",
    title: "Digital Products",
    desc: "Web, mobile, and custom software engineered to convert and built to last.",
  },
  {
    num: "04",
    title: "AI &amp; Automation",
    desc: "Intelligent workflows, chatbots, and advanced AI systems that save real operational hours.",
  },
];

export function SpecialistsPageBody() {
  const heroRef = useHeroAnimation();

  return (
    <div className="main qs-about-page">
      <div className="gradient-background" />
      <TemplateNavbar />

      <header className="qs-about-hero">
        <div className="qs-inner">
          <h1 ref={heroRef} className="qs-about-title">
            Meet your{" "}
            <span className="qs-about-italic">specialist leaders</span>
          </h1>
          <p className="qs-about-lede">
            Our divisions are led by industry experts who ensure every project
            is executed with precision and deep domain knowledge — backed by a
            wider team of senior specialists working under one unified roof.
          </p>
          <div className="qs-about-cta-row">
            <Link href="/contact" className="qs-btn-primary">
              <span>Talk to a Specialist</span>
              <span className="qs-btn-arrow" aria-hidden="true">
                <img src={ARROW_DARK} alt="" />
              </span>
            </Link>
            <Link href="/case-studies" className="qs-btn-dark">
              <span>See Their Work</span>
              <span className="qs-btn-arrow" aria-hidden="true">
                <img src={ARROW_DARK} alt="" />
              </span>
            </Link>
          </div>
          <div className="qs-about-trust">
            <span className="qs-about-trust-line" />
            <p className="qs-about-trust-text">
              Four divisions. One unified point of contact.
            </p>
            <span className="qs-about-trust-line is-right" />
          </div>
        </div>
      </header>

      <TeamSection
        heading={
          <>
            The senior team behind{" "}
            <span className="text-span-14">every engagement</span>
          </>
        }
      />

      <section className="qs-about-values">
        <div className="qs-inner">
          <div className="qs-about-values-head">
            <h2 className="qs-about-values-title">
              Four divisions,{" "}
              <span className="qs-about-italic">one team</span>
            </h2>
            <p className="qs-about-values-sub">
              Every engagement is staffed by the exact specialists you need —
              and managed under a single, unified point of contact.
            </p>
          </div>
          <div className="qs-about-values-grid">
            {DIVISIONS.map((d) => (
              <article key={d.num} className="qs-about-value-card">
                <p className="qs-about-value-num">{d.num}</p>
                <div>
                  <h3 className="qs-about-value-title">
                    {d.title.replace("&amp;", "&")}
                  </h3>
                  <p
                    className="qs-about-value-text"
                    dangerouslySetInnerHTML={{ __html: d.desc }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="qs-about-cta">
        <div className="qs-inner">
          <div className="qs-about-cta-card">
            <h2 className="qs-about-cta-title">
              Want a specialist on your{" "}
              <span className="qs-about-italic">next project?</span>
            </h2>
            <p className="qs-about-cta-sub">
              Book a 45-minute discovery call. We&apos;ll match the right team
              to your goals and send a tailored proposal within 48 hours.
            </p>
            <div className="qs-about-cta-row">
              <Link href="/contact" className="qs-btn-light">
                <span>Start a Conversation</span>
                <span className="qs-btn-arrow" aria-hidden="true">
                  <img src={ARROW_DARK} alt="" />
                </span>
              </Link>
              <Link href="/services" className="qs-btn-ghost">
                <span>Explore Services</span>
                <span className="qs-btn-arrow" aria-hidden="true">
                  <img src={ARROW_DARK} alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
