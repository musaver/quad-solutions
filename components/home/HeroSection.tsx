"use client";

import { useEffect, useRef, useState } from "react";

type GSAPLib = {
  set: (target: Element | Element[], vars: Record<string, unknown>) => void;
  to: (target: Element | Element[], vars: Record<string, unknown>) => void;
};
type SplitTextInstance = { chars: Element[]; revert: () => void };
type SplitTextCtor = new (
  target: Element | string,
  vars?: { type?: string },
) => SplitTextInstance;
type AnimationWin = Window & { gsap?: GSAPLib; SplitText?: SplitTextCtor };

export function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const [ix3Ready, setIx3Ready] = useState(false);

  useEffect(() => {
    const heading = headingRef.current;
    const para = paraRef.current;
    if (!heading) return;

    let cancelled = false;
    let observer: MutationObserver | null = null;
    let safetyTimer: number | undefined;
    let progressTimer: number | undefined;
    let readyStateListener: (() => void) | null = null;
    let split: SplitTextInstance | null = null;

    // GSAP equivalent of the original IX3 hero load animation. Used when IX3
    // binds but doesn't fire its load trigger (e.g. SPA nav back to /).
    const playFallback = () => {
      if (cancelled) return;
      const win = window as AnimationWin;
      const gsap = win.gsap;
      if (!gsap) return;

      // IX3 may have left the element at its initial frame (opacity:0,
      // transform:translate3d(100px,0,0)). Wipe so GSAP can drive cleanly.
      heading.style.cssText = "";
      if (para) para.style.cssText = "";

      if (win.SplitText) {
        split = new win.SplitText(heading, { type: "words,chars" });
        gsap.set(split.chars, { opacity: 0, x: 100 });
        gsap.to(split.chars, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.04,
          ease: "power2.out",
        });
      } else {
        gsap.set(heading, { opacity: 0, x: 50 });
        gsap.to(heading, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      }
      if (para) {
        gsap.set(para, { opacity: 0, y: 20 });
        gsap.to(para, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.5,
          ease: "power2.out",
        });
      }
    };

    const scheduleProgressCheck = () => {
      progressTimer = window.setTimeout(() => {
        if (cancelled) return;
        const op = parseFloat(getComputedStyle(heading).opacity);
        if (op < 0.1) playFallback();
      }, 300);
    };

    const onIx3Bound = () => {
      if (cancelled) return;
      // IX3 has bound — cancel the "never bound" safety so it can't fire later
      // and replay an already-finished animation.
      if (safetyTimer !== undefined) {
        window.clearTimeout(safetyTimer);
        safetyTimer = undefined;
      }
      setIx3Ready(true);
      // IX3 fires its hero load trigger on `document.readyState === "complete"`
      // (see webflow.c5af6175.js — it listens for `readystatechange`). If
      // the document isn't complete yet (initial load, still loading images),
      // wait for that same event before judging whether IX3 animated. Otherwise
      // we'd fire a premature fallback and IX3 would replay on top of it.
      if (document.readyState === "complete") {
        scheduleProgressCheck();
      } else {
        readyStateListener = () => {
          if (document.readyState !== "complete") return;
          if (readyStateListener) {
            document.removeEventListener("readystatechange", readyStateListener);
            readyStateListener = null;
          }
          if (!cancelled) scheduleProgressCheck();
        };
        document.addEventListener("readystatechange", readyStateListener);
      }
    };

    // Webflow IX3 sets inline `style` (opacity/transform) on data-w-id elements
    // the moment it binds. Treat that as the signal to swap skeleton → real text.
    if (heading.getAttribute("style") !== null) {
      onIx3Bound();
    } else {
      observer = new MutationObserver(() => {
        if (heading.getAttribute("style") !== null) {
          observer?.disconnect();
          onIx3Bound();
        }
      });
      observer.observe(heading, { attributes: true, attributeFilter: ["style"] });

      // Safety: if IX3 never binds (script blocked, missing payload), reveal
      // and run the fallback animation directly.
      safetyTimer = window.setTimeout(() => {
        observer?.disconnect();
        if (cancelled) return;
        setIx3Ready(true);
        playFallback();
      }, 1500);
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      if (safetyTimer) window.clearTimeout(safetyTimer);
      if (progressTimer) window.clearTimeout(progressTimer);
      if (readyStateListener) {
        document.removeEventListener("readystatechange", readyStateListener);
      }
      try {
        split?.revert();
      } catch {
        /* ignore */
      }
    };
  }, []);

  const skeletonClass = ix3Ready ? "" : "qs-hero-skeleton";

  return (
    <section id="home" className="section qs-hero-section">
      <div className="w-layout-blockcontainer container-main w-container">
        <h1
          ref={headingRef}
          data-w-id="6d188073-2487-31fa-c36a-0d1621970df1"
          className={`hero-heading-h1${skeletonClass ? ` ${skeletonClass}` : ""}`}
        >
          Your Entire Digital Department{" "}
          <span className="italic-span typing-text">Under One Roof</span>
        </h1>
        <p
          ref={paraRef}
          data-w-id="aca08924-3373-f5fc-69ef-f496c3c5cc2e"
          className={`para-txt${skeletonClass ? ` qs-para-skeleton` : ""}`}
        >
          Tired of juggling multiple agencies? We bring together <strong>specialized teams</strong> in 
          Growth, Creative, Digital, and Al all working as one to <strong>scale your business</strong> and 
          simplify your life.
        </p>
        <div className="w-layout-grid grid-21 qs-hero-cta-row">
          <div className="getstarted-btn">
            <a
              data-w-id="eecee728-f47b-6730-11f5-5b63546b3fc7"
              href="/contact"
              className="button w-inline-block"
            >
              <div className="text-block-6">See Our Results</div>
              <div className="arrow-div">
                <img
                  src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67a9e2599fa438b2b5ca91b6_arrow-top-right.png"
                  loading="lazy"
                  alt="arrow-top"
                  className="arrow-img"
                />
              </div>
            </a>
          </div>
          <div className="avatar-wrapper">
            <div className="avatar-block">
              <img
                src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67a9ddf66ed69f30d2d060eb_Ellipse%2021.jpg"
                loading="lazy"
                width="40"
                alt="avatar-1"
                className="avatar-img"
              />
              <img
                src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67a9ddf65b220093f413d434_Ellipse%2022.jpg"
                loading="lazy"
                width="40"
                alt="avatar-2"
                className="avatar-img"
              />
              <img
                src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67a9ddf59fa3d48caaee99e7_Ellipse%2023.jpg"
                loading="lazy"
                width="40"
                alt="avatar-3"
                className="avatar-img"
              />
              <img
                src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67a9ddf502d7968dd3515d0d_Ellipse%2024.jpg"
                loading="lazy"
                width="40"
                alt="avatar-4"
                className="avatar-img"
              />
            </div>
            <div className="rating-div">
              <img
                loading="lazy"
                src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e4fcb4e9e9d61bcda09919_star-icon.svg"
                alt="star-icon"
                className="star-icon"
              />
              <img
                loading="lazy"
                src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e4fcb4e9e9d61bcda09919_star-icon.svg"
                alt="star-icon"
                className="star-icon"
              />
              <img
                loading="lazy"
                src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e4fcb4e9e9d61bcda09919_star-icon.svg"
                alt="star-icon"
                className="star-icon"
              />
              <img
                loading="lazy"
                src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e4fcb4e9e9d61bcda09919_star-icon.svg"
                alt="star-icon"
                className="star-icon"
              />
              <img
                loading="lazy"
                src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e4fcb4e9e9d61bcda09918_star-half-icon.svg"
                alt="star-icon"
                className="star-half-icon"
              />
              <p className="trusted-text">Trusted by <strong>100+ ambitious brands</strong> worldwide.</p>
            </div>
          </div>
          <div className="qs-hero-video-thumb-anchor" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
