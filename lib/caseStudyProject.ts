const FIGMA_LIST = "/assets/figma-case-studies";
const FIGMA_DETAIL = "/assets/figma-case-study-details";

export const CASE_STUDY_ORDER = [
  "flowbank",
  "academy",
  "genome",
  "hotto",
  "verdant",
  "nova",
  "craft",
  "pulse",
  "mexivida",
  "heyam",
  "blends",
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

const DEFAULT_CHALLENGE_ITEMS: string[] = [
  "Limited brand recognition in competitive market",
  "Inconsistent visual identity across touchpoints",
  "Unclear positioning and messaging strategy",
  "Low customer engagement and retention rates",
];

const DEFAULT_APPROACH_ITEMS: string[] = [
  "Discovery & Immersion",
  "Competitive Positioning",
  "Positioning Workshop",
  "Strategy Playbook",
];

const DEFAULT_PROCESS_STEPS: CaseStudyProcessStep[] = [
  {
    num: "01",
    title: "Discovery & Immersion",
    body: "Deep-dive interviews with 40+ customers and 12 stakeholders to map brand perception gaps and market opportunities.",
  },
  {
    num: "02",
    title: "Competitive Positioning",
    body: "Mapped competitors across strategic dimensions to identify the white space the brand could uniquely own.",
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

const DEFAULT_RESULTS: CaseStudyResult[] = [
  {
    value: "3.5x",
    label: "Brand awareness increase in 6 months",
    tone: "dark",
  },
  {
    value: "40%",
    label: "New customer acquisition growth",
    tone: "tint",
  },
  {
    value: "+185%",
    label: "Brand value increase post-launch",
    tone: "tint",
  },
];

const DEFAULT_TESTIMONIAL: CaseStudyTestimonial = {
  quote:
    "Awake helped us discover who we really are as a brand. Their strategic process uncovered insights that transformed how we position ourselves in the market. We went from being just another {sector} to a brand people genuinely connect with.",
  name: "Michael Chen",
  role: "CEO",
};

const DEFAULT_CONCLUSION_PARAGRAPHS = (clientLegal: string): string[] => [
  `The work we delivered for ${clientLegal} represents exactly the kind of impact we pursue with every engagement — strategic clarity translated into measurable commercial outcomes.`,
  "From initial discovery through to final delivery, every decision was guided by a single question: what will genuinely move this brand forward? The results speak for themselves.",
];

type BaseVariantInput = Omit<
  CaseStudyVariant,
  | "challengeItems"
  | "approachItems"
  | "processSteps"
  | "processHeading"
  | "results"
  | "resultsHeading"
  | "resultsLede"
  | "testimonial"
  | "conclusionHeading"
  | "conclusionSubtitle"
  | "conclusionParagraphs"
> &
  Partial<
    Pick<
      CaseStudyVariant,
      | "challengeItems"
      | "approachItems"
      | "processSteps"
      | "processHeading"
      | "results"
      | "resultsHeading"
      | "resultsLede"
      | "testimonial"
      | "conclusionHeading"
      | "conclusionSubtitle"
      | "conclusionParagraphs"
    >
  >;

function fill(v: BaseVariantInput): CaseStudyVariant {
  const testimonial: CaseStudyTestimonial = v.testimonial ?? {
    ...DEFAULT_TESTIMONIAL,
    role: `${DEFAULT_TESTIMONIAL.role}, ${v.clientName}`,
  };
  return {
    ...v,
    challengeItems: v.challengeItems ?? DEFAULT_CHALLENGE_ITEMS,
    approachItems: v.approachItems ?? DEFAULT_APPROACH_ITEMS,
    processHeading:
      v.processHeading ?? { strong: "How we ", serif: "approached it" },
    processSteps: v.processSteps ?? DEFAULT_PROCESS_STEPS,
    results: v.results ?? DEFAULT_RESULTS,
    resultsHeading:
      v.resultsHeading ?? { strong: "The ", serif: "results" },
    resultsLede:
      v.resultsLede ??
      "Measurable outcomes that demonstrate the real-world impact of strategic thinking.",
    testimonial,
    conclusionHeading:
      v.conclusionHeading ??
      { strong: "A project built on ", serif: "precision" },
    conclusionSubtitle: v.conclusionSubtitle ?? "and lasting impact",
    conclusionParagraphs:
      v.conclusionParagraphs ?? DEFAULT_CONCLUSION_PARAGRAPHS(v.clientLegal),
  };
}

const VARIANT_INPUTS: Record<CaseStudyProjectId, BaseVariantInput> = {
  flowbank: {
    id: "flowbank",
    clientName: "FlowBank",
    clientLegal: "FlowBank Ltd",
    industry: "FinTech",
    industryShort: "FinTech",
    year: "2024",
    primaryBadge: "Brand Strategy",
    secondaryBadge: "FinTech",
    lede: "FlowBank needed to carve out a distinct identity in an increasingly crowded fintech space — moving from a generic digital bank to a trusted financial partner with a clear strategic narrative.",
    challengeMarket:
      "The fintech market had become saturated with similar-looking brands all promising the same values: speed, simplicity, and security.",
    challengeStruggle:
      "FlowBank struggled to communicate what made them genuinely different — their human-first approach to digital banking.",
    approachLead:
      "We began with a comprehensive market audit and stakeholder immersion, interviewing 40+ customers to uncover what they truly valued in a financial partner. This research revealed an underserved emotional need: people didn't just want fast banking — they wanted to feel financially empowered.",
    processSteps: DEFAULT_PROCESS_STEPS.map((s, i) =>
      i === 1
        ? {
            ...s,
            body:
              "Mapped 24 fintech competitors across 8 strategic dimensions to identify the white space FlowBank could uniquely own.",
          }
        : s,
    ),
    quoteSectorPhrase: "fintech",
    servicesLine: "Brand Positioning",
    metaTags: ["Brand Positioning", "Market Strategy", "Messaging"],
    heroImage: `${FIGMA_DETAIL}/hero-terminal.jpg`,
  },
  academy: {
    id: "academy",
    clientName: "Academy.co",
    clientLegal: "Academy.co",
    industry: "Education",
    industryShort: "EdTech",
    year: "2024",
    primaryBadge: "Brand Identity",
    secondaryBadge: "Education",
    lede: "Academy.co needed a cohesive visual language that matched the quality of their programs — replacing fragmented touchpoints with one confident brand system.",
    challengeMarket:
      "The online education category was crowded with dated identities and noisy messaging.",
    challengeStruggle:
      "Academy.co struggled to look as credible and modern as the outcomes they delivered for learners.",
    approachLead:
      "We audited every channel, convened stakeholders, and defined a bold visual and verbal system that could scale across digital and in-person experiences.",
    processSteps: DEFAULT_PROCESS_STEPS.map((s, i) =>
      i === 1
        ? {
            ...s,
            body:
              "Mapped education competitors across positioning and design cues to find a memorable space Academy.co could own.",
          }
        : s,
    ),
    quoteSectorPhrase: "education brand",
    servicesLine: "Brand Identity",
    metaTags: ["Brand Identity", "Visual System", "Brand Guidelines"],
    heroImage: `${FIGMA_LIST}/project-0.jpg`,
  },
  genome: {
    id: "genome",
    clientName: "Genome Health",
    clientLegal: "Genome Health",
    industry: "Healthcare",
    industryShort: "Health",
    year: "2023",
    primaryBadge: "UI/UX Design",
    secondaryBadge: "Healthcare",
    lede: "Genome Health needed a digital experience that felt as precise and trustworthy as their clinical offering — simplifying complex journeys without dumbing them down.",
    challengeMarket:
      "Health-tech products often feel cold or confusing, especially when users are under stress.",
    challengeStruggle:
      "Genome Health needed clearer information architecture and interface patterns that worked across web and mobile.",
    approachLead:
      "We ran research with patients and clinicians, prototyped critical flows, and stress-tested accessibility and comprehension at every step.",
    processSteps: DEFAULT_PROCESS_STEPS.map((s, i) =>
      i === 1
        ? {
            ...s,
            body:
              "Benchmarked leading health products to define interaction patterns Genome Health could adopt and improve on.",
          }
        : s,
    ),
    quoteSectorPhrase: "clinical app",
    servicesLine: "Product & UX",
    metaTags: ["UI/UX Design", "User Research", "Design System"],
    heroImage: `${FIGMA_LIST}/project-1.jpg`,
  },
  hotto: {
    id: "hotto",
    clientName: "Hotto",
    clientLegal: "Hotto Inc.",
    industry: "Consumer",
    industryShort: "Consumer",
    year: "2024",
    primaryBadge: "Marketing",
    secondaryBadge: "Consumer",
    lede: "Hotto wanted campaigns that felt culturally relevant — not generic performance creative — while still hitting aggressive growth targets.",
    challengeMarket:
      "The category was noisy and promotion-led; breakthrough creative was quickly copied.",
    challengeStruggle:
      "Hotto needed a sharper narrative and channel mix to sustain attention beyond launch spikes.",
    approachLead:
      "We reframed the story around real customer moments, built modular campaign assets, and aligned paid, organic, and lifecycle around one message.",
    processSteps: DEFAULT_PROCESS_STEPS.map((s, i) =>
      i === 1
        ? {
            ...s,
            body:
              "Mapped competitor narratives and offers to find whitespace Hotto could own in the market.",
          }
        : s,
    ),
    quoteSectorPhrase: "consumer brand",
    servicesLine: "Growth Marketing",
    metaTags: ["Marketing Strategy", "Campaign Design", "Brand Narrative"],
    heroImage: `${FIGMA_LIST}/project-2.jpg`,
  },
  verdant: {
    id: "verdant",
    clientName: "Verdant Co.",
    clientLegal: "Verdant Co.",
    industry: "CPG",
    industryShort: "CPG",
    year: "2023",
    primaryBadge: "Brand Identity",
    secondaryBadge: "Sustainability",
    lede: "Verdant Co. needed packaging and identity that signaled sustainability without looking like every other green label on the shelf.",
    challengeMarket:
      "Eco claims had become wallpaper; shoppers were skeptical of lookalike earthy palettes.",
    challengeStruggle:
      "Verdant needed a distinctive visual system that still felt premium and shelf-ready.",
    approachLead:
      "We built a tactile, ownable illustration language and packaging hierarchy tested in retail mockups and shopper interviews.",
    processSteps: DEFAULT_PROCESS_STEPS.map((s, i) =>
      i === 1
        ? {
            ...s,
            body:
              "Audited shelf sets and competitor codes to position Verdant away from cliché sustainability tropes.",
          }
        : s,
    ),
    quoteSectorPhrase: "CPG brand",
    servicesLine: "Visual Identity",
    metaTags: ["Packaging Design", "Visual Identity", "Logo Design"],
    heroImage: `${FIGMA_LIST}/project-3.jpg`,
  },
  nova: {
    id: "nova",
    clientName: "Nova Labs",
    clientLegal: "Nova Labs",
    industry: "SaaS",
    industryShort: "SaaS",
    year: "2024",
    primaryBadge: "UI/UX Design",
    secondaryBadge: "B2B SaaS",
    lede: "Nova Labs needed a product experience that could onboard technical and business users alike — fast, without a manual.",
    challengeMarket:
      "SaaS buyers expect speed; complex configuration often killed activation.",
    challengeStruggle:
      "Nova's UI hid powerful features behind dense settings and inconsistent patterns.",
    approachLead:
      "We simplified primary journeys, introduced progressive disclosure, and shipped a component library engineering could adopt quickly.",
    processSteps: DEFAULT_PROCESS_STEPS.map((s, i) =>
      i === 1
        ? {
            ...s,
            body:
              "Reviewed comparable SaaS flows to align Nova with best-in-class onboarding while keeping their differentiators visible.",
          }
        : s,
    ),
    quoteSectorPhrase: "SaaS product",
    servicesLine: "Product Design",
    metaTags: ["Product Design", "Design System", "Prototyping"],
    heroImage: `${FIGMA_LIST}/project-4.jpg`,
  },
  craft: {
    id: "craft",
    clientName: "Craft Studio",
    clientLegal: "Craft Studio",
    industry: "Creative",
    industryShort: "Studio",
    year: "2023",
    primaryBadge: "Brand Strategy",
    secondaryBadge: "Creative",
    lede: "Craft Studio needed a sharper positioning story — moving from generalist creative shop to a specialist partner with a clear promise.",
    challengeMarket:
      "Small studios often compete on price; Craft needed a narrative that justified premium engagements.",
    challengeStruggle:
      "Messaging was broad and interchangeable with dozens of local competitors.",
    approachLead:
      "We interviewed past clients, codified proof points, and built a messaging spine the whole team could use in pitches and proposals.",
    processSteps: DEFAULT_PROCESS_STEPS.map((s, i) =>
      i === 1
        ? {
            ...s,
            body:
              "Mapped adjacent studios and positioning territories so Craft could claim a defensible niche.",
          }
        : s,
    ),
    quoteSectorPhrase: "creative studio",
    servicesLine: "Brand Strategy",
    metaTags: ["Content Strategy", "Brand Voice", "Copywriting"],
    heroImage: `${FIGMA_LIST}/project-5.jpg`,
  },
  pulse: {
    id: "pulse",
    clientName: "Pulse Media",
    clientLegal: "Pulse Media Group",
    industry: "Media",
    industryShort: "Media",
    year: "2023",
    primaryBadge: "Marketing",
    secondaryBadge: "Media",
    lede: "Pulse Media needed a growth engine that connected content, distribution, and monetisation — not siloed channel reports.",
    challengeMarket:
      "Media buyers were fragmented across platforms; attribution was messy.",
    challengeStruggle:
      "Pulse struggled to show clients a single story of performance and creative impact.",
    approachLead:
      "We unified reporting, rebuilt funnel content, and launched test-and-learn campaigns with clear learning agendas.",
    processSteps: DEFAULT_PROCESS_STEPS.map((s, i) =>
      i === 1
        ? {
            ...s,
            body:
              "Compared agency and in-house models to define where Pulse should double down for scale.",
          }
        : s,
    ),
    quoteSectorPhrase: "media group",
    servicesLine: "Integrated Marketing",
    metaTags: ["Digital Marketing", "Growth Strategy", "Content Marketing"],
    heroImage: `${FIGMA_LIST}/project-6.jpg`,
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
};

export const CASE_STUDY_VARIANTS: Record<CaseStudyProjectId, CaseStudyVariant> =
  Object.fromEntries(
    (Object.keys(VARIANT_INPUTS) as CaseStudyProjectId[]).map((id) => [
      id,
      fill(VARIANT_INPUTS[id]),
    ]),
  ) as Record<CaseStudyProjectId, CaseStudyVariant>;

export function normalizeCaseStudyProjectId(
  raw: string | null | undefined,
): CaseStudyProjectId {
  if (!raw) return "flowbank";
  const key = raw.toLowerCase().trim();
  if (key in CASE_STUDY_VARIANTS) return key as CaseStudyProjectId;
  return "flowbank";
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
