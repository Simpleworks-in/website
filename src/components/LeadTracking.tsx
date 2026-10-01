"use client";

import { useEffect } from "react";
import { pushEvent } from "@/lib/tracking";

const CALENDAR_HOSTS = ["calendar.app.google", "calendar.google.com"];

function eventFor(anchor: HTMLAnchorElement): string | null {
  const href = anchor.getAttribute("href") ?? "";
  if (href.startsWith("tel:")) return "phone_click";
  if (href.startsWith("mailto:")) return "email_click";
  try {
    const host = new URL(href, window.location.origin).hostname;
    if (host === "wa.me" || host === "api.whatsapp.com") return "whatsapp_click";
    if (CALENDAR_HOSTS.includes(host)) return "calendar_click";
  } catch {
    return null;
  }
  return null;
}

function linkLocation(anchor: HTMLAnchorElement): string {
  const cta = anchor.closest("[data-cta]")?.getAttribute("data-cta");
  if (cta) return cta;
  return anchor.closest("section")?.id || "unknown";
}

export default function LeadTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const anchor = (e.target as Element | null)?.closest?.("a");
      if (!anchor) return;
      const event = eventFor(anchor as HTMLAnchorElement);
      if (!event) return;
      pushEvent({
        event,
        page_path: window.location.pathname,
        link_location: linkLocation(anchor as HTMLAnchorElement),
      });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
