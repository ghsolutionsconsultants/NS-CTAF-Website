import { Check } from "lucide-react";
import { ctaLevels } from "@/data/certification";

export function CtaLevelCards({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {ctaLevels.map((lvl) => (
        <div
          key={lvl.id}
          className="relative flex flex-col overflow-hidden rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]"
        >
          <span
            className="absolute inset-x-0 top-0 h-1.5"
            style={{ background: lvl.colorVar }}
          />
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-sm font-semibold" style={{ color: lvl.inkVar }}>
              {lvl.id}
            </span>
            <span
              className="rounded-full px-2.5 py-1 text-xs font-semibold"
              style={{
                background: `color-mix(in srgb, ${lvl.inkVar} 10%, white)`,
                color: lvl.inkVar,
              }}
            >
              Trust {lvl.trustScore}
            </span>
          </div>
          <h3 className="mt-3 text-xl font-bold text-navy">{lvl.name}</h3>
          <p className="mt-1 text-xs font-medium text-slate">{lvl.controls}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{lvl.meaning}</p>
          {detailed && (
            <ul className="mt-4 space-y-2 border-t border-line pt-4">
              {lvl.requirements.map((r) => (
                <li key={r} className="flex gap-2 text-xs text-ink">
                  <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" style={{ color: lvl.inkVar }} />
                  {r}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
