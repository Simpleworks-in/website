import ContactTabs from "@/components/ContactTabs";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: {
    absolute: "Hire a Business Consultant in India | Contact | Simpleworks",
  },
  description:
    "Looking to hire a business consultant in India? Submit a consulting inquiry or book a free first call with Prem Menon. MSME consultant contact — Simpleworks, Bengaluru.",
  alternates: {
    canonical: "https://simpleworks.in/contact",
  },
};

const WHATSAPP_HREF = `https://wa.me/919036099000?text=${encodeURIComponent(
  "Hi Prem, I came across Simpleworks Consulting and would like to discuss my business."
)}`;

export default async function ContactPage() {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "YOUR_FORM_ID";
  const formActionUrl = `https://formspree.io/f/${formspreeId}`;
  const turnstileSiteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ??
    "0x4AAAAAADyjtfqI6BeeGmuE1oHfN0BOSqI";

  return (
    <>
      <Reveal />

      {/* PAGE HEADER */}
      <div className="flex border-b border-rule/100 md:min-h-[220px]">
        <div className="hidden md:flex w-[72px] flex-shrink-0 relative items-start pt-14 pl-6">
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-red" />
        </div>
        <div className="flex-1 px-6 py-10 md:px-[60px] md:pt-14 md:pb-[52px] md:pl-14 flex flex-col justify-end gap-6 md:gap-8">
          <div>
            <p className="text-eyebrow tracking-wide-10 uppercase text-light mb-4 animate-fade-up">
              Simpleworks Consulting · Get In Touch
            </p>
            <h1 className="text-[36px] md:text-hero-h1 font-bold leading-[1.1] tracking-tight-2 animate-fade-up">
              Something feels stuck.
              <br />
              Let&apos;s <span className="text-red">find out what.</span>
            </h1>
            <p className="text-[17px] italic text-mid leading-[1.65] mt-4 max-w-[500px] animate-fade-up">
              The first conversation is free — no pitch, no pressure. Just a
              straight look at your business.
            </p>
            <p className="text-[15px] text-mid leading-[1.65] mt-3 max-w-[500px] animate-fade-up">
              Message on WhatsApp for a quick reply, or send a note below.
              Prem Menon responds personally.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:gap-8 md:items-center animate-fade-up">
            <div className="flex items-center gap-3 text-sm text-mid">
              <svg
                className="w-4 h-4 flex-shrink-0 fill-none stroke-red stroke-[1.8]"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="2,4 12,13 22,4" />
              </svg>
              <a
                href="mailto:pm@simpleworks.in"
                className="text-mid transition-colors hover:text-red"
              >
                pm@simpleworks.in
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-mid">
              <svg
                className="w-4 h-4 flex-shrink-0 fill-none stroke-red stroke-[1.8]"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>+91 90360 99000</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-mid">
              <svg
                className="w-4 h-4 flex-shrink-0 fill-none stroke-red stroke-[1.8]"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Bengaluru, Karnataka, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* TABS + CONTENT */}
      <ContactTabs
        formActionUrl={formActionUrl}
        turnstileSiteKey={turnstileSiteKey}
        whatsappHref={WHATSAPP_HREF}
      />
    </>
  );
}
