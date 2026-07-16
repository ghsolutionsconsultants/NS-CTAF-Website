import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { industries } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Why NS-CTAF matters to software vendors, banks, SaaS, open source, AI companies, regulators, investors, and critical infrastructure.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Why NS-CTAF matters to your sector"
        intro="Different buyers face different trust problems. Each sector page explains the trust problem, priority domains, target certification level, and business value."
      />
      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group flex flex-col rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-soft text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                  <Icon name={ind.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{ind.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{ind.focus}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue">
                  Read more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
