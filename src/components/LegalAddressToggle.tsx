"use client";

import { useState } from "react";
import { FACTS } from "../../content/facts";

export default function LegalAddressToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <p className="text-eyebrow tracking-wide-8 uppercase text-light mb-[10px]">
        Office Address
      </p>

      <address className="not-italic text-[15px] leading-relaxed text-mid">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex items-center gap-2 font-semibold text-ink transition-colors hover:text-red"
        >
          <span>{FACTS.orgName}</span>
          <svg
            viewBox="0 0 24 24"
            className={`h-3 w-3 flex-shrink-0 stroke-current transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </button>

        {open && (
          <>
            <br />
            Sole Proprietor: {FACTS.founder}
            <br />
            {FACTS.streetAddress},
            <br />
            {FACTS.city} &ndash; {FACTS.postalCode}, {FACTS.region}, India
            <br />
            Email:{" "}
            <a href={`mailto:${FACTS.email}`} className="transition-colors hover:text-red">
              {FACTS.email}
            </a>
            <br />
            Phone:{" "}
            <a href={`tel:${FACTS.phoneSchema}`} className="transition-colors hover:text-red">
              {FACTS.phone}
            </a>
            <br />
            Udyam Registration No: {FACTS.udyamNo}
            <br />
            PAN No: {FACTS.panNo}
          </>
        )}
      </address>
    </div>
  );
}
