/**
 * Lead-qualification matching — the single source of truth for the chat widget's
 * question flow AND the API's persona matching.
 *
 * This module is PURE: no I/O, no Next.js / DB imports — so `matchLead` can be
 * unit-tested in isolation. Both the client widget and the server route import
 * from here so the flow and the matching can never drift.
 *
 * Specialist identities come from lib/team.ts (the site's real team). Booking /
 * contact details are defined in CONTACT below — update the phone number there
 * if it changes.
 */
import { TEAM_MEMBERS, type TeamMember } from "@/lib/team";

/* ------------------------------------------------------------------ */
/* Contact / booking details (update the number here if it changes)    */
/* ------------------------------------------------------------------ */
export const CONTACT = {
  bookingUrl: "/contact", // "Book a call" destination
  email: "support@quadsolutions.ai",
  phone: "+1-307-427-2883",
  phoneHref: "tel:+13074272883",
} as const;

/* ------------------------------------------------------------------ */
/* The service tree — 4 divisions × 3 sub-services (mirrors the site)  */
/* ------------------------------------------------------------------ */
export type DivisionId =
  | "growth-marketing"
  | "creative-production"
  | "digital-products"
  | "ai-automation";

export type SubService = {
  /** slug — also the deep-link segment, e.g. /growth-marketing/paid-advertising */
  slug: string;
  label: string;
  /** short helper shown under the option button */
  hint: string;
};

export type Division = {
  id: DivisionId;
  /** Q1 option label */
  label: string;
  /** name of the TEAM_MEMBERS entry that owns this division */
  specialistName: string;
  /** the persona title shown on the result card */
  specialistTitle: string;
  subServices: SubService[];
};

export const SERVICE_TREE: Division[] = [
  {
    id: "growth-marketing",
    label: "Grow my revenue / marketing",
    specialistName: "Mustafa Hassan",
    specialistTitle: "Growth Marketing Lead",
    subServices: [
      {
        slug: "paid-advertising",
        label: "Paid advertising",
        hint: "Google, Meta, LinkedIn ads that scale profitably",
      },
      {
        slug: "organic-marketing",
        label: "Organic / SEO & content",
        hint: "Compounding demand without renting every click",
      },
      {
        slug: "strategic-optimization",
        label: "Funnel & conversion optimization",
        hint: "Turn existing traffic into qualified pipeline",
      },
    ],
  },
  {
    id: "creative-production",
    label: "Create brand & content",
    specialistName: "Ahmed Khan",
    specialistTitle: "Creative Production Lead",
    subServices: [
      {
        slug: "visual-content-creation",
        label: "Visual content & brand design",
        hint: "Identity, visuals, and assets that stand out",
      },
      {
        slug: "video-post-production",
        label: "Video & post-production",
        hint: "Story-driven video, editing, and motion",
      },
      {
        slug: "ai-generated-content",
        label: "AI-generated content",
        hint: "Scale creative output with modern AI tooling",
      },
    ],
  },
  {
    id: "digital-products",
    label: "Build a product / software",
    specialistName: "Musaver Khan",
    specialistTitle: "Digital Products Lead",
    subServices: [
      {
        slug: "web-development",
        label: "Website / web app",
        hint: "Fast, scalable web platforms",
      },
      {
        slug: "mobile-app-development",
        label: "Mobile app",
        hint: "iOS & Android apps users love",
      },
      {
        slug: "custom-software-solutions",
        label: "Custom software",
        hint: "Bespoke systems built around your workflow",
      },
    ],
  },
  {
    id: "ai-automation",
    label: "Automate with AI",
    specialistName: "Agha Moiz",
    specialistTitle: "AI Automation Lead",
    subServices: [
      {
        slug: "intelligent-automation",
        label: "Workflow automation",
        hint: "Automate the tedious, free up your team",
      },
      {
        slug: "ai-communication-tools",
        label: "AI communication tools",
        hint: "Chatbots, assistants, and smart routing",
      },
      {
        slug: "advanced-ai-systems",
        label: "Advanced AI systems",
        hint: "Custom models and AI-native products",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Q3 — budget & timeline options                                      */
/* ------------------------------------------------------------------ */
export const BUDGET_OPTIONS = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
] as const;

export const TIMELINE_OPTIONS = [
  "ASAP",
  "1 – 3 months",
  "3 – 6 months",
  "Just exploring",
] as const;

/* ------------------------------------------------------------------ */
/* Matching                                                            */
/* ------------------------------------------------------------------ */
export type LeadAnswers = {
  division: string;
  subService: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone?: string;
};

export type MatchedPersona = {
  divisionId: DivisionId;
  divisionLabel: string;
  name: string;
  title: string;
  description: string;
  image: string;
  /** deep link to the specific service page, e.g. /ai-automation/intelligent-automation */
  serviceUrl: string;
  serviceLabel: string;
  bookingUrl: string;
  email: string;
  phone: string;
  phoneHref: string;
};

const DIVISION_IDS = new Set<string>(SERVICE_TREE.map((d) => d.id));

export function isDivisionId(value: unknown): value is DivisionId {
  return typeof value === "string" && DIVISION_IDS.has(value);
}

export function getDivision(id: string): Division | undefined {
  return SERVICE_TREE.find((d) => d.id === id);
}

function findMember(name: string): TeamMember | undefined {
  return TEAM_MEMBERS.find((m) => m.name === name);
}

/**
 * Pure matching function: given the qualifying answers, return the specialist
 * persona to show on the result card. Throws on an unknown division so the
 * caller can respond with a 400 rather than silently mis-routing a lead.
 */
export function matchLead(answers: LeadAnswers): MatchedPersona {
  const division = getDivision(answers.division);
  if (!division) {
    throw new Error(`Unknown division: ${answers.division}`);
  }

  // Sub-service refines the deep link; fall back to the division landing page
  // if the sub-service is missing or unrecognized (never lose the match).
  const sub = division.subServices.find((s) => s.slug === answers.subService);
  const serviceUrl = sub
    ? `/${division.id}/${sub.slug}`
    : `/${division.id}`;
  const serviceLabel = sub ? sub.label : division.label;

  const member = findMember(division.specialistName);

  const description = member?.bio
    ? member.bio
    : `Leads our ${division.label.toLowerCase()} work at Quad Solutions.`;

  return {
    divisionId: division.id,
    divisionLabel: division.label,
    name: division.specialistName,
    title: division.specialistTitle,
    description,
    image: member?.image ?? "",
    serviceUrl,
    serviceLabel,
    bookingUrl: CONTACT.bookingUrl,
    email: CONTACT.email,
    phone: CONTACT.phone,
    phoneHref: CONTACT.phoneHref,
  };
}
