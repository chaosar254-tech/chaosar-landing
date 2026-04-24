"use client";

import { useEffect } from "react";

export default function ScrollDepth() {
  useEffect(() => {
    const fired = new Set<number>();
    const thresholds = [25, 50, 75, 100];

    function onScroll() {
      const scrolled =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;

      for (const pct of thresholds) {
        if (scrolled >= pct && !fired.has(pct)) {
          fired.add(pct);
          window.gtag?.("event", "scroll_depth", {
            percent: pct,
            page_location: window.location.href,
          });
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
