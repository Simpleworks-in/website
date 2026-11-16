import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { faqPageSchema, getFaqs, homeFaqIds } from "@/lib/faqs";
import { whatsappHref } from "@/lib/whatsapp";
import { FACTS } from "../../content/facts";
import {
  CONTACT,
  FAQ_SECTION,
  HERO,
  PROBLEM,
  PROGRAMMES,
  SERVICES,
  STORY,
  WHO,
  WHY,
  type RedHeading,
} from "@/content/home";

export const metadata = {
  title: {
    absolute: "MSME Growth Consultant, Bangalore & India | Simpleworks Consulting",
  },
  description:
    "Business not growing? Premraj Menon of Simpleworks Consulting helps founder-led MSMEs in Bangalore and across India find what's holding growth back.",
  alternates: {
    canonical: "https://www.simpleworks.in",
  },
  openGraph: {
    title: "MSME Growth Consultant, Bangalore & India | Simpleworks Consulting",
    description:
      "Business not growing? Premraj Menon of Simpleworks Consulting helps founder-led MSMEs in Bangalore and across India find what's holding growth back.",
    url: "https://www.simpleworks.in",
    siteName: "Simpleworks Consulting",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSME Growth Consultant, Bangalore & India | Simpleworks Consulting",
    description:
      "Business not growing? Premraj Menon of Simpleworks Consulting helps founder-led MSMEs in Bangalore and across India find what's holding growth back.",
  },
};

// The visible FAQ and the FAQPage JSON-LD come from the same call.
const HOME_FAQS = getFaqs(homeFaqIds);
const faqSchema = faqPageSchema(HOME_FAQS);

// ── Shared styles ──
const SECTION =
  "reveal py-14 md:py-[72px] px-6 md:pr-[60px] md:pl-[132px] border-t-[0.5px] border-rule";
const EYEBROW = "text-eyebrow md:text-eyebrow-lg tracking-wide-9 uppercase text-light mb-4 md:mb-5";
const H2 = "text-[32px] leading-[1.18] md:text-sec-h2 font-bold tracking-tight-1";
const HEADER = "mb-10"; // eyebrow + H2 block to section content: 40px
const BODY = "text-[16px] md:text-[17px] leading-[1.78] text-mid";
const HAIRLINE_ITEM = "border-t-[0.5px] border-rule pt-[22px] pb-[26px]";
const BUTTON =
  "inline-block font-serif text-sm tracking-wide-3 text-red border-[1.5px] border-red px-9 py-[14px] rounded-[1px] bg-transparent cursor-pointer transition-colors hover:bg-red hover:text-white w-fit";
const TEXT_LINK = "text-red hover:underline w-fit";
const ACTION_ROW = "flex flex-wrap items-center gap-x-8 gap-y-4";

function Heading({ heading, id }: { heading: RedHeading; id?: string }) {
  return (
    <h2 id={id} className={H2}>
      {heading.text} <span className="text-red">{heading.red}</span>
    </h2>
  );
}

function SectionHeader({ eyebrow, heading }: { eyebrow: string; heading: RedHeading }) {
  return (
    <div className={HEADER}>
      <p className={EYEBROW}>{eyebrow}</p>
      <Heading heading={heading} />
    </div>
  );
}

function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export default function HomePage() {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "YOUR_FORM_ID";
  const formActionUrl = `https://formspree.io/f/${formspreeId}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO ── */}
      <section className="flex flex-col lg:flex-row lg:min-h-[88vh] relative overflow-hidden">
        {/* Narrow brand column (desktop only) */}
        <div className="hidden lg:flex w-[72px] flex-shrink-0 relative items-start pt-[72px] pl-6">
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-red" />
        </div>

        <div className="flex-1 flex flex-col lg:flex-row items-stretch overflow-hidden">
          <div className="w-full lg:flex-none lg:w-[500px] pt-12 pb-10 px-6 md:pr-12 lg:pt-[72px] lg:pr-10 lg:pb-[72px] lg:pl-14 flex flex-col justify-center">
            <h1 className="mb-5 md:mb-[26px]">
              <span
                className="block text-[12px] md:text-[14px] font-normal uppercase tracking-widest text-light leading-[1.6] mb-6 md:mb-8 opacity-0 animate-fade-up"
                style={{ animationDuration: "0.6s", animationDelay: "0.1s" }}
              >
                {HERO.eyebrow}
              </span>
              <span
                className="block text-[36px] leading-[1.1] md:text-hero-h1 font-bold tracking-tight-1 text-ink max-w-[520px] opacity-0 animate-fade-up"
                style={{ animationDelay: "0.25s" }}
              >
                {HERO.heading.text} <span className="text-red">{HERO.heading.red}</span>
              </span>
            </h1>
            <p
              className="text-[16px] md:text-[18px] italic text-mid leading-[1.65] max-w-[460px] mb-8 md:mb-11 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {HERO.subhead}
            </p>
            <div
              className={`${ACTION_ROW} opacity-0 animate-fade-up`}
              style={{ animationDelay: "0.55s" }}
            >
              <a
                href={whatsappHref()}
                data-cta={HERO.cta.dataCta}
                target="_blank"
                rel="noopener noreferrer"
                className={BUTTON}
              >
                {HERO.cta.label} &nbsp;→
              </a>
              <span className="text-[14px] text-light">{HERO.ctaCaption}</span>
            </div>
          </div>

          <div
            className="flex-1 flex items-center justify-center px-6 pb-10 lg:pt-5 lg:pr-8 lg:pl-5 lg:pb-0 min-w-0 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.65s" }}
          >
            <Image
              src="/hero-illustration.png"
              alt={HERO.imageAlt}
              width={605}
              height={529}
              priority
              className="mix-blend-multiply max-w-[420px] lg:max-w-[605px] max-h-[400px] lg:max-h-[529px] w-auto h-auto block"
            />
          </div>
        </div>
      </section>

      {/* ── 2. SOUND FAMILIAR? ── */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{PROBLEM.eyebrow}</p>
          <Heading heading={PROBLEM.heading} />
          <p className={`${BODY} max-w-[620px] mt-4 md:mt-5`}>{PROBLEM.lead}</p>
        </div>
        <ol
          className="grid gap-x-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}
        >
          {PROBLEM.statements.map((statement, i) => (
            <li key={statement} className={HAIRLINE_ITEM}>
              <span className="block text-[15px] font-bold text-red mb-2 tracking-wide-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="block text-[18px] md:text-[20px] leading-[1.45] text-ink">
                &ldquo;{statement}&rdquo;
              </span>
            </li>
          ))}
        </ol>
        <p className={`${BODY} ${HAIRLINE_ITEM} max-w-[760px] mt-6`}>
          <strong className="font-bold text-ink">{PROBLEM.founderLead}</strong>{" "}
          {PROBLEM.founderBody}
        </p>
        <div className={`${ACTION_ROW} mt-2`}>
          <a
            href={whatsappHref(PROBLEM.cta.whatsappText)}
            data-cta={PROBLEM.cta.dataCta}
            target="_blank"
            rel="noopener noreferrer"
            className={BUTTON}
          >
            {PROBLEM.cta.label} &nbsp;→
          </a>
          <Link href={PROBLEM.link.href} className={TEXT_LINK}>
            {PROBLEM.link.label} &rarr;
          </Link>
        </div>
      </section>

      {/* ── 3. WHO WE WORK WITH ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={WHO.eyebrow} heading={WHO.heading} />
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
          {WHO.qualifiers.map((q) => (
            <div key={q.label} className={HAIRLINE_ITEM}>
              <dt className="text-[11px] md:text-[12px] uppercase tracking-widest text-light mb-2">
                {q.label}
              </dt>
              <dd className="text-[17px] md:text-[18px] font-bold leading-[1.4] text-ink">
                {q.value}
              </dd>
            </div>
          ))}
        </dl>
        <p className={`${BODY} max-w-[720px] mt-2`}>
          {WHO.paraBefore}
          {WHO.hubLinks.map((link, i) => (
            <span key={link.href}>
              {i === WHO.hubLinks.length - 1 ? " or " : i > 0 ? ", " : ""}
              <Link href={link.href} className="text-red underline hover:no-underline">
                {link.label}
              </Link>
            </span>
          ))}
          {WHO.paraAfter}
        </p>
      </section>

      {/* ── 4. WHAT WE DO ── */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{SERVICES.eyebrow}</p>
          <Heading heading={SERVICES.heading} />
          <p className={`${BODY} max-w-body-text mt-4 md:mt-5`}>{SERVICES.intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
          {SERVICES.cards.map((card) => (
            <div key={card.num} className="border-t-[0.5px] border-rule pt-[22px] flex flex-col">
              <p className="text-[15px] font-bold text-red mb-3 tracking-wide-2">{card.num}</p>
              <h3 className="text-[20px] md:text-[22px] font-bold leading-[1.3] text-ink mb-3">
                {card.title}
              </h3>
              <p className="text-[15px] md:text-[16px] text-mid leading-[1.7] mb-5">{card.body}</p>
              <Link href={card.link.href} className={`${TEXT_LINK} mt-auto`}>
                {card.link.label} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. WHY SIMPLEWORKS ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={WHY.eyebrow} heading={WHY.heading} />
        {/* Desktop: portrait with the CTA under it on the left, text on the
            right. Mobile: portrait, text, then the CTA last. */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,300px)_1fr] xl:grid-cols-[minmax(0,360px)_1fr] lg:grid-rows-[auto_1fr] gap-x-14 gap-y-8 items-start">
          <Image
            src="/premraj-menon-msme-growth-consultant.png"
            alt={WHY.portraitAlt}
            width={1024}
            height={1024}
            sizes="(min-width: 468px) 420px, 100vw"
            className="mix-blend-multiply w-full max-w-[420px] h-auto aspect-square"
          />
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.3] text-ink mb-4">
              {WHY.h3}
            </h3>
            <p className={`${BODY} max-w-[680px] mb-2`}>{WHY.lead}</p>
            <dl>
              {WHY.proof.map((row) => (
                <div
                  key={row.figure}
                  className={`${HAIRLINE_ITEM} grid grid-cols-[96px_1fr] md:grid-cols-[120px_1fr] gap-5 md:gap-6 items-baseline`}
                >
                  <dt className="text-[20px] md:text-[24px] font-bold leading-[1.15] text-ink">
                    {row.figure}
                  </dt>
                  <dd className="text-[15px] md:text-[16px] leading-[1.65] text-mid">{row.text}</dd>
                </div>
              ))}
            </dl>
            <p className="text-[15px] text-light leading-[1.6] border-t-[0.5px] border-rule pt-[22px]">
              {WHY.credentials}
            </p>
            <div className="flex flex-col gap-2 mt-4">
              {WHY.links.map((link) => (
                <Link key={link.href} href={link.href} className={TEXT_LINK}>
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </div>
          <a
            href={whatsappHref(WHY.cta.whatsappText)}
            data-cta={WHY.cta.dataCta}
            target="_blank"
            rel="noopener noreferrer"
            className={`${BUTTON} lg:col-start-1 lg:row-start-2`}
          >
            {WHY.cta.label} &nbsp;→
          </a>
        </div>
      </section>

      {/* ── 6. CLIENT STORY ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={STORY.eyebrow} heading={STORY.heading} />
        {/* Pull-quote headline across the top, then the story in three
            columns that read left to right: problem → action → result. */}
        <div className="border-l-2 border-red pl-6 max-w-[760px] mb-6">
          <p className="text-[11px] md:text-[12px] uppercase tracking-widest text-light leading-[1.6] mb-4">
            {STORY.caption}
          </p>
          <h3 className="text-[24px] md:text-[30px] font-bold leading-[1.25] text-ink mb-3">
            {STORY.title}
          </h3>
          <p className="text-[14px] text-light">{STORY.note}</p>
        </div>
        <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
          {STORY.rows.map((row, i) => (
            <div
              key={row.label}
              className={`${HAIRLINE_ITEM} ${row.emphasis ? "md:border-t-2 md:border-ink" : ""}`}
            >
              <dt className="flex items-baseline gap-3 text-[11px] md:text-[12px] uppercase tracking-widest text-light mb-3">
                <span className="text-[15px] font-bold text-red tracking-wide-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {row.label}
              </dt>
              <dd
                className={`text-[16px] md:text-[17px] leading-[1.7] ${
                  row.emphasis ? "text-ink font-bold" : "text-mid"
                }`}
              >
                {row.text}
              </dd>
            </div>
          ))}
        </dl>
        <Link href={STORY.link.href} className={`${TEXT_LINK} inline-block mt-4`}>
          {STORY.link.label} &rarr;
        </Link>
      </section>

      {/* ── 7. HOW TO START ── */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{PROGRAMMES.eyebrow}</p>
          <Heading heading={PROGRAMMES.heading} />
          <p className={`${BODY} max-w-[620px] mt-4 md:mt-5`}>{PROGRAMMES.intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-10">
          {PROGRAMMES.cards.map((card) => (
            <div key={card.name} className="border-t-2 border-ink pt-6 flex flex-col">
              <p className="text-[11px] md:text-[12px] uppercase tracking-widest text-light mb-3">
                {card.mode}
              </p>
              <h3 className="text-[22px] md:text-[24px] font-bold leading-[1.2] text-ink mb-4">
                Simple <span className="text-red">{card.name}</span>
              </h3>
              <p className="text-[28px] font-bold leading-none text-ink [font-variant-numeric:tabular-nums]">
                {card.price}
              </p>
              <p className="text-[14px] text-light mt-2 mb-4">{card.note}</p>
              <p className="text-[15px] md:text-[16px] text-mid leading-[1.7] mb-5">{card.desc}</p>
              <Link href={card.link.href} className={`${TEXT_LINK} mt-auto`}>
                {card.link.label} &rarr;
              </Link>
            </div>
          ))}
        </div>
        <div className={`${ACTION_ROW} border-t-[0.5px] border-rule mt-8 pt-6`}>
          <a href={PROGRAMMES.cta.href} data-cta={PROGRAMMES.cta.dataCta} className={BUTTON}>
            {PROGRAMMES.cta.label} &nbsp;→
          </a>
          <p className="text-[15px] text-light leading-[1.6]">
            {PROGRAMMES.customText}{" "}
            <Link
              href={PROGRAMMES.compareLink.href}
              className="font-bold text-ink hover:text-red transition-colors"
            >
              {PROGRAMMES.compareLink.label}
            </Link>
          </p>
        </div>
      </section>

      {/* ── 8. QUESTIONS ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={FAQ_SECTION.eyebrow} heading={FAQ_SECTION.heading} />
        <div className="max-w-[900px] border-b-[0.5px] border-rule">
          {HOME_FAQS.map((item, i) => (
            <details
              key={item.id}
              open={i === 0}
              className="faq-item border-t-[0.5px] border-rule"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-[22px] [&::-webkit-details-marker]:hidden">
                <h3 className="text-[17px] md:text-[19px] font-bold leading-[1.4] text-ink">
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="faq-pm flex-shrink-0 text-[26px] leading-none text-red transition-transform duration-200"
                >
                  +
                </span>
              </summary>
              <div
                className={`${BODY} pb-[26px] max-w-[760px] [&_p]:mb-3 [&_p:last-child]:mb-0 [&_a]:text-red [&_a]:underline hover:[&_a]:no-underline`}
                dangerouslySetInnerHTML={{
                  __html: item.aHtml ?? `<p>${escapeHtml(item.a)}</p>`,
                }}
              />
            </details>
          ))}
        </div>
        <Link href={FAQ_SECTION.allLink.href} className={`${TEXT_LINK} inline-block mt-8`}>
          {FAQ_SECTION.allLink.label} &rarr;
        </Link>
      </section>

      {/* ── 9. CONTACT US ── */}
      <section
        id="contact"
        className={`${SECTION} grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start`}
      >
        <div>
          <p className={EYEBROW}>{CONTACT.eyebrow}</p>
          <Heading heading={CONTACT.heading} />
          <p className={`${BODY} max-w-body-text mt-4 md:mt-5`}>{CONTACT.body}</p>
          <address className="not-italic mt-8 flex flex-col gap-2 text-[15px] leading-[1.6] text-mid">
            <a
              href={`mailto:${FACTS.email}`}
              data-cta="contact-email"
              className="w-fit text-mid transition-colors hover:text-red"
            >
              {FACTS.email}
            </a>
            <a
              href={`tel:${FACTS.phone.replace(/\s/g, "")}`}
              className="w-fit text-mid transition-colors hover:text-red"
            >
              {FACTS.phone}
            </a>
            <span>{CONTACT.address}</span>
          </address>
          <div className={`${ACTION_ROW} mt-8`}>
            <a
              href={CONTACT.calendar.href}
              data-cta={CONTACT.calendar.dataCta}
              target="_blank"
              rel="noopener noreferrer"
              className={BUTTON}
            >
              {CONTACT.calendar.label} &nbsp;→
            </a>
            <a
              href={whatsappHref()}
              data-cta={CONTACT.whatsapp.dataCta}
              target="_blank"
              rel="noopener noreferrer"
              className={TEXT_LINK}
            >
              {CONTACT.whatsapp.label}
            </a>
          </div>
        </div>

        <ContactForm
          formActionUrl={formActionUrl}
          whatsappHref={whatsappHref()}
          source="home"
          linkLocation="home-contact"
        />
      </section>

      <Reveal />
    </>
  );
}
