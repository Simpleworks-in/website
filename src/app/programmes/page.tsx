import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { STORIES, type RedHeading } from "@/content/home";
import { DELIVERY } from "@/lib/delivery";
import { price } from "@/lib/programmes";
import { whatsappHref } from "@/lib/whatsapp";
import { faqs } from "./faqs";

// /programmes, redesigned 24 Nov 2026. Four fixed-fee programmes plus the
// Custom Engagement, in the same style as the redesigned service pages.
// Prices: lib/programmes.ts. Delivery labels: lib/delivery.ts. No rupee
// figures in the title or meta (Premraj's November rule). Keep the section ids
// (#simple-diagnostic, #simple-reset, #simple-counsel, #simple-advisory,
// #custom-engagement): other pages link to them.

const TITLE = "Business Consultant Fees & Programmes in India | Simpleworks Consulting";
const DESCRIPTION =
  "Business consultant fees for MSMEs in India: four fixed-fee programmes or a scoped engagement, with Premraj Menon in Bangalore. No hourly billing.";
const URL = "https://www.simpleworks.in/programmes";

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

// ── Copy ──

const HERO = {
  eyebrow: "Programmes & Fees · Bangalore, India",
  h1: { text: "Business Consultant Fees & Programmes", red: "for MSMEs" },
  subhead:
    "Four fixed-fee programmes, or an engagement scoped to what you need. You know the fee before we begin.",
  body: "Every programme has one price, agreed before we start. There is no hourly billing and no surprise invoice at the end. You work with Premraj Menon himself, in person in Bangalore or online across India.",
  cta: { label: "Start with a WhatsApp message", dataCta: "programmes-hero" },
  image: {
    src: "/images/programmes-hero-choosing.webp",
    alt: "An MSME owner and a consultant at a table, the owner choosing one of five cards laid out between them",
    width: 1200,
    height: 896,
  },
};

const CHOOSER = {
  eyebrow: "Which one fits you?",
  heading: { text: "Start from", red: "where you are today." },
  rows: [
    {
      quote: "I can tell something is wrong, but not what.",
      name: "The Simple Diagnostic",
      href: "#simple-diagnostic",
      fee: price("diagnostic"),
      meta: "Half a day",
    },
    {
      quote: "I know the problem. We haven’t been able to fix it.",
      name: "The Simple Reset",
      href: "#simple-reset",
      fee: `From ${price("reset30")}`,
      meta: "30 or 60 days",
    },
    {
      quote: "I want a senior thinking partner, every month.",
      name: "The Simple Counsel",
      href: "#simple-counsel",
      fee: `${price("counsel")} a month`,
      meta: "In person, Bangalore",
    },
    {
      quote: "I want the same, online, from anywhere in India.",
      name: "The Simple Advisory",
      href: "#simple-advisory",
      fee: `${price("advisory")} a month`,
      meta: "Online",
    },
    {
      quote: "My need doesn’t fit any of these.",
      name: "Custom Engagement",
      href: "#custom-engagement",
      fee: "Quoted before we begin",
      meta: "Scoped to you",
    },
  ],
  note: "Most owners start with the Diagnostic. You can stop after any programme.",
};

const FOUNDER =
  "You work with Premraj himself, not a team. 39 years in business, nearly 10 of them inside MSMEs, and before that the business side at Usha International, Apollo Tyres and MRF.";

type Programme = {
  id: string;
  num: string;
  label: string;
  name: string;
  tagline: string;
  forWho: string;
  facts: { label: string; value: string }[];
  get?: string[];
  options?: { name: string; sub: string; get: string[]; fee: string; feeNote: string }[];
  fee?: { amount: string; note: string };
  extra?: React.ReactNode;
  aside?: string;
};

const PROGRAMMES: Programme[] = [
  {
    id: "simple-diagnostic",
    num: "01",
    label: "Start here",
    name: "The Simple Diagnostic",
    tagline:
      "A business health check on the one problem you name: what is working, what isn’t, and the one thing to do first.",
    forWho:
      "An owner who can name what feels wrong (growth has stalled, a channel isn’t performing, execution keeps slipping) but doesn’t yet know the cause or what to fix first.",
    facts: [
      { label: "Duration", value: "Half a day" },
      { label: "Format", value: DELIVERY.diagnostic },
      { label: "Output", value: "One written brief" },
    ],
    get: [
      "A three-hour working session on the problem you name (two or three shorter sessions if online)",
      "A written diagnostic brief: what’s working, what isn’t, and why",
      "A one-hour walkthrough of the brief with you",
      "One clear recommendation for what to do first",
    ],
    fee: { amount: price("diagnostic"), note: "Fixed, paid after the session" },
    extra: (
      <p className="text-[15px] leading-[1.7] text-mid">
        <Link href="/business-growth-review" className="text-red hover:underline">
          What the Diagnostic covers &rarr;
        </Link>
        <span className="mx-2 text-light">·</span>
        <Link href="/sample-diagnostic-report" className="text-red hover:underline">
          See a sample report &rarr;
        </Link>
      </p>
    ),
  },
  {
    id: "simple-reset",
    num: "02",
    label: "Fixed engagement",
    name: "The Simple Reset",
    tagline: "Four weeks to work out what to do. Four more to make sure it happens.",
    forWho:
      "Owners with a problem area they can name but haven’t been able to crack. You bring the problem; we find the root cause and design the fix. The 60-day version stays to put it in place.",
    facts: [
      { label: "Duration", value: "30 or 60 days" },
      { label: "Format", value: `${DELIVERY.reset}, one visit a week` },
      { label: "Output", value: "Fixes in place, not just findings" },
    ],
    options: [
      {
        name: "30 days",
        sub: "Four visits · you execute",
        get: [
          "Structured discovery of the problem area: the root cause, not the symptoms",
          "The gaps costed in rupees and ranked by impact",
          "A designed solution: what to do, who owns it, by when",
          "One page, in plain language. No deck.",
        ],
        fee: price("reset30"),
        feeNote: "Fixed, billed at month end",
      },
      {
        name: "60 days",
        sub: "Eight visits · we stay for execution",
        get: [
          "Everything in the 30 days, delivered in the first four weeks",
          "Four more weeks in person with your leadership team",
          "Obstacles cleared while they are still small",
          "A weekly review rhythm installed and handed over to your team",
        ],
        fee: price("reset60"),
        feeNote: "Fixed, billed in two monthly parts",
      },
    ],
  },
  {
    id: "simple-counsel",
    num: "03",
    label: "Monthly, in person",
    name: "The Simple Counsel",
    tagline: "A business mentor in your corner, every month, for as long as it is useful.",
    forWho:
      "Owners who want a senior thinking partner before a hire, a price change, a new market or a difficult family conversation. It often follows the Reset, and also works on its own.",
    facts: [
      { label: "Duration", value: "Monthly, three-month minimum" },
      { label: "Format", value: `${DELIVERY.counsel}, Bangalore` },
      { label: "Output", value: "A decision partner, not a report" },
    ],
    get: [
      "Two sessions a month, on your agenda",
      "WhatsApp access for decisions that won’t wait",
      "A quarterly business review, and one leadership meeting a quarter if useful",
      "No reports to file: this is thinking, not documents",
    ],
    fee: { amount: price("counsel"), note: "A month · three-month minimum" },
  },
  {
    id: "simple-advisory",
    num: "04",
    label: "Monthly, online",
    name: "The Simple Advisory",
    tagline: "A senior sounding board, online, without a full engagement.",
    forWho:
      "Owners anywhere in India who want regular time with a senior adviser online. You can start here directly, without a Diagnostic first.",
    facts: [
      { label: "Duration", value: "Monthly, three-month minimum" },
      { label: "Format", value: DELIVERY.advisory },
      { label: "Output", value: "A written summary after each session" },
    ],
    get: [
      "Two 90-minute online sessions a month, on your agenda",
      "A short written summary after each session",
    ],
    fee: { amount: price("advisory"), note: "A month · paid at the end of each month" },
    aside: "For WhatsApp access, a quarterly review and visits in person, see the Simple Counsel.",
  },
  {
    id: "custom-engagement",
    num: "05",
    label: "Scoped to you",
    name: "Custom Engagement",
    tagline: "When what you need doesn’t fit the four, we scope it with you.",
    forWho: "A specific project, a one-time review, or something in between.",
    facts: [
      { label: "Duration", value: "Scoped to fit" },
      { label: "Format", value: DELIVERY.custom },
      { label: "Output", value: "Agreed with you upfront" },
    ],
    get: [
      "Scope, duration and fee agreed in writing before we begin",
      "One fixed quote, never open-ended billing",
    ],
    fee: { amount: "Quoted before we begin", note: "Always fixed, always agreed first" },
  },
];

const COMPARE = {
  eyebrow: "Side by side",
  heading: { text: "The programmes", red: "at a glance." },
  cols: ["Programme", "Fee", "Duration", "Format", "You get"],
  rows: [
    ["The Simple Diagnostic", price("diagnostic"), "Half a day", DELIVERY.diagnostic, "A written brief and one clear first step"],
    ["The Simple Reset", `${price("reset30")} / ${price("reset60")}`, "30 or 60 days", DELIVERY.reset, "Root cause, a designed fix, and (60 days) the fix in place"],
    ["The Simple Counsel", `${price("counsel")} a month`, "Three-month minimum", DELIVERY.counsel, "A senior thinking partner, WhatsApp access, a quarterly review"],
    ["The Simple Advisory", `${price("advisory")} a month`, "Three-month minimum", DELIVERY.advisory, "Two 90-minute sessions a month, with summaries"],
    ["Custom Engagement", "Fixed quote", "Agreed upfront", DELIVERY.custom, "Whatever we scope together, in writing"],
  ],
};

// The homepage's two stories: one Diagnostic, one Reset.
const PROOF = {
  eyebrow: "Client stories",
  heading: { text: "What changed for", red: "two owners." },
  link: { label: "Read the full stories", href: "/client-success-stories" },
};

const TERMS = {
  money: {
    eyebrow: "How the money works",
    heading: { text: "One price,", red: "agreed first." },
    points: [
      "Every programme has one fixed price, agreed before we start. No hourly billing, no scope creep, no surprise invoice.",
      "If you stop after the Diagnostic, that is the whole engagement. There is no upsell conversation.",
      "Travel outside Bangalore is charged at actuals.",
    ],
  },
  not: {
    eyebrow: "What we don’t do",
    heading: { text: "Clear limits,", red: "stated upfront." },
    points: [
      "Run your sales function or sit in your customer meetings. We build the system and train the people who run it.",
      "Produce decks. You get short written documents your team can use.",
      "Send an associate to do the work after the first meeting. You get Premraj, every visit.",
      "Take on work outside our expertise. If we can’t serve a problem well, we will say so upfront and suggest someone who can.",
    ],
  },
};

const QUESTIONS = {
  eyebrow: "Questions",
  heading: { text: "Fees, duration", red: "and how it works." },
  more: { label: "More questions about Simpleworks", href: "/simpleworks-questions" },
};

const CLOSING = {
  heading: { text: "Start with", red: "an introductory call." },
  text: "A first conversation, not the Diagnostic. Tell us the situation, and we will tell you honestly whether we can help and which programme fits.",
  cta: { label: "Message us on WhatsApp", dataCta: "programmes-closing" },
  trust: "Based in Bangalore",
};

const schemaMarkup = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.simpleworks.in" },
      { "@type": "ListItem", position: 2, name: "Programmes", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fixed-fee business consulting programmes for MSMEs",
    serviceType: "Management consulting",
    url: URL,
    provider: { "@id": "https://www.simpleworks.in/#organization" },
    areaServed: { "@type": "Country", name: "India" },
  },
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

function GetList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-baseline gap-4 border-t-[0.5px] border-rule py-3 text-[16px] leading-[1.65] text-mid"
        >
          <span aria-hidden="true" className="flex-shrink-0 font-bold text-red">
            —
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Fee({ amount, note }: { amount: string; note: string }) {
  return (
    <div>
      <p className={`${LABEL} mb-1`}>Fee</p>
      <p className="text-[28px] md:text-[32px] font-bold leading-[1.2] text-ink">{amount}</p>
      <p className="text-[14px] text-light mt-1">{note}</p>
    </div>
  );
}

function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export default function ProgrammesPage() {
  const stories = STORIES.items.slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* ── 1. HERO ── text left, image right; stacks below 900px. */}
      <section className="px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <div className="flex flex-col min-[900px]:flex-row min-[900px]:items-start gap-x-14 gap-y-10">
          <div className="min-[900px]:flex-[1_1_400px] min-w-0">
            <p className={EYEBROW}>{HERO.eyebrow}</p>
            <h1 className="mb-5 max-w-[640px] text-[36px] leading-[1.1] font-bold tracking-tight-1 text-ink md:text-hero-h1">
              {HERO.h1.text} <span className="text-red">{HERO.h1.red}</span>
            </h1>
            <p className="mb-6 max-w-[560px] text-[16px] md:text-[18px] italic leading-[1.65] text-mid">
              {HERO.subhead}
            </p>
            <p className={`${BODY} max-w-[560px]`}>{HERO.body}</p>
            <a
              href={whatsappHref()}
              data-cta={HERO.cta.dataCta}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BUTTON} mt-8 md:mt-10`}
            >
              <WhatsAppIcon size={20} />
              {HERO.cta.label} &nbsp;→
            </a>
          </div>
          {/* Top margin = eyebrow height, so the image lines up with the H1. */}
          <div className="min-[900px]:flex-[1.4_1_480px] min-w-0 min-[900px]:mt-[41px]">
            <Image
              src={HERO.image.src}
              alt={HERO.image.alt}
              width={HERO.image.width}
              height={HERO.image.height}
              priority
              sizes="(min-width: 900px) 55vw, 100vw"
              className="block w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── 2. WHICH ONE FITS YOU? ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={CHOOSER.eyebrow} heading={CHOOSER.heading} />
        <ol>
          {CHOOSER.rows.map((row) => (
            <li
              key={row.name}
              className="grid grid-cols-1 gap-y-2 border-t-[0.5px] border-rule py-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_200px] lg:gap-x-10 lg:items-baseline"
            >
              <h3 className={H3}>&ldquo;{row.quote}&rdquo;</h3>
              <Link href={row.href} className="text-[18px] font-bold text-red hover:underline w-fit">
                {row.name} &rarr;
              </Link>
              <p className="text-[16px] leading-[1.5] text-ink">
                {row.fee}
                <span className="block text-[14px] text-light">{row.meta}</span>
              </p>
            </li>
          ))}
        </ol>
        <p className={`${BODY} border-t-[0.5px] border-rule pt-6`}>{CHOOSER.note}</p>
      </section>

      {/* ── 3. WHO YOU WORK WITH ── */}
      <section className={SECTION}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8 max-w-[860px]">
          <Image
            src="/prem-menon.png"
            alt="Premraj Menon"
            width={96}
            height={96}
            className="h-24 w-24 flex-shrink-0 rounded-full object-cover"
          />
          <div>
            <p className="text-[17px] font-bold text-ink">Premraj Menon</p>
            <p className={`${LABEL} mb-3`}>Founder, Simpleworks Consulting</p>
            <p className={BODY}>
              {FOUNDER}{" "}
              <Link href="/about" className={TEXT_LINK}>
                Full background &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── 4–8. THE FIVE ── one section each; ids are linked from other pages. */}
      {PROGRAMMES.map((p) => (
        <section key={p.id} id={p.id} className={`${SECTION} scroll-mt-20`}>
          <div className="grid grid-cols-1 lg:grid-cols-[80px_minmax(0,1fr)] lg:gap-x-12 gap-y-3">
            <span className="text-[15px] font-bold leading-[1.6] text-red tracking-wide-2 [font-variant-numeric:tabular-nums]">
              {p.num}
            </span>
            <div className="min-w-0">
              <p className={`${LABEL} mb-2`}>{p.label}</p>
              <h2 className={`${H2} mb-3`}>{p.name}</h2>
              <p className="text-[18px] md:text-[20px] leading-[1.5] text-ink max-w-[760px] mb-6">
                {p.tagline}
              </p>
              <p className={`${BODY} max-w-[760px] mb-8`}>
                <strong className="font-bold text-ink">For:</strong> {p.forWho}
              </p>

              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 border-t-[0.5px] border-rule pt-6 mb-8 max-w-[860px]">
                {p.facts.map((f) => (
                  <div key={f.label}>
                    <dt className={`${LABEL} mb-1`}>{f.label}</dt>
                    <dd className="text-[16px] text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>

              {p.options ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-[1000px]">
                  {p.options.map((o) => (
                    <div key={o.name}>
                      <h3 className={`${H3} mb-1`}>{o.name}</h3>
                      <p className="text-[14px] text-light mb-4">{o.sub}</p>
                      <GetList items={o.get} />
                      <div className="mt-6">
                        <Fee amount={o.fee} note={o.feeNote} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_240px] gap-x-12 gap-y-8 max-w-[1000px] items-start">
                  <div>
                    <p className={`${LABEL} mb-3`}>What you get</p>
                    {p.get && <GetList items={p.get} />}
                    {p.aside && <p className="text-[15px] leading-[1.7] text-mid mt-4">{p.aside}</p>}
                  </div>
                  {p.fee && <Fee amount={p.fee.amount} note={p.fee.note} />}
                </div>
              )}

              {p.extra && <div className="mt-8">{p.extra}</div>}
            </div>
          </div>
        </section>
      ))}

      {/* ── 9. AT A GLANCE ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={COMPARE.eyebrow} heading={COMPARE.heading} />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr>
                {COMPARE.cols.map((c) => (
                  <th key={c} scope="col" className={`${LABEL} pb-3 pr-6 font-normal`}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE.rows.map((row) => (
                <tr key={row[0]} className="border-t-[0.5px] border-rule align-top">
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`py-4 pr-6 text-[15px] leading-[1.55] ${i === 0 ? "font-bold text-ink" : "text-mid"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 10. CLIENT STORIES ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={PROOF.eyebrow} heading={PROOF.heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-[1100px]">
          {stories.map((s) => {
            const changed = s.rows.find((r) => r.emphasis);
            return (
              <div key={s.title} className="border-l-2 border-red pl-6">
                <p className={`${LABEL} mb-3`}>{s.caption}</p>
                <h3 className={`${H3} mb-3`}>{s.title}</h3>
                {changed && (
                  <p className="text-[16px] md:text-[17px] leading-[1.7] font-bold text-red">
                    {changed.text}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <Link
          href={PROOF.link.href}
          className={`${TEXT_LINK} inline-block border-t-[0.5px] border-rule pt-6 mt-10`}
        >
          {PROOF.link.label} &rarr;
        </Link>
      </section>

      {/* ── 11. HOW THE MONEY WORKS / WHAT WE DON'T DO ── */}
      <section className={SECTION}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {[TERMS.money, TERMS.not].map((col) => (
            <div key={col.eyebrow}>
              <SectionHeader eyebrow={col.eyebrow} heading={col.heading} />
              <GetList items={col.points} />
            </div>
          ))}
        </div>
      </section>

      {/* ── 12. QUESTIONS ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={QUESTIONS.eyebrow} heading={QUESTIONS.heading} />
        <div className="max-w-[900px] border-b-[0.5px] border-rule">
          {faqs.map((item, i) => (
            <details key={item.q} open={i === 0} className="faq-item border-t-[0.5px] border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-[22px] [&::-webkit-details-marker]:hidden">
                <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.4] text-ink">
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="faq-pm flex-shrink-0 text-[26px] leading-none text-red transition-transform duration-200"
                >
                  +
                </span>
              </summary>
              <div
                className={`${BODY} pb-[26px] max-w-[760px] [&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:mb-3 [&_li]:mb-1 [&_a]:text-red [&_a]:underline hover:[&_a]:no-underline`}
                dangerouslySetInnerHTML={{
                  __html: item.aHtml ?? `<p>${escapeHtml(item.a)}</p>`,
                }}
              />
            </details>
          ))}
        </div>
        <p className={`${BODY} mt-8`}>
          <Link href={QUESTIONS.more.href} className={TEXT_LINK}>
            {QUESTIONS.more.label} &rarr;
          </Link>
        </p>
      </section>

      {/* ── 13. CLOSING CALL TO ACTION ── */}
      <section className={SECTION}>
        <div className="max-w-[760px]">
          <Heading heading={CLOSING.heading} />
          <p className={`${BODY} mt-4 mb-8 max-w-[560px]`}>{CLOSING.text}</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={whatsappHref()}
              data-cta={CLOSING.cta.dataCta}
              target="_blank"
              rel="noopener noreferrer"
              className={BUTTON}
            >
              <WhatsAppIcon size={20} />
              {CLOSING.cta.label} &nbsp;→
            </a>
            <p className="text-[14px] text-light">{CLOSING.trust}</p>
          </div>
        </div>
      </section>

      <Reveal />
    </>
  );
}
