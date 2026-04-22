"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Chip = { label: string };

export function FeatureCardChipRow({
  chips,
  topCount,
}: {
  chips: Chip[];
  topCount?: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [edge, setEdge] = useState<{ left: boolean; right: boolean }>({
    left: false,
    right: false,
  });

  const { top, bottom } = useMemo(() => {
    const split = topCount ?? Math.ceil(chips.length / 2);
    return { top: chips.slice(0, split), bottom: chips.slice(split) };
  }, [chips, topCount]);

  const updateEdges = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setEdge({
      left: scrollLeft > 1,
      right: scrollLeft + clientWidth < scrollWidth - 1,
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    const ro = new ResizeObserver(updateEdges);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      ro.disconnect();
    };
  }, [updateEdges]);

  const stop = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    const el = scrollRef.current;
    if (el) el.scrollTo({ left: 0, behavior: "smooth" });
  }, []);

  const start = useCallback(() => {
    if (rafRef.current != null) return;
    const tick = () => {
      const el = scrollRef.current;
      if (!el) {
        rafRef.current = null;
        return;
      }
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0 || el.scrollLeft >= max) {
        rafRef.current = null;
        return;
      }
      el.scrollLeft += 1;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => stop, [stop]);

  const cls = [
    "qs-feature-card-chips-wrap",
    edge.left ? "is-shadow-left" : "",
    edge.right ? "is-shadow-right" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cls}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
    >
      <div className="qs-feature-card-chips-viewport" ref={scrollRef}>
        <div className="qs-feature-card-chips-grid">
          <div className="qs-feature-card-chip-row">
            {top.map((c) => (
              <span key={c.label} className="qs-feature-card-chip">
                {c.label}
              </span>
            ))}
          </div>
          {bottom.length > 0 ? (
            <div className="qs-feature-card-chip-row">
              {bottom.map((c) => (
                <span key={c.label} className="qs-feature-card-chip">
                  {c.label}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
