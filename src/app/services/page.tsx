import Link from "next/link";

export const metadata = {
  title: {
    absolute:
      "Consulting Services | MSME, Startup & Family Business | Simpleworks Bengaluru",
  },
  description:
    "Strategy, growth, and execution consulting for Indian MSMEs, startups, and family businesses. Led by Prem Menon — independent management consultant, Bengaluru. First call free.",
  alternates: {
    canonical: "https://simpleworks.in/services",
  },
};

type Spoke = { title: string; href: string; live: boolean };

type ServiceCard = {
  tag: string;
  title: string;
  href: string;
  description: string;
  spokes: Spoke[];
  cta: string;
};

const WHO_WE_WORK_WITH: ServiceCard[] = [
  {
    tag: "MSME Consultant · Bengaluru",
    title: "MSME Consulting",
    href: "/services/msme-consulting",
    description:
      "Strategy, growth, and execution advisory for Indian MSMEs between ₹1 crore and ₹50 crore — manufacturing, consumer goods, retail, and distribution.",
    spokes: [
      {
        title:
          "Why 90% of Indian MSMEs Have No Real Strategy — And the 3-Step Fix",
        href: "/blog/why-90-of-indian-msm-es-have-no-real-strategy-and-the-3-step-fix",
        live: true,
      },
      {
        title:
          "MSME Consulting: Why a Focused Firm Delivers More Than a Full-Service One",
        href: "/blog/msme-consulting-why-a-focused-firm-delivers-more-than-a-full-service-one",
        live: true,
      },
      {
        title: "Who Is Your Customer, Really?",
        href: "/blog/who-is-your-customer-really",
        live: true,
      },
    ],
    cta: "Explore MSME Consulting",
  },
  {
    tag: "Business Mentor · Startups & Small Business",
    title: "Small Business Consulting",
    href: "/services/small-business-consulting",
    description:
      "For early-stage founders and growing businesses that need a thinking partner — not a coach, not a board member, but a working consultant with skin in the outcome.",
    spokes: [
      {
        title:
          "The Difference Between Business Coach and Mentor Isn’t Skill — It’s Stage",
        href: "/blog/the-difference-between-business-coach-and-mentor-isn-t-skill-it-s-stage",
        live: true,
      },
      {
        title:
          "Why Indian MSMEs Should Hire an Independent Consultant — Not a Big Firm",
        href: "/blog/why-indian-msm-es-should-hire-an-independent-consultant-not-a-big-firm",
        live: true,
      },
      { title: "What to expect in a first engagement", href: "", live: false },
    ],
    cta: "Explore Small Business Consulting",
  },
  {
    tag: "Family Business Consultant · India",
    title: "Family Business Consulting",
    href: "/services/family-business-consulting",
    description:
      "For second-generation founders and family-run firms navigating professionalisation, succession, and the complexity of mixing family with business.",
    spokes: [
      { title: "Professionalising a family business", href: "", live: false },
      { title: "Second-generation succession", href: "", live: false },
      { title: "Separating ownership from management", href: "", live: false },
    ],
    cta: "Explore Family Business Consulting",
  },
];

const WHAT_WE_SOLVE: ServiceCard[] = [
  {
    tag: "OKR Consultant · India",
    title: "OKR Consulting",
    href: "/services/okr-consulting",
    description:
      "Goals that cascade. Accountability that sticks. OKR frameworks designed for 10-to-200-person businesses — simple enough to actually use without a consultant in the room.",
    spokes: [
      {
        title: "OKR Consulting for Indian MSMEs: Why Less Is More",
        href: "/blog/okr-consulting-for-indian-msm-es-why-less-is-more",
        live: true,
      },
      { title: "OKR vs KPI for small business", href: "", live: false },
      { title: "A simple OKR template for MSME founders", href: "", live: false },
    ],
    cta: "Explore OKR Consulting",
  },
  {
    tag: "Go-to-Market Strategy · India",
    title: "GTM Consulting",
    href: "/services/gtm-consulting",
    description:
      "Right customers. Right message. Right channels. Go-to-market strategy for Indian businesses entering new segments, geographies, or product lines — with real timelines and limited budgets.",
    spokes: [
      {
        title: "Who Is Your Customer, Really?",
        href: "/blog/who-is-your-customer-really",
        live: true,
      },
      { title: "GTM vs growth strategy", href: "", live: false },
      { title: "Channel strategy for Indian manufacturers", href: "", live: false },
    ],
    cta: "Explore GTM Consulting",
  },
  {
    tag: "Execution Consultant · Strategy to Action",
    title: "Execution Consulting",
    href: "/services/execution-consulting",
    description:
      "Strategy is rarely the problem. Execution is. Simpleworks closes the gap between what leadership decides and what the team actually delivers — with OKRs, accountability structures, and review rhythms.",
    spokes: [
      {
        title:
          "Why 90% of Indian MSMEs Have No Real Strategy — And the 3-Step Fix",
        href: "/blog/why-90-of-indian-msm-es-have-no-real-strategy-and-the-3-step-fix",
        live: true,
      },
      {
        title:
          "MSME Consulting: Why a Focused Firm Delivers More Than a Full-Service One",
        href: "/blog/msme-consulting-why-a-focused-firm-delivers-more-than-a-full-service-one",
        live: true,
      },
      { title: "The 5D Method", href: "", live: false },
    ],
    cta: "Explore Execution Consulting",
  },
];

const PILLAR_POSTS = [
  {
    tag: "Cross-cluster · Strategy + Execution + OKR",
    title:
      "Why Strategy Execution Fails in Indian MSMEs — and What to Do About It",
    href: "/blog/why-strategy-execution-fails-in-indian-msm-es-and-what-to-do-about-it",
    live: true,
  },
  {
    tag: "Cross-cluster · All services",
    title:
      "Business Strategy Consulting for Indian MSMEs: How the Simpleworks 4P Framework Turns Problems Into Plans",
    href: "/blog/business-strategy-consulting-for-indian-msm-es-how-the-simpleworks-4-p-framework-turns-problems-into-plans",
    live: true,
  },
];

const schemaMarkup = {
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
  ],
};

function GroupDivider({ label, description }: { label: string; description: string }) {
  return (
    <div className="flex flex-col gap-2 border-t-[0.5px] border-rule pt-6 md:flex-row md:items-baseline md:justify-between md:gap-6">
      <p className="text-eyebrow uppercase tracking-wide-9 text-light">{label}</p>
      <p className="text-[13px] italic text-light">{description}</p>
    </div>
  );
}

function ServiceCardItem({ card }: { card: ServiceCard }) {
  return (
    <div className="flex flex-col border-t-2 border-rule pt-6 pr-0 pb-7 pl-0 transition-colors duration-[250ms] hover:border-t-red md:pr-7">
      <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.18em] text-red">
        {card.tag}
      </span>
      <h3 className="mb-3 text-[20px] font-bold leading-[1.3] text-ink">
        {card.title}
      </h3>
      <p className="mb-5 text-[15px] leading-[1.7] text-mid">{card.description}</p>

      <div className="mb-6 flex flex-col gap-2">
        {card.spokes.map((spoke) =>
          spoke.live ? (
            <Link
              key={spoke.title}
              href={spoke.href}
              className="text-[13px] leading-[1.5] text-mid transition-colors hover:text-red"
            >
              → {spoke.title}
            </Link>
          ) : (
            <span
              key={spoke.title}
              className="text-[13px] leading-[1.5] text-light/60"
            >
              → {spoke.title}
            </span>
          )
        )}
      </div>

      <Link
        href={card.href}
        className="mt-auto inline-flex w-fit items-center gap-2 text-[14px] font-semibold tracking-wide-1 text-red transition-colors hover:text-ink"
      >
        {card.cta} &nbsp;→
      </Link>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* PAGE HERO */}
      <section className="border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <p className="mb-5 text-eyebrow tracking-wide-9 uppercase text-light">
          What We Do
        </p>
        <h1 className="mb-6 max-w-[640px] text-[36px] leading-[1.1] font-bold tracking-tight-1 md:text-hero-h1">
          Consulting built for businesses
          <br />
          that are <span className="text-red">ready to move</span>.
        </h1>
        <p className="mb-9 max-w-[560px] text-[18px] italic leading-[1.6] text-mid md:text-[20px]">
          Simpleworks works with Indian MSME founders, startup leaders, and
          family business owners — on strategy, growth, and execution. One
          point of contact. No unnecessary complexity.
        </p>
        <div className="max-w-body-text text-[16px] leading-[1.78] text-mid md:text-[17px]">
          <p className="mb-[18px]">
            Every business Simpleworks works with is at some kind of turning
            point. Revenue has plateaued. Margins are shrinking. A market has
            shifted. A founder has realised the old approach won&rsquo;t take
            the business to the next stage.
          </p>
          <p>
            What they need is not a report. They need a plan that is clear
            enough to execute and a consultant who stays until it is moving.
            That is what Simpleworks does — across six focused service areas,
            in two groupings.
          </p>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="flex flex-col gap-8 border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <GroupDivider
          label="Who We Work With"
          description="For founders who know what kind of business they run"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-[2px]">
          {WHO_WE_WORK_WITH.map((card) => (
            <ServiceCardItem key={card.href} card={card} />
          ))}
        </div>
      </section>

      {/* WHAT WE SOLVE */}
      <section className="flex flex-col gap-8 border-b-[0.5px] border-rule px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <GroupDivider
          label="What We Solve"
          description="For founders who know the problem they need to fix"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-[2px]">
          {WHAT_WE_SOLVE.map((card) => (
            <ServiceCardItem key={card.href} card={card} />
          ))}
        </div>
      </section>

      {/* PILLAR CONTENT BAND */}
      <section className="border-b-[0.5px] border-rule bg-warm px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <p className="mb-5 text-eyebrow tracking-wide-9 uppercase text-light">
          Foundational Reading
        </p>
        <h2 className="mb-5 text-[32px] leading-[1.18] font-bold tracking-tight-1 text-ink md:text-sec-h2">
          Two posts that cut <span className="text-red">across everything.</span>
        </h2>
        <p className="mb-10 max-w-body-text text-[16px] leading-[1.78] text-mid md:text-[17px]">
          Some questions don&rsquo;t belong to a single service. These two
          posts explain the thinking behind how Simpleworks approaches every
          engagement — regardless of sector or problem type.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-[2px]">
          {PILLAR_POSTS.map((post) =>
            post.live ? (
              <Link
                key={post.title}
                href={post.href}
                className="block border-l-2 border-red bg-white px-6 py-7 transition-colors hover:bg-warm"
              >
                <span className="mb-3 block text-eyebrow-lg font-semibold uppercase tracking-wide-6 text-red">
                  {post.tag}
                </span>
                <h3 className="mb-3 text-[18px] font-bold leading-[1.4] text-ink">
                  {post.title}
                </h3>
                <span className="text-[13px] font-semibold text-red">
                  Read article →
                </span>
              </Link>
            ) : (
              <div
                key={post.title}
                className="border-l-2 border-red/40 bg-white px-6 py-7"
              >
                <span className="mb-3 block text-eyebrow-lg font-semibold uppercase tracking-wide-6 text-red">
                  {post.tag}
                </span>
                <h3 className="mb-3 text-[18px] font-bold leading-[1.4] text-ink">
                  {post.title}
                </h3>
                <span className="inline-block rounded-[1px] border border-rule px-2.5 py-1 text-[11px] uppercase tracking-wide-3 text-light">
                  Coming soon
                </span>
              </div>
            ),
          )}
        </div>
      </section>

      {/* NOT SURE WHICH SERVICE FITS */}
      <section className="bg-warm px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <div className="max-w-[640px]">
          <h2 className="mb-5 text-[32px] leading-[1.18] font-bold tracking-tight-1 md:text-sec-h2">
            Not sure which service fits your situation?
          </h2>
          <p className="mb-9 text-[16px] leading-[1.78] text-mid md:text-[17px]">
            Most clients come in knowing something is wrong — but not which
            problem to solve first. A 30-minute conversation is usually
            enough to find out. The first call is always free.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2.5 rounded-[1px] border-[1.5px] border-red bg-red px-8 py-3.5 text-[14px] tracking-wide-3 text-white transition-colors hover:bg-transparent hover:text-red"
            >
              Book a Free Conversation &nbsp;→
            </Link>
            <a
              href="https://wa.me/919036099000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2.5 rounded-[1px] border-[1.5px] border-red px-8 py-3.5 text-[14px] tracking-wide-3 text-red transition-colors hover:bg-red hover:text-white"
            >
              WhatsApp Prem Menon &nbsp;→
            </a>
          </div>
          <p className="mt-6 text-[13px] tracking-wide-1 text-light">
            Based in Bengaluru · Working across India · Response within one
            business day
          </p>
        </div>
      </section>
    </>
  );
}
