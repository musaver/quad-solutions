"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ServiceArrowIcon } from "@/components/ServiceArrowIcon";

const VIDEO_SRC = "/assets/video/intro-video.mp4";

// The four disciplines QUAD brings under one roof — mirrors the hero copy.
const PIPELINE = ["Growth", "Creative", "Digital", "AI"];

function SoundOnIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 9v6h4l5 4V5L8 9H4z"
        fill="currentColor"
      />
      <path
        d="M16 8.5a4 4 0 0 1 0 7M18.5 6a7.5 7.5 0 0 1 0 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SoundOffIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
      <path
        d="M16 9.5l5 5M21 9.5l-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeroVideoScroll() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  // Autoplay muted (the only thing browsers allow), then unmute + play while
  // the film is on screen, and pause + mute the moment it scrolls out of view.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let inView = false;

    const playWithSound = () => {
      video.muted = false;
      const attempt = video.play();
      if (attempt && typeof attempt.then === "function") {
        attempt
          .then(() => setMuted(false))
          .catch(() => {
            // Browser blocked unmuted autoplay (no prior user gesture). Fall
            // back to muted playback so the film still plays; the sound toggle
            // lets the user switch audio on with a click.
            video.muted = true;
            setMuted(true);
            video.play().catch(() => {});
          });
      } else {
        setMuted(false);
      }
    };

    const stop = () => {
      video.pause();
      video.muted = true;
      setMuted(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting && entry.intersectionRatio >= 0.5;
        if (inView && !document.hidden) {
          playWithSound();
        } else {
          stop();
        }
      },
      { threshold: [0, 0.5, 0.75] },
    );
    observer.observe(video);

    // Pause when the tab is hidden; resume (with sound) when it's shown again.
    const onVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else if (inView) {
        playWithSound();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setMuted(nextMuted);
    if (!nextMuted) {
      // A click is a user gesture, so unmuted playback is guaranteed to work.
      video.play().catch(() => {});
    }
  };

  return (
    <section className="qs-home-video-section" aria-labelledby="qs-home-video-title">
      <div className="qs-home-video-inner">
        <article className="qs-home-video-feature">
          <div className="qs-home-video-media">
            <video
              ref={videoRef}
              className="qs-home-video-el"
              src={VIDEO_SRC}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
            <button
              type="button"
              className="qs-home-video-sound"
              aria-pressed={!muted}
              aria-label={muted ? "Turn sound on" : "Mute video"}
              onClick={toggleSound}
            >
              {muted ? <SoundOffIcon /> : <SoundOnIcon />}
              <span className="qs-home-video-sound-label">
                {muted ? "Tap for sound" : "Sound on"}
              </span>
            </button>
          </div>

          <div className="qs-home-video-body">
            <span className="qs-home-video-eyebrow">
              Quad Solutions · Brand film
            </span>
            <h2 id="qs-home-video-title" className="qs-home-video-title">
              All under <span className="qs-home-video-italic">one roof</span>
            </h2>
            <p className="qs-home-video-story">
              Every founder knows the 2&nbsp;a.m. desk — buried in sticky notes,
              chasing ads that won&rsquo;t convert, fighting AI that won&rsquo;t
              cooperate, and juggling a dozen tools that don&rsquo;t talk to each
              other. This is the film we made about that moment — and the way out
              of it. <strong>One team</strong> handling growth, creative, digital
              and automation together, so you can finally let the chaos go.{" "}
              <strong>You relax. We handle the rest.</strong>
            </p>
            <ul className="qs-home-video-pipeline" aria-label="What we bring under one roof">
              {PIPELINE.map((step) => (
                <li key={step}>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <div className="qs-home-video-ctas">
              <Link href="/specialists" className="qs-home-video-btn-primary">
                <span>Talk to a specialist</span>
                <span className="qs-home-video-btn-icon" aria-hidden="true">
                  <ServiceArrowIcon variant="on-light" />
                </span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
