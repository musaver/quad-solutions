/** Capture + replay Webflow IX3 interactions after Next.js client navigation. */

import {
  initCustomScrollAnimations,
  killCustomScrollAnimations,
} from "./gsapScrollAnimations";

type Ix3Engine = {
  register: (payload: unknown[]) => void;
  interactions: Map<string, unknown>;
};

type Ix3Module = {
  destroy: () => void;
  ready: () => Promise<void>;
  getInstance: () => Ix3Engine | null;
};

type ScrollTriggerInstance = {
  kill: () => void;
};

type AwakeWin = Window &
  typeof globalThis & {
    __AWAKE_IX3_REGISTER_PAYLOAD?: unknown[];
    __awakeLenis?: { scrollTo: (y: number, opts?: { immediate?: boolean }) => void };
    ScrollTrigger?: {
      refresh: () => void;
      update: () => void;
      getAll: () => ScrollTriggerInstance[];
      clearScrollMemory: () => void;
    };
    Webflow?: { require: (name: string) => Ix3Module };
  };

function clonePayload(raw: unknown[]): unknown[] {
  try {
    return structuredClone(raw) as unknown[];
  } catch {
    try {
      return JSON.parse(JSON.stringify(raw)) as unknown[];
    } catch {
      return raw.slice();
    }
  }
}

/** Poll until IX3 has registered interactions (runs after webflow.c5af6175.js + ready()). */
export function startIx3PayloadCapture(): void {
  const deadline = Date.now() + 20000;

  const tick = () => {
    if (Date.now() > deadline) return;
    const win = window as AwakeWin;
    try {
      const ix3 = win.Webflow?.require?.("ix3");
      const inst = ix3?.getInstance?.();
      const n = inst?.interactions?.size ?? 0;
      if (inst && n > 0 && !win.__AWAKE_IX3_REGISTER_PAYLOAD?.length) {
        win.__AWAKE_IX3_REGISTER_PAYLOAD = Array.from(inst.interactions.values());
        return;
      }
    } catch {
      /* ignore */
    }
    requestAnimationFrame(tick);
  };

  tick();
}

/** Serialize runs so rapid Link clicks each see the latest DOM when their turn arrives. */
let ix3RehydrateTail: Promise<void> = Promise.resolve();

/** Kill all ScrollTrigger instances to prevent conflicts during rehydration. */
function killAllScrollTriggers(): void {
  const win = window as AwakeWin;
  const ST = win.ScrollTrigger;
  if (!ST) return;
  try {
    const triggers = ST.getAll?.();
    if (triggers?.length) {
      triggers.forEach((t) => t.kill());
    }
    ST.clearScrollMemory?.();
  } catch {
    /* ignore */
  }
}

/** Wait for next frame to ensure DOM is stable. */
function nextFrame(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
}

/**
 * IX3 binds ScrollTrigger to DOM nodes once. After React swaps routes, destroy the engine,
 * re-init it, and register a clone of the original interaction list so timelines re-bind.
 */
export function rehydrateIx3AfterNavigation(): Promise<void> {
  const run = async () => {
    const win = window as AwakeWin;
    const raw = win.__AWAKE_IX3_REGISTER_PAYLOAD;
    const W = win.Webflow;

    // Kill any previous custom scroll animations
    killCustomScrollAnimations();

    if (!raw?.length || !W?.require) {
      // No IX3 payload, use custom GSAP animations
      initCustomScrollAnimations();
      return;
    }

    try {
      // Kill existing ScrollTrigger instances before destroying IX3
      killAllScrollTriggers();

      const ix3 = W.require("ix3");
      ix3.destroy();

      // Wait for DOM to stabilize before re-initializing
      await nextFrame();

      await ix3.ready();
      const inst = ix3.getInstance();
      if (!inst) {
        // IX3 failed, use custom GSAP animations
        initCustomScrollAnimations();
        return;
      }
      inst.register(clonePayload(raw));
      document.documentElement.classList.add("w-mod-ix3");
      win.dispatchEvent(new CustomEvent("__wf_ix3_ready"));
      win.__awakeLenis?.scrollTo(0, { immediate: true });

      // Wait another frame to let IX3 bind to DOM elements
      await nextFrame();

      win.ScrollTrigger?.update?.();
      win.ScrollTrigger?.refresh?.();
      win.dispatchEvent(new Event("resize"));

      // After IX3 has had a chance to bind, check if any elements are still hidden
      // and set up custom animations for them
      setTimeout(() => {
        initCustomScrollAnimations();
      }, 100);
    } catch (e) {
      console.warn("Awake: IX3 rehydrate failed, using custom animations", e);
      initCustomScrollAnimations();
    }
  };

  const job = ix3RehydrateTail.then(run);
  ix3RehydrateTail = job.catch(() => {});
  return job;
}
