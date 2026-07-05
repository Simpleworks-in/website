export default function ResourceDownloadButton({
  file,
}: {
  title: string;
  file: string;
}) {
  return (
    <a
      href={file}
      download
      className="text-[13px] font-semibold tracking-wide-2 text-red"
    >
      Download PDF{" "}
      <span className="inline-block transition-transform group-hover:translate-x-1">
        ↓
      </span>
    </a>
  );
}
