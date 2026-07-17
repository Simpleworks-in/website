import Image from "next/image";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: {
    absolute:
      "Business Consultant in Bengaluru | MSME Strategy & Growth | Simpleworks",
  },
  description:
    "Simpleworks is a management consultant in India for MSMEs — based in Bengaluru. MSME consultant India for business strategy, go-to-market planning & OKR consulting. Led by Prem Menon — 39 years of experience. First call free.",
  alternates: {
    canonical: "https://simpleworks.in",
  },
};

const TAGLINE_ITEMS = [
  "Business Strategy",
  "Go-to-Market Planning",
  "Execution & OKRs",
  "39 Years Experience",
  "Bengaluru, India",
];

const SERVICES = [
  {
    num: "01",
    title: "Business Strategy Consulting",
    desc: "Clarity on where your business should go — and why. We work with leadership teams to diagnose the real problem and build a plan the organisation can follow.",
  },
  {
    num: "02",
    title: "Go-to-Market Strategy",
    desc: "The right customers. The right message. The right time. Our go-to-market strategy India engagements help MSMEs define their segment, sharpen their message, and choose channels that work.",
  },
  {
    num: "03",
    title: "Execution & OKR Consulting",
    desc: "Turning decisions into progress. As an OKR consultant for growing Indian businesses, we build the goals, accountability structures, and review rhythms that turn plans into outcomes — simple enough to actually use.",
  },
];

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://simpleworks.in/#localbusiness",
      name: "Simpleworks Consulting",
      url: "https://simpleworks.in",
      logo: "https://simpleworks.in/simpleworks-logo.svg",
      image: "https://simpleworks.in/hero-illustration.png",
      description:
        "Independent management consulting firm in Bengaluru helping Indian MSMEs scale with business strategy, go-to-market planning and OKR consulting.",
      telephone: "",
      email: "pm@simpleworks.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "12.9716",
        longitude: "77.5946",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      priceRange: "₹₹₹",
      openingHours: "Mo-Fr 09:00-18:00",
      founder: { "@id": "https://simpleworks.in/#prem-menon" },
      sameAs: ["https://www.linkedin.com/company/simpleworks-consulting"],
    },
    {
      "@type": "Person",
      "@id": "https://simpleworks.in/#prem-menon",
      name: "Prem Menon",
      jobTitle: "Founder & Management Consultant",
      worksFor: { "@id": "https://simpleworks.in/#localbusiness" },
      description:
        "Senior management consultant with 39 years of experience across Consumer Durables, Tyres, Telecom, and IT/SaaS in India. Founder of Simpleworks Consulting, Bengaluru.",
      url: "https://simpleworks.in/about",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://simpleworks.in/#professionalservice",
      name: "Simpleworks Consulting",
      url: "https://simpleworks.in",
      description:
        "Management consulting services for Indian MSMEs — business strategy, go-to-market planning, OKR consulting, and business turnaround. Based in Bengaluru.",
      provider: { "@id": "https://simpleworks.in/#prem-menon" },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Consulting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Strategy Consulting",
              description:
                "Clarity on where your business should go. We diagnose the real problem and build a plan the organisation can follow.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Go-to-Market Strategy",
              description:
                "Define your segment, sharpen your message, and choose channels that work for Indian MSMEs.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Execution & OKR Consulting",
              description:
                "Build the goals, accountability structures, and review rhythms that turn plans into outcomes.",
            },
          },
        ],
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      {/* ── HERO ── */}
      <section className="flex flex-col lg:flex-row lg:min-h-[88vh] relative overflow-hidden">
        {/* Narrow brand column (desktop only) */}
        <div className="hidden lg:flex w-[72px] flex-shrink-0 relative items-start pt-[72px] pl-6">
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-red" />
        </div>

        {/* Right zone */}
        <div className="flex-1 flex flex-col lg:flex-row items-stretch overflow-hidden">
          {/* Text */}
          <div className="w-full lg:flex-none lg:w-[470px] pt-12 pb-10 px-6 lg:pt-[72px] lg:pr-10 lg:pb-[72px] lg:pl-14 flex flex-col justify-center">
            <p
              className="text-eyebrow-lg tracking-wide-8 uppercase text-light mb-6 md:mb-8 opacity-0 animate-fade-up"
              style={{ animationDuration: "0.6s", animationDelay: "0.1s" }}
            >
              Business Consulting for Indian MSME - Bengaluru
            </p>
            <h1
              className="text-[36px] leading-[1.1] md:text-hero-h1 font-bold tracking-tight-1 max-w-[520px] mb-5 md:mb-[26px] opacity-0 animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              Your business has more in it than your current{" "}
              <span className="text-red">results</span> show.
            </h1>
            <p
              className="text-[16px] md:text-[18px] italic text-mid leading-[1.65] max-w-[440px] mb-8 md:mb-11 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              We work with Indian MSME and Startup businesses that are stuck on growth, short on clarity, and unsure of the next move. We help you navigate through it.
            </p>
            <a
              href="#contact"
              className="inline-block font-serif text-sm tracking-wide-3 text-red border-[1.5px] border-red px-9 py-[14px] rounded-[1px] bg-transparent cursor-pointer transition-colors hover:bg-red hover:text-white w-fit opacity-0 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              Let&apos;s Talk &nbsp;→
            </a>
          </div>

          {/* Illustration */}
          <div
            className="flex-1 flex items-center justify-center px-6 pb-10 lg:pt-5 lg:pr-8 lg:pl-5 lg:pb-0 min-w-0 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.65s" }}
          >
            <Image
              src="/hero-illustration.png"
              alt="Independent MSME business consultant Bengaluru — Simpleworks Consulting"
              width={605}
              height={529}
              priority
              className="mix-blend-multiply max-w-[420px] lg:max-w-[605px] max-h-[400px] lg:max-h-[529px] w-auto h-auto block"
            />
          </div>
        </div>
      </section>

      {/* ── TAGLINE STRIP ── */}
      <div className="reveal border-t-[0.5px] border-b-[0.5px] border-rule py-4 md:py-[18px] px-6 md:px-[132px] flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-12 md:flex-nowrap md:overflow-hidden">
        {TAGLINE_ITEMS.map((text) => (
          <div key={text} className="flex items-center gap-[14px] flex-shrink-0">
            <span className="w-[5px] h-[5px] rounded-full bg-red flex-shrink-0" />
            <span className="text-xs tracking-wide-4 uppercase text-light whitespace-nowrap">
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* ── SERVICES ── */}
      <section className="reveal py-14 md:pt-20 md:pb-20 px-6 md:pr-[60px] md:pl-[132px] border-t-[0.5px] border-rule">
        <div className="mb-10 md:mb-14">
          <p className="text-eyebrow tracking-wide-9 uppercase text-light mb-4 md:mb-5">
            What We Do
          </p>
          <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 mb-4 md:mb-5">
            Strategy. Growth.
            <br />
            Execution. <span className="text-red">Nothing more.</span>
          </h2>
          <p className="text-[16px] md:text-[17px] leading-[1.78] text-mid max-w-body-text">
            We are an independent management consulting firm in Bengaluru working with founders and leadership teams across India. We don&apos;t hand over a report and walk away — we stay until the plan is moving.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[2px]">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="pt-6 md:pt-8 pr-0 md:pr-7 pb-6 md:pb-8 pl-5 md:pl-6 border-l-2 border-rule transition-colors duration-[250ms] hover:border-l-red"
            >
              <p className="text-[22px] font-bold text-red mb-[14px] tracking-wide-2">
                {s.num}
              </p>
              <h3 className="text-[18px] font-bold leading-[1.3] mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-mid leading-[1.7]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO WE WORK WITH ── */}
      <section className="reveal py-14 md:py-20 px-6 md:px-[60px] border-t-[0.5px] border-rule md:grid md:grid-cols-[72px_1fr] md:items-start">
        <div className="hidden md:block relative pt-[6px]">
          <span className="absolute right-0 top-0 w-px h-full bg-rule" />
        </div>
        <div className="md:pl-14">
          <p className="text-eyebrow tracking-wide-9 uppercase text-light mb-4 md:mb-5">
            Who We Work With
          </p>
          <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 mb-4 md:mb-5">
            We work with businesses
            <br />
            at <span className="text-red">turning points.</span>
          </h2>
          <p className="text-[16px] md:text-[17px] leading-[1.78] text-mid max-w-body-text mb-5">
            Our clients are Indian MSMEs, family business owners, and founder-led businesses — typically in manufacturing, consumer goods, retail, distribution, or technology. If you are looking for a business consultant for manufacturing companies in India, this is where we spend most of our time. They are established businesses, often 10 to 30 years old, that have hit a ceiling and need a business growth consultant who understands the ground reality of Indian business.
          </p>
          <p className="text-[16px] md:text-[17px] leading-[1.78] text-mid max-w-body-text">
            Some are navigating a business turnaround. Some are entering a new market. Some are profitable but stuck — growing in revenue, shrinking in margin. All of them need simple answers, not complex frameworks.
          </p>
        </div>
      </section>

      {/* ── AUTHORITY ── */}
      <section className="reveal py-14 md:pt-20 md:pb-20 px-6 md:pr-[60px] md:pl-[132px] border-t-[0.5px] border-rule flex flex-col md:flex-row items-start gap-6 md:gap-[60px]">
        <div className="flex-shrink-0 relative leading-none">
          <span className="text-[80px] md:text-auth-big font-bold text-rule tracking-tight-3 leading-none block">
            39
          </span>
          <span className="absolute bottom-[10px] md:bottom-[18px] left-1 text-[13px] md:text-[16px] tracking-[0.12em] uppercase text-red font-bold">
            Years
          </span>
        </div>
        <div className="md:pt-[14px]">
          <p className="text-eyebrow tracking-wide-9 uppercase text-light mb-4 md:mb-5">
            Why Simpleworks
          </p>
          <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 mb-4 md:mb-5">
            39 years of experience.
            <br />
            One point of contact.
            <br />
            <span className="text-red">No unnecessary complexity.</span>
          </h2>
          <p className="text-[16px] md:text-[17px] leading-[1.78] text-mid max-w-body-text mb-5">
            Simpleworks was founded by Prem Menon, a management consultant with nearly four decades of experience across Consumer Durables, Tyres, Telecom, and IT/SaaS — in companies ranging from large corporates to early-growth ventures.
          </p>
          <p className="text-[16px] md:text-[17px] leading-[1.78] text-mid max-w-body-text">
            We are an independent consulting firm in Bengaluru by deliberate choice. Every engagement is led by Prem Menon directly — not handed to a junior team.
          </p>
          <p className="text-[16px] md:text-[17px] leading-[1.78] text-mid max-w-body-text mt-4">
            Our advice is practical, plain-spoken, and built to be understood and acted on — not buried in thick presentations. We work alongside you through execution, not just strategy, staying engaged until the plan is actually moving on the ground.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="reveal py-14 md:pt-20 md:pb-20 px-6 md:pr-[60px] md:pl-[132px] border-t-[0.5px] border-rule">
        <p className="text-eyebrow tracking-wide-9 uppercase text-light mb-4 md:mb-5">
          Common Questions
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 mb-4 md:mb-5">
          Frequently Asked <span className="text-red">Questions</span>
        </h2>
        <FAQAccordion />
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="reveal py-14 md:pt-[88px] md:pb-[88px] px-6 md:pr-[60px] md:pl-[132px] border-t-[0.5px] border-rule grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start"
      >
        <div>
          <p className="text-eyebrow tracking-wide-9 uppercase text-light mb-4 md:mb-5">
            Contact Us
          </p>
          <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1 mb-4 md:mb-5">
            Let&apos;s have an <span className="text-red">honest conversation</span> about your business.
          </h2>
          <p className="text-[16px] md:text-[17px] leading-[1.78] text-mid max-w-body-text">
            The first conversation is free. Tell us what you&apos;re working on — we&apos;ll tell you honestly whether we can help and what that would look like.
          </p>
          <div className="mt-9 flex flex-col gap-[14px]">
            <div className="flex gap-4 items-start">
              <span className="text-[10px] tracking-[0.12em] uppercase text-light min-w-[68px] pt-0.5 flex-shrink-0">
                Email
              </span>
              <span className="text-[15px] text-mid leading-[1.5]">
                <a
                  href="mailto:pm@simpleworks.in"
                  className="text-mid transition-colors hover:text-red"
                >
                  pm@simpleworks.in
                </a>
              </span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-[10px] tracking-[0.12em] uppercase text-light min-w-[68px] pt-0.5 flex-shrink-0">
                Location
              </span>
              <span className="text-[15px] text-mid leading-[1.5]">
                Bengaluru, Karnataka, India
              </span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-[10px] tracking-[0.12em] uppercase text-light min-w-[68px] pt-0.5 flex-shrink-0">
                Response
              </span>
              <span className="text-[15px] text-mid leading-[1.5]">
                Within one business day
              </span>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-[10px] tracking-[0.12em] uppercase text-light min-w-[68px] pt-0.5 flex-shrink-0">
                Book
              </span>
              <span className="text-[15px] text-mid leading-[1.5]">
                <a
                  href="https://calendar.app.google/rVCgwR2PUwPorN658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mid transition-colors hover:text-red"
                >
                  Book an appointment
                </a>
              </span>
            </div>
          </div>
        </div>

        <form action="/contact" method="get" className="flex flex-col gap-[18px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor="fname"
                className="text-[10px] tracking-wide-7 uppercase text-light"
              >
                Your Name
              </label>
              <input
                type="text"
                id="fname"
                name="name"
                placeholder="Rajan Mehta"
                className="font-serif text-[15px] text-ink bg-bg border-[0.5px] border-rule rounded-[1px] px-[14px] py-3 outline-none transition-colors focus:border-ink w-full"
              />
            </div>
            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor="femail"
                className="text-[10px] tracking-wide-7 uppercase text-light"
              >
                Email Address
              </label>
              <input
                type="email"
                id="femail"
                name="email"
                placeholder="rajan@company.in"
                className="font-serif text-[15px] text-ink bg-bg border-[0.5px] border-rule rounded-[1px] px-[14px] py-3 outline-none transition-colors focus:border-ink w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[7px]">
            <label
              htmlFor="fcompany"
              className="text-[10px] tracking-wide-7 uppercase text-light"
            >
              Company / Business Name
            </label>
            <input
              type="text"
              id="fcompany"
              name="company"
              placeholder="Mehta Industries Pvt. Ltd."
              className="font-serif text-[15px] text-ink bg-bg border-[0.5px] border-rule rounded-[1px] px-[14px] py-3 outline-none transition-colors focus:border-ink w-full"
            />
          </div>
          <button
            type="submit"
            className="inline-block font-serif text-sm tracking-wide-3 text-red border-[1.5px] border-red px-9 py-[14px] rounded-[1px] bg-transparent cursor-pointer transition-colors hover:bg-red hover:text-white w-fit mt-1"
          >
            Send Message &nbsp;→
          </button>
        </form>
      </section>

      <Reveal />
    </>
  );
}
