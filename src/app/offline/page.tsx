import Link from "next/link";

export const metadata = {
  title: "Offline | Simpleworks",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-prose-col flex-col justify-center px-6 py-20">
      <p className="text-eyebrow uppercase tracking-wide-9 text-red">
        You&rsquo;re offline
      </p>
      <h1 className="mt-4 text-[36px] font-bold leading-[1.12] tracking-tight-2 md:text-[52px]">
        No internet connection.
      </h1>
      <p className="mt-6 text-[17px] leading-[1.78] text-mid">
        It looks like you&rsquo;ve lost your connection. The pages you&rsquo;ve
        already visited are still available. Try one of these, or reconnect and
        refresh:
      </p>
      <ul className="mt-8 flex flex-col gap-2 text-[16px] text-ink">
        <li>
          <Link className="text-red hover:underline" href="/">
            → Home
          </Link>
        </li>
        <li>
          <Link className="text-red hover:underline" href="/about">
            → About Prem
          </Link>
        </li>
        <li>
          <Link className="text-red hover:underline" href="/blog">
            → Blog
          </Link>
        </li>
        <li>
          <Link className="text-red hover:underline" href="/contact">
            → Contact
          </Link>
        </li>
      </ul>
    </main>
  );
}
