import KeystaticApp from "../keystatic";
import KeystaticClientPatches from "../PushStatePatch";

export const metadata = {
  title: "Keystatic — Simpleworks Consulting CMS",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <KeystaticClientPatches />
      <KeystaticApp />
    </>
  );
}
