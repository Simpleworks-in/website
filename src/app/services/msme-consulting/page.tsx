import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: {
    absolute:
      "MSME Consultant in Bengaluru | Business Growth for Indian MSMEs | Simpleworks",
  },
  description:
    "Simpleworks is an independent MSME consultant in Bengaluru. Business strategy, execution, and growth advisory for Indian MSMEs — led by Prem Menon, 39 years of experience. First call free.",
  alternates: {
    canonical: "https://simpleworks.in/services/msme-consulting",
  },
};

const WHAT_WE_DO = [
  {
    num: "01 — Strategy",
    title: "Where the business should go — and why",
    body: "We work with founders and leadership teams to diagnose the real constraint and build a direction the whole organisation can follow. Not a framework applied from a textbook. A decision, made clearly.",
  },
  {
    num: "02 — Growth",
    title: "The right customers, message, and channel",
    body: "Go-to-market planning for MSMEs entering new segments, geographies, or product lines — with real timelines, limited budgets, and the distribution networks that Indian businesses actually use.",
  },
  {
    num: "03 — Execution",
    title: "Plans that actually move",
    body: "OKR frameworks, accountability structures, and review rhythms that turn decisions into progress. Simple enough to use without a consultant in the room once we've set it up.",
  },
  {
    num: "04 — The difference",
    title: "We stay until the plan is moving",
    body: "Simpleworks doesn't hand over a report and walk away. Every engagement ends when the plan is in motion on the ground — not when the invoice is settled.",
  },
];

const SITUATIONS = [
  {
    num: "01",
    title: "Revenue has plateaued",
    body: "The business grew steadily for years, then stopped. The founder is working harder than ever but the numbers aren't moving. The cause is rarely obvious — usually a combination of unclear positioning, weak execution, and a team that isn't aligned.",
  },
  {
    num: "02",
    title: "Growth is up but margins are shrinking",
    body: "Revenue is increasing but profitability isn't following. Every new customer feels like a win that costs more than it earns. This usually signals a pricing, channel, or cost structure problem — sometimes all three.",
  },
  {
    num: "03",
    title: "The founder is the bottleneck",
    body: "Every important decision flows through one person. The business cannot grow beyond what that person can personally manage. Building the next layer of leadership — and trusting it — is the real work.",
  },
  {
    num: "04",
    title: "A market shift has made the old approach obsolete",
    body: "A large customer has left, a competitor has arrived, or technology has changed the economics. The business needs a new direction — and needs it quickly, before the old momentum runs out.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "One point of contact — always Prem Menon",
    body: "No junior team. No account manager. When you engage Simpleworks, you work directly with Prem — in your office, with your team, on your problem.",
  },
  {
    title: "Scoped for MSMEs — not enterprise minimums",
    body: "Engagement fees are set around what the work actually needs. Every scope is defined upfront with clear milestones and an exit point.",
  },
  {
    title: "Plain-spoken advice you can act on",
    body: "No thick presentations. No frameworks delivered and forgotten. The output is a decision made, a plan agreed, and an execution rhythm running.",
  },
  {
    title: "39 years across six industries",
    body: "Consumer Durables, Automotive & Tyres, Telecom, SaaS, Retail and Distribution. The range matters — the problems MSMEs face are rarely unique to one sector.",
  },
];

const AREAS = [
  {
    num: "01",
    title: "Business Strategy for MSMEs",
    body: "Clarity on where your business should go and why — arrived at through honest diagnosis. Most MSMEs don't lack ideas. They lack clarity on which one to pursue — and the discipline to say no to the rest.",
  },
  {
    num: "02",
    title: "Go-to-Market Planning",
    body: "Right segment, right message, right channel — in the right sequence. GTM for Indian manufacturing businesses looks very different from a SaaS playbook. Distribution networks, dealer relationships, and regional pricing require market-specific thinking.",
  },
  {
    num: "03",
    title: "Execution & OKR Consulting",
    body: "OKR frameworks that work for a 30-person business. We build the goals, define the key results, establish the review cadence, and run the first two cycles with you — so the team understands how to use it without us.",
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
    tag: "MSME Consulting",
    title:
      "MSME Consulting: Why a Focused Firm Delivers More Than a Full-Service One",
    excerpt:
      "Most MSME consulting firms promise everything and deliver little. Here's why focus wins every time.",
    href: "/blog/msme-consulting-why-a-focused-firm-delivers-more-than-a-full-service-one",
  },
  {
    tag: "Growth",
    title: "Who Is Your Customer, Really?",
    excerpt:
      "A first-principles guide to finding, sharpening, and going to market with your Ideal Customer Profile.",
    href: "/blog/who-is-your-customer-really",
  },
];

const COMING_SOON_SPOKES = [
  "5 Signs Your Manufacturing Business Needs an Outside Consultant",
  "MSME Consultant vs. CA vs. MBA Hire — What's Right for You?",
  "Why MSME Owners Hit a Growth Ceiling at ₹5 Crore",
];

const FAQ_COLUMN_1 = [
  {
    q: "What is an MSME consultant — and how is it different from a CA or business coach?",
    a: "A CA manages compliance, tax, and financial reporting. A business coach works on mindset and leadership behaviour. An MSME consultant works on business decisions — strategy, market positioning, growth planning, and execution. We are not a replacement for your CA. We work on what sits between the numbers and the person making them.",
  },
  {
    q: "What size of MSME does Simpleworks typically work with?",
    a: "We work primarily with Indian MSMEs between ₹1 crore and ₹50 crore in annual revenue — founder-led or family-run, with 10 to 300 employees. The right fit is less about revenue and more about the nature of the problem and the readiness to act on clear direction.",
  },
  {
    q: "Do you work with manufacturing businesses specifically?",
    a: "Yes. Manufacturing, consumer goods, and distribution businesses make up a significant part of our client base. Prem Menon's experience includes Consumer Durables at Usha International and Automotive & Tyres at MRF and Apollo Tyres — businesses where distribution, dealer networks, and operational efficiency are central.",
  },
];

const FAQ_COLUMN_2 = [
  {
    q: "How long does a typical MSME consulting engagement last?",
    a: "Strategy sprints typically run three to six weeks. Longer engagements — execution support, OKR coaching, ongoing advisory — run three to twelve months. We define scope, milestones, and an exit point at the start so there are no open-ended commitments on either side.",
  },
  {
    q: "Do you work only in Bengaluru?",
    a: "Simpleworks is based in Bengaluru and works in person across South India. For founders in other parts of India, we work through a combination of in-person visits and structured online sessions. The preference is always in-person — especially for diagnosis and early planning.",
  },
  {
    q: "What does the first step look like?",
    a: "A 30-minute conversation. The first call is free and has no agenda except understanding your situation. No pitch. No proposal before we've spoken. You describe what you're dealing with — we tell you honestly whether we can help and what that would look like in practice.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://simpleworks.in" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://simpleworks.in/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "MSME Consulting",
      item: "https://simpleworks.in/services/msme-consulting",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MSME Consulting",
  provider: {
    "@type": "LocalBusiness",
    name: "Simpleworks Consulting",
    url: "https://simpleworks.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Independent management consulting for Indian MSMEs — strategy, growth, and execution advisory led by Prem Menon, Bengaluru.",
  url: "https://simpleworks.in/services/msme-consulting",
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2.5 text-eyebrow tracking-wide-9 uppercase text-light">
      {children}
      <span className="block h-px w-8 bg-rule" />
    </p>
  );
}

export default function MsmeConsultingPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
        <span className="text-mid">MSME Consulting</span>
      </div>

      {/* HERO */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-2.5 text-eyebrow tracking-wide-9 uppercase text-red">
              <span className="block h-px w-6 bg-red" />
              MSME Consulting · Bengaluru, India
            </p>
            <h1 className="mb-5 text-[36px] leading-[1.1] font-bold tracking-tight-1 md:text-hero-h1">
              MSME Consultant
              <span className="block italic text-red">in Bengaluru</span>
            </h1>
            <p className="mb-7 max-w-[460px] text-[18px] italic leading-[1.6] text-mid md:text-[19px]">
              Business strategy, growth, and execution advisory — built for
              Indian MSMEs that are ready to move.
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
            src="/msme-consulting-illustration.png"
            alt="MSME consultant in Bengaluru in conversation with Indian business founder — Simpleworks Consulting"
            width={800}
            height={537}
            className="w-full rounded-sm"
            priority
          />
        </div>
      </section>

      {/* SECTION 1 — WHAT WE DO */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>What We Do</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          What does an MSME consultant <span className="text-red">actually do?</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Most Indian MSME founders have worked with accountants and bankers.
          A management consultant is different — we work on the decisions
          that determine whether your business grows, plateaus, or turns
          around.
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

      {/* SECTION 2 — WHO WE WORK WITH */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Who We Work With</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          The MSME founders <span className="text-red">we work with</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Simpleworks works with Indian MSMEs typically between ₹1 crore and
          ₹50 crore in revenue — founder-led or family-run, with 10 to 300
          employees, across manufacturing, consumer goods, retail, and
          distribution.
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
            If any of these sound familiar, the right next step is a
            conversation — not a proposal.
          </p>
          <Link
            href="/contact"
            className="whitespace-nowrap text-[16px] font-semibold text-red transition-colors hover:text-ink"
          >
            The first call is free →
          </Link>
        </div>
      </section>

      {/* SECTION 3 — WHY SIMPLEWORKS */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Why Simpleworks</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          Why an independent consultant —{" "}
          <span className="text-red">not a large firm</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Large consulting firms are built for large organisations.
          Simpleworks is built for businesses where the founder is in the
          room and the plan must be executable by the existing team.
        </p>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-[72px]">
          <div>
            <p className="mb-5 text-[17px] leading-[1.8] text-mid">
              Large management consulting firms in India — the Big 4, the
              strategy boutiques — are built for large organisations. Their
              minimum engagement fees start where most MSMEs&rsquo; annual
              consulting budgets end. Their deliverables are structured for
              board rooms, not founder offices.
            </p>
            <p className="mb-8 text-[17px] leading-[1.8] text-mid">
              Simpleworks is built differently — by deliberate choice.
            </p>

            <div className="mb-8 border-l-2 border-red pl-[22px]">
              <blockquote className="mb-2.5 text-[17px] italic leading-[1.75] text-ink">
                &ldquo;What I bring is not a framework from a textbook.
                It&rsquo;s 39 years of real decisions, real teams, and real
                markets — distilled into advice that is simple enough to act
                on by Monday morning.&rdquo;
              </blockquote>
              <cite className="text-[12px] not-italic text-light">
                — Prem Menon, Founder, Simpleworks Consulting
              </cite>
            </div>

            <p className="text-[17px] leading-[1.8] text-mid">
              Every engagement at Simpleworks is led personally by Prem
              Menon — a consultant with 39 years across Consumer Durables,
              Automotive, Telecom, and SaaS. He has worked inside large
              corporates at P&amp;L level and inside startups with no budget.
              That range is what makes advice for an MSME actually useful.
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

      {/* SECTION 4 — THREE AREAS */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Our Work</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          MSME consulting across <span className="text-red">three areas</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Strategy, growth, and execution are interconnected. A plan without
          execution is a wish. Execution without direction is just activity.
          Simpleworks works across all three — because that&rsquo;s what
          actually moves a business forward.
        </p>
        <div className="grid grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-3">
          {AREAS.map((area) => (
            <div key={area.num} className="bg-bg px-7 py-9">
              <p className="mb-5 text-[44px] font-bold leading-none tracking-tight-2 text-rule md:text-[48px]">
                {area.num}
              </p>
              <h3 className="mb-3 text-[18px] font-bold leading-[1.3] text-ink">
                {area.title}
              </h3>
              <p className="text-[15px] leading-[1.75] text-mid">{area.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — SPOKE ARTICLES */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>From the Blog</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          Going deeper — <span className="text-red">articles on MSME consulting</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          These articles explore the problems most MSME founders face — and
          the thinking behind how Simpleworks approaches them.
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

      {/* SECTION 6 — FAQ */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Common Questions</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          Frequently asked <span className="text-red">questions</span>
        </h2>
        <p className="mb-10 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:text-[18px]">
          Everything you need to know before starting a conversation.
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
                  <p className="text-[16px] leading-[1.8] text-mid">{item.a}</p>
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
            Tell us what your business is dealing with. We&rsquo;ll tell you
            honestly whether we can help — and what that would look like in
            practice.
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
