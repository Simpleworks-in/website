"use client";

export default function ResourceDownloadButton({
  title,
  file,
}: {
  title: string;
  file: string;
}) {
  return (
    <button
      onClick={() => (window as any).__openResourceDownload?.(title, file)}
      className="text-[13px] font-semibold tracking-wide-2 text-red"
    >
      Download PDF{" "}
      <span className="inline-block transition-transform group-hover:translate-x-1">
        ↓
      </span>
    </button>
  );
}
