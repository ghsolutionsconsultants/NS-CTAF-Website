import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { trainingTracks } from "@/data/content";
import { ArrowRight, Target, FileCheck2, ClipboardList, Award } from "lucide-react";

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
          <div className="stagger-in grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
      {/* Why enablement is scored, not optional */}
      <Section className="bg-grey">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <SectionHeading
              eyebrow="Why this is scored"
              title="Maturity is a people problem before it is a tooling problem"
              intro="A control reaches L3 when the practice is defined and consistently followed, and L4 when it is measured and managed. Neither is achievable if the people operating the pipeline do not know what the control requires or why it exists."
            />
            <div className="space-y-4">
              {[
                { t: "L1 → L2", d: "Someone knows how the control is meant to work, and it happens more often than not. Usually a single person or team." },
                { t: "L2 → L3", d: "The practice is written down and followed consistently across teams. This is where enablement stops being optional." },
                { t: "L3 → L4", d: "The practice is measured. Exceptions are visible, owned, and closed — which requires people who understand what the measurement means." },
                { t: "L4 → L5", d: "The practice improves on evidence. Teams change the control because the data told them to, not because an auditor did." },
              ].map((r) => (
                <div
                  key={r.t}
                  className="flex gap-4 rounded-[var(--radius-brand)] border border-line bg-white p-5"
                >
                  <span className="shrink-0 font-mono text-sm font-bold text-blue">{r.t}</span>
                  <p className="text-sm leading-relaxed text-slate">{r.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* What every track includes */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Format"
            title="What every pathway includes"
            intro="Tracks differ in depth and audience, not in structure. Each is built around the controls that role actually touches."
          />
          <div className="stagger-in mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Target, t: "Role-scoped content", d: "Only the domains and controls that role is accountable for — a board briefing and a build engineer course share no material." },
              { icon: FileCheck2, t: "Evidence literacy", d: "What counts as T1 cryptographic evidence versus a T4 assertion, and how to produce the former as a by-product of normal work." },
              { icon: ClipboardList, t: "Worked assessment", d: "Scoring real controls against the five axes, so the maturity levels stop being abstract." },
              { icon: Award, t: "Assessed completion", d: "A check at the end. For the assessor track this is the accreditation examination." },
            ].map((c) => (
              <div
                key={c.t}
                className="card-accent lift rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)]"
              >
                <div className="icon-pop flex h-11 w-11 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-navy">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{c.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Assessor accreditation */}
      <Section className="bg-navy bg-trust-grid">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <SectionHeading
              light
              eyebrow="Accredited assessors"
              title="The pathway to assessing on behalf of the framework"
              intro="Certification is only worth what the assessor behind it is worth. The accreditation route is deliberately the most demanding pathway, and it carries ongoing obligations rather than a one-off qualification."
            />
            <ol className="stagger-in space-y-3">
              {[
                "Complete the practitioner track and demonstrate working knowledge of all six domains.",
                "Pass the accreditation examination, including scoring worked controls across the five axes.",
                "Shadow supervised assessments before leading one independently.",
                "Accept the assessor independence and conflict-of-interest policy in writing.",
                "Submit to quality-assurance review of completed assessments, and to re-accreditation on each framework version.",
              ].map((step, i) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-[var(--radius-brand)] border border-white/12 bg-[#0e2143]/90 p-5"
                >
                  <span className="tabular shrink-0 font-mono text-sm font-bold text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-blue-soft/90">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
            <p className="flex-1 text-sm text-blue-soft/85">
              Assessor accreditation is run through the partner programme, alongside consulting,
              technology, and regional representation tracks.
            </p>
            <Button href="/partners" variant="light" size="md">
              Partner &amp; assessor programme <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBand title="Enable your teams to build trust by design." intro="Ask about executive briefings and assessor accreditation." />
    </>
  );
}
