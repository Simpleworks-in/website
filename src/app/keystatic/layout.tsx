// Render Keystatic's admin in a clean shell — drop the public-site Nav,
// Footer, and WhatsApp button. Keystatic ships its own UI chrome and the
// global header was covering tooltips and Add-buttons.

export const metadata = {
  title: "Keystatic — Simpleworks CMS",
  robots: { index: false, follow: false },
};

export default function KeystaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="keystatic-shell relative z-[300] min-h-screen">
      {children}
    </div>
  );
}
