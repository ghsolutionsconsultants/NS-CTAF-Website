import Link from "next/link";
import { Logo } from "./logo";
import { footerNav, site } from "@/data/site";
import { Mail, ArrowRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-mesh text-white">
      <div className="container-brand py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="inline-flex rounded-xl bg-white px-3 py-2">
              <Logo variant="full" className="h-8 w-auto" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-blue-soft/80">
              {site.fullName}. The global framework for measuring, evidencing, and
              certifying software trust — created by {site.owner}.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-orange"
            >
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-105"
              >
                Get Assessed <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <h4 className="font-display text-sm font-semibold !text-white">{col.heading}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item.href + item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-blue-soft/75 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-blue-soft/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.owner}. {site.frameworkVersion}. Confidential
            framework material.
          </p>
          <p className="font-mono uppercase tracking-wider">
            {site.category}
          </p>
        </div>
      </div>
    </footer>
  );
}
