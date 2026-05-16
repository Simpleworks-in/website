import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--text)",
        mid: "var(--mid)",
        light: "var(--light)",
        red: "var(--red)",
        rule: "var(--rule)",
        warm: "var(--warm)",
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
