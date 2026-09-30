"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ShieldX, Search, ArrowRight } from "lucide-react";
import { findByCertId, type RegistryEntry } from "@/data/registry";
import { ctaColor, ctaLevels, ctaOnColor, statusColor } from "@/data/certification";

type Result = { state: "idle" } | { state: "found"; entry: RegistryEntry } | { state: "missing"; q: string };

export function VerifyWidget() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<Result>({ state: "idle" });

  function verify(e: React.FormEvent) {
    e.preventDefault();
    const q = value.trim();
    if (!q) return;
    const entry = findByCertId(q);
    setResult(entry ? { state: "found", entry } : { state: "missing", q });
  }

  return (
    <div>
      <form onSubmit={verify} className="rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)]">
        <label className="block text-sm font-semibold text-navy">Certificate ID</label>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="e.g. NS/CTA-4/2026/0017"
              className="w-full rounded-full border border-line bg-white py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/15"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-bright"
          >
            <ShieldCheck className="h-4 w-4" /> Verify
          </button>
        </div>
        <p className="mt-3 text-xs text-slate">
          Try a specimen: NS/CTA-1/2026/0041 · NS/CTA-2/2026/0058 · NS/CTA-3/2026/0029 · NS/CTA-4/2026/0017
        </p>
      </form>

      {result.state === "found" && (
        <div className="mt-6 overflow-hidden rounded-[var(--radius-brand)] border border-status-active/40 bg-white shadow-[var(--shadow-brand)]">
          <div className="flex items-center gap-3 bg-status-active/10 px-6 py-4">
            <ShieldCheck className="h-6 w-6 text-status-active" />
            <span className="font-display font-bold text-navy">Certificate verified</span>
          </div>
          <div className="grid gap-5 p-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="font-display text-xl font-bold text-navy">{result.entry.company}</h3>
              <p className="text-sm text-slate">{result.entry.product}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span
                  className="rounded-full px-2.5 py-1 text-xs font-bold"
                  style={{ background: ctaColor(result.entry.level), color: ctaOnColor(result.entry.level) }}
                >
                  {result.entry.level} · {ctaLevels.find((l) => l.id === result.entry.level)?.name}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: statusColor(result.entry.status) }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: statusColor(result.entry.status) }} />
                  {result.entry.status}
                </span>
                <span className="font-mono text-xs text-slate">{result.entry.certId}</span>
              </div>
              <p className="mt-3 text-xs text-slate">
                Issued {result.entry.issueDate} · Expires {result.entry.expiryDate} · Trust Score {result.entry.trustScore}/100
              </p>
            </div>
            <Link
              href={`/registry/${result.entry.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition hover:bg-ink"
            >
              View full profile <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}

      {result.state === "missing" && (
        <div className="mt-6 flex items-start gap-3 rounded-[var(--radius-brand)] border border-status-expired/40 bg-status-expired/5 p-6">
          <ShieldX className="h-6 w-6 flex-shrink-0 text-status-expired" />
          <div>
            <h3 className="font-display font-bold text-navy">No certificate found</h3>
            <p className="mt-1 text-sm text-slate">
              We couldn’t find a certificate matching “{result.q}”. Check the ID and try again, or
              browse the{" "}
              <Link href="/registry" className="font-medium text-blue hover:text-blue-bright">
                Trust Registry
              </Link>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
