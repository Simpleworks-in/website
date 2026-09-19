// Single sitewide entity graph: the practice (ProfessionalService) and its
// founder (Person). Rendered once in app/layout.tsx. Other pages reference these
// by @id — they must not define a second Organization / LocalBusiness / Person.
export const ORG_ID = "https://www.simpleworks.in/#organization";
export const PERSON_ID = "https://www.simpleworks.in/#prem";

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": ORG_ID,
      name: "Simpleworks Consulting",
      alternateName: "Simpleworks",
      description:
        "Management consulting practice in Bengaluru working with Indian MSMEs on strategy, go-to-market and execution.",
      url: "https://www.simpleworks.in",
      email: "pm@simpleworks.in",
      telephone: "+91-90360-99000",
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      founder: { "@id": PERSON_ID },
      areaServed: { "@type": "Country", name: "India" },
      knowsAbout: [
        "Management consulting",
        "MSME business strategy",
        "Go-to-market strategy",
        "OKR implementation",
        "Business execution",
        "Family business advisory",
      ],
      // Only live profiles that are spelled exactly "Simpleworks Consulting".
      sameAs: ["https://www.instagram.com/simpleworksconsulting/"],
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Prem Menon",
      alternateName: "Premraj Menon",
      jobTitle: "Founder and Principal Consultant",
      worksFor: { "@id": ORG_ID },
      email: "pm@simpleworks.in",
      telephone: "+91-90360-99000",
      knowsAbout: [
        "Management consulting",
        "Go-to-market strategy",
        "OKR implementation",
        "MSME growth",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Indian Institute of Management Bangalore",
        },
        {
          "@type": "EducationalOrganization",
          name: "Ross School of Business, University of Michigan",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/in/premraj/",
        "https://premraj.substack.com/",
        "https://x.com/nonemmerp",
      ],
    },
  ],
};
