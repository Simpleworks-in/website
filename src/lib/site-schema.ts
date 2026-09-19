import { FACTS } from "../../content/facts";

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
      name: FACTS.orgName,
      alternateName: FACTS.orgShortName,
      description:
        "Management consulting practice in Bengaluru working with Indian MSMEs on strategy, go-to-market and execution.",
      url: "https://www.simpleworks.in",
      email: FACTS.email,
      telephone: FACTS.phoneSchema,
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: FACTS.city,
        addressRegion: FACTS.region,
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
      sameAs: [
        "https://www.linkedin.com/company/simpleworks-consulting/",
        "https://www.instagram.com/simpleworksconsulting/",
      ],
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: FACTS.founder,
      jobTitle: "Founder and Principal Consultant",
      worksFor: { "@id": ORG_ID },
      email: FACTS.email,
      telephone: FACTS.phoneSchema,
      knowsAbout: [
        "Management consulting",
        "Go-to-market strategy",
        "OKR implementation",
        "MSME growth",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Indian Institute of Management Bengaluru",
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
