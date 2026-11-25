import Link from "next/link";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import type { RedHeading } from "@/content/home";
import { faqPageSchema, getFaqs, okrFaqIds } from "@/lib/faqs";
import { price } from "@/lib/programmes";
import { whatsappHref } from "@/lib/whatsapp";

// /services/okr-consulting, rebuilt 25 Nov 2026 from okr-page-final-handover.md
// (mock "OKR Page Mock" v16). OKRs sit inside strategy implementation: no
// standalone OKR service. Premraj's decisions on the handover: Bangalore and
// no call duration in visible copy; hero facts and stage names kept; the
// chemical manufacturer case confirmed for publication.

const TITLE = "OKRs for MSME Strategy Execution | Simpleworks Consulting";
const DESCRIPTION =
  "Run strategy execution in your MSME with OKRs: one page per team, a weekly check-in and a monthly target review. Led by Premraj Menon, Bangalore.";
const URL = "https://www.simpleworks.in/services/okr-consulting";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Simpleworks Consulting",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const CTA_LABEL = "WhatsApp Premraj";

// ── Copy ──

const HERO = {
  eyebrow: "Strategy implementation · OKRs",
  h1: { text: "OKRs for strategy execution", red: "in Indian MSMEs" },
  sub: "Goals that cascade. Accountability that sticks.",
  lead: "OKRs are the weekly rhythm inside Simpleworks Consulting’s strategy implementation work for founder-led Indian MSMEs with ₹10 crore to ₹200 crore and above in revenue. Premraj Menon builds them with your team, runs two live quarters alongside you, then hands over.",
  facts: [
    { big: "₹10–200 Cr+", small: "Founder-led businesses we work with" },
    { big: "2 quarters", small: "Of live OKRs, after set-up" },
    { big: "1 page", small: "For the company, and one for each team" },
  ],
};

const HERO_CARD = {
  label: "One page. One quarter.",
  objective: "Become the first-choice supplier for our top 20 dealers.",
  krs: [
    { name: "KR 1", text: "Dealer repeat orders from 55% to 70%", now: "61%", owner: "Sales Manager", status: "On track", bar: 40 },
    { name: "KR 2", text: "Orders dispatched within 48 hours: 95%", now: "88%", owner: "Plant Manager", status: "At risk", bar: 28 },
  ],
  caption: "Illustrative example, not a client result.",
};

// Existing live copy, word for word (handover 4.2).
const SITUATIONS = {
  eyebrow: "When founders call us",
  heading: { text: "Does this sound like", red: "your business?" },
  items: [
    {
      title: "The team is busy but the business isn’t moving",
      body: "Everyone is working hard. The founder is working hardest. But at the end of the quarter, the numbers haven’t moved and nobody can explain exactly why. Activity is high. Progress is unclear. The problem is the absence of goals specific enough to create direction and accountability at every level of the team.",
    },
    {
      title: "Annual targets exist but nobody owns the path to them",
      body: "The business has a revenue target for the year. Everyone knows the number. No one can tell you which specific actions — owned by which specific people — will get the business there by December. A target without a cascade of OKRs beneath it is a wish, not a plan.",
    },
    {
      title: "Previous OKR attempts haven’t worked",
      body: "Many founders have tried OKRs — often after reading a book or attending a workshop — and found that within two quarters, the system was quietly abandoned. This is almost never a failure of intent. It is a failure of design: too many objectives, no review rhythm, and goals that weren’t connected to the real work of the business.",
    },
    {
      title: "The team has grown past what informal management can handle",
      body: "A 6-person team can be managed through proximity and conversation. A 25-person team cannot. When the business grows past the point where the founder can personally track what everyone is working on, a formal goal system stops being optional. OKRs are the right tool for this transition — if they’re designed for the actual capacity of the team.",
    },
  ],
};

const PLAIN = {
  eyebrow: "OKR in plain words",
  heading: { text: "An OKR is one change you want,", red: "and the numbers that prove it." },
  parts: [
    {
      tag: "The O",
      name: "Objective",
      text: "One sentence saying what you want to change this quarter. It is written in words, it is ambitious, and anyone in the business can read it and understand the direction.",
      example: "Become the first-choice supplier for our top 20 dealers.",
    },
    {
      tag: "The KR",
      name: "Key Results",
      text: "Two numbers, three at most, that show the objective happened. Each has a starting figure, a target and one named owner.",
      example: "Dealer repeat orders from 55% to 70%. Owner: Sales Manager.",
    },
  ],
  line: "Another way to say it: the Objective is the target, and the Key Results are the key indicators you review against it. An OKR is a target review with a named owner on every indicator, run every week.",
  test: "An OKR is not a task list and not your whole dashboard. At the end of the quarter, anyone can say yes or no: did we hit it?",
};

const VERSUS = {
  eyebrow: "OKR vs KPI",
  heading: { text: "Most MSMEs track KPIs.", red: "That is not the same as having OKRs." },
  cols: ["", "What it tells you", "How long it lasts", "Who owns it"],
  rows: [
    { name: "Annual target", what: "Where the business should be at the end of the year.", how: "The year", who: "The founder", highlight: false },
    { name: "KPI", what: "How the business is running. Monthly sales, collections, dispatch time.", how: "Ongoing", who: "Whoever runs that function", highlight: false },
    { name: "OKR", what: "What you are changing right now, and the numbers that prove it changed.", how: "One quarter", who: "One named person per Key Result", highlight: true },
  ],
  closing: "If you already set annual targets, you have the destination but not the path. KPIs stay on your dashboard. OKRs pick the one or two things that must change this quarter and put an owner against each.",
  soon: "Read: OKR vs KPI for an MSME",
};

const EXAMPLES = {
  eyebrow: "What it looks like",
  heading: { text: "One objective,", red: "carried down to every team." },
  intro: "A distributor needs one objective and two numbers. A manufacturer carries the same idea down: the owner sets one objective with two Key Results, then the Sales Manager with the sales team, and the Plant Manager, each write one of their own, built to move it.",
  distributor: {
    label: "Example 1 · A distributor",
    objective: "Stop depending on two large customers.",
    krs: [
      { text: "Share of sales from top two customers: 60% to 45%", owner: "Owner" },
      { text: "20 new retail accounts each quarter", owner: "Sales Manager" },
    ],
  },
  manufacturer: {
    label: "Example 2 · A manufacturer",
    top: {
      who: "Owner",
      objective: "Become the first-choice supplier for our top 20 dealers.",
      krs: [
        { text: "Dealer repeat orders from 55% to 70%", owner: "Sales Manager" },
        { text: "Orders dispatched within 48 hours: 88% to 95%", owner: "Plant Manager" },
      ],
    },
    branches: [
      {
        who: "Sales Manager and sales team",
        objective: "Make reordering easy for dealers.",
        krs: [
          { text: "Every top-20 dealer visited once a month", owner: "Sales Manager" },
          { text: "12 new dealers appointed in two states", owner: "Sales team" },
        ],
      },
      {
        who: "Plant Manager",
        objective: "Ship what dealers order, on time.",
        krs: [
          { text: "Stock-outs on top 30 products: 14 to 5 a month", owner: "Plant Manager" },
          { text: "Pending orders older than 7 days: 30 to 5", owner: "Plant Manager" },
        ],
      },
    ],
  },
  caption: "Illustrative examples, not client results.",
};

const CADENCE = {
  eyebrow: "The simple version",
  heading: { text: "A weekly check-in and", red: "a monthly target review." },
  intro: "You do not need software or a long framework. You need one page per team and three meetings that never move: the weekly check-in, the monthly target review and the quarterly score.",
  meetings: [
    { when: "Every week", name: "The check-in", text: "30 minutes, same day, same time. Each Key Result owner shows red, amber or green, names one blocker and makes one commitment for next week." },
    { when: "Every month", name: "The target review", text: "60 minutes. Are the numbers moving? Drop what is not working, change what needs changing, and move resources to where the quarter is slipping." },
    { when: "End of each quarter", name: "Score and reset", text: "Half a day. Score honestly, note what you learned, and set the next quarter. A 70% on an ambitious target beats a 100% on an easy one." },
  ],
  aligned: {
    title: "How you know the team is aligned",
    text: "Ask any three people what the company objective is and which number they move. If they cannot answer, it is not aligned yet. Once it is, you stop chasing people one by one. The weekly check-in is the only place progress is discussed.",
  },
  rules: {
    title: "Four rules that keep it simple",
    items: [
      "One company objective, two Key Results.",
      "Cascade one level only. Each team writes one objective.",
      "Keep KPIs on a separate dashboard.",
      "Do not link OKRs to bonuses in the first two quarters.",
    ],
  },
};

const STAGES = {
  eyebrow: "How OKR implementation runs",
  heading: { text: "Six stages,", red: "and then your team runs it." },
  items: [
    { name: "Understand the strategy", timing: "Set-up", text: "Working sessions with you and your leadership team. We review your annual targets, KPIs and any earlier OKR attempts, and find the one or two priorities for the first quarter.", get: "the priorities, on one page." },
    { name: "Write the OKRs", timing: "Set-up", text: "Company objective and Key Results first, then each team’s. Every Key Result gets a named owner.", get: "one page per level." },
    { name: "Launch with the full team", timing: "Set-up", text: "A session with everyone, not just leadership, so each person sees which number they move. The weekly check-in goes on the calendar.", get: "a team that can state the objective." },
    { name: "Run the first live quarter", timing: "Quarter one, alongside your team", text: "The weekly check-ins start, run by your team with a short update to Premraj. Within Counsel he joins the monthly review and one coaching session a month, fixes what is unclear and helps score the quarter.", get: "a scored quarter and what we learned." },
    { name: "Run the second quarter", timing: "Quarter two, your team leads", text: "The team runs the check-ins. Premraj steps back to the monthly review and adjusts the OKRs.", get: "a quarter run mostly by your team." },
    { name: "Hand over", timing: "End of engagement", text: "One-page templates, the meeting calendar and a short guide to running the next quarter.", get: "a system you run without us." },
  ],
  roles: [
    { who: "You", text: "Set the priorities and join the monthly reviews." },
    { who: "Your leaders and team", text: "Own the Key Results and run the weekly check-ins." },
    { who: "Premraj", text: "Designs the system, coaches the first quarter, then steps back." },
  ],
};

const FIT = {
  eyebrow: "Where OKRs fit",
  heading: { text: "OKRs are one part of", red: "strategy implementation." },
  yes: {
    label: "What you get: OKRs inside execution",
    text: "OKRs sit alongside the review rhythm and clear ownership that turn a plan into results. Execution enablement is the third pillar of the Simpleworks 4P framework.",
    link: { label: "See strategy implementation", href: "/services/execution-consulting" },
  },
  no: {
    label: "What we do not do: OKR-only projects",
    text: "We do not run OKR-only projects, OKR software rollouts, HR performance appraisal systems or OKR certification. Those are specialist fields, and we will say so on the first call.",
  },
};

const WHY = {
  eyebrow: "Why it works",
  heading: { text: "OKRs built for MSMEs", red: "work differently." },
  items: [
    { title: "Built for lean teams, not enterprise functions", text: "No cascade through six layers. One page for the company and one for each team." },
    { title: "No software dependency", text: "A shared Excel sheet and a fixed weekly meeting are enough. The chemical manufacturer ran its whole quarter on one. Software can come later, once the habit exists." },
    { title: "Two live quarters before handover", text: "We stay through two quarters, so the first rough edges are fixed with you, not left behind." },
    { title: "Premraj Menon leads every engagement personally", text: "39 years in business, and nearly ten years with MSMEs, about 3,000 MSME partners. You work with him directly, not with a junior team." },
  ],
};

// Confirmed for publication by Premraj, 25 Nov. Anonymous; no numbers beyond these.
const PROOF = {
  eyebrow: "A real engagement",
  heading: { text: "One quarter,", red: "one sales team." },
  meta: "A mid-size chemical manufacturer · a sales manager and two sales executives",
  rows: [
    { label: "Before", text: "There was no set system for fixing targets. Nobody tracked who was being called, when, or what came of each call." },
    { label: "What we set up", text: "One central objective and three Key Results for one quarter, kept on a single Excel sheet. Each person got a volume target by customer category, how often to call each customer, how to record the outcome of every call, and a lead list to follow up and close. A daily Excel sheet showed each executive his incoming calls, outgoing calls and tonnes sold to review at day end, with the list of customers to follow up the next day." },
  ],
  changedLead: "Daily volumes rose 20%.",
  changedRest: "The manager could track both executives on their outcomes, and the team stayed focused on delivering them.",
  link: { label: "More engagements on the client stories page", href: "/client-success-stories" },
};

const COST = {
  eyebrow: "Cost and length",
  heading: { text: "What the OKR work costs", red: "and how long it takes." },
  lead: "OKRs are part of strategy implementation, delivered through Simple Counsel. They are set up through a Simple Reset or a Simple Diagnostic add-on, and run for two quarters within Counsel. Fees are fixed and agreed before work begins.",
  items: [
    {
      name: "Set-up",
      text: `The end result of a Simple Reset (60 days, ${price("reset60")}), or an add-on to the Simple Diagnostic: OKR implementation for ${price("okrAddOn")}, three in-person sessions, on top of the ${price("diagnostic")} Diagnostic. Set-up fits inside the 60 days of the Reset.`,
    },
    { name: "Two quarters", text: `Run within Simple Counsel: ${price("counsel")} a month, minimum three months, in person.` },
    { name: "OKR only?", text: "We do not take OKR-only engagements. OKRs are part of strategy implementation." },
  ],
  link: { label: "See all programmes and fees", href: "/programmes" },
};

const QUESTIONS = {
  eyebrow: "Questions",
  heading: { text: "Before you", red: "get in touch." },
  after: { lead: "Questions about turning the plan into delivery?", label: "See strategy implementation", href: "/services/execution-consulting" },
};

const CLOSING = {
  eyebrow: "Next step",
  heading: { text: "Start with", red: "an introductory call." },
  text: "Most founders know something is not moving but not which goals to set first. A short call is usually enough to tell whether OKRs are the right tool.",
  trust: "Based in Bangalore · Working across India · Response within one business day",
};

const DEEPER = {
  eyebrow: "Going deeper",
  posts: [
    { title: "Why 90% of Indian MSMEs Have No Real Strategy — And the 3-Step Fix", href: "/blog/why-90-of-indian-msm-es-have-no-real-strategy-and-the-3-step-fix" },
    { title: "MSME Consulting: Why a Focused Firm Delivers More Than a Full-Service One", href: "/blog/msme-consulting-why-a-focused-firm-delivers-more-than-a-full-service-one" },
    { title: "Who Is Your Customer, Really?", href: "/blog/who-is-your-customer-really" },
    { title: "OKR Consulting for Indian MSMEs: Why Less Is More", href: "/blog/okr-consulting-for-indian-msm-es-why-less-is-more" },
  ],
};

const FAQS = getFaqs(okrFaqIds);

const schemaMarkup = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.simpleworks.in" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.simpleworks.in/services" },
      { "@type": "ListItem", position: 3, name: "OKR", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "OKRs inside strategy implementation",
    provider: { "@id": "https://www.simpleworks.in/#organization" },
    areaServed: { "@type": "Country", name: "India" },
    description: DESCRIPTION,
    url: URL,
  },
  faqPageSchema(FAQS),
];

// ── Shared styles (same scale as the /services pages) ──
const SECTION =
  "reveal py-14 md:py-[72px] px-6 md:pr-[60px] md:pl-[132px] border-t-[0.5px] border-rule";
const LABEL = "text-[11px] md:text-[13px] uppercase tracking-widest text-light leading-[1.6]";
const EYEBROW = `${LABEL} mb-4 md:mb-5`;
const H2 = "text-[28px] md:text-[36px] leading-[1.18] font-bold tracking-tight-1";
const H3 = "text-[20px] md:text-[24px] font-bold leading-[1.3] text-ink";
const HEADER = "mb-10";
const BODY = "text-[16px] md:text-[17px] leading-[1.78] text-mid";
const BUTTON =
  "inline-flex items-center font-serif text-sm tracking-wide-3 text-red border-[1.5px] border-red px-9 py-[14px] rounded-[1px] bg-transparent cursor-pointer transition-colors hover:bg-red hover:text-white w-fit";
const TEXT_LINK = "text-red hover:underline w-fit";
const OWNER = "text-[12px] text-light whitespace-nowrap";

function Heading({ heading }: { heading: RedHeading }) {
  return (
    <h2 className={H2}>
      {heading.text} <span className="text-red">{heading.red}</span>
    </h2>
  );
}

function SectionHeader({ eyebrow, heading }: { eyebrow: string; heading: RedHeading }) {
  return (
    <div className={HEADER}>
      <p className={EYEBROW}>{eyebrow}</p>
      <Heading heading={heading} />
    </div>
  );
}

function WhatsAppButton({ dataCta, className = "" }: { dataCta: string; className?: string }) {
  return (
    <a
      href={whatsappHref()}
      data-cta={dataCta}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BUTTON} ${className}`}
    >
      <WhatsAppIcon size={18} />
      {CTA_LABEL}
    </a>
  );
}

function KrList({ krs }: { krs: { text: string; owner: string }[] }) {
  return (
    <ul>
      {krs.map((kr) => (
        <li key={kr.text} className="flex items-baseline justify-between gap-4 border-t-[0.5px] border-rule py-2.5 text-[15px] leading-[1.5] text-ink">
          <span>{kr.text}</span>
          <span className={OWNER}>{kr.owner}</span>
        </li>
      ))}
    </ul>
  );
}

function OkrBox({ who, objective, krs, strong = false }: { who: string; objective: string; krs: { text: string; owner: string }[]; strong?: boolean }) {
  return (
    <div className={`bg-bg p-5 md:p-6 border ${strong ? "border-ink" : "border-rule"}`}>
      <p className={`${LABEL} mb-1.5`}>{who}</p>
      <p className="mb-3 text-[17px] md:text-[18px] font-bold leading-[1.35] text-ink">{objective}</p>
      <KrList krs={krs} />
    </div>
  );
}

function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const num = (i: number) => String(i + 1).padStart(2, "0");

export default function OkrConsultingPage() {
  const ex = EXAMPLES.manufacturer;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* ── 1. HERO ── text left, one-page example card right. */}
      <section className="px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <div className="flex flex-col min-[900px]:flex-row min-[900px]:items-start gap-x-14 gap-y-10">
          <div className="min-[900px]:flex-[1_1_420px] min-w-0">
            <p className={EYEBROW}>{HERO.eyebrow}</p>
            <h1 className="mb-5 max-w-[640px] text-[36px] leading-[1.1] font-bold tracking-tight-1 text-ink md:text-hero-h1">
              {HERO.h1.text} <span className="text-red">{HERO.h1.red}</span>
            </h1>
            <p className="mb-6 max-w-[560px] text-[16px] md:text-[18px] italic leading-[1.65] text-mid">{HERO.sub}</p>
            <p className={`${BODY} max-w-[560px]`}>{HERO.lead}</p>
            <WhatsAppButton dataCta="okr-hero" className="mt-8 md:mt-10" />
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-y-4 border-t-[0.5px] border-rule pt-6 max-w-[620px]">
              {HERO.facts.map((f, i) => (
                <div key={f.big} className={`sm:px-5 ${i === 0 ? "sm:pl-0" : "sm:border-l-[0.5px] sm:border-rule"}`}>
                  <dt className="whitespace-nowrap text-[20px] md:text-[22px] font-bold leading-[1.15] text-ink">{f.big}</dt>
                  <dd className="mt-1 text-[13px] leading-[1.45] text-light">{f.small}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="min-[900px]:flex-[1_1_420px] min-w-0 min-[900px]:mt-[41px]">
            <figure className="border border-red bg-bg p-6 md:p-8">
              <p className={`${LABEL} mb-3`}>{HERO_CARD.label}</p>
              <p className="mb-1 text-[12px] uppercase tracking-widest text-light">Objective</p>
              <p className="mb-6 text-[19px] md:text-[21px] font-bold leading-[1.35] text-ink">{HERO_CARD.objective}</p>
              <ul className="flex flex-col gap-5">
                {HERO_CARD.krs.map((kr) => (
                  <li key={kr.name} className="border-t-[0.5px] border-rule pt-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-[15px] leading-[1.5] text-ink">
                        <strong className="font-bold">{kr.name}:</strong> {kr.text}
                      </p>
                      <p className="text-[18px] font-bold text-ink">{kr.now}</p>
                    </div>
                    <div className="mt-2 h-1.5 w-full bg-rule" aria-hidden="true">
                      <div className="h-1.5 bg-mid" style={{ width: `${kr.bar}%` }} />
                    </div>
                    <div className="mt-2 flex justify-between text-[12px] text-light">
                      <span>Owner: {kr.owner}</span>
                      <span>{kr.status}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <figcaption className="mt-5 text-[12px] italic text-light">{HERO_CARD.caption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── 2. SITUATIONS ── existing copy, word for word. */}
      <section className={SECTION}>
        <SectionHeader eyebrow={SITUATIONS.eyebrow} heading={SITUATIONS.heading} />
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {SITUATIONS.items.map((s, i) => (
            <li key={s.title} className="border-t-[0.5px] border-rule py-7">
              <span className="mb-2 block text-[15px] font-bold text-red">{num(i)}</span>
              <h3 className={`${H3} mb-2`}>{s.title}</h3>
              <p className={BODY}>{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 3. OKR IN PLAIN WORDS ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={PLAIN.eyebrow} heading={PLAIN.heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {PLAIN.parts.map((p) => (
            <div key={p.name} className="border-t-2 border-ink pt-6">
              <p className="text-[13px] uppercase tracking-widest text-red mb-1">{p.tag}</p>
              <h3 className={`${H3} mb-3`}>{p.name}</h3>
              <p className={`${BODY} mb-4`}>{p.text}</p>
              <p className="border-l-2 border-red pl-4 text-[15px] leading-[1.6] text-ink">
                <span className="text-light">Example: </span>
                {p.example}
              </p>
            </div>
          ))}
        </div>
        <p className={`${BODY} mt-10 max-w-[760px]`}>{PLAIN.line}</p>
        <p className="mt-6 max-w-[760px] border border-ink p-5 text-[16px] md:text-[17px] font-bold leading-[1.6] text-ink">{PLAIN.test}</p>
      </section>

      {/* ── 4. OKR vs KPI ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={VERSUS.eyebrow} heading={VERSUS.heading} />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr>
                {VERSUS.cols.map((c) => (
                  <th key={c || "name"} scope="col" className={`${LABEL} pb-3 pr-6 font-normal`}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {VERSUS.rows.map((r) => (
                <tr key={r.name} className={`border-t-[0.5px] align-top ${r.highlight ? "border-red" : "border-rule"}`}>
                  <th scope="row" className={`py-4 pr-6 text-[16px] font-bold ${r.highlight ? "text-red" : "text-ink"}`}>{r.name}</th>
                  <td className={`py-4 pr-6 text-[15px] leading-[1.55] ${r.highlight ? "text-ink font-bold" : "text-mid"}`}>{r.what}</td>
                  <td className="py-4 pr-6 text-[15px] leading-[1.55] text-mid">{r.how}</td>
                  <td className="py-4 pr-6 text-[15px] leading-[1.55] text-mid">{r.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`${BODY} mt-8 max-w-[760px]`}>{VERSUS.closing}</p>
        {/* No link until the post is live (handover 4.4). */}
        <p className="mt-4 text-[15px] text-light">
          {VERSUS.soon} <span className="ml-2 border border-rule px-2 py-0.5 text-[11px] uppercase tracking-widest">Coming soon</span>
        </p>
      </section>

      {/* ── 5. WHAT IT LOOKS LIKE ── a distributor, then a manufacturer tree. */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{EXAMPLES.eyebrow}</p>
          <Heading heading={EXAMPLES.heading} />
          <p className={`${BODY} max-w-[760px] mt-4 md:mt-5`}>{EXAMPLES.intro}</p>
        </div>
        <p className={`${LABEL} mb-3`}>{EXAMPLES.distributor.label}</p>
        <div className="mb-12 max-w-[660px]">
          <OkrBox who="Objective" objective={EXAMPLES.distributor.objective} krs={EXAMPLES.distributor.krs} />
        </div>
        <p className={`${LABEL} mb-3`}>{ex.label}</p>
        <div className="max-w-[1000px]">
          <div className="mx-auto max-w-[660px]">
            <OkrBox who={ex.top.who} objective={ex.top.objective} krs={ex.top.krs} strong />
          </div>
          {/* Connectors: a stem, a rule and two drops (desktop only). */}
          <div aria-hidden="true" className="relative hidden h-12 md:block">
            <span className="absolute left-1/2 top-0 h-6 w-px bg-[#CDCDCD]" />
            <span className="absolute left-1/4 right-1/4 top-6 h-px bg-[#CDCDCD]" />
            <span className="absolute left-1/4 top-6 h-6 w-px bg-[#CDCDCD]" />
            <span className="absolute right-1/4 top-6 h-6 w-px bg-[#CDCDCD]" />
          </div>
          <div className="mt-6 grid grid-cols-1 md:mt-0 md:grid-cols-2 gap-6">
            {ex.branches.map((b) => (
              <OkrBox key={b.who} who={b.who} objective={b.objective} krs={b.krs} />
            ))}
          </div>
        </div>
        <p className="mt-5 text-[13px] italic text-light">{EXAMPLES.caption}</p>
        <WhatsAppButton dataCta="okr-example" className="mt-8" />
      </section>

      {/* ── 6. CADENCE ── */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{CADENCE.eyebrow}</p>
          <Heading heading={CADENCE.heading} />
          <p className={`${BODY} max-w-[760px] mt-4 md:mt-5`}>{CADENCE.intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
          {CADENCE.meetings.map((m) => (
            <div key={m.name} className="border-t-2 border-ink pt-5">
              <p className="text-[13px] uppercase tracking-widest text-red mb-1">{m.when}</p>
              <h3 className={`${H3} mb-3`}>{m.name}</h3>
              <p className={BODY}>{m.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="border-t-[0.5px] border-rule pt-5">
            <h3 className="mb-3 text-[19px] md:text-[21px] font-bold text-ink">{CADENCE.aligned.title}</h3>
            <p className={BODY}>{CADENCE.aligned.text}</p>
          </div>
          <div className="border-t-[0.5px] border-rule pt-5">
            <h3 className="mb-3 text-[19px] md:text-[21px] font-bold text-ink">{CADENCE.rules.title}</h3>
            <ul>
              {CADENCE.rules.items.map((r) => (
                <li key={r} className="flex items-baseline gap-[14px] py-1.5 text-[16px] md:text-[17px] leading-[1.6] text-mid">
                  <span aria-hidden="true" className="h-2 w-2 flex-shrink-0 -translate-y-1 rounded-full bg-red" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 7. HOW OKR IMPLEMENTATION RUNS ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={STAGES.eyebrow} heading={STAGES.heading} />
        <ol className="border-b-[0.5px] border-rule">
          {STAGES.items.map((s, i) => (
            <li key={s.name} className="grid grid-cols-1 gap-y-2 border-t-[0.5px] border-rule py-6 lg:grid-cols-[80px_minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-x-12">
              <span className="text-[15px] font-bold text-red">{num(i)}</span>
              <div>
                <h3 className="text-[19px] md:text-[21px] font-bold leading-[1.3] text-ink">{s.name}</h3>
                <p className="mt-1 text-[13px] uppercase tracking-widest text-light">{s.timing}</p>
              </div>
              <div>
                <p className={BODY}>{s.text}</p>
                <p className={`${BODY} mt-2`}>
                  <strong className="font-bold text-ink">You get:</strong> <span className="text-red">{s.get}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className={`${LABEL} mt-10 mb-4`}>Who does what</p>
        <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
          {STAGES.roles.map((r) => (
            <div key={r.who} className="border-t-2 border-ink pt-4">
              <dt className="text-[17px] font-bold text-ink">{r.who}</dt>
              <dd className={`${BODY} mt-1`}>{r.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── 8. WHERE OKRs FIT ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={FIT.eyebrow} heading={FIT.heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="border-t-2 border-ink pt-5">
            <h3 className="mb-3 text-[18px] md:text-[20px] font-bold text-ink">{FIT.yes.label}</h3>
            <p className={`${BODY} mb-4`}>{FIT.yes.text}</p>
            <Link href={FIT.yes.link.href} className={TEXT_LINK}>{FIT.yes.link.label} &rarr;</Link>
          </div>
          <div className="border-t-2 border-red pt-5">
            <h3 className="mb-3 text-[18px] md:text-[20px] font-bold text-red">{FIT.no.label}</h3>
            <p className={BODY}>{FIT.no.text}</p>
          </div>
        </div>
      </section>

      {/* ── 9. WHY IT WORKS ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={WHY.eyebrow} heading={WHY.heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {WHY.items.map((w) => (
            <div key={w.title} className="border-t-[0.5px] border-rule py-6">
              <h3 className="mb-2 text-[19px] md:text-[21px] font-bold leading-[1.3] text-ink">{w.title}</h3>
              <p className={BODY}>{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 10. PROOF ── confirmed by Premraj. */}
      <section className={SECTION}>
        <SectionHeader eyebrow={PROOF.eyebrow} heading={PROOF.heading} />
        <p className={`${LABEL} mb-6`}>{PROOF.meta}</p>
        <dl className="max-w-[860px]">
          {PROOF.rows.map((r) => (
            <div key={r.label} className="border-t-[0.5px] border-rule pt-[22px] pb-[26px]">
              <dt className="text-[13px] font-bold uppercase tracking-widest text-ink mb-3">{r.label}</dt>
              <dd className="text-[16px] md:text-[17px] leading-[1.7] text-mid">{r.text}</dd>
            </div>
          ))}
          <div className="border-t-[0.5px] border-rule pt-[22px] pb-[26px]">
            <dt className="text-[13px] font-bold uppercase tracking-widest text-ink mb-3">What changed</dt>
            <dd className="text-[16px] md:text-[17px] leading-[1.7] text-red">
              <strong className="font-bold">{PROOF.changedLead}</strong> {PROOF.changedRest}
            </dd>
          </div>
        </dl>
        <Link href={PROOF.link.href} className={`${TEXT_LINK} inline-block mt-2`}>{PROOF.link.label} &rarr;</Link>
      </section>

      {/* ── 11. COST AND LENGTH ── */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{COST.eyebrow}</p>
          <Heading heading={COST.heading} />
          <p className={`${BODY} max-w-[760px] mt-4 md:mt-5`}>{COST.lead}</p>
        </div>
        <dl className="max-w-[900px] border-b-[0.5px] border-rule">
          {COST.items.map((c) => (
            <div key={c.name} className="grid grid-cols-1 gap-y-1 border-t-[0.5px] border-rule py-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-x-8">
              <dt className="text-[17px] font-bold text-ink">{c.name}</dt>
              <dd className={BODY}>{c.text}</dd>
            </div>
          ))}
        </dl>
        <Link href={COST.link.href} className={`${TEXT_LINK} inline-block mt-6`}>{COST.link.label} &rarr;</Link>
      </section>

      {/* ── 12. FAQ ── same text and order as the FAQPage JSON-LD. */}
      <section className={SECTION}>
        <SectionHeader eyebrow={QUESTIONS.eyebrow} heading={QUESTIONS.heading} />
        <div className="max-w-[900px] border-b-[0.5px] border-rule">
          {FAQS.map((item, i) => (
            <details key={item.id} open={i === 0} className="faq-item border-t-[0.5px] border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-[22px] [&::-webkit-details-marker]:hidden">
                <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.4] text-ink">{item.q}</h3>
                <span aria-hidden="true" className="faq-pm flex-shrink-0 text-[26px] leading-none text-red transition-transform duration-200">+</span>
              </summary>
              <div
                className={`${BODY} pb-[26px] max-w-[760px] [&_p]:mb-3 [&_p:last-child]:mb-0`}
                dangerouslySetInnerHTML={{ __html: item.aHtml ?? `<p>${escapeHtml(item.a)}</p>` }}
              />
            </details>
          ))}
        </div>
        <p className={`${BODY} mt-8`}>
          {QUESTIONS.after.lead}{" "}
          <Link href={QUESTIONS.after.href} className={TEXT_LINK}>{QUESTIONS.after.label} &rarr;</Link>
        </p>
      </section>

      {/* ── 13. CLOSING ── */}
      <section className={SECTION}>
        <div className="max-w-[760px]">
          <p className={EYEBROW}>{CLOSING.eyebrow}</p>
          <Heading heading={CLOSING.heading} />
          <p className={`${BODY} mt-4 mb-8 max-w-[600px]`}>{CLOSING.text}</p>
          <WhatsAppButton dataCta="okr-closing" />
          <p className="mt-5 text-[14px] text-light">{CLOSING.trust}</p>
        </div>
      </section>

      {/* ── 14. GOING DEEPER ── the four existing posts. */}
      <section className="reveal border-t-[0.5px] border-rule px-6 py-10 md:pr-[60px] md:pl-[132px]">
        <p className={`${LABEL} mb-4`}>{DEEPER.eyebrow}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-[1000px]">
          {DEEPER.posts.map((p) => (
            <li key={p.href} className="flex items-baseline gap-3">
              <span aria-hidden="true" className="h-1.5 w-1.5 flex-shrink-0 -translate-y-0.5 rounded-full bg-red" />
              <Link href={p.href} className="text-[15px] leading-[1.55] text-mid transition-colors hover:text-red">{p.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <Reveal />
    </>
  );
}
