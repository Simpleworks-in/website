"use client";

import { useState } from "react";

type FAQ = { q: string; a: string };

const FAQS: FAQ[] = [
  {
    q: "What kind of businesses does Simpleworks work with?",
    a: "As an MSME consultant based in Bengaluru, we work primarily with Indian MSMEs and small-to-medium businesses in manufacturing, consumer goods, retail, distribution, and technology. Our clients are typically founder-led or family-run businesses with 20 to 500 employees.",
  },
  {
    q: "Do you work with businesses outside Bengaluru?",
    a: "Yes. While we are based in Bengaluru, we travel to our clients across India. Every engagement is conducted in person — we come to you, wherever you are.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "It depends on the problem. Some clients need a focused strategy sprint — three to four weeks to diagnose, decide, and plan. Others need longer-term advisory support through a growth phase or business turnaround. We scope every engagement around the actual need, not a standard package.",
  },
  {
    q: "How is Simpleworks different from larger consulting firms?",
    a: "Larger management consulting firms in India are built for large organisations. Simpleworks is different — we are an independent management consultant India-based founder-led businesses can actually work with — they bring frameworks, teams, and timelines that don't fit most Indian MSMEs. Simpleworks is built for businesses where the founder is in the room, decisions happen fast, and the plan must be executable by the existing team.",
  },
];

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
