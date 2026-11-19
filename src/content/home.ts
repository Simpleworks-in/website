// All homepage copy, in page order. page.tsx imports this and holds layout only.
// FAQ text is not here: it lives in src/lib/faqs.ts (see homeFaqIds), shared
// with /programmes. Prices come from src/lib/programmes.ts.
//
// Rules: "Bangalore" in visible copy ("Bengaluru" only in the postal address
// and JSON-LD). "Premraj Menon" / "Premraj", never "Prem".

import { price } from "@/lib/programmes";
import { FACTS } from "../../content/facts";

export type RedHeading = { text: string; red: string };
export type TextLink = { label: string; href: string };

export const HERO = {
  eyebrow: "Business Growth Consultant · Bangalore & India",
  heading: { text: "Your business has more in it than your", red: "current results show." },
  subhead:
    "At Simpleworks Consulting, we help established Indian small and medium businesses that are stuck in growth, stretched in operations, or unclear on the next move. Online across India, in person in Bangalore.",
  cta: { label: "WhatsApp Premraj", dataCta: "hero" },
  ctaCaption: "Reply within one business day",
  imageAlt: "MSME owner reviewing business growth with Simpleworks Consulting, Bangalore",
};

export const PROBLEM = {
  eyebrow: "Sound familiar?",
  heading: { text: "Turnover is stuck. And everything still", red: "depends on you." },
  lead: "If two or more of these describe your week, the problem is rarely effort. It is usually the way the business is set up to grow.",
  statements: [
    "We’ve reached a certain size, and I’m no longer sure where to take the business next.",
    "Revenue has been flat for years, though we’re all working harder.",
    "The business has outgrown the way I run it, and managing it is getting harder.",
    "My team waits for instructions instead of taking ownership.",
    "Every decision, big or small, still ends up on my desk.",
    "My days go on firefighting, so I never get time to work on the business.",
  ],
  founderLead: "Premraj Menon has been in this seat.",
  founderBody:
    "39 years running sales, distribution and P&Ls in Indian businesses, in large companies and in MSMEs. He helps owners find what is holding growth back, and gets their time back for the work only they can do.",
  cta: {
    label: "Sound familiar? Tell Premraj which one",
    dataCta: "recognise",
    whatsappText: "Hi Premraj, I saw the list on your website. The one that sounds like my business is: ",
  },
  link: { label: "How a half-day business growth review works", href: "/business-growth-review" },
};

export const WHO = {
  eyebrow: "Who we work with",
  heading: { text: "Established MSMEs at", red: "turning points." },
  qualifiers: [
    { label: "Revenue", value: FACTS.revenueRange },
    { label: "Team", value: "20+ people" },
    { label: "Ownership", value: "Founder-led, family-run or professionally managed" },
    { label: "Sectors", value: "Manufacturing, consumer goods, retail, distribution, technology" },
  ],
  // The paragraph is split around its three hub links.
  paraBefore:
    "Usually at a turning point: a turnaround, a new market, or revenue that grows while margins shrink. Depending on where you are, that means ",
  hubLinks: [
    { label: "MSME consulting", href: "/services/msme-consulting" },
    { label: "small business consulting", href: "/services/small-business-consulting" },
    { label: "family business consulting", href: "/services/family-business-consulting" },
  ],
  paraAfter: ". All of them need simple answers, not complex frameworks.",
};

export const SERVICES = {
  eyebrow: "What we do",
  heading: { text: "Strategy. Growth. Execution.", red: "Nothing more." },
  intro:
    "An independent consulting practice in Bangalore, led personally by Premraj, that stays with you through execution.",
  cards: [
    {
      num: "01",
      title: "Know where the business should go next",
      body: "Clarity on where the business should go, and why. We work with your leadership team to find the core problem and build a plan the organisation can actually follow.",
      // No business-strategy hub page exists yet; /services is the overview.
      link: { label: "Business strategy consulting", href: "/services" },
    },
    {
      num: "02",
      title: "Win the right customers through the right channels",
      body: "Define the segment worth winning, sharpen what you say to it, and choose the channels that move volume: dealers, distributors or direct.",
      link: { label: "Sales & distribution strategy", href: "/services/gtm-consulting" },
    },
    {
      num: "03",
      title: "Get the team delivering without you chasing",
      body: "Oversight, accountability and review routines that turn decisions into progress. OKRs are part of the toolkit, kept simple enough to use.",
      link: { label: "Strategy implementation & OKRs", href: "/services/execution-consulting" },
    },
  ],
};

export const WHY = {
  eyebrow: "Why Simpleworks",
  heading: { text: "39 years running businesses.", red: "Not advising on them." },
  portraitAlt: "Premraj Menon, business growth consultant, Bangalore",
  h3: "Premraj Menon, Business Growth Consultant and MSME Business Coach",
  lead: "Two vantage points few consultants have. Thirty years in corporate India, rising to the C-suite as COO, with MSME dealers and distributors as his partners. Then ten years managing MSMEs from the inside. Owners get the discipline of a large company, in a form a founder-led business can actually run.",
  proof: [
    {
      figure: "30 yrs",
      text: "Corporate India, from Sales Trainee in 1987 to COO of Tata Docomo’s Kerala Circle, via Usha International, MRF, Apollo Tyres, BPL Mobile and Bharti Airtel. The C-suite view of strategy, P&L and execution.",
    },
    {
      figure: "Around 3,000",
      text: "MSME dealers and distributors coached on business performance across three decades",
    },
    {
      figure: "10 yrs",
      text: "Managing MSMEs: co-founded Viworks Ventures, then ran growth and strategy on the management team at Neoffice (2016–2025)",
    },
    {
      figure: "2019",
      text: "Neoffice won the ET-SIDBI MSME award for Best Exporter, Micro category",
    },
    {
      figure: "Family-owned business",
      text: "Family-business owners have asked him to help settle the next generation in and get clarity on who runs what",
    },
  ],
  credentials:
    "Credentials from IIM Bangalore and the Ross School of Business, University of Michigan.",
  links: [
    { label: "About Premraj", href: "/about" },
    {
      label: "How to choose an MSME business coach",
      href: "/blog/how-to-choose-the-right-msme-business-coach-in-india",
    },
    { label: "Read about one-to-one MSME coaching", href: "/msme-business-coach" },
  ] satisfies TextLink[],
  cta: {
    label: "Talk to Premraj directly",
    dataCta: "why",
    whatsappText: "Hi Premraj, I read about your background and would like to talk about my business.",
  },
};

export const STORY = {
  eyebrow: "Client story",
  heading: { text: "What changed for", red: "one manufacturer." },
  caption: "Automobile components manufacturer · Bangalore · Simple Diagnostic",
  title: "Flat for two years, two clients carrying the business.",
  note: "Client details are confidential.",
  rows: [
    {
      label: "The problem",
      text: "A founder-run business with revenue flat for two years. Two anchor customers took most of the output, so every price talk and every late payment hit hard.",
    },
    {
      label: "What we did",
      text: "Rebuilt the go-to-market plan and mapped a far wider list of potential buyers. Opened the aftermarket through Bangalore distributors on cash-and-carry, to ease cash flow. Registered on Udyam, so B2B buyers come under the MSMED Act’s 45-day payment rule.",
    },
    {
      label: "What’s changed so far",
      text: "New B2B customers are signing on beyond the two anchors, and the first aftermarket distributor is on board.",
      emphasis: true,
    },
  ],
  link: { label: "Read client success stories", href: "/client-success-stories" },
};

export const PROGRAMMES = {
  eyebrow: "How to start",
  heading: { text: "Fixed-fee programmes.", red: "Clear end points." },
  intro:
    "Every engagement starts with a quick introductory call. If there is a fit, you choose the format, and you know the fee and the end date before we begin.",
  cards: [
    {
      name: "Diagnostic",
      mode: "In person or online",
      price: price("diagnostic"),
      note: "One time · paid after the session",
      desc: "One problem you name, worked through in a three-hour working session, then a one-hour walkthrough of what to do next.",
      link: { label: "Simple Diagnostic details", href: "/business-growth-review" },
    },
    {
      name: "Reset",
      mode: "In person · Bangalore",
      price: price("reset30"),
      note: `30 days · ${price("reset60")} for 60 days`,
      desc: "A focused reset of the part of the business that is holding growth back, with one on-site visit a week.",
      link: { label: "Simple Reset details", href: "/programmes#simple-reset" },
    },
    {
      name: "Counsel",
      mode: "In person · Bangalore",
      price: price("counsel"),
      note: "Per month · three-month minimum",
      desc: "Two sessions a month, WhatsApp access in between, and a quarterly leadership review.",
      link: { label: "Simple Counsel details", href: "/programmes#simple-counsel" },
    },
    {
      name: "Advisory",
      mode: "Online · anywhere in India",
      price: price("advisory"),
      note: "Per month · three-month minimum",
      desc: "Two 90-minute sessions a month with Premraj. You can start here directly, without a Diagnostic first.",
      link: { label: "Simple Advisory details", href: "/programmes#simple-advisory" },
    },
  ],
  cta: { label: "Let’s have a quick introductory call", href: "#contact", dataCta: "programmes" },
  customText: "Need something different? Custom engagements get a fixed written quote.",
  compareLink: { label: "Compare all programmes", href: "/programmes" },
};

export const FAQ_SECTION = {
  eyebrow: "Questions",
  heading: { text: "What owners ask before", red: "the first call." },
  allLink: { label: "See all questions", href: "/simpleworks-questions" },
};

export const CONTACT = {
  eyebrow: "Contact Us",
  heading: { text: "Let’s have an honest conversation about", red: "your business." },
  body: "Tell us a little about the business. Premraj replies within one business day to set up a quick introductory call.",
  address: `${FACTS.locality}, ${FACTS.city} ${FACTS.postalCode}, ${FACTS.region}`,
  calendar: {
    label: "Book an appointment",
    href: "https://calendar.app.google/rVCgwR2PUwPorN658",
    dataCta: "contact-calendar",
  },
  whatsapp: { label: "or WhatsApp Premraj", dataCta: "contact-whatsapp" },
};
