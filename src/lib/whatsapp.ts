import { FACTS } from "../../content/facts";

// Default opening line so the chat never opens blank. Sendable as it is.
export const WHATSAPP_DEFAULT_TEXT =
  "Hi Premraj, I came across Simpleworks and would like to discuss my business.";

export function whatsappHref(text: string = WHATSAPP_DEFAULT_TEXT) {
  return `https://wa.me/${FACTS.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
