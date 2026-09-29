import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { trainingTracks } from "@/data/content";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Training & Enablement",
  description:
    "Role-based Nucleus Systems Code Trust Assurance Framework training: executive briefing, practitioner, developer foundation, security champion, assessor, and procurement tracks.",
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training & enablement"
        title="Role-based pathways to code trust"
        intro="From boards to build engineers to accredited assessors — enablement that makes the Nucleus Systems Code Trust Assurance Framework operational across your organisation."
      />
      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {trainingTracks.map((t) => (
              <div
                key={t.title}
                className="group flex flex-col rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon name={t.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{t.title}</h3>
                <p className="mt-1 text-xs font-medium text-blue">{t.audience}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{t.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate">
                  Enrolment opening soon <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand title="Enable your teams to build trust by design." intro="Ask about executive briefings and assessor accreditation." />
    </>
  );
}
