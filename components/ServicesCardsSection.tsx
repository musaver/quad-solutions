"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FeatureCardChipRow } from "@/components/FeatureCardChipRow";
import { ServiceArrowIcon } from "@/components/ServiceArrowIcon";

type FeatureChipGroup = {
  title: string;
  sub?: string;
  chips: { label: string }[];
  topCount?: number;
  href?: string;
};

type FeatureCard = {
  num: string;
  title: string;
  desc: string;
  icon: string;
  bg: string;
  tile: string;
  accent: string;
  text: string;
  iconFilter: string;
  scroll: boolean;
  href: string;
  groups: FeatureChipGroup[];
};

const ICON_FILTER_BLACK =
  "brightness(0) saturate(100%)";
const ICON_FILTER_WHITE =
  "brightness(0) saturate(100%) invert(100%)";

const FEATURE_CARDS: FeatureCard[] = [
  {
    num: "01",
    title: "Growth Marketing",
    desc: "Customer acquisition, lead generation, and revenue scaling.",
    icon: "/assets/wf/67b2f932468e3acae7e236f3/68e623e24b10e2e4e2969b30_digitalmarketing.svg",
    bg: "#2E1B41",
    tile: "#2E1B41",
    accent: "#2E1B41",
    text: "#ffffff",
    iconFilter: ICON_FILTER_WHITE,
    scroll: true,
    href: "/service-details?service=marketing",
    groups: [
      {
        title: "Paid Advertising",
        sub: "Performance Marketing",
        topCount: 2,
        chips: [
          { label: "Meta Ads (Facebook & Instagram)" },
          { label: "Google Ads (Search, Display, YouTube)" },
          { label: "TikTok Ads" },
          { label: "LinkedIn Ads" },
          { label: "Pinterest Ads" },
        ],
      },
      {
        title: "Organic Marketing",
        sub: "Content Strategy",
        chips: [
          { label: "Search Engine Optimization (SEO)" },
          { label: "Social Media Management" },
          { label: "Brand Awareness Campaigns" },
        ],
      },
      {
        title: "Strategic Optimization",
        chips: [
          { label: "Audience Targeting & Segmentation" },
          { label: "Campaign Performance Analysis" },
          { label: "Lead Generation Funnels" },
        ],
      },
    ],
  },
  {
    num: "02",
    title: "Creative Production",
    desc: "High-impact visual storytelling and brand identity.",
    icon: "/assets/wf/67b2f932468e3acae7e236f3/68e6018a556df7bc3330d227_brand.svg",
    bg: "#BF32B9",
    tile: "#BF32B9",
    accent: "#BF32B9",
    text: "#ffffff",
    iconFilter: ICON_FILTER_WHITE,
    scroll: false,
    href: "/service-details?service=creative",
    groups: [
      {
        title: "Visual Content Creation",
        chips: [
          { label: "Product Photography" },
          { label: "Brand Identity Design" },
          { label: "Social Media Visuals" },
        ],
      },
      {
        title: "Video & Post-Production",
        chips: [
          { label: "Commercial & Advertisement Creatives" },
          { label: "Video Editing & Visual Refinement" },
          { label: "Graphic Design for Digital Platforms" },
        ],
      },
      {
        title: "AI-Generated Content",
        sub: "AI-Accelerated",
        chips: [
          { label: "UGC-Style AI Content" },
          { label: "Cinematic & Documentary-Style Videos" },
          { label: "Animations & Cartoon Videos" },
          { label: "Podcast & YouTube Advertisements" },
        ],
      },
    ],
  },
  {
    num: "03",
    title: "Digital Products",
    desc: "Scalable software and high-performance web solutions.",
    icon: "/assets/wf/67b2f932468e3acae7e236f3/68e621c968fd23ebcbec7320_webdevp.svg",
    bg: "#737AD1",
    tile: "#737AD1",
    accent: "#737AD1",
    text: "#ffffff",
    iconFilter: ICON_FILTER_WHITE,
    scroll: false,
    href: "/service-details?service=digital",
    groups: [
      {
        title: "Web Development",
        chips: [
          { label: "Custom Website Design & Build" },
          { label: "E-commerce Platforms" },
          { label: "Landing Page Optimization" },
        ],
      },
      {
        title: "Mobile App Development",
        chips: [
          { label: "iOS & Android Applications" },
          { label: "Cross-Platform Solutions" },
        ],
      },
      {
        title: "Custom Software Solutions",
        chips: [
          { label: "Business Process Software" },
          { label: "Scalable Digital Product Development" },
          { label: "Technology-Driven Business Solutions" },
        ],
      },
    ],
  },
  {
    num: "04",
    title: "AI & Automation",
    desc: "Operational efficiency and intelligent systems.",
    icon: "/assets/wf/67b2f932468e3acae7e236f3/68e623fa72bd543218e41cb8_uiux.svg",
    bg: "#5AC6F4",
    tile: "#5AC6F4",
    accent: "#5AC6F4",
    text: "#000000",
    iconFilter: ICON_FILTER_BLACK,
    scroll: false,
    href: "/service-details?service=ai",
    groups: [
      {
        title: "Intelligent Automation",
        href: "/service-details/intelligent-automation",
        chips: [
          { label: "Workflow Automation Systems" },
          { label: "Business Process Optimization" },
        ],
      },
      {
        title: "AI Communication Tools",
        href: "/service-details/ai-communication-tools",
        chips: [
          { label: "Custom AI Chatbots" },
          { label: "Intelligent Customer Support Systems" },
        ],
      },
      {
        title: "Advanced AI Systems",
        href: "/service-details/advanced-ai-systems",
        chips: [
          { label: "Autonomous AI Agents" },
          { label: "AI-Driven Data Insights" },
          { label: "Custom AI Integrations for Niche Workflows" },
        ],
      },
    ],
  },
];

export function ServicesCardsSection() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    // Mobile/tablet: animate each card as it scrolls into view.
    // Desktop: animate the whole row in one staggered pass.
    const isMobile = window.matchMedia("(max-width: 900px)").matches;

    if (isMobile) {
      const cards = row.querySelectorAll<HTMLElement>(".qs-feature-card");
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("is-in-view");
              io.unobserve(e.target);
            }
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
      );
      cards.forEach((c) => io.observe(c));
      return () => io.disconnect();
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setRevealed(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(row);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section qs-feature-card-section qs-section-pad">
      <div className="qs-inner">
        <div className="qs-services-header">
          <div>
            <h2 className="home-heading-h2 qs-h2">
              Everything you need to <span className="span-txt">grow</span>
            </h2>
            <p className="qs-services-lede">
              Four core disciplines, one cohesive team. Click any service to
              explore its full process, pricing, and case studies.
            </p>
          </div>
          <div className="qs-pill-count">
            <strong>{FEATURE_CARDS.length}</strong>
            <span>services available</span>
          </div>
        </div>

        <div
          ref={rowRef}
          className={`qs-feature-card-row${revealed ? " is-revealed" : ""}`}
        >
          {FEATURE_CARDS.map((card, i) => (
            <div
              key={card.num}
              className="qs-feature-card"
              style={
                {
                  "--card-bg": card.bg,
                  "--card-tile": card.tile,
                  "--card-accent": card.accent,
                  "--card-text": card.text,
                  "--card-icon-filter": card.iconFilter,
                  "--reveal-i": i,
                  "--reveal-total": card.groups.length,
                } as React.CSSProperties
              }
            >
              <Link href={card.href} className="qs-feature-card-top">
                <div className="qs-feature-card-head">
                  <h3 className="heading-25">{card.title}</h3>
                </div>
                <div className="qs-feature-card-top-row">
                  <div className="qs-feature-card-icon" aria-hidden>
                    <img
                      src={card.icon}
                      alt=""
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                  </div>
                </div>
              </Link>
              <div className="qs-feature-card-body">
                <div className="qs-feature-card-groups">
                  {card.groups.map((g, gi) => {
                    const groupStyle = {
                      "--group-i": gi,
                    } as React.CSSProperties;
                    const head = (
                      <div className="qs-feature-card-group-head">
                        <span className="qs-feature-card-group-title">
                          {g.title}
                        </span>
                        {g.sub ? (
                          <span className="qs-feature-card-group-sub">
                            {g.sub}
                          </span>
                        ) : null}
                      </div>
                    );
                    const chipRow = (
                      <FeatureCardChipRow
                        chips={g.chips}
                        topCount={g.topCount}
                      />
                    );
                    if (g.href) {
                      return (
                        <Link
                          key={g.title}
                          href={g.href}
                          className="qs-feature-card-group qs-feature-card-group-link"
                          style={groupStyle}
                        >
                          {head}
                          {chipRow}
                        </Link>
                      );
                    }
                    return (
                      <div
                        key={g.title}
                        className="qs-feature-card-group"
                        style={groupStyle}
                      >
                        {head}
                        {chipRow}
                      </div>
                    );
                  })}
                </div>
                <Link href={card.href} className="qs-feature-card-link">
                  <span>Learn more</span>
                  <span className="qs-feature-card-arrow" aria-hidden>
                    <ServiceArrowIcon variant="on-dark" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
