import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { DomainsGrid } from "@/components/domains-grid";
import { useCases } from "@/data/content";
import { site } from "@/data/site";
import { ArrowRight, ShieldAlert, Boxes, Cpu, FileCheck2 } from "lucide-react";

export const metadata: Metadata = {
  title: "What is CTAF",
  description:
    "CTAF is a measurable trust assurance architecture for software — not a checklist or a scan. Learn what it is, why it exists, and who created it.",
};

const whyPoints = [
  { icon: ShieldAlert, text: "Software supply chain attacks increasingly exploit trusted identities, components, and pipelines." },
  { icon: Boxes, text: "SBOM and dependency visibility are becoming procurement and regulatory expectations." },
  { icon: Cpu, text: "AI-generated code introduces new attribution, review, and trust-classification challenges." },
  { icon: FileCheck2, text: "Customers, regulators, investors, and acquirers increasingly need evidence-backed assurance." },
];

export default function WhatIsCtafPage() {
  return (
    <>
      <PageHero
        eyebrow="What is CTAF"
        title="A measurable architecture for software trust"
        intro="CTAF measures whether software can be trusted across its full lifecycle — from developer identity and code integrity to secure development, dependencies, runtime behaviour, and governance accountability."
      >
        <Button href="/framework" variant="light" size="lg">
          Explore the framework <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Definition" title="Not a checklist. Not a scan." />
              <p className="mt-5 text-lg leading-relaxed text-slate">
                CTAF is not a simple checklist or a vulnerability scanning method. It is a
                measurable trust assurance architecture that evaluates evidence quality,
                implementation coverage, operating effectiveness, monitoring, and automation.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate">
                It treats every stage of software production and distribution as an independently
                assessable trust boundary — producing a single quantified Trust Score (0–100) and a
                four-level CTA certification you can show customers, partners, regulators, and insurers.
              </p>
            </div>
            <div>
              <SectionHeading eyebrow="Why CTAF exists" title="Every input is a trust decision" />
              <p className="mt-5 text-slate">
                Modern software is assembled from internal code, open-source components, build tools,
                CI/CD pipelines, containers, cloud services, APIs, and increasingly AI-generated code.
                CTAF exists because most organisations cannot prove, continuously and with evidence,
                that those trust decisions are controlled.
              </p>
              <div className="mt-6 space-y-3">
                {whyPoints.map((p) => (
                  <div key={p.text} className="flex gap-3 rounded-[var(--radius-brand)] border border-line bg-white p-4">
                    <p.icon className="h-5 w-5 flex-shrink-0 text-blue" />
                    <p className="text-sm text-ink">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-grey">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Six domains of software trust"
            intro="CTAF structures trust into six weighted domains, each an independently assessable dimension of the software supply chain."
          />
          <div className="mt-12">
            <DomainsGrid />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Who created CTAF"
            title="Built by Nucleus Systems"
            intro="CTAF was created by Nucleus Systems as part of its work in software assurance, code security, secure delivery, supply-chain risk, and evidence-based maturity measurement."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { t: "The framework", d: "The NS-CTAF model itself — 86 controls, six domains, and the Trust Score methodology." },
              { t: "The assessment", d: "A fixed-fee, evidence-first engagement that independently scores your posture." },
              { t: "The certification", d: "A public CTA-1 to CTA-4 signal, listed in the Trust Registry and independently verifiable." },
            ].map((c) => (
              <div key={c.t} className="rounded-[var(--radius-brand)] border border-line bg-white p-6">
                <h3 className="font-display font-bold text-navy">{c.t}</h3>
                <p className="mt-2 text-sm text-slate">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm text-slate">
            As adoption grows, Nucleus Systems is introducing independent advisors, accredited
            assessors, and a partner ecosystem to sustain the framework’s independence and rigour.
          </p>
        </Container>
      </Section>

      <Section className="bg-grey">
        <Container>
          <SectionHeading
            eyebrow="Real-life use cases"
            title="Who CTAF helps"
            intro="From software vendors to regulators, CTAF turns software trust into something measurable and comparable."
          />
          <div className="mt-10 overflow-hidden rounded-[var(--radius-brand)] border border-line bg-white">
            {useCases.map((u, i) => (
              <div
                key={u.audience}
                className={`grid gap-2 px-6 py-4 md:grid-cols-[280px_1fr] ${i !== 0 ? "border-t border-line" : ""}`}
              >
                <div className="font-display font-semibold text-navy">{u.audience}</div>
                <div className="text-sm text-slate">{u.help}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand title={`Security tools find issues. ${site.name} proves trust.`} />
    </>
  );
}
