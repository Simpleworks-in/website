"use client";

import { useEffect } from "react";

// Two unrelated patches applied to the /keystatic admin shell:
//
// 1. pushState/replaceState — Next.js 16 wraps these to postMessage the
//    new route into an internal app-router Worker. URL objects aren't
//    structured-clone safe, so the postMessage throws DataCloneError.
//    Coerce URL → string before Next's wrapper sees it.
//
// 2. Force dark theme — Keystatic adds `kui-scheme--auto` which follows
//    the OS preference. We want a consistent dark admin regardless of
//    the visitor's OS. Patch the class once on mount and re-check only
//    when the theme-class container changes — NOT on every DOM mutation
//    (which would interfere with React Spectrum's dialogs/popovers).

export default function KeystaticClientPatches() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // --- pushState/replaceState ---
    const PATCH_FLAG = "__sw_pushstate_patched__";
    if (!(window as unknown as Record<string, boolean>)[PATCH_FLAG]) {
      (window as unknown as Record<string, boolean>)[PATCH_FLAG] = true;
      const wrap = <T extends "pushState" | "replaceState">(name: T) => {
        const original = window.history[name] as (
          this: History,
          data: unknown,
          unused: string,
          url?: string | URL | null
        ) => void;
        window.history[name] = function (
          this: History,
          data: unknown,
          unused: string,
          url?: string | URL | null
        ): void {
          const coerced = url instanceof URL ? url.toString() : url ?? null;
          return original.call(this, data, unused, coerced);
        } as typeof original;
      };
      wrap("pushState");
      wrap("replaceState");
    }

    // --- force dark theme ---
    // React Spectrum portals overlays (dialogs, popovers) to <body> with
    // their own `kui-scheme--auto` container. Outside `.keystatic-shell`
    // they don't inherit color-scheme: dark, so their text and form
    // controls render with light-mode colors against the dark surface —
    // making body text and the Cancel button invisible.
    const swap = (el: Element) => {
      if (
        el.classList.contains("kui-scheme--auto") ||
        el.classList.contains("kui-scheme--light")
      ) {
        el.classList.remove("kui-scheme--auto", "kui-scheme--light");
        el.classList.add("kui-scheme--dark");
      }
    };
    const swapAllIn = (root: ParentNode) => {
      root
        .querySelectorAll(".kui-scheme--auto, .kui-scheme--light")
        .forEach(swap);
    };
    swapAllIn(document);

    // Watch both class-attribute flips AND newly-portal'd subtrees.
    // We only mutate elements that ARE kui-scheme containers — we never
    // touch their children, so React Spectrum's dialog rendering isn't
    // interrupted mid-flight.
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && m.target instanceof Element) {
          swap(m.target);
        } else if (m.type === "childList") {
          m.addedNodes.forEach((node) => {
            if (node instanceof Element) {
              swap(node);
              swapAllIn(node);
            }
          });
        }
      }
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
      childList: true,
      subtree: true,
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
