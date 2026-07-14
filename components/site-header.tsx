"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ShieldCheck, ArrowRight } from "lucide-react";
import { BrandLockup } from "./logo";
import { headerNav, primaryNav } from "@/data/site";

const moreNav = primaryNav.filter(
  (n) => !headerNav.some((h) => h.href === n.href)
);

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(15,35,70,0.05)]"
          : "border-b border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-brand flex h-16 items-center justify-between gap-4">
        <BrandLockup />

        <nav className="hidden items-center gap-1 lg:flex">
          {headerNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-blue" : "text-ink hover:text-blue"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-ink hover:text-blue"
              onClick={() => setMoreOpen((v) => !v)}
            >
              More <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full w-64 pt-2">
                <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-[var(--shadow-brand)]">
                  {moreNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2 transition-colors hover:bg-grey"
                    >
                      <span className="text-sm font-semibold text-navy">{item.label}</span>
                      {item.description && (
                        <span className="mt-0.5 block text-xs text-slate">{item.description}</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/verify"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-blue hover:text-blue"
          >
            <ShieldCheck className="h-4 w-4" /> Verify a Certificate
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-orange px-4 py-2 text-sm font-medium text-white shadow-[0_10px_24px_rgba(244,128,30,0.28)] transition hover:brightness-105"
          >
            Start Assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="container-brand max-h-[75vh] overflow-y-auto py-4">
            <div className="grid gap-1">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2.5 text-sm font-semibold text-navy hover:bg-grey"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 grid gap-2">
              <Link
                href="/verify"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-line px-4 py-3 text-sm font-medium text-ink"
              >
                <ShieldCheck className="h-4 w-4" /> Verify a Certificate
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-orange px-4 py-3 text-sm font-medium text-white"
              >
                Start Assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
