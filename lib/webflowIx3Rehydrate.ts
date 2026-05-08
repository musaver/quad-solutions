/** Capture + replay Webflow IX3 interactions after Next.js client navigation. */

import {
  initCustomScrollAnimations,
  killCustomScrollAnimations,
} from "./gsapScrollAnimations";

type Ix3Engine = {
  register: (interactions: unknown[], timelines: unknown[]) => void;
  interactions: Map<string, unknown>;
  timelineDefs: Map<string, unknown>;
};

type Ix3Payload = {
  interactions: unknown[];
  timelines: unknown[];
};

type Ix3Module = {
  destroy: () => void;
  ready: () => Promise<void>;
  getInstance: () => Ix3Engine | null;
};

type WebflowModule = {
  ready?: () => void;
  destroy?: () => void;
};

type ScrollTriggerInstance = {
  kill: () => void;
};

type AwakeWin = Window &
  typeof globalThis & {
    __AWAKE_IX3_REGISTER_PAYLOAD?: Ix3Payload;
    __awakeLenis?: { scrollTo: (y: number, opts?: { immediate?: boolean }) => void };
    ScrollTrigger?: {
      refresh: () => void;
      update: () => void;
      getAll: () => ScrollTriggerInstance[];
      clearScrollMemory: () => void;
    };
    Webflow?: {
      require: ((name: "ix3") => Ix3Module) & ((name: string) => WebflowModule);
    };
  };

/**
 * Webflow modules (dropdown, slider, lightbox, etc.) bind event handlers to the DOM
 * once at first load. After a Next.js client navigation swaps the route subtree, the
 * new elements (e.g. `.w-dropdown` on the home page FAQ) have no listeners. Re-run
 * each module's `ready()` so it re-queries the DOM and re-binds.
 */
const WEBFLOW_MODULES_TO_REBIND = [
  "dropdown",
  "slider",
  "tabs",
  "lightbox",
  "navbar",
] as const;

function reinitWebflowModules(W: NonNullable<AwakeWin["Webflow"]>): void {
  for (const name of WEBFLOW_MODULES_TO_REBIND) {
    try {
      const mod = W.require(name) as WebflowModule | undefined;
      mod?.ready?.();
    } catch {
      /* module may not be loaded; skip */
    }
  }
}

function clonePayload(raw: Ix3Payload): Ix3Payload {
  try {
    return structuredClone(raw);
  } catch {
    try {
      return JSON.parse(JSON.stringify(raw)) as Ix3Payload;
    } catch {
      return {
        interactions: raw.interactions.slice(),
        timelines: raw.timelines.slice(),
      };
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
      if (inst && n > 0 && !win.__AWAKE_IX3_REGISTER_PAYLOAD) {
        win.__AWAKE_IX3_REGISTER_PAYLOAD = {
          interactions: Array.from(inst.interactions.values()),
          timelines: Array.from(inst.timelineDefs?.values?.() ?? []),
        };
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

    if (!W?.require) {
      initCustomScrollAnimations();
      return;
    }

    if (!raw?.interactions?.length) {
      // No IX3 payload, but still re-bind non-IX modules (dropdowns, etc.)
      reinitWebflowModules(W);
      initCustomScrollAnimations();
      return;
    }

    try {
      // Force scroll to 0 BEFORE building new ScrollTriggers. Otherwise IX3's
      // register() creates triggers against the previous page's leftover scrollY,
      // and any heading whose endPos is below that stale scroll registers as
      // already past — showing up fully animated with no progressive reveal.
      win.scrollTo(0, 0);
      win.__awakeLenis?.scrollTo(0, { immediate: true });

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
      // ix3.ready() awaits async work that can yield to the browser; reset scroll
      // again right before register so the new ScrollTriggers are built at scroll 0.
      win.scrollTo(0, 0);
      win.__awakeLenis?.scrollTo(0, { immediate: true });

      const cloned = clonePayload(raw);
      inst.register(cloned.interactions, cloned.timelines);
      document.documentElement.classList.add("w-mod-ix3");
      win.dispatchEvent(new CustomEvent("__wf_ix3_ready"));

      reinitWebflowModules(W);

      // Webflow's legacy IX2 fade/slide effects (e.g. slideInBottom on
      // .crafting-heading) don't rehydrate after Next.js navigation, so JSX-set
      // `style.opacity: 0` would persist and (a) hide the heading and (b) make
      // the GSAP fallback below set up a second SplitText + color animation
      // that conflicts with the IX3 one we just rebound. Manually clear the
      // inline opacity on every IX3-bound heading so IX3 can do its job alone.
      const IX3_HEADING_SELECTORS = [
        ".crafting-heading",
        ".home-heading-h2",
        ".our-work-heading",
        ".creative-mind-heading",
        ".testimonial-heading-h2",
        ".pricing-heading-h2",
        ".heading-20",
        ".achevement-heading-h2",
        ".c2a-title",
      ];
      IX3_HEADING_SELECTORS.forEach((sel) => {
        document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
          const v = el.style.opacity.trim();
          if (v === "0" || v === "0.0") el.style.removeProperty("opacity");
        });
      });

      // Wait another frame to let IX3 bind to DOM elements
      await nextFrame();

      // One more scroll reset before refresh, in case anything has nudged scroll.
      win.scrollTo(0, 0);
      win.__awakeLenis?.scrollTo(0, { immediate: true });

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
