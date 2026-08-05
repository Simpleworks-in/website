import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: {
    absolute:
      "Family Business Consultant India | Professionalisation & Succession | Simpleworks",
  },
  description:
    "Simpleworks works with Indian family businesses on professionalisation, succession planning, and next-generation leadership. Led by Prem Menon, Bengaluru. First call free.",
  alternates: {
    canonical: "https://www.simpleworks.in/services/family-business-consulting",
  },
  openGraph: {
    title:
      "Family Business Consultant India | Professionalisation & Succession | Simpleworks",
    description:
      "Simpleworks works with Indian family businesses on professionalisation, succession planning, and next-generation leadership. Led by Prem Menon, Bengaluru. First call free.",
    url: "https://www.simpleworks.in/services/family-business-consulting",
    locale: "en_IN",
    type: "website",
  },
};

const REALITIES = [
  {
    num: "01",
    title: "Ownership and management are tangled",
    body: "In most Indian family businesses, the same people own the company, manage it day to day, and inherit it across generations. When ownership, management, and family are the same group, every business decision carries a family dimension — and every family conflict has a business consequence.",
  },
  {
    num: "02",
    title: "Succession is treated as an event, not a process",
    body: "Most Indian family businesses treat succession as something that happens when the founder retires or passes away — not as a transition that needs to be designed years in advance. The result is a handover with no preparation, no authority transfer, and a second generation that inherits a business they were never trained to lead.",
  },
  {
    num: "03",
    title: "Professionalisation feels like a betrayal",
    body: "Bringing in professional management, formalising roles, or separating ownership from operations can feel to the founding generation like an admission that the old way didn't work — or a signal that the family is losing control. This emotional resistance is real. It is also the single biggest reason Indian family businesses fail to professionalise before it becomes a crisis.",
  },
];

const WHAT_WE_DO = [
  {
    num: "01 — Professionalisation",
    title: "Building a business that runs beyond the founder",
    body: "Formalising roles, defining decision rights, and creating accountability structures that don't depend on the founder's constant involvement. The goal is a business that operates predictably whether the founder is in the room or not — without losing the speed and trust that made it successful.",
  },
  {
    num: "02 — Succession Planning",
    title: "Designing the handover before it becomes urgent",
    body: "Succession is not a document — it is a multi-year process of transferring authority, building capability, and aligning the family on what the next chapter looks like. Simpleworks helps families design that process while there is still time to do it well, not when the situation forces it.",
  },
  {
    num: "03 — Next-Generation Leadership",
    title: "Preparing the second generation to actually lead",
    body: "Most second-generation leaders in Indian family businesses inherit a title and a business simultaneously — with no structured preparation for either. Simpleworks works with the next generation on the specific skills, decisions, and relationships that the transition will demand of them before it arrives.",
  },
  {
    num: "04 — Business Strategy",
    title: "Setting the direction for the next chapter",
    body: "Many family businesses reach a transition point where the strategy that built the business is no longer the strategy that will grow it. New markets, new competition, new generations with different ambitions. Simpleworks works with family leadership to define where the business goes next — and how to get family alignment on that direction.",
  },
];

const SITUATIONS = [
  {
    num: "01",
    title: "The founder is ready to step back but hasn't built a successor",
    body: "The business is profitable and growing. The founder wants to reduce daily involvement. But the second generation is either not ready, not willing, or not aligned on who takes what role. The transition has been deferred until the need becomes urgent — and urgency is the worst condition under which to make succession decisions.",
  },
  {
    num: "02",
    title: "Multiple siblings in the business without clear ownership",
    body: "Two or three children of the founder are all working in the business. No one has defined what each person owns, what authority they hold, or how decisions get made when they disagree. The business runs on informal consensus that works in good times and breaks in bad ones — usually just as a major decision is required.",
  },
  {
    num: "03",
    title: "The business has outgrown its informal management style",
    body: "What worked at ₹2 crore does not work at ₹15 crore. The business needs formal systems, professional roles, and a management structure that doesn't depend on the founder knowing everything. The family knows this. But every attempt to formalise has been resisted, delayed, or quietly abandoned.",
  },
  {
    num: "04",
    title: "Family conflict is spilling into business decisions",
    body: "A disagreement between family members — about direction, about roles, about money — is starting to affect how the business operates. Decisions that should be made on commercial grounds are being made on family grounds, or not being made at all. The business needs a structure that separates these two domains before they become entangled beyond repair.",
  },
];

const PATHWAY = [
  {
    num: "01",
    label: "Assess",
    title: "Understand the business and family structure as it actually is",
    body: "We start by understanding the current state — not as it appears on an org chart, but as it actually operates. Who makes which decisions, formally and informally. Where authority sits and where it is assumed. What the family agrees on and where the fault lines are. Diagnosis before prescription — always.",
  },
  {
    num: "02",
    label: "Align",
    title: "Get the family to agree on what the next chapter looks like",
    body: "Before redesigning anything, the family needs to agree on the direction. Does the next generation want to grow the business, maintain it, or eventually exit? Does the founding generation want to stay involved or step back fully? What does success look like in five years — for the business and for the family? These conversations are often avoided. We facilitate them directly.",
  },
  {
    num: "03",
    label: "Structure",
    title: "Separate ownership from management from operations",
    body: "The structural work: defining roles and decision rights for each family member, separating the family council from the management team, establishing a governance framework that works for the size and complexity of this business. Not a template — a structure that fits the specific family and the specific business.",
  },
  {
    num: "04",
    label: "Build",
    title: "Develop the next generation's capability to lead",
    body: "Succession without capability development is just a title change. Simpleworks works with the next generation on the specific leadership, commercial, and relational skills that the transition will demand — before the transition happens. This includes structured exposure to the decisions the business depends on, not just the ones they currently handle.",
  },
  {
    num: "05",
    label: "Transfer",
    title: "Execute the succession with a plan, not an event",
    body: "The handover itself — authority, relationships, institutional knowledge, and accountability — is designed as a phased process, not a single moment. The founding generation reduces involvement gradually, with clear milestones at each stage. The next generation assumes authority progressively, with support structures in place until they are no longer needed.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Commercial and human — not one or the other",
    body: "We hold both dimensions simultaneously. The business needs to work commercially. The family needs to stay intact. Simpleworks keeps both outcomes in view — not just the one that's easier to measure.",
  },
  {
    title: "Prem Menon leads every engagement personally",
    body: "No junior consultants. No hand-offs. Family business work depends on trust — and trust takes time to build. Prem is in every conversation, from the first call to the final handover.",
  },
  {
    title: "Direct when directness is required",
    body: "Family businesses often have conversations they need to have but haven't. Simpleworks does not soften difficult realities. We name what we observe, clearly and respectfully — because the alternative is more expensive.",
  },
  {
    title: "Structured for the Indian family business context",
    body: "Western succession frameworks don't map directly to Indian family business structures — joint family dynamics, multi-generation involvement, and the social dimension of the business all require a different approach. Simpleworks works in this context, not against it.",
  },
];

const AREAS = [
  {
    num: "01",
    title: "Professionalisation",
    body: "Formal roles, clear decision rights, and management systems that work independently of any one family member. The business becomes an institution — not a function of whoever happens to be in the building that day.",
  },
  {
    num: "02",
    title: "Succession & Governance",
    body: "A designed handover — not an improvised one. Authority transfers in stages, with milestones, support structures, and a governance framework that keeps ownership and management appropriately separated as the business evolves.",
  },
  {
    num: "03",
    title: "Business Strategy",
    body: "The next generation often inherits a business that was designed for a different market. Simpleworks works with family leadership to define the commercial strategy for the next chapter — growth, diversification, or disciplined consolidation.",
  },
];

const LIVE_SPOKES = [
  {
    tag: "Strategy",
    title: "Why 90% of Indian MSMEs Have No Real Strategy — And the 3-Step Fix",
    excerpt:
      "Applies directly to family businesses where strategy exists in the founder's head but nowhere else. The 3-step fix works whether you are the first or second generation.",
    href: "/blog/why-90-of-indian-msm-es-have-no-real-strategy-and-the-3-step-fix",
  },
  {
    tag: "Consulting",
    title: "MSME Consulting: Why a Focused Firm Delivers More Than a Full-Service One",
    excerpt:
      "Why a consultant who specialises in family business professionalisation will always outperform a generalist who offers the same service as one of twenty.",
    href: "/blog/msme-consulting-why-a-focused-firm-delivers-more-than-a-full-service-one",
  },
  {
    tag: "Growth",
    title: "Who Is Your Customer, Really?",
    excerpt:
      "Family businesses often inherit a customer base rather than choose one. This article asks the harder question: is the customer you have the customer you should be serving?",
    href: "/blog/who-is-your-customer-really",
  },
  {
    tag: "Succession",
    title:
      "Is Your Family Business Ready for the Next Generation? 5 Hard Questions Every Owner Must Answer",
    excerpt:
      "Five direct questions every family business owner needs to answer before handing over the reins — on readiness, roles, and what succession actually requires.",
    href: "/blog/is-your-family-business-ready-for-the-next-generation-5-hard-questions-every-owner-must-answer",
  },
];

const COMING_SOON_SPOKES = [
  "Why Indian Family Businesses Fail at Succession — and What to Do Before It's Urgent",
  "Separating Ownership from Management in an Indian Family Business",
  "Second-Generation Founder: How to Take Charge Without Losing the Business",
];

const FAQ_COLUMN_1 = [
  {
    q: "What exactly is family business consulting — and how is it different from management consulting?",
    a: "Management consulting addresses commercial problems: strategy, growth, execution, operations. Family business consulting addresses problems that exist at the intersection of family and business — succession, professionalisation, governance, next-generation leadership. The commercial and the personal are inseparable in a family business, and a consultant who addresses only one will make the other worse. Simpleworks works at that intersection.",
  },
  {
    q: "Is Simpleworks a mediator or a therapist for family conflict?",
    a: "Neither. Simpleworks is a management consultant who understands the family dimension of business problems — and knows when to bring in a mediator or therapist if the situation calls for it. We do not do conflict resolution or family therapy. We do help families have the business conversations they have been avoiding, in a structured environment where decisions can actually be made and acted on.",
  },
  {
    q: "At what stage should a family business engage a consultant?",
    a: "Earlier than most families do. The ideal time to plan succession is five to ten years before it becomes necessary. The ideal time to professionalise is when the business is growing well — not when it is in crisis. Simpleworks works with families who are thinking ahead as well as families who are managing an immediate situation. The work is different in each case, but the earlier it starts, the more options remain available.",
  },
];

const FAQ_COLUMN_2 = [
  {
    q: "What if not all family members agree to engage a consultant?",
    a: "It is common. The founding generation may see the need; the second generation may resist. Or vice versa. Simpleworks starts with whoever in the family is ready for the conversation and works from there. We do not require full family alignment as a precondition for starting — but we are transparent that alignment is a goal of the process, not a starting assumption.",
  },
  {
    q: "How long does a family business consulting engagement last?",
    a: "It depends on the scope. A strategic clarity engagement for a family business — defining direction and aligning the family on priorities — typically runs four to eight weeks. A full professionalisation and succession engagement — covering structure, governance, capability development, and phased handover — runs six to eighteen months, with Simpleworks' involvement tapering as the family develops the capability to manage independently.",
  },
  {
    q: "What does the first step look like?",
    a: "A 30-minute conversation — free, with no agenda except understanding where your family business is and what is making it difficult right now. Prem Menon will ask a few direct questions and tell you honestly what kind of engagement would be useful, what it would look like, and approximately how long it would take. If Simpleworks is not the right fit, he will say so directly.",
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
      name: "Family Business Consulting",
      item: "https://www.simpleworks.in/services/family-business-consulting",
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

export default function FamilyBusinessConsultingPage() {
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
        <span className="text-mid">Family Business Consulting</span>
      </div>

      {/* HERO */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-2.5 text-eyebrow tracking-wide-9 uppercase text-red">
              <span className="block h-px w-6 bg-red" />
              Family Business Consulting · Simpleworks
            </p>
            <h1 className="mb-5 text-[36px] leading-[1.1] font-bold tracking-tight-1 md:text-hero-h1">
              The business built by one generation
              <br />
              <span className="italic text-red">must be led by the next.</span>
            </h1>
            <p className="mb-7 max-w-[480px] text-[18px] italic leading-[1.6] text-mid md:text-[19px]">
              Simpleworks works with Indian family businesses navigating
              professionalisation, succession, and the complexity of
              separating family from the company — without losing what made
              the business work in the first place.
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
            src="/family-business-consulting-illustration.png"
            alt="Family business consultant presenting professionalisation pathway to Indian family business team — Simpleworks Consulting"
            width={800}
            height={533}
            className="w-full rounded-sm"
            priority
          />
        </div>
      </section>

      {/* THE REALITY */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>The Reality</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          What makes family businesses{" "}
          <span className="text-red">uniquely difficult to run</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Family businesses across India share three structural challenges
          that no amount of hard work or goodwill resolves on its own.
          Recognising them is the first step.
        </p>
        <div className="grid grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-3">
          {REALITIES.map((r) => (
            <div key={r.num} className="bg-bg px-7 py-9">
              <p className="mb-3 text-[44px] font-bold leading-none tracking-tight-2 text-rule md:text-[48px]">
                {r.num}
              </p>
              <h3 className="mb-2.5 text-[18px] font-bold leading-[1.3] text-ink">
                {r.title}
              </h3>
              <p className="text-[15px] leading-[1.75] text-mid">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 1 — WHAT WE DO */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>What We Do</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          What family business consulting{" "}
          <span className="text-red">looks like in practice</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Family business consulting at Simpleworks is not conflict mediation
          or legal restructuring — those have their own specialists. We work
          on the business decisions that sit at the intersection of family
          and commercial reality.
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
          The situations that bring{" "}
          <span className="text-red">family businesses to us</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Simpleworks works with Indian family businesses typically between
          ₹1 crore and ₹50 crore in revenue — at the point where informal
          structures and founder instinct are no longer enough to manage what
          the business has become.
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
            If your family business is at any of these points, a conversation
            is a better starting place than a proposal.
          </p>
          <Link
            href="/contact"
            className="whitespace-nowrap text-[16px] font-semibold text-red transition-colors hover:text-ink"
          >
            The first call is free →
          </Link>
        </div>
      </section>

      {/* SECTION 3 — PROFESSIONALISATION PATHWAY */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>How We Work</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          The Simpleworks{" "}
          <span className="text-red">Professionalisation Pathway</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Every family business engagement at Simpleworks follows a
          structured sequence. The steps are consistent — the pace and depth
          depend on where the family is starting from.
        </p>

        <div className="flex flex-col">
          {PATHWAY.map((step) => (
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

      {/* SECTION 4 — WHY SIMPLEWORKS */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Why Simpleworks</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          Why family businesses work <span className="text-red">with Simpleworks</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Family business consulting requires a consultant who can hold both
          the commercial and the human dimension simultaneously — and who has
          earned the trust to say difficult things directly.
        </p>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-[72px]">
          <div>
            <p className="mb-5 text-[17px] leading-[1.8] text-mid">
              Family business problems are rarely purely commercial or purely
              personal — they are usually both at once. The succession
              question is also a question about who the founder is without
              the business. The professionalisation question is also a
              question about whether the family trusts professional managers
              as much as they trust each other.
            </p>
            <p className="mb-8 text-[17px] leading-[1.8] text-mid">
              Consultants who approach family business as a pure management
              problem miss the emotional reality. Therapists and mediators
              who approach it as a pure family problem miss the commercial
              urgency. Simpleworks works at the intersection — understanding
              the family dynamics well enough to navigate them, while keeping
              the business outcomes clearly in view.
            </p>

            <div className="mb-8 border-l-2 border-red pl-[22px]">
              <blockquote className="mb-2.5 text-[17px] italic leading-[1.75] text-ink">
                &ldquo;The most difficult conversation in a family business is
                usually the one nobody has had yet. My job is to create the
                conditions in which that conversation can happen — and then
                make sure something changes because of it.&rdquo;
              </blockquote>
              <cite className="text-[12px] not-italic text-light">
                — Prem Menon, Founder, Simpleworks Consulting
              </cite>
            </div>

            <p className="text-[17px] leading-[1.8] text-mid">
              Prem Menon brings 39 years of experience across Consumer
              Durables, Automotive, Telecom, and SaaS. He has worked inside
              businesses where family and commercial decisions were
              inseparable, and alongside founders navigating the handover to
              the next generation. This is not theoretical — it is lived
              experience brought to bear on your specific situation.
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

      {/* SECTION 5 — THREE AREAS */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>Our Work</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          Three areas we work in <span className="text-red">for family businesses</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          Family business consulting at Simpleworks always addresses all
          three of these areas — because they are inseparable. You cannot
          professionalise without a succession plan. You cannot plan
          succession without a strategy for what the business is becoming.
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

      {/* SECTION 6 — SPOKE ARTICLES */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <SectionEyebrow>From the Blog</SectionEyebrow>
        <h2 className="mb-3.5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
          Going deeper — <span className="text-red">articles on family business</span>
        </h2>
        <p className="mb-12 max-w-body-text text-[16px] italic leading-[1.75] text-mid md:mb-14 md:text-[18px]">
          These articles explore the challenges specific to Indian family
          businesses — professionalisation, succession, and what it takes to
          lead a business you didn&rsquo;t build.
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
            Tell us where your family business is right now — what&rsquo;s
            working, what isn&rsquo;t, and what&rsquo;s been avoided.
            We&rsquo;ll tell you honestly whether and how Simpleworks can
            help.
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
