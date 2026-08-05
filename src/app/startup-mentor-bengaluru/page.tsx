import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Startup Mentor in Bengaluru | Simpleworks Consulting",
  description:
    "One-to-one startup mentorship for founders navigating post-Series A growth. No cohorts. 39 years of operating experience. Prem Menon, Bengaluru.",
  alternates: {
    canonical: "https://www.simpleworks.in/startup-mentor-bengaluru",
  },
  openGraph: {
    title: "Startup Mentor in Bengaluru | Simpleworks Consulting",
    description:
      "One-to-one startup mentorship for founders navigating post-Series A growth. No cohorts. 39 years of operating experience. Prem Menon, Bengaluru.",
    url: "https://www.simpleworks.in/startup-mentor-bengaluru",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Startup Mentor Bengaluru",
      description:
        "One-to-one startup mentorship for post-Series A founders. GTM architecture, OKR systems, execution discipline, and strategic thinking partnership.",
      provider: {
        "@type": "Person",
        name: "Prem Menon",
        jobTitle: "Startup Mentor & Management Consultant",
        url: "https://www.simpleworks.in/about",
      },
      areaServed: {
        "@type": "City",
        name: "Bengaluru",
      },
      url: "https://www.simpleworks.in/startup-mentor-bengaluru",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How is this different from an accelerator or incubator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Accelerators run programmes for cohorts of 10–20 startups simultaneously. I work with a small number of founders at a time, one-to-one, with no fixed curriculum. The engagement is built entirely around your specific business and challenge — not a generalised programme.",
          },
        },
        {
          "@type": "Question",
          name: "What stage of startup do you typically work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Post-product-market fit, typically ₹2–50 crore in revenue or Series A/B stage. The challenges I'm most useful for — GTM scaling, execution discipline, OKR design, board-readiness — tend to appear at this stage.",
          },
        },
        {
          "@type": "Question",
          name: "Do you take equity or only fees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I work on a pure advisory fee basis. I do not take equity. This keeps the relationship clean — my only incentive is the quality of my advice, not your cap table.",
          },
        },
        {
          "@type": "Question",
          name: "Is this in-person or virtual?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I prefer in-person for the primary relationship — I'm based in Bengaluru. For founders outside Bengaluru, or for ongoing sessions, virtual works well.",
          },
        },
        {
          "@type": "Question",
          name: "Do you only work with tech startups?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. My experience spans Consumer Durables, Automotive, Telecom, and SaaS — so I'm comfortable with both tech and non-tech businesses.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a typical engagement run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most engagements run for 6–12 months. Meaningful change in business systems takes time — and a strong mentor relationship compounds over quarters, not weeks.",
          },
        },
        {
          "@type": "Question",
          name: "How many founders do you work with at once?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deliberately few. The depth I can offer is proportional to the attention I can give each engagement. When I'm at capacity, the wait is worth knowing about early.",
          },
        },
      ],
    },
  ],
};

const WA_LINK =
  "https://wa.me/919036099000?text=Hi%20Prem%2C%20I%20am%20looking%20for%20a%20startup%20mentor%20in%20Bengaluru.%20Can%20we%20talk%3F";
const CALENDAR_LINK = "https://calendar.app.google/ME9vQ9MnqLowqNUW8";

const GAP_BULLETS = [
  "Your GTM was founder-led. Now you need a team and a system to replace you.",
  "You've raised a round. Now investors expect quarterly accountability you haven't built.",
  "The product works. Execution — across teams, processes, and priorities — is breaking down.",
  "You're making ₹10–50 crore decisions with no one senior enough to pressure-test them.",
  "Advisors give frameworks. You need someone who has held the P&L when it mattered.",
];

const WHO = [
  {
    n: "01",
    title: "SaaS & B2B Tech Founders",
    body: "Post-PMF, pre-Series B. Revenue between ₹2–25 crore ARR. Struggling with GTM repeatability, sales hiring, or investor-grade operational rigour.",
  },
  {
    n: "02",
    title: "D2C & Consumer Founders",
    body: "Past early traction, building for real distribution. Unit economics improving but execution velocity isn't. Needing a senior operator's lens on the business.",
  },
  {
    n: "03",
    title: "Funded Startup Teams",
    body: "Series A/B companies where the founding team needs an external thinking partner — for strategy, OKR design, or operational accountability investors can't provide.",
  },
];

const NOT_FOR_YOU = [
  "Pre-revenue or idea-stage founders. Accelerators and incubators serve this stage far better than I can.",
  "Founders who want someone to validate their existing thinking rather than challenge it.",
  "Those looking for a one-session advisory sprint. Meaningful change takes quarters, not hours.",
  "Founders unwilling to do the hard implementation work between sessions. I don't do the work for you.",
];

const WHAT_I_BRING = [
  {
    title: "GTM Architecture",
    body: "Designing go-to-market engines that don't depend on the founder to close every deal. Channel strategy, sales team structure, pricing, and revenue accountability — built for scale.",
  },
  {
    title: "Execution & OKR Systems",
    body: "Most startups have vision. Few have the operating rhythm to execute it. I build OKR frameworks and review cadences that create accountability without bureaucracy.",
  },
  {
    title: "Strategic Thinking Partner",
    body: "A thinking partner with no equity, no agenda, and no reason to tell you what you want to hear. Board-level strategic clarity, without the board dynamics.",
  },
  {
    title: "Operational Scaling",
    body: "Consumer Durables. Automotive. Telecom. SaaS. 39 years of building operating systems inside Indian businesses — applied to your specific growth bottleneck.",
  },
  {
    title: "Investor-Grade Discipline",
    body: "Board-ready numbers, structured reviews, and a management operating system that gives investors confidence between rounds — without waiting for the board to demand it.",
  },
  {
    title: "First Sales Leader Hire",
    body: "Helping founders define the right profile, structure the interview, and set up accountability architecture — so the hire doesn't fail in six months.",
  },
];

const CREDENTIALS = [
  "EGMP, IIM Bengaluru",
  "Advanced Management Programme, Ross School of Business (via TMTC Pune)",
  "COO-level experience across 6 industries",
  "Bengaluru-based. In-person preferred.",
];

const STEPS = [
  {
    n: "Step 01",
    title: "Discovery Call",
    body: "A 30-minute call where I understand your stage, your challenge, and whether I'm the right fit. No sales pitch. Honest assessment on both sides.",
  },
  {
    n: "Step 02",
    title: "Diagnostic Session",
    body: "A structured 2-hour working session to map your business — strategy, GTM, execution, team. I identify the actual constraint, not the presenting problem.",
  },
  {
    n: "Step 03",
    title: "Mentorship Engagement",
    body: "Regular one-to-one sessions — fortnightly or monthly. In-person in Bengaluru wherever possible. Deep engagement on your specific priorities.",
  },
  {
    n: "Step 04",
    title: "Accountability & Review",
    body: "We track outcomes, not outputs. OKRs, decisions, and actions are reviewed every session. The work must move the business — not just the conversation.",
  },
];

const DIAGNOSTIC_COVERS = [
  "Your current growth rate vs. capacity — where the ceiling actually is",
  "GTM audit: how customers are acquired and what breaks at scale",
  "Team structure: who owns what, where accountability is missing",
  "One priority that, if addressed, unlocks everything downstream",
];

const ENGAGEMENT_MODEL = [
  {
    label: "Engagement length",
    value: "6–12 months",
    note: "Most meaningful change in business systems takes time. Shorter engagements are available for focused diagnostic work only.",
  },
  {
    label: "Session cadence",
    value: "Fortnightly or monthly",
    note: "Regular enough to maintain momentum. Spaced to give you time to do the work between sessions.",
  },
  {
    label: "Fee structure",
    value: "Monthly engagement fee",
    note: "Not per-session. Not hourly. A monthly retainer that reflects an ongoing relationship, not a transactional advisory.",
  },
  {
    label: "Equity",
    value: "Zero",
    note: "Pure advisory fee basis. No equity. The relationship stays clean — my only incentive is the quality of my advice, not your cap table.",
  },
  {
    label: "Location",
    value: "Bengaluru-first",
    note: "In-person preferred for the primary relationship. Virtual works well for ongoing sessions and founders outside Bengaluru.",
  },
  {
    label: "Capacity",
    value: "Very few founders",
    note: "I work with a small number at a time. This is deliberate — depth requires focus. When I'm at capacity, I'll tell you.",
  },
];

const OUTCOMES = [
  {
    title: "Clarity on the Real Bottleneck",
    body: "Most founders are solving the wrong problem. After a diagnostic session, you know exactly where the constraint is — and what to do about it first.",
  },
  {
    title: "A GTM System You Can Delegate",
    body: "A go-to-market motion that doesn't require you to close every deal — with team structure, accountability, and metrics built in.",
  },
  {
    title: "OKR-Based Execution Rhythm",
    body: "A quarterly review cadence and OKR structure that your team actually runs — not a spreadsheet that gets updated once and forgotten.",
  },
  {
    title: "Investor-Grade Operating Discipline",
    body: "Board-ready numbers, structured reviews, and a management operating system that gives investors confidence between rounds.",
  },
  {
    title: "Decisions with Senior Perspective",
    body: "A thinking partner who has held the P&L, managed the team, and faced the board — so your biggest decisions get tested before they're made.",
  },
  {
    title: "A Relationship, Not a Transaction",
    body: "I work with very few founders at a time. The engagement is ongoing, not one-off. You get someone who knows your business as well as you do.",
  },
];

const FAQS = [
  {
    q: "How is this different from an accelerator or incubator?",
    a: "Accelerators run programmes for cohorts of 10–20 startups simultaneously. I work with a small number of founders at a time, one-to-one, with no fixed curriculum. The engagement is built entirely around your specific business and challenge — not a generalised programme.",
  },
  {
    q: "What stage of startup do you typically work with?",
    a: "Post-product-market fit, typically ₹2–50 crore in revenue or Series A/B stage. The challenges I'm most useful for — GTM scaling, execution discipline, OKR design, board-readiness — tend to appear at this stage. Earlier-stage founders are better served by accelerator programmes.",
  },
  {
    q: "Do you take equity or only fees?",
    a: "I work on a pure advisory fee basis. I do not take equity. This keeps the relationship clean — my only incentive is the quality of my advice, not your cap table.",
  },
  {
    q: "Is this in-person or virtual?",
    a: "I prefer in-person for the primary relationship — I'm based in Bengaluru. For founders outside Bengaluru, or for ongoing sessions, virtual works well. The first diagnostic session is always in-person where possible.",
  },
  {
    q: "Do you only work with tech startups?",
    a: "No. My experience spans Consumer Durables, Automotive, Telecom, and SaaS — so I'm comfortable with both tech and non-tech businesses. The principles of GTM, execution, and operational scaling apply across sectors.",
  },
  {
    q: "How long does a typical engagement run?",
    a: "Most engagements run for 6–12 months. Meaningful change in business systems takes time — and a strong mentor relationship compounds over quarters, not weeks. I don't offer one-session advisory sprints.",
  },
  {
    q: "How many founders do you work with at once?",
    a: "Deliberately few. The depth I can offer is proportional to the attention I can give each engagement. When I'm at capacity, the wait is worth knowing about early — reach out and I'll be direct about timelines.",
  },
];

const BLOG_CARDS = [
  {
    tag: "GTM",
    title: "Why Founder-Led Sales Breaks After Series A — And What Replaces It",
    body: "The GTM motion that closed your first ₹2 crore ARR was built around you. Here's why that motion breaks after Series A, and the system that replaces it.",
    href: "/blog/why-founder-led-sales-breaks-after-series-a-and-what-replaces-it",
  },
  {
    tag: "Execution",
    title: "OKRs for Startups: Why Most Founders Get Them Wrong After Series A",
    body: "Most Indian startups adopt OKRs after Series A, then quietly drop them within two quarters. Here's why the startup OKR framework fails — and how to fix it.",
    href: "/blog/ok-rs-for-startups-why-most-founders-get-them-wrong-after-series-a",
  },
  {
    tag: "Mentorship",
    title: "Startup Mentor vs Accelerator in India: Two Jobs Founders Keep Confusing",
    body: "One fixes judgment, the other buys distribution — and confusing them costs founders equity or months they didn't need to spend.",
    href: "/blog/startup-mentor-vs-accelerator-in-india-two-jobs-founders-keep-confusing",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2.5 text-[11px] tracking-[0.16em] uppercase text-light">
      {children}
      <span className="block h-px w-8 bg-rule" />
    </p>
  );
}

export default function StartupMentorBengaluruPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.15fr_1fr] md:gap-12">
          <div>
            <p className="relative mb-5 flex items-center gap-3 pl-4 text-[11px] tracking-[0.16em] uppercase text-light before:absolute before:left-0 before:h-5 before:w-[2px] before:bg-red">
              Startup Mentor · Bengaluru
            </p>
            <h1 className="mb-6 text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-[52px]">
              <span className="block md:whitespace-nowrap">Your startup has grown.</span>
              Your <span className="italic text-red">problems have changed.</span>
            </h1>
            <p className="mb-8 max-w-[520px] text-[18px] italic leading-[1.65] text-mid">
              One-to-one mentorship for startup founders navigating the hard
              stretch — post-product-fit, pre-scale. No cohorts. No templates.
              Just 39 years of real operating experience, in the room with you.
            </p>
            <div className="mb-10 flex flex-wrap items-center gap-4">
              <a
                href={CALENDAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit cursor-pointer rounded-[1px] border-[1.5px] border-red bg-transparent px-9 py-[14px] text-[15px] font-semibold text-red transition-colors hover:bg-red hover:text-white"
              >
                Schedule a Call
              </a>
              <a
                href="#what-i-bring"
                className="inline-block w-fit cursor-pointer rounded-[1px] border-[1.5px] border-red bg-transparent px-9 py-[14px] text-[15px] font-semibold text-red transition-colors hover:bg-red hover:text-white"
              >
                See how I work
              </a>
            </div>
            <div className="flex flex-wrap gap-8 border-t-[0.5px] border-rule pt-8">
              <div>
                <div className="text-[32px] font-bold leading-none text-ink">
                  39<span className="text-red">+</span>
                </div>
                <div className="mt-1.5 text-[11px] tracking-[0.12em] uppercase text-light">
                  Years experience
                </div>
              </div>
              <div className="border-l-[0.5px] border-rule pl-8">
                <div className="text-[32px] font-bold leading-none text-ink">6</div>
                <div className="mt-1.5 text-[11px] tracking-[0.12em] uppercase text-light">
                  Industries
                </div>
              </div>
              <div className="border-l-[0.5px] border-rule pl-8">
                <div className="text-[32px] font-bold leading-none text-ink">COO</div>
                <div className="mt-1.5 text-[11px] tracking-[0.12em] uppercase text-light">
                  Level practitioner
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/images/startup-mentor-hero.png"
            alt="Startup mentor Prem Menon, Bengaluru"
            width={1376}
            height={768}
            priority
            className="mix-blend-multiply h-auto w-full self-start mt-9 md:mt-10"
          />
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start">
          <div>
            <SectionEyebrow>The Problem</SectionEyebrow>
            <h2 className="mb-5 text-[28px] font-bold leading-[1.18] tracking-[-0.015em] text-ink md:text-[36px]">
              Most startup mentors teach. You need{" "}
              <span className="text-red">someone who has done.</span>
            </h2>
            <p className="text-[17px] leading-[1.78] text-mid">
              Bengaluru&rsquo;s startup ecosystem is exceptional at
              early-stage support — accelerators, angel networks, cohort
              programmes. But once you&rsquo;re past ₹2 crore ARR and
              actually trying to scale, the support thins out.
            </p>
          </div>
          <ul className="flex list-none flex-col gap-0 pt-1">
            {GAP_BULLETS.map((b) => (
              <li
                key={b}
                className="relative border-t-[0.5px] border-rule py-4 pl-6 text-[16px] leading-[1.65] text-mid before:absolute before:left-0 before:top-[26px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-red"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
        <blockquote className="mt-10 max-w-[720px] border-[0.5px] border-rule border-l-2 border-l-red px-9 py-8">
          <p className="text-[18px] italic leading-[1.65] text-ink">
            &ldquo;The hardest stage isn&rsquo;t the idea or the first crore.
            It&rsquo;s the stretch between early traction and real scale —
            where gut instinct stops being enough and systems haven&rsquo;t
            been built yet.&rdquo;
          </p>
          <cite className="mt-4 block text-[11px] tracking-[0.12em] uppercase text-light not-italic">
            — Prem Menon, Startup Mentor · Bengaluru
          </cite>
        </blockquote>
      </section>

      {/* WHO I WORK WITH */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Who I Work With</SectionEyebrow>
        <h2 className="mb-3.5 text-[28px] font-bold leading-[1.18] tracking-[-0.015em] text-ink md:text-[36px]">
          Startup founders at the <span className="text-red">growth inflection.</span>
        </h2>
        <p className="mb-12 max-w-[600px] text-[17px] italic leading-[1.65] text-mid md:mb-14">
          I work with a small number of founders at a time. Fit matters more
          than sector.
        </p>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-[#D8D8D8] bg-[#D8D8D8] md:grid-cols-3">
          {WHO.map((c) => (
            <div key={c.n} className="bg-bg px-7 py-9">
              <p className="mb-3.5 text-[11px] font-bold tracking-[0.14em] uppercase text-red">
                {c.n}
              </p>
              <h3 className="mb-3 text-[20px] font-bold leading-[1.3] text-ink">
                {c.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-mid">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THIS ENGAGEMENT ISN'T FOR EVERYONE */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Worth Being Direct</SectionEyebrow>
        <h2 className="mb-3.5 text-[28px] font-bold leading-[1.18] tracking-[-0.015em] text-ink md:text-[36px]">
          This engagement <span className="text-red">isn&rsquo;t for everyone.</span>
        </h2>
        <p className="mb-12 max-w-[600px] text-[17px] leading-[1.78] text-mid md:mb-14">
          I work with very few founders at a time. If any of these describe
          you, we&rsquo;re probably not the right fit — and I&rsquo;ll tell
          you so in the first call.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {NOT_FOR_YOU.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3.5 border-[0.5px] border-rule px-6 py-5"
            >
              <div className="w-0.5 min-h-[48px] shrink-0 self-stretch bg-red" />
              <p className="text-[15px] leading-[1.65] text-mid">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT I BRING */}
      <section id="what-i-bring" className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>What I Bring</SectionEyebrow>
        <h2 className="mb-12 text-[28px] font-bold leading-[1.18] tracking-[-0.015em] text-ink md:mb-14 md:text-[36px]">
          39 years of operating. Not <span className="text-red">advising — operating.</span>
        </h2>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-[#D8D8D8] bg-[#D8D8D8] md:grid-cols-2">
          {WHAT_I_BRING.map((item) => (
            <div key={item.title} className="bg-bg px-7 py-9">
              <h3 className="mb-2.5 text-[20px] font-bold leading-[1.3] text-ink">
                {item.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-mid">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THE OPERATOR */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>The Operator</SectionEyebrow>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[240px_1fr] md:gap-16">
          <div className="aspect-square w-full overflow-hidden bg-[#F7F5F2]">
            <Image
              src="/prem-menon.png"
              alt="Prem Menon, Startup Mentor Bengaluru"
              width={480}
              height={480}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="mb-1.5 text-[24px] font-bold leading-[1.3] text-ink">
              Prem Menon
            </h3>
            <p className="mb-6 text-[13px] tracking-[0.1em] uppercase text-red">
              Startup Mentor · Bengaluru
            </p>
            <p className="mb-7 text-[17px] leading-[1.78] text-mid">
              39 years of management experience rising to COO-level roles
              across Consumer Durables, Automotive, Telecom, and SaaS.
              Independent management consultant since founding Simpleworks
              Consulting — working exclusively one-to-one with founders who
              need a senior operator in their corner.
            </p>
            <div className="mb-7 border-[0.5px] border-rule border-l-2 border-l-red px-7 py-6">
              <p className="text-[15px] leading-[1.7] text-mid">
                At 50, I co-founded Viworks Ventures, then headed product and
                growth at <strong className="font-bold text-ink">Neoffice AI</strong> — a
                SaaS startup where I learned firsthand what it takes to build
                from near-zero with limited resources and unlimited
                ambition. <strong className="font-bold text-ink">I&rsquo;ve been inside a
                startup, not just beside one.</strong> That changes what I
                look for, what I challenge, and how I think about your
                constraints.
              </p>
            </div>
            <ul className="flex list-none flex-col gap-0">
              {CREDENTIALS.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2.5 border-t-[0.5px] border-rule py-2.5 text-[14px] text-mid last:border-b-[0.5px]"
                >
                  <span className="text-red">→</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>The Process</SectionEyebrow>
        <h2 className="mb-3.5 text-[28px] font-bold leading-[1.18] tracking-[-0.015em] text-ink md:text-[36px]">
          Simple. One-to-one. <span className="text-red">No cohorts.</span>
        </h2>
        <p className="mb-12 max-w-[600px] text-[17px] italic leading-[1.65] text-mid md:mb-14">
          Most mentorship programmes put you in a room with eleven other
          founders. This isn&rsquo;t that.
        </p>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-[#D8D8D8] bg-[#D8D8D8] sm:grid-cols-2 md:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-bg px-6 py-8">
              <span className="mb-4 block text-[11px] font-bold tracking-[0.14em] uppercase text-red">
                {s.n}
              </span>
              <h3 className="mb-2.5 text-[17px] font-bold leading-[1.3] text-ink">
                {s.title}
              </h3>
              <p className="text-[14px] leading-[1.65] text-mid">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-9 max-w-[700px] border-[0.5px] border-rule border-l-2 border-l-red px-8 py-7">
          <h3 className="mb-3.5 text-[17px] font-bold leading-[1.3] text-ink">
            What a Diagnostic Session actually covers
          </h3>
          <ul className="flex list-none flex-col gap-3">
            {DIAGNOSTIC_COVERS.map((d) => (
              <li
                key={d}
                className="relative pl-5 text-[14px] leading-[1.65] text-mid before:absolute before:left-0 before:content-['—'] before:text-red"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW ENGAGEMENTS WORK */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>How Engagements Work</SectionEyebrow>
        <h2 className="mb-3.5 text-[28px] font-bold leading-[1.18] tracking-[-0.015em] text-ink md:text-[36px]">
          Structured for <span className="text-red">real outcomes.</span>
        </h2>
        <p className="mb-12 max-w-[600px] text-[17px] leading-[1.78] text-mid md:mb-14">
          Not per-session billing. Not a retainer that drifts. A defined
          engagement with clear accountability — structured so the business
          moves, not just the conversation.
        </p>
        <div className="grid grid-cols-1 gap-x-8 gap-y-0 md:grid-cols-2">
          {ENGAGEMENT_MODEL.map((item) => (
            <div key={item.label} className="border-t-[0.5px] border-rule py-6">
              <span className="mb-2 block text-[11px] tracking-[0.14em] uppercase text-light">
                {item.label}
              </span>
              <div className="mb-1.5 text-[17px] font-bold text-ink">{item.value}</div>
              <p className="text-[13px] leading-[1.6] text-mid">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Outcomes</SectionEyebrow>
        <h2 className="mb-3.5 text-[28px] font-bold leading-[1.18] tracking-[-0.015em] text-ink md:text-[36px]">
          What founders leave with <span className="text-red">differently.</span>
        </h2>
        <p className="mb-12 max-w-[600px] text-[17px] italic leading-[1.65] text-mid md:mb-14">
          Not frameworks in a slide deck. Working systems inside the
          business.
        </p>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-[#D8D8D8] bg-[#D8D8D8] md:grid-cols-3">
          {OUTCOMES.map((o) => (
            <div key={o.title} className="bg-bg px-7 py-9">
              <h3 className="mb-2.5 text-[17px] font-bold leading-[1.3] text-ink">
                {o.title}
              </h3>
              <p className="text-[14px] leading-[1.65] text-mid">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Common Questions</SectionEyebrow>
        <h2 className="mb-10 text-[28px] font-bold leading-[1.18] tracking-[-0.015em] text-ink md:text-[36px]">
          What founders <span className="text-red">ask first.</span>
        </h2>
        <div className="grid grid-cols-1 gap-x-16 gap-y-0 md:grid-cols-2">
          {FAQS.map((item) => (
            <div
              key={item.q}
              className="border-t-[0.5px] border-rule py-6 md:[&:nth-last-child(-n+2)]:border-b-[0.5px]"
            >
              <h3 className="mb-3 text-[17px] font-bold leading-[1.4] text-ink">
                {item.q}
              </h3>
              <p className="text-[15px] leading-[1.75] text-mid">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FROM THE BLOG */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>From the Blog</SectionEyebrow>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4 md:mb-14">
          <h2 className="text-[28px] font-bold leading-[1.18] tracking-[-0.015em] text-ink md:text-[36px]">
            On the hard problems <span className="text-red">founders face at scale.</span>
          </h2>
          <Link
            href="/blog"
            className="whitespace-nowrap text-[13px] font-semibold text-ink underline underline-offset-4 transition-colors hover:text-red"
          >
            All articles →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {BLOG_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="flex flex-col border-[0.5px] border-rule p-7 transition-colors hover:border-ink"
            >
              <span className="mb-3 text-[10px] font-bold tracking-[0.14em] uppercase text-red">
                {card.tag}
              </span>
              <h3 className="mb-2.5 text-[16px] font-bold leading-[1.4] text-ink">
                {card.title}
              </h3>
              <p className="mb-5 flex-1 text-[13px] leading-[1.65] text-mid">
                {card.body}
              </p>
              <span className="text-[12px] tracking-[0.1em] uppercase text-ink">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 text-center md:py-20">
        <div className="mx-auto max-w-[680px]">
          <p className="mb-4 text-[11px] tracking-[0.16em] uppercase text-light">
            Ready to talk?
          </p>
          <h2 className="mb-5 text-[28px] font-bold leading-[1.18] tracking-[-0.015em] text-ink md:text-[36px]">
            A startup mentor who has <span className="text-red">been there.</span>
          </h2>
          <p className="mb-10 text-[17px] italic leading-[1.65] text-mid">
            Start with a 30-minute call. No pitch. No cohort. Just a direct
            conversation about your business and whether I can help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[1px] bg-red px-9 py-[15px] text-[15px] font-bold text-white transition-opacity hover:opacity-90"
            >
              WhatsApp Prem
            </a>
            <a
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[1px] border-[1.5px] border-rule px-9 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
            >
              Book a 30-min Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
