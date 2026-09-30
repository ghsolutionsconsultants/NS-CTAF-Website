import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { RegistryEntry } from "@/data/registry";
import { ctaColor, ctaOnColor, statusColor } from "@/data/certification";

export function RegistryCard({ entry }: { entry: RegistryEntry }) {
  return (
    <Link
      href={`/registry/${entry.slug}`}
      className="card-accent group flex h-full flex-col rounded-[var(--radius-brand)] border border-line bg-white p-5 shadow-[var(--shadow-brand-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[var(--shadow-brand)]"
    >
      {/* Level badge sits on its own line so long company names never collide */}
      <div className="flex items-center justify-between gap-3">
        <span
          className="rounded-full px-2.5 py-1 text-[11px] font-bold leading-none"
          style={{ background: ctaColor(entry.level), color: ctaOnColor(entry.level) }}
        >
          {entry.level}
        </span>
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold"
          style={{ color: statusColor(entry.status) }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: statusColor(entry.status) }}
          />
          {entry.status}
        </span>
      </div>

      <h3 className="mt-4 font-display text-base font-bold leading-snug text-navy transition-colors group-hover:text-blue">
        {entry.company}
      </h3>
      <p className="mt-1 text-sm leading-snug text-slate">{entry.product}</p>

      <div className="mt-3 flex flex-1 items-start gap-1.5 text-xs leading-snug text-slate">
        <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
        <span>
          {entry.country} · {entry.continent} · {entry.sector}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between gap-2 border-t border-line pt-3">
        <span className="tabular font-mono text-[11px] text-slate">{entry.certId}</span>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate transition-colors group-hover:text-blue">
          View <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
