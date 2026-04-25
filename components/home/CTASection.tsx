import { ServiceArrowIcon } from "@/components/ServiceArrowIcon";

export function CTASection() {
  return (
    <section className="qs-svc-final-cta">
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
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden><path d="M14.6 11.267c0 .24-.053.474-.166.7a2.74 2.74 0 0 1-.454.633c-.306.34-.64.514-1 .52-.254 0-.527-.067-.82-.206a8.42 8.42 0 0 1-.82-.467 13.28 13.28 0 0 1-.82-.633 13.5 13.5 0 0 1-.787-.754 13.04 13.04 0 0 1-.633-.82 8.79 8.79 0 0 1-.467-.82c-.14-.293-.206-.567-.206-.82 0-.247.053-.48.16-.7.106-.22.266-.42.493-.6.274-.213.567-.32.874-.32.12 0 .24.027.347.08.113.053.213.133.293.247l1.014 1.427c.08.107.14.207.18.3.04.094.063.18.063.26 0 .1-.027.2-.08.293a1.3 1.3 0 0 1-.22.294l-.3.313a.21.21 0 0 0-.06.153c0 .033.006.06.013.094.013.033.027.06.04.086.08.147.213.34.4.573.193.234.4.474.62.707.227.233.447.44.674.633.233.187.426.314.58.394.02.013.046.027.073.04.034.013.067.02.107.02a.22.22 0 0 0 .16-.067l.3-.293c.1-.1.2-.174.294-.22a.536.536 0 0 1 .293-.08c.08 0 .166.02.26.067.093.046.193.106.3.186l1.44 1.027c.114.08.194.173.247.286.046.114.073.227.073.354Z" stroke="currentColor" strokeWidth="1.2"/></svg>
                +1 (307) 427-2883
              </a>
              <a href="mailto:hello@quadsolutions.ai" className="qs-csd-final-pill">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden><path d="M2.667 4h10.666C14.253 4 15 4.747 15 5.667v6.666C15 13.253 14.253 14 13.333 14H2.667C1.747 14 1 13.253 1 12.333V5.667C1 4.747 1.747 4 2.667 4Z" stroke="currentColor" strokeWidth="1.2"/><path d="m1 5.667 7 4.666 7-4.666" stroke="currentColor" strokeWidth="1.2"/></svg>
                hello@quadsolutions.ai
              </a>
            </div>
          </div>
          <div className="qs-csd-final-form-wrap">
            <div className="qs-csd-final-form">
              <div className="qs-csd-final-form-head">
                <h3 className="qs-csd-final-form-title">Start your project</h3>
                <p className="qs-csd-final-form-sub">
                  Free consultation · No commitment required
                </p>
              </div>
              <form className="qs-csd-form" action="/contact" method="get">
                <div className="qs-csd-form-row">
                  <label className="qs-csd-field">
                    <span className="qs-csd-field-label">Your name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Sara Ahmed"
                      className="qs-csd-input"
                      autoComplete="name"
                    />
                  </label>
                  <label className="qs-csd-field">
                    <span className="qs-csd-field-label">Company</span>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your company"
                      className="qs-csd-input"
                    />
                  </label>
                </div>
                <label className="qs-csd-field qs-csd-field--full">
                  <span className="qs-csd-field-label">Email address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className="qs-csd-input"
                    autoComplete="email"
                  />
                </label>
                <label className="qs-csd-field qs-csd-field--full">
                  <span className="qs-csd-field-label">
                    Tell us about your project
                  </span>
                  <textarea
                    name="message"
                    placeholder="What are you looking to achieve? Any challenges you're facing?"
                    className="qs-csd-textarea"
                    rows={4}
                  />
                </label>
                <button type="submit" className="qs-csd-form-submit">
                  <span>Send message</span>
                  <span className="qs-csd-form-submit-icon" aria-hidden>
                    <ServiceArrowIcon variant="on-light" />
                  </span>
                </button>
              </form>
              <p className="qs-csd-form-foot">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><rect x="1" y="5" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M3.5 5V3.5a2.5 2.5 0 0 1 5 0V5" stroke="currentColor" strokeWidth="1.2"/></svg>
                We reply within 4 hours · 100% confidential
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
