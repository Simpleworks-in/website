// Outline WhatsApp mark, drawn in the button's own text colour (no WhatsApp
// green: it is not a brand colour). Sized in em so it matches whatever font
// size the button uses, and aligned to the text baseline so it works inside
// inline-block buttons without changing their layout.
export default function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`inline-block h-[1.25em] w-[1.25em] shrink-0 align-[-0.3em] mr-[0.5em] ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 20.8l4.5-1.2A8.8 8.8 0 1 0 12 3.2Z" />
      <path d="M9 7.9c-.4 0-.9.4-.9 1.2 0 2.9 3 6 5.9 6 .8 0 1.2-.5 1.2-.9l-.1-.9-1.6-.8-.9.9a5 5 0 0 1-2.4-2.4l.9-.9-.8-1.6-.9-.1Z" />
    </svg>
  );
}
