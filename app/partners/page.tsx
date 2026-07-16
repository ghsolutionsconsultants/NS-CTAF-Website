import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { partnerTracks, assessorPolicies } from "@/data/content";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner & Assessor Programme",
  description:
    "Join the NS-CTAF ecosystem: accredited assessor programme, consulting partners, technology integration partners, and regional representatives — governed by strict independence and ethics policies.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner, assessor & ecosystem"
        title="Scale code trust through a trusted ecosystem"
        intro="NS-CTAF grows through accredited assessors, consulting and technology partners, and regional representatives — all held to strict independence, ethics, and quality-assurance standards."
      >
        <Button href="/contact" variant="orange" size="lg">
          Apply to partner <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Programme tracks"
            title="Four ways to join the ecosystem"
            intro="Whether you assess, implement, integrate, or represent NS-CTAF regionally, there is a defined pathway."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {partnerTracks.map((t) => (
              <div key={t.title} className="flex flex-col rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                    <Icon name={t.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">{t.title}</h3>
                    <p className="text-sm text-slate">{t.blurb}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-ink">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-grey">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Independence & quality"
              title="Trust in the assessors, not just the assessment"
              intro="A framework that certifies trust must hold its own assessors to the highest standard. These policies keep NS-CTAF certifications credible and comparable."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {assessorPolicies.map((p) => (
                <div key={p} className="flex gap-3 rounded-[var(--radius-brand)] border border-line bg-white p-5">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue" />
                  <span className="text-sm text-ink">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Help build the public trust infrastructure for software."
        intro="Apply to the assessor, consulting, technology, or regional programme."
      />
    </>
  );
}
