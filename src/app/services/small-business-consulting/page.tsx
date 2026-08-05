import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: {
    absolute:
      "Small Business Consultant India | Business Mentor for Startups | Simpleworks",
  },
  description:
    "Simpleworks works with small business founders and startup leaders across India — on strategy, growth, and execution. Independent consultant led by Prem Menon, Bengaluru. First call free.",
  alternates: {
    canonical: "https://www.simpleworks.in/services/small-business-consulting",
  },
  openGraph: {
    title:
      "Small Business Consultant India | Business Mentor for Startups | Simpleworks",
    description:
      "Simpleworks works with small business founders and startup leaders across India — on strategy, growth, and execution. Independent consultant led by Prem Menon, Bengaluru. First call free.",
    url: "https://www.simpleworks.in/services/small-business-consulting",
    locale: "en_IN",
    type: "website",
  },
};

const DISTINCTIONS = [
  {
    label: "Option 1",
    title: "Business Coach",
    body: "A coach works on you — your mindset, habits, leadership behaviour, and personal effectiveness. Coaching is valuable. But if your business has a structural problem — wrong market, broken pricing, weak execution — coaching won't fix it. You'll be a better-thinking founder with the same broken business.",
    note: "Right when: the problem is personal, not structural",
    active: false,
  },
  {
    label: "Option 2",
    title: "Business Mentor",
    body: "A mentor shares experience — what worked for them, what they would do in your position. Mentors are valuable for perspective. But a mentor is not accountable for your business. They advise and step back. You implement alone, with whatever you could extract from the conversation.",
    note: "Right when: you need perspective, not implementation",
    active: false,
  },
  {
    label: "Simpleworks",
    title: "Simpleworks Business Mentor",
    body: "Simpleworks Business Mentor works on the business — not you, and not from a distance. Simpleworks diagnoses the real problem, builds the plan with you, and stays until the plan is moving. The engagement ends when the business has changed — not when an hour is up or a session is complete.",
    note: "Right when: the business itself needs to change",
    active: true,
  },
];

const WHAT_WE_DO = [
  {
    num: "01 — Clarity",
    title: "Getting the business off the wrong path",
    body: "Many small businesses grow in the wrong direction — serving the wrong customers, pricing incorrectly, spread across too many offers. The first job is diagnosis: understanding what the business is actually doing versus what it should be doing, and making the hard decisions that clarify the path forward.",
  },
  {
    num: "02 — Growth",
    title: "Finding and winning the right customers",
    body: "Growth for a small business is not a marketing campaign. It is a clear answer to three questions: who exactly is the customer, why would they choose you over the alternative, and how do you reach them efficiently. Simpleworks works through these with founders who are ready to be specific.",
  },
  {
    num: "03 — Structure",
    title: "Building a business that doesn't need you for everything",
    body: "Most small business founders are the bottleneck in their own company. Every decision, every client call, every important email runs through them. Simpleworks builds the structure — roles, accountability, decision rights — that allows the business to operate independently of the founder's constant attention.",
  },
  {
    num: "04 — Execution",
    title: "Making the plan actually happen",
    body: "A plan that stays in a document is not a plan — it is a good intention. Simpleworks builds the execution rhythm that turns strategy into weekly action: clear priorities, clear owners, and a review cadence that keeps the business accountable to its own decisions.",
  },
];

const SITUATIONS = [
  {
    num: "01",
    title: "The startup that has customers but no clarity",
    body: "The product works. Customers are paying. But growth is inconsistent, the team is pulling in different directions, and the founder can't describe their business in one clear sentence. The business needs a strategic reset — not more features, not more marketing spend.",
  },
  {
    num: "02",
    title: "The small business that has stopped growing",
    body: "Revenue was growing steadily, then plateaued. The founder has tried new products, new channels, new hires — nothing has moved the number sustainably. The problem is usually deeper than any of these fixes: positioning, pricing, or a customer base that has drifted from the original vision.",
  },
  {
    num: "03",
    title: "The founder who needs someone to think with",
    body: "Running a small business is often a lonely exercise. The team looks to the founder for answers. The board wants results. Advisors give broad opinions. The founder needs someone who will sit with the actual problem — not just the version of it that's easy to describe in fifteen minutes.",
  },
  {
    num: "04",
    title: "The business at a genuine inflection point",
    body: "A large opportunity has arrived, or a large threat. A potential partnership, a new competitor, a market shift, a funding conversation. The decision made in the next 90 days will shape the next three years. The founder needs clear thinking quickly — not eventually.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "One consultant, always Prem Menon",
    body: "No junior team. No hand-offs. When you engage Simpleworks you work directly with Prem — in person where possible, structured online sessions where not.",
  },
  {
    title: "Scoped to what your business actually needs",
    body: "Engagements are defined by the problem, not by a standard package. A three-week strategy sprint looks different from a six-month execution engagement — and is priced accordingly.",
  },
  {
    title: "Plain-spoken advice you can act on immediately",
    body: "No thick documents. No frameworks that need a consultant to interpret. The output is a decision made, a direction agreed, and a first week of action defined before the meeting ends.",
  },
  {
    title: "Available across India, based in Bengaluru",
    body: "Simpleworks works in person across South India and through structured online sessions for founders elsewhere. The preference is always to be in the room — especially for diagnosis.",
  },
];

const AREAS = [
  {
    num: "01",
    title: "Business Strategy",
    body: "Clarity on what the business is, who it serves, and why it wins. For small businesses and startups, strategy is not a long-term exercise — it is an urgent one. The wrong direction compounds faster at this stage than at any other.",
  },
  {
    num: "02",
    title: "Go-to-Market Planning",
    body: "The right customers, reached through the right channels, with the right message. For startups and small businesses, GTM is the difference between a product that sells and one that doesn't — regardless of how good the product is.",
  },
  {
    num: "03",
    title: "Execution & OKRs",
    body: "Simple goal-setting and accountability structures that a small team can actually use. Three to five objectives. Clear key results. A weekly rhythm. Enough structure to create momentum — not so much that it becomes a system nobody maintains.",
  },
];

const LIVE_SPOKES = [
  {
    tag: "Leadership",
    title:
      "The Difference Between Business Coach and Mentor Isn’t Skill — It’s Stage",
    excerpt:
      "Mentors give answers while coaches ask questions — most MSME founders hire the wrong one because they misdiagnose whether they're stuck on missing information or on execution.",
    href: "/blog/the-difference-between-business-coach-and-mentor-isn-t-skill-it-s-stage",
  },
  {
    tag: "Growth",
    title:
      "Why Indian MSMEs Should Hire an Independent Consultant — Not a Big Firm",
    excerpt:
      "Big consulting firms are structurally mismatched to founder-led Indian MSMEs. An independent consultant is accountable by name and incentivized to solve the problem and move on.",
    href: "/blog/why-indian-msm-es-should-hire-an-independent-consultant-not-a-big-firm",
  },
  {
    tag: "Strategy",
    title: "Why 90% of Indian MSMEs Have No Real Strategy — And the 3-Step Fix",
    excerpt:
      "Most small business founders have a plan, not a strategy. Here's the difference — and how to fix it without offsites or 40-page documents.",
    href: "/blog/why-90-of-indian-msm-es-have-no-real-strategy-and-the-3-step-fix",
  },
  {
    tag: "Growth",
    title: "Who Is Your Customer, Really?",
    excerpt:
      "A first-principles guide to finding, sharpening, and going to market with your Ideal Customer Profile.",
    href: "/blog/who-is-your-customer-really",
  },
  {
    tag: "Consulting",
    title: "MSME Consulting: Why a Focused Firm Delivers More",
    excerpt:
      "Why a consultant who does one thing well is almost always more useful than one who promises to do everything.",
    href: "/blog/msme-consulting-why-a-focused-firm-delivers-more-than-a-full-service-one",
  },
  {
    tag: "Leadership",
    title: "What to Expect in a First Consulting Engagement",
    excerpt:
      "Most founders judge a first engagement by how fast a big plan lands in their inbox. The right test is whether the process — diagnosis, real interviews, an interim checkpoint — holds up before you've spent a Rupee on the outcome.",
    href: "/blog/what-to-expect-in-a-first-consulting-engagement-it-s-not-what-you-think",
  },
];

const COMING_SOON_SPOKES = [
  "How to Pick a Business Mentor for Your Startup in India",
];

const FAQ_COLUMN_1 = [
  {
    q: "What is the difference between a business consultant and a business mentor?",
    a: "A mentor shares experience and perspective — what they would do, what worked for them. A consultant works on the business directly — diagnosing problems, building plans, and staying until the plan is moving. Simpleworks is a consulting practice, not a mentoring arrangement. The difference matters because a mentor is not accountable for the outcome. A consultant is.",
  },
  {
    q: "What stage of business does Simpleworks typically work with?",
    a: "We work with small businesses and startups typically between ₹50 lakh and ₹20 crore in annual revenue. The business has usually found its first customers and proven the model works — but is struggling to scale, clarify direction, or execute consistently. If you are pre-revenue, we are likely not the right fit yet.",
  },
  {
    q: "Can Simpleworks work with early-stage startups?",
    a: "Yes — but with a caveat. Early-stage startups benefit most from consulting when they have enough customer feedback to know what is and isn't working. If you are still testing the core assumption of your business, the right engagement is a short diagnostic — not a full consulting programme.",
  },
];

const FAQ_COLUMN_2 = [
  {
    q: "How is Simpleworks different from other small business consultants?",
    a: "Three things: Prem Menon leads every engagement personally — no junior consultants, no hand-offs. Engagements are scoped to the specific problem — not packaged into standard formats. And Simpleworks stays until the plan is moving — not until an agreed number of sessions is complete.",
  },
  {
    q: "How long does a small business consulting engagement typically last?",
    a: "It depends on the problem. A strategic clarity sprint runs two to four weeks. A go-to-market engagement typically runs six to ten weeks. A longer execution engagement — including OKR design — runs three to six months. We define the scope and timeline at the start so there are no open-ended commitments on either side.",
  },
  {
    q: "What does the first step look like?",
    a: "A 30-minute conversation. Free, with no agenda except understanding your situation. You describe what you are dealing with — Prem asks a few direct questions and tells you honestly whether Simpleworks can help and what that engagement would look like in practice.",
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
      name: "Small Business Consulting",
      item: "https://www.simpleworks.in/services/small-business-consulting",
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

export default function SmallBusinessConsultingPage() {
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
        <span className="text-mid">Small Business Consulting</span>
      </div>

      {/* HERO */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-2.5 text-eyebrow tracking-wide-9 uppercase text-red">
              <span className="block h-px w-6 bg-red" />
              Small Business Consulting · Simpleworks
            </p>
            <h1 className="mb-5 text-[36px] leading-[1.1] font-bold tracking-tight-1 md:text-hero-h1">
              A thinking partner
              <br />
              <span className="italic text-red">who works, not advises.</span>
            </h1>
            <p className="mb-7 max-w-[480px] text-[18px] italic leading-[1.6] text-mid md:text-[19px]">
              For startup founders and small business owners who need more
              than a coach — a consultant who understands your business,
              stays until the plan is moving, and tells you the truth.
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
            src="/small-business-consulting-illustration.png"
            alt="Small business consultant in conversation with startup founder — Simpleworks"
            width={800}
            height={600}
            className="w-full rounded-sm"
            priority
          />
        </div>
      </section>

      {/* DISTINCTION SECTION */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Understanding the Difference</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          Business mentor, coach, or consultant —{" "}
          <span className="text-red">which one does your business need?</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Most founders use these three terms interchangeably. They are not
          the same — and choosing the wrong one costs time your business
          doesn&rsquo;t have.
        </p>
        <div className="grid grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-3">
          {DISTINCTIONS.map((d) => (
            <div key={d.title} className="bg-bg px-7 py-9">
              <p className="mb-4 text-[11px] font-bold tracking-wide-6 uppercase text-light">
                {d.label}
              </p>
              <h3
                className={`mb-4 text-[20px] font-bold leading-[1.2] ${
                  d.active ? "text-red" : "text-ink"
                }`}
              >
                {d.title}
              </h3>
              <p className="text-[15px] leading-[1.75] text-mid">{d.body}</p>
              <p className="mt-4 border-t-[0.5px] border-rule pt-4 text-[13px] italic text-red">
                {d.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 1 — WHAT WE DO */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>What We Do</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          What small business consulting{" "}
          <span className="text-red">looks like in practice</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Every small business Simpleworks works with is at a turning point.
          The work is always specific to the business — but it almost always
          falls into one of these four areas.
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
          The founders <span className="text-red">we work with</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Simpleworks works with startup founders and small business owners
          typically between ₹50 lakh and ₹20 crore in revenue — at the stage
          where the business has proven it can work, but hasn&rsquo;t yet
          proven it can scale.
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
            If any of these sound like your business, the right next step is
            a conversation — not a proposal.
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
          Why small business founders{" "}
          <span className="text-red">choose Simpleworks</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Most consultants are built for large organisations. Simpleworks is
          built for businesses where the founder is still in every
          conversation and the team is still figuring out what it means to
          work together.
        </p>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-[72px]">
          <div>
            <p className="mb-5 text-[17px] leading-[1.8] text-mid">
              Large consulting firms are expensive, junior-staffed, and
              optimised for organisations with dedicated strategy functions.
              Business coaches are valuable for personal development but
              don&rsquo;t work on the business itself. Mentors offer
              perspective but no accountability.
            </p>
            <p className="mb-8 text-[17px] leading-[1.8] text-mid">
              Simpleworks sits in a different position. We work on the
              business directly — strategy, go-to-market, execution — led
              personally by Prem Menon, with 39 years of experience across
              Consumer Durables, Automotive, Telecom, and SaaS. The
              engagement is scoped for what the business actually needs, not
              what fits a standard package.
            </p>

            <div className="mb-8 border-l-2 border-red pl-[22px]">
              <blockquote className="mb-2.5 text-[17px] italic leading-[1.75] text-ink">
                &ldquo;A small business founder doesn&rsquo;t need a report.
                They need someone in the room who has seen this problem
                before, is not afraid to say what they really think, and
                will stay until it&rsquo;s resolved.&rdquo;
              </blockquote>
              <cite className="text-[12px] not-italic text-light">
                — Prem Menon, Founder, Simpleworks Consulting
              </cite>
            </div>

            <p className="text-[17px] leading-[1.8] text-mid">
              The first call is free and takes 30 minutes. We will tell you
              honestly whether Simpleworks can help — and if not, where to
              look instead.
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
          Three areas we work in <span className="text-red">for small businesses</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Small business consulting at Simpleworks is not a menu. Strategy,
          growth, and execution connect to each other — and a change in one
          always affects the other two.
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
          Going deeper —{" "}
          <span className="text-red">articles for small business founders</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          These articles cover the questions most small business founders
          are working through — and how Simpleworks thinks about them.
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
            Tell us what your business is dealing with. We will tell you
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
