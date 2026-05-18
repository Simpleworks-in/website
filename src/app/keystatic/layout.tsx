import KeystaticApp from "./keystatic";

export const metadata = {
  title: "Keystatic — Simpleworks CMS",
  robots: { index: false, follow: false },
};

export default function Layout() {
  return <KeystaticApp />;
}
