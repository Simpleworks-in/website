import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

// Exclude the Keystatic admin (and its API) from the service worker.
// Keystatic uses pushState heavily and Next.js posts a URL object to an
// internal Worker — Serwist's interception breaks that postMessage with
// a DataCloneError, which kills navigation inside /keystatic (Create
// button, opening posts, etc.).
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.startsWith("/keystatic") || url.pathname.startsWith("/api/keystatic")) {
    // Hand the fetch back to the browser instead of letting Serwist handle it.
    event.respondWith(fetch(event.request));
  }
});

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
  fallbacks: {
    entries: [
      {
        url: "/offline",
        matcher({ request }) {
          return request.destination === "document";
        },
      },
    ],
  },
});

serwist.addEventListeners();
