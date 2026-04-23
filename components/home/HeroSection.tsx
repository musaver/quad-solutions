"use client";

import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const [revealed, setRevealed] = useState(false);
  const hasRevealedRef = useRef(false);

  useEffect(() => {
    if (hasRevealedRef.current) {
      setRevealed(true);
      return;
    }

    const reveal = () => {
      if (hasRevealedRef.current) return;
      hasRevealedRef.current = true;
      setRevealed(true);
    };

    if (document.readyState === "complete") {
      const t = window.setTimeout(reveal, 50);
      return () => window.clearTimeout(t);
    }

    window.addEventListener("load", reveal, { once: true });
    const safety = window.setTimeout(reveal, 1500);
    return () => {
      window.removeEventListener("load", reveal);
      window.clearTimeout(safety);
    };
  }, []);

  const baseStyle = {
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
    willChange: "opacity, transform" as const,
  };
  const headingStyle = {
    ...baseStyle,
    opacity: revealed ? 1 : 0,
    transform: revealed ? "translateY(0)" : "translateY(20px)",
  };
  const paraStyle = {
    ...baseStyle,
    transition:
      "opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s",
    opacity: revealed ? 1 : 0,
    transform: revealed ? "translateY(0)" : "translateY(20px)",
  };

  return (
    <section id="home" className="section">
      <div className="w-layout-blockcontainer container-main w-container">
        <h1 className="qs-hero-heading-h1" style={headingStyle}>
          Building bold brands with{" "}
          <span className="italic-span typing-text">thoughtful design</span>
        </h1>
        <p className="para-txt" style={paraStyle}>
          At Awake, we help small startups tackle the world&apos;s biggest
          challenges with tailored solutions, guiding you from strategy to
          success in a competitive market.
        </p>
        <div className="w-layout-grid grid-21">
          <div className="getstarted-btn">
            <a
              data-w-id="eecee728-f47b-6730-11f5-5b63546b3fc7"
              href="/contact"
              className="button w-inline-block"
            >
              <div className="text-block-6">Get Started</div>
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
              <p className="trusted-text">Trusted by 200+ clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
