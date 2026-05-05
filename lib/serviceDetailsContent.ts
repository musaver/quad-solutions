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

function specialist(
  role: string,
  bio: string,
  tags: [string, string, string],
): ServiceSpecialist {
  return {
    name: "Musawir",
    role,
    image: "/assets/figma-service-details/team-0.jpg",
    statusLabel: "Available for new projects",
    bio,
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
    href: "/service-details/intelligent-automation",
  },
  {
    tag: "AI Communication Tools",
    tagBg: "rgba(255,175,104,0.18)",
    tagColor: "#ea580c",
    cardBg: "rgba(255,175,104,0.06)",
    title: "AI Communication Tools",
    desc: "AI-assisted support, chat, and response systems that classify, draft, route, and resolve conversations faster — with human-quality context.",
    chips: ["AI Support", "Chat Assistants", "Response Drafting"],
    href: "/service-details/ai-communication-tools",
  },
  {
    tag: "Advanced AI Systems",
    tagBg: "rgba(112,181,255,0.18)",
    tagColor: "#2563eb",
    cardBg: "rgba(112,181,255,0.06)",
    title: "Advanced AI Systems",
    desc: "Autonomous agents, AI-driven insights, and custom integrations that embed intelligence into the workflows where your team spends the most time.",
    chips: ["AI Agents", "Data Insights", "Custom Integrations"],
    href: "/service-details/advanced-ai-systems",
  },
  {
    tag: "Growth Marketing",
    tagBg: "rgba(121,212,94,0.18)",
    tagColor: "#16a34a",
    cardBg: "rgba(121,212,94,0.05)",
    title: "Growth Marketing",
    desc: "Paid, organic, and lifecycle growth programs engineered to convert — wired directly into the automation layer so every signal becomes action.",
    chips: ["Paid Ads", "SEO & Content", "Lifecycle"],
    href: "/service-details?service=marketing",
  },
];

const AI: ServiceDetailsContent = {
  slug: "ai",
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
      (c) => c.href !== "/service-details/intelligent-automation",
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
      (c) => c.href !== "/service-details/ai-communication-tools",
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
      (c) => c.href !== "/service-details/advanced-ai-systems",
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

const CONTENT_MAP: Record<string, ServiceDetailsContent> = {
  "brand-strategy": BRAND_STRATEGY,
  ai: AI,
  "intelligent-automation": INTELLIGENT_AUTOMATION,
  "ai-communication-tools": AI_COMMUNICATION,
  "advanced-ai-systems": ADVANCED_AI,
};

export function getServiceDetailsContent(
  slug: string | null | undefined,
): ServiceDetailsContent {
  const key = (slug ?? DEFAULT_SLUG).toLowerCase().trim();
  return CONTENT_MAP[key] ?? CONTENT_MAP[DEFAULT_SLUG];
}
