import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { VerifyWidget } from "@/components/verify-widget";
import { certStatuses } from "@/data/certification";

export const metadata: Metadata = {
  title: "Verify a Certificate",
  description:
    "Verify a CTAF certificate by its ID. Confirm the certified company, certification level, and current status on the public Trust Registry.",
};

export default function VerifyPage() {
  return (
    <>
      <PageHero
        eyebrow="Certificate verification"
        title="Verify a CTAF certificate"
        intro="Enter a certificate ID to confirm the certified company, its certification level, and the certificate’s current status. Basic verification is always free."
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl">
            <VerifyWidget />
          </div>
        </Container>
      </Section>

      <Section className="bg-grey">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Status meanings"
            title="What each certificate status means"
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
        </Container>
      </Section>
    </>
  );
}
