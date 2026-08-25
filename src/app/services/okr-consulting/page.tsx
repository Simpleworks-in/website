import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: {
    absolute: "OKR Consulting India | OKR Framework for MSMEs & Startups | Simpleworks",
  },
  description:
    "Simpleworks designs OKR frameworks for Indian MSMEs and startups — simple enough for a 20-person team, specific enough to move the business. Led by Premraj Menon, Bengaluru.",
  alternates: {
    canonical: "https://www.simpleworks.in/services/okr-consulting",
  },
  openGraph: {
    title: "OKR Consulting India | OKR Framework for MSMEs & Startups | Simpleworks",
    description:
      "Simpleworks designs OKR frameworks for Indian MSMEs and startups — simple enough for a 20-person team, specific enough to move the business. Led by Premraj Menon, Bengaluru.",
    url: "https://www.simpleworks.in/services/okr-consulting",
    locale: "en_IN",
    type: "website",
  },
};

const COMPARE_ROWS = [
  {
    label: "What it does",
    kpi: "Measures ongoing health of the business",
    okr: "Defines where the business is going and how it will get there",
  },
  {
    label: "Example",
    kpi: "Monthly revenue, gross margin, customer retention rate",
    okr: "Win 8 new accounts in Pune by Q3 · Launch two new product lines by September",
  },
  {
    label: "Cadence",
    kpi: "Tracked monthly or quarterly, relatively stable",
    okr: "Set quarterly, reviewed weekly, reset each cycle",
  },
  {
    label: "Tells you",
    kpi: "Whether the business is healthy right now",
    okr: "Whether the business is moving in the right direction",
  },
];

const WHAT_WE_DO = [
  {
    num: "01 — OKR Design",
    title: "Building OKRs that actually fit your business",
    body: "Most OKR failures happen at the design stage — goals that are too vague, too many, or too disconnected from the strategy. Simpleworks designs the full OKR framework: company Objectives, function-level Key Results, and the ownership map that tells every team member exactly what they are accountable for this quarter.",
  },
  {
    num: "02 — Cascade & Alignment",
    title: "Connecting company goals to team action",
    body: "The most common OKR mistake is setting company-level goals that never reach the team. Simpleworks builds the cascade — translating each company Objective into function-level OKRs for sales, operations, finance, and wherever else the work happens. Every team member knows how their work connects to the company's direction.",
  },
  {
    num: "03 — Review Rhythm",
    title: "Designing the cadence that keeps OKRs alive",
    body: "OKRs don't maintain themselves. Simpleworks designs the review rhythm: weekly check-ins that take 20 minutes, monthly reviews with clear decisions, and quarterly resets that adjust goals to what the business has learned. Without this rhythm, even the best OKRs become irrelevant within six weeks.",
  },
  {
    num: "04 — Live Cycle Support",
    title: "Running the first two cycles alongside your team",
    body: "We don't hand over a framework and leave. Simpleworks runs the first two OKR cycles with your team — coaching leaders through the weekly reviews, adjusting the system where it isn't working, and building the muscle memory for goal-setting and accountability that the organisation will rely on long after we've stepped back.",
  },
];

const SITUATIONS = [
  {
    num: "01",
    title: "The team is busy but the business isn't moving",
    body: "Everyone is working hard. The founder is working hardest. But at the end of the quarter, the numbers haven't moved and nobody can explain exactly why. Activity is high. Progress is unclear. The problem is the absence of goals specific enough to create direction and accountability at every level of the team.",
  },
  {
    num: "02",
    title: "Annual targets exist but nobody owns the path to them",
    body: "The business has a revenue target for the year. Everyone knows the number. No one can tell you which specific actions — owned by which specific people — will get the business there by December. A target without a cascade of OKRs beneath it is a wish, not a plan.",
  },
  {
    num: "03",
    title: "Previous OKR attempts haven't worked",
    body: "Many founders have tried OKRs — often after reading a book or attending a workshop — and found that within two quarters, the system was quietly abandoned. This is almost never a failure of intent. It is a failure of design: too many objectives, no review rhythm, and goals that weren't connected to the real work of the business.",
  },
  {
    num: "04",
    title: "The team has grown past what informal management can handle",
    body: "A 6-person team can be managed through proximity and conversation. A 25-person team cannot. When the business grows past the point where the founder can personally track what everyone is working on, a formal goal system stops being optional. OKRs are the right tool for this transition — if they're designed for the actual capacity of the team.",
  },
];

const STEPS = [
  {
    num: "01",
    label: "Diagnose",
    title: "Understand the strategy before designing the goals",
    body: "OKRs are only as good as the strategy they express. Before designing any framework, Simpleworks works with the founder and leadership team to clarify the three to five things that matter most for the business this year. Not twenty things. Three to five. Everything else waits — or doesn't make it into the OKR system at all.",
  },
  {
    num: "02",
    label: "Design",
    title: "Write the Objectives and Key Results at every level",
    body: "Company OKRs first, then function-level OKRs that cascade from them. Each Objective has two to four Key Results — specific, measurable, and owned by a named individual. Simpleworks writes the first draft and refines it with the team through structured workshops, not through a template dropped in a shared folder.",
  },
  {
    num: "03",
    label: "Assign",
    title: "Name the owner of every Key Result",
    body: "Shared accountability is no accountability. Every Key Result is assigned to one person — the individual who will be asked about it at every review. Not a department. Not a team. One person, whose name is on the result. This single change — from collective to individual ownership — is the biggest lever in making OKRs actually work.",
  },
  {
    num: "04",
    label: "Launch",
    title: "Introduce the system to the full team — not just leadership",
    body: "OKRs fail when they are designed in the boardroom and handed down to the team as a completed document. Simpleworks runs the launch session with the full team — every function head, every Key Result owner — so that each person understands their OKRs, has had a chance to challenge them, and starts the cycle with genuine commitment rather than compliance.",
  },
  {
    num: "05",
    label: "Review",
    title: "Run the first cycle alongside the team",
    body: "Simpleworks attends and facilitates the first four to six weekly check-ins and the mid-cycle review. This is where most OKR systems fall apart — the first time a Key Result is off track and nobody knows whether to adjust the target, accelerate the effort, or escalate. We build the judgment in the team to make those calls confidently.",
  },
  {
    num: "06",
    label: "Reset",
    title: "Run the second cycle — then hand over to the team",
    body: "The end-of-cycle reset — scoring the OKRs, learning from what worked and didn't, and setting the next quarter's goals — is the hardest part of running OKRs and the skill most teams lack. Simpleworks runs the first reset with the team, then progressively reduces involvement in the second cycle so the organisation builds the capability to run it independently.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Built for lean teams — not enterprise functions",
    body: "Three to five Objectives per quarter. Two to four Key Results per Objective. Weekly check-ins under 30 minutes. A system designed for the team you have, not the team a Silicon Valley OKR playbook assumes.",
  },
  {
    title: "No software dependency",
    body: "We start with a spreadsheet. If a software tool would genuinely help your team, we'll recommend one. But the system works without it — which matters when the team is stretched and adoption is fragile.",
  },
  {
    title: "Two live cycles before handover",
    body: "We don't hand over a framework and disappear. Simpleworks runs the first two OKR cycles alongside your team — including weekly reviews, mid-cycle adjustments, and the end-of-cycle reset — before stepping back.",
  },
  {
    title: "Premraj Menon leads every engagement personally",
    body: "No junior consultants. No workshops delivered by an associate. Prem works directly with your leadership team on the OKR design, the launch, and the first two review cycles.",
  },
];

const LIVE_SPOKES = [
  {
    tag: "Strategy",
    title: "Why 90% of Indian MSMEs Have No Real Strategy — And the 3-Step Fix",
    excerpt:
      "OKRs only work when there is a strategy beneath them. This post explains how to build the strategic foundation that makes OKRs meaningful rather than bureaucratic.",
    href: "/blog/why-90-of-indian-msm-es-have-no-real-strategy-and-the-3-step-fix",
  },
  {
    tag: "Execution",
    title: "MSME Consulting: Why a Focused Firm Delivers More Than a Full-Service One",
    excerpt:
      "Why a consultant who specialises in execution and OKR design will almost always outperform a generalist who offers the same as one of twenty services.",
    href: "/blog/msme-consulting-why-a-focused-firm-delivers-more-than-a-full-service-one",
  },
  {
    tag: "Growth",
    title: "Who Is Your Customer, Really?",
    excerpt:
      "The best OKR for a sales function starts with absolute clarity on who the target customer is. This article is the prerequisite for designing meaningful growth OKRs.",
    href: "/blog/who-is-your-customer-really",
  },
  {
    tag: "OKR Consulting",
    title: "OKR Consulting for Indian MSMEs: Why Less Is More",
    excerpt:
      "Why the complex systems built for Google will kill a 50-person business — and what a lean OKR framework for Indian MSMEs looks like instead.",
    href: "/blog/okr-consulting-for-indian-msm-es-why-less-is-more",
  },
];

const COMING_SOON_SPOKES = [
  "OKR vs. KPI: What Should an MSME Actually Track?",
  "A Simple OKR Template for MSME Founders — With Real Examples",
];

const FAQ_COLUMN_1 = [
  {
    q: "What is OKR consulting — and is it different from a workshop?",
    a: "An OKR workshop teaches you how OKRs work — typically in a half-day or one-day session. OKR consulting is the work of actually building and launching the OKR system in your business — designing the Objectives and Key Results, assigning ownership, establishing the review rhythm, and running the first live cycles alongside your team. A workshop produces understanding. Consulting produces a working system.",
  },
  {
    q: "Do we need OKR software?",
    a: "No. Simpleworks starts every OKR engagement with a spreadsheet — a shared Google Sheet that tracks Objectives, Key Results, owners, and progress in one place. If a dedicated OKR tool would genuinely help the team, we'll recommend and help implement one. But for most MSMEs between ₹10 crore and ₹100 crore, the overhead of a software platform is higher than its benefit in the first year.",
  },
  {
    q: "We already set annual targets. Is that the same as OKRs?",
    a: "Not quite. Annual targets tell you where you want to end up. OKRs tell you — quarter by quarter — what specific progress you are making towards those targets, who is responsible for each piece of that progress, and whether the plan is working or needs to change. Annual targets without quarterly OKRs are goals without a game plan. Most MSME founders who engage Simpleworks for OKR consulting have targets. What they are missing is the structure beneath them.",
  },
];

const FAQ_COLUMN_2 = [
  {
    q: "How many OKRs should a small business have?",
    a: "At the company level: three to five Objectives per quarter, each with two to four Key Results. At the function level: two to three Objectives per team per quarter. The instinct of most businesses is to set too many — to capture every priority on a long list. This is the most common OKR design mistake. Fewer OKRs, owned more deeply, deliver more than a comprehensive list that nobody tracks seriously.",
  },
  {
    q: "How long does an OKR consulting engagement typically last?",
    a: "A full OKR engagement — covering design, launch, and two live cycles — typically runs four to six months. The first four to six weeks cover the strategy diagnosis and OKR design. The following two to three months cover the first live cycle with Simpleworks' active involvement. The final month covers the second cycle with progressively reduced support as the team builds the capability to run the system independently.",
  },
  {
    q: "What does the first step look like?",
    a: "A free 30-minute conversation with Premraj Menon. No pitch, no proposal. You describe where your business is and what is making goal-setting and accountability difficult — Prem asks a few direct questions and tells you honestly whether an OKR engagement would help, what it would involve, and what it would cost in approximate terms. If it is not the right fit, he will say so and point you in the right direction.",
  },
];

const breadcrumbSchema = {
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
    {
      "@type": "ListItem",
      position: 3,
      name: "OKR Consulting",
      item: "https://www.simpleworks.in/services/okr-consulting",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...FAQ_COLUMN_1, ...FAQ_COLUMN_2].map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2.5 text-eyebrow tracking-wide-9 uppercase text-light">
      {children}
      <span className="block h-px w-8 bg-rule" />
    </p>
  );
}

export default function OkrConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* BREADCRUMB */}
      <div className="flex items-center gap-2 border-b-[0.5px] border-rule px-6 py-3.5 text-[13px] md:px-[60px]">
        <Link href="/" className="text-light transition-colors hover:text-red">
          Home
        </Link>
        <span className="text-rule">›</span>
        <Link href="/services" className="text-light transition-colors hover:text-red">
          Services
        </Link>
        <span className="text-rule">›</span>
        <span className="text-mid">OKR Consulting</span>
      </div>

      {/* HERO */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-2.5 text-eyebrow tracking-wide-9 uppercase text-red">
              <span className="block h-px w-6 bg-red" />
              OKR Consulting · Simpleworks
            </p>
            <h1 className="mb-5 text-[36px] leading-[1.1] font-bold tracking-tight-1 md:text-hero-h1">
              Goals that cascade.
              <br />
              <span className="italic text-red">Accountability that sticks.</span>
            </h1>
            <p className="mb-7 max-w-[480px] text-[18px] italic leading-[1.6] text-mid md:text-[19px]">
              Simpleworks designs OKR frameworks for Indian MSMEs and startups
              — simple enough for a 20-person team to use without a
              consultant in the room, specific enough to actually move the
              business.
            </p>

            <div className="mb-8 flex gap-8 border-y-[0.5px] border-rule py-6">
              <div>
                <p className="text-[34px] font-bold leading-none tracking-tight-2 text-ink md:text-[42px]">
                  39<sup className="text-[16px] text-red md:text-[18px]">+</sup>
                </p>
                <p className="mt-1 text-[12px] leading-[1.4] text-light">
                  Years of
                  <br />
                  experience
                </p>
              </div>
              <div className="w-px self-stretch bg-rule" />
              <div>
                <p className="text-[34px] font-bold leading-none tracking-tight-2 text-ink md:text-[42px]">
                  6
                </p>
                <p className="mt-1 text-[12px] leading-[1.4] text-light">
                  Industries
                  <br />
                  served
                </p>
              </div>
              <div className="w-px self-stretch bg-rule" />
              <div>
                <p className="text-[34px] font-bold leading-none tracking-tight-2 text-ink md:text-[42px]">
                  ₹10–100<sup className="text-[16px] text-red md:text-[18px]">Cr</sup>
                </p>
                <p className="mt-1 text-[12px] leading-[1.4] text-light">
                  Revenue range
                  <br />
                  we work in
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-[1px] bg-red px-8 py-3.5 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
            >
              Book a Free Conversation &nbsp;→
            </Link>
          </div>

          <Image
            src="/okr-consulting-illustration.png"
            alt="OKR consulting workshop for Indian MSME team — Simpleworks Consulting Bengaluru"
            width={800}
            height={533}
            className="w-full rounded-sm"
            priority
          />
        </div>
      </section>

      {/* SECTION 1 — WHAT IS AN OKR */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Understanding OKRs</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          What is an OKR — and why does{" "}
          <span className="text-red">your business need one?</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          OKR stands for Objectives and Key Results. It is a goal-setting
          framework used by organisations to define what they want to
          achieve and how they will know if they&rsquo;ve got there. Here is
          what each part means in practice.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-px border border-rule bg-rule md:mb-14 md:grid-cols-2">
          <div className="bg-bg px-7 py-9">
            <p className="mb-3 text-[10px] font-bold tracking-wide-8 uppercase text-light">
              The O
            </p>
            <h3 className="mb-3.5 text-[22px] font-bold leading-[1.2] text-ink">
              Objective
            </h3>
            <p className="text-[16px] leading-[1.75] text-mid">
              An Objective is a clear, qualitative statement of what you want
              to achieve. It answers the question: where are we going? It
              should be ambitious enough to require real effort, specific
              enough to give the team a direction, and short enough to
              remember without looking it up.
            </p>
            <div className="mt-5 rounded-[2px] border-l-2 border-red bg-warm px-[18px] py-4">
              <p className="mb-2 text-[9px] font-bold tracking-wide-8 uppercase text-red">
                Example
              </p>
              <p className="text-[14px] italic leading-[1.6] text-mid">
                &ldquo;Become the preferred supplier for industrial
                components in the Pune region by Q3.&rdquo;
              </p>
            </div>
          </div>
          <div className="bg-bg px-7 py-9">
            <p className="mb-3 text-[10px] font-bold tracking-wide-8 uppercase text-light">
              The KR
            </p>
            <h3 className="mb-3.5 text-[22px] font-bold leading-[1.2] text-ink">
              Key Results
            </h3>
            <p className="text-[16px] leading-[1.75] text-mid">
              Key Results are the measurable outcomes that tell you whether
              the Objective is being achieved. They answer the question: how
              will we know we got there? Each Objective has two to four Key
              Results — specific, time-bound, and owned by a named
              individual.
            </p>
            <div className="mt-5 rounded-[2px] border-l-2 border-red bg-warm px-[18px] py-4">
              <p className="mb-2 text-[9px] font-bold tracking-wide-8 uppercase text-red">
                Example Key Results
              </p>
              <p className="text-[14px] italic leading-[1.6] text-mid">
                KR1: Win 8 new accounts in Pune by September 30.
                <br />
                KR2: Achieve ₹40 lakh in new revenue from the region by Q3
                end.
                <br />
                KR3: Maintain a customer satisfaction score above 4.2 across
                all new accounts.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[52px]">
          <SectionEyebrow>OKR vs. KPI</SectionEyebrow>
          <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
            Most MSMEs track KPIs.
            <br />
            <span className="text-red">That is not the same as having OKRs.</span>
          </h2>
          <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
            KPIs tell you how your business is performing. OKRs tell you
            where it is going. Both matter — but they do different jobs.
          </p>

          <div className="grid grid-cols-2 gap-px border border-rule bg-rule">
            <div className="bg-warm px-7 py-4">
              <p className="text-[11px] font-bold tracking-wide-5 uppercase text-light">
                KPI — Key Performance Indicator
              </p>
            </div>
            <div className="bg-warm px-7 py-4">
              <p className="text-[11px] font-bold tracking-wide-5 uppercase text-red">
                OKR — Objective &amp; Key Result
              </p>
            </div>
            {COMPARE_ROWS.map((row) => (
              <Fragment key={row.label}>
                <div className="bg-bg px-7 py-7">
                  <p className="text-[15px] leading-[1.7] text-mid">
                    <strong className="font-bold text-ink">{row.label}:</strong>{" "}
                    {row.kpi}
                  </p>
                </div>
                <div className="bg-bg px-7 py-7">
                  <p className="text-[15px] leading-[1.7] text-mid">
                    <strong className="font-bold text-ink">{row.label}:</strong>{" "}
                    {row.okr}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT WE DO */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>What We Do</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          What OKR consulting <span className="text-red">looks like in practice</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          OKR consulting at Simpleworks is not a training workshop. It is
          the work of designing and launching a goal system that fits your
          specific business — and staying until the team can run it without
          us.
        </p>
        <div className="grid grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-2">
          {WHAT_WE_DO.map((cell) => (
            <div key={cell.num} className="bg-bg px-7 py-9">
              <p className="mb-3.5 text-[11px] font-bold tracking-wide-6 uppercase text-red">
                {cell.num}
              </p>
              <h3 className="mb-3 text-[18px] font-bold leading-[1.3] text-ink">
                {cell.title}
              </h3>
              <p className="text-[16px] leading-[1.75] text-mid">{cell.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — WHO IT'S FOR */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Who We Work With</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          The situations that bring{" "}
          <span className="text-red">founders to OKR consulting</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          OKR consulting is rarely the first thing a founder asks for. They
          describe a different problem — and OKRs turn out to be the missing
          piece.
        </p>

        <div className="flex max-w-[800px] flex-col">
          {SITUATIONS.map((s) => (
            <div
              key={s.num}
              className="grid grid-cols-[40px_1fr] gap-0 border-t-[0.5px] border-rule py-7 last:border-b-[0.5px] md:grid-cols-[48px_1fr]"
            >
              <span className="pt-[3px] text-[13px] font-bold italic text-red">
                {s.num}
              </span>
              <div>
                <h3 className="mb-2 text-[18px] font-bold leading-[1.3] text-ink">
                  {s.title}
                </h3>
                <p className="text-[16px] leading-[1.75] text-mid">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <p className="text-[16px] italic text-mid">
            If any of these describe your business, a 30-minute conversation
            is the right starting point.
          </p>
          <Link
            href="/contact"
            className="whitespace-nowrap text-[16px] font-semibold text-red transition-colors hover:text-ink"
          >
            The first call is free →
          </Link>
        </div>
      </section>

      {/* SECTION 4 — HOW WE BUILD OKRs */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>How We Work</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          How Simpleworks builds <span className="text-red">an OKR system that lasts</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Every OKR engagement at Simpleworks follows the same six-step
          process — adapted to the size and context of your business, not
          copied from an enterprise template.
        </p>

        <div className="flex flex-col">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="grid grid-cols-[60px_1fr] gap-0 border-t-[0.5px] border-rule py-7 last:border-b-[0.5px] md:grid-cols-[80px_1fr]"
            >
              <span className="text-[44px] font-bold leading-none tracking-tight-2 text-rule md:text-[48px]">
                {step.num}
              </span>
              <div>
                <p className="mb-1.5 text-[11px] font-bold tracking-wide-6 uppercase text-red">
                  {step.label}
                </p>
                <h3 className="mb-2 text-[18px] font-bold leading-[1.3] text-ink">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-[1.75] text-mid">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — WHY SIMPLEWORKS */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Why Simpleworks</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          Why OKRs built for MSMEs <span className="text-red">work differently</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Most OKR frameworks are designed for technology companies with
          dedicated HR business partners, OKR software, and quarterly
          planning cycles that involve fifty people. Simpleworks builds OKR
          systems for businesses that have none of this.
        </p>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-[72px]">
          <div>
            <p className="mb-5 text-[17px] leading-[1.8] text-mid">
              The OKR playbook that companies like Google and Intel made
              famous assumes an organisation where the strategy team, the HR
              function, and the business units all have time dedicated to
              the goal-setting process. In a 30-person MSME where the sales
              head is also doing account management and the operations lead
              is also handling vendor relationships, that assumption breaks
              immediately.
            </p>
            <p className="mb-8 text-[17px] leading-[1.8] text-mid">
              Simpleworks designs OKR frameworks that fit within the actual
              capacity of lean teams. Fewer Objectives — never more than
              three to five per quarter. Shorter review cycles — weekly
              check-ins that take 20 minutes, not two hours. No dependency on
              expensive software. A system that the team can run without a
              dedicated OKR champion or an HR partner to maintain it.
            </p>

            <div className="mb-8 border-l-2 border-red pl-[22px]">
              <blockquote className="mb-2.5 text-[17px] italic leading-[1.75] text-ink">
                &ldquo;An OKR system that requires a full-time administrator
                to maintain is a bad OKR system. The right framework takes
                the same amount of time each week as a good team meeting —
                and replaces three bad ones.&rdquo;
              </blockquote>
              <cite className="text-[12px] not-italic text-light">
                — Premraj Menon, Founder, Simpleworks Consulting
              </cite>
            </div>

            <p className="text-[17px] leading-[1.8] text-mid">
              Every OKR engagement at Simpleworks ends with the team able to
              run the system independently. If the team still needs
              Simpleworks to manage their OKRs after six months, we
              haven&rsquo;t done our job.
            </p>
          </div>

          <div className="flex flex-col">
            {DIFFERENTIATORS.map((d) => (
              <div
                key={d.title}
                className="grid grid-cols-[10px_1fr] gap-4 border-t-[0.5px] border-rule py-[22px] last:border-b-[0.5px]"
              >
                <span className="mt-[9px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red" />
                <div>
                  <h3 className="mb-1.5 text-[16px] font-bold leading-[1.3] text-ink">
                    {d.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-mid">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — SPOKE ARTICLES */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>From the Blog</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          Going deeper —{" "}
          <span className="text-red">articles on OKRs for Indian businesses</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          These articles explore the OKR questions most MSME founders are
          working through — and how Simpleworks thinks about them.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {LIVE_SPOKES.map((spoke) => (
            <Link
              key={spoke.href}
              href={spoke.href}
              className="block rounded-sm border-[0.5px] border-rule p-7 transition-all duration-200 hover:-translate-y-[3px] hover:border-red hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)]"
            >
              <span className="mb-3.5 inline-block rounded-[1px] border border-red px-2 py-[3px] text-[9px] font-bold uppercase tracking-wide-6 text-red">
                {spoke.tag}
              </span>
              <p className="mb-2.5 text-[16px] font-bold leading-[1.4] text-ink">
                {spoke.title}
              </p>
              <p className="mb-4 text-[14px] italic leading-[1.65] text-light">
                {spoke.excerpt}
              </p>
              <span className="text-[13px] font-semibold text-red">
                Read article →
              </span>
            </Link>
          ))}
          {COMING_SOON_SPOKES.map((title) => (
            <div
              key={title}
              className="rounded-sm border border-dashed border-rule p-7 opacity-50"
            >
              <p className="mb-2.5 text-[9px] font-bold uppercase tracking-wide-6 text-light">
                Coming soon
              </p>
              <p className="text-[16px] font-bold leading-[1.4] text-mid">
                {title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Common Questions</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          Frequently asked <span className="text-red">questions</span>
        </h2>
        <p className="mb-10 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:text-[18px]">
          Everything you need to know before we speak.
        </p>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-x-16">
          {[FAQ_COLUMN_1, FAQ_COLUMN_2].map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col">
              {column.map((item) => (
                <div
                  key={item.q}
                  className="border-t-[0.5px] border-rule py-[26px] md:[&:last-child]:border-b-[0.5px]"
                >
                  <h3 className="mb-3 text-[17px] font-bold leading-[1.4] text-ink">
                    {item.q}
                  </h3>
                  <p className="text-[16px] leading-[1.8] text-mid md:text-[17px]">{item.a}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section
        id="contact"
        className="flex flex-col items-start gap-10 border-b-[0.5px] border-rule px-6 py-14 md:flex-row md:items-center md:justify-between md:py-20 md:pr-[60px] md:pl-[132px]"
      >
        <div>
          <h2 className="mb-3 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
            The first conversation <span className="text-red">is free.</span>
          </h2>
          <p className="max-w-[420px] text-[17px] italic leading-[1.65] text-mid">
            Tell us where goal-setting and accountability are breaking down
            in your business. We&rsquo;ll tell you honestly whether OKRs are
            the right tool — and what building them would look like.
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3">
          <Link
            href="/contact"
            className="rounded-[1px] bg-red px-9 py-[15px] text-center text-[15px] font-bold whitespace-nowrap text-white transition-opacity hover:opacity-90"
          >
            Book a Free Conversation
          </Link>
          <a
            href="https://wa.me/919036099000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[1px] border-[1.5px] border-rule px-9 py-3.5 text-center text-[15px] font-semibold whitespace-nowrap text-ink transition-colors hover:border-ink"
          >
            WhatsApp Premraj Menon
          </a>
          <p className="text-center text-[12px] text-light">
            Response within one business day · Based in Bengaluru · Working
            across India
          </p>
        </div>
      </section>
    </>
  );
}
