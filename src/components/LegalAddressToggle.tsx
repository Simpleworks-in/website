"use client";

import { useState } from "react";
import { FACTS } from "../../content/facts";

export default function LegalAddressToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-1.5 text-[12px] text-light transition-colors hover:text-red"
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
        <div className="mt-3 max-w-md text-[12px] leading-relaxed text-light">
          <p className="font-bold text-mid">{FACTS.orgName}</p>
          <p>Sole Proprietor: {FACTS.founder}</p>
          <p>{FACTS.streetAddress},</p>
          <p>
            {FACTS.city} &ndash; {FACTS.postalCode}, {FACTS.region}, India
          </p>
          <p>Email: {FACTS.email}</p>
          <p>Phone: {FACTS.phone}</p>
          <p>Udyam Registration No: {FACTS.udyamNo}</p>
          <p>PAN No: {FACTS.panNo}</p>
        </div>
      )}
    </div>
  );
}
