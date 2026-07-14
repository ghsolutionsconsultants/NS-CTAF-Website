import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { RegistryEntry } from "@/data/registry";
import { ctaColor, statusColor } from "@/data/certification";

export function RegistryCard({ entry }: { entry: RegistryEntry }) {
  return (
    <Link
      href={`/registry/${entry.slug}`}
      className="group flex flex-col rounded-[var(--radius-brand)] border border-line bg-white p-5 shadow-[var(--shadow-brand-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display font-bold text-navy group-hover:text-blue">{entry.company}</h3>
          <p className="text-sm text-slate">{entry.product}</p>
        </div>
        <span
          className="flex-shrink-0 rounded-full px-2.5 py-1 text-xs font-bold text-white"
          style={{ background: ctaColor(entry.level) }}
        >
          {entry.level}
        </span>
      </div>
      <div className="mt-4 flex items-center gap-1.5 text-xs text-slate">
        <MapPin className="h-3.5 w-3.5" /> {entry.country} · {entry.continent} · {entry.sector}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: statusColor(entry.status) }}>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: statusColor(entry.status) }} />
          {entry.status}
        </span>
        <span className="font-mono text-[11px] text-slate">{entry.certId}</span>
      </div>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue opacity-0 transition-opacity group-hover:opacity-100">
        View profile <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
