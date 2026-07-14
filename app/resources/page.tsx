import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { resources } from "@/data/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "The CTAF knowledge hub: whitepapers, certification and buyer guides, checklists, SBOM and secure-pipeline guidance, glossary, and FAQs.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources & knowledge hub"
        title="Thought leadership for software trust"
        intro="Guides, whitepapers, checklists, and references that educate the market, support assessment readiness, and build confidence in the framework."
      />
      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <div
                key={r.title}
                className="group flex flex-col rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-soft text-blue">
                    <Icon name={r.icon} className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-grey px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate">
                    {r.type}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{r.blurb}</p>
                <span className="mt-4 text-sm font-medium text-blue">Coming soon</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand title="Prepare for assessment with the right resources." intro="Get the executive whitepaper, certification guide, and readiness checklist." />
    </>
  );
}
