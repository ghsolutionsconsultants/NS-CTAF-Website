"use client";

import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import { domains } from "@/data/framework";
import { ctaLevels, HARD_GATES } from "@/data/certification";

const LEVEL_LABEL = ["", "Initial", "Developing", "Defined", "Managed", "Optimised"];

type Levels = Record<string, number>;

const PRESETS: { name: string; blurb: string; levels: number[] }[] = [
  { name: "Scanning only", blurb: "Tools in place, little evidence", levels: [2, 1, 3, 2, 1, 1] },
  { name: "Maturing", blurb: "Standardised and owned", levels: [3, 3, 3, 3, 2, 3] },
  { name: "Continuously assured", blurb: "Automated and evidenced", levels: [5, 5, 4, 4, 4, 4] },
];

function initial(): Levels {
  return Object.fromEntries(domains.map((d, i) => [d.id, PRESETS[1].levels[i]]));
}

export function TrustScoreSimulator() {
  const [levels, setLevels] = useState<Levels>(initial);

  const { score, contributions } = useMemo(() => {
    const contributions = domains.map((d) => ({
      id: d.id,
      title: d.title,
      weight: d.weight,
      level: levels[d.id],
      // A domain contributes (level / 5) of its full weight.
      points: (levels[d.id] / 5) * d.weight,
    }));
    return {
      score: Math.round(contributions.reduce((t, c) => t + c.points, 0)),
      contributions,
    };
  }, [levels]);

  // Highest level whose Trust Score threshold the score clears.
  const thresholds = [
    { id: "CTA-4", min: 78 },
    { id: "CTA-3", min: 62 },
    { id: "CTA-2", min: 48 },
    { id: "CTA-1", min: 30 },
  ];
  const reached = thresholds.find((t) => score >= t.min);
  const level = reached ? ctaLevels.find((l) => l.id === reached.id) : undefined;
  const next = reached
    ? thresholds[thresholds.indexOf(reached) - 1]
    : thresholds[thresholds.length - 1];

  const accent = level?.colorVar ?? "var(--color-slate)";
  // The big score sits on a light panel, where CTA-4's brand orange is not
  // legible; inkVar is the same hue darkened to clear contrast.
  const accentInk = level?.inkVar ?? "var(--color-slate)";

  return (
    <div className="overflow-hidden rounded-[calc(var(--radius-brand)+4px)] border border-line bg-white shadow-[var(--shadow-brand)]">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        {/* Controls */}
        <div className="border-b border-line p-6 md:p-8 lg:border-b-0 lg:border-r">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-display text-lg font-bold text-navy">Set your maturity</h3>
              <p className="mt-1 text-sm text-slate">Rate each domain from L1 to L5.</p>
            </div>
            <button
              onClick={() => setLevels(initial())}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-slate transition hover:border-blue hover:text-blue"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.name}
                onClick={() =>
                  setLevels(Object.fromEntries(domains.map((d, i) => [d.id, p.levels[i]])))
                }
                title={p.blurb}
                className="rounded-full border border-line bg-grey px-3 py-1.5 text-xs font-medium text-ink transition hover:border-blue hover:bg-blue-soft hover:text-blue"
              >
                {p.name}
              </button>
            ))}
          </div>

          <div className="mt-7 space-y-5">
            {domains.map((d) => (
              <div key={d.id}>
                <div className="flex items-baseline justify-between gap-3">
                  <label htmlFor={`sim-${d.id}`} className="text-sm font-medium text-navy">
                    <span className="tabular font-mono text-xs text-slate">{d.id}</span>{" "}
                    {d.title}
                  </label>
                  <span className="tabular shrink-0 text-xs text-slate">
                    {d.weight}% weight
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <input
                    id={`sim-${d.id}`}
                    type="range"
                    min={1}
                    max={5}
                    step={1}
                    value={levels[d.id]}
                    onChange={(e) =>
                      setLevels((s) => ({ ...s, [d.id]: Number(e.target.value) }))
                    }
                    className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-line accent-[var(--color-blue)]"
                    aria-valuetext={`L${levels[d.id]} ${LEVEL_LABEL[levels[d.id]]}`}
                  />
                  <span className="w-28 shrink-0 text-right text-xs font-semibold text-blue">
                    L{levels[d.id]} · {LEVEL_LABEL[levels[d.id]]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="bg-soft p-6 md:p-8">
          <h3 className="font-display text-lg font-bold text-navy">Indicative result</h3>

          <div className="mt-6 flex items-end gap-4">
            <div
              className="tabular font-display text-[4rem] font-bold leading-none transition-colors duration-500"
              style={{ color: accentInk }}
            >
              {score}
            </div>
            <div className="pb-2">
              <div className="text-sm font-semibold text-slate">/ 100 Trust Score</div>
              <div className="mt-1 text-xs text-slate">
                {level ? `Clears ${level.id} ${level.name}` : `Below CTA-1 (needs ${next.min})`}
              </div>
            </div>
          </div>

          {/* Threshold track */}
          <div className="relative mt-6 h-2.5 w-full overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ width: `${score}%`, background: accent }}
            />
          </div>
          <div className="mt-2 flex justify-between text-[10px] font-semibold uppercase tracking-wider text-slate">
            {thresholds
              .slice()
              .reverse()
              .map((t) => (
                <span key={t.id} className={score >= t.min ? "text-blue" : ""}>
                  {t.id} · {t.min}
                </span>
              ))}
          </div>

          {/* Contribution breakdown */}
          <div className="mt-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate">
              Where the score comes from
            </div>
            <div className="mt-3 space-y-2.5">
              {contributions.map((c) => (
                <div key={c.id} className="flex items-center gap-3">
                  <span className="tabular w-7 shrink-0 font-mono text-[11px] font-semibold text-slate">
                    {c.id}
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-line">
                    <div
                      className="h-full rounded-full bg-blue transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{ width: `${(c.points / c.weight) * 100}%` }}
                    />
                  </div>
                  <span className="tabular w-16 shrink-0 text-right text-[11px] text-slate">
                    {c.points.toFixed(1)} / {c.weight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-7 border-t border-line pt-4 text-xs leading-relaxed text-slate">
            Indicative only. A real assessment rates all 86 controls individually across five
            scoring axes, and {HARD_GATES} hard gates must pass before any level is awarded —
            regardless of score.
          </p>
        </div>
      </div>
    </div>
  );
}
