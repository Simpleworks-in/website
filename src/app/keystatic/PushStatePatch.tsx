"use client";

import { useEffect } from "react";

// Two unrelated patches applied to the /keystatic admin shell:
//
// 1. pushState/replaceState — Next.js 16 wraps these to postMessage the new
//    route into an internal app-router Worker. URL objects aren't
//    structured-clone safe, so the postMessage throws DataCloneError.
//    Coerce URL → string before Next's wrapper sees it.
//
// 2. Force dark theme — Keystatic adds `kui-scheme--auto` which follows
//    the OS preference. We want a consistent dark admin regardless of
//    the visitor's OS, so swap `--auto` for `--dark` once on mount and
//    keep it that way through any rerender.

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

    // --- force dark theme on the Keystatic shell ---
    const forceDark = () => {
      document
        .querySelectorAll<HTMLElement>(".kui-scheme--auto, .kui-scheme--light")
        .forEach((el) => {
          el.classList.remove("kui-scheme--auto", "kui-scheme--light");
          el.classList.add("kui-scheme--dark");
        });
    };
    forceDark();

    // Keystatic re-renders the theme container on some interactions —
    // re-apply whenever the body subtree changes.
    const observer = new MutationObserver(forceDark);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
