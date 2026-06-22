import type { Config } from "tailwindcss";

// Lets Tailwind's color-opacity utilities (e.g. bg-ink/60) generate working
// CSS for our CSS-variable-backed brand colors. Plain `var(--x)` strings
// don't support the `/<alpha>` modifier; this `rgb(var(--x-rgb) / <alpha>)`
// form does. Requires a matching `--x-rgb: R G B` triplet in globals.css.
function withOpacity(rgbVar: string): string {
  const fn = ({ opacityValue }: { opacityValue?: string }) =>
    opacityValue === undefined
      ? `rgb(var(${rgbVar}))`
      : `rgb(var(${rgbVar}) / ${opacityValue})`;
  // Tailwind accepts a color callback at runtime; its TS types only declare
  // string/RecursiveKeyValuePair, so we cast to match the declared type.
  return fn as unknown as string;
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: withOpacity("--bg-rgb"),
        ink: withOpacity("--text-rgb"),
        mid: withOpacity("--mid-rgb"),
        light: withOpacity("--light-rgb"),
        red: withOpacity("--red-rgb"),
        rule: withOpacity("--rule-rgb"),
        warm: withOpacity("--warm-rgb"),
        wa: "#25D366",
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "Times New Roman", "serif"],
      },
      letterSpacing: {
        "tight-1": "-0.01em",
        "tight-2": "-0.02em",
        "tight-3": "-0.04em",
        "wide-1": "0.01em",
        "wide-2": "0.02em",
        "wide-3": "0.04em",
        "wide-4": "0.08em",
        "wide-5": "0.10em",
        "wide-6": "0.12em",
        "wide-7": "0.13em",
        "wide-8": "0.14em",
        "wide-9": "0.15em",
        "wide-10": "0.16em",
      },
      fontSize: {
        eyebrow: ["10px", { lineHeight: "16px" }],
        "eyebrow-lg": ["11px", { lineHeight: "16px" }],
        "hero-h1": ["52px", { lineHeight: "1.12" }],
        "about-name": ["58px", { lineHeight: "1.05" }],
        "sec-h2": ["47px", { lineHeight: "1.18" }],
        "auth-big": ["130px", { lineHeight: "1" }],
      },
      maxWidth: {
        "body-text": "560px",
        "prose-col": "640px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease both",
        "fade-in": "fadeIn 1s ease both",
      },
    },
  },
  plugins: [],
};
export default config;
