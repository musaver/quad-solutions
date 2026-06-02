"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Footer } from "@/components/Footer";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { ServiceArrowIcon } from "@/components/ServiceArrowIcon";
import { CTASection } from "@/components/home";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

type VideoFilter = "all" | "longform" | "shorts";
type VideoFormat = "horizontal" | "vertical";

type CreatorVideo = {
  id: string;
  title: string;
  meta: string;
  format: VideoFormat;
  category: Exclude<VideoFilter, "all">;
  tags: string[];
  /** Drop your file at this path. Leave undefined to render the placeholder tile. */
  src?: string;
  /** Optional poster image — first frame is used otherwise. */
  poster?: string;
  /** Long-form blurb shown below the tags. Optional. */
  description?: string;
  /** Pin to the top of the grid and show a "Featured" badge. */
  featured?: boolean;
};

const VIDEOS: CreatorVideo[] = [
  {
    id: "quad-brand-film",
    title: "Agency chaos to cloud nine",
    meta: "QUAD brand film · Vertical short-form",
    format: "vertical",
    category: "shorts",
    tags: ["Brand film", "AI cinematic", "Kinetic type", "Sound design"],
    src: "/assets/creator-videos/quad-brand-film.mp4",
    poster: "/assets/creator-videos/posters/quad-brand-film.jpg",
    featured: true,
    description:
      "A brand film we wrote, designed and produced end to end — the story of every founder buried under an agency that overpromised and under-delivered. A desk marooned in a sandstorm, a paper bag for a face, then the turn: QUAD steps in to create, market and automate. AI-driven cinematics, kinetic typography, sound design and grade carry the arc from chaos to calm — and land the founder exactly where they wanted to be. Relaxed. Just not on clouds. Concept to final cut: full-scale production, not an edit.",
  },
  {
    id: "umrah-in-sixty-seconds",
    title: "Umrah — in sixty seconds",
    meta: "Faith & travel · Vertical short-form",
    format: "vertical",
    category: "shorts",
    tags: ["Umrah", "Cinematic", "Subtitled", "Color grade"],
    src: "/assets/creator-videos/sixty-seconds.mp4",
    poster: "/assets/creator-videos/posters/sixty-seconds.jpg",
    featured: true,
    description:
      "Sixty seconds. Four moments. One journey. From the quiet of niyyah before the flight, to the first sight of the Kaaba, to the closing rite of tahallul — a cinematic Umrah explainer cut for the platforms that scroll the fastest. Subtitled for sound-off viewing, paced for the hook, and graded for the warmth Mecca already has. Faith content that respects the subject and still earns the stop.",
  },
  {
    id: "two-power-centers",
    title: "Two parallel power centers",
    meta: "Geopolitics explainer · Produced for TAM",
    format: "vertical",
    category: "shorts",
    tags: ["Explainer", "Maps", "Subtitled", "Editorial"],
    src: "/assets/creator-videos/story-led-tiktok.mp4",
    poster: "/assets/creator-videos/posters/story-led-tiktok.jpg",
    description:
      "A 79-second geopolitical brief for The Awakening Media — the kind of editorial short that turns a tangled news cycle into a story the scroll actually finishes. Map animations carry the geography, captions carry the argument, and the cut holds a steady rhythm that makes a complex thesis feel inevitable. Short-form built like long-form: research-led, frame-by-frame.",
  },
  {
    id: "tam-documentary",
    title: "Why Syria is different",
    meta: "Long-form documentary · Produced for TAM",
    format: "horizontal",
    category: "longform",
    tags: ["Documentary", "Archival", "Motion graphics", "Sound design"],
    src: "/assets/creator-videos/tam-documentary.mp4",
    poster: "/assets/creator-videos/posters/tam-documentary.jpg",
    description:
      "A long-form documentary explainer produced for The Awakening Media — the history and present of Syria, built for YouTube retention. A studio talking-head cut against black-and-white archival footage, with designed timeline graphics and animated maps, scoring five minutes of dense geopolitics so it never loses the viewer. Research-led storytelling — structure, b-roll, motion and sound, delivered end to end. The kind of editorial long-form that makes a complicated subject land clearly and earns the audience's trust.",
  },
];

const FILTERS: { id: VideoFilter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "longform", label: "Long-form" },
  { id: "shorts", label: "Short-form" },
];

const TAM_INSTAGRAM = "https://www.instagram.com/the.awakeningmedia/";

const SERVICES = [
  {
    title: "End-to-end production",
    body: "Concept, script, shoot, motion, sound design, colour and delivery — the complete pipeline. Brand films and creator content built from a blank page, not just trimmed from your footage.",
    tag: "Concept · Shoot · Post",
  },
  {
    title: "Short-form & social",
    body: "Reels, TikToks and Shorts engineered for the first-second hook and built to travel — captions, sound and pacing tuned for reach on every platform at once.",
    tag: "Reels · TikTok · Shorts",
  },
  {
    title: "Long-form & brand films",
    body: "YouTube features, documentaries and brand stories with story-first structure, motion graphics, sound design and grade — the kind of polish that earns attention and trust.",
    tag: "YouTube · Brand films",
  },
  {
    title: "Ads & UGC that convert",
    body: "Paid-ready creative for business owners and DTC brands — scripting, on-camera talent, hook testing and platform-native masters engineered for ROAS, not vanity metrics.",
    tag: "Ads · UGC · ROAS",
  },
];

const HERO_PIPELINE = [
  "Concept",
  "Script",
  "Shoot",
  "Motion",
  "Sound",
  "Colour",
  "Delivery",
];

const PILLARS = [
  {
    title: "One roof, zero handoffs",
    body: "Concept, shoot, post and delivery handled by a single in-house team. No agency relay, no freelancer chain — nothing lost in the gaps between vendors.",
  },
  {
    title: "Story before software",
    body: "We start with research and narrative, not a template. The edit serves the story — every cut, caption and frame earns its place.",
  },
  {
    title: "AI-accelerated, human-led",
    body: "We use AI to move faster and reach further — cinematics, variations, scale — while people make every creative call that matters.",
  },
  {
    title: "Engineered to perform",
    body: "Built for the hook, the retention curve and the conversion — not just to look good. Creative judged on outcomes, not awards.",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Discover",
    sub: "Your goal, audience and offer — mapped to the angle that actually wins.",
  },
  {
    num: "02",
    title: "Concept & script",
    sub: "Story, hooks and shot list written before we roll a single frame.",
  },
  {
    num: "03",
    title: "Produce",
    sub: "Shoot, AI cinematics, motion, sound and grade — built start to finish.",
  },
  {
    num: "04",
    title: "Deliver & scale",
    sub: "Platform-native masters for every channel, ready to post and repeat.",
  },
];

function PlayIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden
    >
      <path d="M7 5l11 6-11 6V5z" fill="currentColor" />
    </svg>
  );
}

function VideoTile({ video }: { video: CreatorVideo }) {
  const hasVideo = Boolean(video.src);
  const aspectClass =
    video.format === "vertical"
      ? "qs-fc-video-tile--vertical"
      : "qs-fc-video-tile--horizontal";

  const className = [
    "qs-fc-video-tile",
    aspectClass,
    video.featured ? "qs-fc-video-tile--featured" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={className}>
      <div className="qs-fc-video-frame">
        {hasVideo ? (
          <video
            className="qs-fc-video-el"
            src={video.src}
            poster={video.poster}
            controls
            preload="metadata"
            playsInline
          />
        ) : (
          <div className="qs-fc-video-placeholder" aria-label="Coming soon">
            <span className="qs-fc-video-play" aria-hidden>
              <PlayIcon />
            </span>
            <span className="qs-fc-video-format-badge">
              {video.format === "vertical" ? "9:16" : "16:9"}
            </span>
          </div>
        )}
        {video.featured ? (
          <span className="qs-fc-video-featured-badge">Featured</span>
        ) : null}
      </div>
      <div className="qs-fc-video-body">
        <p className="qs-fc-video-title">{video.title}</p>
        <p className="qs-fc-video-meta">{video.meta}</p>
        <div className="qs-fc-video-tags">
          {video.tags.map((t) => (
            <span key={t} className="qs-fc-video-tag">
              {t}
            </span>
          ))}
        </div>
        {video.description ? (
          <p className="qs-fc-video-description">{video.description}</p>
        ) : null}
      </div>
    </article>
  );
}

export function QuadContentPageBody() {
  const [filter, setFilter] = useState<VideoFilter>("all");
  const heroRef = useHeroAnimation();

  const visible = useMemo(() => {
    const list =
      filter === "all" ? VIDEOS : VIDEOS.filter((v) => v.category === filter);
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [filter]);

  return (
    <div className="main qs-fc-page">
      <div className="gradient-background" />
      <TemplateNavbar />

      <header className="qs-fc-hero">
        <div className="qs-inner">
          <div className="qs-fc-eyebrow-wrap">
            <span className="qs-fc-eyebrow">
              QUAD Content · Creative Production Studio
            </span>
          </div>
          <h1 ref={heroRef} className="qs-fc-hero-title">
            You bring the idea.
            <br />
            We <span className="qs-fc-hero-italic">produce</span> the rest.
          </h1>
          <p className="qs-fc-hero-lede">
            We don&rsquo;t just polish footage — we build the whole production.
            Concept and script through shoot, motion, sound design, colour and
            final delivery, for creators growing an audience and brands selling
            to one. One studio. The complete pipeline.
          </p>
          <ul className="qs-fc-hero-pipeline" aria-label="Our production pipeline">
            {HERO_PIPELINE.map((step, i) => (
              <li key={step} className="qs-fc-hero-pipeline-item">
                <span>{step}</span>
                {i < HERO_PIPELINE.length - 1 ? (
                  <span className="qs-fc-hero-pipeline-sep" aria-hidden>
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="qs-fc-hero-ctas">
            <Link href="/contact" className="qs-fc-btn-primary w-inline-block">
              <span>Book a production call</span>
              <span className="qs-fc-btn-icon" aria-hidden>
                <ServiceArrowIcon variant="on-dark" />
              </span>
            </Link>
            <a href="#qs-fc-work" className="qs-fc-btn-secondary w-inline-block">
              See the work
            </a>
          </div>
        </div>
      </header>

      <section className="qs-fc-services-section">
        <div className="qs-inner">
          <div className="qs-fc-section-head">
            <h2 className="qs-fc-section-title home-heading-h2">
              What we do for{" "}
              <span className="span-txt">creators &amp; business owners</span>
            </h2>
            <p className="qs-fc-section-sub">
              One creative production studio for both sides of the camera — the
              creators building an audience and the brands selling to one.
              Full-scale productions, not just edits.
            </p>
          </div>
          <div className="qs-fc-services-grid">
            {SERVICES.map((s) => (
              <article key={s.title} className="qs-fc-service-card">
                <span className="qs-fc-service-tag">{s.tag}</span>
                <h3 className="qs-fc-service-title">{s.title}</h3>
                <p className="qs-fc-service-body">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="qs-fc-work" className="qs-fc-portfolio-section">
        <div className="qs-inner">
          <article className="qs-fc-client-feature" aria-labelledby="qs-fc-tam-title">
            <div className="qs-fc-client-feature-video">
              <video
                className="qs-fc-client-feature-video-el"
                src="/assets/creator-videos/tam-portfolio.mp4"
                poster="/assets/creator-videos/posters/tam-portfolio.jpg"
                controls
                preload="metadata"
                playsInline
              />
            </div>
            <div className="qs-fc-client-feature-body">
              <span className="qs-fc-client-feature-eyebrow">
                Featured client · The Awakening Media
              </span>
              <h2 id="qs-fc-tam-title" className="qs-fc-client-feature-title">
                A tribute to <span className="qs-fc-hero-italic">Faris Odeh</span>
              </h2>
              <p className="qs-fc-client-feature-story">
                A cinematic tribute produced end-to-end for{" "}
                <strong>The Awakening Media</strong> — script, motion, sound and
                final delivery. Built around the 2000 photograph of a 15-year-old
                whose image became a lasting symbol of resistance. The VFX builds
                the weight; the closing card lands the silence. This is the kind
                of work TAM trusts us to take from page to post: storytelling
                that respects the subject and refuses to look away.
              </p>
              <ul className="qs-fc-client-feature-pipeline" aria-label="Production pipeline">
                <li><span>Script</span></li>
                <li><span>Production</span></li>
                <li><span>VFX &amp; sound</span></li>
                <li><span>Final delivery</span></li>
              </ul>
              <div className="qs-fc-client-feature-ctas">
                <a
                  href={TAM_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="qs-fc-btn-primary w-inline-block"
                >
                  <span>See our work for TAM — script to delivery</span>
                  <span className="qs-fc-btn-icon" aria-hidden>
                    <ServiceArrowIcon variant="on-light" />
                  </span>
                </a>
                <a
                  href={TAM_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="qs-fc-client-feature-handle"
                  aria-label="The Awakening Media on Instagram"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
                  </svg>
                  <span>@the.awakeningmedia</span>
                </a>
              </div>
            </div>
          </article>

          <div className="qs-fc-section-head qs-fc-portfolio-head">
            <div>
              <h2 className="qs-fc-section-title home-heading-h2">
                More <span className="span-txt">work</span>
              </h2>
              <p className="qs-fc-section-sub">
                A selection of recent edits across YouTube, TikTok, Reels and
                Shorts.
              </p>
            </div>
            <div className="qs-fc-filter-bar" role="tablist" aria-label="Filter videos">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === f.id}
                  className={`qs-fc-filter-btn${filter === f.id ? " is-active" : ""}`}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="qs-fc-portfolio-grid">
            {visible.map((v) => (
              <VideoTile key={v.id} video={v} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="qs-fc-reels-pitch-section"
        aria-labelledby="qs-fc-reels-title"
      >
        <div className="qs-inner">
          <article className="qs-fc-reels-pitch">
            <div className="qs-fc-reels-pitch-body">
              <span className="qs-fc-reels-pitch-eyebrow">
                For YouTube creators &amp; Instagram page owners
              </span>
              <h2 id="qs-fc-reels-title" className="qs-fc-reels-pitch-title">
                Story-led Reels —{" "}
                <span className="qs-fc-hero-italic">for YouTube &amp; Instagram</span>
              </h2>
              <p className="qs-fc-reels-pitch-lede">
                9:16 short-form built like documentary. Same edit ships to
                YouTube Shorts <em>and</em> Instagram Reels — same hook, same
                retention, same reach.
              </p>
              <p className="qs-fc-reels-pitch-body-copy">
                Send us raw footage, a script, or just a topic. We come back
                with a story-led Reel that holds attention from frame one —
                cinematic visuals, beat-matched cuts, captions that carry
                sound-off, and platform-native exports. Built for creators and
                page owners who&rsquo;d rather post one thing that grows the
                channel than ten that don&rsquo;t.
              </p>
              <ul className="qs-fc-reels-pitch-list">
                <li>
                  <span className="qs-fc-reels-check" aria-hidden>✓</span>
                  Hook engineered for the first 1.5 seconds
                </li>
                <li>
                  <span className="qs-fc-reels-check" aria-hidden>✓</span>
                  Cinematic visuals — live-action, AI, or stock
                </li>
                <li>
                  <span className="qs-fc-reels-check" aria-hidden>✓</span>
                  Caption-driven cuts that work sound-off
                </li>
                <li>
                  <span className="qs-fc-reels-check" aria-hidden>✓</span>
                  Sound design + music sync
                </li>
                <li>
                  <span className="qs-fc-reels-check" aria-hidden>✓</span>
                  Vertical master + Shorts, Reels &amp; TikTok exports
                </li>
              </ul>
              <div className="qs-fc-reels-pitch-ctas">
                <Link
                  href="/contact"
                  className="qs-fc-btn-primary w-inline-block"
                >
                  <span>Pitch us your channel</span>
                  <span className="qs-fc-btn-icon" aria-hidden>
                    <ServiceArrowIcon variant="on-dark" />
                  </span>
                </Link>
                <a href="#qs-fc-work" className="qs-fc-btn-secondary w-inline-block">
                  See more Reel work
                </a>
              </div>
            </div>
            <div className="qs-fc-reels-pitch-video-wrap">
              <div className="qs-fc-reels-pitch-video">
                <video
                  className="qs-fc-reels-pitch-video-el"
                  src="/assets/creator-videos/reels-pitch.mp4"
                  poster="/assets/creator-videos/posters/reels-pitch.jpg"
                  controls
                  preload="metadata"
                  playsInline
                />
              </div>
              <p className="qs-fc-reels-pitch-video-caption">
                Constantinople, April 1453 — a 42-second story-led Reel.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        className="qs-fc-ugc-section"
        aria-labelledby="qs-fc-ugc-title"
      >
        <div className="qs-inner">
          <article className="qs-fc-ugc">
            <header className="qs-fc-ugc-header">
              <span className="qs-fc-ugc-eyebrow">
                For business owners &amp; DTC brands
              </span>
              <h2 id="qs-fc-ugc-title" className="qs-fc-ugc-title">
                Ads &amp; UGC{" "}
                <span className="qs-fc-hero-italic">Production</span>
              </h2>
              <p className="qs-fc-ugc-lede">
                Two formats, one performance goal. Polished brand spots that
                sell the aesthetic, and creator-style UGC that explains the
                offer — both engineered for ad accounts that need ROAS, not
                vanity.
              </p>
            </header>

            <div className="qs-fc-ugc-gallery">
              <figure className="qs-fc-ugc-clip">
                <div className="qs-fc-ugc-video">
                  <video
                    className="qs-fc-ugc-video-el"
                    src="/assets/creator-videos/ad-demo.mp4"
                    poster="/assets/creator-videos/posters/ad-demo.jpg"
                    controls
                    preload="metadata"
                    playsInline
                  />
                </div>
                <figcaption className="qs-fc-ugc-video-caption">
                  <strong>Brand ad — TSUKIYO.</strong> Cinematic lookbook,
                  neon-lit b-roll, urgency CTA.
                </figcaption>
              </figure>
              <figure className="qs-fc-ugc-clip">
                <div className="qs-fc-ugc-video">
                  <video
                    className="qs-fc-ugc-video-el"
                    src="/assets/creator-videos/ugc-demo.mp4"
                    poster="/assets/creator-videos/posters/ugc-demo.jpg"
                    controls
                    preload="metadata"
                    playsInline
                  />
                </div>
                <figcaption className="qs-fc-ugc-video-caption">
                  <strong>UGC ad — MIRAE Smooth.</strong> Problem → authority →
                  mechanism → offer.
                </figcaption>
              </figure>
            </div>

            <div className="qs-fc-ugc-content">
              <p className="qs-fc-ugc-body-copy">
                Ship us the product, the offer, or just the angle. We come
                back with paid-ready creative: scripts, on-camera talent for
                UGC, location and styling for brand, hooks, captions, edits
                and platform-native masters for Meta, TikTok, YouTube and
                Pinterest. Test 5 hooks. Scale the one that prints.
              </p>
              <ul className="qs-fc-ugc-list">
                <li>
                  <span className="qs-fc-ugc-check" aria-hidden>✓</span>
                  Brand ads <em>and</em> UGC ads — same vendor, same pipeline
                </li>
                <li>
                  <span className="qs-fc-ugc-check" aria-hidden>✓</span>
                  8–10 hook angles per concept
                </li>
                <li>
                  <span className="qs-fc-ugc-check" aria-hidden>✓</span>
                  On-camera talent matched to your buyer
                </li>
                <li>
                  <span className="qs-fc-ugc-check" aria-hidden>✓</span>
                  Cinematic lookbook + lifestyle b-roll
                </li>
                <li>
                  <span className="qs-fc-ugc-check" aria-hidden>✓</span>
                  Sound-off captions, sound design, branded end-cards
                </li>
                <li>
                  <span className="qs-fc-ugc-check" aria-hidden>✓</span>
                  Whitelisting &amp; Spark-Ads ready masters
                </li>
              </ul>
              <div className="qs-fc-ugc-ctas">
                <Link
                  href="/contact"
                  className="qs-fc-btn-primary w-inline-block"
                >
                  <span>Book an Ads &amp; UGC strategy call</span>
                  <span className="qs-fc-btn-icon" aria-hidden>
                    <ServiceArrowIcon variant="on-dark" />
                  </span>
                </Link>
                <a href="#qs-fc-work" className="qs-fc-btn-secondary w-inline-block">
                  See more sample ads
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="qs-fc-process-section" aria-labelledby="qs-fc-process-title">
        <div className="qs-inner">
          <div className="qs-fc-process-intro">
            <span className="qs-fc-process-eyebrow">The QUAD difference</span>
            <h2
              id="qs-fc-process-title"
              className="qs-fc-section-title home-heading-h2"
            >
              Four disciplines.{" "}
              <span className="span-txt">One team. Your outcome.</span>
            </h2>
            <p className="qs-fc-process-lede">
              QUAD means four crafts — Creative, Strategy, Digital and AI —
              working as one on every project. Not a chain of freelancers or an
              agency relay, but a single studio that takes your idea from blank
              page to published, and builds every frame to perform. That&rsquo;s
              how we move faster, hold the story together, and turn content into
              results others can&rsquo;t.
            </p>
          </div>

          <div className="qs-fc-pillars">
            {PILLARS.map((p, i) => (
              <article key={p.title} className="qs-fc-pillar">
                <span className="qs-fc-pillar-index" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="qs-fc-pillar-title">{p.title}</h3>
                <p className="qs-fc-pillar-body">{p.body}</p>
              </article>
            ))}
          </div>

          <div className="qs-fc-process-flow">
            <h3 className="qs-fc-process-subhead">
              How we <span className="qs-fc-hero-italic">work together</span>
            </h3>
            <ol className="qs-fc-process-steps">
              {PROCESS.map((p) => (
                <li key={p.num} className="qs-fc-process-step">
                  <span className="qs-fc-process-num">{p.num}</span>
                  <div className="qs-fc-process-step-text">
                    <p className="qs-fc-process-step-title">{p.title}</p>
                    <p className="qs-fc-process-step-sub">{p.sub}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTASection className="qs-fc-final-cta" />
      <Footer />
    </div>
  );
}
