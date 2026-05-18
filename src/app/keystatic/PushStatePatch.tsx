"use client";

import { useEffect } from "react";

// Next.js 16 wraps History.pushState to postMessage the new route into
// an internal app-router Worker. If anything (including Keystatic's
// own navigation) passes a `URL` object as the third argument, the
// postMessage throws DataCloneError because URL is not structured-clone
// safe. The patch below pre-coerces a URL argument to its string form.
//
// Same patch applied for replaceState — it has the same code path.
//
// Idempotent: only patches once per page.

export default function PushStatePatch() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const PATCH_FLAG = "__sw_pushstate_patched__";
    if ((window as unknown as Record<string, boolean>)[PATCH_FLAG]) return;
    (window as unknown as Record<string, boolean>)[PATCH_FLAG] = true;

    const wrap =
      <T extends "pushState" | "replaceState">(name: T) => {
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
          const coerced =
            url instanceof URL ? url.toString() : url ?? null;
          return original.call(this, data, unused, coerced);
        } as typeof original;
      };

    wrap("pushState");
    wrap("replaceState");
  }, []);

  return null;
}
