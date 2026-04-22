/**
 * GSAP ScrollTrigger-based scroll animations for SPA navigation.
 * Matches the original Webflow IX3 animations when IX3 fails after route changes.
 */

type GSAPInstance = {
  to: (
    target: Element | Element[] | NodeListOf<Element>,
    vars: Record<string, unknown>
  ) => { scrollTrigger?: ScrollTriggerInstance };
  fromTo: (
    target: Element | Element[] | NodeListOf<Element>,
    fromVars: Record<string, unknown>,
    toVars: Record<string, unknown>
  ) => { scrollTrigger?: ScrollTriggerInstance };
  set: (
    target: Element | Element[] | NodeListOf<Element>,
    vars: Record<string, unknown>
  ) => void;
  registerPlugin: (...plugins: unknown[]) => void;
};

type ScrollTriggerInstance = {
  kill: () => void;
};

type ScrollTriggerStatic = {
  create: (vars: Record<string, unknown>) => ScrollTriggerInstance;
  getAll: () => ScrollTriggerInstance[];
  refresh: () => void;
  update: () => void;
};

type SplitTextInstance = {
  chars: Element[];
  words: Element[];
  lines: Element[];
  revert: () => void;
};

type SplitTextConstructor = new (
  target: Element | string,
  vars?: { type?: string }
) => SplitTextInstance;

type AnimationWin = Window & {
  gsap?: GSAPInstance;
  ScrollTrigger?: ScrollTriggerStatic;
  SplitText?: SplitTextConstructor;
};

/** Track our custom ScrollTrigger instances and SplitText instances for cleanup */
let customTriggers: ScrollTriggerInstance[] = [];
let splitTextInstances: SplitTextInstance[] = [];

/** Kill all custom animations we created */
export function killCustomScrollAnimations(): void {
  customTriggers.forEach((t) => {
    try {
      t.kill();
    } catch {
      /* ignore */
    }
  });
  customTriggers = [];

  // Revert SplitText instances to restore original HTML
  splitTextInstances.forEach((st) => {
    try {
      st.revert();
    } catch {
      /* ignore */
    }
  });
  splitTextInstances = [];
}

/** Check if an element is still invisible (opacity: 0) */
function isElementHidden(el: HTMLElement): boolean {
  const style = el.style.opacity.trim();
  if (style === "0" || style === "0.0") return true;
  const computed = window.getComputedStyle(el).opacity;
  return computed === "0";
}

/**
 * Hero heading: character-by-character animation sliding from right
 * Original: duration 0.8s, x: 100px → 0px, opacity 0 → 1, stagger 0.04, ease 30
 */
function animateHeroHeading(
  gsap: GSAPInstance,
  SplitText: SplitTextConstructor
): void {
  const el = document.querySelector<HTMLElement>(".hero-heading-h1");
  if (!el || !isElementHidden(el)) return;

  // Clear the inline opacity
  el.style.removeProperty("opacity");

  const split = new SplitText(el, { type: "chars" });
  splitTextInstances.push(split);

  gsap.set(split.chars, { opacity: 0, x: 100 });

  gsap.to(split.chars, {
    opacity: 1,
    x: 0,
    duration: 0.8,
    stagger: 0.04,
    ease: "power2.out",
  });
}

/**
 * Hero paragraph: simple fade in with slight delay
 */
function animateHeroParagraph(gsap: GSAPInstance): void {
  const el = document.querySelector<HTMLElement>(".hero-heading-h1 + .para-txt");
  if (!el || !isElementHidden(el)) return;

  el.style.removeProperty("opacity");
  gsap.set(el, { opacity: 0, y: 20 });

  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: 0.5,
    ease: "power2.out",
  });
}

/**
 * Section headings: text color reveal animation on scroll
 * Original: scroll-linked color from transparent gray to final color
 */
function animateSectionHeadings(
  gsap: GSAPInstance,
  ST: ScrollTriggerStatic,
  SplitText: SplitTextConstructor
): void {
  const headingSelectors = [
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

  headingSelectors.forEach((selector) => {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    elements.forEach((el) => {
      if (!isElementHidden(el)) return;

      // Clear the inline opacity
      el.style.removeProperty("opacity");

      // Get the computed final color
      const computedStyle = window.getComputedStyle(el);
      const finalColor = computedStyle.color || "#1b1d1e";

      const split = new SplitText(el, { type: "chars" });
      splitTextInstances.push(split);

      // Set initial state: transparent gray
      gsap.set(split.chars, { color: "rgba(0, 0, 0, 0.15)" });

      // Create scroll-linked animation
      const trigger = ST.create({
        trigger: el,
        start: "top 85%",
        end: "bottom 20%",
        scrub: 0.8,
        onUpdate: (self: { progress: number }) => {
          const progress = self.progress;
          split.chars.forEach((char, i) => {
            const charProgress = Math.max(
              0,
              Math.min(1, (progress * split.chars.length - i) / 3)
            );
            (char as HTMLElement).style.color =
              charProgress >= 1
                ? finalColor
                : `rgba(0, 0, 0, ${0.15 + charProgress * 0.85})`;
          });
        },
      });
      customTriggers.push(trigger);
    });
  });
}

/**
 * Badges: slide up with stagger
 */
function animateBadges(gsap: GSAPInstance, ST: ScrollTriggerStatic): void {
  const badges = document.querySelectorAll<HTMLElement>(
    ".creativity-bedge, .innovation-bedge, .strategy-bedge"
  );
  const hiddenBadges = Array.from(badges).filter(isElementHidden);

  if (hiddenBadges.length === 0) return;

  hiddenBadges.forEach((el) => el.style.removeProperty("opacity"));
  gsap.set(hiddenBadges, { opacity: 0, y: 30 });

  const trigger = ST.create({
    trigger: hiddenBadges[0].parentElement,
    start: "top 85%",
    once: true,
    onEnter: () => {
      gsap.to(hiddenBadges, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
  });
  customTriggers.push(trigger);
}

/**
 * Stats counters: fade in with stagger
 */
function animateStats(gsap: GSAPInstance, ST: ScrollTriggerStatic): void {
  const stats = document.querySelectorAll<HTMLElement>(".div-block-190");
  const hiddenStats = Array.from(stats).filter(isElementHidden);

  if (hiddenStats.length === 0) return;

  hiddenStats.forEach((el) => el.style.removeProperty("opacity"));
  gsap.set(hiddenStats, { opacity: 0, y: 30 });

  hiddenStats.forEach((el, i) => {
    const trigger = ST.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.15,
          ease: "power2.out",
        });
      },
    });
    customTriggers.push(trigger);
  });
}

/**
 * Innovation/service items: fade in with stagger
 */
function animateServiceItems(gsap: GSAPInstance, ST: ScrollTriggerStatic): void {
  const items = document.querySelectorAll<HTMLElement>(".innovation-item");
  const hiddenItems = Array.from(items).filter(isElementHidden);

  if (hiddenItems.length === 0) return;

  hiddenItems.forEach((el) => el.style.removeProperty("opacity"));
  gsap.set(hiddenItems, { opacity: 0, y: 30 });

  const trigger = ST.create({
    trigger: hiddenItems[0]?.parentElement,
    start: "top 85%",
    once: true,
    onEnter: () => {
      gsap.to(hiddenItems, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      });
    },
  });
  customTriggers.push(trigger);
}

/**
 * CTA sections: fade in
 */
function animateCTA(gsap: GSAPInstance, ST: ScrollTriggerStatic): void {
  const ctas = document.querySelectorAll<HTMLElement>(
    ".call-to-action, .c2a-main"
  );
  const hiddenCTAs = Array.from(ctas).filter(isElementHidden);

  hiddenCTAs.forEach((el) => {
    el.style.removeProperty("opacity");
    gsap.set(el, { opacity: 0, y: 40 });

    const trigger = ST.create({
      trigger: el,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        });
      },
    });
    customTriggers.push(trigger);
  });
}

/**
 * Portfolio cards: slide in from sides
 */
function animatePortfolioCards(
  gsap: GSAPInstance,
  ST: ScrollTriggerStatic
): void {
  const cards = document.querySelectorAll<HTMLElement>(
    ".card-1, .card-2, .card-3, .card-4"
  );
  const hiddenCards = Array.from(cards).filter(isElementHidden);

  hiddenCards.forEach((el, i) => {
    el.style.removeProperty("opacity");
    const fromLeft = i % 2 === 0;
    gsap.set(el, { opacity: 0, x: fromLeft ? -50 : 50 });

    const trigger = ST.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      },
    });
    customTriggers.push(trigger);
  });
}

/**
 * Team profiles: fade in with stagger
 */
function animateProfiles(gsap: GSAPInstance, ST: ScrollTriggerStatic): void {
  const profiles = document.querySelectorAll<HTMLElement>(".profile-card");
  const hiddenProfiles = Array.from(profiles).filter(isElementHidden);

  if (hiddenProfiles.length === 0) return;

  hiddenProfiles.forEach((el) => el.style.removeProperty("opacity"));
  gsap.set(hiddenProfiles, { opacity: 0, y: 40 });

  const trigger = ST.create({
    trigger: hiddenProfiles[0]?.parentElement,
    start: "top 85%",
    once: true,
    onEnter: () => {
      gsap.to(hiddenProfiles, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
  });
  customTriggers.push(trigger);
}

/**
 * Testimonial cards: slide and fade
 */
function animateTestimonials(gsap: GSAPInstance, ST: ScrollTriggerStatic): void {
  const cards = document.querySelectorAll<HTMLElement>(
    ".about-card-1, .about-card-2, .about-card-3, .about-card-5"
  );
  const hiddenCards = Array.from(cards).filter(isElementHidden);

  hiddenCards.forEach((el) => {
    el.style.removeProperty("opacity");
    // about-card-2 slides from right per original animation
    const isCard2 = el.classList.contains("about-card-2");
    gsap.set(el, {
      opacity: 0,
      x: isCard2 ? 100 : 0,
      y: isCard2 ? 0 : 40,
    });

    const trigger = ST.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: isCard2 ? 0.25 : 0.6,
          ease: "power2.out",
        });
      },
    });
    customTriggers.push(trigger);
  });
}

/**
 * Subtext and other elements
 */
function animateSubtext(gsap: GSAPInstance, ST: ScrollTriggerStatic): void {
  const elements = document.querySelectorAll<HTMLElement>(".subtext");
  const hidden = Array.from(elements).filter(isElementHidden);

  hidden.forEach((el) => {
    el.style.removeProperty("opacity");
    gsap.set(el, { opacity: 0, y: 20 });

    const trigger = ST.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      },
    });
    customTriggers.push(trigger);
  });
}

/**
 * Any remaining elements with data-w-id that are still hidden
 */
function animateRemainingElements(
  gsap: GSAPInstance,
  ST: ScrollTriggerStatic
): void {
  const handled = new Set([
    ".hero-heading-h1",
    ".para-txt",
    ".crafting-heading",
    ".home-heading-h2",
    ".our-work-heading",
    ".creative-mind-heading",
    ".testimonial-heading-h2",
    ".pricing-heading-h2",
    ".heading-20",
    ".achevement-heading-h2",
    ".c2a-title",
    ".creativity-bedge",
    ".innovation-bedge",
    ".strategy-bedge",
    ".div-block-190",
    ".innovation-item",
    ".call-to-action",
    ".c2a-main",
    ".card-1",
    ".card-2",
    ".card-3",
    ".card-4",
    ".profile-card",
    ".about-card-1",
    ".about-card-2",
    ".about-card-3",
    ".about-card-5",
    ".subtext",
  ]);

  const elements = document.querySelectorAll<HTMLElement>("[data-w-id]");

  elements.forEach((el) => {
    // Skip if already handled
    for (const selector of handled) {
      if (el.matches(selector)) return;
    }

    if (!isElementHidden(el)) return;

    el.style.removeProperty("opacity");
    gsap.set(el, { opacity: 0, y: 30 });

    const trigger = ST.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      },
    });
    customTriggers.push(trigger);
  });
}

/**
 * Initialize custom GSAP scroll animations for elements that IX3 failed to animate.
 * Call this after IX3 rehydration attempt.
 */
export function initCustomScrollAnimations(): void {
  const win = window as AnimationWin;
  const gsap = win.gsap;
  const ST = win.ScrollTrigger;
  const SplitText = win.SplitText;

  if (!gsap || !ST) {
    console.warn("GSAP or ScrollTrigger not available for custom animations");
    return;
  }

  // Wait a frame to ensure DOM is ready and IX3 has had a chance to bind
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      // Check if there are any hidden elements that need animation
      const hiddenElements = document.querySelectorAll<HTMLElement>(
        '[data-w-id][style*="opacity"]'
      );
      const needsCustomAnimations = Array.from(hiddenElements).some(
        isElementHidden
      );

      if (!needsCustomAnimations) {
        // IX3 is working, no need for custom animations
        return;
      }

      // Kill any existing custom animations before setting up new ones
      killCustomScrollAnimations();

      // Animate hero elements (on load, not scroll-triggered)
      if (SplitText) {
        animateHeroHeading(gsap, SplitText);
      } else {
        // Fallback if SplitText not available
        const hero = document.querySelector<HTMLElement>(".hero-heading-h1");
        if (hero && isElementHidden(hero)) {
          hero.style.removeProperty("opacity");
          gsap.set(hero, { opacity: 0, x: 50 });
          gsap.to(hero, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" });
        }
      }
      animateHeroParagraph(gsap);

      // Scroll-triggered animations
      if (SplitText) {
        animateSectionHeadings(gsap, ST, SplitText);
      }
      animateBadges(gsap, ST);
      animateStats(gsap, ST);
      animateServiceItems(gsap, ST);
      animateCTA(gsap, ST);
      animatePortfolioCards(gsap, ST);
      animateProfiles(gsap, ST);
      animateTestimonials(gsap, ST);
      animateSubtext(gsap, ST);
      animateRemainingElements(gsap, ST);

      // Refresh ScrollTrigger to recalculate positions
      ST.refresh();
    });
  });
}
