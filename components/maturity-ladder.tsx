import { maturityLevels } from "@/data/framework";

const levelColor = [
  "var(--color-l1)",
  "var(--color-l2)",
  "var(--color-l3)",
  "var(--color-l4)",
  "var(--color-l5)",
];

export function MaturityLadder() {
  return (
    <div className="space-y-3">
      {maturityLevels.map((m, i) => (
        <div
          key={m.level}
          className="group grid grid-cols-[auto_1fr] items-start gap-4 rounded-[var(--radius-brand)] border border-line bg-white p-5 transition-shadow hover:shadow-[var(--shadow-brand-sm)] md:grid-cols-[120px_1fr]"
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl font-display text-lg font-bold text-white"
              style={{ background: levelColor[i] }}
            >
              {m.level}
            </div>
            <div className="hidden md:block">
              <div className="font-display font-bold text-navy">{m.name}</div>
              <div className="text-xs text-slate">{m.type}</div>
            </div>
          </div>
          <div>
            <div className="mb-1 flex items-center gap-2 md:hidden">
              <span className="font-display font-bold text-navy">{m.name}</span>
              <span className="text-xs text-slate">· {m.type}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate">{m.definition}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
