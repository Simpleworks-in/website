"use client";

import { useEffect, useState } from "react";

// Phone-only floating WhatsApp pill (hidden at 760px and up, where the sticky
// nav already carries "WhatsApp Premraj"). Shows once the hero has scrolled
// out of view and hides while the closing CTA is on screen. LeadTracking
// picks up the click as `whatsapp_click` with link_location "floating".
export default function FloatingWhatsApp({
  href,
  heroId,
  hideWhileVisibleId,
}: {
  href: string;
  heroId: string;
  hideWhileVisibleId: string;
}) {
  const [pastHero, setPastHero] = useState(false);
  const [ctaOnScreen, setCtaOnScreen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    const cta = document.getElementById(hideWhileVisibleId);
    if (!hero || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) {
          setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0);
        } else if (entry.target === cta) {
          setCtaOnScreen(entry.isIntersecting);
        }
      }
    });
    observer.observe(hero);
    if (cta) observer.observe(cta);
    return () => observer.disconnect();
  }, [heroId, hideWhileVisibleId]);

  const show = pastHero && !ctaOnScreen;

  return (
    <a
      href={href}
      data-cta="floating"
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-4 right-4 z-[90] inline-flex min-h-[48px] items-center gap-2 rounded-full border border-red bg-white px-5 text-[16px] font-bold text-ink transition-[opacity,transform] duration-200 min-[760px]:hidden ${
        show ? "opacity-100 translate-y-0" : "pointer-events-none invisible opacity-0 translate-y-2"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 20.8l4.5-1.2A8.8 8.8 0 1 0 12 3.2Z" />
        <path d="M9 7.9c-.4 0-.9.4-.9 1.2 0 2.9 3 6 5.9 6 .8 0 1.2-.5 1.2-.9l-.1-.9-1.6-.8-.9.9a5 5 0 0 1-2.4-2.4l.9-.9-.8-1.6-.9-.1Z" />
      </svg>
      WhatsApp Premraj
    </a>
  );
}
