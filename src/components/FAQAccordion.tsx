"use client";

import { useState } from "react";
import { FAQS } from "@/lib/faqs";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list mt-8 md:mt-12 max-w-[640px]">
      {FAQS.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={i}
            className="border-b-[0.5px] border-rule"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full justify-between items-center py-[22px] gap-5 text-[15px] font-semibold leading-[1.4] cursor-pointer select-none transition-colors hover:text-red text-left"
              aria-expanded={open}
            >
              <span>{item.q}</span>
              <span
                className="flex-shrink-0 relative w-[18px] h-[18px]"
                aria-hidden="true"
              >
                <span
                  className="absolute bg-red rounded-[1px]"
                  style={{
                    width: "2px",
                    height: "14px",
                    left: "8px",
                    top: "2px",
                    transition: "transform 0.25s",
                    transform: open ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                />
                <span
                  className="absolute bg-red rounded-[1px]"
                  style={{
                    width: "14px",
                    height: "2px",
                    left: "2px",
                    top: "8px",
                  }}
                />
              </span>
            </button>
            <div
              className="text-sm text-mid leading-[1.75] overflow-hidden"
              style={{
                maxHeight: open ? "240px" : "0px",
                paddingBottom: open ? "22px" : "0px",
                transition:
                  "max-height 0.35s ease, padding-bottom 0.35s ease",
              }}
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
