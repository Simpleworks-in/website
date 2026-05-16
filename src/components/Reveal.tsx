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
      { threshold: 0.1 }
    );
    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
