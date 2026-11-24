import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import type { RedHeading } from "@/content/home";
import { faqPageSchema, getFaqs, startupFaqIds } from "@/lib/faqs";
import { price } from "@/lib/programmes";
import { whatsappHref } from "@/lib/whatsapp";

// /startup-mentor-bengaluru, redesigned 24 Nov 2026 from the Claude Design
// canvas "Startup mentor page redesign". URL unchanged; visible copy says
// Bangalore. The pivot story is Premraj's own experience: never name the
// company there, and never present it as a client case.

const TITLE = "Startup Mentor & Advisor in India | Simpleworks Consulting";
const DESCRIPTION =
  "Startup mentor and advisor for founders across India, based in Bangalore: go-to-market, first sales hires and execution, one to one. No equity, no cohorts.";
const URL = "https://www.simpleworks.in/startup-mentor-bengaluru";
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
  eyebrow: "Startup Mentor · Bangalore, India",
  h1: { text: "Startup Mentor & Advisor", red: "for Founders" },
  subhead: "Your first ₹2 crore came from you. The next ₹20 crore can’t.",
  body: "Premraj Menon works one to one with founders across India who have paying customers and a sales engine that still runs through them. Go-to-market, the first sales leader hire, and the operating rhythm that lets the business grow without you in every deal.",
  cta: { label: "Start with a WhatsApp message", dataCta: "startup-hero" },
  image: {
    src: "/images/startup-hero-founder-mentor.webp",
    alt: "A young startup founder and a senior mentor at a whiteboard showing a sales funnel leading to a team, in a small startup office",
    width: 1200,
    height: 896,
  },
};

const SITUATIONS = {
  eyebrow: "Does this sound like you?",
  heading: { text: "Founders usually call us when", red: "growth runs through them." },
  items: [
    { quote: "Every big deal still closes through me.", text: "Revenue is real, but the pipeline only moves when you are in the room." },
    { quote: "We hired salespeople. They didn’t deliver.", text: "Good people, no system to sell into, and the numbers didn’t come." },
    { quote: "Our pipeline lives in my head.", text: "Or in a CRM nobody updates." },
    { quote: "I’m about to hire my first sales leader.", text: "And you know what getting it wrong costs." },
    { quote: "Growth is capped by my calendar.", text: "Demand is there. Your hours aren’t." },
    { quote: "We raised. Now investors want reviews.", text: "Quarterly accountability you haven’t built yet." },
  ],
  lead: "Tell Premraj which one sounds like your startup. You will get a straight answer on whether he can help.",
  cta: {
    label: "Sound familiar? Tell Premraj which one",
    dataCta: "startup-recognise",
    whatsappText: "Hi Premraj, I run a startup. The one that sounds like my business is: ",
  },
};

const CAUSES = {
  eyebrow: "What needs to change",
  heading: { text: "Founder-led sales", red: "doesn’t scale on its own." },
  lead: "Past early traction, the question changes from whether people will buy to whether anyone but you can sell it.",
  items: [
    { title: "Sales depends on you", text: "The motion that won the first customers was built around your relationships and your judgement." },
    { title: "No system behind the team", text: "New hires arrive without a defined customer, a process or targets that mean anything." },
    { title: "Big decisions, alone", text: "The stakes are higher than anything you have decided before, and there is nobody senior to test them with." },
  ],
};

const COVERS = {
  eyebrow: "What we work on",
  heading: { text: "What startup mentoring", red: "covers." },
  rows: [
    {
      title: "A go-to-market that doesn’t need you to close",
      text: "Who to sell to, through which channel, and a sales motion a team can run.",
      youGet: "a go-to-market plan your team can execute.",
      link: { label: "Sales & Distribution Strategy", href: "/services/gtm-consulting" },
    },
    {
      title: "Your first sales leader hire",
      text: "The right profile, a structured interview, and what they own from day one.",
      youGet: "a hire that doesn’t fail in six months.",
      link: null,
    },
    {
      title: "Execution and OKRs",
      text: "Quarterly goals, named owners and a weekly review your team runs.",
      youGet: "an operating rhythm that holds between board meetings.",
      link: { label: "Objectives and Key Results (OKRs)", href: "/services/okr-consulting" },
    },
    {
      title: "A senior thinking partner",
      text: "Someone with no equity and no agenda, to test your biggest decisions before you make them.",
      youGet: "a second view before the decisions that matter.",
      link: null,
    },
  ],
};

// Premraj's own experience. Company deliberately not named (Premraj, 24 Nov).
const PIVOT = {
  eyebrow: "From my own startup years",
  heading: { text: "A pivot that opened", red: "two new markets." },
  meta: "Enterprise SaaS MSME · I managed growth and product for five years · My own experience, not a client engagement",
  steps: [
    {
      label: "01 · What happened",
      title: "Offices closed. Nobody needed to commute.",
      text: "Employee commute was our core product. With offices shut, demand stopped, and we still had a team to keep engaged.",
    },
    {
      label: "02 · What we did",
      title: "A second product for the same buyer.",
      text: "We built workspace management. The decision maker was the same, so we took both solutions to them instead of starting a new sales motion.",
    },
    {
      label: "03 · What changed",
      title: "Beyond commute, into the global market.",
      text: "Workspace management opened a market outside commute, and a global one.",
    },
  ],
  outcome: "We became the global workspace management provider for two large US-based companies.",
};

// Same client as content/client-stories/entreprenuer-wanting-to-start-a-product-design-startup.yaml.
const CASE = {
  eyebrow: "Client story",
  heading: { text: "What changed for", red: "one founder." },
  meta: "Product design studio · Bangalore",
  programme: "Simple Counsel",
  headline: "Five business ideas on the table. One worth building.",
  signed: "2",
  close: "4",
  how: "From a go-to-market he built on our guidance: an email campaign to deep-tech companies, asking for meetings.",
  problem: "After ten years in software startups in Bangalore, the founder had several business ideas and needed to decide which one to build.",
  did: "We looked at what he is strongest at and most interested in, then sized the opportunity for each of the five ideas. One fitted best: a design studio for deep-tech companies, which suits his background in product and UX.",
};

const FIT = {
  who: {
    eyebrow: "Who we work with",
    heading: { text: "Founders past", red: "product-market fit." },
    text: "Paying customers and repeat revenue, usually ₹2 crore ARR and above, where the constraint has moved from whether anyone will buy to whether anyone but you can sell it. SaaS, product and service startups across India.",
  },
  not: {
    eyebrow: "Worth being direct",
    heading: { text: "Not for", red: "every founder." },
    text: "Pre-revenue and idea-stage founders: an accelerator serves you better. Fundraising, product or engineering help: not what we do. Founders who want their thinking validated rather than challenged. We will say so on the first call.",
  },
};

const WHY = {
  eyebrow: "Why Premraj",
  heading: { text: "A mentor who has been", red: "inside a startup." },
  experience: [
    "39 years in business, across corporate roles, MSMEs and startups.",
    "Five years managing growth and product at an enterprise SaaS business.",
    "Co-founded Viworks Ventures, working with startups on their sales and go-to-market.",
    "Worked on the business side at Usha International, Apollo Tyres and MRF.",
    "In telecom at BPL Mobile, Airtel and Tata Docomo: sales and distribution, business operations, customer lifecycle management and customer interactions (call centres and relationship centres), ending as Chief Operating Officer of the Kerala circle at Tata Docomo.",
  ],
  education: [
    "Executive General Management Programme (EGMP), IIM Bangalore.",
    "Advanced Global Management Programme for Tata Group senior leadership, Ross School of Business, University of Michigan.",
    "Programme for middle management, XLRI Jamshedpur, 1993, conducted for Apollo Tyres.",
  ],
  closing: "No equity, very few founders at a time, and you work with Premraj himself.",
  cta: {
    label: "Talk to Premraj directly",
    dataCta: "startup-why",
    whatsappText: "Hi Premraj, I read about your background and would like to talk about my startup.",
  },
};

const HOW = {
  eyebrow: "How we work",
  heading: { text: "Start with a Diagnostic.", red: "Then Counsel or Advisory." },
  lead: "Each programme has one fixed fee, agreed before we begin. No equity, no hourly billing.",
  programmes: [
    { name: "Simple Diagnostic", text: "find what is really holding growth back, in half a day.", fee: price("diagnostic") },
    { name: "Simple Counsel", text: "two sessions a month in person in Bangalore, with WhatsApp access.", fee: `${price("counsel")} a month` },
    { name: "Simple Advisory", text: "two 90-minute online sessions a month, from anywhere in India.", fee: `${price("advisory")} a month` },
  ],
  link: { label: "See all programmes and fees", href: "/programmes" },
};

const READING = {
  eyebrow: "From the blog",
  heading: { text: "Read more on", red: "scaling past the founder." },
  posts: [
    {
      tag: "Go-to-market",
      title: "Why Founder-Led Sales Breaks After Series A, and What Replaces It",
      href: "/blog/why-founder-led-sales-breaks-after-series-a-and-what-replaces-it",
    },
    {
      tag: "Execution",
      title: "OKRs for Startups: Why Most Founders Get Them Wrong After Series A",
      href: "/blog/ok-rs-for-startups-why-most-founders-get-them-wrong-after-series-a",
    },
    {
      tag: "Mentorship",
      title: "Startup Mentor vs Accelerator in India: Two Jobs Founders Keep Confusing",
      href: "/blog/startup-mentor-vs-accelerator-in-india-two-jobs-founders-keep-confusing",
    },
    {
      tag: "Cofounders · A fiction series",
      title: "How to Choose a Cofounder: Friend or Skill-Fit?",
      href: "/blog/how-to-choose-a-cofounder-for-your-startup",
    },
  ],
  all: { label: "All articles", href: "/blog" },
};

const QUESTIONS = {
  eyebrow: "Questions",
  heading: { text: "What founders", red: "ask first." },
};

const CLOSING = {
  heading: { text: "Start with", red: "an introductory call." },
  text: "Tell us where growth is stuck. If we can help, we will say how. If we can’t, we will say that too.",
  cta: { label: "Message us on WhatsApp", dataCta: "startup-closing" },
  trust: "Based in Bangalore",
};

const FAQS = getFaqs(startupFaqIds);

const schemaMarkup = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.simpleworks.in" },
      { "@type": "ListItem", position: 2, name: "Startup Mentor", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Startup Mentoring and Advisory",
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
const SMALL_CAPS = "text-[12px] md:text-[13px] uppercase tracking-widest";

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

function RedBullets({ items }: { items: string[] }) {
  return (
    <ul className="max-w-[760px]">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-baseline gap-[18px] border-t-[0.5px] border-rule py-4 text-[17px] md:text-[18px] leading-[1.6] text-mid"
        >
          <span aria-hidden="true" className="h-2 w-2 flex-shrink-0 -translate-y-1 rounded-full bg-red" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function WhatsAppButton({
  label,
  dataCta,
  text,
  className = "",
}: {
  label: string;
  dataCta: string;
  text?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappHref(text)}
      data-cta={dataCta}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BUTTON} ${className}`}
    >
      <WhatsAppIcon size={20} />
      {label} &nbsp;→
    </a>
  );
}

function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const num = (i: number) => String(i + 1).padStart(2, "0");

export default function StartupMentorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* ── 1. HERO ── */}
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
            <WhatsAppButton label={HERO.cta.label} dataCta={HERO.cta.dataCta} className="mt-8 md:mt-10" />
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

      {/* ── 2. DOES THIS SOUND LIKE YOU? ── */}
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
        <div className="flex flex-col gap-y-5 border-t-[0.5px] border-rule pt-8">
          <p className={`${BODY} max-w-[680px]`}>{SITUATIONS.lead}</p>
          <WhatsAppButton
            label={SITUATIONS.cta.label}
            dataCta={SITUATIONS.cta.dataCta}
            text={SITUATIONS.cta.whatsappText}
          />
        </div>
      </section>

      {/* ── 3. WHAT NEEDS TO CHANGE ── */}
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

      {/* ── 4. WHAT STARTUP MENTORING COVERS ── */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{COVERS.eyebrow}</p>
          <Heading heading={COVERS.heading} />
          <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>
            Part mentor, part startup consultant: we work on the business with you, built on the
            Simpleworks Consulting{" "}
            <Link href={FOUR_P_POST} className="text-red hover:underline">
              4P framework
            </Link>
            .
          </p>
        </div>
        <ol className="border-b-[0.5px] border-rule">
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
                {row.link && (
                  <Link href={row.link.href} className={TEXT_LINK}>
                    {row.link.label} &rarr;
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 5. FROM MY OWN STARTUP YEARS ── a timeline, then the outcome. */}
      <section className={SECTION}>
        <p className={EYEBROW}>{PIVOT.eyebrow}</p>
        <div className="mb-11">
          <Heading heading={PIVOT.heading} />
          <p className="mt-3.5 text-[14px] md:text-[15px] text-light">{PIVOT.meta}</p>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          {PIVOT.steps.map((step, i) => {
            const last = i === PIVOT.steps.length - 1;
            return (
              <li
                key={step.label}
                className={`relative pt-[22px] border-t ${last ? "border-red" : "border-ink"}`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute -top-[6px] left-0 h-[11px] w-[11px] rounded-full ${
                    last ? "bg-red" : "border border-ink bg-white"
                  }`}
                />
                <p className={`${SMALL_CAPS} mb-2.5 ${last ? "text-red" : "text-light"}`}>{step.label}</p>
                <h3 className={`mb-2.5 text-[20px] md:text-[22px] font-bold leading-[1.3] ${last ? "text-red" : "text-ink"}`}>
                  {step.title}
                </h3>
                <p className={BODY}>{step.text}</p>
              </li>
            );
          })}
        </ol>
        <div className="mt-12 flex flex-wrap items-center gap-x-9 gap-y-4 border-y-[0.5px] border-rule py-7">
          <p className="text-[72px] md:text-[96px] leading-[0.9] text-red tracking-tight-2">2</p>
          <p className="max-w-[640px] text-[19px] md:text-[22px] font-bold leading-[1.45] text-ink">
            {PIVOT.outcome}
          </p>
        </div>
      </section>

      {/* ── 6. CLIENT STORY ── a case card led by the result. */}
      <section className={SECTION}>
        <SectionHeader eyebrow={CASE.eyebrow} heading={CASE.heading} />
        <article className="border border-red p-6 md:px-12 md:py-11">
          <div className="mb-9 flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-[640px]">
              <p className={`${LABEL} mb-3.5`}>{CASE.meta}</p>
              <h3 className="text-[26px] md:text-[32px] font-bold leading-[1.22] text-ink">{CASE.headline}</h3>
            </div>
            <span className={`${SMALL_CAPS} flex-shrink-0 border border-red px-3.5 py-1.5 text-red`}>
              {CASE.programme}
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-[auto_auto_minmax(0,1fr)] items-center gap-x-12 gap-y-5 border-t border-ink border-b-[0.5px] border-b-rule py-7">
            <div>
              <p className="text-[64px] md:text-[88px] leading-[0.9] text-red tracking-tight-2">{CASE.signed}</p>
              <p className="mt-2.5 text-[15px] font-bold text-ink">clients signed</p>
            </div>
            <div className="border-l-[0.5px] border-rule pl-8 md:pl-12">
              <p className="text-[64px] md:text-[88px] leading-[0.9] text-mid tracking-tight-2">{CASE.close}</p>
              <p className="mt-2.5 text-[15px] font-bold text-ink">close to signing</p>
            </div>
            <p className={`${BODY} col-span-2 lg:col-span-1 lg:border-l-[0.5px] lg:border-rule lg:pl-12`}>
              {CASE.how}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 pt-7">
            <div>
              <p className={`${LABEL} mb-2.5`}>The problem</p>
              <p className={BODY}>{CASE.problem}</p>
            </div>
            <div>
              <p className={`${LABEL} mb-2.5`}>What we did</p>
              <p className={BODY}>{CASE.did}</p>
            </div>
          </div>
        </article>
        <div className="mt-5 flex flex-wrap justify-between gap-3">
          <p className="text-[14px] text-light">Client details are confidential.</p>
          <Link href="/client-success-stories" className={TEXT_LINK}>
            Read more client stories &rarr;
          </Link>
        </div>
      </section>

      {/* ── 7. WHO / NOT ── */}
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

      {/* ── 8. WHY PREMRAJ ── portrait left, credentials right. */}
      <section className={SECTION}>
        <SectionHeader eyebrow={WHY.eyebrow} heading={WHY.heading} />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-x-16 gap-y-8">
          <figure className="lg:sticky lg:top-24 self-start">
            <Image
              src="/prem-menon.png"
              alt="Watercolour portrait of Premraj Menon"
              width={1024}
              height={1024}
              sizes="(min-width: 1024px) 420px, 80vw"
              className="block w-full max-w-[420px] h-auto mix-blend-multiply"
            />
            <figcaption className="mt-3.5">
              <p className="text-[18px] font-bold text-ink">Premraj Menon</p>
              <p className={`${LABEL} mt-1`}>Founder, Simpleworks Consulting</p>
            </figcaption>
          </figure>
          <div>
            <RedBullets items={WHY.experience} />
            <p className={`${SMALL_CAPS} mt-8 mb-1.5 text-red`}>Education</p>
            <RedBullets items={WHY.education} />
            <p className="mt-7 max-w-[760px] border-t-[0.5px] border-rule pt-6 text-[18px] md:text-[20px] font-bold leading-[1.5] text-ink">
              {WHY.closing}
            </p>
            <WhatsAppButton
              label={WHY.cta.label}
              dataCta={WHY.cta.dataCta}
              text={WHY.cta.whatsappText}
              className="mt-7"
            />
          </div>
        </div>
      </section>

      {/* ── 9. HOW WE WORK ── */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{HOW.eyebrow}</p>
          <Heading heading={HOW.heading} />
          <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>{HOW.lead}</p>
        </div>
        <ul className="max-w-[860px] border-b-[0.5px] border-rule">
          {HOW.programmes.map((p) => (
            <li
              key={p.name}
              className="flex flex-col gap-1 border-t-[0.5px] border-rule py-5 text-[17px] md:text-[18px] leading-[1.6] text-mid sm:flex-row sm:justify-between sm:gap-6"
            >
              <span>
                <strong className="font-bold text-ink">{p.name}</strong>: {p.text}
              </span>
              <span className="whitespace-nowrap text-mid">{p.fee}</span>
            </li>
          ))}
        </ul>
        <Link href={HOW.link.href} className={`${TEXT_LINK} inline-block mt-6`}>
          {HOW.link.label} &rarr;
        </Link>
      </section>

      {/* ── 10. FROM THE BLOG ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={READING.eyebrow} heading={READING.heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 max-w-[1000px]">
          {READING.posts.map((post) => (
            <Link key={post.href} href={post.href} className="group block border-l-2 border-red pl-6 py-1.5">
              <p className={`${LABEL} mb-2`}>{post.tag}</p>
              <h3 className="mb-3 text-[18px] md:text-[19px] font-bold leading-[1.4] text-ink transition-colors group-hover:text-red">
                {post.title}
              </h3>
              <span className="text-[14px] text-red">Read article &rarr;</span>
            </Link>
          ))}
        </div>
        <Link href={READING.all.href} className={`${TEXT_LINK} inline-block mt-7`}>
          {READING.all.label} &rarr;
        </Link>
      </section>

      {/* ── 11. QUESTIONS ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={QUESTIONS.eyebrow} heading={QUESTIONS.heading} />
        <div className="max-w-[900px] border-b-[0.5px] border-rule">
          {FAQS.map((item, i) => (
            <details key={item.id} open={i === 0} className="faq-item border-t-[0.5px] border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-[22px] [&::-webkit-details-marker]:hidden">
                <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.4] text-ink">{item.q}</h3>
                <span
                  aria-hidden="true"
                  className="faq-pm flex-shrink-0 text-[26px] leading-none text-red transition-transform duration-200"
                >
                  +
                </span>
              </summary>
              <div
                className={`${BODY} pb-[26px] max-w-[760px] [&_p]:mb-3 [&_p:last-child]:mb-0 [&_a]:text-red [&_a]:underline hover:[&_a]:no-underline`}
                dangerouslySetInnerHTML={{ __html: item.aHtml ?? `<p>${escapeHtml(item.a)}</p>` }}
              />
            </details>
          ))}
        </div>
      </section>

      {/* ── 12. CLOSING ── */}
      <section className={SECTION}>
        <div className="max-w-[760px]">
          <Heading heading={CLOSING.heading} />
          <p className={`${BODY} mt-4 mb-8 max-w-[560px]`}>{CLOSING.text}</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <WhatsAppButton label={CLOSING.cta.label} dataCta={CLOSING.cta.dataCta} />
            <p className="text-[14px] text-light">{CLOSING.trust}</p>
          </div>
        </div>
      </section>

      <Reveal />
    </>
  );
}
