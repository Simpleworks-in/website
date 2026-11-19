"use client";

import { useEffect, useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

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
      <WhatsAppIcon className="!mr-0 !h-5 !w-5" />
      WhatsApp Premraj
    </a>
  );
}
