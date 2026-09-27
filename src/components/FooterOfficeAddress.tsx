"use client";

import { useState } from "react";
import { FACTS } from "../../content/facts";

export default function FooterOfficeAddress() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:max-w-[240px]">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-1.5 text-[13px] font-semibold text-ink transition-colors hover:text-red"
      >
        <span>Office Address</span>
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
        <address className="not-italic mt-2 text-[13px] leading-relaxed text-light">
          {FACTS.orgName}
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
        </address>
      )}
    </div>
  );
}
