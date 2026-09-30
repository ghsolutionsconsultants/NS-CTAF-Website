import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { DomainsGrid } from "@/components/domains-grid";
import { useCases } from "@/data/content";
import { site } from "@/data/site";
import { ArrowRight, ShieldAlert, Boxes, Cpu, FileCheck2, Check, X, Scale, HelpCircle, Layers, ShieldCheck, TrendingDown } from "lucide-react";
import {
  fiveQuestions,
  fragmentationCosts,
  frameworkFamilies,
  defensibility,
  completionProblem,
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
  title: "What is the Framework",
  description:
    "The Nucleus Systems Code Trust Assurance Framework is a measurable trust assurance architecture for software — not a checklist or a scan. Learn what it is, why it exists, and who created it.",
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
        eyebrow="What is the Framework"
        title="A measurable architecture for software trust"
        intro="The Nucleus Systems Code Trust Assurance Framework measures whether software can be trusted across its full lifecycle — from developer identity and code integrity to secure development, dependencies, runtime behaviour, and governance accountability."
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
              <SectionHeading eyebrow="Why the Framework exists" title="Every input is a trust decision" />
              <p className="mt-5 text-slate">
                Modern software is assembled from internal code, open-source components, build tools,
                CI/CD pipelines, containers, cloud services, APIs, and increasingly AI-generated code.
                Nucleus Systems Code Trust Assurance Framework exists because most organisations cannot prove, continuously and with evidence,
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

      {/* Five questions */}
      <Section className="bg-navy bg-trust-grid">
        <Container>
          <SectionHeading
            light
            eyebrow="The honest test"
            title="Five questions. For most organisations, the honest answer to all five is no."
            intro="These are not questions a vulnerability scanner was ever designed to answer. They are the questions a regulator, an acquirer, or an enterprise customer will eventually ask you."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {fiveQuestions.map((q, i) => (
              <div
                key={q}
                className={`group relative overflow-hidden rounded-[var(--radius-brand)] border border-white/12 bg-white/[0.06] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:bg-white/[0.09] ${
                  i === 4 ? "md:col-span-2" : ""
                }`}
              >
                <span
                  aria-hidden
                  className="tabular pointer-events-none absolute -right-2 -top-5 font-display text-[5rem] font-bold leading-none text-white/[0.06] transition-colors duration-300 group-hover:text-orange/20"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block h-px w-10 bg-orange transition-all duration-300 group-hover:w-16" />
                <p className="relative mt-5 text-[0.95rem] leading-relaxed text-blue-soft/85 md:text-base">
                  {q}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/[0.07] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-soft/60">
                  Typical answer · No
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-blue-soft/70">
            This is not a gap that adding another scanner closes. It is an architecture gap — and it
            needs a control architecture, a maturity model, and a certification programme that turn
            scanning activity into demonstrable, independently verifiable software trust.
          </p>
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
                <Check className="h-4 w-4" /> Nucleus Systems Code Trust Assurance Framework asks
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

      {/* Framework fragmentation */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Thirty frameworks, one assessment"
            title="You are probably assessing the same control three times over"
            intro="A control addressing build provenance might be independently assessed for SLSA Level 3, NIST SSDF RV.1, and Executive Order 14028 Section 4 — three assessments of fundamentally the same trust capability, with three evidence collections, three gap analyses, and three reporting formats."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {fragmentationCosts.map((c) => (
              <div
                key={c.unit}
                className="card-accent rounded-[var(--radius-brand)] border border-line bg-white p-7 shadow-[var(--shadow-brand-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-[var(--shadow-brand)]"
              >
                <div className="tabular text-gradient font-display text-[2.75rem] font-bold leading-none">
                  {c.stat}
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-navy">
                  {c.unit}
                </div>
                <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-slate">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-x-auto thin-scroll">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs uppercase tracking-wider text-slate">
                  <th className="px-4 py-3 font-semibold">Framework</th>
                  <th className="px-4 py-3 font-semibold">Role in the trust puzzle</th>
                  <th className="px-4 py-3 font-semibold">Core obligations</th>
                  <th className="px-4 py-3 font-semibold">Enforcement</th>
                </tr>
              </thead>
              <tbody>
                {frameworkFamilies.map((f, i) => (
                  <tr
                    key={f.name}
                    className={`border-b border-line align-top transition-colors hover:bg-blue-soft/40 ${i % 2 ? "bg-grey/50" : ""}`}
                  >
                    <td className="px-4 py-4">
                      <span className="font-display font-bold text-navy">{f.name}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-block rounded-md bg-blue-soft px-2 py-1 text-xs font-medium text-blue">
                        {f.role}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-slate">{f.obligations}</td>
                    <td className="px-4 py-4 text-slate">{f.enforcement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-[var(--radius-brand)] border border-blue/25 bg-blue-soft/40 p-6">
            <Layers className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue" />
            <p className="text-sm leading-relaxed text-ink">
              Fragmentation is not only an efficiency problem. It is a risk management problem and a
              board communication problem at the same time. One assessment, mapped to all of them,
              produces one defensible answer instead of seven inconsistent ones.
            </p>
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

      {/* Why it is defensible */}
      <Section className="bg-soft">
        <Container>
          <SectionHeading
            eyebrow="Why it holds up"
            title="Built so that documentation cannot outscore reality"
            intro="There is a well-known observation among assessors: the fastest way to improve a code security score is to hire someone skilled in documentation rather than in security engineering. This framework is designed to make that impossible."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {defensibility.map((d) => (
              <div
                key={d.title}
                className="card-accent rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[var(--shadow-brand)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-soft text-blue">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-[1.0625rem] font-bold text-navy">{d.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate">{d.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* The completion problem */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="rounded-[calc(var(--radius-brand)+4px)] border border-line bg-white p-8 shadow-[var(--shadow-brand-sm)]">
              <div className="relative mx-auto" style={{ width: 200, height: 200 }}>
                <svg width="200" height="200" viewBox="0 0 200 200" role="img" aria-label="70 percent of gaps remain unaddressed">
                  <style>{`
                    @keyframes gap-ring { from { stroke-dashoffset: 534; } }
                    .gap-ring { animation: gap-ring 1.3s cubic-bezier(0.22,1,0.36,1) both; }
                    @media (prefers-reduced-motion: reduce) { .gap-ring { animation: none; } }
                  `}</style>
                  <circle cx="100" cy="100" r="85" fill="none" stroke="var(--color-line)" strokeWidth="18" />
                  <circle
                    className="gap-ring"
                    cx="100" cy="100" r="85" fill="none"
                    stroke="var(--color-orange)" strokeWidth="18" strokeLinecap="round"
                    strokeDasharray="534"
                    strokeDashoffset={534 - 534 * 0.7}
                    transform="rotate(-90 100 100)"
                  />
                </svg>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <span className="tabular font-display text-[2.75rem] font-bold leading-none text-orange">
                    {completionProblem.stat}
                  </span>
                  <span className="mt-1.5 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate">
                    <TrendingDown className="h-3 w-3" /> still open
                  </span>
                </div>
              </div>
              <p className="mt-6 text-center text-sm font-semibold leading-snug text-navy">
                {completionProblem.claim}
              </p>
            </div>
            <div>
              <SectionHeading
                eyebrow="Measure versus manage"
                title="Most assessments are built to measure, not to manage"
              />
              <p className="mt-5 leading-relaxed text-slate">{completionProblem.diagnosis}</p>
              <p className="mt-4 leading-relaxed text-slate">{completionProblem.answer}</p>
            </div>
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
            intro="Three regulations now impose mandatory obligations on the organisations that build and supply software. Every Nucleus Systems Code Trust Assurance Framework control maps to specific articles, so assessment output is auditor-ready."
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
            intro="Nucleus Systems Code Trust Assurance Framework structures trust into six weighted domains, each an independently assessable dimension of the software supply chain."
          />
          <div className="mt-12">
            <DomainsGrid />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Who created the Framework"
            title="Built by Nucleus Systems"
            intro="Nucleus Systems Code Trust Assurance Framework was created by Nucleus Systems as part of its work in software assurance, code security, secure delivery, supply-chain risk, and evidence-based maturity measurement."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { t: "The framework", d: "The Nucleus Systems Code Trust Assurance Framework model itself — 86 controls, six domains, and the Trust Score methodology." },
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
            title="Who Nucleus Systems Code Trust Assurance Framework helps"
            intro="From software vendors to regulators, Nucleus Systems Code Trust Assurance Framework turns software trust into something measurable and comparable."
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
