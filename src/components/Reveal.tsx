"use client";

import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (elements.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      // threshold 0: a ratio like 0.1 can never be met by an element taller
      // than 10x the viewport (e.g. the full blog grid), leaving it invisible.
      { threshold: 0 }
    );
    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
