import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { CtaLevelCards } from "@/components/cta-levels";
import {
  certificationLifecycle,
  certStatuses,
  HARD_GATES,
} from "@/data/certification";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Certification Programme",
  description:
    "The CTA certification programme: four levels (CTA-1 Transparent to CTA-4 Adaptive Trust), the certification lifecycle, and public certificate status rules.",
};

export default function CertificationPage() {
  return (
    <>
      <PageHero
        eyebrow="Certification programme"
        title="Turn assessment results into a trust signal"
        intro="NS-CTAF certification turns internal software assurance into an external trust signal — four levels, an independent review, and a public, verifiable certificate."
      >
        <Button href="/registry" variant="light" size="lg">
          View the Trust Registry
        </Button>
        <Button href="/verify" variant="orange" size="lg">
          <ShieldCheck className="h-4 w-4" /> Verify a Certificate
        </Button>
      </PageHero>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="The four levels"
            title="CTA-1 Transparent to CTA-4 Adaptive Trust"
            intro="Levels are earned by Trust Score and minimum domain maturity thresholds — and every level must clear the hard gates."
          />
          <div className="mt-12">
            <CtaLevelCards detailed />
          </div>
          <div className="mt-8 flex items-start gap-3 rounded-[var(--radius-brand)] border border-orange/30 bg-orange-soft p-5">
            <ShieldCheck className="h-6 w-6 flex-shrink-0 text-orange" />
            <p className="text-sm text-ink">
              <span className="font-semibold">Seven hard gates.</span> {HARD_GATES} foundational
              requirements must pass before any CTA level is awarded — regardless of the overall
              Trust Score. They cannot be compensated for by strength in other areas.
            </p>
          </div>
        </Container>
      </Section>

      {/* Lifecycle */}
      <Section className="bg-grey">
        <Container>
          <SectionHeading
            eyebrow="Certification lifecycle"
            title="From application to renewal"
            intro="Certification is a lifecycle, not a one-off — with annual renewal and, for higher levels, quarterly verification."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {certificationLifecycle.map((step, i) => (
              <div key={step} className="flex gap-4 rounded-[var(--radius-brand)] border border-line bg-white p-5">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy font-mono text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm text-ink">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Status types */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Public certificate status"
            title="Status the market can rely on"
            intro="Every certificate carries a public status. Basic verification is always free; deeper access is available through Report Access."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certStatuses.map((s) => (
              <div key={s.status} className="rounded-[var(--radius-brand)] border border-line bg-white p-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.colorVar }} />
                  <h3 className="font-display font-bold text-navy">{s.status}</h3>
                </div>
                <p className="mt-2 text-sm text-slate">{s.meaning}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/report-access" variant="dark">
              Explore report access & verification <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBand title="Earn a trust signal your customers can verify." />
    </>
  );
}
