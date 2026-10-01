// Pushes lead-tracking events to the GTM dataLayer. Never pass personal data
// (name, email, phone, free-text answers) through here.
type DataLayerEvent = { event: string } & Record<string, string | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushEvent(payload: DataLayerEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}
