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
  HELP,
  HERO,
  PROGRAMMES,
  STORIES,
  WHO,
  WHY,
  type RedHeading,
} from "@/content/home";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import StoryArticle from "@/components/StoryArticle";

export const metadata = {
  title: {
    absolute: "Business Consultant in Bangalore & India | Simpleworks Consulting",
  },
  description:
    "Growth stalled and every decision still lands on your desk? Premraj Menon is a business growth consultant for MSME owners in Bangalore and across India.",
  alternates: {
    canonical: "https://www.simpleworks.in",
  },
  openGraph: {
    title: "Business Consultant in Bangalore & India | Simpleworks Consulting",
    description:
      "Growth stalled and every decision still lands on your desk? Premraj Menon is a business growth consultant for MSME owners in Bangalore and across India.",
    url: "https://www.simpleworks.in",
    siteName: "Simpleworks Consulting",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Consultant in Bangalore & India | Simpleworks Consulting",
    description:
      "Growth stalled and every decision still lands on your desk? Premraj Menon is a business growth consultant for MSME owners in Bangalore and across India.",
  },
};

// The visible FAQ and the FAQPage JSON-LD come from the same call.
const HOME_FAQS = getFaqs(homeFaqIds);
const faqSchema = faqPageSchema(HOME_FAQS);

// ── Shared styles ──
const SECTION =
  "reveal py-14 md:py-[72px] px-6 md:pr-[60px] md:pl-[132px] border-t-[0.5px] border-rule";
// Eyebrows, column labels, delivery-mode labels, captions: 11px / 13px.
const LABEL = "text-[11px] md:text-[13px] uppercase tracking-widest text-light leading-[1.6]";
const EYEBROW = `${LABEL} mb-4 md:mb-5`;
// Every H2 is 28px / 36px; every H3 20px / 24px (FAQ questions excepted).
const H2 = "text-[28px] md:text-[36px] leading-[1.18] font-bold tracking-tight-1";
const H3 = "text-[20px] md:text-[24px] font-bold leading-[1.3] text-ink";
const HEADER = "mb-10"; // eyebrow + H2 block to section content: 40px
const BODY = "text-[16px] md:text-[17px] leading-[1.78] text-mid";
const HAIRLINE_ITEM = "border-t-[0.5px] border-rule pt-[22px] pb-[26px]";
const BUTTON =
  "inline-flex items-center font-serif text-sm tracking-wide-3 text-red border-[1.5px] border-red px-9 py-[14px] rounded-[1px] bg-transparent cursor-pointer transition-colors hover:bg-red hover:text-white w-fit";
const TEXT_LINK = "text-red hover:underline w-fit";
const ACTION_ROW = "flex flex-wrap items-center gap-x-8 gap-y-4";
// "Is this you?" rows: number | the owner's problem | how we help.
const HELP_GRID = "lg:grid lg:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-12";

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
      {/* Text left, image right from 900px; the image top lines up with the
          first line of the H1 and fills its column. One column below 900px. */}
      <section className="flex relative overflow-hidden">
        {/* Narrow brand column (desktop only) */}
        <div className="hidden lg:flex w-[72px] flex-shrink-0 relative">
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-red" />
        </div>

        <div className="flex-1 min-w-0 grid grid-cols-1 min-[900px]:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-x-14 gap-y-10 items-start px-6 pt-12 pb-10 md:px-12 lg:pt-[72px] lg:pb-[72px] lg:pl-14 lg:pr-[60px]">
          <div>
            <h1 className="mb-5 md:mb-[26px]">
              <span
                className="block text-[14px] font-bold uppercase tracking-widest text-light leading-[1.6] mb-6 md:mb-8 opacity-0 animate-fade-up"
                style={{ animationDuration: "0.6s", animationDelay: "0.1s" }}
              >
                {HERO.eyebrow}
              </span>
              <span
                className="block text-[40px] md:text-[56px] leading-[1.1] font-bold tracking-tight-1 text-ink opacity-0 animate-fade-up"
                style={{ animationDelay: "0.25s" }}
              >
                {HERO.heading.text} <span className="text-red">{HERO.heading.red}</span>
              </span>
            </h1>
            <p
              className="text-[16px] md:text-[18px] italic text-mid leading-[1.65] max-w-[560px] mb-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {HERO.subhead}
            </p>
            <p
              className={`${BODY} max-w-[560px] mb-4 opacity-0 animate-fade-up`}
              style={{ animationDelay: "0.45s" }}
            >
              {HERO.body}
            </p>
            <p
              className={`${BODY} max-w-[560px] mb-8 md:mb-11 opacity-0 animate-fade-up`}
              style={{ animationDelay: "0.5s" }}
            >
              {HERO.line}
            </p>
            <div
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              <a
                href={whatsappHref()}
                data-cta={HERO.cta.dataCta}
                target="_blank"
                rel="noopener noreferrer"
                className={BUTTON}
              >
                <WhatsAppIcon size={20} />
                {HERO.cta.label}
              </a>
              <p className={`${LABEL} mt-5`}>{HERO.tags}</p>
            </div>
          </div>

          <div
            className="min-w-0 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.65s" }}
          >
            <Image
              src="/hero-illustration.png"
              alt={HERO.imageAlt}
              width={605}
              height={529}
              priority
              sizes="(min-width: 900px) 45vw, 100vw"
              className="mix-blend-multiply w-full h-auto block"
            />
          </div>
        </div>
      </section>

      {/* ── 2. IS THIS YOU? ── */}
      <section id={HELP.id} className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{HELP.eyebrow}</p>
          <Heading heading={HELP.heading} />
          <p className={`${BODY} max-w-[620px] mt-4 md:mt-5`}>{HELP.lead}</p>
        </div>
        {/* Column labels: desktop only; on mobile each row stacks. */}
        <div
          aria-hidden="true"
          className={`hidden ${HELP_GRID} pb-4 ${LABEL}`}
        >
          <span />
          <span>{HELP.columns.problem}</span>
          <span>{HELP.columns.help}</span>
        </div>
        <ol>
          {HELP.rows.map((row, i) => (
            <li
              key={row.label}
              className={`${HELP_GRID} grid grid-cols-1 gap-y-3 border-t-[0.5px] border-rule py-7 md:py-8`}
            >
              <span className="text-[15px] font-bold leading-[1.6] text-red tracking-wide-2 [font-variant-numeric:tabular-nums]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className={`${LABEL} mb-2`}>{row.label}</p>
                <h3 className={H3}>
                  &ldquo;{row.problem}&rdquo;
                </h3>
              </div>
              <div>
                <p className={`lg:hidden ${LABEL} mb-2`}>
                  {HELP.columns.help}
                </p>
                <p className="text-[18px] leading-[1.55] text-ink mb-3">
                  {row.promise}
                </p>
                <Link href={row.link.href} className={TEXT_LINK}>
                  {row.link.label} &rarr;
                </Link>
              </div>
            </li>
          ))}
        </ol>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-x-12 gap-y-6 border-t-[0.5px] border-rule pt-8">
          <p className={`${BODY} max-w-[680px]`}>
            <strong className="font-bold text-ink">&ldquo;{HELP.quoteLead}</strong>{" "}
            {HELP.quoteBody}&rdquo;{" "}
            <span className="text-light whitespace-nowrap">&mdash; {HELP.quoteBy}</span>
          </p>
          <a
            href={whatsappHref(HELP.cta.whatsappText)}
            data-cta={HELP.cta.dataCta}
            target="_blank"
            rel="noopener noreferrer"
            className={`${BUTTON} shrink-0`}
          >
            <WhatsAppIcon size={20} />
            {HELP.cta.label} &nbsp;→
          </a>
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

      {/* ── 4. WHY SIMPLEWORKS ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={WHY.eyebrow} heading={WHY.heading} />
        {/* Four points, item 1 first: four across, two on tablet, one on mobile. */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-8 gap-y-10 mb-14">
          {WHY.points.map((point) => (
            <div key={point.title} className="border-l-2 border-red pl-5">
              <p className="text-[18px] font-bold leading-[1.35] text-ink mb-2">{point.title}</p>
              <p className={BODY}>{point.text}</p>
            </div>
          ))}
        </div>
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
            <h3 className={`${H3} mb-4`}>{WHY.h3}</h3>
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
            <WhatsAppIcon size={20} />
            {WHY.cta.label} &nbsp;→
          </a>
        </div>
      </section>

      {/* ── 5. CLIENT STORIES ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={STORIES.eyebrow} heading={STORIES.heading} />
        {STORIES.items.map((story, s) => (
          <StoryArticle
            key={story.title}
            story={story}
            className={s > 0 ? "border-t-[0.5px] border-rule mt-12 pt-12" : ""}
          />
        ))}
        <p className="border-t-[0.5px] border-rule mt-12 pt-8 text-[17px] leading-[1.7] text-ink max-w-[760px]">
          &ldquo;{STORIES.trust}&rdquo;{" "}
          <span className="text-light whitespace-nowrap">&mdash; {STORIES.trustBy}</span>
        </p>
      </section>

      {/* ── 6. HOW TO START ── */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{PROGRAMMES.eyebrow}</p>
          <Heading heading={PROGRAMMES.heading} />
          <p className={`${BODY} max-w-[620px] mt-4 md:mt-5`}>{PROGRAMMES.intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-10">
          {PROGRAMMES.cards.map((card) => (
            <div key={card.name} className="border-t-2 border-ink pt-6 flex flex-col">
              <p className={`${LABEL} mb-3`}>{card.mode}</p>
              <h3 className={`${H3} mb-3`}>
                Simple <span className="text-red">{card.name}</span>
              </h3>
              <p className="text-[17px] leading-[1.6] text-ink mb-5">{card.forWho}</p>
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
          <a
            href={whatsappHref(PROGRAMMES.cta.whatsappText)}
            data-cta={PROGRAMMES.cta.dataCta}
            target="_blank"
            rel="noopener noreferrer"
            className={BUTTON}
          >
            <WhatsAppIcon size={20} />
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

      {/* ── 7. QUESTIONS ── */}
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
                <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.4] text-ink">
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

      {/* ── 8. CONTACT US ── */}
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
              className={`${TEXT_LINK} inline-flex items-center`}
            >
              <WhatsAppIcon size={18} />
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
