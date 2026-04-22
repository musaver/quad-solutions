import { useEffect, useRef } from "react";

export function useHeroAnimation() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set initial state
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";

    // Trigger animation on next frame
    const timeoutId = setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return ref;
}
