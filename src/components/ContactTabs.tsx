"use client";

import { useState } from "react";

type TabId = "message" | "whatsapp";

type ContactTabsProps = {
  formActionUrl: string;
  whatsappHref: string;
};

export default function ContactTabs({
  formActionUrl,
  whatsappHref,
}: ContactTabsProps) {
  const [active, setActive] = useState<TabId>("whatsapp");

  const tabClass = (id: TabId) =>
    `flex-1 px-3 py-3 md:px-6 md:py-5 border-r border-rule/100 last:border-r-0 cursor-pointer flex items-center gap-2 md:gap-[14px] transition-colors select-none hover:bg-warm ${
      active === id ? "bg-warm border-b-2 border-b-red" : ""
    }`;

  const tabTitleClass = (id: TabId) =>
    `text-xs md:text-sm font-semibold ${active === id ? "text-red" : "text-ink"}`;

  return (
    <>
      {/* TABS */}
      <div className="flex border-t border-b border-rule/100 md:ml-[72px] reveal">
        <div
          role="button"
          tabIndex={0}
          onClick={() => setActive("whatsapp")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setActive("whatsapp");
          }}
          className={tabClass("whatsapp")}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="#25D366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <div className="flex flex-col gap-[2px]">
            <span className={tabTitleClass("whatsapp")}>WhatsApp</span>
            <span className="hidden md:block text-eyebrow-lg text-light tracking-wide-2">
              Quick questions, fast responses
            </span>
          </div>
        </div>

        <div
          role="button"
          tabIndex={0}
          onClick={() => setActive("message")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setActive("message");
          }}
          className={tabClass("message")}
        >
          <svg
            className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-red"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="2,4 12,13 22,4" />
          </svg>
          <div className="flex flex-col gap-[2px]">
            <span className={tabTitleClass("message")}>Send a Message</span>
            <span className="hidden md:block text-eyebrow-lg text-light tracking-wide-2">
              Response within one business day
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex min-h-[580px] md:ml-[72px]">
        <div className="flex-1 px-6 py-10 md:p-[60px]">
          {active === "whatsapp" && <WhatsAppPanel whatsappHref={whatsappHref} />}
          {active === "message" && (
            <MessagePanel formActionUrl={formActionUrl} />
          )}
        </div>
      </div>
    </>
  );
}

/* ─────────── PANELS ─────────── */

function MessagePanel({ formActionUrl }: { formActionUrl: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    try {
      const res = await fetch(formActionUrl, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col md:grid md:grid-cols-[1fr_340px] gap-10 md:gap-[72px] items-start">
      <div className="w-full">
        <p className="text-[13px] tracking-wide-6 uppercase text-light mb-8 font-medium">
          Send a Message
        </p>

        {status === "success" ? (
          <div className="flex items-center gap-3 py-4">
            <span className="w-2 h-2 rounded-full bg-[#4CAF50] flex-shrink-0" />
            <p className="text-sm text-ink">
              <strong className="font-semibold">Thank you.</strong> Your
              message has been sent. Prem will respond within one business
              day.
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Honeypot */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field
                id="name"
                label="Your Name"
                name="name"
                type="text"
                placeholder="Rajan Mehta"
                required
              />
              <Field
                id="email"
                label="Email Address"
                name="email"
                type="email"
                placeholder="rajan@company.in"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field
                id="company"
                label="Company / Business"
                name="company"
                type="text"
                placeholder="Mehta Industries Pvt. Ltd."
              />
              <Field
                id="phone"
                label="Mobile Number"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
              />
            </div>
            <Field
              id="location"
              label="City / Location"
              name="location"
              type="text"
              placeholder="Mumbai, Maharashtra"
            />

            {status === "error" && (
              <p className="text-sm text-red">
                Something went wrong sending your message. Please try again,
                or email{" "}
                <a href="mailto:pm@simpleworks.in" className="underline">
                  pm@simpleworks.in
                </a>{" "}
                directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-[10px] font-serif text-sm tracking-wide-3 text-red border-[1.5px] border-red px-9 py-[14px] rounded-[1px] bg-transparent cursor-pointer transition-colors hover:bg-red hover:text-white disabled:opacity-50 disabled:cursor-not-allowed w-fit"
            >
              {status === "submitting" ? "Sending…" : <>Send Message &nbsp;→</>}
            </button>
          </form>
        )}
      </div>

      {/* Sidebar */}
      <div className="w-full md:pt-11">
        <AsideBlock label="Email">
          <a
            href="mailto:pm@simpleworks.in"
            className="text-mid transition-colors hover:text-red"
          >
            pm@simpleworks.in
          </a>
          <div className="inline-flex items-center gap-2 text-xs text-light mt-2">
            <span
              className="w-[7px] h-[7px] rounded-full bg-[#4CAF50] flex-shrink-0"
              style={{ animation: "pulse 2s infinite" }}
            />
            Responds within one business day
          </div>
        </AsideBlock>
        <AsideBlock label="Phone">+91 90360 99000</AsideBlock>
        <AsideBlock label="Location">
          Bengaluru, Karnataka
          <br />
          India
        </AsideBlock>
        <AsideBlock label="Experience">
          <span className="text-sm">
            39 years across Consumer Durables, Tyres, Telecom and SaaS.
            Independent management consultant in India.
          </span>
        </AsideBlock>
        <AsideBlock label="Travel">
          <span className="text-sm">
            We start with a call to understand your situation. All subsequent
            engagements are conducted in person — we travel to you.
          </span>
        </AsideBlock>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  name,
  type,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-eyebrow tracking-wide-8 uppercase text-light"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="font-serif text-[15px] text-ink bg-bg border border-rule/100 rounded-[1px] px-4 py-[13px] outline-none transition-colors focus:border-ink w-full"
      />
    </div>
  );
}

function AsideBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-5 py-6 md:px-6 md:py-7 border-l-2 border-rule/100 mb-6 transition-colors hover:border-l-red">
      <p className="text-eyebrow tracking-wide-8 uppercase text-light mb-[10px]">
        {label}
      </p>
      <div className="text-[15px] text-mid leading-relaxed">{children}</div>
    </div>
  );
}

function WhatsAppPanel({ whatsappHref }: { whatsappHref: string }) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-[72px] items-center md:min-h-[400px]">
      <div className="w-full">
        <div className="inline-flex items-center gap-[10px] bg-[#E8F8EE] border border-[#B7E4C7] rounded-[2px] px-4 py-2 mb-7">
          <span
            className="w-2 h-2 bg-wa rounded-full"
            style={{ animation: "pulse 2s infinite" }}
          />
          <span className="text-xs text-[#2D6A4F] tracking-wide-3 uppercase font-semibold">
            Usually responds within the hour
          </span>
        </div>
        <h2 className="text-[28px] md:text-[36px] font-bold leading-[1.2] tracking-tight-1 mb-4">
          Got a quick question?
          <br />
          Just WhatsApp.
        </h2>
        <p className="text-base text-mid leading-[1.75] mb-9 max-w-[420px]">
          Sometimes the fastest way to figure out if we&apos;re a good fit is a
          quick message. No forms, no formality. Just send a note and we&apos;ll
          take it from there.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-wa text-white font-serif text-[15px] font-semibold px-8 py-4 rounded-[2px] cursor-pointer transition-all hover:opacity-90 hover:-translate-y-[1px]"
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Open WhatsApp Chat
        </a>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-[280px] bg-[#ECE5DD] rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          <div className="bg-[#075E54] px-[18px] py-[14px] flex items-center gap-3">
            <div className="w-[38px] h-[38px] rounded-full bg-red flex items-center justify-center text-[15px] font-bold text-white flex-shrink-0">
              PM
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">Prem Menon</p>
              <p className="text-[11px] text-[#B2DFDB]">
                Simpleworks Consulting
              </p>
            </div>
          </div>
          <div className="px-[14px] py-4 flex flex-col gap-[10px] min-h-[200px]">
            <div className="max-w-[84%] px-[13px] py-[9px] text-[13px] leading-[1.5] bg-[#DCF8C6] text-[#1a1a1a] rounded-[8px_8px_0_8px] self-end">
              Hi Prem, I came across Simpleworks and would like to discuss my
              business.
              <p className="text-[10px] text-[#999] text-right mt-1">10:32 AM ✓✓</p>
            </div>
            <div className="max-w-[84%] px-[13px] py-[9px] text-[13px] leading-[1.5] bg-white text-[#1a1a1a] rounded-[0_8px_8px_8px] self-start">
              Hello! Thanks for reaching out. I&apos;d be happy to connect. What
              kind of business do you run?
              <p className="text-[10px] text-[#999] text-right mt-1">10:35 AM</p>
            </div>
            <div className="max-w-[84%] px-[13px] py-[9px] text-[13px] leading-[1.5] bg-[#DCF8C6] text-[#1a1a1a] rounded-[8px_8px_0_8px] self-end">
              We&apos;re a manufacturing firm in Pune, around ₹12 Cr revenue.
              Struggling with growth.
              <p className="text-[10px] text-[#999] text-right mt-1">10:37 AM ✓✓</p>
            </div>
            <div className="max-w-[84%] px-[13px] py-[9px] text-[13px] leading-[1.5] bg-white text-[#1a1a1a] rounded-[0_8px_8px_8px] self-start">
              That&apos;s a common turning point. Let&apos;s set up a quick call
              — no charge for the first conversation.
              <p className="text-[10px] text-[#999] text-right mt-1">10:38 AM</p>
            </div>
          </div>
          <div className="bg-[#F0F0F0] px-[14px] py-[10px] flex items-center gap-[10px] border-t border-[#DDD]">
            <div className="flex-1 bg-white rounded-[20px] px-[14px] py-2 text-[13px] text-[#999]">
              Type a message
            </div>
            <div className="w-9 h-9 bg-wa rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
