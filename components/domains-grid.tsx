import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "./icon";
import { domains } from "@/data/framework";

export function DomainsGrid({ linked = true }: { linked?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {domains.map((d) => {
        const inner = (
          <div className="group flex h-full flex-col rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-soft text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                <Icon name={d.icon} className="h-6 w-6" />
              </div>
              <div className="text-right">
                <div className="font-mono text-xs font-semibold text-slate">{d.id}</div>
                <div className="font-display text-lg font-bold text-navy">{d.weight}%</div>
              </div>
            </div>
            <h3 className="mt-5 text-lg font-bold text-navy">{d.title}</h3>
            <p className="mt-1 text-sm font-medium text-blue">{d.controlCount} controls</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{d.tagline}</p>
            {linked && (
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue opacity-0 transition-opacity group-hover:opacity-100">
                Explore domain <ArrowUpRight className="h-4 w-4" />
              </span>
            )}
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
