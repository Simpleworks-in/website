import KeystaticApp from "../keystatic";
import PushStatePatch from "../PushStatePatch";

export const metadata = {
  title: "Keystatic — Simpleworks CMS",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <PushStatePatch />
      <KeystaticApp />
    </>
  );
}
