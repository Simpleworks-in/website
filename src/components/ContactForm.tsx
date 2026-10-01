"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { pushEvent } from "@/lib/tracking";

const INTEREST_OPTIONS = [
  "Growth review (Diagnostic)",
  "Simple Reset",
  "Simple Counsel",
  "Not sure yet",
] as const;

const INTEREST_FROM_PARAM: Record<string, (typeof INTEREST_OPTIONS)[number]> = {
  "growth-review": "Growth review (Diagnostic)",
  reset: "Simple Reset",
  counsel: "Simple Counsel",
};

const REVENUE_OPTIONS = [
  "Below ₹2 crore",
  "₹2–10 crore",
  "₹10–50 crore",
  "₹50–200 crore",
  "Above ₹200 crore",
];

const MIN_ONE_THING = 20;

const fieldClass =
  "w-full rounded-[1px] border border-rule bg-warm px-4 py-[13px] font-serif text-[16px] text-ink outline-none transition-colors placeholder:text-light focus:border-ink focus:bg-white";
const labelClass = "text-[14px] font-bold text-ink";

function Label({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {children}
      {optional && <span className="font-normal text-light"> (optional)</span>}
    </label>
  );
}

export default function ContactForm({
  formActionUrl,
  whatsappHref,
}: {
  formActionUrl: string;
  whatsappHref: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [interest, setInterest] = useState<string>("Not sure yet");
  const [interestParam, setInterestParam] = useState("");
  const [sourcePage, setSourcePage] = useState("");
  const [oneThingError, setOneThingError] = useState(false);

  // Query string and referrer only exist in the browser, so they are read after mount.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("interest") ?? "";
    setInterestParam(param);
    setInterest(INTEREST_FROM_PARAM[param] ?? "Not sure yet");
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (param) {
      // Wait a tick so the browser's own scroll restoration doesn't undo this.
      timer = setTimeout(
        () => document.getElementById("form")?.scrollIntoView(),
        150
      );
    }
    try {
      if (document.referrer) {
        const ref = new URL(document.referrer);
        if (ref.origin === window.location.origin) setSourcePage(ref.pathname);
      }
    } catch {
      /* no usable referrer */
    }
    return () => clearTimeout(timer);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get("one_thing") ?? "").trim().length < MIN_ONE_THING) {
      setOneThingError(true);
      document.getElementById("one_thing")?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(formActionUrl, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        pushEvent({
          event: "generate_lead",
          page_path: window.location.pathname,
          source_page: sourcePage,
          interest: String(data.get("interest") ?? ""),
          revenue_band: String(data.get("revenue") ?? ""),
        });
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div>
        <h3 className="mb-3 text-[20px] font-bold leading-[1.3] text-ink md:text-[24px]">
          Thank you.
        </h3>
        <p className="text-[16px] leading-[1.78] text-mid md:text-[17px]">
          Premraj will reply personally within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      {/* Honeypot */}
      <input
        type="text"
        name="_gotcha"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <p className="border-l-2 border-red pl-5 text-[16px] leading-[1.78] text-mid md:text-[17px]">
        Simpleworks works with founder-led businesses with ₹10–200 crore in
        revenue. If your business is pre-revenue or below ₹2 crore, the{" "}
        <Link href="/blog" className="text-red underline hover:no-underline">
          blog
        </Link>{" "}
        and{" "}
        <Link href="/resources" className="text-red underline hover:no-underline">
          resources
        </Link>{" "}
        are a better place to start.
      </p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Your name</Label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Business name</Label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone" optional>
            Phone
          </Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91"
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="revenue">Annual revenue</Label>
          <select
            id="revenue"
            name="revenue"
            required
            defaultValue=""
            className={fieldClass}
          >
            <option value="">Choose one</option>
            {REVENUE_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="interest">What are you interested in?</Label>
          <select
            id="interest"
            name="interest"
            required
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className={fieldClass}
          >
            {INTEREST_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <Label htmlFor="one_thing">
            What&rsquo;s the one thing you&rsquo;d most like to fix?
          </Label>
          <textarea
            id="one_thing"
            name="one_thing"
            rows={4}
            placeholder="For example: sales have been flat for two years and dealers are pushing back on price."
            aria-invalid={oneThingError}
            aria-describedby={oneThingError ? "one_thing_error" : undefined}
            onChange={(e) => {
              if (oneThingError && e.target.value.trim().length >= MIN_ONE_THING) {
                setOneThingError(false);
              }
            }}
            className={`${fieldClass} resize-y`}
          />
          {oneThingError && (
            <p id="one_thing_error" className="text-[14px] text-red">
              A sentence or two is enough.
            </p>
          )}
        </div>
      </div>

      <input type="hidden" name="source_page" value={sourcePage} />
      <input type="hidden" name="interest_param" value={interestParam} />

      {status === "error" && (
        <p className="text-[14px] text-red">
          That didn&rsquo;t send. Please try again, or{" "}
          <a
            href={whatsappHref}
            data-cta="contact-form-error"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            message on WhatsApp
          </a>
          .
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-block whitespace-nowrap rounded-[1px] border border-red bg-transparent px-9 py-[14px] font-serif text-[14px] text-red transition-colors hover:bg-red hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Send to Premraj"}
        </button>
        <span className="text-[14px] text-light">Premraj replies personally.</span>
      </div>
    </form>
  );
}
