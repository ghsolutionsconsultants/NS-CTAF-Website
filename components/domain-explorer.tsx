"use client";

import { useState } from "react";
import { Icon } from "./icon";
import { domains } from "@/data/framework";
import { domainRationale } from "@/data/framework-detail";

// Accents for the light detail panel.
const ACCENT: Record<string, string> = {
  D1: "var(--color-blue-bright)",
  D2: "var(--color-blue)",
  D3: "var(--color-orange)",
  D4: "#0a3aa0",
  D5: "#1fb5a0",
  D6: "var(--color-slate)",
};

// The selected tab sits on navy, where the accents above are far too dark to
// read. These are the same hues lifted into a legible range on a dark surface.
const ACCENT_ON_DARK: Record<string, string> = {
  D1: "#7aa3e8",
  D2: "#9dbcf2",
  D3: "var(--color-orange)",
  D4: "#8fb0f0",
  D5: "#5fd3c2",
  D6: "#b6c4d6",
};

export function DomainExplorer() {
  const [active, setActive] = useState(domains[0].id);
  const d = domains.find((x) => x.id === active)!;
  const accent = ACCENT[d.id];

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      {/* Selector */}
      <div role="tablist" aria-label="Framework domains" className="flex flex-col gap-2">
        {domains.map((x) => {
          const on = x.id === active;
          return (
            <button
              key={x.id}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(x.id)}
              className={`group flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                on
                  ? "border-transparent bg-navy text-white shadow-[var(--shadow-brand)]"
                  : "border-line bg-white text-ink hover:-translate-y-0.5 hover:border-blue/30 hover:shadow-[var(--shadow-brand-sm)]"
              }`}
            >
              <span
                className="icon-pop flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                style={{
                  background: on ? ACCENT_ON_DARK[x.id] : "var(--color-blue-soft)",
                  color: on ? "var(--color-navy)" : "var(--color-blue)",
                }}
              >
                <Icon name={x.icon} className="h-[18px] w-[18px]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold">{x.title}</span>
                <span className={`text-[11px] ${on ? "text-blue-soft/70" : "text-slate"}`}>
                  {x.id} · {x.controlCount} controls
                </span>
              </span>
              <span
                className="tabular shrink-0 font-display text-sm font-bold"
                style={{ color: on ? ACCENT_ON_DARK[x.id] : "var(--color-navy)" }}
              >
                {x.weight}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail panel — keyed so it re-animates on every change */}
      <div
        key={d.id}
        className="animate-fade-up relative overflow-hidden rounded-[var(--radius-brand)] border border-line bg-white p-7 shadow-[var(--shadow-brand-sm)] md:p-9"
      >
        <span aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ background: accent }} />

        <div className="flex flex-wrap items-center gap-4">
          <span
            className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
            style={{ background: accent }}
          >
            <Icon name={d.icon} className="h-7 w-7" />
          </span>
          <div>
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate">
              {d.id}
            </div>
            <h3 className="font-display text-2xl font-bold text-navy">{d.title}</h3>
          </div>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-ink">{d.tagline}</p>
        <p className="mt-4 leading-relaxed text-slate">{d.scope}</p>

        <div className="mt-6 rounded-xl border-l-4 bg-grey p-5" style={{ borderColor: accent }}>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate">
            Why it carries {d.weight}% of the Trust Score
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink">{domainRationale[d.id]}</p>
        </div>

        {/* Weight bar */}
        <div className="mt-6">
          <div className="flex items-baseline justify-between text-xs text-slate">
            <span>Share of the Trust Score</span>
            <span className="tabular font-display text-base font-bold text-navy">{d.weight}%</span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ width: `${(d.weight / 22) * 100}%`, background: accent }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
