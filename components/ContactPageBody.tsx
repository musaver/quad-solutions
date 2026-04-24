"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { TemplateFooter } from "@/components/TemplateFooter";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

const ARROW_DARK = "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67a9e2599fa438b2b5ca91b6_arrow-top-right.png";
const ARROW_LIGHT = "/assets/figma-case-study-details/icon-arrow-on-dark.svg";
const ICON_MAIL = "/assets/figma-case-study-details/icon-mail.svg";
const ICON_PHONE = "/assets/figma-case-study-details/icon-phone.svg";
const ICON_CHECK = "/assets/figma-case-study-details/icon-check-blue.svg";
const ICON_LINKEDIN = "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67b02256c742c6b7cb28f718_si-linkedin.svg";
const ICON_TWITTER = "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67b02255b31413b811c048ab_si-twitter.svg";

const CHANNELS = [
  {
    label: "Email us",
    value: "hello@awake.studio",
    href: "mailto:hello@awake.studio",
    hint: "Replies within one business day",
    icon: ICON_MAIL,
  },
  {
    label: "Call the studio",
    value: "+92 300 123 4567",
    href: "tel:+923001234567",
    hint: "Mon – Fri, 10:00–18:00 PKT",
    icon: ICON_PHONE,
  },
  {
    label: "Visit us",
    value: "Lahore, Pakistan",
    href: "https://maps.google.com/?q=Lahore,Pakistan",
    hint: "By appointment only",
    icon: ICON_CHECK,
  },
];

const BUDGETS = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
  "Not sure yet",
];

const SERVICES = [
  "Brand Strategy",
  "Brand Identity",
  "UX / UI Design",
  "Web Design & Build",
  "Content & Copy",
  "Marketing",
];

const FAQS = [
  {
    q: "How quickly will I hear back?",
    a: "We reply to every enquiry within one business day — usually the same afternoon if it lands before noon PKT.",
  },
  {
    q: "What should I include in my message?",
    a: "A short overview of your business, what you're trying to achieve, any deadline you're working to, and your rough budget. It helps us point you to the right starting point.",
  },
  {
    q: "Do you sign NDAs before a first call?",
    a: "Happily. Send yours over with your enquiry, or ask for our mutual NDA and we'll return it signed before we meet.",
  },
  {
    q: "I only have a small budget — is it worth reaching out?",
    a: "Yes. We run focused packages for early-stage teams and we'll tell you straight if we aren't the right fit — often with a suggestion of who is.",
  },
];

export function ContactPageBody() {
  const heroRef = useHeroAnimation();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="main qs-contact-page">
      <TemplateNavbar />

      {/* Hero */}
      <header className="qs-contact-hero">
        <div className="qs-inner">
          <div className="qs-contact-eyebrow">
            <span className="qs-contact-eyebrow-bar" />
            <p className="qs-contact-eyebrow-text">Contact</p>
          </div>
          <h1 ref={heroRef} className="qs-contact-title">
            Let&apos;s start a{" "}
            <span className="qs-contact-italic">conversation</span>
          </h1>
          <p className="qs-contact-lede">
            Tell us about your brand, your goals, and what you need. Whether
            you&apos;re exploring an idea or ready to brief a project — we&apos;d
            love to hear from you.
          </p>
          <div className="qs-contact-trust">
            <span className="qs-contact-trust-line" />
            <p className="qs-contact-trust-text">
              Replies within one business day
            </p>
            <span className="qs-contact-trust-line is-right" />
          </div>
        </div>
      </header>

      {/* Channels */}
      <section className="qs-contact-channels">
        <div className="qs-inner">
          <div className="qs-contact-channels-grid">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="qs-contact-channel"
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="qs-contact-channel-icon" aria-hidden="true">
                  <img src={c.icon} alt="" />
                </span>
                <div className="qs-contact-channel-text">
                  <p className="qs-contact-channel-label">{c.label}</p>
                  <p className="qs-contact-channel-value">{c.value}</p>
                  <p className="qs-contact-channel-hint">{c.hint}</p>
                </div>
                <span className="qs-contact-channel-arrow" aria-hidden="true">
                  <img src={ARROW_DARK} alt="" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + aside */}
      <section className="qs-contact-form-section">
        <div className="qs-inner">
          <div className="qs-contact-form-grid">
            <aside className="qs-contact-aside">
              <div className="qs-contact-eyebrow">
                <span className="qs-contact-eyebrow-bar" />
                <p className="qs-contact-eyebrow-text">Tell us about it</p>
              </div>
              <h2 className="qs-contact-aside-title">
                A few details help us{" "}
                <span className="qs-contact-italic">reply well</span>
              </h2>
              <p className="qs-contact-aside-text">
                The more context you share, the more specific our first reply
                can be. None of the fields are required — start anywhere.
              </p>
              <ul className="qs-contact-aside-list">
                <li>
                  <span className="qs-contact-aside-check" aria-hidden="true">
                    <img src={ICON_CHECK} alt="" />
                  </span>
                  Fixed-scope proposals, no hourly billing
                </li>
                <li>
                  <span className="qs-contact-aside-check" aria-hidden="true">
                    <img src={ICON_CHECK} alt="" />
                  </span>
                  Senior team on every project
                </li>
                <li>
                  <span className="qs-contact-aside-check" aria-hidden="true">
                    <img src={ICON_CHECK} alt="" />
                  </span>
                  Honest advice if we&apos;re not the right fit
                </li>
              </ul>
              <div className="qs-contact-aside-socials">
                <p className="qs-contact-aside-socials-label">
                  Or find us on
                </p>
                <div className="qs-contact-aside-socials-row">
                  <a
                    href="https://www.linkedin.com"
                    aria-label="Awake on LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={ICON_LINKEDIN} alt="" />
                  </a>
                  <a
                    href="https://x.com"
                    aria-label="Awake on X"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={ICON_TWITTER} alt="" />
                  </a>
                </div>
              </div>
            </aside>

            <div className="qs-contact-form-card">
              {submitted ? (
                <div className="qs-contact-success" role="status">
                  <span className="qs-contact-success-icon" aria-hidden="true">
                    <img src={ICON_CHECK} alt="" />
                  </span>
                  <h3 className="qs-contact-success-title">
                    Thanks — your message is on its way
                  </h3>
                  <p className="qs-contact-success-text">
                    We&apos;ll reply within one business day. In the meantime,
                    you can explore our recent work.
                  </p>
                  <div className="qs-contact-success-row">
                    <Link href="/case-studies" className="qs-btn-primary">
                      <span>See Our Work</span>
                      <span className="qs-btn-arrow" aria-hidden="true">
                        <img src={ARROW_DARK} alt="" />
                      </span>
                    </Link>
                  </div>
                </div>
              ) : (
                <form className="qs-contact-form" onSubmit={onSubmit} noValidate>
                  <div className="qs-contact-field-row">
                    <label className="qs-contact-field">
                      <span className="qs-contact-field-label">Your name</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Jane Smith"
                        autoComplete="name"
                      />
                    </label>
                    <label className="qs-contact-field">
                      <span className="qs-contact-field-label">Work email</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="jane@company.com"
                        autoComplete="email"
                      />
                    </label>
                  </div>

                  <div className="qs-contact-field-row">
                    <label className="qs-contact-field">
                      <span className="qs-contact-field-label">Company</span>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company name"
                        autoComplete="organization"
                      />
                    </label>
                    <label className="qs-contact-field">
                      <span className="qs-contact-field-label">Website</span>
                      <input
                        type="url"
                        name="website"
                        placeholder="https://"
                        autoComplete="url"
                      />
                    </label>
                  </div>

                  <div className="qs-contact-field">
                    <span className="qs-contact-field-label">
                      What do you need?
                    </span>
                    <div className="qs-contact-chip-row">
                      {SERVICES.map((s) => (
                        <label key={s} className="qs-contact-chip">
                          <input type="checkbox" name="services" value={s} />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="qs-contact-field">
                    <span className="qs-contact-field-label">
                      Estimated budget
                    </span>
                    <div className="qs-contact-chip-row">
                      {BUDGETS.map((b) => (
                        <label key={b} className="qs-contact-chip">
                          <input type="radio" name="budget" value={b} />
                          <span>{b}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <label className="qs-contact-field">
                    <span className="qs-contact-field-label">
                      Tell us about your project
                    </span>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="A short overview — goals, timeline, anything that'd help us reply well."
                    />
                  </label>

                  <div className="qs-contact-form-foot">
                    <p className="qs-contact-form-note">
                      By sending this, you agree to our handling of the details
                      above solely to reply to your enquiry.
                    </p>
                    <button type="submit" className="qs-btn-primary">
                      <span>Send Message</span>
                      <span className="qs-btn-arrow" aria-hidden="true">
                        <img src={ARROW_DARK} alt="" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="qs-contact-faq">
        <div className="qs-inner">
          <div className="qs-contact-faq-head">
            <h2 className="qs-contact-faq-title">
              Before you <span className="qs-contact-italic">hit send</span>
            </h2>
            <p className="qs-contact-faq-sub">
              A few questions we&apos;re often asked at first contact.
            </p>
          </div>
          <div className="qs-contact-faq-grid">
            {FAQS.map((f) => (
              <article key={f.q} className="qs-contact-faq-card">
                <h3 className="qs-contact-faq-q">{f.q}</h3>
                <p className="qs-contact-faq-a">{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="qs-contact-cta">
        <div className="qs-inner">
          <div className="qs-contact-cta-card">
            <h2 className="qs-contact-cta-title">
              Prefer a{" "}
              <span className="qs-contact-italic">quick call?</span>
            </h2>
            <p className="qs-contact-cta-sub">
              Book a 45-minute discovery call and we&apos;ll walk through your
              brief together.
            </p>
            <div className="qs-contact-cta-row">
              <a href="mailto:hello@awake.studio" className="qs-btn-light">
                <span>Email the Studio</span>
                <span className="qs-btn-arrow" aria-hidden="true">
                  <img src={ARROW_LIGHT} alt="" />
                </span>
              </a>
              <Link href="/services" className="qs-btn-ghost">
                <span>Explore Services</span>
                <span className="qs-btn-arrow" aria-hidden="true">
                  <img src={ARROW_LIGHT} alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TemplateFooter />
    </div>
  );
}
