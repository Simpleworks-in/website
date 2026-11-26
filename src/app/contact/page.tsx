import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { FACTS } from "../../../content/facts";

const DESCRIPTION =
  "Talk to Premraj Menon about what's holding your business back. WhatsApp, book a 15-minute call, or send a note. Replies within one business day.";

export const metadata = {
  title: {
    absolute: "Talk to an MSME Growth Consultant | Simpleworks Consulting",
  },
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.simpleworks.in/contact",
  },
  openGraph: {
    title: "Talk to an MSME Growth Consultant | Simpleworks Consulting",
    description: DESCRIPTION,
    url: "https://www.simpleworks.in/contact",
    type: "website",
  },
};

const WHATSAPP_HREF = `https://wa.me/${FACTS.whatsappNumber}?text=${encodeURIComponent(
  "Hi Premraj, I run a [business] in [city], about ₹__ Cr revenue and __ people. What's stuck: __"
)}`;
const CALENDAR_HREF = "https://calendar.app.google/rVCgwR2PUwPorN658";

const eyebrow =
  "mb-4 text-[11px] font-light uppercase tracking-widest text-light md:text-[13px]";
const h2 =
  "mb-8 text-[28px] font-bold leading-[1.18] tracking-tight text-ink md:text-[36px]";
const h3 = "text-[20px] font-bold leading-[1.3] text-ink md:text-[24px]";
const body = "text-[16px] leading-[1.78] text-mid md:text-[17px]";
const section = "border-t border-rule px-6 py-14 md:px-14 md:py-20";
const btn =
  "inline-block whitespace-nowrap rounded-[1px] border border-red bg-transparent px-9 py-[14px] font-serif text-[14px] text-red transition-colors hover:bg-red hover:text-white";

const WAYS = [
  {
    label: "Fastest · usually same day",
    title: "Message on WhatsApp",
    text: "Tell Premraj what you run and what's stuck. A message is pre-filled to get you started.",
    button: "Open WhatsApp",
    href: WHATSAPP_HREF,
    cta: "contact-whatsapp",
    external: true,
    note: "",
  },
  {
    label: "Pick a time · 15 minutes",
    title: "Book a call",
    text: "Choose a slot for a Google Meet call. Bring one question about your business.",
    button: "Choose a time",
    href: CALENDAR_HREF,
    cta: "contact-calendar",
    external: true,
    note: "Online, from anywhere in India",
  },
  {
    label: "Reply within one business day",
    title: "Send a note",
    text: "Prefer to write it down? Use the form below. It takes about two minutes.",
    button: "Go to the form",
    href: "#form",
    cta: "contact-form-jump",
    external: false,
    note: FACTS.email,
  },
];

const ICON = "h-5 w-5 shrink-0";
const HERO_OPTIONS = [
  {
    label: "Call",
    value: FACTS.phone,
    href: "tel:+919036099000",
    cta: "contact-hero-phone",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: FACTS.email,
    href: `mailto:${FACTS.email}`,
    cta: "contact-hero-email",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m3 6 9 7 9-7" />
      </svg>
    ),
  },
  {
    label: "Book a 15-minute call",
    value: "Choose a time on Google Calendar",
    href: CALENDAR_HREF,
    cta: "contact-hero-calendar",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="5" width="18" height="16" rx="1" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    ),
  },
];

const DETAILS = [
  { label: "Email", value: FACTS.email, href: `mailto:${FACTS.email}` },
  { label: "Phone", value: FACTS.phone, href: "tel:+919036099000" },
];

export default function ContactPage() {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "YOUR_FORM_ID";
  const formActionUrl = `https://formspree.io/f/${formspreeId}`;

  return (
    <main>
      {/* 1. Hero: the H1 and the image start level; WhatsApp is the main
          button, and call, email and a booked call sit in a row below both. */}
      <section className="px-6 pb-12 pt-10 md:px-14 md:pb-16 md:pt-14">
        <p className={eyebrow}>Contact</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[48fr_52fr] md:items-start md:gap-12">
          <div className="order-2 md:order-none">
            <h1 className="mb-6 text-[40px] font-bold leading-[1.1] tracking-tight text-ink text-balance md:text-[56px]">
              Something feels stuck.{" "}
              <span className="text-red">Let&rsquo;s find out what.</span>
            </h1>
            <p className="mb-8 max-w-[560px] text-[16px] italic leading-[1.65] text-mid md:text-[18px]">
              Tell Premraj what is stuck in your business, in whichever way
              suits you. He reads every message himself. No pitch, no pressure.
            </p>
            <a
              href={WHATSAPP_HREF}
              data-cta="contact-hero-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className={btn}
            >
              <WhatsAppIcon />
              WhatsApp Premraj
            </a>
            <p className="mt-3 text-[14px] text-light">
              Fastest. Premraj usually replies the same day.
            </p>
          </div>
          <div className="order-1 md:order-none">
            <Image
              src="/images/contact/contact-owner-reaching-out.webp"
              alt="Illustration of a business owner at his desk choosing how to get in touch: WhatsApp, email, phone or a booked call"
              width={1152}
              height={860}
              sizes="(min-width: 768px) 52vw, 100vw"
              className="h-auto w-full"
              priority
              fetchPriority="high"
            />
          </div>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-x-8 md:mt-12 md:grid-cols-3">
          {HERO_OPTIONS.map((o) => (
            <li key={o.label} className="border-t border-ink">
              <a
                href={o.href}
                data-cta={o.cta}
                {...(o.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-4 py-5"
              >
                <span aria-hidden="true" className="text-ink">{o.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-light uppercase tracking-widest text-light md:text-[13px]">
                    {o.label}
                  </span>
                  <span className="block break-words text-[16px] text-ink transition-colors group-hover:text-red md:text-[17px]">
                    {o.value}
                  </span>
                </span>
                <span aria-hidden="true" className="text-red">→</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* 2. Three ways to start */}
      <section className={section}>
        <p className={eyebrow}>Three ways to start</p>
        <h2 className="sr-only">Three ways to get in touch</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
          {WAYS.map((w) => (
            <div key={w.title} className="flex flex-col border-t border-ink pt-5">
              <p className="mb-3 text-[11px] font-light uppercase tracking-widest text-light md:text-[13px]">
                {w.label}
              </p>
              <h3 className={`${h3} mb-3`}>{w.title}</h3>
              <p className="mb-8 text-[16px] leading-[1.7] text-mid">{w.text}</p>
              <div className="mt-auto">
                <a
                  href={w.href}
                  data-cta={w.cta}
                  {...(w.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={btn}
                >
                  {w.button}
                </a>
                {w.note && (
                  <p className="mt-3 text-[14px] text-light">{w.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Form */}
      <section id="form" className={`${section} scroll-mt-16`}>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
          <div>
            <h2 className={h2}>Send a note</h2>
            <ContactForm
              formActionUrl={formActionUrl}
              whatsappHref={WHATSAPP_HREF}
            />
          </div>
          <div>
            <h3 className={`${h3} mb-6`}>What happens next</h3>
            <ol>
              <li className="grid grid-cols-[28px_1fr] gap-3 py-4 first:pt-0">
                <span className="text-[16px] font-bold text-ink">1</span>
                <p className={body}>
                  <strong className="font-bold text-ink">You reach out</strong>{" "}
                  by WhatsApp, a booked call or this form.
                </p>
              </li>
              <li className="grid grid-cols-[28px_1fr] gap-3 border-t border-rule py-4">
                <span className="text-[16px] font-bold text-ink">2</span>
                <p className={body}>
                  <strong className="font-bold text-ink">A 15-minute call</strong>{" "}
                  to understand the issue and whether Simpleworks can help. If
                  it&rsquo;s not a fit, you&rsquo;ll hear that plainly.
                </p>
              </li>
              <li className="grid grid-cols-[28px_1fr] gap-3 border-t border-rule py-4">
                <span className="text-[16px] font-bold text-ink">3</span>
                <p className={body}>
                  <strong className="font-bold text-ink">A clear next step.</strong>{" "}
                  For most founders that&rsquo;s the{" "}
                  <Link
                    href="/business-growth-review"
                    className="text-red underline hover:no-underline"
                  >
                    growth review
                  </Link>
                  : ₹25,000, half a day, a written brief you keep.
                </p>
              </li>
            </ol>
            <p className={`${body} mt-6`}>
              <Link
                href="/simpleworks-questions"
                className="text-red underline hover:no-underline"
              >
                More questions about Simpleworks →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 4. A note from Premraj */}
      <section className={section}>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[180px_1fr] md:gap-14">
          <Image
            src="/images/business-growth-review/premraj-menon.webp"
            alt="Illustrated portrait of Premraj Menon"
            width={1024}
            height={1024}
            className="h-auto w-[140px] md:w-full md:max-w-[180px]"
          />
          <blockquote className="max-w-[640px] border-l-2 border-red pl-6">
            <p className="text-[16px] italic leading-[1.65] text-ink md:text-[18px]">
              You&rsquo;ll speak with me, not an assistant or a junior
              consultant. I read every message myself, and if I&rsquo;m not the
              right person for your problem, I&rsquo;ll tell you who might be.
            </p>
            <cite className="mt-4 block text-[11px] font-light uppercase not-italic tracking-widest text-light md:text-[13px]">
              Premraj Menon, founder
            </cite>
          </blockquote>
        </div>
      </section>

      {/* 5. Contact details */}
      <section id="details" className={`${section} border-b border-rule`}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {DETAILS.map((d) => (
            <div key={d.label}>
              <p className={eyebrow}>{d.label}</p>
              <a
                href={d.href}
                data-cta="contact-details"
                className="text-[17px] text-ink transition-colors hover:text-red"
              >
                {d.value}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
