import Link from "next/link";
import type { CSSProperties } from "react";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { Footer } from "@/components/Footer";
import {
  CheckIcon,
  CrossIcon,
  MailIcon,
  PhoneIcon,
  ShieldIcon,
  Stars,
} from "@/components/GrowthFunnelIcons";
import {
  GF_CONTACT_EMAIL,
  GF_CONTACT_PHONE_HREF,
  GF_CONTACT_PHONE_LABEL,
  GrowthFunnelTrialForm,
} from "@/components/GrowthFunnelTrialForm";
import { NICHE_FUNNELS, type NicheFunnel } from "@/lib/growthFunnelNiches";

/**
 * One niche variant of the Growth Funnel landing page. Everything is driven by a
 * `NicheFunnel` record, and the markup reuses the `gf-*` styles from the main page
 * so the two stay visually identical as that stylesheet evolves.
 */
export function NicheFunnelPageBody({ niche }: { niche: NicheFunnel }) {
  const others = NICHE_FUNNELS.filter((n) => n.slug !== niche.slug);
  const accentVars = {
    "--gf-niche-a": niche.accent[0],
    "--gf-niche-b": niche.accent[1],
  } as CSSProperties;

  return (
    <div className="gf-page gf-page--niche" style={accentVars}>
      <TemplateNavbar />

      {/* Contact strip */}
      <div className="gf-topbar">
        <div className="gf-inner gf-topbar-inner">
          <a href={`mailto:${GF_CONTACT_EMAIL}`}>
            <MailIcon />
            {GF_CONTACT_EMAIL}
          </a>
          <a href={GF_CONTACT_PHONE_HREF}>
            <PhoneIcon />
            {GF_CONTACT_PHONE_LABEL}
          </a>
        </div>
      </div>

      {/* Hero */}
      <header className="gf-hero">
        <div className="gf-inner">
          <nav className="gf-crumbs" aria-label="Breadcrumb">
            <Link href="/growth-funnel">Growth Funnel</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{niche.name}</span>
          </nav>

          <p className="gf-hero-kicker gf-hero-kicker--niche">
            <span aria-hidden="true">{niche.icon}</span>
            {niche.heroKicker}
          </p>
          <h1 className="gf-hero-title">
            {niche.heroTitle} <span>{niche.heroHighlight}</span>
          </h1>
          <p className="gf-hero-sub">{niche.heroSub}</p>
          <div className="gf-hero-ctas">
            <a className="gf-btn" href="#free-trial">
              Get started for free
            </a>
            <a className="gf-btn gf-btn--ghost" href="#what-you-get">
              See what&rsquo;s included
            </a>
          </div>
          <p className="gf-hero-note">7-day free trial · No contracts · Cancel anytime</p>

          <div className="gf-nstats">
            {niche.stats.map((stat) => (
              <div className="gf-nstat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Problem / solution */}
      <section className="gf-section gf-section--ice">
        <div className="gf-inner">
          <p className="gf-eyebrow">The difference</p>
          <h2 className="gf-h2">What changes on day one</h2>

          <div className="gf-compare">
            <div className="gf-compare-col">
              <div className="gf-compare-head">
                <h3>How it runs today</h3>
                <span className="gf-compare-tag">Without a funnel</span>
              </div>
              <ul className="gf-compare-list gf-compare-list--bad">
                {niche.problems.map((item) => (
                  <li key={item}>
                    <CrossIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="gf-compare-col gf-compare-col--win">
              <div className="gf-compare-head">
                <h3>With QUAD Solutions</h3>
                <span className="gf-compare-tag gf-compare-tag--win">Your growth funnel</span>
              </div>
              <ul className="gf-compare-list gf-compare-list--good">
                {niche.solutions.map((item) => (
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

      {/* Features */}
      <section className="gf-section" id="what-you-get">
        <div className="gf-inner">
          <p className="gf-eyebrow">What you get</p>
          <h2 className="gf-h2">Your {niche.name.toLowerCase()} growth funnel</h2>
          <p className="gf-lede">
            One login replaces the website builder, the CRM, the inbox, the calendar and the review
            software you&rsquo;re paying for today — set up around how your business actually sells.
          </p>

          <div className="gf-feature-grid">
            {niche.features.map((f) => (
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

      {/* How we set it up */}
      <section className="gf-section gf-section--navy">
        <div className="gf-inner">
          <p className="gf-eyebrow">How it works</p>
          <h2 className="gf-h2">Live in days, not quarters</h2>

          <div className="gf-pillars">
            {niche.steps.map((step, i) => (
              <article className="gf-pillar" key={step.title}>
                <span className="gf-pillar-num">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
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

      {/* Testimonial */}
      <section className="gf-section gf-section--ice">
        <div className="gf-inner gf-inner--narrow">
          <p className="gf-eyebrow">Testimonial</p>
          <h2 className="gf-h2">From an operator like you</h2>

          <article className="gf-testimonial gf-testimonial--solo">
            <Stars />
            <blockquote>{niche.testimonial.quote}</blockquote>
            <div className="gf-testimonial-by">
              <span className="gf-avatar" aria-hidden="true">
                {niche.testimonial.initials}
              </span>
              <div>
                <strong>{niche.testimonial.name}</strong>
                <span>{niche.testimonial.role}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Specialties */}
      <section className="gf-section">
        <div className="gf-inner">
          <p className="gf-eyebrow">Who is this for</p>
          <h2 className="gf-h2">We build this for</h2>

          <div className="gf-industries">
            {niche.specialties.map((item) => (
              <div className="gf-industry" key={item}>
                <span aria-hidden="true">{niche.icon}</span>
                {item}
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
              out to us. We are dedicated to resolving your concerns promptly and effectively,
              offering solutions such as additional support, service modifications, or other measures
              tailored to meet your specific needs. Our goal is to ensure that your experience with us
              not only meets but exceeds your expectations.
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
            Create your free account and try it for yourself to see how you like it.
          </p>

          <GrowthFunnelTrialForm
            source={`growth-funnel-${niche.slug}`}
            pixelFormName={`Growth Funnel — ${niche.name}`}
            message={`Requested the 7-day free trial from the ${niche.name} Growth Funnel page.`}
            idPrefix={`gf-${niche.slug}`}
          />
        </div>
      </section>

      {/* Other niches */}
      <section className="gf-section gf-section--ice">
        <div className="gf-inner">
          <p className="gf-eyebrow">Other industries</p>
          <h2 className="gf-h2">Explore another funnel</h2>

          <div className="gf-niche-links">
            {others.map((other) => (
              <Link
                className="gf-niche-link"
                key={other.slug}
                href={`/growth-funnel/${other.slug}`}
                style={
                  {
                    "--gf-niche-a": other.accent[0],
                    "--gf-niche-b": other.accent[1],
                  } as CSSProperties
                }
              >
                <span aria-hidden="true">{other.icon}</span>
                {other.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
