import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Lora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ED1C24" },
    { media: "(prefers-color-scheme: dark)", color: "#ED1C24" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://simpleworks.in"),
  title: {
    default: "Simpleworks | Business Consultant in Bengaluru",
    template: "%s | Simpleworks",
  },
  description:
    "Simpleworks is an independent management consulting firm in Bengaluru helping Indian MSMEs grow. Simple, executable strategy. Led by Prem Menon — 39 years of experience.",
  applicationName: "Simpleworks",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Simpleworks",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://simpleworks.in",
    siteName: "Simpleworks Consulting",
  },
  alternates: {
    canonical: "https://simpleworks.in",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
      <head>
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KHTKH87J');`}
        </Script>
      </head>
      <body className="font-serif text-ink bg-bg">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KHTKH87J"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
