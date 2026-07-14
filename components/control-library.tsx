"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import {
  controls,
  domains,
  controlStandards,
  evidenceTiers,
  type DomainId,
} from "@/data/framework";

const domainColor: Record<DomainId, string> = {
  D1: "var(--color-blue-bright)",
  D2: "var(--color-blue)",
  D3: "var(--color-orange)",
  D4: "#0a3aa0",
  D5: "#1fb5a0",
  D6: "var(--color-slate)",
};

const ctaLevelsList = ["CTA-1", "CTA-2", "CTA-3", "CTA-4"];
const tierList = evidenceTiers.map((t) => t.tier);

export function ControlLibrary() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<DomainId | "ALL">("ALL");
  const [tier, setTier] = useState("");
  const [standard, setStandard] = useState("");
  const [relevance, setRelevance] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return controls.filter((c) => {
      if (active !== "ALL" && c.domain !== active) return false;
      if (tier && c.evidenceTier !== tier) return false;
      if (standard && !c.standards.includes(standard)) return false;
      if (relevance && c.certRelevance !== relevance) return false;
      if (
        q &&
        !(
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.id.toLowerCase().includes(q)
        )
      )
        return false;
      return true;
    });
  }, [query, active, tier, standard, relevance]);

  const hasFilters = tier || standard || relevance || active !== "ALL" || query;

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by control ID, name, or keyword…"
            className="w-full rounded-full border border-line bg-white py-3 pl-11 pr-10 text-sm text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/15"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate hover:text-ink"
              aria-label="Clear"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="text-sm text-slate">
          <span className="font-semibold text-navy">{filtered.length}</span> of {controls.length} controls
        </div>
      </div>

      {/* Domain filter chips */}
      <div className="mt-5 flex flex-wrap gap-2">
        <FilterChip label="All domains" activeState={active === "ALL"} onClick={() => setActive("ALL")} />
        {domains.map((d) => (
          <FilterChip
            key={d.id}
            label={`${d.id} · ${d.title}`}
            activeState={active === d.id}
            color={domainColor[d.id]}
            onClick={() => setActive(active === d.id ? "ALL" : d.id)}
          />
        ))}
      </div>

      {/* Facet selects (§7.2: evidence, mapped standard, certification relevance) */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <FacetSelect label="Evidence required" value={tier} onChange={setTier} options={tierList}
          render={(t) => `${t} · ${evidenceTiers.find((e) => e.tier === t)?.name}`} />
        <FacetSelect label="Mapped standard" value={standard} onChange={setStandard} options={controlStandards} />
        <FacetSelect label="Certification relevance" value={relevance} onChange={setRelevance} options={ctaLevelsList} />
      </div>

      {hasFilters && (
        <div className="mt-3">
          <button
            onClick={() => {
              setQuery("");
              setActive("ALL");
              setTier("");
              setStandard("");
              setRelevance("");
            }}
            className="inline-flex items-center gap-1 text-sm font-medium text-blue hover:text-blue-bright"
          >
            <X className="h-3.5 w-3.5" /> Clear all filters
          </button>
        </div>
      )}

      <div className="thin-scroll mt-6 max-h-[560px] overflow-auto rounded-[var(--radius-brand)] border border-line">
        <table className="w-full min-w-[820px] border-collapse text-left text-sm">
          <thead className="sticky top-0 z-10 bg-grey">
            <tr className="text-xs uppercase tracking-wider text-slate">
              <th className="px-4 py-3 font-semibold">ID</th>
              <th className="px-4 py-3 font-semibold">Control</th>
              <th className="hidden px-4 py-3 font-semibold lg:table-cell">What it assesses</th>
              <th className="px-4 py-3 font-semibold">Evidence</th>
              <th className="px-4 py-3 font-semibold">Min. maturity</th>
              <th className="px-4 py-3 font-semibold">Relevance</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-t border-line align-top transition-colors hover:bg-blue-soft/40">
                <td className="whitespace-nowrap px-4 py-3">
                  <span
                    className="rounded-md px-2 py-1 font-mono text-xs font-semibold"
                    style={{
                      color: domainColor[c.domain],
                      background: `color-mix(in srgb, ${domainColor[c.domain]} 12%, white)`,
                    }}
                  >
                    {c.id}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium text-navy">{c.name}</div>
                  <div className="mt-1 flex flex-wrap gap-1 lg:hidden">
                    {c.standards.map((s) => (
                      <span key={s} className="rounded bg-grey px-1.5 py-0.5 text-[10px] text-slate">{s}</span>
                    ))}
                  </div>
                </td>
                <td className="hidden px-4 py-3 text-slate lg:table-cell">{c.description}</td>
                <td className="whitespace-nowrap px-4 py-3">
                  <span className="rounded-md bg-navy/5 px-2 py-1 font-mono text-xs font-semibold text-navy">
                    {c.evidenceTier}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-slate">{c.maturityExpectation}+</td>
                <td className="whitespace-nowrap px-4 py-3">
                  <span className="rounded-full bg-blue-soft px-2 py-0.5 text-xs font-semibold text-blue">
                    {c.certRelevance}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center text-slate">
                  No controls match the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FacetSelect({
  label,
  value,
  onChange,
  options,
  render,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  render?: (v: string) => string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-blue"
      >
        <option value="">All</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {render ? render(o) : o}
          </option>
        ))}
      </select>
    </label>
  );
}

function FilterChip({
  label,
  activeState,
  onClick,
  color,
}: {
  label: string;
  activeState: boolean;
  onClick: () => void;
  color?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
        activeState
          ? "border-transparent bg-navy text-white"
          : "border-line bg-white text-ink hover:border-blue hover:text-blue"
      }`}
    >
      {color && <span className="h-2 w-2 rounded-full" style={{ background: color }} />}
      {label}
    </button>
  );
}
