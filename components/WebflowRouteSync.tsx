"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { rehydrateIx3AfterNavigation } from "@/lib/webflowIx3Rehydrate";

type Win = Window & {
  __awakeLenis?: { scrollTo: (y: number, opts?: { immediate?: boolean }) => void };
  ScrollTrigger?: { refresh: () => void; update: () => void };
};

/** Survives route tree unmounts. */
let prevPathname: string | null = null;

/**
 * After client-side route changes, Lenis + ScrollTrigger need a reset. Webflow IX3 must be
 * destroyed and re-registered so scroll/hover timelines attach to the new React DOM.
 */
export function WebflowRouteSync() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    let cancelled = false;
    const win = window as Win;

    const navigated =
      prevPathname !== null && prevPathname !== pathname;
    prevPathname = pathname;

    win.__awakeLenis?.scrollTo(0, { immediate: true });

    if (navigated) {
      void rehydrateIx3AfterNavigation().then(() => {
        if (cancelled) return;
        win.ScrollTrigger?.update?.();
        win.ScrollTrigger?.refresh?.();
        win.dispatchEvent(new Event("resize"));
      });
      return () => {
        cancelled = true;
      };
    }

    const outer = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (cancelled) return;
        win.ScrollTrigger?.update?.();
        win.ScrollTrigger?.refresh?.();
        win.dispatchEvent(new Event("resize"));
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(outer);
    };
  }, [pathname]);

  return null;
}
