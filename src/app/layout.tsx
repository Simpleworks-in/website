import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://simpleworks.in"),
  title: {
    default: "Simpleworks | Business Consultant in Bengaluru",
    template: "%s | Simpleworks",
  },
  description:
    "Simpleworks is an independent management consulting firm in Bengaluru helping Indian MSMEs grow. Simple, executable strategy. Led by Prem Menon — 39 years of experience.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://simpleworks.in",
    siteName: "Simpleworks Consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" className={lora.variable}>
      <body className="font-serif text-ink bg-bg">
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
