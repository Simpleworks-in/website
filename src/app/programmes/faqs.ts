import { stripHtml } from "@/lib/faqs";
import { DELIVERY } from "@/lib/delivery";
import { price } from "@/lib/programmes";

export { stripHtml };

// Single source of truth for the visible FAQ list AND the FAQPage JSON-LD on
// /programmes. `a` is plain text and is what the schema carries. `aHtml` is an
// optional rich version for the visible page only: the same words, with markup
// (links, lists) as the only difference. Prices come from lib/programmes.ts and
// delivery labels from lib/delivery.ts, so they never differ between pages.
export type Faq = {
  q: string;
  a: string;
  aHtml?: string;
};

const rich = (q: string, aHtml: string): Faq => ({ q, a: stripHtml(aHtml), aHtml });

export const faqs: Faq[] = [
  rich(
    "How much does a business consultant cost in India?",
    `<p>Many consultants bill by the hour or the day. We don’t. Each programme has one fixed fee, agreed before we start:</p><ul><li><strong>The Simple Diagnostic:</strong> ${price("diagnostic")}, paid after the session.</li><li><strong>The Simple Reset:</strong> ${price("reset30")} for 30 days, or ${price("reset60")} for 60 days.</li><li><strong>The Simple Counsel:</strong> ${price("counsel")} a month, in person, three-month minimum.</li><li><strong>The Simple Advisory:</strong> ${price("advisory")} a month, online, three-month minimum.</li><li><strong>Custom Engagement:</strong> a fixed written quote before we begin.</li></ul>`,
  ),
  rich(
    "Which programme should I start with?",
    `<p>Most owners start with <a href="#simple-diagnostic">the Simple Diagnostic</a>: in half a day you learn what is holding back the problem you name, and what to do first. If you already know the problem and haven’t been able to fix it, go straight to <a href="#simple-reset">the Simple Reset</a>. If you want a senior thinking partner every month, choose <a href="#simple-counsel">the Simple Counsel</a> in person, or <a href="#simple-advisory">the Simple Advisory</a> online.</p>`,
  ),
  {
    q: "When should I hire a business consultant?",
    a: "When a problem has stayed unsolved for two or three quarters despite real effort, when growth has stalled and you can’t see why, or when every decision still runs through you. If you can name the problem but not its cause, the Diagnostic is the cheapest way to find out.",
  },
  {
    q: "What is the difference between a business consultant and a business coach?",
    a: "Both, depending on what you need. Simple Advisory and Simple Counsel work as one-to-one business coaching for the owner. The Diagnostic and Reset are hands-on consulting on a specific problem.",
  },
  rich(
    "How long does a consulting engagement last?",
    `<p>The length is fixed before we start:</p><ul><li><strong>The Simple Diagnostic:</strong> half a day.</li><li><strong>The Simple Reset:</strong> 30 or 60 days, with one visit a week.</li><li><strong>The Simple Counsel and the Simple Advisory:</strong> month by month, with a three-month minimum.</li><li><strong>Custom Engagement:</strong> agreed in writing before we begin.</li></ul><p>Every engagement has a defined scope and a clear end point.</p>`,
  ),
  {
    q: "How do we pay, and when?",
    a: "We raise an invoice for each payment, with a Zoho payment link in it, so you can pay by UPI, net banking or another mode that suits you. The Diagnostic is invoiced after the session. The 30-day Reset is billed at month end, and the 60-day Reset in two monthly parts. The Counsel and the Advisory are billed at the end of each month. Travel outside Bangalore is charged at actuals.",
  },
  {
    q: "Can the engagement be done online?",
    a: `Partly. The Simple Diagnostic runs ${DELIVERY.diagnostic.toLowerCase()}, and the Simple Advisory is fully online, wherever you are in India. The Simple Reset needs one visit a week and the Simple Counsel is in person, so both suit owners in Bangalore or able to meet there regularly.`,
  },
  rich(
    "Do you offer business mentoring?",
    `<p>Yes. <a href="#simple-counsel">The Simple Counsel</a> is built for it: two sessions a month on your agenda, WhatsApp access for urgent decisions, and a quarterly business review with your leadership team, at ${price("counsel")} a month. If you would rather work online, the Simple Advisory is ${price("advisory")} a month for two 90-minute sessions, without the WhatsApp access or the quarterly review.</p>`,
  ),
  {
    q: "Who will actually do the work?",
    a: "Premraj does, personally. Simpleworks is one senior adviser, not a team, so you won’t be handed to a junior consultant after the first meeting.",
  },
  {
    q: "Will you sign an NDA?",
    a: "Yes. We are happy to sign an NDA before you share financials or other sensitive information, usually before the Diagnostic begins.",
  },
];
