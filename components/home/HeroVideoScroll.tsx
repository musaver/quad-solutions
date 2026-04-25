"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "https://www.w3schools.com/html/mov_bbb.mp4";
const DESKTOP_BREAKPOINT = 992;

export function HeroVideoScroll() {
  const floaterRef = useRef<HTMLDivElement>(null);
  const finalAnchorRef = useRef<HTMLDivElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [modalOpen]);

  useEffect(() => {
    const floater = floaterRef.current;
    const finalAnchor = finalAnchorRef.current;
    if (!floater || !finalAnchor) return;

    let raf = 0;
    let pending = false;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const smoothstep = (t: number) => t * t * (3 - 2 * t);

    const update = () => {
      pending = false;
      const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;
      const thumbAnchor =
        document.querySelector<HTMLElement>(".qs-hero-video-thumb-anchor");

      const fr = finalAnchor.getBoundingClientRect();

      let top: number;
      let left: number;
      let width: number;
      let height: number;
      let radius: number;

      if (!isDesktop || !thumbAnchor) {
        top = fr.top;
        left = fr.left;
        width = fr.width;
        height = fr.height;
        radius = 24;
      } else {
        const tr = thumbAnchor.getBoundingClientRect();
        // Animation completes after ~70vh of scroll — quick enough that the
        // user sees the transition early in their scroll.
        const animLength = Math.max(400, window.innerHeight * 0.7);
        const progress = Math.min(1, Math.max(0, window.scrollY / animLength));
        const t = smoothstep(progress);

        top = lerp(tr.top, fr.top, t);
        left = lerp(tr.left, fr.left, t);
        width = lerp(tr.width, fr.width, t);
        height = lerp(tr.height, fr.height, t);
        radius = lerp(14, 24, t);
      }

      const s = floater.style;
      s.top = `${top}px`;
      s.left = `${left}px`;
      s.width = `${width}px`;
      s.height = `${height}px`;
      s.borderRadius = `${radius}px`;
    };

    const schedule = () => {
      if (pending) return;
      pending = true;
      raf = requestAnimationFrame(update);
    };

    update();
    setReady(true);

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <section className="qs-hero-video-section">
        <div
          ref={finalAnchorRef}
          className="qs-hero-video-final-anchor"
          aria-hidden="true"
        />
      </section>
      <div
        ref={floaterRef}
        className={`qs-hero-video-floater${ready ? " qs-ready" : ""}`}
      >
        <video
          className="qs-hero-video-el"
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <button
          type="button"
          className="qs-hero-video-play"
          aria-label="Play video with sound"
          onClick={() => setModalOpen(true)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
      {modalOpen && (
        <div
          className="qs-video-modal"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <button
            type="button"
            className="qs-video-modal-close"
            aria-label="Close video"
            onClick={() => setModalOpen(false)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="qs-video-modal-inner">
            <video
              ref={modalVideoRef}
              className="qs-video-modal-video"
              src={VIDEO_SRC}
              autoPlay
              controls
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}
