import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { DomainsGrid } from "@/components/domains-grid";
import { useCases } from "@/data/content";
import { site } from "@/data/site";
import { ArrowRight, ShieldAlert, Boxes, Cpu, FileCheck2, Check, X, Scale } from "lucide-react";
import {
  definition,
  supplyChainAttacks,
  designPrinciples,
  checklistQuestions,
  measurementQuestions,
  whatItEvaluates,
  measurableOutcomes,
  regulations,
} from "@/data/framework-detail";

export const metadata: Metadata = {
  title: "What is NS-CTAF",
  description:
    "The Nucleus Systems Code Trust Assurance Framework (NS-CTAF) is a measurable trust assurance architecture for software — not a checklist or a scan. Learn what it is, why it exists, and who created it.",
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
        eyebrow="What is NS-CTAF"
        title="A measurable architecture for software trust"
        intro="The Nucleus Systems Code Trust Assurance Framework (NS-CTAF) measures whether software can be trusted across its full lifecycle — from developer identity and code integrity to secure development, dependencies, runtime behaviour, and governance accountability."
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
              <p className="mt-5 text-lg leading-relaxed text-slate">{definition}</p>
              <p className="mt-4 text-lg leading-relaxed text-slate">
                It introduces <strong className="font-semibold text-navy">Code Trust Assurance (CTA)</strong>{" "}
                as a distinct discipline: the practice of establishing, measuring, and continuously
                maintaining evidence-based trust in software across identity, integrity, secure
                development, supply chain, runtime behaviour, and governance.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate">
                With 86 controls across six weighted domains, a five-axis scoring model, alignment to
                over 30 global frameworks, and a four-level certification programme, it replaces
                fragmented, tool-centric checklists with a single instrument for measuring and
                improving software trust.
              </p>
              <SectionHeading eyebrow="Why NS-CTAF exists" title="Every input is a trust decision" />
              <p className="mt-5 text-slate">
                Modern software is assembled from internal code, open-source components, build tools,
                CI/CD pipelines, containers, cloud services, APIs, and increasingly AI-generated code.
                NS-CTAF exists because most organisations cannot prove, continuously and with evidence,
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

      {/* The trust gap */}
      <Section className="bg-soft">
        <Container>
          <SectionHeading
            eyebrow="The code trust problem"
            title="Scanning tells you what you found. It cannot tell you what you can trust."
            intro="Most organisations can say how many vulnerabilities their scanner found last quarter. Almost none can cryptographically prove who wrote their code, that their build pipeline was not compromised, or that the dependencies they shipped were not substituted in transit."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[var(--radius-brand)] border border-line bg-white p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate">
                <X className="h-4 w-4" /> A checklist asks
              </div>
              <ul className="mt-4 space-y-2.5">
                {checklistQuestions.map((q) => (
                  <li key={q} className="text-sm text-slate">{q}</li>
                ))}
              </ul>
              <p className="mt-5 border-t border-line pt-4 text-sm text-slate">
                Binary questions that validate intent. Software trust is not binary — it exists on a
                spectrum and must be measured, validated, and proven over time.
              </p>
            </div>
            <div className="rounded-[var(--radius-brand)] border border-blue/25 bg-blue-soft/40 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue">
                <Check className="h-4 w-4" /> NS-CTAF asks
              </div>
              <ul className="mt-4 space-y-2.5">
                {measurementQuestions.map((q) => (
                  <li key={q} className="flex gap-2 text-sm text-ink">
                    <span className="text-blue">·</span> {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-[var(--radius-brand)] border border-line bg-white p-6">
              <h3 className="font-display font-bold text-navy">What it evaluates</h3>
              <ul className="mt-4 space-y-2">
                {whatItEvaluates.map((w) => (
                  <li key={w} className="flex gap-2.5 text-sm text-ink">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue" /> {w}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[var(--radius-brand)] border border-line bg-white p-6">
              <h3 className="font-display font-bold text-navy">Once trust is measurable, it becomes</h3>
              <ul className="mt-4 space-y-3">
                {measurableOutcomes.map((m) => (
                  <li key={m.title} className="text-sm text-ink">
                    <span className="font-display font-semibold text-blue">{m.title}</span>{" "}
                    <span className="text-slate">— {m.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Supply chain attacks */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Why it exists"
            title="Four attacks that conventional scanning could not have stopped"
            intro="Each shares a structural pattern: trust was assumed where it should have been verified. The compromise occurred exactly where cryptographic verification was absent."
          />
          <div className="mt-10 overflow-hidden rounded-[var(--radius-brand)] border border-line">
            {supplyChainAttacks.map((a, i) => (
              <div
                key={a.name}
                className={`grid gap-4 p-6 md:grid-cols-[220px_1fr_1fr] ${i !== 0 ? "border-t border-line" : ""}`}
              >
                <div>
                  <div className="font-display font-bold text-navy">{a.name}</div>
                  <div className="tabular mt-1 font-mono text-xs text-slate">{a.year}</div>
                  <span className="mt-2 inline-block rounded-full bg-blue-soft px-2 py-0.5 font-mono text-[11px] font-semibold text-blue">
                    {a.domain}
                  </span>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate">What was compromised</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">{a.compromised}</p>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate">The missing control</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate">{a.missing}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Design principles */}
      <Section className="bg-navy bg-trust-grid">
        <Container>
          <SectionHeading
            light
            eyebrow="Design principles"
            title="Structural responses to real failure modes"
            intro="These are not theoretical ideals. Each principle answers a failure mode observed in a real supply chain attack."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {designPrinciples.map((p, i) => (
              <div
                key={p.name}
                className="rounded-[var(--radius-brand)] border border-white/12 bg-white/5 p-6"
              >
                <div className="flex items-baseline gap-3">
                  <span className="tabular font-mono text-sm font-semibold text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-base font-bold !text-white">{p.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-blue-soft/80">{p.description}</p>
                <p className="mt-3 border-t border-white/10 pt-3 text-xs leading-relaxed text-blue-soft/60">
                  <span className="font-semibold text-blue-soft/80">Why it matters — </span>
                  {p.why}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Regulatory reality */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="The regulatory reality"
            title="Software supply chain security is no longer voluntary"
            intro="Three regulations now impose mandatory obligations on the organisations that build and supply software. Every NS-CTAF control maps to specific articles, so assessment output is auditor-ready."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {regulations.map((r) => (
              <div
                key={r.name}
                className="flex h-full flex-col rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)]"
              >
                <Scale className="h-6 w-6 text-blue" />
                <h3 className="mt-4 font-display font-bold text-navy">{r.name}</h3>
                <p className="mt-1 text-xs font-medium text-orange">{r.inForce}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">{r.requirement}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-grey">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Six domains of software trust"
            intro="NS-CTAF structures trust into six weighted domains, each an independently assessable dimension of the software supply chain."
          />
          <div className="mt-12">
            <DomainsGrid />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Who created NS-CTAF"
            title="Built by Nucleus Systems"
            intro="NS-CTAF was created by Nucleus Systems as part of its work in software assurance, code security, secure delivery, supply-chain risk, and evidence-based maturity measurement."
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
            title="Who NS-CTAF helps"
            intro="From software vendors to regulators, NS-CTAF turns software trust into something measurable and comparable."
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
