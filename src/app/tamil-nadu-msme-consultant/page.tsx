import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";

export const metadata: Metadata = {
  title: "MSME Consultant Tamil Nadu | Chennai, Hosur, Coimbatore",
  description:
    "Business strategy, go-to-market and execution consulting for founder-led MSMEs across Chennai, Hosur, Salem, Tiruppur and Coimbatore. Book a discovery call.",
  keywords:
    "MSME consultant Tamil Nadu, business consultant Chennai, auto component consultant Hosur, business consultant Sriperumbudur, Salem manufacturing consultant, Tiruppur export business consultant, Coimbatore engineering business consultant, family business consultant Tamil Nadu, execution consulting MSME",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.simpleworks.in/tamil-nadu-msme-consultant",
  },
  openGraph: {
    title: "MSME Consultant Tamil Nadu | Chennai, Hosur, Coimbatore",
    description:
      "Business strategy, go-to-market and execution consulting for founder-led MSMEs across Tamil Nadu's manufacturing and export clusters.",
    url: "https://www.simpleworks.in/tamil-nadu-msme-consultant",
    siteName: "Simpleworks Consulting",
    type: "website",
    images: [
      {
        url: "https://www.simpleworks.in/images/landing/tamil-nadu-hero.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MSME Consultant Tamil Nadu | Chennai, Hosur, Coimbatore",
    description:
      "Business strategy, go-to-market and execution consulting for founder-led MSMEs across Tamil Nadu's manufacturing and export clusters.",
    images: ["https://www.simpleworks.in/images/landing/tamil-nadu-hero.png"],
  },
};

const CONTACT_LINK = "https://www.simpleworks.in/contact";

const CREDIBILITY = [
  { num: "39 years", label: "Operating experience" },
  { num: "Usha · MRF · Apollo", label: "BPL · Airtel · Tata" },
  { num: "₹10–100 crore", label: "Founder-led businesses" },
  { num: "Onsite + Remote", label: "Across Tamil Nadu" },
];

const PAIN_POINTS = [
  "One or two customers account for most of your order book — and you know exactly how exposed that makes you.",
  "Every decision still routes through you. Nothing moves when you're travelling.",
  "You've set targets for the year, but nobody could tell you what they're accountable for this quarter.",
  "Sales happens through your personal relationships. There's no process behind it.",
  "The next generation is in the business, but nobody has said out loud who decides what.",
  "You've been meaning to fix all of this for two years. Something urgent always comes first.",
];

const SERVICES = [
  {
    num: "01",
    title: "Business strategy",
    lead: "Where the business should be going, and what it has to stop doing to get there.",
    items: [
      "Clarifying which segments, products, and customers actually make money",
      "Deciding between focus and diversification — with the numbers behind it",
      "Building a three-year direction the business can actually resource",
      "Making the hard calls on what to exit, not just what to add",
    ],
  },
  {
    num: "02",
    title: "Go-to-market",
    lead: "Reducing your dependency on the customers you already have, and building a way to win the ones you don't.",
    items: [
      "Quantifying customer concentration risk and what it's costing you",
      "Identifying the next realistic 2–3 accounts or verticals — not a wish list",
      "Building a sales process the business can run without you chasing every lead",
      "Pricing and margin discipline, especially in job-work and sub-contract models",
    ],
  },
  {
    num: "03",
    title: "Execution efficiency",
    lead: "Turning “grow 20% this year” into something your team can act on next Monday — and be measured against next quarter.",
    items: [
      "OKRs tied to the priorities that actually move the business",
      "Accountability distributed across the team, not held in the founder's head",
      "A review cadence that survives past the first quarter",
      "Removing the operational friction that quietly eats capacity",
    ],
  },
  {
    num: "04",
    title: "MSME coaching — founders & family business",
    lead: "The problems that aren't on any spreadsheet: who decides what, and what happens when you're not in the room.",
    items: [
      "Delegation and decision-making — getting out of the operational weeds",
      "Succession planning and role clarity across generations",
      "Structuring conversations the family has been avoiding",
      "A regular outside perspective, from someone with no stake in the internal politics",
    ],
  },
];

const STEPS = [
  {
    title: "Discovery call",
    body: "One call. No deck, no pitch — we work out what's actually going on and whether there's a fit.",
  },
  {
    title: "Scoping",
    body: "We define the specific problem to solve, the deliverables, and the remote/on-site mix — before any retainer starts.",
  },
  {
    title: "Execution quarter",
    body: "Working sessions through the quarter, building the process and the accountability into your team as we go.",
  },
  {
    title: "Review quarter",
    body: "We review what's held, correct what hasn't, and hand over — so the motion runs without us.",
  },
];

const OUTCOMES = [
  {
    title: "You know your concentration risk — and you're acting on it.",
    body: "A named list of target accounts or segments, with someone owning each one, instead of a worry you've been carrying.",
  },
  {
    title: "The quarter has owners, not just targets.",
    body: "Written objectives, assigned to people, reviewed on a fixed date. You stop being the only person tracking progress.",
  },
  {
    title: "The business runs without the consultant.",
    body: "The point isn't a dependency — it's that the process, the cadence, and the accountability stay in place after we've stepped back.",
  },
];

const CREDENTIALS = [
  { role: "COO, Kerala Circle", org: "Tata Docomo" },
  { role: "Direct Sales Leadership", org: "Usha International · Bharti Airtel" },
  { role: "Sales & Distribution", org: "MRF · Apollo Tyres · BPL Mobile" },
  { role: "Entrepreneur", org: "Viworks Ventures · Neoffice.ai" },
  { role: "EGMP", org: "IIM Bengaluru" },
  { role: "19th Tata Group Executive Leadership Seminar", org: "Ross School of Business, University of Michigan" },
];

const CLUSTERS = [
  {
    title: "Chennai · Sriperumbudur · Oragadam",
    tag: "AUTO & ELECTRONICS",
    body: "Tier-1 and Tier-2 auto component suppliers, EMS and electronics contract manufacturers, and ancillary units feeding Chennai's OEM belt — many out of the SIPCOT estates at Sriperumbudur and Oragadam.",
    problem:
      "orders aren't scarce, leverage is. Price pressure from procurement, stretched payment cycles, and no clear read on how the OEM actually ranks you against the next supplier.",
  },
  {
    title: "Hosur · Krishnagiri",
    tag: "PRECISION ENGINEERING",
    body: "Machining, forging, and precision component units serving Bengaluru and Chennai OEMs from the Hosur-Krishnagiri corridor, anchored by the SIPCOT Hosur estates.",
    problem:
      "one anchor customer carries most of the order book. Everyone knows it's a risk; nobody has a worked-out plan for winning the second one.",
  },
  {
    title: "Salem",
    tag: "TEXTILES, STEEL & FOUNDRIES",
    body: "Textile processing, steel re-rolling, and foundry units around Salem Steel and the local re-rolling mills — largely multi-generational family businesses.",
    problem:
      "The next generation is in the business but the decisions still aren't. Roles are assumed rather than agreed, and the succession conversation keeps getting postponed.",
  },
  {
    title: "Tiruppur",
    tag: "KNITWEAR & EXPORT APPAREL",
    body: "India's knitwear and hosiery export hub, built around the TEA network — job-work heavy, buyer-driven, and highly seasonal.",
    problem:
      "turnover is known; per-buyer margin after a full season of price pressure and rejections isn't. Commercial discipline lags behind the relationship.",
  },
  {
    title: "Coimbatore",
    tag: "ENGINEERING & MACHINERY",
    body: "Pump and motor manufacturers, textile machinery, foundries, and machine tools — with CODISSIA as the sector's collective voice.",
    problem:
      "The product range grew by accretion, not decision. Too many SKUs, unclear which ones earn their place, and no agreed basis for choosing.",
  },
];

const DISCIPLINES = [
  {
    title: "Business strategy",
    body: "Which customers, products, and segments actually make money — and what the business should stop doing.",
  },
  {
    title: "Go-to-market",
    body: "Reducing dependency on the customers you have, and building a repeatable way to win the ones you don't.",
  },
  {
    title: "Execution efficiency",
    body: "Turning intent into quarterly objectives your team owns and gets reviewed against.",
  },
  {
    title: "MSME coaching",
    body: "The founder and family questions: delegation, decision rights, and succession.",
  },
];

const BLOG_SLUGS = [
  "business-strategy-consulting-for-indian-msm-es-how-the-simpleworks-4-p-framework-turns-problems-into-plans",
  "the-go-to-market-strategy-most-indian-msm-es-skip-and-why-it-s-costing-them",
  "is-your-family-business-ready-for-the-next-generation-5-hard-questions-every-owner-must-answer",
];

const FAQS = [
  {
    q: "You're based in Bengaluru. How does that work for a business in Salem or Tiruppur?",
    a: "Most of the work is remote by design — structured calls, reviews, and planning done over video and shared documents. On-site visits are built into the engagement plan for kickoff, quarterly reviews, and anything better solved on the shop floor. The split is agreed before we start.",
  },
  {
    q: "What size of business do you work with?",
    a: "Founder-led businesses roughly in the ₹10–100 crore revenue range. Below that, the problems are usually different; above it, you likely need a larger firm than this one.",
  },
  {
    q: "What's Prem's background with Tamil Nadu businesses specifically?",
    a: "39 years in sales, distribution, and P&L leadership — including MRF and Apollo Tyres, both rooted in Tamil Nadu's manufacturing economy — plus Bharti Airtel and a full circle P&L as COO at Tata Docomo. He has also built and run two of his own businesses.",
  },
  {
    q: "Do you work with family businesses?",
    a: "Yes — they're a core part of the practice, particularly around succession, role clarity, and formalising decisions that currently sit with one person.",
  },
  {
    q: "What does an engagement cost?",
    a: "It depends on the scope, which we define after the discovery call — not before. The discovery call itself is free, and you'll have a defined scope and a number before you commit to anything.",
  },
  {
    q: "How long does an engagement run?",
    a: "Typically a quarter of execution work, followed by a review quarter. Scope is defined after the discovery call, not before it. Execution work doesn't show results in four weeks, and we'd rather set that expectation upfront.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Simpleworks Consulting",
      description:
        "Business strategy, go-to-market and execution consulting for founder-led MSMEs across Tamil Nadu's manufacturing and export clusters.",
      url: "https://www.simpleworks.in/tamil-nadu-msme-consultant",
      image: "https://www.simpleworks.in/images/landing/prem-menon-photo.jpg",
      areaServed: [
        "Chennai",
        "Sriperumbudur",
        "Oragadam",
        "Hosur",
        "Krishnagiri",
        "Salem",
        "Tiruppur",
        "Coimbatore",
        "Tamil Nadu",
      ],
      provider: {
        "@type": "Person",
        name: "Premraj Menon",
        jobTitle: "Founder, Simpleworks Consulting",
      },
      telephone: "+919036099000",
      email: "pm@simpleworks.in",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default async function TamilNaduMsmeConsultantPage() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const blogPosts = (
    await Promise.all(
      BLOG_SLUGS.map(async (slug) => {
        const entry = await reader.collections.posts.read(slug);
        return entry ? { slug, ...entry } : null;
      }),
    )
  ).filter((p): p is NonNullable<typeof p> => p !== null);

  return (
    <main className="max-w-[1200px] mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-7 py-12 md:py-16 border-b border-rule items-center">
        <div>
          <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-3">
            Tamil Nadu · MSME Consulting
          </p>
          <h1 className="text-[36px] leading-[1.1] md:text-hero-h1 font-bold tracking-tight-1 text-ink mb-6">
            Tamil Nadu&rsquo;s best businesses are held back by{" "}
            <span className="text-red">execution, not ambition.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] italic text-mid leading-[1.65] mb-7">
            Simpleworks works with founder-led manufacturing and export
            businesses across Chennai-Sriperumbudur, Hosur-Krishnagiri, Salem,
            Tiruppur, and Coimbatore — on strategy, go-to-market, execution,
            and the decisions only a founder can make.
          </p>
          <div className="flex flex-wrap gap-3 items-center mb-3">
            <a
              href={CONTACT_LINK}
              className="inline-block font-serif text-sm tracking-wide-3 text-red border-[1.5px] border-red px-9 py-[14px] rounded-[1px] bg-transparent transition-colors hover:bg-red hover:text-white"
            >
              Book a first conversation →
            </a>
            <a
              href="#how-we-start"
              className="inline-block font-serif text-sm tracking-wide-3 text-red border-[1.5px] border-red px-9 py-[14px] rounded-[1px] bg-transparent transition-colors hover:bg-red hover:text-white"
            >
              See how we work
            </a>
          </div>
        </div>
        <div className="relative h-[320px] md:h-[420px] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/landing/tamil-nadu-hero.png"
            alt="Premraj Menon, MSME consultant for Tamil Nadu founder-led manufacturing businesses"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-rule">
        {CREDIBILITY.map((c, i) => (
          <div
            key={c.num}
            className={`py-5 px-4 text-center ${
              i % 2 === 0 ? "border-r border-rule" : ""
            } ${i < 2 ? "border-b md:border-b-0 border-rule" : ""} ${
              i < 3 ? "md:border-r md:border-rule" : ""
            }`}
          >
            <div className="text-[20px] md:text-[22px] font-bold text-red leading-tight mb-1">
              {c.num}
            </div>
            <div className="text-[13px] text-mid leading-snug">{c.label}</div>
          </div>
        ))}
      </div>

      {/* THE PROBLEM */}
      <section className="px-7 py-12 md:py-16 border-b border-rule bg-[#F2F2F0]">
        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          Sound familiar?
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
          The business grew on relationships. Now it&rsquo;s{" "}
          <span className="text-red">stuck on them.</span>
        </h2>
        <p className="text-[19px] text-mid leading-[1.7] mb-8">
          Most MSMEs in Tamil Nadu&rsquo;s clusters got to where they are on
          the strength of one founder, a handful of relationships, and a lot
          of hard work. The problems start when that&rsquo;s no longer
          enough.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {PAIN_POINTS.map((point) => (
            <div key={point} className="border border-rule border-l-[3px] border-l-red px-3.5 py-3 rounded-r-sm">
              <p className="text-[15px] text-mid leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <p className="text-[19px] text-ink leading-[1.7] pt-8 border-t border-rule">
          <span className="font-bold">
            None of this is a strategy problem. It&rsquo;s an execution
            problem
          </span>{" "}
          — and it doesn&rsquo;t get solved by a report. It gets solved by
          someone working alongside you, quarter after quarter, until the
          business runs differently.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="px-7 py-12 md:py-16 border-b border-rule">
        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          What we do
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
          Four things. <span className="text-red">Done properly.</span>
        </h2>
        <p className="text-[19px] text-mid leading-[1.7] mb-10">
          Simpleworks is not a broad-scope strategy firm. We do four things
          for founder-led businesses in the ₹10–100 crore range — and we do
          them as hands-on execution work, not advice you&rsquo;re left to
          implement alone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div key={s.num} className="p-5 border border-rule rounded-sm">
              <div className="text-[13px] font-bold text-red mb-2">
                {s.num}
              </div>
              <h4 className="text-[20px] font-bold text-ink mb-1.5">
                {s.title}
              </h4>
              <p className="text-[15px] text-mid leading-relaxed mb-3">
                {s.lead}
              </p>
              <ul className="flex flex-col gap-1.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-[14px] text-mid leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-light"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE START */}
      <section id="how-we-start" className="px-7 py-12 md:py-16 border-b border-rule">
        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          How we start
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
          A discovery call first.{" "}
          <span className="text-red">Then a defined scope.</span>
        </h2>
        <p className="text-[19px] text-mid leading-[1.7] mb-10">
          We don&rsquo;t quote before we understand the problem. A discovery
          call establishes what&rsquo;s actually going on; from there we
          scope the work. An engagement typically runs across a quarter, with
          a review quarter to follow — long enough to solve the problem and
          set the motion that keeps delivering after we step back.
        </p>
        <div className="flex flex-col gap-3.5 mb-14">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex gap-3.5 items-start">
              <div className="w-7 h-7 min-w-[28px] border border-rule text-red rounded-full flex items-center justify-center text-[13px] font-bold mt-0.5">
                {i + 1}
              </div>
              <div>
                <h4 className="text-[18px] font-bold text-ink mb-1">
                  {step.title}
                </h4>
                <p className="text-[15px] text-mid leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          What changes
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
          What you should expect{" "}
          <span className="text-red">to be different</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {OUTCOMES.map((o) => (
            <div key={o.title} className="p-5 border border-rule rounded-sm">
              <h4 className="text-[16px] font-bold text-ink mb-1.5 leading-snug">
                {o.title}
              </h4>
              <p className="text-[15px] text-mid leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO YOU'D BE WORKING WITH */}
      <section className="px-7 py-12 md:py-16 border-b border-rule">
        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          Who you&rsquo;d be working with
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
          39 years on the <span className="text-red">operating side</span>,
          not the slide-deck side
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-12">
          <div className="relative h-[260px] md:h-auto md:aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="/prem-menon.png"
              alt="Premraj Menon, founder of Simpleworks Consulting"
              fill
              sizes="(min-width: 768px) 240px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="text-[16px] md:text-[17px] text-mid leading-[1.78] mb-4">
              Simpleworks is Prem Menon. Not a team of analysts — the person
              you speak to on the first call is the person who does the work.
            </p>
            <p className="text-[16px] md:text-[17px] text-mid leading-[1.78] mb-4">
              He spent 39 years in sales, distribution, and P&amp;L leadership
              before starting this practice: <strong>MRF</strong> and{" "}
              <strong>Apollo Tyres</strong>, both built on the same Tamil Nadu
              manufacturing economy your business operates in; direct sales
              leadership at <strong>Bharti Airtel</strong>; and{" "}
              <strong>Chief Operating Officer of the Kerala Circle at Tata
              Docomo</strong>, running a full circle P&amp;L. He then built
              and ran two businesses of his own as an entrepreneur — with all
              the operating risk that carries.
            </p>
            <p className="text-[16px] md:text-[17px] text-mid leading-[1.78] mb-8">
              That matters for a specific reason. When a Hosur machine-shop
              owner describes losing leverage with an OEM, or a Salem foundry
              founder talks around a succession problem, it isn&rsquo;t a
              case study — it&rsquo;s a conversation he&rsquo;s been on the
              other side of.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 border-t border-rule pt-6">
              {CREDENTIALS.map((c) => (
                <div
                  key={c.role}
                  className="flex justify-between gap-4 text-[14px] py-1"
                >
                  <span className="text-mid">{c.role}</span>
                  <span className="text-ink font-semibold text-right">
                    {c.org}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHERE WE WORK */}
      <section className="px-7 py-12 md:py-16 border-b border-rule">
        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          Where we work
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
          Five clusters. <span className="text-red">Five different problems.</span>
        </h2>
        <p className="text-[19px] text-mid leading-[1.7] mb-10">
          We don&rsquo;t run one playbook across Tamil Nadu. The problem
          holding back a Hosur component supplier looks nothing like the one
          in a Salem foundry, or the one in Tiruppur.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {CLUSTERS.map((c) => (
            <div key={c.title} className="p-5 border border-rule rounded-sm">
              <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-1.5">
                {c.tag}
              </p>
              <h4 className="text-[18px] font-bold text-ink mb-2 leading-snug">
                {c.title}
              </h4>
              <p className="text-[15px] text-mid leading-relaxed mb-3">
                {c.body}
              </p>
              <p className="text-[13px] text-mid leading-relaxed">
                <strong className="font-bold text-ink">The problem:</strong>{" "}
                {c.problem}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[14px] text-light mb-14">
          Vellore-Ranipet-Ambur (leather) and Karur (home textiles) — get in
          touch if that&rsquo;s you; we&rsquo;re actively looking at both.
        </p>

        <div className="border-t border-rule pt-14">
          <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
            Different problems.{" "}
            <span className="text-red">The same four disciplines.</span>
          </h2>
          <p className="text-[19px] text-mid leading-[1.7] mb-10">
            We don&rsquo;t claim sector expertise in five industries. What
            these businesses have in common is that the problem is rarely
            technical — it&rsquo;s commercial and organisational. That&rsquo;s
            what we work on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {DISCIPLINES.map((d) => (
              <div key={d.title} className="border-t border-rule pt-4">
                <h4 className="text-[16px] font-bold text-ink mb-1.5">
                  {d.title}
                </h4>
                <p className="text-[14px] text-mid leading-relaxed">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[17px] text-mid leading-[1.7] pt-8 border-t border-rule">
            Prem spent 39 years on the operating side, including at{" "}
            <strong className="font-bold text-ink">MRF</strong> and{" "}
            <strong className="font-bold text-ink">Apollo Tyres</strong> —
            the kind of large buyer many of these businesses sell into.
            Knowing how the other side of that table evaluates a supplier is
            often where the useful conversation starts.
          </p>
        </div>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section className="px-7 py-12 md:py-16 border-b border-rule">
        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          Engagement model
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
          Mostly remote. <span className="text-red">On-site when it matters.</span>
        </h2>
        <p className="text-[16px] md:text-[17px] text-mid leading-[1.78] mb-4">
          Tamil Nadu engagements run on a hybrid model — a structured remote
          retainer for the ongoing work (reviews, go-to-market planning,
          coaching sessions), with in-person visits to your facility at the
          points that need it: kickoff, quarterly reviews, or a problem
          that&rsquo;s easier to solve on the shop floor than over video.
        </p>
        <p className="text-[16px] md:text-[17px] text-mid leading-[1.78]">
          The mix is agreed upfront as part of the engagement plan — so you
          know exactly what you&rsquo;re getting before the first invoice,
          not after it.
        </p>
      </section>

      {/* FROM THE BLOG */}
      {blogPosts.length > 0 && (
        <section className="px-7 py-12 md:py-16 border-b border-rule">
          <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
            From the blog
          </p>
          <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
            Related <span className="text-red">reading</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group p-5 border border-rule rounded-sm flex flex-col"
              >
                <h4 className="text-[18px] font-bold text-ink mb-2 leading-snug">
                  {post.title}
                </h4>
                <p className="text-[15px] text-mid leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="text-[14px] font-semibold text-ink group-hover:text-red mt-auto">
                  Read article →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="px-7 py-12 md:py-16 border-b border-rule">
        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          Before you get in touch
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
          Frequently <span className="text-red">asked</span>
        </h2>
        <div className="divide-y divide-rule">
          {FAQS.map((item) => (
            <div key={item.q} className="py-4">
              <p className="text-[18px] font-bold text-ink mb-1.5">
                {item.q}
              </p>
              <p className="text-[15px] text-mid leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <div className="px-7 py-14 md:py-16 text-center border-b border-rule bg-[#F2F2F0]">
        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          Next step
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-2">
          One conversation. Then you&rsquo;ll know whether{" "}
          <span className="text-red">this is worth your time.</span>
        </h2>
        <p className="text-[16px] md:text-[18px] italic text-mid leading-[1.65] mb-6 max-w-[640px] mx-auto">
          No deck, no proposal, no obligation. Tell us where the business is
          stuck and we&rsquo;ll tell you honestly whether we&rsquo;re the
          right people to help — and if we&rsquo;re not, who might be.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-3">
          <a
            href={CONTACT_LINK}
            className="inline-block font-serif text-sm tracking-wide-3 text-red border-[1.5px] border-red px-9 py-[14px] rounded-[1px] bg-transparent transition-colors hover:bg-red hover:text-white"
          >
            Book a first conversation →
          </a>
        </div>
        <p className="text-[13px] text-light">
          Call on 90360 99000 or write at pm@simpleworks.in
        </p>
      </div>
    </main>
  );
}
