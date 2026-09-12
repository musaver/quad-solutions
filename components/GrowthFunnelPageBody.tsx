"use client";

import { useRef, useState, type FormEvent } from "react";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { Footer } from "@/components/Footer";
import { leadParams, trackPixelEvent } from "@/lib/metaPixel";

const VIDEO_SRC = "/assets/video/growth-funnel.mp4";
const VIDEO_POSTER = "/assets/video/growth-funnel-poster.jpg";

const CONTACT_EMAIL = "support@quadsolutions.ai";
const CONTACT_PHONE_LABEL = "+1 (307) 427-2883";
const CONTACT_PHONE_HREF = "tel:+13074272883";

/* ─── Icons ──────────────────────────────────────────────────────────────── */

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2.5" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.5l2.9 5.88 6.5.95-4.7 4.58 1.11 6.47L12 17.33l-5.81 3.05 1.11-6.47-4.7-4.58 6.5-.95L12 2.5z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const CrossIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const Stars = () => (
  <div className="gf-stars" aria-hidden="true">
    {[0, 1, 2, 3, 4].map((i) => (
      <StarIcon key={i} />
    ))}
  </div>
);

/* ─── Content ────────────────────────────────────────────────────────────── */

const FEATURES = [
  {
    emoji: "🚀",
    title: "Full High Converting Website",
    body: "Effortlessly launch a website in 5 minutes that converts more of your “website visitors” into booked appointments.",
  },
  {
    emoji: "⚡",
    title: "Automated Lead Followup",
    body: "No more missed leads! Automatically text & email your leads as soon as they come in. Speed to lead is everything. No need for an office manager to “remember” to call back.",
  },
  {
    emoji: "📮",
    title: "Full Transparent Conversation System",
    body: "Manage all your online leads from all platforms — Facebook, Instagram, your website, Google — all in one place. No need to log into 100 different softwares.",
  },
  {
    emoji: "🧠",
    title: "100 + Directory Listings",
    body: "List your business on 100+ directories with 1 click including Yelp, Bing, Apple Maps, Yahoo etc. All to help rank you higher on Google PLUS customers can find you everywhere online!",
  },
  {
    emoji: "💯",
    title: "Boost Your Online Reviews",
    body: "Never forget to ask for a review again with our automated review funnel. Elevate your company's reputation with more Google and Facebook reviews, which helps drive more business & appear higher in Google searches.",
  },
  {
    emoji: "📬",
    title: "Book More Appointments Using Calendars",
    body: "Leads are simply not enough… We'll install a calendar into your online sales process, so prospects can book a “phone call consultation” with your company, so you can wave goodbye to playing phone tag.",
  },
];

const AGENCY_CONS = [
  "Lengthy contracts: 3-4 months",
  "Zero trial period",
  "Expensive: $2,000+/month",
  "Lead generation solution",
  "Get you more “leads”",
  "Support reps who don’t even know your business",
];

const QUAD_PROS = [
  "No contracts",
  "7-day free trial",
  "Affordable: $297/month",
  "Appointment generation solution",
  "Grow your online presence",
  "A growth marketing specialist with you on call",
];

const PILLARS = [
  {
    title: "Generate Leads & Automatically Followup",
    body: "Many times sales leads fall through the cracks when the day gets hectic. Automate your lead followup & schedule SMS messages to send out periodically to interested prospects.",
  },
  {
    title: "Automated Appointment & Estimate Reminders",
    body: "How many times have you scheduled a phone call or sales meeting & wished either you or your client received a reminder so that everyone shows up on time. We make that possible.",
  },
  {
    title: "Manage All Social Media & Online Presence In One Place",
    body: "There are thousands of online profiles, which makes it impossible to manage everything yourself. By creating an account, you can have everything managed in one location without the need of an external company.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We went from chasing leads at 9pm to walking into a calendar that was already full. The follow-up runs itself — I genuinely stopped worrying about missed enquiries.",
    name: "Daniel Reyes",
    role: "Owner, Reyes Roofing",
    initials: "DR",
  },
  {
    quote:
      "Setup took a week and we had 14 booked estimates in the first month. QUAD Solutions replaced three separate tools and an office manager's worth of admin.",
    name: "Priya Sharma",
    role: "Director, Lumen Kitchens",
    initials: "PS",
  },
  {
    quote:
      "Our Google reviews went from 11 to 96 in four months without us asking a single customer manually. That alone changed how many calls we get.",
    name: "Marcus Bell",
    role: "Founder, Bell HVAC & Air",
    initials: "MB",
  },
];

const TEAM_POINTS = [
  "Helped owners save time and grow",
  "100+ brands served worldwide",
  "Built affordable systems for local businesses",
  "One team for growth, creative, web & AI",
];

const INDUSTRIES = [
  { icon: "🍳", label: "Kitchen Remodeling" },
  { icon: "🛁", label: "Bathroom Remodeling" },
  { icon: "🚗", label: "Garage Remodeling" },
  { icon: "🏠", label: "Roofing" },
  { icon: "🎨", label: "Painting" },
  { icon: "🔧", label: "Auto Repair" },
  { icon: "❄️", label: "HVAC" },
  { icon: "🐾", label: "Pet Grooming" },
  { icon: "🏪", label: "Local Businesses" },
  { icon: "🚚", label: "Junk Removal" },
  { icon: "🌿", label: "Landscaping" },
  { icon: "🧱", label: "Masonry" },
];

/* ─── Mockups ────────────────────────────────────────────────────────────── */

function MockBar({ label }: { label: string }) {
  return (
    <div className="gf-mock-bar">
      <span className="gf-mock-dot" />
      <span className="gf-mock-dot" />
      <span className="gf-mock-dot" />
      <span className="gf-mock-label">{label}</span>
    </div>
  );
}

function NurtureMock() {
  return (
    <div className="gf-mock">
      <MockBar label="Conversations — unified inbox" />
      <div className="gf-mock-body">
        <div className="gf-chat">
          <span className="gf-chat-avatar">JL</span>
          <p className="gf-chat-bubble">Hi, saw your ad — how much for a full roof replacement?</p>
        </div>
        <div className="gf-chat gf-chat--out">
          <span className="gf-chat-avatar">QS</span>
          <p className="gf-chat-bubble">
            Hi Jordan! Happy to help. Are you free Thursday at 10am for a free on-site estimate?
          </p>
        </div>
        <div className="gf-chat">
          <span className="gf-chat-avatar">JL</span>
          <p className="gf-chat-bubble">Thursday works.</p>
        </div>
        <div className="gf-chat gf-chat--out">
          <span className="gf-chat-avatar">QS</span>
          <p className="gf-chat-bubble">Booked ✅ Confirmation and reminders are on their way.</p>
        </div>
        <div className="gf-channels">
          {["SMS", "Email", "Voicemail drop", "GMB", "Messenger"].map((c) => (
            <span key={c} className="gf-channel">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BookingMock() {
  return (
    <div className="gf-mock">
      <MockBar label="Calendar — March" />
      <div className="gf-mock-body">
        <div className="gf-cal" aria-hidden="true">
          {Array.from({ length: 28 }, (_, i) => {
            const day = i + 1;
            const on = [4, 9, 15, 22].includes(day);
            const soft = [6, 11, 18, 25, 27].includes(day);
            return (
              <span
                key={day}
                className={`gf-cal-day${on ? " gf-cal-day--on" : soft ? " gf-cal-day--soft" : ""}`}
              >
                {day}
              </span>
            );
          })}
        </div>
        <div className="gf-slot">
          <span>Thu 15 · 10:00 AM — Jordan L.</span>
          <em>Confirmed</em>
        </div>
        <div className="gf-slot">
          <span>Fri 22 · 2:30 PM — Amelia K.</span>
          <em>Confirmed</em>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export function GrowthFunnelPageBody() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const playVideo = () => {
    const el = videoRef.current;
    if (!el) return;
    setPlaying(true);
    void el.play();
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    const name = ((data.get("name") as string | null) ?? "").trim();
    const email = ((data.get("email") as string | null) ?? "").trim();
    const phone = ((data.get("phone") as string | null) ?? "").trim();

    setSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "growth-funnel",
          name,
          email,
          phone,
          message: "Requested the 7-day free trial from the Growth Funnel page.",
        }),
      });

      if (!res.ok) throw new Error("request failed");

      trackPixelEvent("Lead", leadParams({ formName: "Growth Funnel — Free Trial" }));
      setSubmitted(true);
      formEl.reset();
    } catch {
      setErrorMsg("Something went wrong. Please email us at " + CONTACT_EMAIL + " and we'll set you up.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="gf-page">
      <TemplateNavbar />

      {/* Contact strip */}
      <div className="gf-topbar">
        <div className="gf-inner gf-topbar-inner">
          <a href={`mailto:${CONTACT_EMAIL}`}>
            <MailIcon />
            {CONTACT_EMAIL}
          </a>
          <a href={CONTACT_PHONE_HREF}>
            <PhoneIcon />
            {CONTACT_PHONE_LABEL}
          </a>
        </div>
      </div>

      {/* Hero */}
      <header className="gf-hero">
        <div className="gf-inner">
          <p className="gf-hero-kicker">All-In-One Sales &amp; Marketing Platform</p>
          <h1 className="gf-hero-title">
            We Help Local Businesses <span>Thrive</span>
          </h1>
          <p className="gf-hero-sub">
            Automate your lead generation, followup &amp; project acquisition today.
          </p>
          <div className="gf-hero-ctas">
            <a className="gf-btn" href="#free-trial">
              Get started for free
            </a>
            <a className="gf-btn gf-btn--ghost" href="#how-it-works">
              See how it works
            </a>
          </div>
          <p className="gf-hero-note">7-day free trial · No contracts · Cancel anytime</p>
        </div>
      </header>

      {/* Video */}
      <section className="gf-section gf-section--tight" id="how-it-works">
        <div className="gf-inner">
          <div className="gf-video-shell">
            <video
              ref={videoRef}
              poster={VIDEO_POSTER}
              controls={playing}
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
            {!playing && (
              <button type="button" className="gf-video-play" onClick={playVideo} aria-label="Play overview video">
                <span>
                  <PlayIcon />
                </span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="gf-section gf-section--tight gf-section--ice">
        <div className="gf-inner gf-proof">
          <Stars />
          <p className="gf-proof-score">4.9/5 star reviews</p>
          <p className="gf-proof-note">See why we have such raving reviews</p>
        </div>
      </section>

      {/* Core features */}
      <section className="gf-section">
        <div className="gf-inner">
          <p className="gf-eyebrow">What you get</p>
          <h2 className="gf-h2">Everything you need to win more jobs</h2>
          <p className="gf-lede">
            One login replaces the website builder, the CRM, the inbox, the calendar and the review
            software you&rsquo;re paying for today.
          </p>

          <div className="gf-feature-grid">
            {FEATURES.map((f) => (
              <article className="gf-feature-card" key={f.title}>
                <span className="gf-feature-emoji" aria-hidden="true">
                  {f.emoji}
                </span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>

          <div className="gf-cta-row">
            <a className="gf-btn" href="#free-trial">
              Get started
            </a>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="gf-section gf-section--ice">
        <div className="gf-inner">
          <p className="gf-eyebrow">The Difference</p>
          <h2 className="gf-h2">Agencies Vs. Our Solution</h2>

          <div className="gf-compare">
            <div className="gf-compare-col">
              <div className="gf-compare-head">
                <h3>Typical agencies</h3>
                <span className="gf-compare-tag">The old way</span>
              </div>
              <ul className="gf-compare-list gf-compare-list--bad">
                {AGENCY_CONS.map((item) => (
                  <li key={item}>
                    <CrossIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="gf-compare-col gf-compare-col--win">
              <div className="gf-compare-head">
                <h3>QUAD Solutions</h3>
                <span className="gf-compare-tag gf-compare-tag--win">Our solution</span>
              </div>
              <ul className="gf-compare-list gf-compare-list--good">
                {QUAD_PROS.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="gf-consult">
            <p className="gf-consult-flag">Free consultation — next 24 hours only</p>
            <p className="gf-consult-note">
              Get a growth marketing specialist on a call to map out your funnel. No cost, no
              contract, no obligation to continue.
            </p>
            <div className="gf-cta-row">
              <a className="gf-btn" href="#free-trial">
                Claim your free consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand pillars */}
      <section className="gf-section gf-section--navy">
        <div className="gf-inner">
          <p className="gf-eyebrow">QUAD Solutions</p>
          <h2 className="gf-h2">Has everything your company needs to succeed</h2>

          <div className="gf-pillars">
            {PILLARS.map((p, i) => (
              <article className="gf-pillar" key={p.title}>
                <span className="gf-pillar-num">{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="gf-cta-row">
            <a className="gf-btn" href="#free-trial">
              Get started for free
            </a>
          </div>
        </div>
      </section>

      {/* Detailed feature splits */}
      <section className="gf-section">
        <div className="gf-inner">
          <div className="gf-split">
            <div>
              <h2 className="gf-split-title">Capture New Leads</h2>
              <p className="gf-split-intro">
                QUAD Solutions is a full suite platform for companies. Whether you&rsquo;re running Facebook,
                Google, or using a 3rd party lead generator, we help you generate &amp; convert more
                leads into customers.
              </p>
              <div className="gf-split-points">
                <div>
                  <h4>Full websites, funnels &amp; landing pages</h4>
                  <p>
                    We create full-featured high converting landing pages &amp; funnels, or we can
                    integrate with your existing website.
                  </p>
                </div>
                <div>
                  <h4>Track every sale directly from its source</h4>
                  <p>
                    Built right in is the ability to capture leads through surveys and capture forms.
                    You&rsquo;ll know exactly where each lead and customer came from.
                  </p>
                </div>
                <div>
                  <h4>Online appointment scheduling</h4>
                  <p>
                    We&rsquo;ve built our own calendar application within QUAD Solutions, so you can capture
                    all sales and company appointments in one place with automated reminders and
                    followup.
                  </p>
                </div>
              </div>
            </div>
            <div className="gf-split-media">
              <img
                className="gf-split-img"
                src="/assets/growth-funnel/capture-leads.jpg"
                alt="A new lead texting a business and instantly receiving an automated reply confirming the team will text back"
                width={1200}
                height={675}
                loading="lazy"
              />
            </div>
          </div>

          <div className="gf-split gf-split--flip">
            <div>
              <h2 className="gf-split-title">Never Lose Another Lead Again</h2>
              <p className="gf-split-intro">Automatically nurture existing leads into customers.</p>
              <div className="gf-split-points">
                <div>
                  <h4>Easily customize your follow-up campaigns</h4>
                  <p>
                    Our multi-channel follow up campaigns allow you to automate engaging follow ups and
                    capture all responses from your leads, across all channels.
                  </p>
                </div>
                <div>
                  <h4>Create multi-channel campaigns</h4>
                  <p>
                    QUAD Solutions allows you to connect with your leads through phone, voicemail drops,
                    SMS/MMS, emails, GMB messages, and even Facebook Messenger.
                  </p>
                </div>
                <div>
                  <h4>Two-way communication on any device</h4>
                  <p>
                    Our full featured mobile app allows you to communicate with your leads on all
                    devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gf-split-media">
              <NurtureMock />
            </div>
          </div>

          <div className="gf-split">
            <div>
              <h2 className="gf-split-title">Fully Automated Booking</h2>
              <p className="gf-split-intro">
                Automatically book leads and prospects on your calendar without lifting a finger.
              </p>
              <div className="gf-split-points">
                <div>
                  <h4>Automated nurture conversations</h4>
                  <p>
                    Create text conversations with the goal of placing booked appointments on calendars
                    WITHOUT any human interaction if you so choose.
                  </p>
                </div>
                <div>
                  <h4>Full customization of messaging</h4>
                  <p>Use our campaign builder to customize the messaging.</p>
                </div>
                <div>
                  <h4>Artificial intelligence built in</h4>
                  <p>
                    QUAD Solutions allows you to leverage AI (Artificial Intelligence) and machine
                    learning to manage the conversation.
                  </p>
                </div>
              </div>
            </div>
            <div className="gf-split-media">
              <BookingMock />
            </div>
          </div>

          <div className="gf-cta-row">
            <a className="gf-btn" href="#free-trial">
              Get started for free
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="gf-section gf-section--ice">
        <div className="gf-inner">
          <p className="gf-eyebrow">Testimonials</p>
          <h2 className="gf-h2">What our clients say</h2>

          <div className="gf-testimonials">
            {TESTIMONIALS.map((t) => (
              <article className="gf-testimonial" key={t.name}>
                <Stars />
                <blockquote>{t.quote}</blockquote>
                <div className="gf-testimonial-by">
                  <span className="gf-avatar" aria-hidden="true">
                    {t.initials}
                  </span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About the team */}
      <section className="gf-section">
        <div className="gf-inner gf-about">
          <div className="gf-about-card">
            <div className="gf-about-mark" aria-hidden="true">
              QUAD
            </div>
            <h3>The QUAD Team</h3>
            <p>Growth, Creative, Digital &amp; AI — one department, one roof.</p>
            <div className="gf-about-metrics">
              <div>
                <strong>100+</strong>
                <span>Brands served</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Client rating</span>
              </div>
            </div>
          </div>

          <div className="gf-about-body">
            <p className="gf-eyebrow" style={{ textAlign: "left" }}>
              About us
            </p>
            <h2>Meet the QUAD Team</h2>
            <p>
              We&rsquo;re a team of marketers, designers, developers and automation builders who love
              building and learning new things. Somewhere along the way we got deep into automating
              systems for businesses, and we saw first-hand how much time and stress the right setup
              can save.
            </p>
            <p>
              It clicked for us that most businesses don&rsquo;t need to work harder — they just need better
              systems that handle the busy work for them. That&rsquo;s where the QUAD team found its focus:
              building the growth funnel so owners can get back to running the job.
            </p>
            <ul className="gf-about-list">
              {TEAM_POINTS.map((point) => (
                <li key={point}>
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="gf-section gf-section--ice">
        <div className="gf-inner">
          <p className="gf-eyebrow">Who is this for</p>
          <h2 className="gf-h2">We serve the following industries</h2>

          <div className="gf-industries">
            {INDUSTRIES.map((ind) => (
              <div className="gf-industry" key={ind.label}>
                <span aria-hidden="true">{ind.icon}</span>
                {ind.label}
              </div>
            ))}
          </div>

          <div className="gf-cta-row">
            <a className="gf-btn" href="#free-trial">
              Get instant access
            </a>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="gf-section gf-section--navy">
        <div className="gf-inner">
          <p className="gf-eyebrow">Still not sure?</p>
          <h2 className="gf-h2">Satisfaction Guaranteed</h2>
          <div className="gf-guarantee">
            <div className="gf-guarantee-badge">
              <ShieldIcon />
            </div>
            <p>
              We are committed to ensuring your complete satisfaction with our services. If, for any
              reason, you find yourself not fully satisfied with the results we deliver, please reach
              out to us. We are dedicated to resolving your concerns promptly and effectively, offering
              solutions such as additional support, service modifications, or other measures tailored to
              meet your specific needs. Our goal is to ensure that your experience with us not only
              meets but exceeds your expectations, reinforcing our commitment to excellence in serving
              your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Free trial form */}
      <section className="gf-section" id="free-trial">
        <div className="gf-inner gf-inner--narrow">
          <p className="gf-eyebrow">Get started</p>
          <h2 className="gf-h2">Free 7 Day Trial</h2>
          <p className="gf-lede">
            Create your free account and try it for yourself to see how you like it!
          </p>

          <form className="gf-form-card" onSubmit={onSubmit} noValidate={false}>
            <div className="gf-field">
              <label htmlFor="gf-name">Full Name *</label>
              <input id="gf-name" name="name" type="text" autoComplete="name" placeholder="Jane Doe" required />
            </div>
            <div className="gf-field">
              <label htmlFor="gf-email">Email *</label>
              <input id="gf-email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" required />
            </div>
            <div className="gf-field">
              <label htmlFor="gf-phone">Phone *</label>
              <input id="gf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000" required />
            </div>

            <label className="gf-consent">
              <input type="checkbox" name="consent" required />
              <span>
                I agree to terms &amp; conditions provided by the company. By providing my phone number,
                I agree to receive text messages from the business.
              </span>
            </label>

            <button className="gf-btn" type="submit" disabled={submitting}>
              {submitting ? "Sending…" : "Submit"}
            </button>

            {submitted && (
              <p className="gf-form-status gf-form-status--ok">
                You&rsquo;re in — we&rsquo;ll be in touch shortly to set up your free trial.
              </p>
            )}
            {errorMsg && <p className="gf-form-status gf-form-status--err">{errorMsg}</p>}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
