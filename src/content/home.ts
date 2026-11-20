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
  heading: {
    text: "Your business should grow.",
    red: "But it shouldn’t depend on you for everything.",
  },
  subhead:
    "Simpleworks Consulting helps MSME owners break through growth barriers, build stronger teams and run their businesses with greater clarity and control.",
  line: "39 years of business leadership experience. Practical advice. Personal involvement. In person in Bangalore, online across India.",
  cta: { label: "Let’s discuss your business", dataCta: "hero" },
  tags: "Business Growth · Founder Effectiveness · Team Accountability · Execution",
  imageAlt: "MSME owner reviewing business growth with Simpleworks Consulting, Bangalore",
};

// "Is this you?" replaced "Sound familiar?" and "What we do" (v3, Nov 2026).
// The owner's problem in his own words, then what changes, then the service.
export const HELP = {
  id: "help", // the header's "How we help" link target
  eyebrow: "Is this you?",
  heading: { text: "Is your business facing any of these", red: "business problems?" },
  lead: "If two or more of these describe your week, the problem is rarely effort. It is usually the way the business is set up to grow.",
  columns: { problem: "Your problem", help: "How Simpleworks can help you" },
  rows: [
    {
      label: "The business has stopped growing",
      problem: "Revenue has stopped growing despite everyone’s efforts.",
      promise: "Find where your next growth will come from, and the first steps to get there.",
      link: { label: "Sales & Distribution Growth", href: "/services/gtm-consulting" },
    },
    {
      label: "The founder has become the bottleneck",
      problem: "I am involved in almost every important decision.",
      promise: "Decisions that don’t need you stop landing on your desk.",
      link: { label: "Founder Effectiveness & Strategic Advisory", href: "/msme-business-coach" },
    },
    {
      label: "The team is not taking ownership",
      problem: "My managers don’t take enough ownership.",
      promise: "Each manager knows what they own, and someone checks every week that it got done.",
      link: { label: "Team Accountability & Execution", href: "/services/execution-consulting" },
    },
    {
      label: "The business lacks direction",
      problem: "I have ideas for growth but struggle to turn them into action.",
      promise: "Three or four priorities everyone knows, and a plan to finish them, month by month.",
      // No business-strategy hub page exists yet; /services is the overview.
      link: { label: "Business Direction & Growth", href: "/services" },
    },
    {
      label: "The business runs on people, not systems",
      problem: "Everything runs from people’s heads. Nothing is written down.",
      promise: "Simple processes your team follows every day, with each task in the right hands.",
      // Until a "Business Processes & Systems" page exists.
      link: { label: "Business Processes & Systems", href: "/services/execution-consulting" },
    },
  ] satisfies {
    label: string;
    problem: string;
    promise: string;
    link: TextLink;
  }[],
  quoteLead:
    "I have seen my business partners face these challenges in 39 years of running sales and distribution across India, in large companies and in MSMEs.",
  quoteBody: "Today I help owners find what is holding their growth back, and fix it with their team.",
  quoteBy: "Premraj Menon",
  cta: {
    label: "Sound familiar? Tell Premraj which one",
    dataCta: "recognise",
    whatsappText: "Hi Premraj, I saw the list on your website. The one that sounds like my business is: ",
  },
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

export const WHY = {
  eyebrow: "Why Simpleworks",
  heading: { text: "30 years in large companies.", red: "Nearly 10 years inside MSMEs like yours." },
  portraitAlt: "Premraj Menon, business growth consultant, Bangalore",
  h3: "Premraj Menon, Business Growth Consultant and MSME Business Coach",
  lead: "Two vantage points few consultants have. Thirty years in corporate India, rising to the C-suite as COO, with MSME dealers and distributors as his partners. Then nearly ten years managing MSMEs from the inside. Owners get the discipline of a large company, in a form a founder-led business can actually run.",
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
      figure: "Nearly 10 yrs",
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

export type StoryRow = { label: string; text: string; emphasis?: boolean };
export type HomeStory = {
  caption: string;
  title: string;
  note: string;
  image: { src: string; alt: string; width: number; height: number };
  rows: StoryRow[];
  link?: TextLink;
};

// Anonymous clients: no client, founder, product or customer name anywhere
// here (copy, image file names or alt text). Add a third story by appending
// to `items`; the layout needs no change.
export const STORIES = {
  eyebrow: "Client story",
  heading: { text: "What changed for", red: "two manufacturers." },
  items: [
    {
      caption: "Automobile components manufacturer · Bangalore · Simple Diagnostic",
      title: "Flat for two years, two clients carrying the business.",
      note: "Client details are confidential.",
      // Same file as this case on /client-success-stories.
      image: {
        src: "/images/stories/automobile-components-manufacturer/image.webp",
        alt: "Watercolour illustration of a red car",
        width: 475,
        height: 360,
      },
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
    },
    {
      caption: "Bulk chemical manufacturer · Salem · Simple Reset, 60 days",
      title: "The owner’s day was over 120% full. Most decisions ran through him.",
      // Must ship with this story.
      note: "Industry and location changed to protect the client’s confidentiality.",
      image: {
        src: "/images/stories/bulk-chemical-manufacturer.webp",
        alt: "Watercolour illustration of chemical storage tanks and drums",
        width: 1200,
        height: 670,
      },
      rows: [
        {
          label: "The problem",
          text: "A family-run business with one owner and three managers, where almost everything still ran through the owner. By the owner’s own count of the minutes, his day was over 120% full, and he took 12 of the 21 regular decisions. Nothing about who owns what was written down.",
        },
        {
          label: "What we did",
          text: "Mapped the work task by task across a team of 14, using the owner’s own minutes. Wrote down who decides what, with limits for each person. Recommended six moves of work to people who had time, and one owner for the customer after the order.",
        },
        {
          // Keep "Planned" until Premraj supplies the outcome.
          label: "What’s changed so far",
          text: "Planned: the six moves bring the owner’s day from over 120% to about 100%, before hiring anyone, and the decisions he takes himself from 12 to 7. The team now works this way, and results are reviewed every Monday.",
          emphasis: true,
        },
      ],
    },
  ] satisfies HomeStory[],
  trust:
    "In Bangalore I come to your business in person; across India we work online. Your numbers stay private: I will sign an NDA before you share them.",
  trustBy: "Premraj Menon",
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
  cta: {
    label: "Let’s have a quick introductory call",
    dataCta: "programmes",
    whatsappText: "Hi Premraj, I’d like a quick introductory call about my business.",
  },
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
