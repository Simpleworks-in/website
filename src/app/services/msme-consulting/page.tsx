import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { PROGRAMMES, type RedHeading, type TextLink } from "@/content/home";
import { faqPageSchema, getFaqs, msmeFaqIds } from "@/lib/faqs";
import { whatsappHref } from "@/lib/whatsapp";

// /services/msme-consulting, redesigned 24 Nov 2026
// (msme-consulting-page-redesign-handover.md). Business side only, no
// headcount, the 4P framework as the only method name. The earlier-work case
// (section 8) is left out until Premraj supplies a real one.

const TITLE = "MSME Strategy Consultant in India | Simpleworks Consulting";
const DESCRIPTION =
  "MSME strategy consultant for founder-led businesses across India, based in Bangalore. Strategy, sales and distribution, and execution on fixed-fee programmes.";
const URL = "https://www.simpleworks.in/services/msme-consulting";
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
  eyebrow: "MSME Consulting · Bangalore, India",
  h1: { text: "MSME Strategy Consultant", red: "in Bangalore & India" },
  subhead:
    "Business advice for owners who are ready to move: strategy, sales and distribution, and execution.",
  body: "As an MSME consultant, Premraj Menon works with founder-led businesses across India. You know your business better than any adviser could. What is hard from the inside is seeing why growth has slowed, and getting your team to act on a plan.",
  cta: { label: "Start with a WhatsApp message", dataCta: "msme-hero" },
  image: {
    src: "/images/msme-hero-owner-adviser.webp",
    alt: "An MSME owner and an adviser at a table, reviewing a short list of three priorities, with a street of shops and a delivery van behind them",
    width: 1200,
    height: 896,
  },
};

const SITUATIONS = {
  eyebrow: "Does this sound like your business?",
  heading: { text: "Owners usually call us when", red: "one of these is true." },
  items: [
    {
      quote: "Sales have stopped growing.",
      text: "The team is busy, but last year’s numbers are this year’s numbers.",
    },
    {
      quote: "We sell more but earn less.",
      text: "Costs and discounts are rising faster than the money coming in.",
    },
    {
      quote: "The market has changed on us.",
      text: "Customers, competitors or channels have shifted, and the old way isn’t working.",
    },
    {
      quote: "Every decision comes to me.",
      text: "You are the bottleneck, and you can’t step away for a week.",
    },
    {
      quote: "The business depends on me.",
      text: "If you stepped back, it would slow down or stop.",
    },
    {
      quote: "I have plans, but things don’t get done.",
      text: "Good ideas stall somewhere between your head and your team.",
    },
  ],
};

const CAUSES = {
  eyebrow: "What needs to change",
  heading: { text: "Usually it isn’t effort.", red: "It is direction and follow-through." },
  items: [
    {
      title: "Too many priorities",
      text: "Everyone is busy, but on too many things at once. Nobody can say which three matter most this quarter.",
    },
    {
      title: "Decisions wait for the owner",
      text: "When every decision comes to you, the team waits, and you never get time to think about the business.",
    },
    {
      title: "No weekly follow-through",
      text: "A good plan is agreed, then fades by the third week because nobody checks that it got done.",
    },
  ],
};

// The four pillars of the 4P framework. Link labels match the /services hub.
const COVERS = {
  eyebrow: "What we work on",
  heading: { text: "What MSME business consulting", red: "covers." },
  pillars: [
    {
      title: "Business Strategy",
      text: "Three or four priorities everyone knows, and a plan to finish them, month by month.",
      youGet: null,
      link: null,
    },
    {
      title: "Go-to-Market: sales and distribution",
      text: "Find where your next growth will come from, and the first steps to get there.",
      youGet: "a short list of where growth will come from, and the first steps.",
      link: { label: "Sales & Distribution Strategy", href: "/services/gtm-consulting" },
    },
    {
      title: "Execution Enablement",
      text: "Each manager knows what they own, and someone checks every week that it got done.",
      youGet: "a named owner for each priority, and a weekly review.",
      link: { label: "Strategy Implementation", href: "/services/execution-consulting" },
    },
    {
      title: "OKRs: goals and weekly accountability",
      text: "Clear goals for the quarter, reviewed every week, so the team stays on track.",
      youGet: "quarterly goals, simple measures and a regular check-in.",
      link: { label: "Objectives and Key Results (OKRs)", href: "/services/okr-consulting" },
    },
  ] satisfies { title: string; text: string; youGet: string | null; link: TextLink | null }[],
  smallBusiness: {
    lead: "Running a smaller business? See",
    link: { label: "consulting for small business owners", href: "/services/small-business-consulting" },
  },
};

const FIT = {
  who: {
    eyebrow: "Who we work with",
    heading: { text: "Founder-led businesses", red: "ready to move." },
    text: "Owners of founder-led MSMEs, in manufacturing, trading, distribution and services, who want a senior adviser to work on the business with them.",
  },
  not: {
    eyebrow: "What we don’t do",
    heading: { text: "We would rather tell you", red: "than pretend." },
    text: "We work on the business side. We don’t manage shop floors or production lines, run plant engineering projects, or handle tax, compliance, registrations, loans or project reports. If that is what you need, we will say so on the first call.",
  },
};

// Confirmed MSME-side credentials only (msme-credibility-handover.md).
const WHY = {
  eyebrow: "Why Premraj",
  heading: { text: "A consultant who has worked", red: "inside MSMEs." },
  points: [
    "Nearly 10 years inside MSMEs, with around 3,000 MSME partners.",
    "Co-founded Viworks Ventures, working with startups on their sales and go-to-market.",
    "Part of the Neoffice management team that ran growth and strategy.",
    "ET-SIDBI Best Exporter award, Micro Enterprise category, 2019, won by Neoffice.",
    "Before that, Premraj worked on the business side at Apollo Tyres and MRF.",
  ],
  closing: "You work with Premraj himself, not a junior team.",
};

// Programme lines come from the homepage cards, as on the /services hub.
const HOW = {
  eyebrow: "How we work",
  heading: { text: "Four programmes,", red: "each at a fixed fee." },
  lead: "You know the cost before you start. We agree which programme fits after a short introductory call, and most owners begin with a Simple Diagnostic. Across all of them you can expect clear decisions, a few agreed priorities, named owners, simple measures and a regular review.",
  link: { label: "See all programmes and fees", href: "/programmes" },
};

const READING = {
  eyebrow: "From the blog",
  heading: { text: "Read more on", red: "MSME strategy." },
  posts: [
    {
      title: "Why 90% of Indian MSMEs Have No Real Strategy — And the 3-Step Fix",
      href: "/blog/why-90-of-indian-msm-es-have-no-real-strategy-and-the-3-step-fix",
    },
    {
      title: "MSME Consulting: Why a Focused Firm Delivers More Than a Full-Service One",
      href: "/blog/msme-consulting-why-a-focused-firm-delivers-more-than-a-full-service-one",
    },
    {
      title: "Who Is Your Customer, Really?",
      href: "/blog/who-is-your-customer-really",
    },
  ],
};

const QUESTIONS = {
  eyebrow: "Questions",
  heading: { text: "Questions owners ask", red: "before they call." },
};

const CLOSING = {
  heading: { text: "Start with", red: "an introductory call." },
  text: "Tell us what is holding the business back. If we can help, we will say how. If we can’t, we will say that too.",
  cta: { label: "Message us on WhatsApp", dataCta: "msme-closing" },
  trust: "Based in Bangalore",
};

// The visible FAQ and the FAQPage JSON-LD come from the same call.
const FAQS = getFaqs(msmeFaqIds);

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
      { "@type": "ListItem", position: 3, name: "MSME Consulting", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MSME Strategy Consulting",
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

export default function MsmeConsultingPage() {
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

      {/* ── 3. WHAT NEEDS TO CHANGE ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={CAUSES.eyebrow} heading={CAUSES.heading} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          {CAUSES.items.map((item) => (
            <div key={item.title} className="border-t-2 border-ink pt-6">
              <h3 className={`${H3} mb-3`}>{item.title}</h3>
              <p className={BODY}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. WHAT MSME BUSINESS CONSULTING COVERS ── the 4P framework. */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{COVERS.eyebrow}</p>
          <Heading heading={COVERS.heading} />
          <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>
            Our work follows the Simpleworks Consulting{" "}
            <Link href={FOUR_P_POST} className="text-red hover:underline">
              4P framework
            </Link>
            : four pillars that fit together, starting with strategy. Each pillar has its own page
            if you want to go deeper.
          </p>
        </div>
        <ol>
          {COVERS.pillars.map((pillar, i) => (
            <li
              key={pillar.title}
              className="grid grid-cols-1 gap-y-3 border-t-[0.5px] border-rule py-7 md:py-8 lg:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-12"
            >
              <span className="text-[15px] font-bold leading-[1.6] text-red tracking-wide-2 [font-variant-numeric:tabular-nums]">
                {num(i)}
              </span>
              <h3 className={H3}>{pillar.title}</h3>
              <div>
                <p className="text-[18px] leading-[1.55] text-ink mb-2">{pillar.text}</p>
                {pillar.youGet && (
                  <p className={`${BODY} mb-3`}>
                    <strong className="font-bold text-ink">You get:</strong>{" "}
                    <span className="text-red">{pillar.youGet}</span>
                  </p>
                )}
                {pillar.link && (
                  <Link href={pillar.link.href} className={TEXT_LINK}>
                    {pillar.link.label} &rarr;
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
        <p className={`${BODY} border-t-[0.5px] border-rule pt-6`}>
          {COVERS.smallBusiness.lead}{" "}
          <Link href={COVERS.smallBusiness.link.href} className={TEXT_LINK}>
            {COVERS.smallBusiness.link.label} &rarr;
          </Link>
        </p>
      </section>

      {/* ── 5. WHO WE WORK WITH / WHAT WE DON'T DO ── */}
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

      {/* ── 6. WHY PREMRAJ ── */}
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

      {/* ── 7. HOW WE WORK ── the four programmes. */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{HOW.eyebrow}</p>
          <Heading heading={HOW.heading} />
          <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>{HOW.lead}</p>
        </div>
        <ul className="max-w-[860px]">
          {PROGRAMMES.cards.map((card) => (
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

      {/* ── 8. FROM THE BLOG ── the three live articles. */}
      <section className={SECTION}>
        <SectionHeader eyebrow={READING.eyebrow} heading={READING.heading} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
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

      {/* ── 9. QUESTIONS ── */}
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
      </section>

      {/* ── 10. CLOSING CALL TO ACTION ── */}
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
