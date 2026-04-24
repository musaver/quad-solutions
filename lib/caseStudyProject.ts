const FIGMA_LIST = "/assets/figma-case-studies";

export const CASE_STUDY_ORDER = [
  "heyam",
  "mexivida",
  "blends",
  "home-services",
  "wellness",
] as const;

export type CaseStudyProjectId = (typeof CASE_STUDY_ORDER)[number];

export type CaseStudyResult = {
  value: string;
  label: string;
  tone?: "dark" | "tint";
};

export type CaseStudyProcessStep = {
  num: string;
  title: string;
  body: string;
};

export type CaseStudyTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export type CaseStudyVariant = {
  id: CaseStudyProjectId;
  clientName: string;
  clientLegal: string;
  industry: string;
  industryShort: string;
  year: string;
  primaryBadge: string;
  secondaryBadge: string;
  lede: string;
  challengeMarket: string;
  challengeStruggle: string;
  approachLead: string;
  challengeItems: string[];
  approachItems: string[];
  processHeading: { strong: string; serif: string };
  processSteps: CaseStudyProcessStep[];
  results: CaseStudyResult[];
  resultsHeading: { strong: string; serif: string };
  resultsLede: string;
  testimonial: CaseStudyTestimonial;
  conclusionHeading: { strong: string; serif: string };
  conclusionSubtitle: string;
  conclusionParagraphs: string[];
  quoteSectorPhrase: string;
  servicesLine: string;
  metaTags: string[];
  heroImage: string;
};

export const CASE_STUDY_VARIANTS: Record<CaseStudyProjectId, CaseStudyVariant> = {
  heyam: {
    id: "heyam",
    clientName: "Heyam.ae",
    clientLegal: "Heyam.ae",
    industry: "Luxury Fashion",
    industryShort: "UAE Luxury",
    year: "2025",
    primaryBadge: "E-commerce Growth",
    secondaryBadge: "Luxury Fashion",
    lede: "Heyam needed to scale from a luxury fashion startup to a dominant market leader in the competitive UAE e-commerce landscape — building brand authority from zero while protecting premium positioning.",
    challengeMarket:
      "As a new luxury brand in the UAE, Heyam faced intense competition from established international and local labels.",
    challengeStruggle:
      "They needed to build high-end brand authority from scratch while maintaining a high conversion rate on their Shopify store — without diluting exclusivity as they scaled.",
    approachLead:
      "We deployed a comprehensive growth strategy focusing on social authority, influencer synergy, and conversion rate optimisation (CRO) — building brand equity and unit economics in parallel so scale didn't cheapen the brand.",
    challengeItems: [
      "Zero initial social media presence or brand following",
      "High cart abandonment rates on the Shopify store",
      'Need for a "premium" brand voice that resonated with UAE luxury buyers',
      "Scaling sales without diluting brand exclusivity",
    ],
    approachItems: [
      "Social Authority Building",
      "Influencer & UGC Strategy",
      "Shopify Conversion Optimisation",
      "Data-Driven Meta Campaigns",
    ],
    processHeading: { strong: "How we ", serif: "scaled it" },
    processSteps: [
      {
        num: "01",
        title: "Social Authority Building",
        body: "We grew the brand's Instagram following from 0 to 100K+ by focusing on high-end visual storytelling and consistent engagement with the UAE fashion community.",
      },
      {
        num: "02",
        title: "Influencer & UGC Strategy",
        body: "By collaborating with key UAE influencers and leveraging user-generated content, we built immediate trust and social proof — making the brand a must-have in the region.",
      },
      {
        num: "03",
        title: "Shopify Conversion Optimisation",
        body: "We overhauled the Shopify store, streamlining the checkout process and improving the mobile experience, resulting in a 4× improvement in conversion rates.",
      },
      {
        num: "04",
        title: "Data-Driven Meta Campaigns",
        body: "We utilised advanced audience segmentation and retargeting strategies on Meta to drive high-intent traffic, significantly reducing cart abandonment.",
      },
    ],
    resultsHeading: { strong: "The ", serif: "results" },
    resultsLede:
      "Measurable outcomes that demonstrate the real-world impact of our growth strategy.",
    results: [
      {
        value: "$80K+",
        label: "Monthly sales achieved from a $0 baseline",
        tone: "dark",
      },
      {
        value: "4x",
        label: "Conversion rate improvement on Shopify",
        tone: "tint",
      },
      {
        value: "100K+",
        label: "Organic social media following built in record time",
        tone: "tint",
      },
    ],
    testimonial: {
      quote:
        "By combining UGC marketing and data-driven ads, we turned a startup into a UAE fashion powerhouse.",
      name: "Mustafa H.",
      role: "Growth Strategist & E-commerce Consultant",
    },
    conclusionHeading: { strong: "A project built on ", serif: "precision" },
    conclusionSubtitle: "in a crowded luxury market",
    conclusionParagraphs: [
      "The success of Heyam.ae proves that a well-executed digital strategy can disrupt even the most competitive luxury markets. We didn't just sell clothes — we built a brand that the UAE market now recognises as a leader.",
      "From zero followers and no brand recognition to 100K+ organic audience, 4× Shopify conversion, and a consistent $80K+ monthly run-rate — Heyam.ae is now a luxury reference point in the region.",
    ],
    quoteSectorPhrase: "UAE fashion brand",
    servicesLine: "E-commerce Growth",
    metaTags: ["Shopify CRO", "Meta Ads", "Influencer & UGC"],
    heroImage: `${FIGMA_LIST}/heyam.jpg`,
  },
  mexivida: {
    id: "mexivida",
    clientName: "MexiVida",
    clientLegal: "MexiVida",
    industry: "E-commerce / DTC",
    industryShort: "E-commerce",
    year: "2025",
    primaryBadge: "E-commerce Growth",
    secondaryBadge: "DTC / CPG",
    lede: "MexiVida needed to transition from a single-product organic niche brand to a high-volume e-commerce leader in the US market — reaching a Spanish-speaking audience that demanded cultural authenticity and modern reliability in equal measure.",
    challengeMarket:
      "The client launched in April 2024 with a single organic product but struggled to gain traction.",
    challengeStruggle:
      "Their target audience — Spanish-speaking individuals aged 30+ in the US — required a specific cultural approach that balanced organic authenticity with modern reliability, without appearing overly premium or inaccessible.",
    approachLead:
      "We implemented a multi-phase growth strategy that combined cultural content creation, marketplace optimisation, and aggressive paid advertising — turning a niche organic launch into a consistent $50K+/month performer.",
    challengeItems: [
      "Limited sales volume (30 orders per month)",
      "Content that didn't resonate with the Spanish-speaking demographic",
      "Lack of visibility on major marketplaces like Amazon",
      "Inefficient ad spend and low organic reach",
    ],
    approachItems: [
      "Cultural Content Production",
      "Amazon SEO & Listing Optimisation",
      "Meta & Amazon Ads Integration",
      "Scaling Operations",
    ],
    processHeading: { strong: "How we ", serif: "scaled it" },
    processSteps: [
      {
        num: "01",
        title: "Cultural Content Production",
        body: "We created catchy, relatable content specifically for the Spanish-speaking US demographic, focusing on the organic benefits of the product in a way that felt authentic rather than corporate.",
      },
      {
        num: "02",
        title: "Amazon SEO & Listing Optimisation",
        body: "We overhauled the Amazon presence, optimising listings for high-intent Spanish and English keywords to capture organic search traffic before launching paid campaigns.",
      },
      {
        num: "03",
        title: "Meta & Amazon Ads Integration",
        body: "By synchronising Meta Ads for top-of-funnel awareness with Amazon Ads for bottom-of-funnel conversion, we created a seamless customer journey.",
      },
      {
        num: "04",
        title: "Scaling Operations",
        body: "We continuously optimised ad sets and inventory management to support the rapid increase in order volume, ensuring sustainability during the scale-up.",
      },
    ],
    resultsHeading: { strong: "The ", serif: "results" },
    resultsLede:
      "Measurable outcomes that demonstrate the real-world impact of our growth strategy.",
    results: [
      {
        value: "26x",
        label: "Order volume increase (from 30 to 800+ orders/month)",
        tone: "dark",
      },
      {
        value: "$50K+",
        label: "Monthly revenue milestone achieved",
        tone: "tint",
      },
      {
        value: "Top 1%",
        label: "Amazon category ranking for key organic terms",
        tone: "tint",
      },
    ],
    testimonial: {
      quote:
        "QUAD transformed our single-product brand into a market leader by understanding our audience better than we did.",
      name: "Mustafa H.",
      role: "E-Commerce Growth Strategist, MexiVida",
    },
    conclusionHeading: { strong: "A project built on ", serif: "precision" },
    conclusionSubtitle: "and niche-specific expertise",
    conclusionParagraphs: [
      "The work we delivered for MexiVida represents the power of niche-specific expertise. By combining cultural insights with technical ad optimisation, we moved the brand from obscurity to a consistent $50K+/month performer.",
      "What started as a single-product launch with 30 orders a month is now a scaling e-commerce operation — built on cultural content, marketplace SEO, and synchronised Meta and Amazon advertising that compound month over month.",
    ],
    quoteSectorPhrase: "niche organic brand",
    servicesLine: "E-commerce Growth",
    metaTags: ["Meta Ads", "Amazon SEO", "Cultural Content"],
    heroImage: `${FIGMA_LIST}/mexivida.jpg`,
  },
  blends: {
    id: "blends",
    clientName: "Blends Barbershop",
    clientLegal: "Blends Barbershop",
    industry: "Grooming · Local Services",
    industryShort: "Local Services",
    year: "2025",
    primaryBadge: "Local Growth",
    secondaryBadge: "Grooming / AU",
    lede: "Blends Barbershop needed to fill its appointment books and establish a dominant local presence in the competitive Australian grooming market — turning local attention into booked chairs, not just likes.",
    challengeMarket:
      "Starting a new barbershop in Australia, the owner struggled to attract consistent foot traffic and online bookings.",
    challengeStruggle:
      "With a high-quality service but low local visibility, the shop was operating well below capacity during its first few months — and generic marketing wasn't moving the needle.",
    approachLead:
      "We implemented a Hyper-Local Booking Engine strategy — using targeted ads and a frictionless booking funnel to turn local scrollers into confirmed appointments, then turning booked clients into a review and referral loop that compounds.",
    challengeItems: [
      "Empty appointment slots during weekdays",
      "Low brand awareness in the local Australian community",
      "Ineffective initial marketing efforts that didn't drive bookings",
      "Need for a sustainable system to ensure repeat clientele",
    ],
    approachItems: [
      "Hyper-Local Meta & Google Ads",
      "Booking Funnel Optimisation",
      "Social Proof & Review Generation",
      "Scaling to Multiple Locations",
    ],
    processHeading: { strong: "How we ", serif: "booked it out" },
    processSteps: [
      {
        num: "01",
        title: "Hyper-Local Meta & Google Ads",
        body: "We launched highly targeted campaigns within a specific radius of the shop, using 'Before & After' visuals to capture the attention of local men looking for premium grooming.",
      },
      {
        num: "02",
        title: "Booking Funnel Optimisation",
        body: "We streamlined the online booking process, making it possible for a client to book a slot in under 30 seconds directly from an ad.",
      },
      {
        num: "03",
        title: "Social Proof & Review Generation",
        body: "We implemented a system to encourage satisfied clients to leave reviews and share their cuts on social media, creating an organic growth loop.",
      },
      {
        num: "04",
        title: "Scaling to Multiple Locations",
        body: "After 3 months of fully booked weeks, we transitioned the strategy to support the launch of the owner's second shop location.",
      },
    ],
    resultsHeading: { strong: "The ", serif: "results" },
    resultsLede:
      "Measurable outcomes that demonstrate the real-world impact of our local growth strategy.",
    results: [
      {
        value: "100%",
        label: "Appointment slots filled every week after 3 months",
        tone: "dark",
      },
      {
        value: "2nd",
        label: "Shop location launched due to rapid success",
        tone: "tint",
      },
      {
        value: "#1",
        label: "Top-rated local barbershop in the target area",
        tone: "tint",
      },
    ],
    testimonial: {
      quote:
        "We turned a struggling new shop into a fully booked local sensation, paving the way for their second location.",
      name: "Mustafa H.",
      role: "Digital Marketing Expert",
    },
    conclusionHeading: { strong: "A project built on ", serif: "precision" },
    conclusionSubtitle: "in the local market",
    conclusionParagraphs: [
      "Blends Barbershop is a perfect example of how targeted digital marketing can transform a local service business. By focusing on the booking as the ultimate metric, we gave the owner the financial stability to expand his brand.",
      "From empty weekday slots to a fully booked chair and a second location — the system that got there (hyper-local ads, a 30-second booking flow, and a steady review loop) keeps compounding every week.",
    ],
    quoteSectorPhrase: "local service business",
    servicesLine: "Local Growth Marketing",
    metaTags: ["Hyper-Local Ads", "Booking Funnel", "Review Loops"],
    heroImage: `${FIGMA_LIST}/blends.jpg`,
  },
  "home-services": {
    id: "home-services",
    clientName: "US Home Services",
    clientLegal: "US Home Services (anonymised)",
    industry: "Home Services",
    industryShort: "Home Services",
    year: "2025",
    primaryBadge: "Lead Generation",
    secondaryBadge: "Home Services / US",
    lede: "A US-based home services provider needed a high-volume, high-intent lead generation system for 15+ specialised services — including roofing, solar, and ADU installation — with consistent daily flow and real sales-team ROI.",
    challengeMarket:
      "Managing lead generation for 15+ different services (roofing, solar, ADU, and more) across the US is complex by default — each service has its own buyer psychology, seasonality, and unit economics.",
    challengeStruggle:
      "The client was receiving low-quality leads that didn't convert, leading to wasted ad spend and a frustrated sales team chasing window shoppers instead of closing deals.",
    approachLead:
      "We built a Service-Specific Lead Engine that qualified prospects before they ever reached the client's sales team — so sales only spoke to high-intent homeowners, and every ad dollar compounded toward booked appointments, not noise.",
    challengeItems: [
      "High competition in the US home services market",
      'Low lead quality and high "no-show" rates for appointments',
      "Difficulty in tracking ROI across 15+ different service lines",
      "High Cost Per Acquisition (CPA) for premium services like Solar and ADU",
    ],
    approachItems: [
      "Multi-Channel Lead Funnels",
      "Advanced Lead Qualification",
      "Dynamic Ad Creative Strategy",
      "Real-Time CRM Integration",
    ],
    processHeading: { strong: "How we ", serif: "engineered the engine" },
    processSteps: [
      {
        num: "01",
        title: "Multi-Channel Lead Funnels",
        body: "We deployed tailored funnels for each service line — ensuring a Roofing prospect saw a completely different journey than a Solar prospect, with creative, questions, and pricing cues matched to intent.",
      },
      {
        num: "02",
        title: "Advanced Lead Qualification",
        body: "We implemented multi-step forms and AI-driven qualification to filter out window shoppers — so the sales team only spoke to high-intent homeowners ready to book.",
      },
      {
        num: "03",
        title: "Dynamic Ad Creative Strategy",
        body: "Using a mix of UGC, educational videos, and Problem/Solution imagery, we addressed specific homeowner pain points for each of the 15+ services — at the scale paid media requires.",
      },
      {
        num: "04",
        title: "Real-Time CRM Integration",
        body: "We synchronised all lead data directly into the client's CRM, allowing for immediate follow-up — critical in home services, where speed-to-lead often decides the sale.",
      },
    ],
    resultsHeading: { strong: "The ", serif: "results" },
    resultsLede:
      "Measurable outcomes that demonstrate the real-world impact of our lead gen strategy.",
    results: [
      {
        value: "3.2x",
        label: "Average increase in lead-to-appointment conversion rate",
        tone: "dark",
      },
      {
        value: "-40%",
        label: "Reduction in Cost Per Lead (CPL) across premium services",
        tone: "tint",
      },
      {
        value: "15+",
        label: "Service lines scaled with consistent daily lead flow",
        tone: "tint",
      },
    ],
    testimonial: {
      quote:
        "We didn't just generate leads; we generated high-intent appointments that moved the needle for their sales team.",
      name: "Mustafa H.",
      role: "Lead Generation Specialist",
    },
    conclusionHeading: { strong: "A project built on ", serif: "precision" },
    conclusionSubtitle: "and lead-gen psychology",
    conclusionParagraphs: [
      "Scaling 15+ home services requires a deep understanding of both the ad platform and the homeowner's psychology. Our integrated approach gave the client a predictable, scalable system for long-term growth — not a campaign that works until it doesn't.",
      "The engine treats each service line as its own economy — bespoke funnels, creative, qualification, and CRM flow — while sharing one operational layer. That's what makes it compound across 15+ offerings without drowning the sales team.",
    ],
    quoteSectorPhrase: "home services lead engine",
    servicesLine: "Lead Generation",
    metaTags: ["Lead Funnels", "CRM Integration", "Paid Media"],
    heroImage: `${FIGMA_LIST}/home-services.jpg`,
  },
  wellness: {
    id: "wellness",
    clientName: "Aesthetics & Health",
    clientLegal: "Multiple UK clinics & Balanze Training",
    industry: "Aesthetics & Fitness",
    industryShort: "Wellness",
    year: "2025",
    primaryBadge: "Lead Generation",
    secondaryBadge: "Wellness / UK",
    lede: "Aesthetics clinics in the UK and fitness centres like Balanze Training needed a consistent flow of high-value clients in a saturated wellness market — without burning budget on price shoppers or running afoul of strict medical ad policies.",
    challengeMarket:
      "The aesthetics and fitness industries are highly visual and trust-dependent — a market where authority and proof sell far more than discounts.",
    challengeStruggle:
      "Clients in the UK and globally were struggling to stand out among local competitors, often relying on word-of-mouth that wasn't enough to sustain growth — and compliance rules on Meta and Google made persuasive advertising harder than in other verticals.",
    approachLead:
      "We focused on Trust-First Marketing — using educational content, social proof, and compliance-safe ad formats to pre-sell the expertise of the clinics and gyms before the first call ever happened.",
    challengeItems: [
      'High "price-shopping" behaviour among local prospects',
      "Strict ad policies for medical/aesthetic services on Meta/Google",
      "Low show-up rates for initial consultations",
      'Need for a "premium" brand perception to justify service costs',
    ],
    approachItems: [
      "Compliance-First Ad Strategy",
      "Educational Content Funnels",
      "Automated Appointment Reminders",
      "Hyper-Local Targeting",
    ],
    processHeading: { strong: "How we ", serif: "built trust" },
    processSteps: [
      {
        num: "01",
        title: "Compliance-First Ad Strategy",
        body: "We navigated the complex ad policies for aesthetics and health services, ensuring all campaigns remained active while still being highly persuasive.",
      },
      {
        num: "02",
        title: "Educational Content Funnels",
        body: "Instead of just discounts, we used content that explained the benefits and safety of treatments (Aesthetics) or the science of the training (Balanze Fitness), building authority before the first consultation.",
      },
      {
        num: "03",
        title: "Automated Appointment Reminders",
        body: "We implemented automated SMS and email sequences to nurture leads from the moment they signed up until they walked through the door, drastically improving show-up rates.",
      },
      {
        num: "04",
        title: "Hyper-Local Targeting",
        body: "By focusing on a tight radius around the physical locations in Birmingham and other UK cities, we ensured every ad dollar was spent on people who could actually visit the clinic or gym.",
      },
    ],
    resultsHeading: { strong: "The ", serif: "results" },
    resultsLede:
      "Measurable outcomes that demonstrate the real-world impact of our wellness growth strategy.",
    results: [
      {
        value: "50%",
        label: "Average increase in consultation show-up rates",
        tone: "dark",
      },
      {
        value: "#1",
        label:
          'Local search ranks for "Aesthetics Birmingham" and "Aesthetics UK"',
        tone: "tint",
      },
      {
        value: "Consistent",
        label: "Daily flow of high-value leads for Balanze Training and UK clinics",
        tone: "tint",
      },
    ],
    testimonial: {
      quote:
        "We built a bridge of trust between the clinics and their local communities, turning scrollers into loyal clients.",
      name: "Mustafa H.",
      role: "Growth & Lead Gen Specialist",
    },
    conclusionHeading: { strong: "A project built on ", serif: "precision" },
    conclusionSubtitle: "and a trust-first engine",
    conclusionParagraphs: [
      "Whether it's a beauty clinic in the UK or a gym like Balanze, the secret to growth is combining high-end visuals with a frictionless booking experience. We provided both, ensuring long-term sustainability for our clients.",
      "Trust-first marketing isn't slower than discount-first marketing — it compounds. Educational content pre-sells, compliant ads stay live, and SMS nurture turns a scroll into a walk-in. That's how these clinics got to consistent daily lead flow and #1 local search ranks.",
    ],
    quoteSectorPhrase: "wellness brand",
    servicesLine: "Lead Generation",
    metaTags: ["Compliance Ads", "Educational Funnels", "Appointment Nurture"],
    heroImage: `${FIGMA_LIST}/wellness.jpg`,
  },
};

const DEFAULT_ID: CaseStudyProjectId = "heyam";

export function normalizeCaseStudyProjectId(
  raw: string | null | undefined,
): CaseStudyProjectId {
  if (!raw) return DEFAULT_ID;
  const key = raw.toLowerCase().trim();
  if (key in CASE_STUDY_VARIANTS) return key as CaseStudyProjectId;
  return DEFAULT_ID;
}

export function getCaseStudyVariant(
  raw: string | null | undefined,
): CaseStudyVariant {
  return CASE_STUDY_VARIANTS[normalizeCaseStudyProjectId(raw)];
}

export function getNextCaseStudy(
  current: CaseStudyProjectId,
): CaseStudyVariant {
  const idx = CASE_STUDY_ORDER.indexOf(current);
  const nextId = CASE_STUDY_ORDER[(idx + 1) % CASE_STUDY_ORDER.length];
  return CASE_STUDY_VARIANTS[nextId];
}

export function getOtherCaseStudies(
  current: CaseStudyProjectId,
  count = 2,
): CaseStudyVariant[] {
  const idx = CASE_STUDY_ORDER.indexOf(current);
  const out: CaseStudyVariant[] = [];
  for (
    let offset = 1;
    offset < CASE_STUDY_ORDER.length && out.length < count;
    offset++
  ) {
    const id = CASE_STUDY_ORDER[(idx + offset) % CASE_STUDY_ORDER.length];
    if (id !== current) out.push(CASE_STUDY_VARIANTS[id]);
  }
  return out;
}
