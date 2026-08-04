import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "./icon";
import { domains } from "@/data/framework";

export function DomainsGrid({ linked = true }: { linked?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {domains.map((d) => {
        const inner = (
          <div className="card-accent group flex h-full flex-col rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[var(--shadow-brand)]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-soft text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                <Icon name={d.icon} className="h-[22px] w-[22px]" />
              </div>
              <div className="text-right">
                <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate">
                  {d.id}
                </div>
                <div className="tabular font-display text-lg font-bold leading-tight text-navy">
                  {d.weight}%
                </div>
              </div>
            </div>

            <h3 className="mt-5 text-[1.0625rem] font-bold leading-snug text-navy">{d.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{d.tagline}</p>

            <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue">
                {d.controlCount} controls
              </span>
              {linked && (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate transition-colors group-hover:text-blue">
                  Explore <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              )}
            </div>
          </div>
        );
        return linked ? (
          <Link key={d.id} href={`/framework#${d.slug}`} className="h-full">
            {inner}
          </Link>
        ) : (
          <div key={d.id} className="h-full">
            {inner}
          </div>
        );
      })}
    </div>
  );
}
