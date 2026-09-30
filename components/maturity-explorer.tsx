"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { maturityDetail } from "@/data/framework-detail";

export function MaturityExplorer() {
  const [active, setActive] = useState(2); // L3 — the regulatory baseline
  const m = maturityDetail[active];

  return (
    <div>
      {/* Level rail */}
      <div className="relative">
        <div aria-hidden className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-line" />
        <div className="relative grid grid-cols-5 gap-2">
          {maturityDetail.map((lvl, i) => {
            const on = i === active;
            const passed = i <= active;
            return (
              <button
                key={lvl.level}
                onClick={() => setActive(i)}
                aria-pressed={on}
                className="group flex flex-col items-center gap-2"
              >
                <span
                  className={`flex items-center justify-center rounded-full font-display font-bold text-white transition-all duration-300 ${
                    on ? "h-14 w-14 text-lg shadow-[var(--shadow-brand)]" : "h-10 w-10 text-sm group-hover:scale-110"
                  }`}
                  style={{
                    background: passed ? `var(--color-l${i + 1})` : "var(--color-line)",
                    color: passed ? "#fff" : "var(--color-slate)",
                  }}
                >
                  L{i + 1}
                </span>
                <span
                  className={`text-center text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                    on ? "text-navy" : "text-slate"
                  }`}
                >
                  {lvl.level.split(" — ")[1]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail */}
      <div
        key={m.level}
        className="animate-fade-up mt-8 grid gap-6 rounded-[var(--radius-brand)] border border-line bg-white p-7 shadow-[var(--shadow-brand-sm)] md:grid-cols-[1fr_1fr] md:p-9"
      >
        <div>
          <div className="flex items-baseline gap-3">
            <h3 className="font-display text-2xl font-bold text-navy">{m.level}</h3>
            <span className="tabular rounded-full bg-blue-soft px-2.5 py-1 font-mono text-xs font-semibold text-blue">
              Score {m.score}
            </span>
          </div>
          <p className="mt-4 leading-relaxed text-slate">{m.meaning}</p>
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate">
            What it looks like in practice
          </div>
          <ul className="mt-3 space-y-2.5">
            {m.characteristics.map((c) => (
              <li key={c} className="flex gap-2.5 text-sm text-ink">
                <Check
                  className="mt-0.5 h-4 w-4 flex-shrink-0"
                  style={{ color: `var(--color-l${active + 1})` }}
                />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
