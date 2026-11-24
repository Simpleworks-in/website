import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import StoryArticle from "@/components/StoryArticle";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { PROGRAMMES, STORIES, type RedHeading } from "@/content/home";
import { executionFaqIds, faqPageSchema, getFaqs } from "@/lib/faqs";
import { whatsappHref } from "@/lib/whatsapp";

// /services/execution-consulting, redesigned 24 Nov 2026
// (execution-consulting-page-audit.md plus Premraj's decisions). Same
// blueprint as the MSME and GTM pages. The 4P framework is the only method
// name: execution enablement is its third pillar, OKRs its fourth (own page).

const TITLE = "Strategy Implementation Consultant in India | Simpleworks Consulting";
const DESCRIPTION =
  "Strategy implementation consultant in Bangalore for MSMEs across India: clear owners, a weekly review that works, and fixed-fee programmes.";
const URL = "https://www.simpleworks.in/services/execution-consulting";
const FOUR_P_POST =
  "/blog/business-strategy-consulting-for-indian-msm-es-how-the-simpleworks-4-p-framework-turns-problems-into-plans";

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
  eyebrow: "Strategy Implementation · Bangalore, India",
  h1: { text: "Strategy Implementation Consultant", red: "for MSMEs" },
  subhead: "Clear owners and a weekly review, so the plan you agreed in April is still moving in June.",
  body: "Premraj Menon helps founder-led MSMEs and startups across India with strategy execution: turning the plan you have agreed into weekly work that someone owns. Most owners already have a strategy that would work. It stalls because every decision still comes back to them.",
  cta: { label: "Start with a WhatsApp message", dataCta: "execution-hero" },
  image: {
    src: "/images/execution-hero-weekly-review.webp",
    alt: "An MSME owner and his managers in a weekly review meeting, while a consultant points to a wall chart of priorities marked with ticks and a cross",
    width: 1200,
    height: 896,
  },
};

const SITUATIONS = {
  eyebrow: "Does this sound like your business?",
  heading: { text: "Owners usually call us when", red: "the plan stops moving." },
  items: [
    {
      quote: "We agree the plan, then nothing moves.",
      text: "The offsite went well. Three months later, the priorities are the same as last year’s.",
    },
    {
      quote: "Everything comes back to me.",
      text: "Your managers wait for your decision, so you spend the week on their work instead of yours.",
    },
    {
      quote: "Our monthly review is the same conversation every month.",
      text: "Numbers are shared, concerns are raised, and nobody leaves with a decision.",
    },
    {
      quote: "Nobody owns the target.",
      text: "Everyone knows the annual number. Nobody can say who will deliver which part of it.",
    },
    {
      quote: "The annual plan is forgotten by May.",
      text: "It was signed off in April and hasn’t been opened since.",
    },
    {
      quote: "I can’t take a week off.",
      text: "When you are away, work slows down or waits for you to come back.",
    },
  ],
};

const CAUSES = {
  eyebrow: "What needs to change",
  heading: { text: "Why strategy execution fails", red: "in MSMEs." },
  lead: "The plan is rarely the problem. Three things usually go missing.",
  items: [
    {
      title: "Too many priorities",
      text: "Twelve things are urgent, so none of them gets finished. The team needs three or four, and permission to leave the rest.",
    },
    {
      title: "No named owner",
      text: "A priority shared by three managers waits until you chase it. Each one needs a single name against it.",
    },
    {
      title: "No weekly follow-through",
      text: "The plan is checked once a quarter, if at all. By then it is too late to fix what slipped in week two.",
    },
  ],
};

const COVERS = {
  eyebrow: "What we work on",
  heading: { text: "What strategy implementation", red: "covers." },
  rows: [
    {
      title: "Priorities and owners",
      text: "Three or four priorities for the year, each with one owner and a simple measure.",
      youGet: "a one-page list of priorities, owners and measures.",
    },
    {
      title: "A weekly business review that works",
      text: "A short weekly meeting where each owner reports progress, and decisions are made in the room.",
      youGet: "a weekly review format your team can run without you.",
    },
    {
      title: "Monthly and quarterly business reviews",
      text: "A monthly look at the numbers, and a quarterly review to reset priorities when the market moves.",
      youGet: "a review calendar for the year, with an agenda for each meeting.",
    },
    {
      title: "From annual operating plan to weekly review",
      text: "Your annual operating plan broken into quarterly goals and weekly actions, so it is used through the year.",
      youGet: "an annual operating plan your managers can follow week by week.",
    },
  ],
  okr: {
    lead: "Setting the quarter’s goals is the fourth pillar. See",
    link: { label: "Objectives and Key Results (OKRs)", href: "/services/okr-consulting" },
  },
};

const ACCOUNTABILITY = {
  eyebrow: "Accountability without bureaucracy",
  heading: { text: "A spreadsheet and a standing meeting.", red: "No new software." },
  lead: "Many MSMEs have no HR team and no performance system. You need neither to run a plan. You need the same few things done every week, starting with what you already have.",
  items: [
    "One page of priorities, owners and measures",
    "A short weekly review, at the same time every week",
    "Decisions written down in the meeting, with a name and a date",
    "A monthly look at the numbers, and a quarterly reset",
    "Software only if your team needs it, and we help you choose",
  ],
};

const FIT = {
  who: {
    eyebrow: "Who we work with",
    heading: { text: "Founder-led businesses", red: "with a plan that isn’t moving." },
    text: "MSMEs and startups across India, in manufacturing, trading, distribution, services and SaaS, where the owner knows the direction but the team isn’t yet delivering it without them.",
  },
  not: {
    eyebrow: "What we don’t do",
    heading: { text: "We build the routine.", red: "We don’t run your HR." },
    text: "We don’t design appraisal or HR performance systems, implement software, or manage plant and production processes. If that is what you need, we will say so on the first call.",
  },
};

const WHY = {
  eyebrow: "Why Premraj",
  heading: { text: "A consultant who has worked", red: "inside MSMEs." },
  points: [
    "39 years in business, across corporate roles, MSMEs and startups.",
    "Nearly 10 years inside MSMEs, with around 3,000 MSME partners.",
    "Co-founded Viworks Ventures, working with startups on their sales and go-to-market.",
    "Part of the Neoffice management team that ran growth and strategy.",
    "ET-SIDBI Best Exporter award, Micro Enterprise category, 2019, won by Neoffice.",
    "Before that, Premraj worked on the business side at Usha International, Apollo Tyres and MRF.",
  ],
  closing: "You work with Premraj himself, not a junior team.",
};

// Execution work runs through these three programmes (Premraj, 24 Nov).
const HOW = {
  eyebrow: "How we work",
  heading: { text: "Start with a Reset.", red: "Keep it running with Counsel or Advisory." },
  lead: "Execution work usually starts with a Simple Reset. We find where the plan is stalling and design the fix, and the 60-day version puts the weekly review in place with your team. After that, the Simple Counsel or the Simple Advisory keeps a senior adviser beside you while the routine settles. Each has a fixed fee, agreed before we begin.",
  programmes: ["Reset", "Counsel", "Advisory"],
  link: { label: "See all programmes and fees", href: "/programmes" },
};

// Same story as the homepage's second, from content/home.ts.
const STORY_SECTION = {
  eyebrow: "Client story",
  heading: { text: "What changed for", red: "one manufacturer." },
};

const READING = {
  eyebrow: "From the blog",
  heading: { text: "Read more on", red: "strategy execution." },
  posts: [
    {
      title: "Why Strategy Execution Fails in Indian MSMEs — and What to Do About It",
      href: "/blog/why-strategy-execution-fails-in-indian-msm-es-and-what-to-do-about-it",
    },
    {
      title: "How to Build Accountability in a 50-Person MSME Business Without Bureaucracy",
      href: "/blog/how-to-build-accountability-in-a-50-person-msme-business-without-bureaucracy",
    },
    {
      title: "Why Most MSMEs Don’t Need More Strategy — They Need Someone to Execute It",
      href: "/blog/why-most-msm-es-don-t-need-more-strategy-they-need-someone-to-execute-it",
    },
    {
      title: "From Founder to CEO: How Indian MSME Leaders Build Businesses That Run Without Them",
      href: "/blog/from-founder-to-ceo-how-indian-msme-leaders-build-businesses-that-run-without-them",
    },
  ],
};

const QUESTIONS = {
  eyebrow: "Questions",
  heading: { text: "Questions owners ask", red: "before they call." },
  okr: { lead: "Questions about OKRs? See", label: "Objectives and Key Results (OKRs)", href: "/services/okr-consulting" },
};

const CLOSING = {
  heading: { text: "Start with", red: "an introductory call." },
  text: "Tell us where the plan is stalling. If we can help, we will say how. If we can’t, we will say that too.",
  cta: { label: "Message us on WhatsApp", dataCta: "execution-closing" },
  trust: "Based in Bangalore",
};

// The visible FAQ and the FAQPage JSON-LD come from the same call.
const FAQS = getFaqs(executionFaqIds);

const schemaMarkup = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.simpleworks.in" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.simpleworks.in/services",
      },
      { "@type": "ListItem", position: 3, name: "Strategy Implementation", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Strategy Implementation Consulting",
    provider: { "@id": "https://www.simpleworks.in/#organization" },
    areaServed: { "@type": "Country", name: "India" },
    description: DESCRIPTION,
    url: URL,
  },
  faqPageSchema(FAQS),
];

// ── Shared styles (same scale as the /services hub) ──
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

function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const num = (i: number) => String(i + 1).padStart(2, "0");

export default function ExecutionConsultingPage() {
  const programmes = PROGRAMMES.cards.filter((card) => HOW.programmes.includes(card.name));
  const story = STORIES.items[1];

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

      {/* ── 2. DOES THIS SOUND LIKE YOUR BUSINESS? ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={SITUATIONS.eyebrow} heading={SITUATIONS.heading} />
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12">
          {SITUATIONS.items.map((item) => (
            <li key={item.quote} className="border-t-[0.5px] border-rule py-7">
              <h3 className={`${H3} mb-2`}>&ldquo;{item.quote}&rdquo;</h3>
              <p className={BODY}>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── 3. WHY STRATEGY EXECUTION FAILS ── */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{CAUSES.eyebrow}</p>
          <Heading heading={CAUSES.heading} />
          <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>{CAUSES.lead}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          {CAUSES.items.map((item) => (
            <div key={item.title} className="border-t-2 border-ink pt-6">
              <h3 className={`${H3} mb-3`}>{item.title}</h3>
              <p className={BODY}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. WHAT STRATEGY IMPLEMENTATION COVERS ── third pillar of the 4P framework. */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{COVERS.eyebrow}</p>
          <Heading heading={COVERS.heading} />
          <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>
            Execution enablement is the third pillar of the Simpleworks Consulting{" "}
            <Link href={FOUR_P_POST} className="text-red hover:underline">
              4P framework
            </Link>
            : business strategy, go-to-market, execution enablement and OKRs.
          </p>
        </div>
        <ol>
          {COVERS.rows.map((row, i) => (
            <li
              key={row.title}
              className="grid grid-cols-1 gap-y-3 border-t-[0.5px] border-rule py-7 md:py-8 lg:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-12"
            >
              <span className="text-[15px] font-bold leading-[1.6] text-red tracking-wide-2 [font-variant-numeric:tabular-nums]">
                {num(i)}
              </span>
              <h3 className={H3}>{row.title}</h3>
              <div>
                <p className="text-[18px] leading-[1.55] text-ink mb-2">{row.text}</p>
                <p className={BODY}>
                  <strong className="font-bold text-ink">You get:</strong>{" "}
                  <span className="text-red">{row.youGet}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className={`${BODY} border-t-[0.5px] border-rule pt-6`}>
          {COVERS.okr.lead}{" "}
          <Link href={COVERS.okr.link.href} className={TEXT_LINK}>
            {COVERS.okr.link.label} &rarr;
          </Link>
        </p>
      </section>

      {/* ── 5. ACCOUNTABILITY WITHOUT BUREAUCRACY ── */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{ACCOUNTABILITY.eyebrow}</p>
          <Heading heading={ACCOUNTABILITY.heading} />
          <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>{ACCOUNTABILITY.lead}</p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 max-w-[1000px]">
          {ACCOUNTABILITY.items.map((item) => (
            <li
              key={item}
              className="border-t-[0.5px] border-rule py-4 text-[17px] md:text-[18px] leading-[1.6] text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ── 6. WHO WE WORK WITH / WHAT WE DON'T DO ── */}
      <section className={SECTION}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {[FIT.who, FIT.not].map((col) => (
            <div key={col.eyebrow}>
              <SectionHeader eyebrow={col.eyebrow} heading={col.heading} />
              <p className={`${BODY} max-w-[520px] -mt-4`}>{col.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. WHY PREMRAJ ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={WHY.eyebrow} heading={WHY.heading} />
        <ul className="max-w-[760px]">
          {WHY.points.map((point) => (
            <li
              key={point}
              className="border-t-[0.5px] border-rule py-4 text-[17px] md:text-[18px] leading-[1.6] text-mid"
            >
              {point}
            </li>
          ))}
        </ul>
        <p className="max-w-[760px] border-t-[0.5px] border-rule pt-6 text-[18px] md:text-[20px] font-bold leading-[1.5] text-ink">
          {WHY.closing}
        </p>
      </section>

      {/* ── 8. HOW WE WORK ── Reset, then Counsel or Advisory. */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{HOW.eyebrow}</p>
          <Heading heading={HOW.heading} />
          <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>{HOW.lead}</p>
        </div>
        <ul className="max-w-[860px]">
          {programmes.map((card) => (
            <li
              key={card.name}
              className="border-t-[0.5px] border-rule py-5 text-[17px] md:text-[18px] leading-[1.6] text-mid"
            >
              <strong className="font-bold text-ink">Simple {card.name}</strong>: {card.forWho}
            </li>
          ))}
        </ul>
        <Link
          href={HOW.link.href}
          className={`${TEXT_LINK} inline-block border-t-[0.5px] border-rule pt-6`}
        >
          {HOW.link.label} &rarr;
        </Link>
      </section>

      {/* ── 9. CLIENT STORY ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={STORY_SECTION.eyebrow} heading={STORY_SECTION.heading} />
        <StoryArticle story={story} />
      </section>

      {/* ── 10. FROM THE BLOG ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={READING.eyebrow} heading={READING.heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-[1000px]">
          {READING.posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block border-l-2 border-red pl-6 py-2"
            >
              <h3 className="mb-3 text-[18px] font-bold leading-[1.4] text-ink transition-colors group-hover:text-red">
                {post.title}
              </h3>
              <span className="text-[14px] text-red">Read article &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 11. QUESTIONS ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={QUESTIONS.eyebrow} heading={QUESTIONS.heading} />
        <div className="max-w-[900px] border-b-[0.5px] border-rule">
          {FAQS.map((item, i) => (
            <details key={item.id} open={i === 0} className="faq-item border-t-[0.5px] border-rule">
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
                className={`${BODY} pb-[26px] max-w-[760px] [&_p]:mb-3 [&_p:last-child]:mb-0 [&_a]:text-red [&_a]:underline hover:[&_a]:no-underline`}
                dangerouslySetInnerHTML={{
                  __html: item.aHtml ?? `<p>${escapeHtml(item.a)}</p>`,
                }}
              />
            </details>
          ))}
        </div>
        <p className={`${BODY} mt-8`}>
          {QUESTIONS.okr.lead}{" "}
          <Link href={QUESTIONS.okr.href} className={TEXT_LINK}>
            {QUESTIONS.okr.label} &rarr;
          </Link>
        </p>
      </section>

      {/* ── 12. CLOSING CALL TO ACTION ── */}
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
