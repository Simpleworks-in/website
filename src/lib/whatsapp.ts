import { FACTS } from "../../content/facts";

// Default opening line so the chat never opens blank. The [business] slot is
// for the visitor to fill in.
export const WHATSAPP_DEFAULT_TEXT =
  "Hi Premraj, I run a [business] and would like to discuss…";

export function whatsappHref(text: string = WHATSAPP_DEFAULT_TEXT) {
  return `https://wa.me/${FACTS.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
