import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MSME Business Coach India | Premraj Menon | Simpleworks Consulting",
  description:
    "Premraj Menon is a senior MSME business coach based in Bengaluru with 39 years of industry experience. One-to-one coaching for Indian MSME founders in the ₹10–100 crore range. Book a free 30-minute call.",
  keywords:
    "MSME business coach, MSME business coach India, business coach for MSME, MSME mentor India, business mentor for small business India, MSME coaching Bengaluru",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.simpleworks.in/msme-business-coach",
  },
  openGraph: {
    title: "MSME Business Coach India | Premraj Menon | Simpleworks Consulting",
    description:
      "One-to-one coaching for MSME founders who want to grow with clarity — not noise.",
    url: "https://www.simpleworks.in/msme-business-coach",
    siteName: "Simpleworks Consulting",
    type: "website",
  },
};

const CONTACT_LINK = "https://www.simpleworks.in/contact";

const STATS = [
  { num: "39+", label: "Years in business\nleadership" },
  { num: "6", label: "Industries: Consumer\nto SaaS" },
  { num: "1-to-1", label: "No group batches.\nOnly your business." },
];

const PAIN_QUOTES = [
  "“We're busy every day but I don't see the growth I expected.”",
  "“My team executes, but we keep missing targets somehow.”",
  "“We've tried consultants before. Got a report. Nothing changed on the ground.”",
  "“We have no real GTM plan — we just chase every lead that comes.”",
];

const WHO_ITS_FOR = [
  {
    title: "Manufacturing & industrial MSMEs",
    body: "You run a factory, a component supplier, or a process business — and you're trying to grow revenue without adding complexity you can't manage.",
  },
  {
    title: "Consumer goods & distribution businesses",
    body: "You have a product in the market but the channel strategy isn't working — you're over-reliant on one customer, one geography, or one distributor.",
  },
  {
    title: "Family business successors",
    body: "You've taken over from a founder-parent and are navigating the balance between respecting what's been built and leading where it needs to go.",
  },
  {
    title: "First-generation entrepreneurs",
    body: "You've crossed ₹10 crore in revenue but growth has plateaued — and you're not sure whether the problem is strategy, sales, or execution.",
  },
  {
    title: "Startups moving from early traction to scale",
    body: "You have product-market fit and some revenue — but the business isn't yet structured for the next phase of growth.",
  },
  {
    title: "Founders preparing for a growth leap",
    body: "You have a clear ambition — a new market, a new product line, a new city — and need structured thinking before you commit resources.",
  },
];

const STEPS = [
  {
    title: "Discover — understand your business from the inside",
    body: "Map your business model, market, team, and where you actually stand today — without assumptions.",
  },
  {
    title: "Diagnose — find the real constraint",
    body: "Most business problems have a root cause that isn't obvious. We surface what's actually holding growth back, not just the symptoms.",
  },
  {
    title: "Frame the recommendation — a clear path forward",
    body: "A practical, prioritised plan — strategy, GTM, or execution — that fits your business and your capacity to act.",
  },
  {
    title: "Execution cadence — run the plan together",
    body: "We translate the recommendation into weekly actions. You're not left with a deck — we work through implementation side by side.",
  },
  {
    title: "Set accountability — OKRs that keep you on track",
    body: "We build an OKR structure so progress is visible, ownership is clear, and course correction happens before it's too late.",
  },
];

const WHY_CARDS = [
  {
    title: "Built entirely around your business",
    body: "Every session begins where your business is — not where the course wants to start. The diagnosis, the plan, and the implementation support are shaped by your actual situation: your market, your margins, your team, your constraints.",
  },
  {
    title: "39 years of senior operating experience",
    body: "Premraj has held senior leadership roles across six industries — Consumer Durables, Tyres, Automotive, Telecom, and SaaS. That's not theory or certification. It's tested judgment applied to your reality.",
  },
  {
    title: "No reports left behind on a desk",
    body: "Most consultants deliver a document and exit. This engagement stays through implementation — weekly cadence, OKR tracking, course corrections as the business moves.",
  },
  {
    title: "Built for founders Prem can sit across the table from",
    body: "This engagement is based in Bengaluru — full coaching happens face-to-face, in person. A quick advisory conversation works well over a call from anywhere. But the actual diagnostic and execution work needs to happen in person, so this is best suited to founders based in or able to meet regularly in Bengaluru.",
  },
];

const FAQS = [
  {
    q: "What does an MSME business coach do differently from a consultant?",
    a: "A management consultant typically arrives with a framework, applies it, produces a plan, and hands it over. A business coach stays in the conversation longer — asking the right questions, challenging assumptions, and working alongside you as you implement. In practice, Prem's engagements combine both — structured consulting thinking with the continuity of a coaching relationship. You don't just get a plan; you get someone who stays until it's moving.",
  },
  {
    q: "Is MSME business coaching available online across India?",
    a: "Not for the full engagement. A first call or a simple advisory conversation works well online, from anywhere in India. But the diagnostic depth and execution work this coaching is built around — going deep into your numbers, your team, your specific constraints — only works in person. This engagement is currently best suited to founders based in Bengaluru, or able to meet in person regularly.",
  },
  {
    q: "What size of business benefits most from MSME business coaching?",
    a: "The engagement works best for established businesses in the ₹10 crore to ₹100 crore revenue range. This includes MSMEs that have hit a growth ceiling and family businesses navigating a transition. The common thread is a founder or leadership team making real decisions about strategy, market, or execution — and needing a rigorous thinking partner.",
  },
  {
    q: "How many sessions does a coaching engagement involve?",
    a: "The standard engagement runs over four to six structured sessions, but the cadence is shaped around what the business actually needs. Some clients need more depth at the diagnosis stage. Others move quickly once the plan is clear. The structure is flexible — not a fixed programme.",
  },
  {
    q: "How is this different from group MSME coaching programmes or bootcamps?",
    a: "Group programmes work through a shared curriculum applied to dozens or hundreds of businesses simultaneously. They're affordable and useful for building frameworks. But they can't diagnose your specific business, surface your specific growth constraint, or build a plan around your specific market. A one-to-one MSME business coach does exactly that. This engagement is built entirely around your business — nothing generic.",
  },
  {
    q: "What industries does Simpleworks work with?",
    a: "Most clients are in manufacturing, consumer goods, retail and distribution, professional services, or early-stage technology and SaaS businesses. Prem has operating experience across Consumer Durables, Automotive and Tyres, Telecom, and SaaS — so these are the verticals where the coaching is most grounded.",
  },
  {
    q: "What is the first step?",
    a: "A free 30-minute conversation — no agenda, no pitch. You share what your business is dealing with and what you're trying to solve. From there, you both decide whether to go further. No commitment until that conversation has happened.",
  },
];

const BLOG_LINKS = [
  {
    title: "What Does an MSME Business Coach Actually Do?",
    excerpt:
      "The role explained clearly — what a coach does, what they don't do, and how it differs from consulting, training, and mentorship.",
    href: "/blog/what-does-an-msme-business-coach-actually-do",
  },
  {
    title: "How to Choose the Right MSME Business Coach in India",
    excerpt:
      "A practical guide for founders — the questions to ask, the red flags to watch for, and what experience actually matters in this context.",
    href: "/blog/how-to-choose-the-right-msme-business-coach-in-india",
  },
  {
    title: "Business Coach vs Consultant: What Indian MSMEs Actually Need",
    excerpt:
      "The difference between coaching and consulting — and why most Indian MSME founders need elements of both, not a choice between them.",
    href: "/blog/business-coach-vs-consultant-what-indian-msm-es-actually-need",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Premraj Menon",
      jobTitle: "MSME Business Coach",
      description:
        "Senior management consultant and MSME business coach with 39 years of experience across Consumer Durables, Automotive, Telecom, and SaaS. Founder of Simpleworks Consulting, Bengaluru.",
      url: "https://www.simpleworks.in/about",
      image: "https://www.simpleworks.in/images/landing/prem-menon-photo.jpg",
      sameAs: [
        "https://www.linkedin.com/in/premraj/",
        "https://premraj.substack.com/",
      ],
      worksFor: {
        "@type": "LocalBusiness",
        name: "Simpleworks Consulting",
        url: "https://www.simpleworks.in",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
        telephone: "+919036099000",
        email: "pm@simpleworks.in",
      },
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

export default function MsmeBusinessCoachPage() {
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

      {/* NAV */}
      <nav className="flex items-center justify-between gap-3 px-4 py-3 md:px-7 border-b border-rule bg-bg">
        <a
          href="https://www.simpleworks.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 items-center gap-2 md:gap-2.5 no-underline"
        >
          <Image
            src="/images/landing/simpleworks-s-mark.png"
            alt="Simpleworks Consulting"
            width={30}
            height={30}
            className="w-[26px] h-[26px] md:w-[30px] md:h-[30px] flex-shrink-0 object-contain"
          />
          <span className="truncate text-[14px] md:text-[16px] font-bold text-ink tracking-wide">
            Simpleworks <span className="text-red">Consulting</span>
          </span>
        </a>
        <a
          href={CONTACT_LINK}
          className="flex-shrink-0 whitespace-nowrap border border-red text-red text-[10px] md:text-[11px] font-bold px-3 md:px-4 py-1.5 uppercase tracking-wide-6 rounded-sm hover:bg-red hover:text-white transition-colors"
        >
          Let&rsquo;s Talk
        </a>
      </nav>

      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-7 py-12 md:py-16 border-b border-rule">
        <div>
          <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-3">
            MSME Business Coach — India
          </p>
          <h1 className="text-[36px] leading-[1.1] md:text-hero-h1 font-bold tracking-tight-1 text-ink mb-6">
            Your business has{" "}
            <span className="text-red">
              outgrown
              <br />
              generic advice.
            </span>
          </h1>
          <p className="text-[16px] md:text-[18px] italic text-mid leading-[1.65] mb-4">
            One-to-one MSME business coaching for Indian founders in the
            ₹10–100 crore range — built around your actual challenges, not a
            course curriculum.
          </p>
          <p className="text-[16px] md:text-[17px] text-mid leading-[1.78] mb-7">
            If you&rsquo;re running an MSME in India and feel stuck — on
            growth strategy, on where to sell, on why execution keeps
            falling short — you don&rsquo;t need another seminar. You need a
            thinking partner with deep industry experience who will work
            through your specific situation with you. That&rsquo;s what this
            engagement is.
          </p>
          <div className="flex flex-wrap gap-3 mb-3">
            <a
              href={CONTACT_LINK}
              className="inline-block bg-red text-white text-[14px] font-bold px-5 py-2.5 rounded-sm"
            >
              Let&rsquo;s Talk
            </a>
          </div>
          <p className="text-[13px] text-light">
            In-person coaching for Bengaluru &nbsp;·&nbsp; Online advisory calls across India
          </p>
        </div>
        <div className="relative h-[260px] md:h-[420px] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/landing/msme-coach-hero-3.png"
            alt="MSME business coach walking a founder through a GTM strategy session"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="grid grid-cols-3 border-b border-rule">
        {STATS.map((s, i) => (
          <div
            key={s.num}
            className={`py-4 px-4 text-center ${i < 2 ? "border-r border-rule" : ""}`}
          >
            <div className="text-[28px] font-bold text-red leading-none mb-1">
              {s.num}
            </div>
            <div className="text-[13px] text-mid leading-snug whitespace-pre-line">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* WHAT IS AN MSME BUSINESS COACH */}
      <section className="px-7 py-12 md:py-16 border-b border-rule">
        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          Understanding the role
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
          What does an MSME business coach <span className="text-red">actually do?</span>
        </h2>
        <div className="text-[16px] md:text-[17px] text-mid leading-[1.78] flex flex-col gap-3">
          <p>
            An MSME business coach is not a trainer, not a motivational
            speaker, and not a management consultant in the traditional
            sense. The role sits in a specific space: helping a founder or
            business leader think more clearly, make better decisions, and
            build the structures — strategy, GTM, execution, OKRs — that
            allow the business to grow without depending entirely on the
            founder&rsquo;s bandwidth.
          </p>
          <p>
            In India, most coaching in the MSME space happens in groups —
            seminars, bootcamps, online cohorts where the same framework
            gets applied to 200 businesses at once. That model has its
            place. But for an MSME with specific problems — a family
            business navigating succession, a manufacturer trying to break
            into a new channel, a founder whose team keeps missing targets —
            generic frameworks rarely reach the root cause.
          </p>
          <p>
            A one-to-one MSME business coach works only on your business.
            The diagnosis starts with your market, your numbers, your team,
            and your specific constraints. The plan that comes out of that
            process is yours — not a template adapted to fit. And the
            execution support that follows is built around your pace and
            capacity.
          </p>
          <p>
            Not sure how to tell a real fit from a generic one? Read{" "}
            <Link
              href="/blog/how-to-choose-the-right-msme-business-coach-in-india"
              className="text-red underline hover:no-underline"
            >
              how to choose the right MSME business coach
            </Link>{" "}
            for the five questions worth asking before you commit.
          </p>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section className="px-7 py-12 md:py-16 border-b border-rule">
        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          Is this for you?
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
          <span className="text-red">Recognise</span> any of these?
        </h2>
        <p className="text-[16px] md:text-[17px] text-mid leading-[1.78] mb-8">
          If you&rsquo;re running a business in the ₹10–100 crore range and
          feeling any of this, you&rsquo;re in the right place.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PAIN_QUOTES.map((quote) => (
            <div
              key={quote}
              className="bg-warm border-l-[3px] border-red px-3.5 py-3 rounded-r-sm"
            >
              <p className="text-[15px] text-mid leading-relaxed italic">
                {quote}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-7 py-12 md:py-16 border-b border-rule">
        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          How it works
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
          A structured engagement — <span className="text-red">built around your business</span>
        </h2>
        <p className="text-[16px] md:text-[17px] text-mid leading-[1.78] mb-8">
          This isn&rsquo;t a course or a workshop. It&rsquo;s one-to-one
          coaching working through your actual challenges — using a proven
          five-stage process.
        </p>
        <div className="flex flex-col gap-3.5">
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
      </section>

      {/* WHO IS THIS FOR */}
      <section className="px-7 py-12 md:py-16 border-b border-rule">
        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          The right fit
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
          MSME business <span className="text-red">coaching works best</span> for these situations
        </h2>
        <p className="text-[16px] md:text-[17px] text-mid leading-[1.78] mb-8">
          Not every business is ready for one-to-one coaching. Here&rsquo;s
          where this engagement creates the most value:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WHO_ITS_FOR.map((card) => (
            <div
              key={card.title}
              className="p-5 border border-rule rounded-sm"
            >
              <h4 className="text-[18px] font-bold text-ink mb-1">
                {card.title}
              </h4>
              <p className="text-[15px] text-mid leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY SIMPLEWORKS */}
      <section className="px-7 py-12 md:py-16 border-b border-rule">
        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          Why this, not that
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
          What makes a <span className="text-red">one-to-one</span> MSME business coach different
        </h2>
        <p className="text-[16px] md:text-[17px] text-mid leading-[1.78] mb-8">
          There are plenty of coaching options for Indian MSME founders.
          Group programmes, online cohorts, weekend bootcamps — most built
          around a system that works across many businesses simultaneously.
          That model is efficient and affordable. It&rsquo;s also, by
          design, generic. Simpleworks is built differently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WHY_CARDS.map((card, i) => (
            <div
              key={i}
              className="p-5 border border-rule rounded-sm"
            >
              <h4 className="text-[18px] font-bold text-ink mb-1">
                {card.title}
              </h4>
              <p className="text-[15px] text-mid leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <div className="flex flex-col items-start gap-5 md:grid md:grid-cols-[78px_1fr] md:items-center px-7 py-7 border-b border-rule bg-warm">
        <div className="w-[78px] h-[78px] rounded-full overflow-hidden border-2 border-rule flex-shrink-0">
          <Image
            src="/images/landing/prem-menon-portrait.png"
            alt="Premraj Menon, MSME Business Coach"
            width={78}
            height={78}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div>
          <h3 className="text-[18px] font-bold text-ink mb-1.5">
            Premraj Menon
          </h3>
          <p className="text-[13px] font-semibold text-light mb-1.5">
            Founder, Simpleworks Consulting | MSME Business Coach, Bengaluru
          </p>
          <p className="text-[15px] text-mid leading-relaxed">
            Premraj Menon is a senior management consultant and MSME business
            coach based in Bengaluru, with 39 years of experience across
            Consumer Durables, Automotive, Telecom, and SaaS. He has held
            COO-level and senior leadership roles across six industries —
            managing revenue cycles, channel strategy, execution systems, and
            growth transitions. He holds an EGMP from IIM Bengaluru and an
            Advanced Management Programme from Ross School of Business,
            University of Michigan. Simpleworks works
            exclusively with Indian MSMEs, startups, and family businesses in
            the ₹10 crore to ₹100 crore revenue range — one business at a
            time.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href={CONTACT_LINK}
              className="inline-block bg-red text-white text-[14px] font-bold px-5 py-2.5 rounded-sm"
            >
              Let&rsquo;s Talk
            </a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="px-7 py-12 md:py-16 border-b border-rule">
        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          Common questions
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
          What MSME founders usually <span className="text-red">ask before starting</span>
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

      {/* FROM THE BLOG */}
      <section className="px-7 py-12 md:py-16 border-b border-rule">
        <p className="text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2">
          Going deeper
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6">
          <span className="text-red">Read more</span> on MSME business coaching
        </h2>
        <p className="text-[16px] md:text-[18px] text-mid leading-[1.65] mb-8">
          If you&rsquo;re still figuring out whether coaching is right for
          your business, these articles go deeper on the questions founders
          ask most.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BLOG_LINKS.map((post) => (
            <a
              key={post.href}
              href={post.href}
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
            </a>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <div className="px-7 py-10 text-center bg-bg border-t border-rule border-b border-rule">
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-2">
          <span className="text-red">Ready to think</span> clearly about your business?
        </h2>
        <p className="text-[16px] md:text-[18px] italic text-mid leading-[1.65] mb-6">
          Start with a free 30-minute conversation. No commitment, no pitch
          — just a clear-eyed look at what your MSME is dealing with and
          whether this helps.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={CONTACT_LINK}
            className="inline-block bg-red text-white text-[14px] font-bold px-7 py-3.5 rounded-sm"
          >
            Let&rsquo;s Talk
          </a>
        </div>
      </div>
    </main>
  );
}
