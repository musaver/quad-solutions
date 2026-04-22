"use client";

import { useEffect } from "react";
import { startIx3PayloadCapture } from "@/lib/webflowIx3Rehydrate";

const SCRIPT_CHAIN = [
  "/assets/js/jquery-3.5.1.min.js",
  "/assets/gsap/gsap.min.js",
  "/assets/gsap/SplitText.min.js",
  "/assets/gsap/ScrollTrigger.min.js",
  "/assets/js/webflow.schunk.36b8fb49256177c8.js",
  "/assets/js/webflow.schunk.c5a2c853ec0ad041.js",
  "/assets/js/webflow.c5af6175.js",
  "/assets/js/lenis.min.js",
] as const;

let loadPromise: Promise<void> | null = null;

function loadScriptOnce(src: string): Promise<void> {
  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${src}"]`,
  );
  if (existing) {
    if (existing.dataset.loaded === "true") {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(src)), {
        once: true,
      });
    });
  }
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.onload = () => {
      s.dataset.loaded = "true";
      resolve();
    };
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

async function loadWebflowStack(): Promise<void> {
  for (const src of SCRIPT_CHAIN) {
    await loadScriptOnce(src);
  }

  const g = globalThis as typeof globalThis & {
    Lenis?: new (opts?: { lerp?: number }) => {
      on: (ev: string, fn: () => void) => void;
      raf: (time: number) => void;
    };
    gsap?: { ticker: { add: (fn: (time: number) => void) => void; lagSmoothing: (n: number) => void } };
    ScrollTrigger?: { update: () => void };
  };

  const LenisCtor = g.Lenis;
  const gsap = g.gsap;
  const ST = g.ScrollTrigger;
  if (!LenisCtor || !gsap || !ST) {
    console.warn("Awake template: Lenis/GSAP/ScrollTrigger not on window after load");
    return;
  }

  const win = window as Window & {
    __awakeLenis?: InstanceType<NonNullable<typeof LenisCtor>>;
  };
  if (!win.__awakeLenis) {
    win.__awakeLenis = new LenisCtor({ lerp: 0.1 });
    const lenis = win.__awakeLenis;
    lenis.on("scroll", () => {
      ST.update();
    });
    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }
}

function ensureWebflowRuntime(): Promise<void> {
  if (!loadPromise) {
    loadPromise = loadWebflowStack().catch((err) => {
      loadPromise = null;
      throw err;
    });
  }
  return loadPromise;
}

export function WebflowRuntime() {
  useEffect(() => {
    ensureWebflowRuntime()
      .then(() => {
        startIx3PayloadCapture();
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return null;
}
