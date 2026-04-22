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
] as const;

export type CaseStudyProjectId = (typeof CASE_STUDY_ORDER)[number];

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
  processCompetitiveBody: string;
  quoteSectorPhrase: string;
  servicesLine: string;
  metaTags: string[];
  heroImage: string;
};

export const CASE_STUDY_VARIANTS: Record<CaseStudyProjectId, CaseStudyVariant> =
  {
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
      processCompetitiveBody:
        "Mapped 24 fintech competitors across 8 strategic dimensions to identify the white space FlowBank could uniquely own.",
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
      processCompetitiveBody:
        "Mapped education competitors across positioning and design cues to find a memorable space Academy.co could own.",
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
      processCompetitiveBody:
        "Benchmarked leading health products to define interaction patterns Genome Health could adopt and improve on.",
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
      processCompetitiveBody:
        "Mapped competitor narratives and offers to find whitespace Hotto could own in the market.",
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
      processCompetitiveBody:
        "Audited shelf sets and competitor codes to position Verdant away from cliché sustainability tropes.",
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
      processCompetitiveBody:
        "Reviewed comparable SaaS flows to align Nova with best-in-class onboarding while keeping their differentiators visible.",
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
      processCompetitiveBody:
        "Mapped adjacent studios and positioning territories so Craft could claim a defensible niche.",
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
      processCompetitiveBody:
        "Compared agency and in-house models to define where Pulse should double down for scale.",
      quoteSectorPhrase: "media group",
      servicesLine: "Integrated Marketing",
      metaTags: ["Digital Marketing", "Growth Strategy", "Content Marketing"],
      heroImage: `${FIGMA_LIST}/project-6.jpg`,
    },
  };

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
