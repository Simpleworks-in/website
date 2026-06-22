"use client";

import { useEffect, useState } from "react";

export default function ResourceDownloadModal({
  formActionUrl,
}: {
  formActionUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const [resource, setResource] = useState<{ title: string; file: string } | null>(
    null
  );
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle"
  );

  // Expose opener globally so resource cards (server-rendered) can trigger it.
  useEffect(() => {
    const openModal = (title: string, file: string) => {
      setResource({ title, file });
      setEmail("");
      setStatus("idle");
      setOpen(true);
    };
    (window as unknown as { __openResourceDownload?: typeof openModal }).__openResourceDownload =
      openModal;
  }, []);

  const close = () => setOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resource) return;
    setStatus("submitting");
    try {
      await fetch(formActionUrl, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          resource: resource.title,
          _subject: `Resource download request: ${resource.title}`,
        }),
      });
      setStatus("done");
      const link = document.createElement("a");
      link.href = resource.file;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch {
      setStatus("error");
    }
  };

  if (!open || !resource) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-6">
      <div className="relative w-full max-w-[440px] border border-rule bg-white p-8 md:p-10">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-5 top-5 text-[20px] leading-none text-light hover:text-red"
        >
          ×
        </button>

        {status === "done" ? (
          <>
            <p className="text-eyebrow uppercase tracking-wide-9 text-light">
              Download starting
            </p>
            <h3 className="mt-4 text-[22px] font-bold leading-[1.3] tracking-tight-1">
              Thanks — your download has started.
            </h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-mid">
              We&apos;ve also noted your interest in &ldquo;{resource.title}&rdquo;. If
              the download didn&apos;t begin automatically,{" "}
              <a href={resource.file} download className="font-semibold text-red underline">
                click here
              </a>
              .
            </p>
            <button
              onClick={close}
              className="mt-7 rounded-[1px] border-[1.5px] border-red bg-red px-6 py-3 font-serif text-[14px] tracking-wide-3 text-white transition-colors hover:bg-ink hover:border-ink"
            >
              Close
            </button>
          </>
        ) : (
          <>
            <p className="text-eyebrow uppercase tracking-wide-9 text-light">
              Download this resource
            </p>
            <h3 className="mt-4 text-[22px] font-bold leading-[1.3] tracking-tight-1">
              {resource.title}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-mid">
              Enter your email to start the download. We&apos;ll send the PDF link to
              you and may follow up with related insights — no spam, unsubscribe
              anytime.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="rounded-[1px] border-[0.5px] border-rule bg-white px-4 py-3 font-serif text-[15px] outline-none transition-colors focus:border-ink"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-[1px] border-[1.5px] border-red bg-red px-6 py-3 font-serif text-[14px] tracking-wide-3 text-white transition-colors hover:bg-ink hover:border-ink disabled:opacity-60"
              >
                {status === "submitting" ? "Preparing download…" : "Get the PDF →"}
              </button>
              {status === "error" && (
                <p className="text-[13px] text-red">
                  Something went wrong — please try again in a moment.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
