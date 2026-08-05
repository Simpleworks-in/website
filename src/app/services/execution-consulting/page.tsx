import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: {
    absolute:
      "Execution Consulting India | Strategy to Action for MSMEs | Simpleworks",
  },
  description:
    "Simpleworks closes the gap between strategy and results for Indian MSMEs. OKR frameworks, accountability structures, and the 5D execution method — led by Prem Menon, Bengaluru.",
  alternates: {
    canonical: "https://www.simpleworks.in/services/execution-consulting",
  },
  openGraph: {
    title:
      "Execution Consulting India | Strategy to Action for MSMEs | Simpleworks",
    description:
      "Simpleworks closes the gap between strategy and results for Indian MSMEs. OKR frameworks, accountability structures, and the 5D execution method — led by Prem Menon, Bengaluru.",
    url: "https://www.simpleworks.in/services/execution-consulting",
    locale: "en_IN",
    type: "website",
  },
};

const GAP_STATS = [
  {
    pct: "67%",
    label:
      "of strategies fail not because the plan was wrong — but because execution broke down at the team level",
  },
  {
    pct: "80%",
    label:
      "of MSME founders say they are the primary bottleneck in their own business",
  },
  {
    pct: "1 in 3",
    label:
      "businesses that set annual goals have a structured way of tracking them month to month",
  },
];

const WHAT_WE_DO = [
  {
    num: "01 — Diagnosis",
    title: "Where execution is breaking down",
    body: "Before prescribing anything, Simpleworks diagnoses where the real gap is. Goals that don't cascade. Teams that don't own their numbers. Reviews that happen but don't change anything. The problem is rarely what it appears to be on the surface.",
  },
  {
    num: "02 — Goal Architecture",
    title: "Building OKRs that cascade from strategy to team",
    body: "We translate your business strategy into Objectives and Key Results at every level — company, function, and individual. Simple enough that a 20-person team can use them without a consultant in the room. Specific enough that everyone knows exactly what success looks like.",
  },
  {
    num: "03 — Accountability Systems",
    title: "Making ownership real, not assumed",
    body: "Most MSME teams have no formal accountability structure — decisions get made but not owned, and reviews happen without consequences. We build the rhythm: weekly check-ins, monthly reviews, and quarterly resets that keep the plan alive without creating bureaucracy.",
  },
  {
    num: "04 — Live Execution Support",
    title: "Running the first two cycles with you",
    body: "The biggest reason execution systems fail is that they're handed over and forgotten. Simpleworks runs the first two OKR cycles alongside your team — coaching leaders through reviews, adjusting the system where it isn't working, and exiting only when the organisation can run it independently.",
  },
];

const SITUATIONS = [
  {
    num: "01",
    title: "The strategy is clear but nothing is moving",
    body: "The leadership team had an offsite. The plan is documented. Everyone nodded. Six months later, the priorities are the same as last year and the plan is gathering dust. The problem is not the strategy — it is the absence of a system to execute it.",
  },
  {
    num: "02",
    title: "The founder is doing everyone's job",
    body: "Every important task flows upward to the founder because no one else is clear on what they own or empowered to decide. The business cannot scale until there is a layer of leadership that operates with genuine accountability — not just the appearance of it.",
  },
  {
    num: "03",
    title: "Reviews happen but nothing changes",
    body: "There are monthly meetings. People share numbers. The founder expresses concern. The team nods and leaves. The same conversation happens next month. A review without a decision and an owner is a performance, not a management tool.",
  },
  {
    num: "04",
    title: "Growth targets exist but no one owns them",
    body: "The annual plan has a revenue target. Everyone knows it. No one can tell you which specific actions, owned by which specific people, will get the business there. Targets without cascaded ownership are aspirations — not plans.",
  },
];

const FIVE_D = [
  {
    letter: "D1",
    label: "Diagnose",
    title: "Understand the real constraint",
    body: "We spend the first two to three weeks in your business — talking to the founder, the leadership team, and key individuals. We are not looking for what the business says the problem is. We are looking for where execution is actually breaking down and why.",
  },
  {
    letter: "D2",
    label: "Define",
    title: "Agree on what success looks like",
    body: "Before building any system, we align the leadership team on the three to five things that matter most — the Objectives. Not twenty things. Not a list of activities. Three to five outcomes that, if achieved, would mean the business has moved. Everything else waits.",
  },
  {
    letter: "D3",
    label: "Design",
    title: "Build the OKR and accountability structure",
    body: "We build the full OKR framework — company level, function level, and where relevant, individual level. We define the Key Results that will tell you whether the Objective is being achieved. We set the review cadence: weekly, monthly, quarterly. We assign ownership explicitly — not implicitly.",
  },
  {
    letter: "D4",
    label: "Deploy",
    title: "Launch the system with the team",
    body: "We run the first OKR cycle launch with the full team — not just the founders. Every function head understands their objectives, owns their key results, and knows when and how they will be reviewed. The system goes live with Simpleworks in the room for the first cycle.",
  },
  {
    letter: "D5",
    label: "Drive",
    title: "Stay until execution is self-sustaining",
    body: "We run the second cycle alongside you — coaching through the mid-cycle review, the end-of-cycle reset, and the goal-setting for cycle three. By the end of the second cycle, the team knows how to run the system without us. That is the exit point — not a date on a calendar.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Built for lean teams, not large enterprises",
    body: "Our OKR frameworks are designed for teams of 10 to 200. Three to five objectives per function. Weekly check-ins that take 20 minutes. Monthly reviews with clear decisions.",
  },
  {
    title: "No software dependency",
    body: "We start with a spreadsheet and a standing meeting cadence. If a software tool would genuinely help your team — and sometimes it does — we'll help you choose one. But the system works without it.",
  },
  {
    title: "Prem Menon leads every engagement personally",
    body: "No junior consultants. No templates applied from a distance. Prem works directly with your leadership team — in person where possible, structured online sessions where not.",
  },
  {
    title: "Exit when the team can run it alone",
    body: "We stay until the system is self-sustaining — not until a contract period ends. The goal is that Simpleworks becomes unnecessary. That is how we measure success.",
  },
];

const LIVE_SPOKES = [
  {
    tag: "Strategy",
    title: "Why 90% of Indian MSMEs Have No Real Strategy — And the 3-Step Fix",
    excerpt:
      "Most MSME founders have a plan, not a strategy. Here's the difference — and how to fix it without offsites or 40-page documents.",
    href: "/blog/why-90-of-indian-msm-es-have-no-real-strategy-and-the-3-step-fix",
  },
  {
    tag: "Execution",
    title:
      "MSME Consulting: Why a Focused Firm Delivers More Than a Full-Service One",
    excerpt:
      "Most consulting firms promise everything and deliver little. Here's why focus and execution discipline wins every time.",
    href: "/blog/msme-consulting-why-a-focused-firm-delivers-more-than-a-full-service-one",
  },
  {
    tag: "Growth",
    title: "Who Is Your Customer, Really?",
    excerpt:
      "Execution starts with clarity on who you are building for. This is the first question every MSME founder must answer precisely.",
    href: "/blog/who-is-your-customer-really",
  },
];

const COMING_SOON_SPOKES = [
  "Why OKRs Fail in Indian MSMEs — and How to Fix It",
  "From Annual Plan to Weekly Action: Closing the Execution Loop",
  "How to Build Accountability in a Family-Run Business Team",
];

const FAQ_COLUMN_1 = [
  {
    q: "What is execution consulting — and how is it different from strategy consulting?",
    a: "Strategy consulting answers the question: what should we do? Execution consulting answers: how do we make sure it actually happens? Simpleworks does both — but most clients come to us because the strategy is already clear and the organisation is failing to execute it. The gap between decision and delivery is where we do our best work.",
  },
  {
    q: "Do we need OKR software to make this work?",
    a: "No. We start every engagement with a spreadsheet and a standing meeting cadence. If a software tool would genuinely help your team — and sometimes it does — we'll help you evaluate and choose one. But the system works without it, and for most MSMEs between ₹1 crore and ₹50 crore, a lightweight manual system is more sustainable than a platform the team doesn't have time to maintain.",
  },
  {
    q: "What is the 5D method?",
    a: "The 5D method is Simpleworks' execution framework: Diagnose, Define, Design, Deploy, Drive. It is the structured process we follow in every engagement — understanding the real constraint first, building the right goals second, launching the system with the team third, and staying until the organisation can run it independently. The 5D method ensures every engagement ends with a system that works, not just a plan that was agreed.",
  },
];

const FAQ_COLUMN_2 = [
  {
    q: "How long does an execution consulting engagement typically last?",
    a: "A full execution engagement — from diagnosis through two OKR cycles — typically runs four to six months. The first month covers diagnosis and design. The second and third months cover the first OKR cycle launch and review. The fourth through sixth months cover the second cycle with progressively less Simpleworks involvement.",
  },
  {
    q: "We already have KPIs. Why would we also need OKRs?",
    a: "KPIs measure the health of the business — revenue, margins, customer satisfaction. They tell you how the business is performing. OKRs define where the business is going and what specific work will get it there. Most MSMEs track KPIs but don't have OKRs — which means they know the score but don't have a game plan. The two work together, not instead of each other.",
  },
  {
    q: "What does the first conversation look like?",
    a: "A free 30-minute call with Prem Menon. No pitch, no proposal. You describe where execution is breaking down in your business — we ask a few questions and tell you honestly whether and how Simpleworks can help. If it's not the right fit, we'll say so and point you in the right direction.",
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
      name: "Execution Consulting",
      item: "https://www.simpleworks.in/services/execution-consulting",
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

export default function ExecutionConsultingPage() {
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
        <span className="text-mid">Execution Consulting</span>
      </div>

      {/* HERO */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-2.5 text-eyebrow tracking-wide-9 uppercase text-red">
              <span className="block h-px w-6 bg-red" />
              Execution Consulting · Simpleworks
            </p>
            <h1 className="mb-5 text-[36px] leading-[1.1] font-bold tracking-tight-1 md:text-hero-h1">
              Strategy means nothing
              <br />
              <span className="italic text-red">without execution.</span>
            </h1>
            <p className="mb-7 max-w-[480px] text-[18px] italic leading-[1.6] text-mid md:text-[19px]">
              Simpleworks closes the gap between what leadership decides and
              what the team actually delivers — with clear goals, accountable
              ownership, and a review rhythm that holds.
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
                  ₹1–50<sup className="text-[16px] text-red md:text-[18px]">Cr</sup>
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
            src="/execution-consulting-illustration.png"
            alt="Execution consulting workshop — Simpleworks Consulting with MSME team"
            width={800}
            height={533}
            className="w-full rounded-sm opacity-70"
            priority
          />
        </div>
      </section>

      {/* THE EXECUTION GAP */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mb-5 text-[32px] leading-[1.15] font-bold tracking-tight-1 md:text-sec-h2">
              The gap between
              <br />
              strategy and <span className="text-red">results</span>
            </h2>
            <p className="text-[17px] italic leading-[1.7] text-mid">
              Most MSME founders have a plan. Very few have a system that
              makes it happen. The gap between the two is where growth
              stalls, teams lose confidence, and founders burn out doing
              everyone else&rsquo;s job.
            </p>
          </div>
          <div className="flex flex-col">
            {GAP_STATS.map((stat) => (
              <div
                key={stat.pct}
                className="grid grid-cols-[90px_1fr] gap-4 border-t-[0.5px] border-rule py-5 last:border-b-[0.5px]"
              >
                <span className="whitespace-nowrap text-[32px] font-bold leading-none tracking-tight-1 text-red">
                  {stat.pct}
                </span>
                <p className="pt-1 text-[15px] leading-[1.6] text-mid">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — WHAT WE DO */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>What We Do</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          What does execution consulting{" "}
          <span className="text-red">actually involve?</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Execution consulting is not project management. It is not a
          performance review system. It is the work of building clarity,
          accountability, and momentum into how your organisation operates
          day to day.
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

      {/* SECTION — WHO WE WORK WITH */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Who We Work With</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          The situations that bring <span className="text-red">founders to us</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Execution consulting is rarely the first thing a founder asks for.
          They come to us describing something else — and execution turns
          out to be the root cause.
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
            is the right next step.
          </p>
          <Link
            href="/contact"
            className="whitespace-nowrap text-[16px] font-semibold text-red transition-colors hover:text-ink"
          >
            The first call is free →
          </Link>
        </div>
      </section>

      {/* SECTION — HOW WE WORK: 5D METHOD */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>How We Work</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          The Simpleworks <span className="text-red">5D Method</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Every execution engagement at Simpleworks follows the same
          five-step process — adapted to your business, not applied from a
          template.
        </p>
        <div className="flex flex-col">
          {FIVE_D.map((d) => (
            <div
              key={d.letter}
              className="grid grid-cols-[60px_1fr] gap-0 border-t-[0.5px] border-rule py-7 last:border-b-[0.5px] md:grid-cols-[80px_1fr]"
            >
              <span className="text-[40px] font-bold leading-none tracking-tight-2 text-rule md:text-[48px]">
                {d.letter}
              </span>
              <div>
                <p className="mb-1.5 text-[11px] font-bold tracking-wide-6 uppercase text-red">
                  {d.label}
                </p>
                <h3 className="mb-2 text-[18px] font-bold leading-[1.3] text-ink">
                  {d.title}
                </h3>
                <p className="text-[16px] leading-[1.75] text-mid">{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION — WHY SIMPLEWORKS */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Why Simpleworks</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          Why execution consulting works{" "}
          <span className="text-red">differently here</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Most execution frameworks are designed for enterprises with
          dedicated OKR teams, HR systems, and performance management
          software. Simpleworks builds execution systems for businesses that
          have none of that — and don&rsquo;t need it.
        </p>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-[72px]">
          <div>
            <p className="mb-5 text-[17px] leading-[1.8] text-mid">
              Large consulting firms and OKR software vendors sell systems
              designed for 500-person organisations. The assumption is that
              you have an HR business partner, a performance management
              tool, and dedicated time from every function head to run the
              process.
            </p>
            <p className="mb-8 text-[17px] leading-[1.8] text-mid">
              Most Indian MSMEs have none of these. The sales head is also
              doing account management. The ops lead is also handling
              procurement. The founder is everything else. Any execution
              system that requires significant overhead from
              already-stretched teams will fail within the first quarter.
            </p>

            <div className="mb-8 border-l-2 border-red pl-[22px]">
              <blockquote className="mb-2.5 text-[17px] italic leading-[1.75] text-ink">
                &ldquo;Execution consulting for an MSME has to be simple
                enough that a sales head with twelve things on their plate
                can still own their OKRs without it feeling like extra
                work.&rdquo;
              </blockquote>
              <cite className="text-[12px] not-italic text-light">
                — Prem Menon, Founder, Simpleworks Consulting
              </cite>
            </div>

            <p className="text-[17px] leading-[1.8] text-mid">
              Simpleworks designs execution systems that fit the actual
              capacity of your team — not the theoretical capacity of a
              large enterprise function. Fewer metrics. Sharper ownership.
              Shorter review cycles. More action per meeting.
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

      {/* SECTION — SPOKE ARTICLES */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>From the Blog</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          Going deeper — <span className="text-red">articles on execution</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          These articles explore the execution problems most MSME founders
          face — and the thinking behind how Simpleworks approaches them.
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

      {/* SECTION — FAQ */}
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
            Tell us where execution is breaking down in your business.
            We&rsquo;ll tell you honestly whether we can help — and what
            that would look like.
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
            WhatsApp Prem Menon
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
