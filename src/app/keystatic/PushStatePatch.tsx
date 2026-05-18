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
    const swap = (el: Element) => {
      el.classList.remove("kui-scheme--auto", "kui-scheme--light");
      el.classList.add("kui-scheme--dark");
    };
    document
      .querySelectorAll(".kui-scheme--auto, .kui-scheme--light")
      .forEach(swap);

    // Re-check ONLY when a class attribute changes on existing theme
    // containers — not on every node insertion. Keeps dialogs/popovers
    // from being interrupted mid-render.
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && m.target instanceof Element) {
          if (
            m.target.classList.contains("kui-scheme--auto") ||
            m.target.classList.contains("kui-scheme--light")
          ) {
            swap(m.target);
          }
        }
      }
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
      subtree: true,
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
