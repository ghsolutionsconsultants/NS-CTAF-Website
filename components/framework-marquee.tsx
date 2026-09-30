import { alignments } from "@/data/alignments";

// Infinite scroll of the aligned standards. The track is duplicated so the loop
// is seamless; the copy is aria-hidden so screen readers read the list once.
export function FrameworkMarquee() {
  const items = alignments.map((a) => a.name);
  const Track = ({ hidden = false }: { hidden?: boolean }) => (
    <div className="marquee__track" aria-hidden={hidden || undefined}>
      {items.map((name) => (
        <span
          key={name}
          className="whitespace-nowrap rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs font-medium text-blue-soft/80"
        >
          {name}
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee">
      <Track />
      <Track hidden />
    </div>
  );
}
