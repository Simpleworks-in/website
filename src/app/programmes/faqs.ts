import { FAQS } from "@/lib/faqs";

// Single source of truth for the visible FAQ list AND the FAQPage JSON-LD on
// /programmes. `a` is plain text and is what the schema carries. `aHtml` is an
// optional rich version for the visible page only — it must contain exactly the
// same words as `a`, with markup (links, <strong>) as the only difference.
export type Faq = {
  q: string;
  a: string;
  aHtml?: string;
};

export function stripHtml(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s+([.,:;?!])/g, "$1")
    .trim();
}

// The four pre-existing FAQs, unchanged. Two live in the shared lib and are
// picked up from there so their copy cannot drift; two were inline on the page.
const existing = (q: string): Faq => {
  const item = FAQS.find((f) => f.q === q);
  if (!item) throw new Error(`FAQ not found: ${q}`);
  return { q: item.q, a: stripHtml(item.a), aHtml: item.a };
};

const REMOTE_HTML =
  "<p>Yes, for two of the three programmes. The Simple Diagnostic (₹15,000 online) and The Simple Counsel can both run fully online, wherever you are in India. The Simple Reset needs weekly on-site visits, because the work happens inside your business with your team. Outside Bengaluru, travel for it is charged at actuals.</p>";

const NDA_HTML =
  "<p>Yes. We're happy to sign an NDA before you share financials or other sensitive information, usually before the Diagnostic begins.</p>";

export const faqs: Faq[] = [
  existing("What is your consulting fee?"),
  existing("How long does a consulting engagement typically last?"),
  {
    q: "Which programme should I start with?",
    a: "Most founders start with The Simple Diagnostic. In half a day you get a clear, written view of what's working, what isn't, and the one thing to fix first. If the problem is already known and just hasn't been solved, go straight to The Simple Reset. If you want a senior sounding board for ongoing decisions, choose The Simple Counsel.",
    aHtml:
      "<p>Most founders start with <a href=\"#simple-diagnostic\">The Simple Diagnostic</a>. In half a day you get a clear, written view of what's working, what isn't, and the one thing to fix first. If the problem is already known and just hasn't been solved, go straight to <a href=\"#simple-reset\">The Simple Reset</a>. If you want a senior sounding board for ongoing decisions, choose <a href=\"#simple-counsel\">The Simple Counsel</a>.</p>",
  },
  {
    q: "Is the Diagnostic fee adjusted if I continue?",
    a: "Yes. The Diagnostic fee is credited in full against any programme that follows, so the half day costs you nothing extra if we continue working together.",
  },
  {
    q: "How is payment structured?",
    a: "The Diagnostic is paid up front. The 30-day Reset is billed at month end, and the 60-day Reset in two monthly parts. The Counsel is billed monthly. All fees are fixed and agreed before we begin, and exclusive of GST. Travel outside Bengaluru is charged at actuals.",
  },
  {
    q: "Can the engagement be done remotely?",
    a: stripHtml(REMOTE_HTML),
    aHtml: REMOTE_HTML,
  },
  {
    q: "Who will actually do the work?",
    a: "Prem does, personally. Simpleworks is one senior advisor, not a team. You won't be handed to a junior consultant after the first meeting.",
  },
  {
    q: "What size of business do you work with?",
    a: "Founder-led Indian businesses with ₹10–200 crore in revenue, usually MSMEs and growing companies that have hit a ceiling on growth, clarity or execution.",
  },
  {
    q: "Will you sign an NDA?",
    a: stripHtml(NDA_HTML),
    aHtml: NDA_HTML,
  },
  {
    q: "Do you offer business mentoring?",
    a: "Yes. The Simple Counsel is built for this. Prem works alongside you as a senior thinking partner over a longer period and helps you reach the goals you've set for the business. You get two sessions a month on your agenda, WhatsApp access for urgent decisions, and a quarterly business review with your leadership team. It costs ₹75,000 per month, with a minimum of three months.",
    aHtml:
      "<p>Yes. <a href=\"#simple-counsel\">The Simple Counsel</a> is built for this. Prem works alongside you as a senior thinking partner over a longer period and helps you reach the goals you've set for the business. You get two sessions a month on your agenda, WhatsApp access for urgent decisions, and a quarterly business review with your leadership team. It costs ₹75,000 per month, with a minimum of three months.</p>",
  },
];
