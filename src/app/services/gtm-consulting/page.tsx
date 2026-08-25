import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: {
    absolute:
      "GTM Consulting India | Go-to-Market Strategy for MSMEs & Startups | Simpleworks",
  },
  description:
    "Simpleworks builds go-to-market strategies for Indian MSMEs and startups — specific to your market, your distribution reality, and the customers who will actually pay. Bengaluru.",
  alternates: {
    canonical: "https://www.simpleworks.in/services/gtm-consulting",
  },
  openGraph: {
    title:
      "GTM Consulting India | Go-to-Market Strategy for MSMEs & Startups | Simpleworks",
    description:
      "Simpleworks builds go-to-market strategies for Indian MSMEs and startups — specific to your market, your distribution reality, and the customers who will actually pay. Bengaluru.",
    url: "https://www.simpleworks.in/services/gtm-consulting",
    locale: "en_IN",
    type: "website",
  },
};

const GTM_QUESTIONS = [
  {
    num: "01",
    question: "Who exactly is the customer?",
    body: "Not “SMEs in India.” Not “mid-market companies.” A specific segment — defined by industry, geography, company size, buying behaviour, and the problem they are paying to solve. The more precisely you can describe the customer, the more efficiently you can reach them.",
  },
  {
    num: "02",
    question: "Why would they choose you over the alternative?",
    body: "Not a list of features. A clear, honest answer to why a rational buyer in your target segment would pay for your product or service instead of the next-best option available to them. This is your positioning — and most businesses cannot state it clearly in one sentence.",
  },
  {
    num: "03",
    question: "How do you reach them efficiently?",
    body: "The channel and motion: direct sales, dealer networks, digital channels, partnerships, referrals. The sequence: which channel to prove first, at what investment, before expanding. And the message: what you say to the customer and in which context. All three together — not any one alone.",
  },
];

const WHAT_WE_DO = [
  {
    num: "01 — Segmentation",
    title: "Defining the customer with precision",
    body: "Most businesses define their target customer too broadly — which means their sales effort is spread thin and their messaging resonates with no one in particular. Simpleworks works with founders to identify the two or three customer segments most likely to convert, most likely to pay, and most likely to generate referrals — and builds the GTM strategy around those segments first.",
  },
  {
    num: "02 — Positioning",
    title: "Finding the angle that makes you the obvious choice",
    body: "Positioning is not a tagline. It is a clear statement of who you serve, what problem you solve, and why you solve it better than the alternative. Simpleworks develops positioning that is specific enough to be meaningful and honest enough to be defensible — starting from a rigorous analysis of what buyers actually care about, not what the founders want to say about themselves.",
  },
  {
    num: "03 — Channel Strategy",
    title: "Choosing where and how to sell",
    body: "The right channel for an industrial components manufacturer in Pune is not the right channel for a SaaS startup in Bengaluru. Simpleworks builds channel strategy from the ground up — understanding which channels your target segment actually uses to find and evaluate suppliers, and which you can win in given your current resources and relationships.",
  },
  {
    num: "04 — GTM Execution Plan",
    title: "Turning strategy into a sequenced action plan",
    body: "A GTM strategy that lives in a presentation is not a GTM strategy — it is a hypothesis. Simpleworks converts the strategy into a phased execution plan: which segment to pursue first, which channel to prove in the first 90 days, what the sales motion looks like, and what the milestones are that will tell you whether the strategy is working or needs to change.",
  },
];

const SITUATIONS = [
  {
    num: "01",
    title: "The product is good but sales are inconsistent",
    body: "Customers who try the product are happy with it. Referrals come in occasionally. But new customer acquisition is unpredictable — some months are strong, others are not, and the team cannot explain why. The problem is almost always in the GTM: the wrong segment, the wrong channel, or a positioning that doesn't connect with the people most likely to buy.",
  },
  {
    num: "02",
    title: "Entering a new market, geography, or product category",
    body: "A new segment, a new city, a new product line. The approach that worked in the existing market may not work in the new one — different buyers, different buying behaviour, different distribution. Getting the GTM right before committing full sales headcount and marketing budget is the difference between a successful expansion and an expensive lesson.",
  },
  {
    num: "03",
    title: "The market has shifted and the old approach isn't working",
    body: "A new competitor, a change in buyer behaviour, a technology that has disrupted the channel. The business that worked reliably for ten years is now under pressure it has never experienced before. The GTM strategy that built the business needs to be rebuilt — or the business will continue to defend a position that no longer exists.",
  },
  {
    num: "04",
    title: "Revenue is growing but through the wrong customers",
    body: "The business is growing, but the growth is coming from customers who are hard to service, slow to pay, and unlikely to refer others. The best customers — the ones who buy repeatedly, pay promptly, and send referrals — are a small fraction of the revenue. A GTM reset reorients the entire sales effort toward the customers who create the most value at the lowest cost to serve.",
  },
];

const STEPS = [
  {
    num: "01",
    label: "Diagnose",
    title: "Understand the current state before building anything new",
    body: "Before recommending a new GTM, Simpleworks analyses the existing one. Who are the current customers — and which ones are actually profitable? Which channels produced them? What is the win rate in each segment and why? What does the sales process look like and where does it lose? The current state, diagnosed honestly, is the foundation for everything that follows.",
  },
  {
    num: "02",
    label: "Define",
    title: "Identify the segments and build the ICP",
    body: "The Ideal Customer Profile (ICP) is the most important output of a GTM strategy — and most businesses don't have one they can state precisely. Simpleworks builds the ICP from the data: which existing customers deliver the most revenue at the lowest cost to acquire and serve, what they have in common, and how to find more of them. The ICP becomes the filter for every GTM decision that follows.",
  },
  {
    num: "03",
    label: "Design",
    title: "Build the positioning, messaging, and channel strategy",
    body: "With the ICP defined, Simpleworks builds the positioning (why you, for them, vs. the alternative), the messaging (what you say and how), and the channel strategy (how you reach them at scale). For Indian MSMEs, this almost always involves a combination of direct sales, dealer or distributor networks, and digital channels — sequenced in the order that the business can actually execute with its current team and budget.",
  },
  {
    num: "04",
    label: "Deploy",
    title: "Launch the first 90-day GTM sprint and measure what works",
    body: "The GTM strategy launches as a 90-day sprint — a focused effort on one segment, one channel, and one message, with clear milestones that define what success looks like at the end of 90 days. Simpleworks stays involved through this sprint, reviewing results weekly and adjusting the strategy based on what the market is telling you. At the end of the sprint, you have either a proven model to scale or a clear understanding of what to change — not a guess.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Built for Indian distribution reality",
    body: "Dealer networks, distributor relationships, B2B sales cycles, and regional market dynamics — not a digital marketing funnel copied from a SaaS playbook.",
  },
  {
    title: "Starts with your actual customers — not a persona template",
    body: "The ICP is built from your real customer data, not from a workshop exercise. Which customers have the highest LTV, the fastest sales cycle, and the best referral rate. Start there.",
  },
  {
    title: "Strategy that fits your current team and budget",
    body: "A GTM plan that requires headcount you don't have and a marketing budget you can't afford is not a plan — it's a wish. Simpleworks builds GTM strategies around what the business can actually execute in the next 90 days.",
  },
  {
    title: "Premraj Menon leads every engagement personally",
    body: "39 years across Consumer Durables, Automotive, Telecom, and SaaS. No junior consultants. No generic frameworks. GTM advice grounded in how Indian markets actually work.",
  },
];

const AREAS = [
  {
    num: "01",
    title: "Ideal Customer Profile",
    body: "A precise definition of your best customer — the segment that converts fastest, pays best, and refers most. Built from your actual data, not a workshop assumption. The ICP becomes the filter for every sales and marketing decision going forward.",
  },
  {
    num: "02",
    title: "Positioning & Messaging",
    body: "A clear, honest answer to why your target customer should choose you over the alternative — stated in language that reflects how buyers actually think about the problem, not how the product team describes the solution.",
  },
  {
    num: "03",
    title: "90-Day Execution Sprint",
    body: "A sequenced plan for the first 90 days — one segment, one channel, one message, clear milestones. Simpleworks stays involved through the sprint, reviewing results and adjusting in real time. At the end you have a validated model, not a hypothesis.",
  },
];

const LIVE_SPOKES = [
  {
    tag: "GTM",
    title: "Who Is Your Customer, Really?",
    excerpt:
      "A first-principles guide to defining your Ideal Customer Profile — the most important GTM question and the one most businesses answer too vaguely to be useful.",
    href: "/blog/who-is-your-customer-really",
  },
  {
    tag: "Strategy",
    title: "Why 90% of Indian MSMEs Have No Real Strategy — And the 3-Step Fix",
    excerpt:
      "GTM strategy cannot exist without business strategy. This article explains the strategic foundation that every go-to-market effort needs to be built on.",
    href: "/blog/why-90-of-indian-msm-es-have-no-real-strategy-and-the-3-step-fix",
  },
  {
    tag: "Consulting",
    title: "MSME Consulting: Why a Focused Firm Delivers More Than a Full-Service One",
    excerpt:
      "Why a consultant who specialises in GTM for Indian markets will always outperform a generalist agency promising the same result as one of thirty services.",
    href: "/blog/msme-consulting-why-a-focused-firm-delivers-more-than-a-full-service-one",
  },
];

const COMING_SOON_SPOKES = [
  "GTM vs. Growth Strategy — What's the Difference and Which Does Your Business Need?",
  "Channel Strategy for Indian MSME Manufacturers — How to Choose and Win",
  "How to Enter a New Market with a Lean Sales Team",
];

const FAQ_COLUMN_1 = [
  {
    q: "What is a GTM strategy — and how is it different from a marketing plan?",
    a: "A marketing plan describes the activities you will run — campaigns, content, events, advertising. A GTM strategy defines who you are selling to, why they should buy from you, and how you will reach them. The GTM strategy is the foundation; the marketing plan is built on top of it. Most businesses that struggle with marketing are actually struggling with an unclear GTM — the activities cannot work if the fundamentals haven't been defined.",
  },
  {
    q: "Does GTM consulting apply to B2B businesses or B2C businesses?",
    a: "Both — but the approach is different. Most of Simpleworks' GTM work is with B2B businesses: manufacturing companies, industrial suppliers, SaaS businesses, and professional services firms. In B2B, the GTM strategy focuses on segment definition, sales motion, and channel strategy. In B2C, the emphasis shifts toward positioning and distribution. The three core questions — who is the customer, why you, how do you reach them — apply in both cases.",
  },
  {
    q: "How is GTM consulting different from hiring a marketing agency?",
    a: "A marketing agency executes a GTM strategy — they run campaigns, produce content, manage digital channels. Simpleworks builds the GTM strategy that the agency then executes. If you hire a marketing agency before you have a clear GTM, you are paying an agency to run campaigns that haven't been aimed correctly. The GTM strategy comes first; the agency comes second. Many of our clients engage Simpleworks specifically because they have a marketing agency relationship that isn't producing results — and the root cause is always a GTM problem, not an execution problem.",
  },
];

const FAQ_COLUMN_2 = [
  {
    q: "We sell through distributors and dealers. Can Simpleworks help with that kind of GTM?",
    a: "Yes — and this is where Simpleworks' experience is most distinctive. Premraj Menon spent years working in businesses where dealer networks, distribution channels, and trade relationships were the primary GTM motion — Consumer Durables at Usha International, Automotive at MRF and Apollo Tyres. The GTM strategy for a manufacturing or consumer goods business that sells through intermediaries is fundamentally different from a direct sales or digital model, and it requires a consultant who understands how those channels actually work in Indian markets.",
  },
  {
    q: "How long does a GTM consulting engagement last?",
    a: "A full GTM engagement — covering diagnosis, ICP definition, positioning, channel strategy, and the first 90-day sprint — typically runs three to five months. The first four to six weeks cover diagnosis and strategy design. The following ten to twelve weeks cover the 90-day sprint with Simpleworks' active involvement in weekly reviews and adjustments. Shorter engagements focused on a specific GTM question — ICP definition only, or channel strategy for a new market — can run four to six weeks.",
  },
  {
    q: "What does the first step look like?",
    a: "A free 30-minute conversation with Premraj Menon. No pitch, no proposal. You describe where your current GTM is breaking down — inconsistent sales, unclear positioning, a new market you're trying to enter. Prem asks a few direct questions and tells you honestly whether a GTM engagement would help, what it would involve, and what it would cost in approximate terms. If it is not the right fit, he will say so.",
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
      name: "GTM Consulting",
      item: "https://www.simpleworks.in/services/gtm-consulting",
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

export default function GtmConsultingPage() {
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
        <span className="text-mid">GTM Consulting</span>
      </div>

      {/* HERO */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-2.5 text-eyebrow tracking-wide-9 uppercase text-red">
              <span className="block h-px w-6 bg-red" />
              GTM Consulting · Simpleworks
            </p>
            <h1 className="mb-5 text-[36px] leading-[1.1] font-bold tracking-tight-1 md:text-hero-h1">
              The right customers.
              <br />
              <span className="italic text-red">The right way to reach them.</span>
            </h1>
            <p className="mb-7 max-w-[480px] text-[18px] italic leading-[1.6] text-mid md:text-[19px]">
              Simpleworks builds go-to-market strategies for Indian MSMEs and
              startups — specific to your market, your distribution reality,
              and the customers who will actually pay for what you sell.
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
            src="/gtm-consulting-illustration.png"
            alt="GTM strategy consulting workshop for Indian MSME team — Simpleworks Consulting Bengaluru"
            width={800}
            height={533}
            className="w-full rounded-sm"
            priority
          />
        </div>
      </section>

      {/* SECTION 1 — WHAT IS A GTM STRATEGY */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Understanding GTM</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          A GTM strategy answers <span className="text-red">three questions precisely</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Go-to-market strategy is not a marketing plan. It is not a sales
          target. It is the answer to three specific questions — and most
          businesses have answered at least one of them vaguely.
        </p>
        <div className="grid grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-3">
          {GTM_QUESTIONS.map((q) => (
            <div key={q.num} className="bg-bg px-7 py-9">
              <p className="mb-4 text-[44px] font-bold leading-none tracking-tight-2 text-rule md:text-[48px]">
                {q.num}
              </p>
              <h3 className="mb-2.5 text-[18px] font-bold italic leading-[1.3] text-red">
                {q.question}
              </h3>
              <p className="text-[15px] leading-[1.75] text-mid">{q.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2 — WHAT WE DO */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>What We Do</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          What GTM consulting <span className="text-red">looks like in practice</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          GTM consulting at Simpleworks is not brand strategy or a digital
          marketing brief. It is the structured work of answering the three
          GTM questions with enough precision to actually direct a sales and
          marketing effort.
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
          <span className="text-red">founders to GTM consulting</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          GTM consulting is for businesses at a specific kind of turning
          point — when the current approach to market has stopped working,
          or when entering a market for the first time and the stakes of
          getting it wrong are high.
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
            If any of these describe your business, the right next step is a
            conversation.
          </p>
          <Link
            href="/contact"
            className="whitespace-nowrap text-[16px] font-semibold text-red transition-colors hover:text-ink"
          >
            The first call is free →
          </Link>
        </div>
      </section>

      {/* SECTION 4 — HOW WE BUILD A GTM */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>How We Work</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          How Simpleworks builds <span className="text-red">a GTM strategy that works</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Every GTM engagement at Simpleworks follows four steps — in order.
          Skipping any one of them produces a strategy that looks complete
          on paper but fails in the field.
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
          GTM strategy built for <span className="text-red">Indian market reality</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Most GTM frameworks are built for technology companies with large
          marketing budgets, inside sales teams, and digital-first
          distribution. Simpleworks builds GTM strategies for businesses
          where distribution is physical, budgets are real, and the sales
          team is two people.
        </p>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-[72px]">
          <div>
            <p className="mb-5 text-[17px] leading-[1.8] text-mid">
              The standard GTM playbook assumes your market is digital-first,
              your buyers respond to content marketing, and you have a sales
              team that can follow up on inbound leads. For a consumer goods
              company selling through distributors in tier-2 cities, or a
              manufacturing business whose customers still make buying
              decisions based on personal relationships and site visits,
              this playbook is worse than useless — it directs effort toward
              channels your buyers don&rsquo;t use.
            </p>
            <p className="mb-8 text-[17px] leading-[1.8] text-mid">
              Simpleworks brings 39 years of experience in Consumer Durables,
              Automotive, Telecom, and SaaS — businesses where distribution
              networks, dealer relationships, and regional sales structures
              are the core of the GTM, not an afterthought. Premraj Menon has
              built and rebuilt go-to-market strategies across industries
              where the market is physical, the sales cycle is long, and the
              buyer makes decisions based on trust as much as specification.
            </p>

            <div className="mb-8 border-l-2 border-red pl-[22px]">
              <blockquote className="mb-2.5 text-[17px] italic leading-[1.75] text-ink">
                &ldquo;A GTM strategy for an Indian MSME has to start with how
                buyers in your segment actually behave — not how
                they&rsquo;re supposed to behave according to a Silicon
                Valley growth playbook. Most of the time, the answer
                involves a sales person, a relationship, and a site
                visit.&rdquo;
              </blockquote>
              <cite className="text-[12px] not-italic text-light">
                — Premraj Menon, Founder, Simpleworks Consulting
              </cite>
            </div>

            <p className="text-[17px] leading-[1.8] text-mid">
              The 90-day GTM sprint model is built specifically for MSMEs
              that cannot afford to run a six-month strategy experiment. It
              produces a validated model — or a clear indication of what
              isn&rsquo;t working — within a timeframe that leaves room to
              adjust before the year is over.
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

      {/* SECTION 6 — THREE AREAS */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Our Work</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          Three components of every <span className="text-red">GTM engagement</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Every GTM engagement at Simpleworks produces three things. Each
          one is necessary. None of them alone is sufficient.
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

      {/* SECTION 7 — SPOKE ARTICLES */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>From the Blog</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          Going deeper — <span className="text-red">articles on GTM strategy</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          These articles explore the go-to-market questions most Indian
          MSME founders are working through — and how Simpleworks approaches
          them.
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

      {/* SECTION 8 — FAQ */}
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
            Tell us where your current GTM is breaking down — or what market
            you&rsquo;re trying to enter. We&rsquo;ll tell you honestly
            whether and how Simpleworks can help.
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
