"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ServiceArrowIcon } from "@/components/ServiceArrowIcon";

const SERVICES = [
  "Brand Strategy",
  "Brand Identity",
  "UX / UI Design",
  "Web Design & Build",
  "Content & Copy",
  "Marketing",
];

const BUDGETS = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
  "Not sure yet",
];

type CTASectionProps = {
  className?: string;
};

export function CTASection({ className = "qs-svc-final-cta" }: CTASectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const continueButtonRef = useRef<HTMLButtonElement>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!modalOpen) return;
    const triggerButton = continueButtonRef.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => {
      modalCloseRef.current?.focus();
    }, 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(focusTimer);
      triggerButton?.focus();
    };
  }, [modalOpen]);

  const onTeaserSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setModalOpen(true);
  };

  const onDetailsSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => setModalOpen(false);
  const editContact = () => setModalOpen(false);

  return (
    <section className={className}>
      <div className="qs-inner">
        <div className="qs-csd-final-card">
          <div className="qs-csd-final-glow qs-csd-final-glow--1" aria-hidden />
          <div className="qs-csd-final-glow qs-csd-final-glow--2" aria-hidden />
          <div className="qs-csd-final-glow qs-csd-final-glow--3" aria-hidden />
          <div className="qs-csd-final-left">
            <div className="qs-csd-final-kicker">
              <span className="qs-csd-final-kicker-bar" aria-hidden />
              <span>Start a project</span>
            </div>
            <h2 className="qs-csd-final-title">
              Let&apos;s build something
              <br />
              <span className="qs-csd-final-title-serif qs-csd-serif">
                worth remembering.
              </span>
            </h2>
            <p className="qs-csd-final-lede">
              Tell us about your brand challenge. We&apos;ll respond within 4
              hours with a clear path forward — no fluff, no hard sell.
            </p>
            <div className="qs-csd-final-stats">
              <div className="qs-csd-final-stat">
                <p className="qs-csd-final-stat-num">150+</p>
                <p className="qs-csd-final-stat-label">Brands launched</p>
              </div>
              <span className="qs-csd-final-stat-sep" aria-hidden />
              <div className="qs-csd-final-stat">
                <p className="qs-csd-final-stat-num">94%</p>
                <p className="qs-csd-final-stat-label">Client retention</p>
              </div>
              <span className="qs-csd-final-stat-sep" aria-hidden />
              <div className="qs-csd-final-stat">
                <p className="qs-csd-final-stat-num">3.2×</p>
                <p className="qs-csd-final-stat-label">Avg. growth</p>
              </div>
            </div>
            <div className="qs-csd-final-contact-label">Prefer to reach out directly?</div>
            <div className="qs-csd-final-pills">
              <a href="tel:+13074272883" className="qs-csd-final-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                +1 (307) 427-2883
              </a>
              <a href="mailto:hello@quadsolutions.ai" className="qs-csd-final-pill">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden><path d="M2.667 4h10.666C14.253 4 15 4.747 15 5.667v6.666C15 13.253 14.253 14 13.333 14H2.667C1.747 14 1 13.253 1 12.333V5.667C1 4.747 1.747 4 2.667 4Z" stroke="currentColor" strokeWidth="1.2"/><path d="m1 5.667 7 4.666 7-4.666" stroke="currentColor" strokeWidth="1.2"/></svg>
                hello@quadsolutions.ai
              </a>
            </div>
          </div>
          <div className="qs-csd-final-form-wrap">
            <div className="qs-csd-final-teaser">
              <div className="qs-csd-final-form-head">
                <h3 className="qs-csd-final-form-title">Start your project</h3>
                <p className="qs-csd-final-form-sub">
                  Free consultation · No commitment required
                </p>
              </div>
              <form className="qs-csd-form" onSubmit={onTeaserSubmit} noValidate>
                <label className="qs-csd-field">
                  <span className="qs-csd-field-label">Your name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Smith"
                    className="qs-csd-input"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label className="qs-csd-field qs-csd-field--full">
                  <span className="qs-csd-field-label">Work email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@company.com"
                    className="qs-csd-input"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <label className="qs-csd-field qs-csd-field--full">
                  <span className="qs-csd-field-label">
                    Phone <span className="qs-csd-field-optional">(optional)</span>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className="qs-csd-input"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                <button
                  ref={continueButtonRef}
                  type="submit"
                  className="qs-csd-form-submit"
                  disabled={!name.trim() || !email.trim()}
                >
                  <span>Continue</span>
                  <span className="qs-csd-form-submit-icon" aria-hidden>
                    <ServiceArrowIcon variant="on-light" />
                  </span>
                </button>
              </form>
              <p className="qs-csd-form-foot">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><rect x="1" y="5" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M3.5 5V3.5a2.5 2.5 0 0 1 5 0V5" stroke="currentColor" strokeWidth="1.2"/></svg>
                100% confidential · No spam
              </p>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="qs-cta-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="qs-cta-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="qs-cta-modal-card">
            <button
              ref={modalCloseRef}
              type="button"
              className="qs-cta-modal-close"
              aria-label="Close"
              onClick={closeModal}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            {submitted ? (
              <div className="qs-csd-form-success" role="status">
                <h4 className="qs-csd-form-success-title">
                  Thanks — your message is on its way
                </h4>
                <p className="qs-csd-form-success-text">
                  We&apos;ll reply within 4 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="qs-cta-modal-head">
                  <h3 id="qs-cta-modal-title" className="qs-cta-modal-title">
                    Tell us a bit more
                  </h3>
                  <p className="qs-cta-modal-sub">
                    The more we know, the sharper our reply.
                  </p>
                </div>
                <div className="qs-cta-modal-summary">
                  <div>
                    <span className="qs-cta-modal-summary-label">From</span>
                    <span className="qs-cta-modal-summary-value">
                      {name} · {email}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="qs-cta-modal-summary-edit"
                    onClick={editContact}
                  >
                    Edit
                  </button>
                </div>
                <form className="qs-csd-form" onSubmit={onDetailsSubmit} noValidate>
                  <input type="hidden" name="name" value={name} />
                  <input type="hidden" name="email" value={email} />
                  <input type="hidden" name="phone" value={phone} />
                  <div className="qs-csd-form-row">
                    <label className="qs-csd-field">
                      <span className="qs-csd-field-label">Company</span>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company name"
                        className="qs-csd-input"
                        autoComplete="organization"
                      />
                    </label>
                    <label className="qs-csd-field">
                      <span className="qs-csd-field-label">Website</span>
                      <input
                        type="url"
                        name="website"
                        placeholder="https://"
                        className="qs-csd-input"
                        autoComplete="url"
                      />
                    </label>
                  </div>
                  <div className="qs-csd-field qs-csd-field--full">
                    <span className="qs-csd-field-label">What do you need?</span>
                    <div className="qs-csd-chip-row">
                      {SERVICES.map((s) => (
                        <label key={s} className="qs-csd-chip">
                          <input type="checkbox" name="services" value={s} />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="qs-csd-field qs-csd-field--full">
                    <span className="qs-csd-field-label">Estimated budget</span>
                    <div className="qs-csd-chip-row">
                      {BUDGETS.map((b) => (
                        <label key={b} className="qs-csd-chip">
                          <input type="radio" name="budget" value={b} />
                          <span>{b}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <label className="qs-csd-field qs-csd-field--full">
                    <span className="qs-csd-field-label">
                      Tell us about your project
                    </span>
                    <textarea
                      name="message"
                      placeholder="What are you looking to achieve? Any challenges you're facing?"
                      className="qs-csd-textarea qs-csd-textarea--compact"
                      rows={2}
                    />
                  </label>
                  <button type="submit" className="qs-csd-form-submit">
                    <span>Talk to a Specialist</span>
                    <span className="qs-csd-form-submit-icon" aria-hidden>
                      <ServiceArrowIcon variant="on-light" />
                    </span>
                  </button>
                </form>
                <p className="qs-csd-form-foot">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><rect x="1" y="5" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M3.5 5V3.5a2.5 2.5 0 0 1 5 0V5" stroke="currentColor" strokeWidth="1.2"/></svg>
                  We reply within 4 hours · 100% confidential
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
