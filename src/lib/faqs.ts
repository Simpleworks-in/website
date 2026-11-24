import { price } from "@/lib/programmes";

// One FAQ library. Each page picks its questions by id with getFaqs(), and both
// the visible accordion and that page's FAQPage JSON-LD come from the same call.
//
// `a` is plain text and is what the schema carries. `aHtml` is an optional rich
// version for the visible page only: the same words, with markup (links,
// <strong>, lists) as the only difference.
export type FAQ = { q: string; a: string };
export type FaqItem = { id: string; q: string; a: string; aHtml?: string };

export function stripHtml(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s+([.,:;?!])/g, "$1")
    .trim();
}

const rich = (id: string, q: string, aHtml: string): FaqItem => ({
  id,
  q,
  a: stripHtml(aHtml),
  aHtml,
});

const LIBRARY = [
  // ── Homepage-only items ──
  {
    id: "what-growth-consultant-does",
    q: "What does a business growth consultant do?",
    a: "An MSME growth consultant works with the owner to find what is holding the business back, decide what to change, and see it through. At Simpleworks Consulting that means business strategy, go-to-market and execution, delivered personally by Premraj Menon in Bangalore and online across India.",
  },
  {
    id: "coaching-or-consulting",
    q: "What is the difference between a business consultant and a business coach?",
    a: "Both, depending on what you need. Simple Advisory and Simple Counsel work as one-to-one business coaching for the owner. The Diagnostic and Reset are hands-on consulting on a specific problem.",
  },
  rich(
    "fees",
    "How much does an MSME consultant cost in India?",
    `<p>Simpleworks publishes fixed fees: the Simple Diagnostic, also called the <a href="/business-growth-review">growth review</a>, is ${price("diagnostic")}; the Simple Reset is from ${price("reset30")}; Simple Counsel is ${price("counsel")} a month; and Simple Advisory is ${price("advisory")} a month. Custom work gets a fixed written quote.</p>`,
  ),

  // ── Shared facts (rewritten 16 Nov 2026; used by the homepage) ──
  {
    id: "client-profile",
    q: "Which businesses do you work with?",
    a: "Established Indian businesses with ₹10–200 crore in revenue and a team of 20 or more: founder-led, family-run or professionally managed, in manufacturing, consumer goods, retail, distribution and technology.",
  },
  {
    id: "location",
    q: "Do you work with MSMEs outside Bangalore?",
    a: "Yes. The Simple Diagnostic and Simple Advisory run online for businesses anywhere in India. The Simple Reset and Simple Counsel are delivered in person in Bangalore.",
  },
  {
    id: "getting-started",
    q: "How do we get started?",
    a: "Send a WhatsApp message, use the form below or email pm@simpleworks.in. Premraj replies within one business day to set up a quick introductory call.",
  },
  {
    id: "corporate-background",
    q: "Your background is corporate. How does that apply to a business my size?",
    a: "A fair question. The honest answer: a ₹25 crore business isn’t a scaled-down version of the corporates I ran — you don’t have a planning department or six layers to absorb a bad call. But the career looks different from the inside. Through those corporate years, my customers were businesses like yours — distributor owners, dealers, and retailers turning over ₹12 to ₹150 crore, mostly family-owned, often carrying several brands at once. At Airtel, I led a team in direct sales to MSMEs and corporates, covering 2,500 accounts. At Tata Docomo, I managed a multi-crore business across a network of small and large distribution partners. So a large part of my working life has gone into understanding how smaller businesses actually buy, operate, and decide — I spent those years in their offices, not mine. From 2016 to 2025, I co-founded Viworks Ventures and then joined the management team at Neoffice — small teams, tight cash. The judgement comes from large companies. The context is one I’ve worked in for most of 39 years, stripped down to what a business your size can actually carry, run by the people you already have.",
  },

  // ── /services hub items (24 Nov 2026) ──
  {
    id: "which-service",
    q: "Which service should I start with?",
    a: "Start with the problem, not the service name. If growth has stopped, begin with Sales & Distribution Strategy. If your team is not taking ownership, begin with Strategy Implementation. If you are not sure, a quick introductory call is enough to decide, and a Simple Diagnostic can settle it.",
  },
  {
    id: "tax-compliance",
    q: "Do you offer tax, compliance or registration services?",
    a: "No. We advise on strategy, sales and distribution, and execution. For tax, GST or company registration, speak to a chartered accountant or company secretary.",
  },
  // The hub has no form below its FAQ, so it links to /contact instead of
  // saying "the form below". Same question as "getting-started".
  rich(
    "getting-started-hub",
    "How do we get started?",
    `<p>Send a WhatsApp message, use the <a href="/contact">contact form</a> or email pm@simpleworks.in. Premraj replies within one business day to set up a quick introductory call.</p>`,
  ),

  // ── /programmes items ──
  // The fee answer exactly as /programmes has shown it since the Advisory
  // edit. Prices come from lib/programmes.ts.
  rich(
    "fees-programmes",
    "What is your consulting fee?",
    `<p>Every programme has a fixed fee, agreed before we start. The <a href="/business-growth-review">Simple Diagnostic</a>, also called the <a href="/business-growth-review">growth review</a>, is ${price("diagnostic")}. The Simple Reset is ${price("reset30")} for 30 days or ${price("reset60")} for 60 days. The Simple Counsel is ${price("counsel")} a month in person, with a minimum of three months. The Simple Advisory is ${price("advisory")} a month for two 90-minute sessions online, with a minimum of three months. A Custom Engagement gets a fixed written quote before we begin. There's no hourly billing.</p><p><a href="https://www.simpleworks.in/programmes">See full programme details →</a></p>`,
  ),
  rich(
    "duration",
    "How long does a consulting engagement typically last?",
    "<p>That depends on the programme, and the length is fixed before we start:</p><ul><li><strong>The Simple Diagnostic:</strong> half a day, in person in Bengaluru and online outside Bengaluru.</li><li><strong>The Simple Reset:</strong> 30 or 60 days, with one on-site visit a week (four a month).</li><li><strong>The Simple Counsel:</strong> ongoing monthly advisory, with a minimum of three months.</li><li><strong>The Simple Advisory:</strong> two 90-minute online sessions a month, with a minimum of three months.</li><li><strong>Custom Engagement:</strong> scope, duration and fee are agreed in writing before we begin.</li></ul><p>Every engagement has a defined scope and a clear end point, so there are no open-ended commitments. Not sure which fits? <a href=\"https://www.simpleworks.in/contact\">Let's have a quick introductory call.</a></p><p><a href=\"https://www.simpleworks.in/programmes\">See full programme details →</a></p>",
  ),

  // ── Not currently shown on any page; kept for later use ──
  {
    id: "typical-engagement",
    q: "What does a typical engagement look like?",
    a: "It depends on the problem. Most founders start with the Simple Diagnostic: half a day, with a written brief. Those who continue move to the Simple Reset, which runs for 30 or 60 days. Others need longer-term advisory support through a growth phase or business turnaround. We scope every engagement around the actual need, not a standard package.",
  },
  {
    id: "vs-larger-firms",
    q: "How is Simpleworks Consulting different from larger consulting firms?",
    a: "Larger management consulting firms in India are built for large organisations — they bring frameworks, teams, and timelines that don’t fit most Indian MSMEs. Simpleworks Consulting is built for businesses where the founder is in the room, decisions happen fast, and the plan must be executable by the existing team.",
  },
  {
    id: "industries",
    q: "What industries do you specialise in?",
    a: "Most clients are in manufacturing, consumer goods, retail and distribution, professional services, or technology and SaaS. Premraj Menon's own operating experience is in consumer durables, tyres, telecom and SaaS. That said, the strategic problems most MSMEs face — unclear positioning, stalled growth, weak execution — are industry-agnostic. If your business is at a turning point, the industry rarely limits what we can do together.",
  },
  {
    id: "turnaround",
    q: "Can Simpleworks Consulting help with a business turnaround?",
    a: "Yes. Business turnaround consulting is one of our core areas. We work with businesses that are profitable but losing margin, stuck in a growth plateau, or facing a structural shift in their market. The first step is always honest diagnosis — understanding what is actually causing the problem before recommending any intervention.",
  },
  {
    id: "okr",
    q: "Do you offer OKR consulting for small businesses and MSMEs?",
    a: "Yes. We design OKR frameworks that are simple enough for a 30-person business to actually use — not the complex systems built for large enterprises. We set objectives, define key results, build accountability rhythms, and run the first review cycle with you so the team knows how it works in practice.",
  },
  rich(
    "mentoring",
    "Do you offer business mentoring?",
    `<p>Yes. The Simple Counsel is built for this. Premraj works alongside you as a senior thinking partner over a longer period and helps you reach the goals you've set for the business. You get two sessions a month on your agenda, WhatsApp access for urgent decisions, and a quarterly business review with your leadership team. The programme runs for a minimum of three months.</p><p>If you need more time together, we can increase the number of visits.</p><p><a href="https://www.simpleworks.in/programmes">See The Simple Counsel →</a></p>`,
  ),
  // ── /services/msme-consulting ──
  {
    id: "msme-what-strategy-consultant-does",
    q: "What does an MSME strategy consultant actually do?",
    a: "We work out where your next growth will come from, agree the few priorities that matter, and help your team carry them out. You keep running the business; we help you decide and follow through.",
  },
  {
    id: "msme-manufacturing",
    q: "Do you work with manufacturing businesses?",
    a: "Yes. Many MSMEs are manufacturers, and we work on the business side: strategy, pricing, sales and distribution, and execution. We don’t run or redesign your shop floor or production line. If that is what you need, we will tell you on the first call.",
  },
  {
    id: "msme-location",
    q: "Do you work only in Bangalore?",
    a: "We are based in Bangalore and work with owners across India. The Simple Diagnostic can run in person or online, and the Simple Advisory is fully online, so both suit owners anywhere in India. The Simple Reset and the Simple Counsel are in person, so they suit owners in Bangalore or able to meet there regularly.",
  },
  rich(
    "msme-duration-cost",
    "How long does an engagement take, and what does it cost?",
    `<p>That depends on the programme. Each one has a fixed fee, so you know the cost before you start. Most owners begin with a Simple Diagnostic.</p><p><a href="https://www.simpleworks.in/programmes">See all programmes and fees →</a></p>`,
  ),
  {
    id: "msme-vs-large-firm",
    q: "How is this different from a large consulting firm?",
    a: "You work with Premraj himself, not a team of juniors. There are no long reports for the shelf: we agree a short plan and check that it gets done.",
  },
  rich(
    "msme-right-fit",
    "Is my business right for this?",
    `<p>We work with founder-led businesses that are ready to move. If you run a very small business, see our <a href="https://www.simpleworks.in/services/small-business-consulting">page for small business owners</a>.</p>`,
  ),
] as const satisfies readonly FaqItem[];

export type FaqId = (typeof LIBRARY)[number]["id"];

export function getFaqs(ids: readonly FaqId[]): FaqItem[] {
  return ids.map((id) => {
    const item = LIBRARY.find((f) => f.id === id);
    if (!item) throw new Error(`FAQ not found: ${id}`);
    return item;
  });
}

/** The homepage's seven, in display order. */
export const homeFaqIds = [
  "what-growth-consultant-does",
  "client-profile",
  "location",
  "fees",
  "corporate-background",
  "coaching-or-consulting",
  "getting-started",
] as const satisfies readonly FaqId[];

/** The /services hub's four, in display order. None repeats a homepage answer
 *  word for word except "coaching-or-consulting". */
export const hubFaqIds = [
  "which-service",
  "coaching-or-consulting",
  "tax-compliance",
  "getting-started-hub",
] as const satisfies readonly FaqId[];

/** /services/msme-consulting's six, in display order. */
export const msmeFaqIds = [
  "msme-what-strategy-consultant-does",
  "msme-manufacturing",
  "msme-location",
  "msme-duration-cost",
  "msme-vs-large-firm",
  "msme-right-fit",
] as const satisfies readonly FaqId[];

/** Library items /programmes uses. Its other seven live in app/programmes/faqs.ts. */
export const programmesFaqIds = ["fees-programmes", "duration"] as const satisfies readonly FaqId[];

/** FAQPage JSON-LD from the same items the page renders. */
export function faqPageSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
