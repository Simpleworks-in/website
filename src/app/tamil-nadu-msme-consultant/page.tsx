import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import { whatsappHref } from "@/lib/whatsapp";
import { FACTS } from "../../../content/facts";

const TITLE = "MSME Consultant & Business Coach Tamil Nadu | Simpleworks Consulting";
const DESCRIPTION =
  "Advisory for owner-run MSMEs in Hosur, Chennai, Coimbatore, Tiruppur and Salem, from Premraj Menon, who has coached around 3,000 MSME partners.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords:
    "MSME consultant Tamil Nadu, MSME business coach Tamil Nadu, business coach for MSME owners, business consultant Chennai, auto component consultant Hosur, business consultant Sriperumbudur, Salem manufacturing consultant, Tiruppur export business consultant, Coimbatore engineering business consultant, family business consultant Tamil Nadu, execution consulting MSME",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.simpleworks.in/tamil-nadu-msme-consultant",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
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
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://www.simpleworks.in/images/landing/tamil-nadu-hero.png"],
  },
};

// Same pre-filled message for the hero and the closing CTA.
const WHATSAPP_LINK = whatsappHref(
  "Hi Premraj, I run a business in Tamil Nadu and would like an introductory call.",
);
const PHONE_HREF = "tel:+919036099000";

const BUTTON =
  "inline-block font-serif text-sm tracking-wide-3 text-red border-[1.5px] border-red px-9 py-[14px] rounded-[1px] bg-transparent transition-colors hover:bg-red hover:text-white";
const EYEBROW = "text-[10px] font-bold tracking-wide-7 uppercase text-red mb-2";
const H2 =
  "text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-6";
const SECTION = "px-7 py-12 md:py-16 border-t border-rule";

// Proof strip. Same facts and wording as the /about strip.
const PROOF_ITEMS = [
  {
    lead: "Nearly ",
    red: "10 years",
    caption:
      "inside MSMEs: co-founder of Viworks Ventures, then on the management team at Neoffice",
  },
  {
    lead: "About ",
    red: "3,000",
    caption: "MSME partners worked with and coached over 30 years",
  },
  {
    lead: "",
    red: "2019",
    caption:
      "ET-SIDBI Best Exporter award, Micro Enterprise category, won by Neoffice",
  },
];

const PAIN_POINTS = [
  "One OEM, one anchor customer or one export buyer takes too big a share of your sales.",
  "Every approval, payment and customer escalation still lands on your desk.",
  "Sales run on your contacts, not on a process your team can follow without you.",
  "Nobody can tell you quickly which buyer or which product actually makes money.",
  "Your son or daughter has joined the business. Nobody is quite sure what they own.",
  "The plan you made before Pongal is still a plan.",
];

const THREE_SIDES = [
  {
    num: "01",
    title: "As a co-founder and operator",
    body: "He co-founded Viworks Ventures, then joined the management team at Neoffice from September 2019, running growth and strategy. Neoffice won the ET-SIDBI Best Exporter award in the Micro Enterprise category in 2019.",
  },
  {
    num: "02",
    title: "As the corporate head who depended on MSMEs",
    body: "At MRF, Apollo Tyres, Bharti Airtel and Tata Docomo, his numbers depended on MSME dealers and channel partners. Many of them were family-owned.",
  },
  {
    num: "03",
    title: "As the person they called when stuck",
    body: "Over 30 years he worked with around 3,000 MSME partners, and coached their owners to improve results when the business stalled.",
  },
];

const HOSUR_POST =
  "when-one-oem-is-60-of-your-revenue-customer-concentration-risk-in-hosur-s-auto-component-belt";

const IN_PERSON = "In person. A short drive from our Bangalore office.";
const ONLINE = "Online sessions, with on-site visits agreed upfront.";

const CLUSTERS = [
  {
    title: "Hosur–Krishnagiri",
    industries: "Precision engineering, auto components",
    problem: "One anchor customer, and every plan bends around it.",
    problemHref: `/blog/${HOSUR_POST}`,
    delivery: IN_PERSON,
  },
  {
    title: "Chennai–Sriperumbudur–Oragadam",
    industries: "Auto, electronics",
    problem: "Little leverage with buyers and OEMs on price and terms.",
    delivery: ONLINE,
  },
  {
    title: "Coimbatore",
    industries: "Engineering, machinery",
    problem: "A product range that grew order by order, without focus.",
    delivery: ONLINE,
  },
  {
    title: "Tiruppur",
    industries: "Knitwear, export apparel",
    problem: "Busy every season, but margin per buyer is a guess.",
    delivery: ONLINE,
  },
  {
    title: "Salem",
    industries: "Textiles, steel, foundries",
    problem: "Succession and roles in the family that nobody has decided.",
    delivery: ONLINE,
  },
];

const SERVICES = [
  {
    title: "Business strategy",
    body: "Which segments make money, focus versus diversification, and a three-year direction the family agrees on.",
  },
  {
    title: "Go-to-market",
    body: "Less dependence on one buyer, new accounts, a sales process the team can run, pricing discipline.",
  },
  {
    title: "Execution",
    body: "Quarterly goals with owners, a review rhythm, and fewer decisions waiting for you.",
  },
  {
    title: "Owner coaching",
    href: "/msme-business-coach",
    body: "Delegation, the next generation’s role, and an outside view for the decisions only you can make.",
  },
];

const STEPS = [
  {
    label: "Step 1 · Free",
    title: "Introductory call",
    body: "WhatsApp Premraj with a line on what is stuck. He replies and sets up a short call, and tells you honestly whether Simpleworks can help.",
  },
  {
    label: "Step 2 · Fixed fee, paid after",
    title: "Diagnostic",
    body: "One problem you name, worked through with you in focused sessions. In person or online, anywhere in Tamil Nadu.",
  },
  {
    label: "Step 3 · If it makes sense",
    title: "Ongoing work",
    body: "In-person programmes where the business is within reach, or Simple Advisory: two online sessions a month, month to month.",
  },
];

// Plain-text answers feed the FAQPage JSON-LD. `link` is shown on the page
// only and is deliberately left out of the JSON-LD.
const FAQS: { q: string; a: string; link?: { href: string; label: string } }[] = [
  {
    q: "Are you an MSME consultant or an MSME business coach?",
    a: "Both. As a consultant, Premraj works on strategy, go-to-market and execution with your team. As a business coach, he works one to one with you, the owner. Most Tamil Nadu engagements need some of each.",
    link: { href: "/msme-business-coach", label: "More on MSME business coaching →" },
  },
  {
    q: "I run a family business, not a corporate. Will you understand how it works?",
    a: "Yes. Premraj co-founded a small business, was on the management team of another, and worked with around 3,000 MSME partners over 30 years. Many were family-owned.",
  },
  {
    q: "What size of business do you work with?",
    a: `Founder-led businesses of roughly ${FACTS.revenueRange} in revenue. Smaller businesses can start with a Diagnostic on one problem.`,
  },
  {
    q: "Will you come to our factory?",
    a: "In Hosur–Krishnagiri, yes, in person. Elsewhere in Tamil Nadu, sessions run online, with on-site visits at the points that need them, agreed upfront.",
  },
  {
    q: "Can my son or daughter join the sessions?",
    a: "Yes, where it helps. Many engagements work with the founder and the next generation together.",
  },
  {
    q: "What does it cost?",
    a: "The introductory call is free. Programme fees are fixed and published. Larger engagements are scoped and priced after the first conversation.",
  },
  {
    q: "Will you sign an NDA?",
    a: "Yes. Your numbers and your family’s matters stay with you.",
  },
];

// Hand-picked and fixed. Titles come from the CMS; labels are set here.
const RELATED_POSTS = [
  { slug: HOSUR_POST, label: "Hosur · Customer concentration" },
  { slug: "how-to-make-your-business-run-without-the-owner", label: "Business coach" },
  { slug: "founder-dependency-fix-the-decisions-before-the-org-chart", label: "Strategy" },
  { slug: "business-not-growing-a-business-growth-consultant-s-audit", label: "Growth" },
  { slug: "zero-to-one-for-msm-es-your-second-market-is-a-new-startup", label: "Growth" },
  {
    slug: "how-to-build-a-90-day-gtm-plan-a-complete-framework-for-small-business-owners-with-limited-marketing-budgets",
    label: "Go-to-market",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MSME Consulting in Tamil Nadu",
  description:
    "Business strategy, go-to-market and execution consulting for founder-led MSMEs across Tamil Nadu’s manufacturing and export clusters.",
  url: "https://www.simpleworks.in/tamil-nadu-msme-consultant",
  provider: { "@id": "https://www.simpleworks.in/#organization" },
  areaServed: [
    "Tamil Nadu",
    "Chennai",
    "Sriperumbudur",
    "Oragadam",
    "Hosur",
    "Krishnagiri",
    "Coimbatore",
    "Tiruppur",
    "Salem",
  ],
  knowsAbout: [
    "MSME consulting",
    "MSME business coaching",
    "Family business consulting",
    "Go-to-market strategy",
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
  const relatedPosts = (
    await Promise.all(
      RELATED_POSTS.map(async ({ slug, label }) => {
        const entry = await reader.collections.posts.read(slug);
        return entry ? { slug, label, title: entry.title } : null;
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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-7 py-12 md:py-16 items-center">
        <div>
          <p className={`${EYEBROW} mb-3`}>
            MSME consultant &amp; business coach · Tamil Nadu
          </p>
          <h1 className="text-[36px] leading-[1.1] md:text-hero-h1 font-bold tracking-tight-1 text-ink mb-6">
            Tamil Nadu&rsquo;s MSMEs are built by their owners.{" "}
            <span className="text-red">The next stage needs a system.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] italic text-mid leading-[1.65] mb-7">
            For owner-run manufacturing, export and trading businesses in
            Hosur, Chennai, Coimbatore, Tiruppur and Salem. You work directly
            with Premraj Menon, who has co-founded a small business himself and
            spent 30 years coaching MSME owners to grow.
          </p>
          <div className="flex flex-col items-start gap-4">
            <a href={WHATSAPP_LINK} data-cta="hero" className={BUTTON}>
              WhatsApp Premraj for an introductory call →
            </a>
            <a
              href={PHONE_HREF}
              data-cta="hero-phone"
              className="text-[15px] text-light underline decoration-rule underline-offset-4 transition-colors hover:text-red"
            >
              or call 90360 99000
            </a>
          </div>
        </div>
        <figure>
          <div className="relative h-[320px] md:h-[420px] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/landing/tamil-nadu-hero.png"
              alt="Watercolour portrait of Premraj Menon, founder of Simpleworks Consulting"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </figure>
      </section>

      {/* PROOF STRIP */}
      <div className="mx-7 grid grid-cols-1 gap-8 border-t border-b border-rule py-8 min-[760px]:grid-cols-3 min-[760px]:gap-12">
        {PROOF_ITEMS.map((item) => (
          <div key={item.caption}>
            <p className="mb-2 text-[30px] md:text-[36px] font-bold leading-[1.1] tracking-tight-1 text-ink">
              {item.lead}
              <span className="text-red">{item.red}</span>
            </p>
            <p className="max-w-[320px] text-[15px] leading-[1.6] text-light">
              {item.caption}
            </p>
          </div>
        ))}
      </div>

      {/* THE PROBLEM */}
      <section className={`${SECTION} mt-12 md:mt-16`}>
        <p className={EYEBROW}>Sound familiar?</p>
        <h2 className={H2}>
          The business grew on your relationships.{" "}
          <span className="text-red">Now it leans on them too hard.</span>
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-8">
          {PAIN_POINTS.map((point) => (
            <li
              key={point}
              className="border-t border-rule py-4 text-[16px] text-mid leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>
        <p className="text-[17px] md:text-[19px] text-ink leading-[1.7] max-w-[760px]">
          None of these is a strategy problem. They are what happens when a
          business outgrows the way it is run, and they are fixable.
        </p>
      </section>

      {/* WHO YOU WORK WITH */}
      <section className={SECTION}>
        <p className={EYEBROW}>Who you work with</p>
        <h2 className={H2}>
          Not a corporate consultant.{" "}
          <span className="text-red">Someone who has seen MSMEs from the inside.</span>
        </h2>
        <p className="text-[17px] md:text-[19px] text-mid leading-[1.7] max-w-[760px] mb-10">
          Most consultants from large companies have only seen MSMEs from the
          outside. Premraj Menon has seen them from three sides.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">
          {THREE_SIDES.map((s) => (
            <div key={s.num} className="border-t border-ink pt-4">
              <p className="text-[13px] text-light mb-2">{s.num}</p>
              <h3 className="text-[18px] font-bold text-ink leading-snug mb-2">
                {s.title}
              </h3>
              <p className="text-[15px] text-mid leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <blockquote className="border-l-[3px] border-red pl-6 max-w-[760px]">
          <p className="text-[17px] md:text-[18px] italic leading-[1.6] text-ink mb-3">
            39 years, from a sales trainee at Usha International in 1987 to COO
            of the Kerala circle at Tata Docomo with full P&amp;L.
          </p>
          <p className="text-[14px] text-light">
            EGMP, IIM Bengaluru; 19th Tata Group Executive Leadership Seminar,
            Ross School of Business, University of Michigan.
          </p>
        </blockquote>
      </section>

      {/* FAMILY-OWNED BUSINESSES */}
      <section className={SECTION}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 md:gap-16">
          <div>
            <p className={EYEBROW}>Family-owned businesses</p>
            <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink">
              When the next generation{" "}
              <span className="text-red">joins the business.</span>
            </h2>
          </div>
          <div>
            <p className="text-[16px] md:text-[17px] text-mid leading-[1.78] mb-4">
              Most of the businesses Premraj worked with were family-owned.
              Over the years, many owners asked him for help with two things:
              bringing the next generation into the business, and getting the
              family clear and agreed on where the business is going.
            </p>
            <p className="text-[16px] md:text-[17px] text-mid leading-[1.78] mb-4">
              Simpleworks works with the founder, and where it helps, the next
              generation, to settle those questions in the open, as part of the
              business plan.
            </p>
            <p className="text-[14px] text-light leading-relaxed">
              Simpleworks does not give legal, tax or wealth-planning advice.
              Where that is needed, you will be told and pointed to the right
              professional.
            </p>
          </div>
        </div>
      </section>

      {/* WHERE WE WORK */}
      <section className={SECTION}>
        <p className={EYEBROW}>Where we work</p>
        <h2 className={H2}>
          Five clusters, different industries.{" "}
          <span className="text-red">The owner&rsquo;s problems sound the same.</span>
        </h2>
        <div className="mb-6">
          {CLUSTERS.map((c, i) => (
            <div
              key={c.title}
              className={`grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr_1fr] gap-3 md:gap-10 border-t border-rule py-5 ${
                i === CLUSTERS.length - 1 ? "border-b" : ""
              }`}
            >
              <div>
                <h3 className="text-[18px] font-bold text-ink leading-snug">
                  {c.title}
                </h3>
                <p className="text-[14px] text-light mt-1">{c.industries}</p>
              </div>
              <p className="text-[15px] text-mid leading-relaxed">
                {c.problemHref ? (
                  <Link
                    href={c.problemHref}
                    className="underline decoration-rule underline-offset-4 transition-colors hover:text-red"
                  >
                    {c.problem}
                  </Link>
                ) : (
                  c.problem
                )}
              </p>
              <p className="text-[15px] text-mid leading-relaxed">{c.delivery}</p>
            </div>
          ))}
        </div>
        <p className="text-[14px] text-light">
          Also starting conversations in Vellore–Ranipet–Ambur (leather) and
          Karur (home textiles).
        </p>
      </section>

      {/* SERVICES */}
      <section className={SECTION}>
        <p className={EYEBROW}>MSME consulting and coaching</p>
        <h2 className={H2}>
          Four things. <span className="text-red">Done properly.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s) => (
            <div key={s.title} className="border-t border-rule pt-4">
              <h3 className="text-[18px] font-bold text-ink leading-snug mb-2">
                {s.href ? (
                  <Link href={s.href} className="transition-colors hover:text-red">
                    {s.title}
                  </Link>
                ) : (
                  s.title
                )}
              </h3>
              <p className="text-[15px] text-mid leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO START */}
      <section id="how-to-start" className={SECTION}>
        <p className={EYEBROW}>How to start</p>
        <h2 className={H2}>
          Start small. <span className="text-red">Decide after you have seen the work.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10">
          {STEPS.map((s) => (
            <div key={s.title} className="border-t border-ink pt-4">
              <p className="text-[13px] text-light mb-2">{s.label}</p>
              <h3 className="text-[18px] font-bold text-ink leading-snug mb-2">
                {s.title}
              </h3>
              <p className="text-[15px] text-mid leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[16px] md:text-[17px] text-mid leading-[1.7]">
          Every programme has a published fixed fee. The aim is a business that
          runs well without us.{" "}
          <Link
            href="/programmes"
            className="text-red underline decoration-rule underline-offset-4"
          >
            See programmes and fees →
          </Link>
        </p>
      </section>

      {/* FAQ */}
      <section className={SECTION}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <div>
            <p className={EYEBROW}>Questions owners ask</p>
            <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink">
              Straight answers,{" "}
              <span className="text-red">before the first call.</span>
            </h2>
          </div>
          <div className="divide-y divide-rule border-y border-rule">
            {FAQS.map((item) => (
              <div key={item.q} className="py-5">
                <h3 className="text-[18px] font-bold text-ink mb-1.5 leading-snug">
                  {item.q}
                </h3>
                <p className="text-[15px] text-mid leading-relaxed">
                  {item.a}
                  {item.link && (
                    <>
                      {" "}
                      <Link
                        href={item.link.href}
                        className="text-red underline decoration-rule underline-offset-4"
                      >
                        {item.link.label}
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED READING */}
      {relatedPosts.length > 0 && (
        <section className={SECTION}>
          <p className={EYEBROW}>Related reading</p>
          <h2 className={H2}>
            Written for MSME owners,{" "}
            <span className="text-red">not for consultants.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-8">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col border-t border-rule py-5"
              >
                <span className="text-[13px] text-light mb-1.5">{post.label}</span>
                <span className="text-[17px] font-bold text-ink leading-snug mb-2 group-hover:text-red">
                  {post.title}
                </span>
                <span className="text-[14px] text-red mt-auto">Read →</span>
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="text-[15px] text-red underline decoration-rule underline-offset-4"
          >
            All articles on the Simpleworks blog →
          </Link>
        </section>
      )}

      {/* CLOSING CTA */}
      <section className={`${SECTION} text-center`}>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 text-ink mb-4">
          Tell us what is stuck.{" "}
          <span className="text-red">We will tell you honestly if we can help.</span>
        </h2>
        <p className="text-[16px] md:text-[18px] text-mid leading-[1.65] mb-7 max-w-[640px] mx-auto">
          Send Premraj a WhatsApp message for an introductory call. No pitch
          deck.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 items-center">
          <a href={WHATSAPP_LINK} data-cta="final-cta" className={BUTTON}>
            WhatsApp Premraj →
          </a>
          <a
            href={PHONE_HREF}
            data-cta="final-cta"
            className="text-[15px] text-light underline decoration-rule underline-offset-4 transition-colors hover:text-red"
          >
            Call 90360 99000
          </a>
          <a
            href={`mailto:${FACTS.email}`}
            data-cta="final-cta"
            className="text-[15px] text-light underline decoration-rule underline-offset-4 transition-colors hover:text-red"
          >
            {FACTS.email}
          </a>
        </div>
      </section>
    </main>
  );
}
