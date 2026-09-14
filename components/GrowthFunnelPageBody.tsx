"use client";

import { useRef, useState } from "react";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { Footer } from "@/components/Footer";
import { GrowthFunnelNicheCards } from "@/components/GrowthFunnelNicheCards";
import {
  CheckIcon,
  CrossIcon,
  MailIcon,
  PhoneIcon,
  PlayIcon,
  ShieldIcon,
  Stars,
} from "@/components/GrowthFunnelIcons";
import {
  GF_CONTACT_EMAIL as CONTACT_EMAIL,
  GF_CONTACT_PHONE_HREF as CONTACT_PHONE_HREF,
  GF_CONTACT_PHONE_LABEL as CONTACT_PHONE_LABEL,
  GrowthFunnelTrialForm,
} from "@/components/GrowthFunnelTrialForm";

const VIDEO_SRC = "/assets/video/growth-funnel.mp4";
const VIDEO_POSTER = "/assets/video/growth-funnel-poster.jpg";

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
    body: "No more missed leads! Automatically text & email your leads as soon as they come in. Speed to lead is everything, and nobody on your team has to “remember” to call back.",
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
    role: "Sales Director, Northline Homes",
    initials: "DR",
  },
  {
    quote:
      "Setup took a week and the consultation calendar hasn't had a quiet day since. QUAD Solutions replaced three separate tools and a whole lot of front desk admin.",
    name: "Priya Sharma",
    role: "Clinic Director, Lumen Aesthetics",
    initials: "PS",
  },
  {
    quote:
      "Our Google reviews climbed steadily for months without us asking a single customer manually. That alone changed how many calls we get.",
    name: "Marcus Bell",
    role: "Owner, Bluewater Renovations",
    initials: "MB",
  },
];

const TEAM_POINTS = [
  "Helped owners save time and grow",
  "100+ brands served worldwide",
  "Built affordable systems for growing businesses",
  "One team for growth, creative, web & AI",
];

const INDUSTRIES = [
  { icon: "🏗️", label: "Construction & Building" },
  { icon: "🏠", label: "Home Services" },
  { icon: "🏥", label: "Healthcare & Clinics" },
  { icon: "💆", label: "Wellness & Aesthetics" },
  { icon: "🎓", label: "Education & Schools" },
  { icon: "🏭", label: "Manufacturing & B2B" },
  { icon: "🚗", label: "Automotive" },
  { icon: "🏡", label: "Real Estate" },
  { icon: "💼", label: "Professional Services" },
  { icon: "💪", label: "Fitness & Studios" },
  { icon: "⚖️", label: "Legal & Financial" },
  { icon: "🏪", label: "Local Businesses" },
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
          <p className="gf-chat-bubble">Hi, saw your ad — can you send me a price for the full job?</p>
        </div>
        <div className="gf-chat gf-chat--out">
          <span className="gf-chat-avatar">QS</span>
          <p className="gf-chat-bubble">
            Hi Jordan! Happy to help. Are you free Thursday at 10am for a free consultation?
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

  const playVideo = () => {
    const el = videoRef.current;
    if (!el) return;
    setPlaying(true);
    void el.play();
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
            We Help Businesses <span>Thrive</span>
          </h1>
          <p className="gf-hero-sub">
            Automate your lead generation, followup &amp; appointment booking today — whatever
            industry you&rsquo;re in.
          </p>
          <div className="gf-hero-ctas">
            <a className="gf-btn" href="#free-trial">
              Get started for free
            </a>
            <a className="gf-btn gf-btn--ghost" href="#niches">
              Find your industry
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

      {/* Industry funnels */}
      <GrowthFunnelNicheCards />

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
          <article className="gf-specialist">
            <div className="gf-specialist-media">
              <img
                className="gf-specialist-photo"
                src="/assets/team/mustafa-specialist.jpg"
                alt="Mustafa Hassan"
                width={1000}
                height={1262}
                loading="lazy"
              />
              <span className="gf-specialist-tag">QUAD Growth Team</span>

              <div className="gf-specialist-overlay">
                <div className="gf-specialist-name">
                  <h3>Mustafa Hassan</h3>
                  <p className="gf-specialist-role">Digital Marketing Specialist</p>
                </div>
                <p className="gf-specialist-bio">
                  Drives data-led campaigns that turn audiences into loyal customers.
                </p>
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
            </div>
          </article>

          <div className="gf-about-body">
            <p className="gf-eyebrow" style={{ textAlign: "left" }}>
              About us
            </p>
            <h2>Meet the Growth Marketing Specialist</h2>
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

          <GrowthFunnelTrialForm
            source="growth-funnel"
            pixelFormName="Growth Funnel — Free Trial"
            message="Requested the 7-day free trial from the Growth Funnel page."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
