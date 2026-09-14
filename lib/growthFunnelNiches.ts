/**
 * Growth Funnel niche landing pages.
 *
 * The main `/growth-funnel` page is deliberately industry-neutral; each entry
 * here powers one tailored variant at `/growth-funnel/<slug>`. Pages are
 * statically generated from this list (see `app/growth-funnel/[niche]/page.tsx`),
 * so adding a niche means appending one object — no new route files.
 */

export type NicheStat = {
  value: string;
  label: string;
};

export type NicheFeature = {
  emoji: string;
  title: string;
  body: string;
};

export type NicheStep = {
  title: string;
  body: string;
};

export type NicheTestimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export type NicheFunnel = {
  slug: string;
  /** Full label used in cards, breadcrumbs and headings. */
  name: string;
  /** Emoji shown on the animated card and in the niche hero badge. */
  icon: string;
  /** Card gradient — `[from, to]` hex pair. */
  accent: [string, string];
  /** One-line pitch on the animated card. */
  tagline: string;
  /** Three short chips on the animated card. */
  cardPoints: string[];
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroTitle: string;
  /** Highlighted (blue) trailing words of the hero title. */
  heroHighlight: string;
  heroSub: string;
  /** What the system does — capability facts, shown under the hero. */
  stats: NicheStat[];
  /** The day-to-day problems this niche recognises. */
  problems: string[];
  /** What the funnel puts in place instead. */
  solutions: string[];
  features: NicheFeature[];
  steps: NicheStep[];
  /** Sub-segments served, rendered as chips. */
  specialties: string[];
  testimonial: NicheTestimonial;
};

export const NICHE_FUNNELS: NicheFunnel[] = [
  {
    slug: "us-home-builders",
    name: "US Home Builders",
    icon: "🏗️",
    accent: ["#205cff", "#4f9bff"],
    tagline:
      "Turn plan-browsers into signed contracts with follow-up that keeps working through a nine-month sales cycle.",
    cardPoints: ["Lot & plan enquiries", "Long-cycle nurture", "Design centre bookings"],
    metaTitle: "Growth Funnel for US Home Builders — QUAD Solutions",
    metaDescription:
      "A done-for-you sales and marketing system for US home builders: capture lot and plan enquiries, nurture buyers through a long sales cycle, and fill your design centre calendar automatically.",
    heroKicker: "Growth Funnel for US Home Builders",
    heroTitle: "More Signed Builds,",
    heroHighlight: "Less Chasing",
    heroSub:
      "Capture every plan, lot and community enquiry, follow up automatically for as long as it takes, and walk into a design centre calendar that books itself.",
    stats: [
      { value: "< 60 sec", label: "First reply to a new enquiry" },
      { value: "9+ months", label: "Automated nurture runway" },
      { value: "1 inbox", label: "Web, Meta, Google & portal leads" },
    ],
    problems: [
      "Plan enquiries sit in a shared inbox until the buyer picks another builder",
      "Reps give up on a lead months before the buyer is actually ready",
      "Leads scattered across your site, listing portals, Meta ads and walk-ins",
      "No idea which community or campaign produced the signed contract",
    ],
    solutions: [
      "Every enquiry answered by text and email within a minute, day or night",
      "Multi-month drip that keeps you front of mind until they're ready to build",
      "One inbox for website, portal, Meta, Google and phone enquiries",
      "Source tracking from first click through to signed contract",
    ],
    features: [
      {
        emoji: "🏡",
        title: "Community & Plan Landing Pages",
        body: "A high-converting page for every community and floor plan, with a capture form wired straight into your pipeline — no developer needed to launch the next release.",
      },
      {
        emoji: "⚡",
        title: "Instant Enquiry Response",
        body: "The moment someone asks about a lot, plan or price sheet they get a personal text and email. Speed to lead is the single biggest predictor of who wins the build.",
      },
      {
        emoji: "🗓️",
        title: "Design Centre & Model Home Booking",
        body: "Prospects book their own model home tour or design consultation from a live calendar, with automatic reminders so they actually show up.",
      },
      {
        emoji: "🧭",
        title: "Long-Cycle Buyer Nurture",
        body: "Home buyers take months to commit. Automated sequences deliver plan updates, financing tips and community news until the day they're ready to sign.",
      },
      {
        emoji: "📊",
        title: "Pipeline By Community",
        body: "See exactly how many enquiries, appointments and contracts each community and campaign produced, so you spend the next ad dollar where it works.",
      },
      {
        emoji: "⭐",
        title: "Reviews From Happy Homeowners",
        body: "Automatically request a Google review at closing and at the one-year walkthrough — the reputation that makes the next buyer trust you before they call.",
      },
    ],
    steps: [
      {
        title: "We map your communities and plans",
        body: "We build the landing pages, capture forms and pipeline stages around how your sales team actually sells — by community, by plan, by release.",
      },
      {
        title: "We automate the follow-up",
        body: "Instant replies, long-cycle nurture, appointment reminders and re-engagement for cold enquiries all run without anyone remembering to send them.",
      },
      {
        title: "Your team works booked appointments",
        body: "Reps stop chasing and start selling — they open a calendar of design centre consults and model home tours that filled itself overnight.",
      },
    ],
    specialties: [
      "Production builders",
      "Custom home builders",
      "Semi-custom builders",
      "Townhome & multi-family",
      "Land developers",
      "Design-build firms",
    ],
    testimonial: {
      quote:
        "Our plan enquiries used to sit until someone had a spare hour. Now every one gets a reply in under a minute and the design centre calendar fills itself a week out.",
      name: "Daniel Reyes",
      role: "Sales Director, Northline Homes",
      initials: "DR",
    },
  },
  {
    slug: "pool-remodelers",
    name: "Pool Remodelers",
    icon: "🏊",
    accent: ["#0ea5e9", "#22d3ee"],
    tagline:
      "Book more on-site estimates in season and keep the off-season pipeline warm instead of empty.",
    cardPoints: ["On-site estimates", "Seasonal demand", "Quote follow-up"],
    metaTitle: "Growth Funnel for Pool Remodelers — QUAD Solutions",
    metaDescription:
      "A complete lead-to-estimate system for pool remodeling and renovation companies: instant enquiry response, automated estimate booking, seasonal nurture and Google review generation.",
    heroKicker: "Growth Funnel for Pool Remodelers",
    heroTitle: "A Full Estimate Calendar,",
    heroHighlight: "Every Season",
    heroSub:
      "Capture every renovation enquiry, respond before your competitor does, and turn quotes that went quiet into booked remodels.",
    stats: [
      { value: "< 60 sec", label: "First reply to a new enquiry" },
      { value: "24/7", label: "Estimate booking, even off-hours" },
      { value: "0", label: "Quotes that go cold unchased" },
    ],
    problems: [
      "Enquiries come in while you're on a job site and go unanswered for hours",
      "Homeowners get three quotes and go with whoever replied first",
      "Sent quotes go silent and nobody follows up on them",
      "Winter kills the pipeline, so spring starts from zero every year",
    ],
    solutions: [
      "Automatic text-back the second an enquiry lands, even mid-install",
      "Self-serve estimate booking with reminders so homeowners show up",
      "Quote follow-up sequences that run until you get a yes or a no",
      "Off-season nurture that keeps you booked for the spring rush",
    ],
    features: [
      {
        emoji: "💧",
        title: "Renovation Enquiry Pages",
        body: "Dedicated pages for resurfacing, tile and coping, decking, equipment upgrades and full remodels — each one built to turn a browser into a booked estimate.",
      },
      {
        emoji: "📲",
        title: "Missed-Call Text Back",
        body: "You're under a pool deck, not at your desk. Every missed call gets an instant text so the homeowner doesn't dial the next company on the list.",
      },
      {
        emoji: "📆",
        title: "Automated Estimate Scheduling",
        body: "Homeowners pick an on-site estimate slot from your live calendar, with confirmation and reminder messages that cut no-shows dramatically.",
      },
      {
        emoji: "💬",
        title: "Quote Follow-Up That Never Forgets",
        body: "Every sent quote enters an automatic sequence — a check-in, a financing option, a seasonal offer — until the job is won or the homeowner opts out.",
      },
      {
        emoji: "🌦️",
        title: "Off-Season Nurture",
        body: "Keep past enquiries warm through winter with maintenance tips and early-booking offers, so your spring calendar is full before the weather turns.",
      },
      {
        emoji: "⭐",
        title: "Before-And-After Review Engine",
        body: "Request a Google review at handover while the finished pool still takes their breath away, and let that reputation sell the next remodel for you.",
      },
    ],
    steps: [
      {
        title: "We build your enquiry-to-estimate path",
        body: "Landing pages, forms and a live estimate calendar, wired so a homeowner can go from ad click to booked site visit without speaking to anyone.",
      },
      {
        title: "We automate every follow-up",
        body: "Instant replies, missed-call text back, estimate reminders and quote chase sequences run on their own while your crews stay on the job.",
      },
      {
        title: "You quote more and win more",
        body: "More estimates on the calendar, fewer no-shows, and quotes that get followed up properly instead of quietly dying in a folder.",
      },
    ],
    specialties: [
      "Pool resurfacing",
      "Tile & coping",
      "Deck & patio renovation",
      "Equipment upgrades",
      "Full pool remodels",
      "Outdoor living builds",
    ],
    testimonial: {
      quote:
        "The missed-call text back alone paid for the system. We were losing homeowners every day just by being on a job site when they rang.",
      name: "Marcus Bell",
      role: "Owner, Bluewater Pool Renovations",
      initials: "MB",
    },
  },
  {
    slug: "med-spa-longevity",
    name: "Med Spa & Longevity",
    icon: "💆",
    accent: ["#a855f7", "#ec4899"],
    tagline:
      "Fill consultation slots, cut no-shows, and turn one-off treatments into long-term memberships.",
    cardPoints: ["Consult bookings", "No-show reduction", "Rebooking & memberships"],
    metaTitle: "Growth Funnel for Med Spas & Longevity Clinics — QUAD Solutions",
    metaDescription:
      "A patient acquisition and retention system for med spas and longevity clinics: automated consultation booking, no-show reduction, treatment rebooking and reputation growth.",
    heroKicker: "Growth Funnel for Med Spas & Longevity Clinics",
    heroTitle: "A Consultation Calendar",
    heroHighlight: "That Fills Itself",
    heroSub:
      "Capture every enquiry, book consultations automatically, cut no-shows with smart reminders, and keep clients returning long after the first treatment.",
    stats: [
      { value: "< 60 sec", label: "First reply to a new enquiry" },
      { value: "24/7", label: "Self-serve consult booking" },
      { value: "3-touch", label: "Reminder sequence before every visit" },
    ],
    problems: [
      "The front desk is with a client, so enquiries and calls go unanswered",
      "No-shows and late cancellations leave expensive gaps in the day",
      "One-off treatment clients never get invited back",
      "Instagram DMs, web forms and calls all live in different places",
    ],
    solutions: [
      "Instant, on-brand replies to every enquiry across every channel",
      "Multi-touch reminders and easy rescheduling that protect your day",
      "Automatic rebooking and membership offers timed to each treatment cycle",
      "One unified inbox for DMs, web forms, SMS, email and calls",
    ],
    features: [
      {
        emoji: "✨",
        title: "Treatment-Specific Landing Pages",
        body: "A tailored page per service — injectables, body contouring, hormone therapy, IV drips and longevity programs — each built to convert into a booked consultation.",
      },
      {
        emoji: "💬",
        title: "One Inbox For Every Channel",
        body: "Instagram and Facebook DMs, website forms, SMS, email and Google messages land in a single conversation view, so nothing gets missed between clients.",
      },
      {
        emoji: "🗓️",
        title: "Self-Serve Consultation Booking",
        body: "Clients book their own consultation from a live calendar that respects provider availability, room capacity and treatment duration.",
      },
      {
        emoji: "🔔",
        title: "No-Show Protection",
        body: "A confirmation, a day-before reminder and a morning-of nudge — with one-tap rescheduling — so high-value slots don't sit empty.",
      },
      {
        emoji: "🔁",
        title: "Treatment Cycle Rebooking",
        body: "Automatically invite clients back at the right interval for their treatment, and present membership or package upgrades at exactly the right moment.",
      },
      {
        emoji: "⭐",
        title: "Reputation On Autopilot",
        body: "Request a Google review after a great visit and route unhappy feedback privately to you first, so your public rating keeps climbing.",
      },
    ],
    steps: [
      {
        title: "We map your services and providers",
        body: "Treatment pages, intake forms and calendars set up around your real availability, durations and provider rules.",
      },
      {
        title: "We automate booking and reminders",
        body: "Instant enquiry replies, self-serve scheduling, confirmation and reminder sequences, and automatic rebooking at the right treatment interval.",
      },
      {
        title: "Your front desk gets its day back",
        body: "Fewer phone tag loops, fewer empty chairs, and a client list that returns on schedule instead of only when they remember to call.",
      },
    ],
    specialties: [
      "Injectables & aesthetics",
      "Body contouring",
      "Hormone & peptide therapy",
      "IV & wellness drips",
      "Longevity programs",
      "Laser & skin clinics",
    ],
    testimonial: {
      quote:
        "Reminders cut our no-shows to a fraction of what they were, and the rebooking sequence brings clients back without anyone at the desk having to chase.",
      name: "Priya Sharma",
      role: "Clinic Director, Lumen Aesthetics",
      initials: "PS",
    },
  },
  {
    slug: "us-manufacturers",
    name: "US Manufacturers",
    icon: "🏭",
    accent: ["#f97316", "#facc15"],
    tagline:
      "Qualify RFQs automatically and keep long B2B buying cycles moving without a bigger sales team.",
    cardPoints: ["RFQ qualification", "Long B2B cycles", "Distributor & OEM leads"],
    metaTitle: "Growth Funnel for US Manufacturers — QUAD Solutions",
    metaDescription:
      "A B2B lead and RFQ system for US manufacturers: capture and qualify quote requests, nurture long buying cycles, book engineering calls and track every opportunity to its source.",
    heroKicker: "Growth Funnel for US Manufacturers",
    heroTitle: "Better RFQs,",
    heroHighlight: "Shorter Sales Cycles",
    heroSub:
      "Capture and qualify every quote request, keep multi-month B2B buying cycles warm automatically, and get engineering calls on the calendar without adding headcount.",
    stats: [
      { value: "< 60 sec", label: "First reply to a new RFQ" },
      { value: "12+ months", label: "Automated nurture runway" },
      { value: "1 pipeline", label: "Web, trade show & distributor leads" },
    ],
    problems: [
      "RFQs land in a generic inbox and take days to get a first response",
      "Sales spends hours qualifying enquiries that were never a fit",
      "Trade show lists get scanned, exported and then never worked",
      "Long buying cycles stall because nobody follows up past week two",
    ],
    solutions: [
      "Instant acknowledgement and routing the moment an RFQ arrives",
      "Qualifying questions up front, so only real opportunities reach sales",
      "Trade show leads loaded straight into an automated follow-up sequence",
      "Twelve-month nurture that keeps you shortlisted when budget unlocks",
    ],
    features: [
      {
        emoji: "📝",
        title: "Smart RFQ Capture Forms",
        body: "Capture material, tolerance, volume, timeline and application up front, so every quote request reaches your team already qualified and ready to price.",
      },
      {
        emoji: "⚡",
        title: "Instant RFQ Acknowledgement",
        body: "Buyers hear back within a minute with a confirmation and expected turnaround — the professionalism that gets you shortlisted over a slower competitor.",
      },
      {
        emoji: "🗂️",
        title: "One Pipeline For Every Source",
        body: "Website enquiries, trade show scans, distributor referrals and inbound calls all flow into a single opportunity pipeline your team actually works.",
      },
      {
        emoji: "📞",
        title: "Engineering Call Booking",
        body: "Qualified buyers book time directly with your engineering or sales team from a live calendar, with reminders that keep the meeting on the books.",
      },
      {
        emoji: "🔄",
        title: "Long-Cycle Account Nurture",
        body: "Capability updates, certifications, case studies and capacity news delivered automatically across a twelve-month cycle, so you're on the list when budget frees up.",
      },
      {
        emoji: "📊",
        title: "Source-To-Contract Reporting",
        body: "See which campaigns, trade shows and channels produced real quoted revenue — not just form fills — and put your budget where the contracts came from.",
      },
    ],
    steps: [
      {
        title: "We build your RFQ intake",
        body: "Capability pages and qualifying quote forms that collect the specs your team needs before anyone picks up the phone.",
      },
      {
        title: "We automate qualification and nurture",
        body: "Instant acknowledgements, routing rules, engineering call booking and long-cycle sequences that keep every account warm.",
      },
      {
        title: "Sales works real opportunities",
        body: "Your team stops triaging an inbox and starts quoting qualified work, with a pipeline that shows where each opportunity came from.",
      },
    ],
    specialties: [
      "CNC & precision machining",
      "Metal fabrication",
      "Injection molding",
      "Contract manufacturing",
      "Industrial equipment",
      "Packaging & materials",
    ],
    testimonial: {
      quote:
        "We stopped losing RFQs to slower responses. Buyers get an acknowledgement in under a minute and our engineers only see enquiries that are actually a fit.",
      name: "Karen Whitfield",
      role: "VP Sales, Redstone Precision",
      initials: "KW",
    },
  },
  {
    slug: "private-schools-montessori",
    name: "Private Schools & Montessori",
    icon: "🎓",
    accent: ["#10b981", "#34d399"],
    tagline:
      "Fill every seat with a tour-to-enrollment journey that runs through the whole admissions season.",
    cardPoints: ["Tour bookings", "Admissions nurture", "Re-enrollment"],
    metaTitle: "Growth Funnel for Private Schools & Montessori — QUAD Solutions",
    metaDescription:
      "An admissions and enrollment system for private schools and Montessori programs: automated tour booking, inquiry follow-up, waitlist nurture and re-enrollment reminders.",
    heroKicker: "Growth Funnel for Private Schools & Montessori",
    heroTitle: "Full Classrooms,",
    heroHighlight: "Calmer Admissions",
    heroSub:
      "Answer every family enquiry instantly, fill your tour calendar automatically, and walk families from first question to signed enrollment without the admissions office drowning.",
    stats: [
      { value: "< 60 sec", label: "First reply to a family enquiry" },
      { value: "24/7", label: "Self-serve tour booking" },
      { value: "Full season", label: "Automated admissions nurture" },
    ],
    problems: [
      "Enquiries arrive after hours and wait until someone opens the inbox",
      "Admissions staff spend the season playing phone tag over tour times",
      "Families tour once, go quiet, and enroll somewhere else",
      "Waitlist and re-enrollment chasing eats weeks of staff time",
    ],
    solutions: [
      "Warm, on-brand replies to every family enquiry within a minute",
      "Families book their own campus tour from a live calendar",
      "Automated post-tour nurture that carries families to an application",
      "Waitlist and re-enrollment sequences that run themselves",
    ],
    features: [
      {
        emoji: "🏫",
        title: "Program & Campus Pages",
        body: "A dedicated page for each program — toddler, primary, elementary, middle years — built to answer a parent's real questions and end in a booked tour.",
      },
      {
        emoji: "💌",
        title: "Instant Family Response",
        body: "Every enquiry gets a warm, on-brand reply within a minute, day or night, so families feel looked after from their very first question.",
      },
      {
        emoji: "🗓️",
        title: "Self-Serve Tour Booking",
        body: "Parents pick a campus tour or open house slot from a live calendar, with confirmations and reminders that keep attendance high.",
      },
      {
        emoji: "🌱",
        title: "Tour-To-Application Nurture",
        body: "After a tour, families receive a thoughtful sequence — philosophy, outcomes, tuition guidance, application deadlines — that moves them to apply.",
      },
      {
        emoji: "📋",
        title: "Waitlist & Re-Enrollment Automation",
        body: "Keep waitlisted families engaged for when a seat opens, and run re-enrollment reminders for current families without a single manual email.",
      },
      {
        emoji: "⭐",
        title: "Parent Reviews & Referrals",
        body: "Invite happy parents to leave a Google review and refer other families — the word of mouth that drives most private school enrollment.",
      },
    ],
    steps: [
      {
        title: "We map your admissions journey",
        body: "Program pages, enquiry forms and a tour calendar shaped around how your admissions season actually runs.",
      },
      {
        title: "We automate the season",
        body: "Instant replies, tour booking and reminders, post-tour nurture, application deadline prompts, waitlist and re-enrollment sequences.",
      },
      {
        title: "Admissions gets to be human again",
        body: "Your team spends the season talking to families who are ready, instead of chasing voicemails and rewriting the same email three hundred times.",
      },
    ],
    specialties: [
      "Montessori schools",
      "Private K-12",
      "Preschool & early years",
      "Faith-based schools",
      "Language immersion",
      "Micro-schools & pods",
    ],
    testimonial: {
      quote:
        "Admissions season used to be phone tag from August to November. Families now book their own tours and the post-tour follow-up happens whether we remember or not.",
      name: "Elena Duarte",
      role: "Head of Admissions, Willow Grove Montessori",
      initials: "ED",
    },
  },
  {
    slug: "auto-customization",
    name: "Auto Customization",
    icon: "🚗",
    accent: ["#ef4444", "#f97316"],
    tagline:
      "Turn build enquiries into booked bays, with deposits collected and follow-up that never drops a quote.",
    cardPoints: ["Build quotes", "Bay scheduling", "Deposit collection"],
    metaTitle: "Growth Funnel for Auto Customization Shops — QUAD Solutions",
    metaDescription:
      "A lead and booking system for auto customization shops: capture build enquiries, quote faster, schedule bays, collect deposits and keep every quote followed up automatically.",
    heroKicker: "Growth Funnel for Auto Customization Shops",
    heroTitle: "Booked Bays,",
    heroHighlight: "Not Dead Quotes",
    heroSub:
      "Capture every build enquiry from Instagram, your site and Google, quote faster than the shop down the road, and keep your bays full weeks out.",
    stats: [
      { value: "< 60 sec", label: "First reply to a build enquiry" },
      { value: "24/7", label: "Consultation booking" },
      { value: "0", label: "Quotes left unfollowed" },
    ],
    problems: [
      "Instagram DMs about builds pile up while you're in the shop",
      "Quotes get sent and then nobody follows up on them",
      "Bays sit empty one week and overbooked the next",
      "No deposit means a cancellation costs you a whole slot",
    ],
    solutions: [
      "DMs, forms and calls in one inbox with instant automated replies",
      "Quote follow-up sequences that run until the build is won",
      "Live bay scheduling with reminders that protect your shop hours",
      "Deposit links sent automatically the moment a build is approved",
    ],
    features: [
      {
        emoji: "🔧",
        title: "Build & Service Landing Pages",
        body: "Pages for wraps, PPF, ceramic coating, audio, lift kits, performance and full custom builds — each one ending in a quote request or booked consult.",
      },
      {
        emoji: "📲",
        title: "Instagram DMs In Your Inbox",
        body: "Most build enquiries start as a DM. Route Instagram, Facebook, web forms, SMS and Google messages into one place with instant automated replies.",
      },
      {
        emoji: "🗓️",
        title: "Consultation & Bay Scheduling",
        body: "Customers book a consult or drop-off slot from a live calendar that knows your bay capacity and job durations, with reminders to cut no-shows.",
      },
      {
        emoji: "💳",
        title: "Automatic Deposit Requests",
        body: "When a build is approved, a deposit link goes out automatically — so the slot is committed and last-minute cancellations stop costing you a bay.",
      },
      {
        emoji: "🔁",
        title: "Quote Follow-Up Sequences",
        body: "Every quote gets chased on a schedule with build photos, financing options and seasonal offers until the customer says yes or opts out.",
      },
      {
        emoji: "⭐",
        title: "Reveal-Day Review Requests",
        body: "Ask for the Google review at pickup, when the customer is standing in front of the finished build and most likely to rave about it.",
      },
    ],
    steps: [
      {
        title: "We wire up your enquiry channels",
        body: "Service pages, quote forms and your Instagram, Facebook, web and phone enquiries all feeding one pipeline.",
      },
      {
        title: "We automate quoting and booking",
        body: "Instant replies, consult scheduling, deposit links and quote follow-up sequences that run while you're under a hood.",
      },
      {
        title: "Your bays stay full",
        body: "A schedule booked weeks out, deposits collected up front, and quotes that convert instead of going quiet.",
      },
    ],
    specialties: [
      "Vinyl wraps & PPF",
      "Ceramic coating & detailing",
      "Car audio & electronics",
      "Lift kits & off-road",
      "Performance tuning",
      "Full custom builds",
    ],
    testimonial: {
      quote:
        "Every build enquiry used to start as a DM I'd see three hours later. Now they get an answer instantly and I collect a deposit before the slot is held.",
      name: "Tyler Nakamura",
      role: "Owner, Apex Custom Garage",
      initials: "TN",
    },
  },
  {
    slug: "dental-clinics",
    name: "Dental Clinics",
    icon: "🦷",
    accent: ["#0d9488", "#38bdf8"],
    tagline:
      "Fill the chair with new patients, cut no-shows, and reactivate the ones who stopped coming in.",
    cardPoints: ["New patient calls", "No-show reduction", "Recall reactivation"],
    metaTitle: "Growth Funnel for Dental Clinics — QUAD Solutions",
    metaDescription:
      "A patient acquisition system for dental clinics: instant new-patient response, self-serve appointment booking, no-show reduction, recall reactivation and Google review growth.",
    heroKicker: "Growth Funnel for Dental Clinics",
    heroTitle: "A Fuller Chair,",
    heroHighlight: "Fewer No-Shows",
    heroSub:
      "Answer every new-patient enquiry in seconds, let patients book themselves, reduce no-shows with smart reminders, and bring lapsed patients back automatically.",
    stats: [
      { value: "< 60 sec", label: "First reply to a new patient" },
      { value: "24/7", label: "Self-serve appointment booking" },
      { value: "3-touch", label: "Reminder sequence before every visit" },
    ],
    problems: [
      "New-patient calls go to voicemail while the front desk is with someone",
      "No-shows and same-day cancellations leave gaps you can't refill",
      "Hundreds of lapsed patients sit in the system, never contacted",
      "Treatment plans get accepted, then quietly never scheduled",
    ],
    solutions: [
      "Missed-call text back and instant replies to every new-patient enquiry",
      "A three-touch reminder sequence with one-tap rescheduling",
      "Automated recall campaigns that reactivate your existing patient list",
      "Treatment plan follow-up until the appointment is actually on the books",
    ],
    features: [
      {
        emoji: "🦷",
        title: "New Patient & Treatment Pages",
        body: "Focused pages for implants, aligners, cosmetic, emergency and general dentistry, each built to convert a search into a booked appointment.",
      },
      {
        emoji: "📞",
        title: "Missed-Call Text Back",
        body: "When the front desk is with a patient, every missed call gets an instant text — so the caller books with you instead of the practice down the street.",
      },
      {
        emoji: "🗓️",
        title: "Self-Serve Appointment Booking",
        body: "Patients book from a live calendar that respects operatory availability, provider schedules and appointment type durations.",
      },
      {
        emoji: "🔔",
        title: "No-Show Reduction",
        body: "Confirmation, day-before and morning-of reminders with one-tap rescheduling, so empty chairs stop eating your production target.",
      },
      {
        emoji: "🔄",
        title: "Recall & Reactivation Campaigns",
        body: "Automatically reach lapsed patients and due-for-hygiene recalls — the cheapest new appointments in your practice are already in your database.",
      },
      {
        emoji: "⭐",
        title: "Google Review Growth",
        body: "Request a review after a good visit and route any unhappy feedback to you privately first, so your local search ranking keeps climbing.",
      },
    ],
    steps: [
      {
        title: "We set up your patient intake",
        body: "Treatment pages, new-patient forms and a booking calendar matched to your providers, operatories and appointment types.",
      },
      {
        title: "We automate the front desk busywork",
        body: "Missed-call text back, instant replies, reminder sequences, recall campaigns and treatment plan follow-up all run on their own.",
      },
      {
        title: "Your schedule stays full",
        body: "More new patients booked, fewer gaps from no-shows, and a patient list that comes back on schedule instead of drifting away.",
      },
    ],
    specialties: [
      "General dentistry",
      "Cosmetic & veneers",
      "Implants",
      "Orthodontics & aligners",
      "Pediatric dentistry",
      "Emergency dental",
    ],
    testimonial: {
      quote:
        "The recall campaign found appointments we already had sitting in our own database. Add the reminder sequence and our open chair time dropped right off.",
      name: "Dr. Amara Osei",
      role: "Principal Dentist, Riverbend Dental",
      initials: "AO",
    },
  },
];

export function getNicheFunnel(slug: string): NicheFunnel | undefined {
  return NICHE_FUNNELS.find((n) => n.slug === slug);
}
