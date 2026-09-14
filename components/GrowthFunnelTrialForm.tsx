"use client";

import { useState, type FormEvent } from "react";
import { leadParams, trackPixelEvent } from "@/lib/metaPixel";

export const GF_CONTACT_EMAIL = "support@quadsolutions.ai";
export const GF_CONTACT_PHONE_LABEL = "+1 (307) 427-2883";
export const GF_CONTACT_PHONE_HREF = "tel:+13074272883";

type Props = {
  /** Lands on the lead record so we can tell the generic page from each niche page. */
  source: string;
  /** Shown in Meta Events Manager as `content_name`. */
  pixelFormName: string;
  /** Free-text note attached to the lead. */
  message: string;
  /** Unique per page instance so the label/input `id` pairs stay valid. */
  idPrefix?: string;
  submitLabel?: string;
};

export function GrowthFunnelTrialForm({
  source,
  pixelFormName,
  message,
  idPrefix = "gf",
  submitLabel = "Submit",
}: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
        body: JSON.stringify({ source, name, email, phone, message }),
      });

      if (!res.ok) throw new Error("request failed");

      trackPixelEvent("Lead", leadParams({ formName: pixelFormName }));
      setSubmitted(true);
      formEl.reset();
    } catch {
      setErrorMsg(
        "Something went wrong. Please email us at " + GF_CONTACT_EMAIL + " and we'll set you up.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="gf-form-card" onSubmit={onSubmit}>
      <div className="gf-field">
        <label htmlFor={`${idPrefix}-name`}>Full Name *</label>
        <input
          id={`${idPrefix}-name`}
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Doe"
          required
        />
      </div>
      <div className="gf-field">
        <label htmlFor={`${idPrefix}-email`}>Email *</label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@company.com"
          required
        />
      </div>
      <div className="gf-field">
        <label htmlFor={`${idPrefix}-phone`}>Phone *</label>
        <input
          id={`${idPrefix}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+1 (555) 000-0000"
          required
        />
      </div>

      <label className="gf-consent">
        <input type="checkbox" name="consent" required />
        <span>
          I agree to terms &amp; conditions provided by the company. By providing my phone number, I
          agree to receive text messages from the business.
        </span>
      </label>

      <button className="gf-btn" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : submitLabel}
      </button>

      {submitted && (
        <p className="gf-form-status gf-form-status--ok">
          You&rsquo;re in — we&rsquo;ll be in touch shortly to set up your free trial.
        </p>
      )}
      {errorMsg && <p className="gf-form-status gf-form-status--err">{errorMsg}</p>}
    </form>
  );
}
