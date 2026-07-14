"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { RegistryCard } from "./registry-card";
import { registry, continents, countries, sectors, years } from "@/data/registry";
import { ctaLevels } from "@/data/certification";

const levels = ctaLevels.map((l) => l.id);
const statuses = ["Active", "Expiring Soon", "Expired", "Suspended", "Withdrawn", "Superseded"];

type Filters = {
  continent: string;
  country: string;
  sector: string;
  level: string;
  status: string;
  year: string;
};

const empty: Filters = { continent: "", country: "", sector: "", level: "", status: "", year: "" };

export function RegistrySearch() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Filters>(empty);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return registry.filter((r) => {
      if (q && !(
        r.company.toLowerCase().includes(q) ||
        r.product.toLowerCase().includes(q) ||
        r.certId.toLowerCase().includes(q)
      )) return false;
      if (filters.continent && r.continent !== filters.continent) return false;
      if (filters.country && r.country !== filters.country) return false;
      if (filters.sector && r.sector !== filters.sector) return false;
      if (filters.level && r.level !== filters.level) return false;
      if (filters.status && r.status !== filters.status) return false;
      if (filters.year && !r.issueDate.startsWith(filters.year)) return false;
      return true;
    });
  }, [query, filters]);

  const activeCount = Object.values(filters).filter(Boolean).length;

  return (
    <div>
      <div className="rounded-[var(--radius-brand)] border border-line bg-white p-5 shadow-[var(--shadow-brand-sm)]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by company, product, or certificate ID…"
            className="w-full rounded-full border border-line bg-white py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/15"
          />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          <FilterSelect label="Continent" value={filters.continent} options={continents} onChange={(v) => setFilters((f) => ({ ...f, continent: v }))} />
          <FilterSelect label="Country" value={filters.country} options={countries} onChange={(v) => setFilters((f) => ({ ...f, country: v }))} />
          <FilterSelect label="Sector" value={filters.sector} options={sectors} onChange={(v) => setFilters((f) => ({ ...f, sector: v }))} />
          <FilterSelect label="Level" value={filters.level} options={levels} onChange={(v) => setFilters((f) => ({ ...f, level: v }))} />
          <FilterSelect label="Status" value={filters.status} options={statuses} onChange={(v) => setFilters((f) => ({ ...f, status: v }))} />
          <FilterSelect label="Year" value={filters.year} options={years} onChange={(v) => setFilters((f) => ({ ...f, year: v }))} />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate">
            <SlidersHorizontal className="h-4 w-4" />
            {activeCount > 0 ? `${activeCount} filter${activeCount > 1 ? "s" : ""} active` : "No filters"}
          </div>
          {(activeCount > 0 || query) && (
            <button
              onClick={() => {
                setFilters(empty);
                setQuery("");
              }}
              className="inline-flex items-center gap-1 text-sm font-medium text-blue hover:text-blue-bright"
            >
              <X className="h-3.5 w-3.5" /> Clear all
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-slate">
          Showing <span className="font-semibold text-navy">{filtered.length}</span> of {registry.length} certified companies
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e) => (
            <RegistryCard key={e.slug} entry={e} />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-[var(--radius-brand)] border border-dashed border-line bg-grey p-16 text-center text-slate">
          No certified companies match your search.
        </div>
      )}
    </div>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink outline-none transition focus:border-blue"
      >
        <option value="">All</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
