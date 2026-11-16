// Single source for programme prices. The homepage cards, the FAQ fee answers,
// /programmes, /business-growth-review and every Offer in JSON-LD read from
// here, so a price can never differ between pages. Change a fee here once.

export const PRICES = {
  diagnostic: 25000,
  reset30: 140000,
  reset60: 280000,
  counsel: 75000, // per month
  advisory: 35000, // per month
} as const;

export type PriceKey = keyof typeof PRICES;

/** Indian digit grouping with the rupee sign: 140000 → "₹1,40,000". */
export function inr(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

/** Formatted price for display, e.g. price("reset30") → "₹1,40,000". */
export function price(key: PriceKey) {
  return inr(PRICES[key]);
}

const SITE = "https://www.simpleworks.in";

/** Sitewide OfferCatalog for the ProfessionalService node. */
export const offerCatalog = {
  "@type": "OfferCatalog",
  name: "Fixed-fee programmes",
  itemListElement: [
    {
      "@type": "Offer",
      name: "Simple Diagnostic",
      price: String(PRICES.diagnostic),
      priceCurrency: "INR",
      url: `${SITE}/business-growth-review`,
    },
    {
      "@type": "Offer",
      name: "Simple Reset (30 days)",
      price: String(PRICES.reset30),
      priceCurrency: "INR",
      url: `${SITE}/programmes`,
    },
    {
      "@type": "Offer",
      name: "Simple Counsel",
      priceCurrency: "INR",
      url: `${SITE}/programmes`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(PRICES.counsel),
        priceCurrency: "INR",
        unitText: "MONTH",
      },
    },
    {
      "@type": "Offer",
      name: "Simple Advisory",
      priceCurrency: "INR",
      url: `${SITE}/programmes`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(PRICES.advisory),
        priceCurrency: "INR",
        unitText: "MONTH",
      },
    },
  ],
};
