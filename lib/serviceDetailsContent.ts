import { TEAM_MEMBERS, type TeamMember } from "@/lib/team";

export type HeadingPair = {
  prefix: string;
  serif: string;
  suffix?: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type ServiceDeliverable = {
  n: string;
  t: string;
  d: string;
  bg: string;
  border: string;
  num: string;
  arrowBg: string;
};

export type ServiceProcessStep = {
  n: string;
  t: string;
  p: string;
};

export type ServiceImpactMetric = {
  value: string;
  labelLines: string[];
};

export type ServiceWorkCard = {
  title: string;
  sub: string;
  img: string;
  badge: string;
  badgeColor?: "blue" | null;
  tags: string[];
};

export type ServiceTestimonial = {
  quote: string;
  stat?: { value: string; label: string };
  name: string;
  role: string;
  variant: "dark" | "cream" | "sky";
};

export type ServiceSpecialist = {
  name: string;
  role: string;
  image: string;
  statusLabel: string;
  bio: string;
  tags: string[];
  stats: { value: string; label: string }[];
  primaryCta: CtaLink;
  secondaryCta: { label: string; href: string };
};

export type ServiceExploreCard = {
  tag: string;
  tagBg: string;
  tagColor: string;
  cardBg: string;
  title: string;
  desc: string;
  chips: string[];
  href: string;
};

export type ServiceDetailsContent = {
  slug: string;
  documentTitle: string;
  metaDescription: string;
  hero: {
    line1: string;
    line2Prefix: string;
    serif: string;
    lede: string;
    primary: CtaLink;
    secondary?: CtaLink;
  };
  challenge: {
    kicker: string;
    heading: HeadingPair;
    prose: string;
    listTitle: string;
    items: string[];
  };
  approach: {
    kicker: string;
    heading: HeadingPair;
    prose: string;
    listTitle: string;
    items: string[];
  };
  teamHeading: HeadingPair;
  specialist?: ServiceSpecialist;
  specialistHeading?: HeadingPair;
  impact: {
    heading: HeadingPair;
    body: string;
    metrics: ServiceImpactMetric[];
    link: CtaLink;
  };
  deliverables: {
    heading: HeadingPair;
    lede: string;
    pillLabel: string;
    items: ServiceDeliverable[];
  };
  process: {
    heading: string;
    lede: string;
    items: ServiceProcessStep[];
  };
  foundations: {
    text: string;
  };
  work: {
    heading: HeadingPair;
    lede: string;
    cards: ServiceWorkCard[];
  };
  testimonials: {
    heading: HeadingPair;
    cards: ServiceTestimonial[];
  };
  faq: {
    heading: HeadingPair;
    lede: string;
    items: { q: string; a: string }[];
  };
  explore: {
    heading: HeadingPair;
    lede: string;
    cards: ServiceExploreCard[];
  };
  finalCta: {
    kicker: string;
    headingSans: string;
    headingSerif: string;
    lede: string;
    stats: { value: string; label: string }[];
  };
};

const DEFAULT_SLUG = "brand-strategy";

const WORK = "/assets/figma-case-studies";

const DELIVERABLE_PALETTES = [
  {
    bg: "rgba(73, 40, 253, 0.05)",
    border: "rgba(73, 40, 253, 0.12)",
    num: "#4928fd",
    arrowBg: "rgba(73, 40, 253, 0.13)",
  },
  {
    bg: "rgba(186, 129, 238, 0.08)",
    border: "rgba(186, 129, 238, 0.2)",
    num: "#7c3aed",
    arrowBg: "rgba(186, 129, 238, 0.18)",
  },
  {
    bg: "rgba(255, 175, 104, 0.1)",
    border: "rgba(255, 175, 104, 0.26)",
    num: "#ea580c",
    arrowBg: "rgba(255, 175, 104, 0.2)",
  },
  {
    bg: "rgba(112, 181, 255, 0.1)",
    border: "rgba(112, 181, 255, 0.24)",
    num: "#2563eb",
    arrowBg: "rgba(112, 181, 255, 0.18)",
  },
  {
    bg: "rgba(121, 212, 94, 0.1)",
    border: "rgba(121, 212, 94, 0.24)",
    num: "#16a34a",
    arrowBg: "rgba(121, 212, 94, 0.18)",
  },
  {
    bg: "rgba(244, 136, 154, 0.1)",
    border: "rgba(244, 136, 154, 0.22)",
    num: "#db2777",
    arrowBg: "rgba(244, 136, 154, 0.18)",
  },
];

function paint(
  items: Omit<ServiceDeliverable, "bg" | "border" | "num" | "arrowBg">[],
): ServiceDeliverable[] {
  return items.map((item, i) => ({
    ...item,
    ...DELIVERABLE_PALETTES[i % DELIVERABLE_PALETTES.length],
  }));
}

const SPECIALIST_HEADING: HeadingPair = {
  prefix: "Meet the specialist\nbehind ",
  serif: "this service",
};

function findMember(name: string): TeamMember {
  const m = TEAM_MEMBERS.find((x) => x.name === name);
  if (!m) throw new Error(`Team member not found: ${name}`);
  return m;
}

const AGHA = findMember("Agha Moiz");
const MUSTAFA = findMember("Mustafa Hassan");
const YOUSAF = findMember("Ahmed Khan");
const MUSAVER = findMember("Musaver Khan");

function specialist(
  member: TeamMember,
  role: string,
  bio: string,
  tags: [string, string, string],
): ServiceSpecialist {
  const firstName = member.name.split(" ")[0];
  return {
    name: member.name,
    role,
    image: member.image,
    statusLabel: "Available for new projects",
    bio: bio.replace(/Musawir/g, firstName),
    tags,
    stats: [
      { value: "12+", label: "Years Experience" },
      { value: "150+", label: "Brands Shaped" },
      { value: "94%", label: "Client Retention" },
    ],
    primaryCta: { label: "Talk to Specialist", href: "/contact" },
    secondaryCta: { label: "Call directly", href: "tel:+13074272883" },
  };
}

const BRAND_STRATEGY: ServiceDetailsContent = {
  slug: "brand-strategy",
  documentTitle: "Brand Strategy | Quad Solutions",
  metaDescription:
    "Transform your brand with expert strategy — from positioning to visual identity, comprehensive creative services for lasting growth.",
  hero: {
    line1: "Transform your brand",
    line2Prefix: "with ",
    serif: "expert strategy",
    lede: "From brand strategy to visual identity, we create comprehensive solutions that help businesses stand out, connect with their audience, and achieve lasting growth.",
    primary: { label: "Get Started", href: "/contact" },
    secondary: { label: "View Portfolio", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: { prefix: "Standing out in a ", serif: "crowded market" },
    prose:
      "Many businesses have great products but struggle to communicate their value visually. Without professional creative direction and cohesive design, brands blend into the background and miss opportunities to connect with their ideal customers.",
    listTitle: "Key challenges",
    items: [
      "Unclear brand identity and visual inconsistency",
      "Generic messaging that fails to connect with audience",
      "Outdated design that doesn't reflect business growth",
      "Lack of cohesive strategy across all touchpoints",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: {
      prefix: "Creative excellence meets ",
      serif: "strategic vision",
    },
    prose:
      "We combine strategic thinking with exceptional design to create brands that not only look beautiful but work hard for your business. From logo design to full brand identity systems, every element is crafted to tell your story and drive results.",
    listTitle: "Key highlights",
    items: [
      "Comprehensive Brand Audit",
      "Strategic Creative Direction",
      "End-to-End Design Solutions",
      "Implementation Support",
    ],
  },
  teamHeading: {
    prefix: "Meet the creative minds\nbehind ",
    serif: "our success",
  },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    YOUSAF,
    "Brand Strategy Specialist",
    "With over a decade of experience shaping brand foundations for ambitious businesses, Musawir leads our brand strategy practice. He specialises in market positioning, competitive analysis, and translating insight into strategy that drives measurable growth — partnering closely with founders to build brands that last.",
    ["Strategic Thinking", "Market Research", "Brand Positioning"],
  ),
  impact: {
    heading: {
      prefix: "Measurable results for ",
      serif: "every brand we build",
    },
    body: "150+ brand strategies delivered. 94% client retention. We measure what matters and design for outcomes — not just aesthetics.",
    metrics: [
      { value: "3.2x", labelLines: ["Brand value", "increase"] },
      { value: "94%", labelLines: ["Client", "retention"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "What you ", serif: "receive" },
    lede: "Everything you need to launch and maintain a professional brand identity that stands out and drives results.",
    pillLabel: "deliverables included",
    items: paint([
      {
        n: "01",
        t: "Complete Brand Identity",
        d: "Logo design, color palette, typography system, and visual elements that define your brand's unique look and feel.",
      },
      {
        n: "02",
        t: "Brand Guidelines",
        d: "Comprehensive documentation covering logo usage, color specifications, typography rules, and application examples.",
      },
      {
        n: "03",
        t: "Marketing Collateral",
        d: "Business cards, letterheads, presentations, and other essential materials ready for print and digital use.",
      },
      {
        n: "04",
        t: "Digital Assets",
        d: "Social media templates, email signatures, website graphics, and all digital touchpoint designs.",
      },
      {
        n: "05",
        t: "Source Files",
        d: "All original design files in multiple formats (AI, PSD, PDF, PNG, SVG) for complete creative control.",
      },
      {
        n: "06",
        t: "Implementation Support",
        d: "Ongoing guidance and support to ensure consistent brand application across all channels and touchpoints.",
      },
    ]),
  },
  process: {
    heading: "How we work",
    lede: "A proven methodology — built for strategic clarity",
    items: [
      {
        n: "01",
        t: "Research",
        p: "We dive deep into your market, competitors, and audience — turning insight into a clear creative brief.",
      },
      {
        n: "02",
        t: "Position",
        p: "We define your brand's distinct place in the market and the promise you own.",
      },
      {
        n: "03",
        t: "Articulate",
        p: "We build your messaging framework — distilling strategy into language your team can use everywhere.",
      },
      {
        n: "04",
        t: "Activate",
        p: "We deliver a comprehensive brand strategy playbook with practical next steps for launch and scale.",
      },
    ],
  },
  foundations: {
    text: "Position Your Brand for Growth.\nLet's Build Your Strategic Foundation!",
  },
  work: {
    heading: { prefix: "Our work ", serif: "in action" },
    lede: "Real projects, real results — see how we've helped leading brands define their position and accelerate growth.",
    cards: [
      {
        title: "FlowBank",
        sub: "FlowBank Ltd · 2024",
        img: `${WORK}/featured.jpg`,
        badge: "Brand Strategy",
        badgeColor: "blue",
        tags: ["Brand Positioning", "Market Strategy", "Messaging"],
      },
      {
        title: "Academy.co",
        sub: "Academy.co · 2024",
        img: `${WORK}/project-0.jpg`,
        badge: "Brand Identity",
        tags: ["Brand Identity", "Visual System", "Brand Guidelines"],
      },
      {
        title: "Genome Health",
        sub: "Genome Health · 2023",
        img: `${WORK}/project-1.jpg`,
        badge: "UI/UX Design",
        tags: ["UI/UX Design", "User Research", "Design System"],
      },
    ],
  },
  testimonials: {
    heading: {
      prefix: "What our ",
      serif: "customers",
      suffix: "\nare saying about us",
    },
    cards: [
      {
        quote:
          "Quad Solutions helped us discover who we really are as a brand. Their strategic process uncovered insights that transformed how we position ourselves in the market.",
        stat: { value: "3.5x", label: "Brand awareness increase in 6 months" },
        name: "Sarah Mitchell",
        role: "CEO, FlowBank",
        variant: "dark",
      },
      {
        quote:
          "The brand strategy work gave us absolute clarity on who we are and what we stand for. Our entire team now speaks with one voice.",
        name: "James Okafor",
        role: "Founder, Academy.co",
        variant: "cream",
      },
      {
        quote:
          "The strategic foundation they built became our north star. We've seen a 42% increase in customer engagement since implementing the new positioning.",
        name: "Priya Sharma",
        role: "CMO, Hotto",
        variant: "sky",
      },
    ],
  },
  faq: {
    heading: { prefix: "Simple answers to ", serif: "frequent questions" },
    lede: "Questions about the brand strategy process, timelines, or deliverables? We've answered the most common ones below.",
    items: [
      {
        q: "What does your brand strategy process involve?",
        a: "Our process follows five key phases: Immersion, Analysis, Positioning, Messaging, and Delivery. Each phase includes collaborative workshops, research deliverables, and strategic documentation you can activate across your organization.",
      },
      {
        q: "How long does a typical brand strategy project take?",
        a: "Most engagements run 6–8 weeks depending on research depth and stakeholder availability. We provide a fixed timeline and milestones in your proposal.",
      },
      {
        q: "Do you work with existing marketing teams or in-house designers?",
        a: "Yes. We regularly partner with internal teams — aligning on process, handoffs, and file formats so strategy translates cleanly into execution.",
      },
      {
        q: "What deliverables do we receive at the end?",
        a: "You receive a strategy playbook, positioning and messaging frameworks, and recommendations for visual and channel activation — tailored to what you commissioned.",
      },
      {
        q: "How do you measure the success of a brand strategy?",
        a: "We align on KPIs up front — awareness, conversion, retention, or internal clarity — and define how we will track them post-launch.",
      },
      {
        q: "How do I get started with Quad Solutions?",
        a: "Book a discovery call or use the form below. We will respond with next steps and a tailored scope within a few business days.",
      },
    ],
  },
  explore: {
    heading: { prefix: "Explore our other ", serif: "services" },
    lede: "From strategy to execution, explore our comprehensive range of creative services designed to elevate your brand.",
    cards: [
      {
        tag: "Brand Identity",
        tagBg: "rgba(186,129,238,0.15)",
        tagColor: "#ba81ee",
        cardBg: "rgba(186,129,238,0.05)",
        title: "Brand Identity Design",
        desc: "We bring your strategy to life visually — crafting distinctive identities with logos, typography, color systems, and comprehensive brand guidelines.",
        chips: ["Logo Design", "Visual Systems", "Brand Guidelines"],
        href: "/services",
      },
      {
        tag: "UI/UX Design",
        tagBg: "rgba(112,181,255,0.15)",
        tagColor: "#70b5ff",
        cardBg: "rgba(112,181,255,0.05)",
        title: "UI/UX Design & Research",
        desc: "We design digital experiences rooted in user empathy — blending research, wireframing, prototyping, and testing to create products people love.",
        chips: ["User Research", "Interface Design", "Usability Testing"],
        href: "/services",
      },
      {
        tag: "Content Strategy",
        tagBg: "rgba(255,175,104,0.15)",
        tagColor: "#ffaf68",
        cardBg: "rgba(255,175,104,0.05)",
        title: "Content Strategy & Copywriting",
        desc: "We craft compelling narratives that engage audiences — from web copy and campaign messaging to content frameworks that guide all brand communications.",
        chips: ["Brand Copy", "Content Plans", "Storytelling"],
        href: "/services",
      },
      {
        tag: "Marketing",
        tagBg: "rgba(121,212,94,0.15)",
        tagColor: "#79d45e",
        cardBg: "rgba(121,212,94,0.05)",
        title: "Marketing Strategy & Campaigns",
        desc: "We turn brand strategy into action — building go-to-market plans, integrated campaigns, and growth initiatives that drive measurable business results.",
        chips: ["GTM Strategy", "Campaign Planning", "Growth Marketing"],
        href: "/services",
      },
    ],
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Ready to Simplify  ",
    headingSerif: "Your Growth?",
    lede: "Let's discuss your challenges and build a unified strategy for success.",
    stats: [
      { value: "100+", label: "Brands launched" },
      { value: "94%", label: "Client retention" },
      { value: "3.2x", label: "Avg. growth" },
    ],
  },
};

const AI_EXPLORE_CARDS: ServiceExploreCard[] = [
  {
    tag: "Intelligent Automation",
    tagBg: "rgba(73,40,253,0.12)",
    tagColor: "#4928fd",
    cardBg: "rgba(73,40,253,0.05)",
    title: "Intelligent Automation",
    desc: "End-to-end workflow, GTM, and business process automation that removes manual bottlenecks and turns scattered operations into one connected flow.",
    chips: ["Workflow Automation", "CRM Orchestration", "Ops Automation"],
    href: "/ai-automation/intelligent-automation",
  },
  {
    tag: "AI Communication Tools",
    tagBg: "rgba(255,175,104,0.18)",
    tagColor: "#ea580c",
    cardBg: "rgba(255,175,104,0.06)",
    title: "AI Communication Tools",
    desc: "AI-assisted support, chat, and response systems that classify, draft, route, and resolve conversations faster — with human-quality context.",
    chips: ["AI Support", "Chat Assistants", "Response Drafting"],
    href: "/ai-automation/ai-communication-tools",
  },
  {
    tag: "Advanced AI Systems",
    tagBg: "rgba(112,181,255,0.18)",
    tagColor: "#2563eb",
    cardBg: "rgba(112,181,255,0.06)",
    title: "Advanced AI Systems",
    desc: "Autonomous agents, AI-driven insights, and custom integrations that embed intelligence into the workflows where your team spends the most time.",
    chips: ["AI Agents", "Data Insights", "Custom Integrations"],
    href: "/ai-automation/advanced-ai-systems",
  },
  {
    tag: "Growth Marketing",
    tagBg: "rgba(121,212,94,0.18)",
    tagColor: "#16a34a",
    cardBg: "rgba(121,212,94,0.05)",
    title: "Growth Marketing",
    desc: "Paid, organic, and lifecycle growth programs engineered to convert — wired directly into the automation layer so every signal becomes action.",
    chips: ["Paid Ads", "SEO & Content", "Lifecycle"],
    href: "/growth-marketing",
  },
];

const AI: ServiceDetailsContent = {
  slug: "ai-automation",
  documentTitle: "AI & Automation | Quad Solutions",
  metaDescription:
    "Intelligent automation, AI communication tools, and advanced AI systems — engineered to remove bottlenecks, accelerate execution, and turn fragmented operations into measurable flow.",
  hero: {
    line1: "AI automations that",
    line2Prefix: "actually ",
    serif: "move business",
    lede: "We design and deploy intelligent automation systems that remove operational bottlenecks, eliminate repetitive manual work, and create scalable workflows across sales, marketing, operations, support, and product delivery.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: {
      prefix: "From manual chaos to ",
      serif: "automated systems",
    },
    prose:
      "Most teams are stuck stitching together tools, spreadsheets, and manual handoffs. Leads slip through the cracks, reporting is rebuilt every week, and critical operations depend on someone remembering to follow up. The cost is slow execution, poor visibility, and scattered ownership.",
    listTitle: "What's holding teams back",
    items: [
      "Leads captured but not enriched, scored, or routed",
      "CRM, sales, and support data siloed across tools",
      "Approvals, onboarding, and ops running on manual follow-ups",
      "Reports rebuilt manually every week with no single source of truth",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: {
      prefix: "We engineer ",
      serif: "momentum",
      suffix: ", not just tasks",
    },
    prose:
      "Our AI automation practice is built for businesses that want more than surface-level automation. We engineer connected systems that qualify leads, trigger actions, route data, automate outreach, streamline approvals, improve support, accelerate QA, and turn fragmented processes into measurable operational flow.",
    listTitle: "What you gain",
    items: [
      "Business-first automation design across sales, ops, support, delivery",
      "Connected systems — CRM, workflows, dashboards, and AI in one layer",
      "Fast deployment with practical, high-impact use cases",
      "Scalable automation ecosystems with measurable outcomes",
    ],
  },
  teamHeading: {
    prefix: "Led by the team behind\n",
    serif: "QA, GTM & AI automation",
  },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    AGHA,
    "AI Automation Lead",
    "Musawir leads our AI and automation practice, partnering with operators to wire intelligent systems into the workflows where teams lose the most time. He focuses on practical, high-leverage automation across GTM, RevOps, and delivery — shipping working systems in weeks, not quarters.",
    ["AI Strategy", "GTM Engineering", "Process Automation"],
  ),
  impact: {
    heading: {
      prefix: "Real execution, ",
      serif: "not theory",
    },
    body: "Agha Moiz leads AI automation, QA automation, GTM engineering, and business process transformation — designing high-impact ecosystems that reduce manual work, accelerate execution, and improve visibility across sales, ops, and support.",
    metrics: [
      { value: "40+", labelLines: ["Automation", "systems shipped"] },
      { value: "10x", labelLines: ["Faster lead", "response time"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "What we ", serif: "build for you" },
    lede: "Capabilities we deploy across sales, marketing, support, QA, and internal operations — wired into the tools your team already uses.",
    pillLabel: "capabilities delivered",
    items: paint([
      {
        n: "01",
        t: "AI Workflow Automation",
        d: "End-to-end process flows across CRM, sheets, webhooks, and APIs — built with n8n, Zapier, and custom logic.",
      },
      {
        n: "02",
        t: "GTM Engineering Systems",
        d: "Lead sourcing, enrichment, scoring, and routing pipelines — powered by Clay, CRM, and enrichment automations.",
      },
      {
        n: "03",
        t: "AI-Powered Support",
        d: "Ticket classification, contextual response drafting, and routing so support teams move faster with cleaner handoffs.",
      },
      {
        n: "04",
        t: "Internal Ops Automation",
        d: "Approvals, onboarding, task routing, and escalations — so leadership stays updated without manual chasing.",
      },
      {
        n: "05",
        t: "Zero-Touch Reporting",
        d: "Daily, weekly, and executive reports generated automatically from CRM, marketing, and ops systems.",
      },
      {
        n: "06",
        t: "QA Automation Framework",
        d: "Automated regression and release workflows to catch issues earlier and increase release confidence.",
      },
    ]),
  },
  process: {
    heading: "How we work",
    lede: "A pragmatic build cycle — from audit to live automation",
    items: [
      {
        n: "01",
        t: "Audit",
        p: "We map your tools, workflows, and manual handoffs to identify where automation will unlock the most operational value.",
      },
      {
        n: "02",
        t: "Design",
        p: "We architect connected workflows across CRM, AI, sheets, APIs, and your communication stack — with clear ownership and triggers.",
      },
      {
        n: "03",
        t: "Build",
        p: "We ship automations in practical iterations using n8n, Zapier, Clay, OpenAI, and custom integrations — live and measurable.",
      },
      {
        n: "04",
        t: "Operate",
        p: "We monitor, refine, and extend the system — adding recovery logic, alerts, and new flows as your business scales.",
      },
    ],
  },
  foundations: {
    text: "Automate the busywork. Keep the momentum.\nLet's build your automation layer.",
  },
  work: {
    heading: { prefix: "Automation ", serif: "in action" },
    lede: "Real systems we've shipped — from GTM pipelines to AI support and internal ops command centers.",
    cards: [
      {
        title: "GTM Lead Intelligence Engine",
        sub: "Outbound · 2024",
        img: `${WORK}/featured.jpg`,
        badge: "GTM Engineering",
        badgeColor: "blue",
        tags: ["Clay", "CRM Routing", "Lead Scoring"],
      },
      {
        title: "AI-Powered Support Workflow",
        sub: "Support · 2024",
        img: `${WORK}/project-0.jpg`,
        badge: "AI Support",
        tags: ["Triage", "Response Drafting", "Routing"],
      },
      {
        title: "Revenue Ops Automation Layer",
        sub: "RevOps · 2024",
        img: `${WORK}/project-1.jpg`,
        badge: "CRM Automation",
        tags: ["Deal Pipeline", "Contact Sync", "Reporting"],
      },
    ],
  },
  testimonials: {
    heading: {
      prefix: "Why teams ",
      serif: "choose us",
      suffix: "\nfor automation",
    },
    cards: [
      {
        quote:
          "They turned our scattered lead process into a single intelligent pipeline. Enrichment, scoring, and routing now happen before anyone touches a lead.",
        stat: { value: "10x", label: "Faster lead response in 30 days" },
        name: "Head of Growth",
        role: "B2B SaaS",
        variant: "dark",
      },
      {
        quote:
          "Support ticket volume didn't change, but our resolution time dropped dramatically. The AI drafts are genuinely useful — not boilerplate.",
        name: "Support Lead",
        role: "Scale-up Marketplace",
        variant: "cream",
      },
      {
        quote:
          "Leadership finally stopped asking for weekly updates — because the updates just arrive. That alone was worth the engagement.",
        name: "COO",
        role: "Services Firm",
        variant: "sky",
      },
    ],
  },
  faq: {
    heading: { prefix: "Simple answers to ", serif: "frequent questions" },
    lede: "Questions about scope, tools, timelines, or how our automation engagements actually work? Start here.",
    items: [
      {
        q: "What kinds of automations do you build?",
        a: "AI workflow automation, GTM engineering, CRM orchestration, QA automation, AI-assisted support, approvals, reporting, and cross-platform integrations. If it's repetitive, fragmented, or blocking execution, we can likely automate it.",
      },
      {
        q: "Which tools and platforms do you use?",
        a: "n8n, Zapier, Clay, OpenAI, Airtable, Google Sheets, HubSpot, Salesforce, Slack, Gmail, Notion, ClickUp, webhooks, APIs, and custom integrations — matched to what your team already runs on.",
      },
      {
        q: "How quickly can we see something live?",
        a: "Most engagements ship the first useful workflow within 1–2 weeks. We prefer a practical, iterative build over long, invisible projects.",
      },
      {
        q: "Do you work alongside our existing ops or RevOps team?",
        a: "Yes. We regularly embed with in-house RevOps, marketing ops, and support teams — owning the automation layer while your team owns the strategy.",
      },
      {
        q: "Can you audit our existing workflows before building new ones?",
        a: "Yes. Most engagements start with a workflow audit to identify automation gaps, broken handoffs, and the highest-leverage places to start.",
      },
      {
        q: "Do you handle QA automation as well?",
        a: "Yes. We build QA automation frameworks to reduce regression effort, improve test reliability, and support faster, more confident releases.",
      },
    ],
  },
  explore: {
    heading: { prefix: "Explore our ", serif: "AI capabilities" },
    lede: "Dive into each area of our AI & Automation practice — or see how they connect into one operational layer.",
    cards: AI_EXPLORE_CARDS,
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's build your ",
    headingSerif: "automation layer.",
    lede: "Tell us where your team is losing time, visibility, or speed. We'll respond within 4 hours with a clear path forward — no fluff, no hard sell.",
    stats: [
      { value: "40+", label: "Systems shipped" },
      { value: "10x", label: "Faster execution" },
      { value: "24/7", label: "Automated ops" },
    ],
  },
};

const INTELLIGENT_AUTOMATION: ServiceDetailsContent = {
  slug: "intelligent-automation",
  documentTitle: "Intelligent Automation | Quad Solutions",
  metaDescription:
    "End-to-end workflow, GTM, and business process automation that removes manual bottlenecks and connects sales, ops, and support into one intelligent flow.",
  hero: {
    line1: "Intelligent automation",
    line2Prefix: "for growth, ",
    serif: "operations & scale",
    lede: "We build connected workflow systems that qualify leads, move deals, route approvals, sync data, and turn fragmented processes into measurable operational flow — across sales, marketing, and internal ops.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: {
      prefix: "Scattered tools, ",
      serif: "stalled execution",
    },
    prose:
      "Most ops teams live inside a patchwork of CRMs, sheets, inboxes, and task tools. Work gets stuck in handoffs, approvals wait on people, and leadership only sees what someone remembers to update. Growth suffers, not because of strategy, but because of operational friction.",
    listTitle: "Where teams lose time",
    items: [
      "Manual lead capture, enrichment, and routing",
      "Broken handoffs between sales, success, and delivery",
      "Approvals, onboarding, and ops running on memory and follow-ups",
      "Data scattered across tools with no unified view",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: {
      prefix: "From manual chaos to ",
      serif: "automated systems",
    },
    prose:
      "We design and deploy intelligent automation systems that remove operational bottlenecks and create scalable workflows. Using AI, workflow engines, CRMs, enrichment tools, APIs, and custom logic, we help businesses move faster with less friction — and give leadership real visibility along the way.",
    listTitle: "What we do differently",
    items: [
      "Business-first automation design, not tool-first tinkering",
      "Connected systems across CRM, ops, support, and delivery",
      "Practical, high-impact use cases shipped in weeks",
      "Scalable ecosystems with recovery and escalation built in",
    ],
  },
  teamHeading: {
    prefix: "Built by specialists in\n",
    serif: "workflow & ops automation",
  },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    AGHA,
    "Workflow & Ops Specialist",
    "Musawir leads our workflow and operations automation practice. He partners with founders and ops leaders to map the messy reality of existing processes, then design connected systems across CRM, communication, and delivery — so teams ship faster with less manual lift.",
    ["Workflow Design", "RevOps Automation", "Process Architecture"],
  ),
  impact: {
    heading: {
      prefix: "Less manual work. ",
      serif: "More business velocity.",
    },
    body: "We've shipped automation systems across GTM, RevOps, support, client onboarding, internal operations, and executive reporting — replacing spreadsheets and manual trackers with connected, intelligent workflows.",
    metrics: [
      { value: "60%+", labelLines: ["Reduction in", "manual work"] },
      { value: "24/7", labelLines: ["Always-on", "workflows"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "Automation ", serif: "capabilities" },
    lede: "Core capabilities we build, wire together, and operate — matched to the workflows where your team loses the most time.",
    pillLabel: "capabilities delivered",
    items: paint([
      {
        n: "01",
        t: "Lead Capture & Routing",
        d: "Automatically capture, enrich, score, and route inbound leads — then trigger follow-ups based on behaviour.",
      },
      {
        n: "02",
        t: "CRM & Pipeline Automation",
        d: "Keep CRM data clean, move deals forward, and sync contact activity across sales and communication tools.",
      },
      {
        n: "03",
        t: "Approval & Task Routing",
        d: "Automate internal approvals for finance, HR, ops, and service delivery — with reminders, escalations, and audit trails.",
      },
      {
        n: "04",
        t: "Client Onboarding Engine",
        d: "Forms, tasks, document collection, internal assignments, and milestone tracking — wired into your delivery process.",
      },
      {
        n: "05",
        t: "Reporting Pipelines",
        d: "Daily, weekly, and leadership reports generated automatically across sales, marketing, and operations.",
      },
      {
        n: "06",
        t: "Workflow Recovery",
        d: "Detect stalled tasks, missing inputs, and overdue approvals — then trigger reminders, escalations, and fallback actions.",
      },
    ]),
  },
  process: {
    heading: "How we build",
    lede: "Audit → design → build → operate — shipped in working iterations",
    items: [
      {
        n: "01",
        t: "Workflow Audit",
        p: "We map current workflows, handoffs, and manual steps to identify where automation will unlock the most value.",
      },
      {
        n: "02",
        t: "System Design",
        p: "We architect connected flows across CRM, sheets, webhooks, APIs, and your communication stack — with clear triggers and ownership.",
      },
      {
        n: "03",
        t: "Build & Launch",
        p: "We build in practical iterations using n8n, Zapier, Clay, and custom integrations — shipping a working automation fast.",
      },
      {
        n: "04",
        t: "Operate & Evolve",
        p: "We monitor, refine, and extend the system — adding recovery logic, new flows, and reporting as your business scales.",
      },
    ],
  },
  foundations: {
    text: "Built to reduce friction and increase speed.\nLet's design your automation layer.",
  },
  work: {
    heading: { prefix: "Systems we've ", serif: "shipped" },
    lede: "Real automation projects across GTM, RevOps, onboarding, and internal operations.",
    cards: [
      {
        title: "Sales Pipeline Automation System",
        sub: "GTM · 2024",
        img: `${WORK}/featured.jpg`,
        badge: "Pipeline Ops",
        badgeColor: "blue",
        tags: ["Lead Routing", "CRM Sync", "Follow-ups"],
      },
      {
        title: "Client Onboarding Engine",
        sub: "Delivery · 2024",
        img: `${WORK}/project-0.jpg`,
        badge: "Onboarding",
        tags: ["Forms", "Tasks", "Milestones"],
      },
      {
        title: "Process Automation for Internal Ops",
        sub: "Ops · 2023",
        img: `${WORK}/project-1.jpg`,
        badge: "Internal Ops",
        tags: ["Approvals", "Escalations", "Status Updates"],
      },
    ],
  },
  testimonials: {
    heading: {
      prefix: "Teams that run ",
      serif: "on automation",
      suffix: "",
    },
    cards: [
      {
        quote:
          "Our sales team stopped chasing CRM hygiene and started closing. Every lead, every follow-up, every deal update happens automatically now.",
        stat: { value: "3×", label: "Pipeline visibility improvement" },
        name: "Head of Revenue",
        role: "B2B SaaS",
        variant: "dark",
      },
      {
        quote:
          "Client onboarding used to take two weeks of coordination. It now runs itself from contract signed to kickoff — we just show up.",
        name: "Delivery Lead",
        role: "Agency",
        variant: "cream",
      },
      {
        quote:
          "Approvals used to sit in someone's inbox for days. Now everything moves on a schedule with clear escalation if something stalls.",
        name: "Operations Manager",
        role: "Services Firm",
        variant: "sky",
      },
    ],
  },
  faq: {
    heading: { prefix: "Questions about ", serif: "intelligent automation" },
    lede: "Scope, tools, timelines, and how we handle the messy reality of existing workflows.",
    items: [
      {
        q: "Do you work with our existing CRM and tools?",
        a: "Yes. We build on top of what you already use — HubSpot, Salesforce, Airtable, Google Sheets, Slack, Notion, ClickUp — and only recommend new tools where there's a clear gap.",
      },
      {
        q: "What if our workflows aren't clearly defined yet?",
        a: "That's common. We start with a workflow audit to map what actually happens today, then document and automate it in parallel.",
      },
      {
        q: "How fast can you ship the first automation?",
        a: "Most engagements have a useful workflow live within 1–2 weeks. We prefer shipping iterations over long, invisible builds.",
      },
      {
        q: "Can you handle both GTM and internal ops automation?",
        a: "Yes. GTM, RevOps, marketing ops, client onboarding, and internal operations are all within scope — often wired into the same system.",
      },
      {
        q: "Do you build in failure handling?",
        a: "Yes. We add workflow recovery — stalled task detection, reminders, escalations, and fallbacks — so silent failures don't quietly break execution.",
      },
    ],
  },
  explore: {
    heading: { prefix: "More from our ", serif: "AI practice" },
    lede: "Intelligent Automation sits inside a broader AI & Automation practice — see the other layers that connect into it.",
    cards: AI_EXPLORE_CARDS.filter(
      (c) => c.href !== "/ai-automation/intelligent-automation",
    ),
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's automate the ",
    headingSerif: "busywork.",
    lede: "Tell us which workflow is costing your team the most time. We'll respond within 4 hours with a clear automation path — no fluff.",
    stats: [
      { value: "60%+", label: "Manual work removed" },
      { value: "24/7", label: "Automated ops" },
      { value: "1–2w", label: "First workflow live" },
    ],
  },
};

const AI_COMMUNICATION: ServiceDetailsContent = {
  slug: "ai-communication-tools",
  documentTitle: "AI Communication Tools | Quad Solutions",
  metaDescription:
    "AI-powered chat, support, and response systems that classify, draft, route, and resolve conversations faster — with human-quality context.",
  hero: {
    line1: "AI communication",
    line2Prefix: "where it ",
    serif: "matters",
    lede: "We build AI-assisted chat, support, and response systems that categorise incoming conversations, draft contextual replies, route tickets to the right teams, and track resolution — so support feels faster, not robotic.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: {
      prefix: "Support teams buried in ",
      serif: "repetitive work",
    },
    prose:
      "Support volume grows, but headcount doesn't. Tickets get miscategorised, responses get copy-pasted, and the same questions get answered again and again. Customers wait, agents burn out, and leadership sees the queue but not the cause.",
    listTitle: "Where support breaks down",
    items: [
      "Tickets mis-triaged or routed to the wrong team",
      "Agents rewriting the same responses from scratch",
      "No visibility into what's blocking resolution",
      "Follow-ups, alerts, and escalations handled manually",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: {
      prefix: "AI where it ",
      serif: "actually helps",
    },
    prose:
      "We implement AI-assisted support flows that classify incoming requests, draft contextual responses based on your knowledge base, route tickets to the relevant teams, and track resolution status. The result is faster, more consistent support — without removing the human from the loop.",
    listTitle: "Built into your stack",
    items: [
      "Connected to your existing help desk, CRM, and Slack",
      "Response drafting grounded in your own context and docs",
      "Clear human handoff and override at every step",
      "Alerts, SLAs, and escalations wired in from day one",
    ],
  },
  teamHeading: {
    prefix: "Shaped by experience in\n",
    serif: "AI-assisted support",
  },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    AGHA,
    "AI Communications Specialist",
    "Musawir leads our AI communications practice, designing assisted support, classification, and response systems that keep humans in the loop while raising the floor on quality and speed. He focuses on practical deployments grounded in your context — not generic chatbot patterns.",
    ["Conversational AI", "Support Automation", "Voice & Tone"],
  ),
  impact: {
    heading: {
      prefix: "Consistency at ",
      serif: "support scale",
    },
    body: "AI communication done well reduces operational load, standardises quality, and lets senior agents spend time where judgement actually matters — without turning your brand voice into a chatbot cliché.",
    metrics: [
      { value: "50%+", labelLines: ["Faster first", "response"] },
      { value: "90%+", labelLines: ["Auto-triage", "accuracy"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "What we ", serif: "build" },
    lede: "Capabilities we deploy inside support, sales, and internal comms — wired into the tools your team already uses.",
    pillLabel: "capabilities delivered",
    items: paint([
      {
        n: "01",
        t: "Ticket Classification & Triage",
        d: "Automatically categorise, prioritise, and route incoming tickets based on intent, urgency, and context.",
      },
      {
        n: "02",
        t: "AI Response Drafting",
        d: "Draft contextual replies for support and ops teams — grounded in your knowledge base, not generic templates.",
      },
      {
        n: "03",
        t: "Lead Qualification Assistants",
        d: "AI-powered qualification flows that ask the right questions, score responses, and hand qualified leads to sales.",
      },
      {
        n: "04",
        t: "Custom AI Chatbots",
        d: "Chat experiences connected to your CRM, product data, and internal systems — with human escalation paths.",
      },
      {
        n: "05",
        t: "Alerting & Escalation",
        d: "Trigger alerts for delays, blockers, failures, and missed SLAs — so nothing quietly slips through the cracks.",
      },
      {
        n: "06",
        t: "Knowledge Base Wiring",
        d: "Connect AI to Notion, help centres, and internal docs so responses stay accurate as your product evolves.",
      },
    ]),
  },
  process: {
    heading: "How we work",
    lede: "We ship AI comms systems that agents actually want to use",
    items: [
      {
        n: "01",
        t: "Audit & Data",
        p: "We review ticket history, response patterns, and knowledge sources to understand where AI genuinely helps.",
      },
      {
        n: "02",
        t: "Design",
        p: "We design the classification, drafting, and routing flows — with clear human checkpoints and brand voice.",
      },
      {
        n: "03",
        t: "Build",
        p: "We build on OpenAI, your help desk, CRM, and internal tools — with guardrails, logging, and fallback paths.",
      },
      {
        n: "04",
        t: "Tune",
        p: "We refine prompts, routing rules, and response quality against real tickets so the system keeps improving.",
      },
    ],
  },
  foundations: {
    text: "Automation built for real operations, not demos.\nLet's upgrade your support experience.",
  },
  work: {
    heading: { prefix: "AI communication ", serif: "projects" },
    lede: "Representative builds across AI support, qualification, and conversational workflows.",
    cards: [
      {
        title: "AI-Powered Support Workflow",
        sub: "Support · 2024",
        img: `${WORK}/featured.jpg`,
        badge: "AI Support",
        badgeColor: "blue",
        tags: ["Triage", "Response Drafting", "Routing"],
      },
      {
        title: "AI Lead Qualification Assistant",
        sub: "GTM · 2024",
        img: `${WORK}/project-0.jpg`,
        badge: "AI Qualification",
        tags: ["Chat", "Scoring", "Handoff"],
      },
      {
        title: "AI Research & Prospecting Assistant",
        sub: "Sales · 2024",
        img: `${WORK}/project-1.jpg`,
        badge: "AI Research",
        tags: ["Enrichment", "Summaries", "Context"],
      },
    ],
  },
  testimonials: {
    heading: {
      prefix: "Support teams ",
      serif: "that scale",
      suffix: "",
    },
    cards: [
      {
        quote:
          "The AI drafts aren't perfect — they're a strong first draft. That's exactly what our agents needed. Average handle time dropped noticeably in week one.",
        stat: { value: "50%+", label: "Faster first response" },
        name: "Support Lead",
        role: "SaaS Product",
        variant: "dark",
      },
      {
        quote:
          "Qualification used to be a rep's job for 20 minutes per lead. Our AI assistant now handles it, and sales only talks to people who are actually ready.",
        name: "Head of Sales",
        role: "B2B Platform",
        variant: "cream",
      },
      {
        quote:
          "Tickets go to the right team on the first try. That alone solved a category of problems we used to live with.",
        name: "Ops Manager",
        role: "Marketplace",
        variant: "sky",
      },
    ],
  },
  faq: {
    heading: { prefix: "Questions about ", serif: "AI communication" },
    lede: "Everything about data handling, tone, human handoff, and fitting AI into your existing support stack.",
    items: [
      {
        q: "Will AI responses sound like our brand?",
        a: "Yes. We ground drafting in your own docs, tone examples, and past responses — and keep humans in the loop to edit before sending, until the quality is trusted.",
      },
      {
        q: "Does this replace our support team?",
        a: "No. It removes repetitive work so agents can focus on judgement, edge cases, and high-value conversations. Humans stay in charge of what actually ships.",
      },
      {
        q: "Which support tools do you integrate with?",
        a: "We work with most modern help desks, CRMs, and communication platforms — Slack, Gmail, HubSpot, and internal dashboards included. We'll match the stack you already run.",
      },
      {
        q: "How do you handle sensitive customer data?",
        a: "We design flows with least-privilege access, scoped prompts, and logging. For sensitive use cases, we scope data access and can keep personal data out of AI prompts entirely.",
      },
      {
        q: "What happens when the AI isn't confident?",
        a: "The system hands the conversation to a human with full context — previous messages, detected intent, and suggested responses — so nothing is dropped.",
      },
    ],
  },
  explore: {
    heading: { prefix: "More from our ", serif: "AI practice" },
    lede: "AI Communication Tools plug into our broader automation stack — see where they fit.",
    cards: AI_EXPLORE_CARDS.filter(
      (c) => c.href !== "/ai-automation/ai-communication-tools",
    ),
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's make your support ",
    headingSerif: "feel effortless.",
    lede: "Tell us where conversations pile up — support, sales, or internal ops. We'll respond within 4 hours with a clear AI communication plan.",
    stats: [
      { value: "50%+", label: "Faster responses" },
      { value: "90%+", label: "Triage accuracy" },
      { value: "1–2w", label: "First AI flow live" },
    ],
  },
};

const ADVANCED_AI: ServiceDetailsContent = {
  slug: "advanced-ai-systems",
  documentTitle: "Advanced AI Systems | Quad Solutions",
  metaDescription:
    "Autonomous AI agents, AI-driven insights, and custom AI integrations engineered for the workflows where your team spends the most time.",
  hero: {
    line1: "Advanced AI systems",
    line2Prefix: "for ",
    serif: "real operations",
    lede: "We build autonomous AI agents, AI-driven insight pipelines, and custom AI integrations engineered for the specific workflows where your team spends the most time — not generic demos.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: {
      prefix: "Generic AI ",
      serif: "doesn't know your business",
    },
    prose:
      "Out-of-the-box AI tools are impressive in demos and shallow in reality. They don't know your data, your process, or your edge cases. To unlock compounding value, AI has to live inside your actual workflows, with access to real context and clear actions it can take.",
    listTitle: "Where generic AI falls short",
    items: [
      "No access to your CRM, data, or internal context",
      "Can't take actions across real business systems",
      "No accountability when outputs go wrong",
      "Fragile integrations that break as tools change",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: {
      prefix: "Smarter systems for ",
      serif: "teams that scale",
    },
    prose:
      "We engineer agent-assisted workflows that execute repetitive operational tasks, summarise context before outreach, and connect your AI to real business actions — CRM updates, ticket routing, document movement, and reporting. The result is AI that produces measurable outcomes, not novelty.",
    listTitle: "How our AI systems are different",
    items: [
      "Agents scoped to specific, high-value workflows",
      "Grounded in your data — CRM, docs, sheets, internal systems",
      "Clear actions, logging, and guardrails for every step",
      "Built on top of your existing stack — not a walled garden",
    ],
  },
  teamHeading: {
    prefix: "Engineered with deep expertise in\n",
    serif: "AI systems & integrations",
  },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    AGHA,
    "Advanced AI Specialist",
    "Musawir leads our advanced AI engagements, partnering with operators to design autonomous agents, integrations, and decisioning systems grounded in real business data. He focuses on scoped, high-leverage AI deployments with clear actions, logging, and guardrails — not demoware.",
    ["Agent Architecture", "AI Integrations", "Data Grounding"],
  ),
  impact: {
    heading: {
      prefix: "AI that ",
      serif: "creates business outcomes",
    },
    body: "We design AI systems that produce measurable operational value — faster prospecting, cleaner data, auto-generated reports, and workflows that execute without daily manual supervision.",
    metrics: [
      { value: "5–10×", labelLines: ["Faster research &", "prospecting"] },
      { value: "100%", labelLines: ["Auditable", "AI actions"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "Advanced AI ", serif: "capabilities" },
    lede: "AI systems we design, integrate, and operate inside the workflows where they generate the most value.",
    pillLabel: "capabilities delivered",
    items: paint([
      {
        n: "01",
        t: "Autonomous AI Agents",
        d: "Agent-assisted workflows that execute repetitive operational tasks — research, summarisation, data movement, reminders, and more.",
      },
      {
        n: "02",
        t: "AI-Driven Data Insights",
        d: "Pipelines that pull data from CRMs, sheets, and internal tools — then generate summaries, alerts, and leadership reports.",
      },
      {
        n: "03",
        t: "Custom AI Integrations",
        d: "AI plugged directly into niche workflows across ops, product, support, or delivery — not dropped on top as a chatbot.",
      },
      {
        n: "04",
        t: "Prospect Research Assistant",
        d: "Account context, lead enrichment, company summaries, and actionable prospect sheets prepared before outreach.",
      },
      {
        n: "05",
        t: "AI-Assisted Reporting",
        d: "Automated summaries across pipeline, operations, and performance — surfaced to leadership without manual chasing.",
      },
      {
        n: "06",
        t: "Guardrails & Observability",
        d: "Logging, review paths, rollback, and monitoring so AI actions stay auditable and safe as the system grows.",
      },
    ]),
  },
  process: {
    heading: "How we build",
    lede: "From use case to autonomous workflow — shipped with guardrails",
    items: [
      {
        n: "01",
        t: "Scope",
        p: "We identify one or two high-value workflows where AI can take measurable work off your team — and define success clearly.",
      },
      {
        n: "02",
        t: "Ground",
        p: "We wire AI into your real data — CRM, docs, sheets, internal tools — with scoped access and clear context.",
      },
      {
        n: "03",
        t: "Build",
        p: "We build agents and integrations on top of OpenAI and your existing stack — with logging, review paths, and fallbacks.",
      },
      {
        n: "04",
        t: "Operate",
        p: "We monitor outcomes, tune prompts and rules, and extend the system into adjacent workflows as it proves itself.",
      },
    ],
  },
  foundations: {
    text: "We don't just automate tasks. We engineer momentum.\nLet's build your intelligent layer.",
  },
  work: {
    heading: { prefix: "Advanced AI ", serif: "projects" },
    lede: "Agent-assisted builds where AI drives real operational throughput.",
    cards: [
      {
        title: "AI Research & Prospecting Assistant",
        sub: "GTM · 2024",
        img: `${WORK}/featured.jpg`,
        badge: "AI Agent",
        badgeColor: "blue",
        tags: ["Enrichment", "Summaries", "Prospect Sheets"],
      },
      {
        title: "Executive Reporting Automation",
        sub: "Leadership · 2024",
        img: `${WORK}/project-0.jpg`,
        badge: "AI Insights",
        tags: ["Rollups", "Pipeline", "Performance"],
      },
      {
        title: "Multi-Platform Agency Workflow System",
        sub: "Agency Ops · 2023",
        img: `${WORK}/project-1.jpg`,
        badge: "Custom AI",
        tags: ["Multi-client", "Delivery", "Reporting"],
      },
    ],
  },
  testimonials: {
    heading: {
      prefix: "Operators using ",
      serif: "advanced AI",
      suffix: "",
    },
    cards: [
      {
        quote:
          "Our SDRs used to spend mornings researching accounts. The AI research assistant now prepares the sheet — they just show up and run the play.",
        stat: { value: "5×", label: "Faster prospect research" },
        name: "Head of Sales",
        role: "B2B SaaS",
        variant: "dark",
      },
      {
        quote:
          "Leadership reports used to be a Friday ritual. The AI pulls the data, summarises the week, and leaves our team to act on it.",
        name: "Chief of Staff",
        role: "Scale-up",
        variant: "cream",
      },
      {
        quote:
          "What we liked most wasn't the AI — it was the guardrails. Every action is logged, every output reviewable. We trust it in production.",
        name: "VP Operations",
        role: "Services Firm",
        variant: "sky",
      },
    ],
  },
  faq: {
    heading: { prefix: "Questions about ", serif: "advanced AI" },
    lede: "How we scope AI projects, handle data, and keep AI actions accountable.",
    items: [
      {
        q: "What kinds of AI agents do you build?",
        a: "Agents scoped to specific workflows — prospect research, ticket triage, contextual summarisation, report generation, and operational task execution. We don't build general-purpose assistants.",
      },
      {
        q: "How do you keep AI outputs accurate?",
        a: "By grounding prompts in real data — your CRM, docs, and internal systems — and adding review paths, logging, and evaluation so quality is measurable and improving.",
      },
      {
        q: "What about data security and access control?",
        a: "We design with least-privilege data access, scoped API keys, and audit logs. Sensitive data stays inside your systems unless explicitly needed for the task.",
      },
      {
        q: "Can AI actions be reviewed or reversed?",
        a: "Yes. For any action that modifies real business systems, we build in logging, review paths, and rollback — so AI actions stay accountable.",
      },
      {
        q: "How do you decide where AI actually helps?",
        a: "We start from measurable workflows where repetition, judgement, or context-gathering costs real time. If a workflow isn't a clear fit for AI, we say so — and automate it a different way.",
      },
    ],
  },
  explore: {
    heading: { prefix: "More from our ", serif: "AI practice" },
    lede: "Advanced AI Systems are strongest when wired into our workflow automation and AI communication layers.",
    cards: AI_EXPLORE_CARDS.filter(
      (c) => c.href !== "/ai-automation/advanced-ai-systems",
    ),
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's build AI that ",
    headingSerif: "actually ships.",
    lede: "Tell us the workflow where AI would create the most leverage. We'll respond within 4 hours with a clear scope — grounded, not generic.",
    stats: [
      { value: "5–10×", label: "Faster workflows" },
      { value: "100%", label: "Auditable actions" },
      { value: "2–3w", label: "First agent live" },
    ],
  },
};

const MARKETING_EXPLORE_CARDS: ServiceExploreCard[] = [
  {
    tag: "Paid Advertising",
    tagBg: "rgba(73,40,253,0.12)",
    tagColor: "#4928fd",
    cardBg: "rgba(73,40,253,0.05)",
    title: "Paid Advertising",
    desc: "Performance media across Meta, Google, TikTok, LinkedIn, and Pinterest — engineered to acquire customers profitably and scale spend with clear unit economics.",
    chips: ["Meta & Google Ads", "TikTok & LinkedIn", "Creative Testing"],
    href: "/growth-marketing/paid-advertising",
  },
  {
    tag: "Organic Marketing",
    tagBg: "rgba(121,212,94,0.18)",
    tagColor: "#16a34a",
    cardBg: "rgba(121,212,94,0.05)",
    title: "Organic Marketing",
    desc: "SEO, social, and content programs that compound — building durable demand, audience equity, and category leadership without renting every click.",
    chips: ["SEO", "Social Media", "Brand Content"],
    href: "/growth-marketing/organic-marketing",
  },
  {
    tag: "Strategic Optimization",
    tagBg: "rgba(255,175,104,0.18)",
    tagColor: "#ea580c",
    cardBg: "rgba(255,175,104,0.06)",
    title: "Strategic Optimization",
    desc: "Audience targeting, funnel diagnostics, and campaign analysis that turn raw performance data into the next round of compounding growth decisions.",
    chips: ["Targeting", "Funnel Analysis", "Lead Gen"],
    href: "/growth-marketing/strategic-optimization",
  },
  {
    tag: "Creative Production",
    tagBg: "rgba(186,129,238,0.15)",
    tagColor: "#7c3aed",
    cardBg: "rgba(186,129,238,0.05)",
    title: "Creative Production",
    desc: "Visual storytelling, video, and AI-accelerated content built to feed paid and organic channels with creative your audience actually stops to watch.",
    chips: ["Photography", "Video", "AI Content"],
    href: "/creative-production",
  },
];

const CREATIVE_EXPLORE_CARDS: ServiceExploreCard[] = [
  {
    tag: "Visual Content",
    tagBg: "rgba(186,129,238,0.15)",
    tagColor: "#7c3aed",
    cardBg: "rgba(186,129,238,0.05)",
    title: "Visual Content Creation",
    desc: "Product photography, brand identity systems, and platform-ready social visuals built to make your brand recognisable in a 1.5-second scroll.",
    chips: ["Product Photo", "Brand Identity", "Social Visuals"],
    href: "/creative-production/visual-content-creation",
  },
  {
    tag: "Video & Post",
    tagBg: "rgba(244,136,154,0.18)",
    tagColor: "#db2777",
    cardBg: "rgba(244,136,154,0.06)",
    title: "Video & Post-Production",
    desc: "Commercials, ad creatives, and edited content engineered for paid performance and organic reach — colour, sound, and pacing handled end-to-end.",
    chips: ["Commercials", "Editing", "Graphics"],
    href: "/creative-production/video-post-production",
  },
  {
    tag: "AI Content",
    tagBg: "rgba(112,181,255,0.18)",
    tagColor: "#2563eb",
    cardBg: "rgba(112,181,255,0.06)",
    title: "AI-Generated Content",
    desc: "UGC-style, cinematic, and animated content produced with AI — built to scale creative volume across Meta, YouTube, TikTok, and podcast inventory.",
    chips: ["UGC AI", "Cinematic", "Animation"],
    href: "/creative-production/ai-generated-content",
  },
  {
    tag: "Growth Marketing",
    tagBg: "rgba(121,212,94,0.18)",
    tagColor: "#16a34a",
    cardBg: "rgba(121,212,94,0.05)",
    title: "Growth Marketing",
    desc: "Paid, organic, and lifecycle programs that turn high-quality creative into measurable customer acquisition and revenue growth.",
    chips: ["Paid Ads", "SEO & Content", "Lifecycle"],
    href: "/growth-marketing",
  },
];

const DIGITAL_EXPLORE_CARDS: ServiceExploreCard[] = [
  {
    tag: "Web Development",
    tagBg: "rgba(73,40,253,0.12)",
    tagColor: "#4928fd",
    cardBg: "rgba(73,40,253,0.05)",
    title: "Web Development",
    desc: "Custom websites, e-commerce platforms, and conversion-tuned landing pages — designed for speed, accessibility, and clean performance instrumentation.",
    chips: ["Custom Sites", "E-commerce", "Landing Pages"],
    href: "/digital-products/web-development",
  },
  {
    tag: "Mobile Apps",
    tagBg: "rgba(112,181,255,0.18)",
    tagColor: "#2563eb",
    cardBg: "rgba(112,181,255,0.06)",
    title: "Mobile App Development",
    desc: "Native and cross-platform iOS/Android apps engineered for real production loads — clean architecture, store-ready, instrumented from day one.",
    chips: ["iOS & Android", "Cross-platform", "Production-ready"],
    href: "/digital-products/mobile-app-development",
  },
  {
    tag: "Custom Software",
    tagBg: "rgba(186,129,238,0.15)",
    tagColor: "#7c3aed",
    cardBg: "rgba(186,129,238,0.05)",
    title: "Custom Software Solutions",
    desc: "Internal tools, business process software, and scalable digital products tailored to the specific operational shape of your business.",
    chips: ["Internal Tools", "Process Software", "Digital Products"],
    href: "/digital-products/custom-software-solutions",
  },
  {
    tag: "AI & Automation",
    tagBg: "rgba(255,175,104,0.18)",
    tagColor: "#ea580c",
    cardBg: "rgba(255,175,104,0.06)",
    title: "AI & Automation",
    desc: "Intelligent workflow automation and AI systems wired directly into the digital products you ship — so software doesn't just run, it improves itself.",
    chips: ["Workflows", "AI Agents", "Integrations"],
    href: "/ai-automation",
  },
];

const PAID_ADVERTISING: ServiceDetailsContent = {
  slug: "paid-advertising",
  documentTitle: "Paid Advertising | Quad Solutions",
  metaDescription:
    "Performance media across Meta, Google, TikTok, LinkedIn, and Pinterest — built to acquire customers profitably and scale spend with clear unit economics.",
  hero: {
    line1: "Paid advertising",
    line2Prefix: "engineered for ",
    serif: "profitable scale",
    lede: "We plan, launch, and scale paid campaigns across Meta, Google, TikTok, LinkedIn, and Pinterest — built around your unit economics, not vanity metrics. Creative testing, audience structure, and bidding all wired together as one performance system.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: { prefix: "Spending more, ", serif: "scaling less" },
    prose:
      "Most paid programs plateau because the structure is wrong: too many campaigns, weak creative variety, and no signal back from the funnel. Spend goes up, CAC drifts, and the channel feels like a black box instead of a growth engine.",
    listTitle: "Where paid programs stall",
    items: [
      "Budget fragmented across too many campaigns and adsets",
      "Creative refresh cycles too slow to fight fatigue",
      "Targeting and audience structure built on assumption, not data",
      "No clean read on payback, LTV, or true incremental lift",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: { prefix: "Channels wired into ", serif: "one performance system" },
    prose:
      "We treat paid as a connected system: account structure designed around the buying journey, creative produced in volume and tested deliberately, and reporting built so you can see what's actually scaling — not just what's running.",
    listTitle: "What we do differently",
    items: [
      "Channel strategy mapped to funnel stage, not channel default",
      "Creative testing run on a clear hypothesis, not random rotation",
      "Audience and bid structure rebuilt around real signal",
      "Reporting tied to revenue, payback, and incrementality",
    ],
  },
  teamHeading: {
    prefix: "Built by operators in\n",
    serif: "performance media",
  },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    MUSTAFA,
    "Paid Media Lead",
    "Musawir leads our paid media practice, partnering with growth and finance teams to scale acquisition channels with discipline. He focuses on full-funnel structure, creative testing systems, and clear unit-economic reporting — not channel-by-channel tactics.",
    ["Performance Media", "Creative Testing", "Funnel Analytics"],
  ),
  impact: {
    heading: { prefix: "Spend that ", serif: "earns its scale" },
    body: "We've scaled paid programs across DTC, B2B, and lead generation — taking accounts from manual launches to structured systems that compound creative learnings into lower CAC and higher payback.",
    metrics: [
      { value: "2–3×", labelLines: ["ROAS", "improvement"] },
      { value: "40%+", labelLines: ["Lower", "blended CAC"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "What we ", serif: "ship" },
    lede: "Capabilities deployed across paid social, search, video, and B2B platforms — built to scale spend with clean signal back to the business.",
    pillLabel: "capabilities delivered",
    items: paint([
      {
        n: "01",
        t: "Meta Ads (Facebook & Instagram)",
        d: "Full-funnel campaigns from prospecting to retargeting, structured for profitable scale and built around creative volume.",
      },
      {
        n: "02",
        t: "Google Ads (Search, PMax, YouTube)",
        d: "Search, Performance Max, Display, and YouTube campaigns aligned to demand stage with clean conversion signal.",
      },
      {
        n: "03",
        t: "TikTok Ads",
        d: "TikTok ad structure, creative production, and bidding designed for the platform's discovery-first algorithm.",
      },
      {
        n: "04",
        t: "LinkedIn Ads",
        d: "B2B campaigns built for ABM, demand generation, and pipeline acceleration — with clean SQL-level reporting.",
      },
      {
        n: "05",
        t: "Pinterest Ads",
        d: "Visual-first campaigns for DTC and lifestyle brands — engineered around intent moments and inspirational discovery.",
      },
      {
        n: "06",
        t: "Performance Reporting",
        d: "Cross-channel dashboards that tie spend to revenue, payback, and incrementality — not just CTR and impressions.",
      },
    ]),
  },
  process: {
    heading: "How we work",
    lede: "Audit → architecture → ship → scale — wired into your funnel",
    items: [
      { n: "01", t: "Audit", p: "We review historical spend, creative, audiences, and conversion data to find where the program leaks the most." },
      { n: "02", t: "Architect", p: "We rebuild account structure around the buying journey — campaigns, audiences, and creative groupings designed for clean read." },
      { n: "03", t: "Ship", p: "We launch with a structured creative slate and a clear testing roadmap so every spend cycle generates compounding learnings." },
      { n: "04", t: "Scale", p: "We scale winners aggressively, retire losers fast, and feed insights back into the creative and funnel teams every week." },
    ],
  },
  foundations: {
    text: "Paid that pays back. Built around your real economics.\nLet's scale your channels.",
  },
  work: {
    heading: { prefix: "Paid programs ", serif: "in production" },
    lede: "Representative paid campaigns across DTC, B2B, and lead generation.",
    cards: [
      { title: "DTC Meta & Google Scale", sub: "E-commerce · 2024", img: `${WORK}/featured.jpg`, badge: "Performance", badgeColor: "blue", tags: ["Meta Ads", "Google Ads", "Creative Testing"] },
      { title: "B2B LinkedIn Pipeline Engine", sub: "B2B SaaS · 2024", img: `${WORK}/project-0.jpg`, badge: "ABM", tags: ["LinkedIn", "ABM", "Pipeline"] },
      { title: "TikTok-First Brand Launch", sub: "Lifestyle · 2024", img: `${WORK}/project-1.jpg`, badge: "Paid Social", tags: ["TikTok", "Creative", "Scale"] },
    ],
  },
  testimonials: {
    heading: { prefix: "Brands ", serif: "scaling spend", suffix: "\nwith us" },
    cards: [
      { quote: "We doubled spend without breaking payback. The structure they built lets us scale without re-litigating every adset.", stat: { value: "2.4×", label: "ROAS lift in 90 days" }, name: "Head of Growth", role: "DTC Brand", variant: "dark" },
      { quote: "LinkedIn finally feels like a real pipeline channel — not a vanity exercise. Every campaign ties back to SQLs and pipeline.", name: "VP Marketing", role: "B2B SaaS", variant: "cream" },
      { quote: "Creative testing went from a quarterly project to a weekly system. Winners get scaled in days, not months.", name: "Performance Lead", role: "Lifestyle Brand", variant: "sky" },
    ],
  },
  faq: {
    heading: { prefix: "Questions about ", serif: "paid advertising" },
    lede: "Channel mix, creative cadence, attribution, and how we plug into existing growth teams.",
    items: [
      { q: "Which channels do you actually run?", a: "Meta, Google, TikTok, LinkedIn, and Pinterest — the platforms with real production-grade scaling APIs and reporting. We pick channel mix based on where your ICP actually buys." },
      { q: "How do you handle creative production for paid?", a: "We pair paid with our Creative Production team — including AI-accelerated content — so creative volume isn't the bottleneck on testing." },
      { q: "Do you work with our existing in-house growth team?", a: "Yes. We embed alongside in-house teams or run channels end-to-end. Either way, we share dashboards, decisions, and weekly insight." },
      { q: "How do you measure incrementality vs. last-click?", a: "We combine in-platform reporting with funnel analytics, holdouts where possible, and clean post-purchase surveys — so you don't over-credit any single channel." },
      { q: "How fast can we go live?", a: "Most engagements have a structured campaign live in 1–2 weeks, with a creative testing roadmap and reporting wired in by week 3." },
    ],
  },
  explore: {
    heading: { prefix: "More from ", serif: "Growth Marketing" },
    lede: "Paid is strongest when it's connected to organic, optimization, and creative — see the rest of the practice.",
    cards: MARKETING_EXPLORE_CARDS.filter(
      (c) => c.href !== "/growth-marketing/paid-advertising",
    ),
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's scale spend ",
    headingSerif: "the right way.",
    lede: "Tell us your channels, current spend, and where you're stuck. We'll respond within 4 hours with a clear paid plan grounded in your economics.",
    stats: [
      { value: "2–3×", label: "ROAS improvement" },
      { value: "40%+", label: "Lower blended CAC" },
      { value: "1–2w", label: "First campaign live" },
    ],
  },
};

const ORGANIC_MARKETING: ServiceDetailsContent = {
  slug: "organic-marketing",
  documentTitle: "Organic Marketing | Quad Solutions",
  metaDescription:
    "SEO, social, and content programs that compound — building durable demand, audience equity, and category leadership without renting every click.",
  hero: {
    line1: "Organic growth that",
    line2Prefix: "compounds, ",
    serif: "not rents",
    lede: "We build organic engines — SEO, social, and brand content — that compound demand, build audience equity, and create the gravitational pull that paid channels alone can't.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: { prefix: "Renting demand ", serif: "instead of owning it" },
    prose:
      "When growth depends entirely on paid, every dollar buys a moment of attention you don't keep. Organic is hard, slower, and harder to attribute — but it's how brands stop renting every click and start owning their category.",
    listTitle: "Where organic falls flat",
    items: [
      "Content produced without a clear search or audience strategy",
      "Social treated as posting cadence instead of audience equity",
      "SEO treated as a checklist, not a sustained growth program",
      "No clear measurement of organic's compounding contribution",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: { prefix: "Programs designed to ", serif: "compound" },
    prose:
      "We design organic programs that build a content moat over months, not days — search-led, brand-led, and platform-aware. Every asset has a job: rank, retain, or convert. Nothing produced for the sake of cadence.",
    listTitle: "What we do differently",
    items: [
      "Topic clusters and content built for search and brand together",
      "Social treated as audience-building, not just posting",
      "SEO architecture, content, and links coordinated as one program",
      "Reporting tied to brand search, return visits, and assisted conversion",
    ],
  },
  teamHeading: { prefix: "Built by operators in\n", serif: "organic growth" },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    MUSTAFA,
    "Organic Growth Lead",
    "Musawir leads our organic practice — partnering with content, brand, and SEO teams to build programs that compound. He focuses on durable demand, search architecture, and audience-first social strategy that earns attention rather than renting it.",
    ["SEO Strategy", "Content Programs", "Audience Building"],
  ),
  impact: {
    heading: { prefix: "Demand that ", serif: "shows up tomorrow" },
    body: "Organic programs we build deliver compounding traffic, branded search lift, and audience growth — the leading indicators of healthy, less-paid-dependent growth.",
    metrics: [
      { value: "3×", labelLines: ["Organic", "traffic growth"] },
      { value: "2×+", labelLines: ["Branded", "search lift"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "Organic ", serif: "capabilities" },
    lede: "Programs we run end-to-end — built to compound across search, social, and brand channels.",
    pillLabel: "capabilities delivered",
    items: paint([
      { n: "01", t: "Search Engine Optimization", d: "Technical SEO, on-page, content architecture, and link strategy — coordinated as one durable growth program." },
      { n: "02", t: "Content Programs", d: "Editorial calendars, cluster content, and pillar pieces built for ranking, retention, and brand authority." },
      { n: "03", t: "Social Media Management", d: "Platform-native social programs that build audience equity — not just maintain a posting cadence." },
      { n: "04", t: "Brand Awareness Campaigns", d: "Top-of-funnel programs designed to lift branded search, recall, and qualified inbound demand." },
      { n: "05", t: "Community & Audience Building", d: "Newsletter, community, and creator partnerships that turn audience into a real, owned distribution surface." },
      { n: "06", t: "Organic Performance Reporting", d: "Reporting tied to traffic, branded search, return visits, and assisted conversion — not vanity metrics." },
    ]),
  },
  process: {
    heading: "How we build",
    lede: "Strategy → architecture → produce → compound",
    items: [
      { n: "01", t: "Strategy", p: "We map your category, audience, and search landscape to find where you can credibly own a position over time." },
      { n: "02", t: "Architect", p: "We design topic clusters, site architecture, and channel mix — the structural decisions that determine the next 12 months of compounding." },
      { n: "03", t: "Produce", p: "We ship content, social, and SEO assets in a coordinated cadence — produced for the platform, not just the calendar." },
      { n: "04", t: "Compound", p: "We monitor rankings, audience growth, and assisted conversion — and double down on what's compounding fastest." },
    ],
  },
  foundations: { text: "Stop renting attention. Start owning your category.\nLet's build your organic engine." },
  work: {
    heading: { prefix: "Organic programs ", serif: "in motion" },
    lede: "Representative organic programs across SEO, social, and brand-led growth.",
    cards: [
      { title: "SEO & Content Cluster Build", sub: "B2B SaaS · 2024", img: `${WORK}/featured.jpg`, badge: "SEO", badgeColor: "blue", tags: ["Topic Clusters", "Pillar Content", "Technical SEO"] },
      { title: "Audience-First Social Engine", sub: "Lifestyle · 2024", img: `${WORK}/project-0.jpg`, badge: "Social", tags: ["Instagram", "TikTok", "Creator"] },
      { title: "Brand Search Lift Program", sub: "DTC · 2024", img: `${WORK}/project-1.jpg`, badge: "Brand", tags: ["Awareness", "PR", "Content"] },
    ],
  },
  testimonials: {
    heading: { prefix: "Teams ", serif: "compounding organic", suffix: "" },
    cards: [
      { quote: "Organic went from a side project to our highest-margin growth channel. Branded search and inbound demand both compounded month after month.", stat: { value: "3×", label: "Organic traffic in 9 months" }, name: "Head of Marketing", role: "B2B SaaS", variant: "dark" },
      { quote: "Our content finally feels like a system. Each piece supports the next — and we can see exactly which clusters are paying off.", name: "Content Lead", role: "Scale-up", variant: "cream" },
      { quote: "Social used to feel like noise. Now it's an actual community — and we've seen real, attributable revenue come back from it.", name: "Brand Director", role: "DTC", variant: "sky" },
    ],
  },
  faq: {
    heading: { prefix: "Questions about ", serif: "organic marketing" },
    lede: "Timelines, channels, measurement, and how organic plugs into the rest of growth.",
    items: [
      { q: "How long until organic shows real impact?", a: "Most programs see meaningful traffic and brand search lift within 3–6 months, with compounding gains in months 6–12. We share leading indicators every week." },
      { q: "Do you handle SEO, social, and content all together?", a: "Yes. They're treated as one connected program — content feeds search, social amplifies content, and SEO captures the resulting demand." },
      { q: "How do you measure organic if attribution is messy?", a: "We track branded search lift, return visits, assisted conversion, and SQL/qualified-inbound trends — alongside traditional traffic and ranking data." },
      { q: "Can you embed with our in-house content team?", a: "Yes. We regularly partner with in-house content teams — providing strategy, production support, and SEO architecture alongside their existing work." },
      { q: "Do you do PR or earned media?", a: "We focus on owned and earned-through-content channels — not traditional PR. For top-of-funnel brand work, we partner with PR specialists when needed." },
    ],
  },
  explore: {
    heading: { prefix: "More from ", serif: "Growth Marketing" },
    lede: "Organic compounds best when paired with smart paid, deep optimization, and strong creative.",
    cards: MARKETING_EXPLORE_CARDS.filter(
      (c) => c.href !== "/growth-marketing/organic-marketing",
    ),
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's build organic that ",
    headingSerif: "compounds.",
    lede: "Tell us your category, your current organic state, and where you want to lead. We'll respond within 4 hours with a clear plan.",
    stats: [
      { value: "3×", label: "Organic traffic" },
      { value: "2×+", label: "Branded search" },
      { value: "6–12mo", label: "Compounding window" },
    ],
  },
};

const STRATEGIC_OPTIMIZATION: ServiceDetailsContent = {
  slug: "strategic-optimization",
  documentTitle: "Strategic Optimization | Quad Solutions",
  metaDescription:
    "Audience targeting, funnel diagnostics, and campaign analysis that turn raw performance data into the next round of compounding growth decisions.",
  hero: {
    line1: "Optimization that",
    line2Prefix: "turns data ",
    serif: "into decisions",
    lede: "We turn campaign data, audience signals, and funnel diagnostics into the next round of growth decisions — refining targeting, retiring waste, and scaling what's actually working.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: { prefix: "Data without ", serif: "decisions" },
    prose:
      "Most growth teams have plenty of dashboards and not enough decisions. Reports get reviewed, screenshots get pasted into decks, but the actual targeting, funnel, and bid logic doesn't change fast enough to compound.",
    listTitle: "Where decisions stall",
    items: [
      "Targeting and audiences built once and rarely revisited",
      "Funnel drop-offs visible in dashboards but never diagnosed",
      "Reporting framed for review, not action",
      "Lead gen funnels treated as static instead of iterative",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: { prefix: "Optimization as a ", serif: "weekly habit" },
    prose:
      "We treat optimization as a weekly cadence — not a quarterly project. Targeting gets refined, funnels get diagnosed, lead gen gets re-tested, and decisions get made on a schedule. The result is a growth program that compounds learnings instead of stockpiling them.",
    listTitle: "What we do differently",
    items: [
      "Targeting and segmentation revisited on a weekly cadence",
      "Funnel diagnostics tied to specific drop-offs and root causes",
      "Lead gen funnels treated as iterative experiments",
      "Reporting framed around decisions, not just review",
    ],
  },
  teamHeading: { prefix: "Built by operators in\n", serif: "growth analytics" },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    MUSTAFA,
    "Growth Optimization Lead",
    "Musawir leads our optimization practice — partnering with growth and analytics teams to turn raw performance data into decisions. He focuses on targeting precision, funnel diagnostics, and lead gen iteration that compounds across channels.",
    ["Audience Strategy", "Funnel Analytics", "Lead Gen"],
  ),
  impact: {
    heading: { prefix: "Better decisions, ", serif: "faster" },
    body: "We've helped growth teams move from quarterly review cycles to weekly decision cycles — improving conversion, reducing CAC, and turning lead gen funnels into systems that learn.",
    metrics: [
      { value: "30%+", labelLines: ["Conversion", "improvement"] },
      { value: "2×", labelLines: ["Faster", "decision cycle"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "Optimization ", serif: "capabilities" },
    lede: "Capabilities deployed across audience, funnel, and lead gen — focused on turning data into decisions.",
    pillLabel: "capabilities delivered",
    items: paint([
      { n: "01", t: "Audience Targeting & Segmentation", d: "ICP definition, lookalike modelling, and segmentation built on real conversion data — not assumed personas." },
      { n: "02", t: "Campaign Performance Analysis", d: "Weekly performance reviews tied to specific decisions: scale, retire, reframe, or test." },
      { n: "03", t: "Funnel Diagnostics", d: "End-to-end funnel analysis from first impression to retained customer — with clear drop-off attribution." },
      { n: "04", t: "Lead Generation Funnels", d: "Lead funnels designed for qualification, not just capture — built and iterated as experiments." },
      { n: "05", t: "Conversion Rate Optimization", d: "Landing page, form, and checkout testing programs — structured around hypothesis, not random change." },
      { n: "06", t: "Decision Reporting", d: "Reporting designed for action — surfacing the next decision, not just the previous result." },
    ]),
  },
  process: {
    heading: "How we work",
    lede: "Audit → diagnose → decide → iterate — on a weekly cadence",
    items: [
      { n: "01", t: "Audit", p: "We review existing audiences, funnels, and reporting to identify where decisions are getting stuck or missed." },
      { n: "02", t: "Diagnose", p: "We trace funnel drop-offs and audience underperformance to specific, actionable root causes." },
      { n: "03", t: "Decide", p: "We turn diagnostics into a clear decision queue — what to scale, retire, reframe, or test next." },
      { n: "04", t: "Iterate", p: "We run optimization on a weekly cadence so the program compounds instead of plateauing." },
    ],
  },
  foundations: { text: "Optimization isn't a quarterly review.\nLet's build a system that decides every week." },
  work: {
    heading: { prefix: "Optimization ", serif: "programs" },
    lede: "Representative optimization engagements across paid, lead gen, and conversion.",
    cards: [
      { title: "Audience & Funnel Rebuild", sub: "DTC · 2024", img: `${WORK}/featured.jpg`, badge: "CRO", badgeColor: "blue", tags: ["Audience", "Funnel", "CRO"] },
      { title: "Lead Gen Funnel Iteration", sub: "B2B · 2024", img: `${WORK}/project-0.jpg`, badge: "Lead Gen", tags: ["Forms", "Qualification", "Routing"] },
      { title: "Conversion Diagnostics Program", sub: "E-commerce · 2024", img: `${WORK}/project-1.jpg`, badge: "Diagnostics", tags: ["Checkout", "Drop-off", "Testing"] },
    ],
  },
  testimonials: {
    heading: { prefix: "Teams ", serif: "deciding faster", suffix: "" },
    cards: [
      { quote: "Our growth meeting went from review to decisions. Every week we know exactly what to scale, kill, or test next.", stat: { value: "30%+", label: "Conversion lift in 60 days" }, name: "Head of Growth", role: "DTC Brand", variant: "dark" },
      { quote: "The lead gen funnel started actually qualifying leads. Sales stopped complaining about the inbound list within a month.", name: "VP Marketing", role: "B2B SaaS", variant: "cream" },
      { quote: "We finally see the full funnel. The drop-off we ignored for a year turned out to be the biggest unlock.", name: "Director of Growth", role: "Marketplace", variant: "sky" },
    ],
  },
  faq: {
    heading: { prefix: "Questions about ", serif: "optimization" },
    lede: "How we run optimization programs, what we measure, and where we plug in.",
    items: [
      { q: "Do you optimize across paid and organic together?", a: "Yes. Optimization works best when it sees the full funnel — paid, organic, and lifecycle — not one channel in isolation." },
      { q: "How do you choose what to test?", a: "We prioritise tests by leverage: where the funnel leaks the most volume, where the audience signal is weakest, or where conversion economics most need help." },
      { q: "Can you work with our existing analytics stack?", a: "Yes. We work with most analytics platforms — GA4, Mixpanel, Amplitude, Heap, and warehouse-based stacks. We focus on decisions, not migrating tools." },
      { q: "What if our funnel data is messy?", a: "Common. We start by stabilising tracking and reporting before running heavy optimization — clean signal first, decisions second." },
      { q: "Do you do landing page and CRO work?", a: "Yes. CRO sits inside optimization — testing landing pages, forms, and checkout flows as part of the broader funnel program." },
    ],
  },
  explore: {
    heading: { prefix: "More from ", serif: "Growth Marketing" },
    lede: "Optimization compounds best alongside paid, organic, and creative — see the rest of the practice.",
    cards: MARKETING_EXPLORE_CARDS.filter(
      (c) => c.href !== "/growth-marketing/strategic-optimization",
    ),
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's turn data into ",
    headingSerif: "decisions.",
    lede: "Tell us where your funnel is leaking and where decisions are stalling. We'll respond within 4 hours with a clear optimization plan.",
    stats: [
      { value: "30%+", label: "Conversion lift" },
      { value: "2×", label: "Faster cycles" },
      { value: "1–2w", label: "First diagnostic" },
    ],
  },
};

const VISUAL_CONTENT_CREATION: ServiceDetailsContent = {
  slug: "visual-content-creation",
  documentTitle: "Visual Content Creation | Quad Solutions",
  metaDescription:
    "Product photography, brand identity systems, and platform-ready social visuals built to make your brand recognisable in a 1.5-second scroll.",
  hero: {
    line1: "Visual content",
    line2Prefix: "built for ",
    serif: "the scroll",
    lede: "We produce product photography, brand identity systems, and platform-ready social visuals engineered for the modern attention economy — recognisable, on-brand, and built for the way people actually consume.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: { prefix: "Beautiful visuals that ", serif: "don't perform" },
    prose:
      "Most brands invest in beautiful visuals that don't survive the scroll. Photography looks like a catalogue, social posts feel templated, and brand identity stays trapped in the brand book — never showing up where customers actually meet you.",
    listTitle: "Where visuals fall short",
    items: [
      "Product photography optimised for studios, not feeds",
      "Brand identity that lives in PDFs, not on screens",
      "Social visuals that ignore platform-native behaviour",
      "Inconsistent visual system across paid, organic, and product",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: { prefix: "Built for ", serif: "the platforms you actually live in" },
    prose:
      "We design and produce visuals for where they're actually consumed — feed, search, product page, ad inventory. Identity systems, photography, and social visuals all built as one coherent surface that performs as well as it looks.",
    listTitle: "What we do differently",
    items: [
      "Photography produced for performance and platform reality",
      "Brand identity systems that translate cleanly to digital",
      "Social visuals built to win the first 1.5 seconds",
      "Coherent visual system across paid, organic, and product",
    ],
  },
  teamHeading: { prefix: "Crafted by specialists in\n", serif: "modern brand visuals" },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    YOUSAF,
    "Visual Content Lead",
    "Musawir leads our visual content practice, partnering with brand and growth teams to produce visuals that work as hard on the feed as they do in the brand book. He focuses on platform-native photography, identity systems, and social visuals that convert.",
    ["Photography Direction", "Brand Identity", "Social Design"],
  ),
  impact: {
    heading: { prefix: "Visuals that ", serif: "earn the scroll" },
    body: "We've produced visual programs across DTC, hospitality, and B2B that lift creative performance in paid channels and build durable brand recognition in organic ones.",
    metrics: [
      { value: "2×", labelLines: ["Creative", "performance lift"] },
      { value: "5×", labelLines: ["Faster brand", "recognition"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "Visual ", serif: "capabilities" },
    lede: "Production capabilities deployed across photography, identity, and platform visuals — built to perform.",
    pillLabel: "capabilities delivered",
    items: paint([
      { n: "01", t: "Product Photography", d: "Studio and lifestyle photography produced for feeds, ads, and product pages — engineered for conversion and recognition." },
      { n: "02", t: "Brand Identity Design", d: "Logo, type, colour, and visual systems designed for digital-first reality — not just printed brand books." },
      { n: "03", t: "Social Media Visuals", d: "Platform-native visuals for Instagram, TikTok, LinkedIn, and Pinterest — built for the way each platform actually rewards content." },
      { n: "04", t: "Brand Guidelines", d: "Living brand guidelines covering type, colour, photography direction, and platform behaviour — not just static rules." },
      { n: "05", t: "Visual Templates", d: "Editable templates and design systems your in-house team can run with — without breaking the brand." },
      { n: "06", t: "Asset Libraries", d: "Organised, on-brand asset libraries for ads, social, and product — sized and ready for every channel and ratio." },
    ]),
  },
  process: {
    heading: "How we work",
    lede: "Strategy → direction → produce → systemise",
    items: [
      { n: "01", t: "Strategy", p: "We map where your visuals need to perform — platforms, ratios, audience expectations — before any production starts." },
      { n: "02", t: "Direction", p: "We define art direction, photography direction, and identity decisions in a clear, opinionated brief." },
      { n: "03", t: "Produce", p: "We shoot, design, and produce the visual library — built for the channels where your customers actually meet you." },
      { n: "04", t: "Systemise", p: "We package everything into reusable systems and templates so the brand stays consistent as it scales." },
    ],
  },
  foundations: { text: "Beautiful visuals are easy. Visuals that perform are different.\nLet's build yours." },
  work: {
    heading: { prefix: "Visual programs ", serif: "in production" },
    lede: "Representative visual content engagements across DTC, hospitality, and B2B brands.",
    cards: [
      { title: "DTC Photography & Identity Refresh", sub: "E-commerce · 2024", img: `${WORK}/featured.jpg`, badge: "Photography", badgeColor: "blue", tags: ["Studio", "Lifestyle", "Identity"] },
      { title: "Social-First Brand System", sub: "Hospitality · 2024", img: `${WORK}/project-0.jpg`, badge: "Brand", tags: ["Identity", "Templates", "Social"] },
      { title: "B2B Visual Identity Build", sub: "SaaS · 2024", img: `${WORK}/project-1.jpg`, badge: "Identity", tags: ["Logo", "Type", "Brand System"] },
    ],
  },
  testimonials: {
    heading: { prefix: "Brands ", serif: "winning the scroll", suffix: "" },
    cards: [
      { quote: "Our paid creative performance jumped overnight. The new photography didn't just look better — it converted noticeably better in every channel.", stat: { value: "2.1×", label: "Creative ROAS lift" }, name: "Head of Brand", role: "DTC Brand", variant: "dark" },
      { quote: "The identity finally feels like us — and our team can actually use it. Templates, systems, and visuals that scale without rebuilding.", name: "Founder", role: "Hospitality", variant: "cream" },
      { quote: "We stopped looking like every other B2B SaaS. Our visual system is now an actual differentiator in a sea of sameness.", name: "VP Marketing", role: "B2B SaaS", variant: "sky" },
    ],
  },
  faq: {
    heading: { prefix: "Questions about ", serif: "visual content" },
    lede: "Photography production, identity work, and how we plug into in-house brand teams.",
    items: [
      { q: "Do you handle photography in-house?", a: "Yes. We direct and produce photography end-to-end — studio, lifestyle, and on-location — built specifically for the feeds and channels where it'll run." },
      { q: "Can we use your visuals across paid and organic?", a: "Yes. Everything we produce is built to perform across paid, organic, and product surfaces — sized and packaged for every channel." },
      { q: "Do you work with our in-house brand team?", a: "Yes. We regularly partner with in-house brand and design teams — providing direction, production capacity, or full identity work as needed." },
      { q: "What's the typical timeline for an identity project?", a: "Identity work typically runs 4–8 weeks depending on scope. Photography and social-system production can ship in shorter cycles within that window." },
      { q: "Do you produce video and motion as well?", a: "Video and post-production sit in our Video & Post-Production service — often run alongside visual content for a fully integrated creative output." },
    ],
  },
  explore: {
    heading: { prefix: "More from ", serif: "Creative Production" },
    lede: "Visual content sits inside a broader creative practice — explore the rest.",
    cards: CREATIVE_EXPLORE_CARDS.filter(
      (c) => c.href !== "/creative-production/visual-content-creation",
    ),
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's build visuals ",
    headingSerif: "that earn the scroll.",
    lede: "Tell us where your brand needs to show up and how it needs to perform. We'll respond within 4 hours with a clear visual plan.",
    stats: [
      { value: "2×", label: "Creative performance" },
      { value: "5×", label: "Brand recognition" },
      { value: "4–8w", label: "Identity timeline" },
    ],
  },
};

const VIDEO_POST_PRODUCTION: ServiceDetailsContent = {
  slug: "video-post-production",
  documentTitle: "Video & Post-Production | Quad Solutions",
  metaDescription:
    "Commercials, ad creatives, and edited content engineered for paid performance and organic reach — colour, sound, and pacing handled end-to-end.",
  hero: {
    line1: "Video & post built for",
    line2Prefix: "performance, ",
    serif: "not just craft",
    lede: "We produce commercials, ad creatives, and edited content engineered for paid performance and organic reach — colour, sound, pacing, and platform behaviour handled end-to-end.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: { prefix: "Video that ", serif: "looks great and underperforms" },
    prose:
      "Plenty of video looks beautiful and never works. Commercials shot for craft don't survive the feed, ads with weak first frames die in the auction, and editing decisions made for the brief get punished by the algorithm.",
    listTitle: "Where video underperforms",
    items: [
      "First frames that don't earn the second",
      "Ad pacing built for film, not feed",
      "Sound design that fights silent autoplay",
      "No structured testing of variants and hooks",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: { prefix: "Built for ", serif: "the platform's reality" },
    prose:
      "We produce video with platform behaviour at the centre — not the edge. Hooks, pacing, sound, and ratios all decided up front for the channels where the work will run, then post-produced with paid performance and organic reach in mind.",
    listTitle: "What we do differently",
    items: [
      "Hooks and first frames designed deliberately, not by accident",
      "Editing built for sound-on and sound-off behaviour",
      "Variant production engineered for paid creative testing",
      "Colour, sound, and motion handled by one integrated team",
    ],
  },
  teamHeading: { prefix: "Produced by specialists in\n", serif: "performance video" },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    YOUSAF,
    "Video & Post Lead",
    "Musawir leads our video and post-production practice — partnering with brand and growth teams to produce video that works as hard on the feed as it does in the cut. He focuses on platform-aware production, hook design, and structured creative testing.",
    ["Video Direction", "Post-Production", "Performance Editing"],
  ),
  impact: {
    heading: { prefix: "Video that ", serif: "earns its budget" },
    body: "We've produced video programs across DTC, lifestyle, and B2B that lift paid creative performance, increase organic watch-through, and reduce creative fatigue cycles.",
    metrics: [
      { value: "3×", labelLines: ["Hook", "engagement"] },
      { value: "2×", labelLines: ["Creative", "longevity"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "Video ", serif: "capabilities" },
    lede: "Production capabilities across commercials, ad creatives, and edited content — built to perform.",
    pillLabel: "capabilities delivered",
    items: paint([
      { n: "01", t: "Commercial & Ad Creatives", d: "Performance-grade commercials and ad creatives produced for Meta, TikTok, YouTube, and CTV inventory." },
      { n: "02", t: "Video Editing & Refinement", d: "Editing built for the feed — paced, captioned, and sound-designed for both sound-on and sound-off." },
      { n: "03", t: "Graphic Design for Digital Platforms", d: "Motion graphics, lower thirds, and platform-native visual treatments that lift watch-through and recall." },
      { n: "04", t: "Variant Production", d: "Structured creative variant production for paid testing — hooks, edits, and CTAs tested against clear hypotheses." },
      { n: "05", t: "Colour & Sound", d: "Full post-production colour grading and sound design — handled in-house alongside the edit, not bolted on." },
      { n: "06", t: "Brand-Aligned Editing Systems", d: "Editing templates and brand-aligned post systems your team can run with for ongoing content production." },
    ]),
  },
  process: {
    heading: "How we work",
    lede: "Brief → produce → edit → variant",
    items: [
      { n: "01", t: "Brief", p: "We translate the campaign or content goal into a production brief — hooks, ratios, sound behaviour, and platform reality up front." },
      { n: "02", t: "Produce", p: "We shoot or source footage with clear performance intent — capturing what the cut will actually need." },
      { n: "03", t: "Edit", p: "We edit, colour, and sound-design for the feed — building primary cuts that earn the first frame and the second." },
      { n: "04", t: "Variant", p: "We produce structured variants for paid testing — hooks, edits, and durations engineered to learn fast." },
    ],
  },
  foundations: { text: "Video that performs as hard as it looks.\nLet's produce yours." },
  work: {
    heading: { prefix: "Video projects ", serif: "in production" },
    lede: "Representative video and post engagements across DTC, lifestyle, and B2B.",
    cards: [
      { title: "DTC Performance Video Slate", sub: "E-commerce · 2024", img: `${WORK}/featured.jpg`, badge: "Performance", badgeColor: "blue", tags: ["Meta", "TikTok", "Variants"] },
      { title: "Lifestyle Brand Commercial", sub: "Lifestyle · 2024", img: `${WORK}/project-0.jpg`, badge: "Commercial", tags: ["Commercial", "Editing", "Colour"] },
      { title: "B2B Explainer System", sub: "SaaS · 2024", img: `${WORK}/project-1.jpg`, badge: "Explainer", tags: ["Motion", "Brand Video", "Templates"] },
    ],
  },
  testimonials: {
    heading: { prefix: "Brands ", serif: "shipping video that scales", suffix: "" },
    cards: [
      { quote: "Our paid video performance went up across the board. The hook discipline alone changed how our creative team thinks about every concept.", stat: { value: "3.2×", label: "Hook engagement lift" }, name: "Head of Creative", role: "DTC Brand", variant: "dark" },
      { quote: "The post-production alone elevated everything. Same footage, but it suddenly felt like a brand instead of a content factory.", name: "Brand Director", role: "Lifestyle", variant: "cream" },
      { quote: "We finally have a video system instead of one-off shoots. Variants, templates, and a brand-aligned post that our in-house team can extend.", name: "VP Marketing", role: "B2B SaaS", variant: "sky" },
    ],
  },
  faq: {
    heading: { prefix: "Questions about ", serif: "video & post" },
    lede: "Production scope, post-production, variant work, and how we plug into existing creative teams.",
    items: [
      { q: "Do you handle production and post in-house?", a: "Yes. We direct production, edit, colour, and sound-design end-to-end. For specialty shoots we partner with vetted production houses but stay in creative direction." },
      { q: "Can you produce variants for paid testing?", a: "Yes. Variant production is a core part of our work — hooks, edits, durations, and CTAs structured around real testing hypotheses." },
      { q: "Do you work with footage we already own?", a: "Yes. We regularly edit and post-produce existing footage — bringing it up to performance-grade standard with colour, sound, and pacing work." },
      { q: "What platforms do you produce for?", a: "Meta, TikTok, YouTube, LinkedIn, CTV, and any vertical-first or square format. We design for the platform from the brief, not in the cut." },
      { q: "Do you handle motion graphics and animation?", a: "Yes. Motion graphics, lower thirds, and brand-aligned animation are part of our post offering." },
    ],
  },
  explore: {
    heading: { prefix: "More from ", serif: "Creative Production" },
    lede: "Video sits alongside visual content and AI-generated creative — see the rest of the practice.",
    cards: CREATIVE_EXPLORE_CARDS.filter(
      (c) => c.href !== "/creative-production/video-post-production",
    ),
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's produce video ",
    headingSerif: "that performs.",
    lede: "Tell us your channels, your concepts, and your performance goals. We'll respond within 4 hours with a clear production plan.",
    stats: [
      { value: "3×", label: "Hook engagement" },
      { value: "2×", label: "Creative longevity" },
      { value: "2–4w", label: "First slate live" },
    ],
  },
};

const AI_GENERATED_CONTENT: ServiceDetailsContent = {
  slug: "ai-generated-content",
  documentTitle: "AI-Generated Content | Quad Solutions",
  metaDescription:
    "UGC-style, cinematic, and animated content produced with AI — built to scale creative volume across Meta, YouTube, TikTok, and podcast inventory.",
  hero: {
    line1: "AI-generated content",
    line2Prefix: "for ",
    serif: "creative volume at scale",
    lede: "We produce UGC-style, cinematic, and animated content using AI tooling — engineered to scale paid creative volume, fight fatigue, and unlock formats that traditional production can't economically reach.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: { prefix: "Creative volume is ", serif: "the new bottleneck" },
    prose:
      "Paid channels reward creative volume. Traditional production can't keep up — costs scale linearly with output, and creative fatigue eats every win. AI content done well unlocks volume without sacrificing brand quality.",
    listTitle: "Where teams hit the wall",
    items: [
      "Creative production cost scales 1:1 with output",
      "Fatigue cycles outpace shoot cadence",
      "Niche formats (UGC, animated, podcast) priced out of reach",
      "Variant testing limited by what can physically be produced",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: { prefix: "AI content with ", serif: "brand discipline" },
    prose:
      "We treat AI content as a production tool, not a novelty. Output is grounded in your brand voice, visual direction, and channel reality — produced at scale, refined by a human team, and shipped with the same performance discipline as traditional creative.",
    listTitle: "What we do differently",
    items: [
      "AI output grounded in your brand voice and visual direction",
      "Production scaled around channel reality and paid testing",
      "Human review on every shipped asset — no autopilot",
      "Niche formats unlocked: UGC AI, cinematic, animated, podcast",
    ],
  },
  teamHeading: { prefix: "Produced by specialists in\n", serif: "AI-accelerated content" },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    YOUSAF,
    "AI Content Lead",
    "Musawir leads our AI content practice — partnering with growth and brand teams to scale paid creative volume using AI tooling without losing brand discipline. He focuses on UGC-style content, cinematic AI, and structured creative testing at scale.",
    ["AI Production", "Creative Volume", "Brand Discipline"],
  ),
  impact: {
    heading: { prefix: "Creative volume that ", serif: "actually performs" },
    body: "We've produced AI content programs that scale creative output 5–10× without raising production budget, while maintaining brand discipline and outperforming traditional creative in many paid contexts.",
    metrics: [
      { value: "5–10×", labelLines: ["Creative", "volume scale"] },
      { value: "60%+", labelLines: ["Lower", "creative cost"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "AI content ", serif: "capabilities" },
    lede: "Capabilities across UGC, cinematic, and animated formats — built for scaled paid testing and organic reach.",
    pillLabel: "capabilities delivered",
    items: paint([
      { n: "01", t: "UGC-Style AI Content", d: "Talking-head and lifestyle UGC content produced with AI — built to ship at the volume paid channels reward." },
      { n: "02", t: "Cinematic & Documentary Video", d: "AI-assisted cinematic and documentary-style content with brand-grade direction and post-production." },
      { n: "03", t: "Animations & Cartoon Videos", d: "Animated and cartoon-style content for explainers, ads, and brand storytelling — produced at speed." },
      { n: "04", t: "Podcast & YouTube Ads", d: "Audio and longer-form video creative engineered for podcast and YouTube ad inventory." },
      { n: "05", t: "Variant Testing at Scale", d: "Structured variant production using AI — running creative tests at volumes traditional production can't economically match." },
      { n: "06", t: "Brand-Aligned AI Pipelines", d: "Custom AI content pipelines tuned to your brand voice, visual direction, and channel mix — operated alongside human review." },
    ]),
  },
  process: {
    heading: "How we work",
    lede: "Brand → pipeline → produce → review",
    items: [
      { n: "01", t: "Brand", p: "We translate brand voice, visual direction, and channel rules into a clear AI production brief." },
      { n: "02", t: "Pipeline", p: "We build the AI production pipeline — models, prompts, and templates tuned to your brand." },
      { n: "03", t: "Produce", p: "We generate at volume — UGC, cinematic, animated, and audio formats sized for the channels you run." },
      { n: "04", t: "Review", p: "Every shipped asset goes through human review for brand discipline, performance fit, and quality." },
    ],
  },
  foundations: { text: "AI content done with brand discipline.\nLet's scale your creative volume." },
  work: {
    heading: { prefix: "AI content ", serif: "in production" },
    lede: "Representative AI content programs across DTC, B2B, and audio inventory.",
    cards: [
      { title: "DTC UGC AI Slate", sub: "E-commerce · 2024", img: `${WORK}/featured.jpg`, badge: "AI UGC", badgeColor: "blue", tags: ["UGC", "Meta", "TikTok"] },
      { title: "Cinematic AI Brand Film", sub: "Lifestyle · 2024", img: `${WORK}/project-0.jpg`, badge: "AI Cinematic", tags: ["Cinematic", "AI Video", "Brand"] },
      { title: "Animated Explainer System", sub: "B2B · 2024", img: `${WORK}/project-1.jpg`, badge: "AI Animation", tags: ["Animation", "Explainer", "AI"] },
    ],
  },
  testimonials: {
    heading: { prefix: "Brands ", serif: "scaling AI content", suffix: "" },
    cards: [
      { quote: "We went from one creative shoot a quarter to a steady stream of variants. Paid testing finally has the volume it needed — and CAC moved.", stat: { value: "8×", label: "Creative volume scale" }, name: "Head of Performance", role: "DTC Brand", variant: "dark" },
      { quote: "The AI cinematic film looked like a real production — and was delivered in days, not weeks. Our brand team signed off without flinching.", name: "Brand Director", role: "Lifestyle", variant: "cream" },
      { quote: "Animated explainer content used to be a 6-week project. We now ship a new one every two weeks — and they actually look on-brand.", name: "Marketing Lead", role: "B2B SaaS", variant: "sky" },
    ],
  },
  faq: {
    heading: { prefix: "Questions about ", serif: "AI-generated content" },
    lede: "Brand discipline, model choices, review process, and the formats we produce in.",
    items: [
      { q: "Will AI content stay on-brand?", a: "Yes. We tune AI pipelines to your brand voice, visual direction, and channel rules — and every shipped asset goes through human review before it runs." },
      { q: "What models and tools do you use?", a: "A mix of leading text-to-video, text-to-image, and AI editing tools — selected per format and project. We optimise for output quality and brand control, not novelty." },
      { q: "Can AI content really compete with traditional creative?", a: "Yes — in the right contexts. UGC AI, animated explainers, and high-variant paid creative are formats where AI content frequently matches or outperforms traditional production." },
      { q: "Do you replace our existing creative team?", a: "No. We supplement creative volume so in-house teams can focus on the highest-impact concepts — not handle every variant manually." },
      { q: "How fast can we go live?", a: "Most engagements ship the first AI content slate within 2–3 weeks, with structured testing live shortly after." },
    ],
  },
  explore: {
    heading: { prefix: "More from ", serif: "Creative Production" },
    lede: "AI content sits alongside visual content and video — see how the practice connects.",
    cards: CREATIVE_EXPLORE_CARDS.filter(
      (c) => c.href !== "/creative-production/ai-generated-content",
    ),
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's scale your ",
    headingSerif: "creative volume.",
    lede: "Tell us where creative volume is the bottleneck. We'll respond within 4 hours with a clear AI content plan grounded in your brand.",
    stats: [
      { value: "5–10×", label: "Volume scale" },
      { value: "60%+", label: "Lower cost" },
      { value: "2–3w", label: "First slate live" },
    ],
  },
};

const WEB_DEVELOPMENT: ServiceDetailsContent = {
  slug: "web-development",
  documentTitle: "Web Development | Quad Solutions",
  metaDescription:
    "Custom websites, e-commerce platforms, and conversion-tuned landing pages — designed for speed, accessibility, and clean performance instrumentation.",
  hero: {
    line1: "Websites built",
    line2Prefix: "for ",
    serif: "real production",
    lede: "We design and build custom websites, e-commerce platforms, and conversion-tuned landing pages — engineered for speed, accessibility, and the analytics instrumentation your growth team actually needs.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: { prefix: "Beautiful sites that ", serif: "don't ship value" },
    prose:
      "Plenty of sites look great in Figma and underperform in production — slow to load, hard to update, broken on mobile, and disconnected from the analytics and growth tooling teams actually run on.",
    listTitle: "Where sites fall short",
    items: [
      "Slow Core Web Vitals and poor mobile performance",
      "CMS that's too rigid for marketing teams to use",
      "E-commerce stores that miss conversion fundamentals",
      "Analytics, tags, and integrations bolted on after launch",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: { prefix: "Sites engineered like ", serif: "real products" },
    prose:
      "We design and build with the same discipline we'd give a product: clean architecture, fast loads, accessible UX, and real instrumentation. Marketing teams get autonomy, growth teams get clean signal, and the site stays maintainable past launch.",
    listTitle: "What we do differently",
    items: [
      "Performance, accessibility, and SEO designed in from day one",
      "CMS chosen for the team that runs it, not the dev team alone",
      "E-commerce architecture grounded in real conversion fundamentals",
      "Analytics and integrations wired before launch, not after",
    ],
  },
  teamHeading: { prefix: "Built by engineers in\n", serif: "modern web" },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    MUSAVER,
    "Web Engineering Lead",
    "Musawir leads our web engineering practice — partnering with brand and growth teams to ship custom sites, stores, and landing pages that perform in production. He focuses on speed, accessibility, and clean instrumentation as core requirements, not afterthoughts.",
    ["Next.js & React", "E-commerce", "Performance"],
  ),
  impact: {
    heading: { prefix: "Sites that ", serif: "earn the launch" },
    body: "We've shipped sites and stores across DTC, B2B, and content brands — improving Core Web Vitals, conversion rates, and the speed in-house teams can iterate post-launch.",
    metrics: [
      { value: "2×", labelLines: ["Faster", "page loads"] },
      { value: "30%+", labelLines: ["Conversion", "lift"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "Web ", serif: "capabilities" },
    lede: "Capabilities across custom builds, e-commerce, and landing pages — engineered for production reality.",
    pillLabel: "capabilities delivered",
    items: paint([
      { n: "01", t: "Custom Website Design & Build", d: "Marketing sites built in modern frameworks (Next.js, etc.) with the CMS your team can actually run on." },
      { n: "02", t: "E-commerce Platforms", d: "Shopify and headless commerce builds engineered for speed, conversion, and clean post-purchase flow." },
      { n: "03", t: "Landing Page Optimisation", d: "Conversion-tuned landing page systems for paid traffic — built for speed, A/B testing, and analytics depth." },
      { n: "04", t: "Performance & Core Web Vitals", d: "Site performance, accessibility, and SEO foundations engineered in — not retrofitted after launch." },
      { n: "05", t: "Analytics & Tagging", d: "GA4, server-side tagging, and product analytics wired in cleanly so growth and product teams have real signal from day one." },
      { n: "06", t: "Post-Launch Support", d: "Ongoing support for performance, content velocity, and integrations as the site evolves with the business." },
    ]),
  },
  process: {
    heading: "How we build",
    lede: "Architecture → design → ship → operate",
    items: [
      { n: "01", t: "Architecture", p: "We choose framework, CMS, and integrations based on the team that'll run the site — not the dev team's preferences." },
      { n: "02", t: "Design", p: "We design with performance, accessibility, and conversion in mind — not just visual ambition." },
      { n: "03", t: "Ship", p: "We build, instrument, and launch with clean QA across performance, accessibility, and analytics." },
      { n: "04", t: "Operate", p: "We support post-launch — content velocity, performance tuning, and new modules as the business needs them." },
    ],
  },
  foundations: { text: "Sites engineered like products. Built to ship value, not just launch.\nLet's build yours." },
  work: {
    heading: { prefix: "Web projects ", serif: "shipped" },
    lede: "Representative web engagements across DTC, B2B, and content brands.",
    cards: [
      { title: "DTC E-commerce Rebuild", sub: "E-commerce · 2024", img: `${WORK}/featured.jpg`, badge: "Shopify", badgeColor: "blue", tags: ["Shopify", "Headless", "Performance"] },
      { title: "B2B Marketing Site Build", sub: "B2B SaaS · 2024", img: `${WORK}/project-0.jpg`, badge: "Next.js", tags: ["Next.js", "CMS", "SEO"] },
      { title: "Conversion Landing Page System", sub: "Paid Traffic · 2024", img: `${WORK}/project-1.jpg`, badge: "Landing Pages", tags: ["A/B Testing", "Analytics", "Speed"] },
    ],
  },
  testimonials: {
    heading: { prefix: "Brands ", serif: "shipping web that performs", suffix: "" },
    cards: [
      { quote: "Our site finally feels like a product. Page loads dropped, conversion went up, and our team can update content without filing a ticket.", stat: { value: "2.3×", label: "Faster page loads" }, name: "Head of E-commerce", role: "DTC Brand", variant: "dark" },
      { quote: "The B2B site finally tells the story right — and it's instrumented properly. We can see exactly what's converting and what isn't.", name: "VP Marketing", role: "B2B SaaS", variant: "cream" },
      { quote: "Landing page testing went from a quarterly project to a weekly cadence. Speed, structure, and analytics all built in.", name: "Director of Growth", role: "Marketplace", variant: "sky" },
    ],
  },
  faq: {
    heading: { prefix: "Questions about ", serif: "web development" },
    lede: "Frameworks, CMS choices, e-commerce platforms, and how we work with in-house engineering.",
    items: [
      { q: "Which frameworks and CMS do you build on?", a: "Primarily Next.js on the marketing side, Shopify and headless commerce for stores, and CMS choices like Sanity, Contentful, or Webflow tuned to the team that'll run the site." },
      { q: "Can you work with our existing engineering team?", a: "Yes. We regularly partner with in-house engineering — owning the marketing site or store while their team focuses on the core product." },
      { q: "How do you handle performance and Core Web Vitals?", a: "Designed in from day one — image strategy, JS budget, font loading, and rendering approach all chosen for performance, not retrofitted." },
      { q: "Do you handle Shopify specifically?", a: "Yes. Shopify Plus, headless Shopify, and Shopify-as-CMS are all in scope. We focus on conversion fundamentals as much as platform mechanics." },
      { q: "What's the typical timeline?", a: "Marketing sites typically run 6–10 weeks, e-commerce 8–14 weeks. Landing page systems can ship faster within an existing site." },
    ],
  },
  explore: {
    heading: { prefix: "More from ", serif: "Digital Products" },
    lede: "Web sits alongside mobile and custom software — see the rest of the digital practice.",
    cards: DIGITAL_EXPLORE_CARDS.filter(
      (c) => c.href !== "/digital-products/web-development",
    ),
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's ship a site ",
    headingSerif: "that earns its launch.",
    lede: "Tell us your site, store, or landing page goals. We'll respond within 4 hours with a clear engineering plan.",
    stats: [
      { value: "2×", label: "Faster page loads" },
      { value: "30%+", label: "Conversion lift" },
      { value: "6–14w", label: "Build timelines" },
    ],
  },
};

const MOBILE_APP_DEVELOPMENT: ServiceDetailsContent = {
  slug: "mobile-app-development",
  documentTitle: "Mobile App Development | Quad Solutions",
  metaDescription:
    "Native and cross-platform iOS and Android apps engineered for real production loads — clean architecture, store-ready, instrumented from day one.",
  hero: {
    line1: "Mobile apps built",
    line2Prefix: "for ",
    serif: "production reality",
    lede: "We design and engineer native and cross-platform iOS and Android apps for real production loads — clean architecture, store-ready submissions, and product analytics instrumented from day one.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: { prefix: "Apps that ", serif: "don't survive launch" },
    prose:
      "Most apps are launched by teams that haven't shipped one before — and the cracks show post-launch. Architecture decisions made early become expensive months later, store rejections drag, analytics get bolted on, and operating the app becomes harder than building it.",
    listTitle: "Where apps stumble",
    items: [
      "Architecture not designed for the second year of the product",
      "Store submission and review handled like an afterthought",
      "Analytics and crash reporting added after launch",
      "Cross-platform decisions made for cost, not maintenance reality",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: { prefix: "Apps engineered to ", serif: "operate, not just launch" },
    prose:
      "We design apps with operating reality in mind — clean architecture, store readiness, instrumentation, and a clear path for the next 12 months of product evolution. Native, cross-platform, or hybrid choices made for the right reasons, not just fastest delivery.",
    listTitle: "What we do differently",
    items: [
      "Architecture chosen for year-two reality, not just MVP",
      "Store submission, review, and update flow handled professionally",
      "Crash reporting, product analytics, and feature flags from day one",
      "Native vs. cross-platform decisions made for maintenance reality",
    ],
  },
  teamHeading: { prefix: "Engineered by specialists in\n", serif: "iOS, Android & cross-platform" },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    MUSAVER,
    "Mobile Engineering Lead",
    "Musawir leads our mobile engineering practice — partnering with founders and product teams to ship apps that operate cleanly past launch. He focuses on architecture, store readiness, and the instrumentation that lets product teams iterate confidently.",
    ["iOS & Android", "React Native", "Mobile Architecture"],
  ),
  impact: {
    heading: { prefix: "Apps that ", serif: "operate cleanly" },
    body: "We've shipped mobile apps across consumer and B2B contexts — improving store ratings, reducing crash rates, and making post-launch iteration feel like product work, not firefighting.",
    metrics: [
      { value: "<1%", labelLines: ["Crash-free", "sessions"] },
      { value: "4.5★+", labelLines: ["Average store", "rating"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "Mobile ", serif: "capabilities" },
    lede: "Capabilities across native, cross-platform, and store-readiness — built for production reality.",
    pillLabel: "capabilities delivered",
    items: paint([
      { n: "01", t: "iOS Applications", d: "Native iOS apps in Swift and SwiftUI — designed for performance, App Store readiness, and clean upgrade paths." },
      { n: "02", t: "Android Applications", d: "Native Android apps in Kotlin and Jetpack Compose — engineered for the device fragmentation reality." },
      { n: "03", t: "Cross-Platform Solutions", d: "React Native and shared-codebase apps where the maintenance economics actually justify it — not by default." },
      { n: "04", t: "App Architecture", d: "Architecture decisions designed for year-two reality — modularity, networking, state, and offline behaviour handled deliberately." },
      { n: "05", t: "Store Submission & Review", d: "App Store and Play Store submission, review handling, and update flow run as a real engineering function." },
      { n: "06", t: "Analytics & Crash Reporting", d: "Product analytics, crash reporting, and feature flags wired in from day one — so post-launch iteration is real." },
    ]),
  },
  process: {
    heading: "How we build",
    lede: "Architecture → design → build → operate",
    items: [
      { n: "01", t: "Architecture", p: "We pick native vs. cross-platform, networking, state, and module strategy based on the second year of the product, not just the launch." },
      { n: "02", t: "Design", p: "We design with mobile UX patterns and accessibility from the start — not desktop layouts shrunk down." },
      { n: "03", t: "Build", p: "We build, instrument, and submit — with crash reporting, analytics, and feature flags wired in before the first review." },
      { n: "04", t: "Operate", p: "We support post-launch operating: store updates, performance tuning, crash triage, and feature evolution." },
    ],
  },
  foundations: { text: "Apps that survive year two.\nLet's engineer yours." },
  work: {
    heading: { prefix: "Mobile projects ", serif: "shipped" },
    lede: "Representative mobile engagements across consumer, B2B, and platform apps.",
    cards: [
      { title: "Consumer Lifestyle App", sub: "Lifestyle · 2024", img: `${WORK}/featured.jpg`, badge: "iOS & Android", badgeColor: "blue", tags: ["iOS", "Android", "Native"] },
      { title: "B2B Companion App", sub: "B2B SaaS · 2024", img: `${WORK}/project-0.jpg`, badge: "Cross-platform", tags: ["React Native", "Auth", "Sync"] },
      { title: "Marketplace Mobile Build", sub: "Marketplace · 2024", img: `${WORK}/project-1.jpg`, badge: "Marketplace", tags: ["Marketplace", "Payments", "Push"] },
    ],
  },
  testimonials: {
    heading: { prefix: "Apps ", serif: "operating cleanly", suffix: "" },
    cards: [
      { quote: "We launched, but more importantly, we kept iterating. Crash rate stayed under 1% from week one and store reviews actually look healthy.", stat: { value: "4.7★", label: "App Store rating" }, name: "Founder", role: "Lifestyle App", variant: "dark" },
      { quote: "The companion app finally exists — and it's stable. Our customers don't even notice it's there, which is the highest compliment for B2B mobile.", name: "VP Product", role: "B2B SaaS", variant: "cream" },
      { quote: "Submission and review used to be a black hole. Now updates ship on a predictable cadence with clean release notes.", name: "Head of Engineering", role: "Marketplace", variant: "sky" },
    ],
  },
  faq: {
    heading: { prefix: "Questions about ", serif: "mobile app development" },
    lede: "Native vs. cross-platform, store submission, post-launch, and team integration.",
    items: [
      { q: "Native or cross-platform?", a: "It depends. We pick based on team economics, performance needs, and the second year of the product — not by default. We'll recommend honestly, even if it means more work for us." },
      { q: "Do you handle store submissions?", a: "Yes. App Store and Play Store submission, review handling, and update cadence are part of every engagement." },
      { q: "Can you work with our existing product team?", a: "Yes. We regularly embed alongside in-house product and engineering teams — owning the mobile build while they focus on the broader product." },
      { q: "What about backend and APIs?", a: "We can build the mobile-specific API layer if needed, or integrate cleanly with existing backends. We treat the mobile app as a real client, not a thin wrapper." },
      { q: "How long does a typical app take?", a: "MVP launches typically run 10–16 weeks depending on scope and integrations. Post-launch iteration runs as ongoing engineering." },
    ],
  },
  explore: {
    heading: { prefix: "More from ", serif: "Digital Products" },
    lede: "Mobile sits alongside web and custom software — see the rest of the digital practice.",
    cards: DIGITAL_EXPLORE_CARDS.filter(
      (c) => c.href !== "/digital-products/mobile-app-development",
    ),
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's engineer an app ",
    headingSerif: "that operates cleanly.",
    lede: "Tell us your platforms, your product, and your team. We'll respond within 4 hours with a clear engineering plan.",
    stats: [
      { value: "<1%", label: "Crash rate" },
      { value: "4.5★+", label: "Store rating" },
      { value: "10–16w", label: "MVP timeline" },
    ],
  },
};

const CUSTOM_SOFTWARE_SOLUTIONS: ServiceDetailsContent = {
  slug: "custom-software-solutions",
  documentTitle: "Custom Software Solutions | Quad Solutions",
  metaDescription:
    "Internal tools, business process software, and scalable digital products tailored to the specific operational shape of your business.",
  hero: {
    line1: "Custom software for",
    line2Prefix: "the shape of ",
    serif: "your business",
    lede: "We design and build internal tools, business process software, and scalable digital products tailored to the operational reality of your business — not adapted around generic SaaS limitations.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: { prefix: "Generic SaaS ", serif: "doesn't fit your shape" },
    prose:
      "Off-the-shelf software solves 80% of the problem and creates 30% of new ones — workarounds, manual reconciliation, and bolt-on tooling. Custom software done well is a fit for the actual operational shape of your business, not a forced approximation.",
    listTitle: "Where SaaS falls short",
    items: [
      "Workarounds and manual reconciliation around tool limits",
      "Multiple tools with overlapping data and broken sync",
      "Process logic that doesn't fit any vendor's model",
      "Internal teams blocked by tools they didn't choose",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: { prefix: "Software shaped to ", serif: "your operations" },
    prose:
      "We design custom software to the actual operational shape of your business — internal tools, process software, and scalable digital products. Built on modern frameworks, deployed cleanly, and instrumented from day one so the team can iterate confidently.",
    listTitle: "What we do differently",
    items: [
      "Software shaped to operations, not the other way around",
      "Modern stack, clean architecture, real instrumentation",
      "Built for the team that operates it, not just launches it",
      "Scalable foundations: from internal MVP to multi-team product",
    ],
  },
  teamHeading: { prefix: "Built by engineers in\n", serif: "custom software & products" },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    MUSAVER,
    "Software Engineering Lead",
    "Musawir leads our custom software practice — partnering with operators and founders to ship internal tools, process software, and scalable digital products. He focuses on clean architecture, deployment discipline, and instrumentation that lets teams iterate confidently.",
    ["Custom Software", "Internal Tools", "Process Engineering"],
  ),
  impact: {
    heading: { prefix: "Software that ", serif: "fits your team" },
    body: "We've shipped custom software across services, marketplaces, and operations — replacing fragile SaaS stitching with clean, owned tools that grow with the business.",
    metrics: [
      { value: "60%+", labelLines: ["Reduced", "manual reconciliation"] },
      { value: "3×", labelLines: ["Faster", "internal cycles"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "Software ", serif: "capabilities" },
    lede: "Capabilities across internal tools, business process software, and scalable digital products.",
    pillLabel: "capabilities delivered",
    items: paint([
      { n: "01", t: "Business Process Software", d: "Custom software shaped to your specific business processes — replacing the fragile chain of tools and spreadsheets." },
      { n: "02", t: "Internal Tools & Admin Panels", d: "Internal tools, dashboards, and admin panels designed for the team that runs them daily." },
      { n: "03", t: "Scalable Digital Product Development", d: "Custom digital products built on modern stacks — designed to scale from internal MVP to multi-team product." },
      { n: "04", t: "API & Integration Architecture", d: "API design and integration work to connect your custom software to the rest of your stack — cleanly and reliably." },
      { n: "05", t: "Deployment & DevOps", d: "Deployment, CI/CD, and observability set up from day one — so launching a new feature doesn't need three meetings." },
      { n: "06", t: "Technology-Driven Business Solutions", d: "Custom builds for specific operational problems — process automation, data tooling, internal apps, and more." },
    ]),
  },
  process: {
    heading: "How we build",
    lede: "Discovery → architect → ship → operate",
    items: [
      { n: "01", t: "Discovery", p: "We map the actual operational shape of the problem — process, data, and people — before designing the solution." },
      { n: "02", t: "Architect", p: "We pick stack, architecture, and integrations based on the second year of the product, not just the launch." },
      { n: "03", t: "Ship", p: "We build, instrument, and deploy — with QA, observability, and clean release flow from day one." },
      { n: "04", t: "Operate", p: "We support post-launch — adding features, fixing edges, and evolving the system as the business changes." },
    ],
  },
  foundations: { text: "Software built for the shape of your business.\nLet's design yours." },
  work: {
    heading: { prefix: "Software projects ", serif: "shipped" },
    lede: "Representative custom software engagements across services, ops, and product.",
    cards: [
      { title: "Internal Operations Platform", sub: "Services · 2024", img: `${WORK}/featured.jpg`, badge: "Internal Tools", badgeColor: "blue", tags: ["Internal Tools", "Process", "Dashboards"] },
      { title: "Custom Marketplace Backend", sub: "Marketplace · 2024", img: `${WORK}/project-0.jpg`, badge: "Custom Software", tags: ["Marketplace", "Payments", "API"] },
      { title: "Process Automation Software", sub: "Operations · 2023", img: `${WORK}/project-1.jpg`, badge: "Process", tags: ["Workflow", "Automation", "Reporting"] },
    ],
  },
  testimonials: {
    heading: { prefix: "Teams ", serif: "running on custom software", suffix: "" },
    cards: [
      { quote: "We replaced four SaaS tools and a Notion mess with one platform shaped to how we actually work. Manual reconciliation just disappeared.", stat: { value: "60%+", label: "Less manual reconciliation" }, name: "Operations Lead", role: "Services Firm", variant: "dark" },
      { quote: "The custom backend let us launch a real marketplace — not a Stripe-and-spreadsheet duct tape solution. It actually scales.", name: "Founder", role: "Marketplace", variant: "cream" },
      { quote: "Internal cycles went from days to hours. Our team finally has tools shaped to them, not generic dashboards we adapted around.", name: "COO", role: "Operations Co.", variant: "sky" },
    ],
  },
  faq: {
    heading: { prefix: "Questions about ", serif: "custom software" },
    lede: "When custom is the right call, our stack choices, and how we handle ongoing operation.",
    items: [
      { q: "When is custom software actually the right call?", a: "When SaaS workarounds outweigh the SaaS savings — internal tools, process software, or product capabilities that don't have a clean off-the-shelf fit. We'll tell you honestly when SaaS is still the right answer." },
      { q: "What stacks do you build on?", a: "Primarily Next.js, TypeScript, modern Postgres-based backends, and cloud deployments (Vercel, AWS, GCP). Stack chosen for the second year, not just the launch." },
      { q: "Can you replace existing SaaS tools?", a: "Yes — and we frequently do. We map current tooling, identify what genuinely needs to be custom, and migrate cleanly without breaking what already works." },
      { q: "Do you handle ongoing maintenance?", a: "Yes. Custom software is an ongoing engagement — we support deployment, observability, feature evolution, and team handover as needed." },
      { q: "How does this work alongside in-house engineering?", a: "We regularly embed with in-house engineering — owning a specific surface or accelerating delivery — while they focus on the core product or platform." },
    ],
  },
  explore: {
    heading: { prefix: "More from ", serif: "Digital Products" },
    lede: "Custom software is strongest alongside web, mobile, and AI — see the rest of the practice.",
    cards: DIGITAL_EXPLORE_CARDS.filter(
      (c) => c.href !== "/digital-products/custom-software-solutions",
    ),
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's build software ",
    headingSerif: "shaped to your team.",
    lede: "Tell us where your tools are breaking and where custom would actually pay off. We'll respond within 4 hours with a clear engineering plan.",
    stats: [
      { value: "60%+", label: "Less manual work" },
      { value: "3×", label: "Faster cycles" },
      { value: "8–16w", label: "First release" },
    ],
  },
};

const MARKETING: ServiceDetailsContent = {
  slug: "growth-marketing",
  documentTitle: "Growth Marketing | Quad Solutions",
  metaDescription:
    "Paid, organic, and lifecycle growth programs engineered to acquire customers profitably and turn marketing into a measurable revenue system.",
  hero: {
    line1: "Growth marketing",
    line2Prefix: "engineered for ",
    serif: "real revenue",
    lede: "We design and run paid, organic, and optimization programs as one connected growth system — built around your unit economics and tied directly to revenue, not vanity metrics.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: { prefix: "Marketing that ", serif: "doesn't compound" },
    prose:
      "Most growth programs are a stack of disconnected tactics: paid running on autopilot, organic produced in random cadences, and optimization happening only at quarterly reviews. Spend rises, learnings disappear, and the program stops compounding.",
    listTitle: "Where growth stalls",
    items: [
      "Paid, organic, and lifecycle programs that don't talk to each other",
      "Creative testing that's slow and infrequent",
      "Funnel data that gets reviewed but doesn't drive decisions",
      "Reporting framed for leadership decks, not operating choices",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: { prefix: "One ", serif: "connected growth system" },
    prose:
      "We treat paid, organic, and optimization as a single connected program: paid scales the channels that work, organic builds the durable demand that keeps blended CAC down, and optimization compounds the learnings into the next cycle. Reporting is wired to revenue, not vanity.",
    listTitle: "What we do differently",
    items: [
      "Paid, organic, and optimization run as one connected system",
      "Creative testing and audience structure rebuilt around real signal",
      "Funnel diagnostics turned into weekly decisions",
      "Reporting tied to revenue, payback, and incrementality",
    ],
  },
  teamHeading: { prefix: "Built by operators in\n", serif: "growth & performance" },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    MUSTAFA,
    "Growth Marketing Lead",
    "Musawir leads our growth marketing practice — partnering with founders and growth leaders to scale paid acquisition, build durable organic demand, and turn optimization into a weekly habit. He focuses on connected systems, not channel-by-channel tactics.",
    ["Performance Media", "Organic Strategy", "Funnel Analytics"],
  ),
  impact: {
    heading: { prefix: "Marketing that ", serif: "earns its scale" },
    body: "We've scaled growth programs across DTC, B2B, and lead generation — taking accounts from manual launches to structured systems that compound creative learnings into lower CAC, higher payback, and durable organic demand.",
    metrics: [
      { value: "2–3×", labelLines: ["ROAS", "improvement"] },
      { value: "40%+", labelLines: ["Lower", "blended CAC"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "Growth ", serif: "capabilities" },
    lede: "Capabilities deployed across paid, organic, and optimization — built to compound into one growth system.",
    pillLabel: "capabilities delivered",
    items: paint([
      { n: "01", t: "Paid Advertising", d: "Performance media across Meta, Google, TikTok, LinkedIn, and Pinterest — built around real unit economics." },
      { n: "02", t: "Search & Content SEO", d: "Topic clusters, technical SEO, and content programs that compound branded search and qualified traffic." },
      { n: "03", t: "Social & Audience Building", d: "Platform-native social programs that build audience equity — not just maintain a posting cadence." },
      { n: "04", t: "Lead Generation Funnels", d: "Lead funnels designed for qualification, not just capture — built and iterated as experiments." },
      { n: "05", t: "Audience & Funnel Analytics", d: "Targeting and funnel diagnostics tied to weekly decisions — scale, retire, reframe, or test." },
      { n: "06", t: "Performance Reporting", d: "Cross-channel reporting tied to revenue, payback, and incrementality — not just CTR and impressions." },
    ]),
  },
  process: {
    heading: "How we work",
    lede: "Audit → architect → ship → compound — wired into your funnel",
    items: [
      { n: "01", t: "Audit", p: "We review historical paid, organic, and funnel data to find where the program leaks the most leverage." },
      { n: "02", t: "Architect", p: "We rebuild channel mix, account structure, and content cadence around the buying journey — not channel defaults." },
      { n: "03", t: "Ship", p: "We launch with a structured creative slate, content calendar, and decision cadence so every cycle generates compounding learnings." },
      { n: "04", t: "Compound", p: "We monitor, refine, and extend the system — feeding insights back into creative, content, and funnel teams every week." },
    ],
  },
  foundations: { text: "Marketing that pays back. Built around your real economics.\nLet's scale your growth system." },
  work: {
    heading: { prefix: "Growth programs ", serif: "in production" },
    lede: "Real growth programs across DTC, B2B, and lead generation.",
    cards: [
      { title: "DTC Performance Growth Program", sub: "E-commerce · 2024", img: `${WORK}/featured.jpg`, badge: "Performance", badgeColor: "blue", tags: ["Meta", "Google", "Creative"] },
      { title: "B2B SaaS Pipeline Engine", sub: "B2B SaaS · 2024", img: `${WORK}/project-0.jpg`, badge: "Pipeline", tags: ["LinkedIn", "ABM", "SQLs"] },
      { title: "Organic & Paid Cohesion", sub: "Lifestyle · 2024", img: `${WORK}/project-1.jpg`, badge: "Connected", tags: ["SEO", "Social", "Paid"] },
    ],
  },
  testimonials: {
    heading: { prefix: "Why teams ", serif: "choose us", suffix: "\nfor growth" },
    cards: [
      { quote: "We doubled spend without breaking payback. The program finally feels like a system — not a bunch of campaigns.", stat: { value: "2.4×", label: "ROAS lift in 90 days" }, name: "Head of Growth", role: "DTC Brand", variant: "dark" },
      { quote: "Organic and paid finally work together. Branded search lifted, blended CAC dropped, and our growth meeting is about decisions, not reports.", name: "VP Marketing", role: "B2B SaaS", variant: "cream" },
      { quote: "Creative testing went from quarterly to weekly. Winners get scaled in days. The whole program compounds now.", name: "Performance Lead", role: "Lifestyle Brand", variant: "sky" },
    ],
  },
  faq: {
    heading: { prefix: "Simple answers to ", serif: "frequent questions" },
    lede: "Channel mix, organic timelines, attribution, and how we plug into existing growth teams.",
    items: [
      { q: "Do you run paid and organic together?", a: "Yes. They're treated as one connected program — content feeds search, social amplifies content, and paid scales what's already proving demand." },
      { q: "Which channels do you run?", a: "Meta, Google, TikTok, LinkedIn, Pinterest on paid; SEO, social, content, and lifecycle on organic. We pick mix based on your ICP, not channel defaults." },
      { q: "How do you handle attribution?", a: "We combine in-platform reporting with funnel analytics, holdouts where possible, and clean post-purchase signals — so you don't over-credit any single channel." },
      { q: "How long until organic shows up?", a: "Most programs see meaningful traffic and brand search lift in 3–6 months, with compounding gains in months 6–12. Paid generates signal much faster." },
      { q: "Can you embed with our in-house team?", a: "Yes. We regularly partner with in-house growth, content, and brand teams — providing strategy, production, or full channel ownership as needed." },
      { q: "How fast can we go live?", a: "Most engagements have structured paid live in 1–2 weeks and organic foundations in 3–4 weeks. We prefer shipping iterations over long invisible projects." },
    ],
  },
  explore: {
    heading: { prefix: "Explore our ", serif: "growth disciplines" },
    lede: "Dive into each layer of our growth practice — or see how they connect into one operating system.",
    cards: MARKETING_EXPLORE_CARDS,
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's build a growth ",
    headingSerif: "system that compounds.",
    lede: "Tell us your channels, current spend, and where you're stuck. We'll respond within 4 hours with a clear growth plan grounded in your economics.",
    stats: [
      { value: "2–3×", label: "ROAS improvement" },
      { value: "40%+", label: "Lower blended CAC" },
      { value: "1–2w", label: "First channel live" },
    ],
  },
};

const CREATIVE: ServiceDetailsContent = {
  slug: "creative-production",
  documentTitle: "Creative Production | Quad Solutions",
  metaDescription:
    "Visual storytelling, video, and AI-accelerated content engineered to feed paid and organic channels with creative your audience actually stops to watch.",
  hero: {
    line1: "Creative production",
    line2Prefix: "built for ",
    serif: "the modern feed",
    lede: "We produce photography, video, identity, and AI-accelerated content engineered for the channels where your customers actually meet you — built for the scroll, not the awards reel.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: { prefix: "Beautiful creative ", serif: "that doesn't perform" },
    prose:
      "Most brands invest in creative that wins on craft and loses on the feed. Photography looks like a catalogue, video is paced for film, and identity stays trapped in a brand book. Audiences scroll past, paid creative fatigues fast, and production cost scales 1:1 with output.",
    listTitle: "Where creative falls short",
    items: [
      "First frames and hero images that don't earn the scroll",
      "Production cadence too slow to feed paid testing",
      "Identity systems that don't translate to digital surfaces",
      "Limited variant production for paid creative testing",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: { prefix: "Creative engineered for ", serif: "platform reality" },
    prose:
      "We design and produce visuals, video, and AI content with platform behaviour at the centre — hooks, pacing, sound, and ratios decided up front. Production runs at the volume paid channels reward, and identity systems are built for the digital surfaces customers actually live in.",
    listTitle: "What we do differently",
    items: [
      "Creative briefed from platform reality, not generic brief templates",
      "Production scaled to feed real paid testing programs",
      "Identity systems designed for digital surfaces first",
      "AI-accelerated content for niche formats and creative volume",
    ],
  },
  teamHeading: { prefix: "Crafted by specialists in\n", serif: "performance creative" },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    YOUSAF,
    "Creative Production Lead",
    "Musawir leads our creative production practice — partnering with brand and growth teams to produce visuals, video, and AI content engineered for paid performance and organic reach. He focuses on platform-aware production and creative volume that compounds.",
    ["Visual Direction", "Video Production", "AI Content"],
  ),
  impact: {
    heading: { prefix: "Creative that ", serif: "earns its budget" },
    body: "We've produced creative programs across DTC, lifestyle, and B2B that lift paid creative performance, increase organic reach, and reduce creative fatigue cycles — without scaling production budget linearly.",
    metrics: [
      { value: "2–3×", labelLines: ["Creative", "performance lift"] },
      { value: "5–10×", labelLines: ["Production", "volume scale"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "Creative ", serif: "capabilities" },
    lede: "Production capabilities across visuals, video, and AI content — built for the channels where your customers live.",
    pillLabel: "capabilities delivered",
    items: paint([
      { n: "01", t: "Product & Lifestyle Photography", d: "Studio and lifestyle photography produced for feeds, ads, and product pages — engineered for conversion and recognition." },
      { n: "02", t: "Brand Identity Systems", d: "Logo, type, colour, and visual systems designed for digital-first reality, not just printed brand books." },
      { n: "03", t: "Video & Post-Production", d: "Commercial-grade video with editing, colour, and sound handled end-to-end — built for paid performance and organic reach." },
      { n: "04", t: "AI-Generated Content", d: "UGC-style, cinematic, and animated content produced with AI to scale creative volume across channels." },
      { n: "05", t: "Variant Production at Scale", d: "Structured creative variant production for paid testing — hooks, edits, and CTAs engineered to learn fast." },
      { n: "06", t: "Asset Systems & Templates", d: "Editable templates and asset libraries your in-house team can run with — without breaking the brand." },
    ]),
  },
  process: {
    heading: "How we work",
    lede: "Strategy → direction → produce → systemise",
    items: [
      { n: "01", t: "Strategy", p: "We map where the creative needs to perform — platforms, ratios, audience expectations — before any production starts." },
      { n: "02", t: "Direction", p: "We define art direction, video direction, and identity decisions in a clear, opinionated brief." },
      { n: "03", t: "Produce", p: "We produce visuals, video, and AI content at the volume the channels actually reward." },
      { n: "04", t: "Systemise", p: "We package output into reusable systems and templates so the brand stays consistent as it scales." },
    ],
  },
  foundations: { text: "Creative that earns the scroll. Engineered for performance.\nLet's produce yours." },
  work: {
    heading: { prefix: "Creative programs ", serif: "in production" },
    lede: "Representative creative engagements across DTC, lifestyle, and B2B brands.",
    cards: [
      { title: "DTC Photography & Identity Refresh", sub: "E-commerce · 2024", img: `${WORK}/featured.jpg`, badge: "Visual", badgeColor: "blue", tags: ["Photo", "Identity", "Templates"] },
      { title: "Performance Video Slate", sub: "DTC · 2024", img: `${WORK}/project-0.jpg`, badge: "Video", tags: ["Meta", "TikTok", "Variants"] },
      { title: "AI Content System", sub: "Lifestyle · 2024", img: `${WORK}/project-1.jpg`, badge: "AI Creative", tags: ["UGC AI", "Cinematic", "Animation"] },
    ],
  },
  testimonials: {
    heading: { prefix: "Brands ", serif: "winning the scroll", suffix: "" },
    cards: [
      { quote: "Our paid creative performance jumped overnight. The new system didn't just look better — it converted noticeably better in every channel.", stat: { value: "2.1×", label: "Creative ROAS lift" }, name: "Head of Brand", role: "DTC Brand", variant: "dark" },
      { quote: "Production cadence finally matches our testing cadence. Paid no longer waits on creative — creative leads it.", name: "Performance Lead", role: "Lifestyle", variant: "cream" },
      { quote: "AI content gave us the volume traditional production couldn't. Brand discipline stayed intact, and our team trusts what ships.", name: "VP Marketing", role: "B2B SaaS", variant: "sky" },
    ],
  },
  faq: {
    heading: { prefix: "Simple answers to ", serif: "frequent questions" },
    lede: "Production scope, identity work, AI content, and how we plug into in-house creative teams.",
    items: [
      { q: "Do you handle photography, video, and AI content all together?", a: "Yes. They're treated as one connected creative practice — produced for the channels where they'll actually run, with shared brand discipline." },
      { q: "Will AI content stay on-brand?", a: "Yes. We tune AI pipelines to your brand voice and visual direction, and every shipped asset goes through human review before it runs." },
      { q: "Can you work with our in-house brand or creative team?", a: "Yes. We regularly partner with in-house teams — providing direction, production capacity, or end-to-end identity work as needed." },
      { q: "Do you produce at variant-testing volume?", a: "Yes. Structured variant production is core to our work — hooks, edits, and ratios engineered around clear paid testing hypotheses." },
      { q: "How fast can we ship the first creative?", a: "Most engagements ship the first slate within 2–3 weeks. Identity work runs longer (4–8 weeks) but can ship in stages." },
    ],
  },
  explore: {
    heading: { prefix: "Explore our ", serif: "creative disciplines" },
    lede: "Dive into each layer of our creative practice — or see how they connect into one production system.",
    cards: CREATIVE_EXPLORE_CARDS,
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's produce creative ",
    headingSerif: "that earns the scroll.",
    lede: "Tell us where your brand needs to show up and how it needs to perform. We'll respond within 4 hours with a clear creative plan.",
    stats: [
      { value: "2–3×", label: "Creative performance" },
      { value: "5–10×", label: "Volume scale" },
      { value: "2–3w", label: "First slate live" },
    ],
  },
};

const DIGITAL: ServiceDetailsContent = {
  slug: "digital-products",
  documentTitle: "Digital Products | Quad Solutions",
  metaDescription:
    "Custom websites, e-commerce, mobile apps, and software shaped to the operational reality of your business — engineered for production, not just launch.",
  hero: {
    line1: "Digital products",
    line2Prefix: "engineered for ",
    serif: "production reality",
    lede: "We design and build custom websites, e-commerce platforms, mobile apps, and software shaped to the operational reality of your business — engineered to operate cleanly past launch, not just ship.",
    primary: { label: "Start a Project", href: "/contact" },
    secondary: { label: "View Work", href: "/case-studies" },
  },
  challenge: {
    kicker: "The Challenge",
    heading: { prefix: "Software that ", serif: "doesn't survive year two" },
    prose:
      "Most digital products are launched by teams that haven't shipped them before. Architecture decisions made early become expensive months later, performance regresses silently, and operating the product becomes harder than building it. Generic SaaS solves 80% of the problem and creates 30% of new ones.",
    listTitle: "Where digital products stumble",
    items: [
      "Architecture not designed for the second year of the product",
      "Performance, accessibility, and SEO retrofitted after launch",
      "SaaS workarounds and manual reconciliation around tool limits",
      "Mobile and web treated as silos instead of one product surface",
    ],
  },
  approach: {
    kicker: "Our Approach",
    heading: { prefix: "Products engineered to ", serif: "operate, not just launch" },
    prose:
      "We design and build with the same discipline we'd give any real product: clean architecture, performance and accessibility from day one, real instrumentation, and a clear path for the next 12 months of evolution. Web, mobile, and custom software all built as one connected digital surface.",
    listTitle: "What we do differently",
    items: [
      "Performance, accessibility, and SEO designed in from day one",
      "Architecture chosen for year-two reality, not just MVP launch",
      "Web, mobile, and software as one connected product surface",
      "Analytics, observability, and integrations wired before launch",
    ],
  },
  teamHeading: { prefix: "Built by engineers in\n", serif: "modern web, mobile & software" },
  specialistHeading: SPECIALIST_HEADING,
  specialist: specialist(
    MUSAVER,
    "Digital Products Lead",
    "Musawir leads our digital products practice — partnering with founders and product teams to ship sites, apps, and software that operate cleanly past launch. He focuses on architecture, performance, and the instrumentation that lets product teams iterate confidently.",
    ["Web Engineering", "Mobile Architecture", "Custom Software"],
  ),
  impact: {
    heading: { prefix: "Products that ", serif: "operate cleanly" },
    body: "We've shipped digital products across DTC, B2B, and platform contexts — improving performance, conversion, store ratings, and the speed in-house teams can iterate post-launch.",
    metrics: [
      { value: "2×", labelLines: ["Faster", "page loads"] },
      { value: "<1%", labelLines: ["Mobile crash", "rate"] },
    ],
    link: { label: "Explore Our Work", href: "/case-studies" },
  },
  deliverables: {
    heading: { prefix: "Digital ", serif: "capabilities" },
    lede: "Capabilities across web, mobile, and custom software — built to operate cleanly past launch.",
    pillLabel: "capabilities delivered",
    items: paint([
      { n: "01", t: "Custom Websites", d: "Marketing sites built in modern frameworks (Next.js, etc.) with the CMS your team can actually run on." },
      { n: "02", t: "E-commerce Platforms", d: "Shopify and headless commerce builds engineered for speed, conversion, and clean post-purchase flow." },
      { n: "03", t: "Landing Page Systems", d: "Conversion-tuned landing page systems for paid traffic — built for speed, A/B testing, and analytics depth." },
      { n: "04", t: "Mobile Applications", d: "Native and cross-platform iOS/Android apps engineered for production — with store readiness and crash reporting from day one." },
      { n: "05", t: "Custom Software", d: "Internal tools, business process software, and scalable digital products tailored to the operational reality of your business." },
      { n: "06", t: "Performance & Observability", d: "Core Web Vitals, accessibility, analytics, and crash reporting wired in cleanly — not retrofitted after launch." },
    ]),
  },
  process: {
    heading: "How we build",
    lede: "Architecture → design → ship → operate",
    items: [
      { n: "01", t: "Architecture", p: "We pick stack, framework, and integrations based on the second year of the product, not just the launch." },
      { n: "02", t: "Design", p: "We design with performance, accessibility, and conversion in mind — not just visual ambition." },
      { n: "03", t: "Ship", p: "We build, instrument, and launch with clean QA across performance, accessibility, and analytics." },
      { n: "04", t: "Operate", p: "We support post-launch — content velocity, performance tuning, and feature evolution as the business needs them." },
    ],
  },
  foundations: { text: "Digital products engineered to ship value, not just launch.\nLet's build yours." },
  work: {
    heading: { prefix: "Digital products ", serif: "in production" },
    lede: "Representative engagements across web, mobile, and custom software.",
    cards: [
      { title: "DTC E-commerce Rebuild", sub: "E-commerce · 2024", img: `${WORK}/featured.jpg`, badge: "Web", badgeColor: "blue", tags: ["Shopify", "Headless", "Performance"] },
      { title: "Consumer Mobile App", sub: "Lifestyle · 2024", img: `${WORK}/project-0.jpg`, badge: "Mobile", tags: ["iOS", "Android", "Native"] },
      { title: "Internal Operations Platform", sub: "Services · 2024", img: `${WORK}/project-1.jpg`, badge: "Software", tags: ["Internal", "Process", "Dashboards"] },
    ],
  },
  testimonials: {
    heading: { prefix: "Teams ", serif: "shipping digital products", suffix: "\nthat operate cleanly" },
    cards: [
      { quote: "Our site finally feels like a product. Page loads dropped, conversion went up, and our team can update content without filing a ticket.", stat: { value: "2.3×", label: "Faster page loads" }, name: "Head of E-commerce", role: "DTC Brand", variant: "dark" },
      { quote: "We launched the app, but more importantly, we kept iterating. Crash rate stayed under 1% from week one and store reviews actually look healthy.", name: "Founder", role: "Lifestyle App", variant: "cream" },
      { quote: "We replaced four SaaS tools and a Notion mess with one platform shaped to how we actually work. Manual reconciliation just disappeared.", name: "Operations Lead", role: "Services Firm", variant: "sky" },
    ],
  },
  faq: {
    heading: { prefix: "Simple answers to ", serif: "frequent questions" },
    lede: "Frameworks, platforms, mobile vs. web choices, and how we work with in-house engineering.",
    items: [
      { q: "Which frameworks do you build on?", a: "Primarily Next.js on the web, native and React Native on mobile, and modern Postgres-based backends for custom software. Stack chosen for the second year, not just the launch." },
      { q: "Native or cross-platform for mobile?", a: "It depends. We pick based on team economics, performance needs, and the second year of the product — not by default. We'll recommend honestly." },
      { q: "Can you work with our existing engineering team?", a: "Yes. We regularly partner with in-house engineering — owning a specific surface or accelerating delivery while their team focuses on the core product." },
      { q: "Do you handle Shopify and e-commerce?", a: "Yes. Shopify Plus, headless Shopify, and Shopify-as-CMS are all in scope. We focus on conversion fundamentals as much as platform mechanics." },
      { q: "When is custom software the right call?", a: "When SaaS workarounds outweigh the SaaS savings — internal tools, process software, or product capabilities without a clean off-the-shelf fit. We'll tell you honestly when SaaS is still the right answer." },
      { q: "What's the typical timeline?", a: "Marketing sites 6–10 weeks, e-commerce 8–14 weeks, mobile MVP 10–16 weeks, custom software 8–16 weeks. Post-launch iteration runs as ongoing engineering." },
    ],
  },
  explore: {
    heading: { prefix: "Explore our ", serif: "digital disciplines" },
    lede: "Dive into each layer of our digital products practice — or see how they connect into one product surface.",
    cards: DIGITAL_EXPLORE_CARDS,
  },
  finalCta: {
    kicker: "Start a project",
    headingSans: "Let's ship digital products ",
    headingSerif: "that earn their launch.",
    lede: "Tell us your product, your platforms, and your team. We'll respond within 4 hours with a clear engineering plan.",
    stats: [
      { value: "2×", label: "Faster page loads" },
      { value: "<1%", label: "Mobile crash rate" },
      { value: "6–16w", label: "First release" },
    ],
  },
};

const CONTENT_MAP: Record<string, ServiceDetailsContent> = {
  "brand-strategy": BRAND_STRATEGY,
  "ai-automation": AI,
  "growth-marketing": MARKETING,
  "creative-production": CREATIVE,
  "digital-products": DIGITAL,
  "intelligent-automation": INTELLIGENT_AUTOMATION,
  "ai-communication-tools": AI_COMMUNICATION,
  "advanced-ai-systems": ADVANCED_AI,
  "paid-advertising": PAID_ADVERTISING,
  "organic-marketing": ORGANIC_MARKETING,
  "strategic-optimization": STRATEGIC_OPTIMIZATION,
  "visual-content-creation": VISUAL_CONTENT_CREATION,
  "video-post-production": VIDEO_POST_PRODUCTION,
  "ai-generated-content": AI_GENERATED_CONTENT,
  "web-development": WEB_DEVELOPMENT,
  "mobile-app-development": MOBILE_APP_DEVELOPMENT,
  "custom-software-solutions": CUSTOM_SOFTWARE_SOLUTIONS,
};

export function getServiceDetailsContent(
  slug: string | null | undefined,
): ServiceDetailsContent {
  const key = (slug ?? DEFAULT_SLUG).toLowerCase().trim();
  return CONTENT_MAP[key] ?? CONTENT_MAP[DEFAULT_SLUG];
}
