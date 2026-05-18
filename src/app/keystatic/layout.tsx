// Render Keystatic's admin in a clean shell — drop the public-site Nav,
// Footer, and WhatsApp button. Keystatic ships its own UI chrome and the
// global header was covering tooltips and Add-buttons.
//
// We can't undo the parent `app/layout.tsx` from here, but we can wrap
// children in a full-viewport container that's stacked above everything
// else, then hide the page's body chrome via CSS in globals.css.

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
    <div className="keystatic-shell relative z-[300] min-h-screen bg-white">
      {children}
    </div>
  );
}
