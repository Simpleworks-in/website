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
  // ── /services/gtm-consulting ──
  {
    id: "gtm-find-distributors",
    q: "How do I find and appoint distributors for my product in India?",
    a: "Start with the market you want to open, not the distributor. Decide which customers and outlets you need to reach there, then look for distributors who already serve them and have the reach, credit capacity and sales team to do it. Agree territory, margins, credit and targets in writing before the first order, and review sales with them every month. We help you choose the market, define the distributor you need, and set the terms and the review.",
  },
  {
    id: "gtm-general-modern-trade",
    q: "Should we sell through general trade or modern trade?",
    a: "Usually both, one after the other. General trade, the small outlets most customers buy from, builds reach. Modern trade, the large retail chains and organised stores, builds visibility, but asks for listing fees, higher margins and longer credit. We help you decide which comes first for your product, and which terms you can afford.",
  },
  {
    id: "gtm-vs-marketing-plan",
    q: "What is a go-to-market strategy, and how is it different from a marketing plan?",
    a: "A marketing plan lists the activities you will run: campaigns, content, events and advertising. A go-to-market strategy decides who you are selling to, why they should buy from you, and how you will reach them. The strategy comes first. Marketing that is not built on it rarely works, however well it is run.",
  },
  {
    id: "gtm-vs-agency",
    q: "How is this different from hiring a marketing agency?",
    a: "An agency runs campaigns. We work out who you should sell to, why they should buy and through which channels, which is what an agency needs to be told. If you already have an agency, the plan gives them a clear brief.",
  },
  {
    id: "gtm-location",
    q: "We are not in Bangalore. Can you still help?",
    a: "Yes. We are based in Bangalore and work with owners across India. The Simple Diagnostic can run in person or online, and the Simple Advisory is fully online, wherever you are. The Simple Reset needs one visit a week, so it suits owners in Bangalore or able to meet there regularly; travel outside Bangalore is charged at actuals.",
  },
  rich(
    "gtm-duration-cost",
    "How long does it take, and what does it cost?",
    `<p>Go-to-market work usually starts with a Simple Reset, over 30 or 60 days. After that, the Simple Counsel (in person) or the Simple Advisory (online) continues month by month, with a three-month minimum. Each has a fixed fee, so you know the cost before we begin.</p><p><a href="https://www.simpleworks.in/programmes">See all programmes and fees →</a></p>`,
  ),
  rich(
    "gtm-startups",
    "Do you work with startups and SaaS businesses?",
    `<p>Yes. The questions are the same: who exactly the customer is, why they should choose you, and how to reach them. For a startup, the answer is often a narrower first market than the founders expect. Early-stage founders looking for a mentor can also see our <a href="https://www.simpleworks.in/startup-mentor-bengaluru">page for startup founders</a>.</p>`,
  ),
  // ── /services/execution-consulting ──
  {
    id: "exec-why-fails",
    q: "Why does strategy execution fail in small businesses?",
    a: "Most stalled plans fail for three reasons: too many priorities, no single owner for each one, and progress checked once a quarter instead of every week. Fix those and the same plan usually starts to move. A new plan on its own rarely helps.",
  },
  {
    id: "exec-weekly-review",
    q: "How do I run a weekly business review?",
    a: "Keep it short, and hold it at the same time every week. Each owner reports on their priority in a minute or two: what got done, what didn’t, and what is in the way. Anything that needs a decision is decided in the room, with a name and a date against it. Numbers that need a longer discussion go to the monthly review.",
  },
  {
    id: "exec-annual-operating-plan",
    q: "What is an annual operating plan, and how do we follow it through the year?",
    a: "An annual operating plan sets the year’s targets, budgets and priorities. To be used, it has to be broken into quarterly goals and weekly actions, each with an owner, and checked in the weekly and quarterly reviews. Otherwise it sits in a folder until next year’s planning meeting.",
  },
  {
    id: "exec-accountability",
    q: "How do I build accountability without adding bureaucracy?",
    a: "Give each priority one owner and one measure, and review it in the same short meeting every week. That routine does more than any appraisal form. Keep the measures few and the meeting short: once it starts to feel like paperwork, managers stop updating it.",
  },
  {
    id: "exec-software",
    q: "Do we need software to run this?",
    a: "No. A shared spreadsheet and a standing weekly meeting are enough for most MSMEs. If your team later needs a tool, we will help you choose one, but the routine has to work first.",
  },
  rich(
    "exec-duration-cost",
    "How long does it take, and what does it cost?",
    `<p>Execution work usually starts with a Simple Reset, over 30 or 60 days. The 60-day version puts the weekly review in place with your team. After that, the Simple Counsel (in person) or the Simple Advisory (online) continues month by month, with a three-month minimum. Each has a fixed fee, so you know the cost before we begin.</p><p><a href="https://www.simpleworks.in/programmes">See all programmes and fees →</a></p>`,
  ),
  // ── /startup-mentor-bengaluru ──
  {
    id: "startup-saas-experience",
    q: "My company is SaaS. Why would your experience help?",
    a: "Premraj spent five years managing growth and product at an enterprise SaaS business, and before that built sales systems through dealers, distributors and telecom channels. The problem at your stage is the same one: making revenue predictable when it can no longer depend on one person. What he doesn’t bring is fundraising, product or engineering help, and he will say so on the first call.",
  },
  {
    id: "startup-mentorship-programme",
    q: "Do you run a startup mentorship programme?",
    a: "Not a cohort programme. Accelerators work with ten or twenty startups at once on a fixed curriculum. Premraj works with a few founders at a time, one to one, on your business and the one constraint holding it back, through the Simple Counsel or the Simple Advisory.",
  },
  {
    id: "startup-stage",
    q: "What stage of startup do you work with?",
    a: "Past product-market fit: you have paying customers and repeat revenue, and the question has moved from whether anyone will buy to whether anyone but you can sell it. In practice that is usually ₹2 crore ARR and above. Earlier than that, an accelerator will serve you better.",
  },
  {
    id: "startup-equity",
    q: "Do you take equity?",
    a: "No. The work is on a fixed fee with no equity, so the only incentive is the quality of the advice.",
  },
  {
    id: "startup-location",
    q: "In person or online?",
    a: "Both. The Simple Counsel is in person in Bangalore. The Simple Advisory is fully online, wherever you are in India, and the Simple Diagnostic can run in person or online.",
  },
  rich(
    "startup-duration-cost",
    "How long does it take, and what does it cost?",
    `<p>Most founders start with the Simple Diagnostic, a half-day session at ${price("diagnostic")}. After that, the Simple Counsel (${price("counsel")} a month, in person) or the Simple Advisory (${price("advisory")} a month, online) continues month by month, with a three-month minimum. Each has a fixed fee, agreed before we begin.</p><p><a href="https://www.simpleworks.in/programmes">See all programmes and fees →</a></p>`,
  ),
  // ── /services/okr-consulting (handover 25 Nov; order fixed) ──
  {
    id: "okr-annual-targets",
    q: "We already set annual targets. Is that the same as OKRs?",
    a: "No. An annual target is the destination for the year. An OKR is the step for the current quarter, with a number and a named owner on every part. Most MSMEs have the target and no path with owners.",
  },
  {
    id: "okr-duration",
    q: "How long does an OKR consulting engagement typically last?",
    a: "After set-up, two quarters of live OKRs run alongside your team, then handover. Set-up comes first, through the Simple Reset or as an add-on to the Simple Diagnostic. The two quarters then run within Simple Counsel.",
  },
  {
    id: "okr-cost",
    q: "What does the OKR work cost?",
    a: `OKR work is part of the Simple Counsel (${price("counsel")} a month, minimum three months). It is set up as the end result of a Simple Reset (${price("reset60")} for 60 days) or as an add-on to the Simple Diagnostic (${price("diagnostic")}). As an add-on to the Diagnostic, OKR implementation is ${price("okrAddOn")} for three in-person sessions. Fees are fixed and agreed before work begins.`,
  },
  {
    id: "okr-only",
    q: "Do you run OKR-only projects?",
    a: "No. OKRs are part of how Simpleworks runs strategy implementation. OKR-only work, such as software rollouts, HR performance systems or certification, is a specialist field, and we will say so on the first call.",
  },
  {
    id: "okr-target-review",
    q: "Is an OKR just a target review?",
    a: "Close. The Objective is the target and the Key Results are the key indicators. What makes it an OKR is the rhythm: one quarter, a named owner on every indicator, a weekly check-in and an honest score at the end.",
  },
  {
    id: "okr-vs-workshop",
    q: "What is OKR consulting, and is it different from a workshop?",
    a: "A workshop gives your team the vocabulary. OKR consulting builds the OKRs for your business, runs the first two quarters with you and leaves a system your team can run. The difference shows in the third month, when the weekly check-ins are still happening.",
  },
  {
    id: "okr-software",
    q: "Do we need OKR software?",
    a: "No. A shared sheet and a fixed weekly meeting are enough for a team of this size. Software helps later, once the habit exists.",
  },
  {
    id: "okr-how-many",
    q: "How many OKRs should a small business have?",
    a: "Start with one company objective and two Key Results. Each team adds one objective with two Key Results. More than that and the weekly check-in stops being a conversation.",
  },
  {
    id: "okr-first-step",
    q: "What does the first step look like?",
    a: "An introductory call. You describe what is not moving, and we decide together whether OKRs are the right tool, before any fee is agreed.",
  },
  // ── /tamil-nadu-msme-consultant ──
  {
    id: "tn-remote",
    q: "Can a consultant in Bangalore really help a business in Coimbatore or Tiruppur?",
    a: "Yes. Most of the work is a weekly or monthly call, shared documents and WhatsApp, which is how most owners already run their week. Premraj visits when the work needs it.",
  },
  {
    id: "tn-visits",
    q: "Do you visit our unit?",
    a: "In Hosur and Krishnagiri, as often as the work needs. Elsewhere in Tamil Nadu, visits are planned into the programme, with travel charged at actuals.",
  },
  {
    id: "tn-tamil",
    q: "Can we talk in Tamil?",
    a: "Premraj understands Tamil and speaks a little. Sessions are in English, and your team can speak in Tamil where that is easier.",
  },
  {
    id: "tn-nda",
    q: "Will you sign an NDA?",
    a: "Yes. Your numbers and your family’s matters stay with you.",
  },
  rich(
    "tn-cost",
    "How much does it cost?",
    '<p>Every programme has a fixed fee, listed on the <a href="/programmes">programmes page</a>. After a first conversation, Premraj suggests the one that fits and confirms the fee, plus travel at actuals, in writing.</p>',
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

/** /services/gtm-consulting's six, in display order. */
export const gtmFaqIds = [
  // Cost and out-of-city first (structure review, 24 Nov).
  "gtm-duration-cost",
  "gtm-location",
  "gtm-find-distributors",
  "gtm-general-modern-trade",
  "gtm-vs-marketing-plan",
  "gtm-vs-agency",
  "gtm-startups",
] as const satisfies readonly FaqId[];

/** /services/execution-consulting's six, in display order. */
export const executionFaqIds = [
  "exec-why-fails",
  "exec-weekly-review",
  "exec-annual-operating-plan",
  "exec-accountability",
  "exec-software",
  "exec-duration-cost",
] as const satisfies readonly FaqId[];

/** /startup-mentor-bengaluru's six, in display order. */
export const startupFaqIds = [
  "startup-saas-experience",
  "startup-mentorship-programme",
  "startup-stage",
  "startup-equity",
  "startup-location",
  "startup-duration-cost",
] as const satisfies readonly FaqId[];

/** /services/okr-consulting's nine, in the handover's order. */
export const okrFaqIds = [
  "okr-annual-targets",
  "okr-duration",
  "okr-cost",
  "okr-only",
  "okr-target-review",
  "okr-vs-workshop",
  "okr-software",
  "okr-how-many",
  "okr-first-step",
] as const satisfies readonly FaqId[];

/** /tamil-nadu-msme-consultant's five, in display order. */
export const tnFaqIds = ["tn-remote", "tn-visits", "tn-tamil", "tn-nda", "tn-cost"] as const satisfies readonly FaqId[];

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
