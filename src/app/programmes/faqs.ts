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

// The shared lib answers also feed the homepage, which only gains the Advisory
// fee sentence. /programmes carries a fuller edit, so it rewrites the shared
// text here. A mismatch throws at build time rather than shipping silently.
const swap = (html: string, from: string, to: string) => {
  if (!html.includes(from)) throw new Error(`FAQ text not found: ${from}`);
  return html.replace(from, to);
};

const withEdit = (q: string, edit: (html: string) => string): Faq => {
  const item = FAQS.find((f) => f.q === q);
  if (!item) throw new Error(`FAQ not found: ${q}`);
  const html = edit(item.a);
  return { q: item.q, a: stripHtml(html), aHtml: html };
};

const REMOTE_HTML =
  "<p>Yes, for two of the programmes. The Simple Diagnostic is in person in Bengaluru and online outside Bengaluru. The Simple Advisory runs fully online, wherever you are in India. The Simple Reset needs weekly on-site visits, and the Simple Counsel is in person, so both suit founders in or able to meet in Bengaluru.</p>";

const NDA_HTML =
  "<p>Yes. We’re happy to sign an NDA before you share financials or other sensitive information, usually before the Diagnostic begins.</p>";

export const faqs: Faq[] = [
  withEdit("What is your consulting fee?", (h) =>
    swap(
      h,
      "The Simple Counsel is ₹75,000 a month, with a minimum of three months. For online-only support, the Simple Advisory is ₹35,000 a month for two 90-minute sessions.",
      "The Simple Counsel is ₹75,000 a month in person, with a minimum of three months. The Simple Advisory is ₹35,000 a month for two 90-minute sessions online, with no minimum.",
    ),
  ),
  withEdit("How long does a consulting engagement typically last?", (h) =>
    swap(
      h,
      "minimum of three months.</li>",
      "minimum of three months.</li><li><strong>The Simple Advisory:</strong> two 90-minute online sessions a month, month to month.</li>",
    ),
  ),
  {
    q: "Which programme should I start with?",
    a: "Most founders start with The Simple Diagnostic. In half a day you get a clear, written view of what’s working, what isn’t, and the one thing to fix first on the problem that is costing you most. If the problem is already known and just hasn’t been solved, go straight to The Simple Reset. If you want a senior sounding board for ongoing decisions, choose The Simple Counsel. If you want a senior sounding board rather than a programme, the Simple Advisory gives you two 90-minute online sessions a month.",
    aHtml:
      "<p>Most founders start with <a href=\"#simple-diagnostic\">The Simple Diagnostic</a>. In half a day you get a clear, written view of what's working, what isn't, and the one thing to fix first on the problem that is costing you most. If the problem is already known and just hasn't been solved, go straight to <a href=\"#simple-reset\">The Simple Reset</a>. If you want a senior sounding board for ongoing decisions, choose <a href=\"#simple-counsel\">The Simple Counsel</a>. If you want a senior sounding board rather than a programme, the Simple Advisory gives you two 90-minute online sessions a month.</p>",
  },
  {
    q: "How is payment structured?",
    a: "The Diagnostic is paid post engagement. The 30-day Reset is billed at month end, and the 60-day Reset in two monthly parts. The Counsel is billed monthly. The Advisory is paid after each session. All fees are fixed and agreed before we begin. Travel outside Bengaluru is charged at actuals.",
  },
  {
    q: "Can the engagement be done remotely?",
    a: stripHtml(REMOTE_HTML),
    aHtml: REMOTE_HTML,
  },
  {
    q: "Who will actually do the work?",
    a: "Premraj does, personally. Simpleworks is one senior advisor, not a team. You won’t be handed to a junior consultant after the first meeting.",
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
    a: "Yes. The Simple Counsel is built for this. Premraj works alongside you as a senior thinking partner over a longer period and helps you reach the goals you’ve set for the business. You get two sessions a month on your agenda, WhatsApp access for urgent decisions, and a quarterly business review with your leadership team. It costs ₹75,000 per month, with a minimum of three months. If you'd rather work online, the Simple Advisory is ₹35,000 a month for two 90-minute sessions, without the WhatsApp access or quarterly review.",
    aHtml:
      "<p>Yes. <a href=\"#simple-counsel\">The Simple Counsel</a> is built for this. Premraj works alongside you as a senior thinking partner over a longer period and helps you reach the goals you’ve set for the business. You get two sessions a month on your agenda, WhatsApp access for urgent decisions, and a quarterly business review with your leadership team. It costs ₹75,000 per month, with a minimum of three months. If you'd rather work online, the Simple Advisory is ₹35,000 a month for two 90-minute sessions, without the WhatsApp access or quarterly review.</p>",
  },
];
