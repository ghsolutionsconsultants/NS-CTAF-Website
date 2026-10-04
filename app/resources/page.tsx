import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { resources } from "@/data/content";
import { regulations } from "@/data/framework-detail";
import { site } from "@/data/site";
import { Scale, ChevronRight } from "lucide-react";

const GLOSSARY: [string, string][] = [
  ["Domain", "One of the six areas of software trust the framework measures — who writes your code, whether artefacts are tamper-evident, how you build, what you depend on, how it behaves in production, and how it is governed."],
  ["Control", "A single specific practice that gets rated. For example, whether every release is cryptographically signed. There are 86 of them."],
  ["Maturity level (L1–L5)", "How well one control actually works, from ad hoc and undocumented (L1) through to continuously measured and improved (L5)."],
  ["Scoring axis", "One of the five dimensions each control is rated on: design adequacy, implementation coverage, operating effectiveness, monitoring and assurance, and automation and resilience."],
  ["Trust Score (0–100)", "Every control rating, weighted by domain, rolled into one number that summarises overall software trust posture."],
  ["Hard gate", "A foundational requirement that must pass regardless of the overall score. Strength elsewhere cannot compensate for it."],
  ["CTA level (CTA-1 to CTA-4)", "The certification earned, from CTA-1 Transparent through to CTA-4 Adaptive Trust. Each has a Trust Score threshold and minimum domain maturities."],
  ["Evidence tier (T1–T4)", "How strong a piece of evidence is. T1 is cryptographic and machine-verifiable; T4 is asserted. Weaker evidence caps the maturity a control can reach."],
  ["SBOM", "Software Bill of Materials — a machine-readable inventory of every component in a piece of software, including transitive dependencies."],
  ["Provenance attestation", "A signed, verifiable statement about how an artefact was built: by which pipeline, from which source, at which commit."],
  ["Drift", "Divergence between what was assessed and what is actually running — a dependency that changed, a pipeline that was modified, a runtime that no longer matches its baseline."],
  ["Trust Registry", "The public directory where a certified company, its level, and its certificate status can be verified by anyone."],
];

const FAQ = [
  { q: "How long does an assessment take?", a: `Roughly ${site.turnaround.replace("~", "")} from kick-off to final report, assuming evidence is made available promptly. The elapsed time is driven mostly by evidence collection on your side, not by review time on ours.` },
  { q: "What does it cost?", a: `${site.fee}, fixed and all-inclusive — scoping, evidence verification, the assessment session, the final report, the certificate, and the 12-month roadmap. There is no per-control or per-repository pricing.` },
  { q: "Do we need to be certified to be assessed?", a: "No. An assessment produces a Trust Score and a roadmap regardless of whether you clear a certification threshold. Many organisations do a first assessment specifically to find out where they stand." },
  { q: "Is our source code shared or stored?", a: "No. The assessment works from evidence about your pipeline and controls — attestations, SBOMs, signing configuration, scan output, policy and process records. Sensitive technical evidence stays private; only the certificate and registry entry are public." },
  { q: "What happens if we fail a hard gate?", a: "No CTA level is awarded, regardless of the overall Trust Score. The report identifies exactly which gate failed and what closing it requires. Hard gates exist precisely because strength elsewhere should not paper over a structural weakness." },
  { q: "How long is a certificate valid?", a: "Certificates carry a validity period and a published status — Active, Expiring Soon, Expired, Suspended, Withdrawn, or Superseded. Anyone can check the current status in the Trust Registry at any time." },
  { q: "Does this replace our existing security tooling?", a: "No, and it is not intended to. Scanner and pipeline output is an input to the assessment. The framework measures whether the system producing your software can be trusted — tooling tells you what is broken inside it." },
  { q: "How does it relate to ISO 27001, SOC 2, or NIST SSDF?", a: "It maps to 30-plus frameworks and regulations rather than competing with them. Evidence collected once can be reused across overlapping obligations, which is most of the value for organisations already carrying several." },
];

export const metadata: Metadata = {
  title: "Resources",
  description:
    "The Nucleus Systems Code Trust Assurance Framework knowledge hub: whitepapers, certification and buyer guides, checklists, SBOM and secure-pipeline guidance, glossary, and FAQs.",
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
          <div className="stagger-in grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
      {/* Available now: the glossary. Every card above says "coming soon", so the
          page needs something a visitor can actually use today. */}
      <Section className="bg-grey">
        <Container>
          <SectionHeading
            eyebrow="Available now"
            title="Glossary"
            intro="The vocabulary the framework uses, in one line each. If a term below is unfamiliar, start here before reading the methodology."
          />
          <div className="mt-10 overflow-hidden rounded-[var(--radius-brand)] border border-line bg-white shadow-[var(--shadow-brand-sm)]">
            {GLOSSARY.map(([term, meaning], i) => (
              <div
                key={term}
                className={`grid gap-1 px-6 py-4 md:grid-cols-[280px_1fr] md:gap-6 ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <dt className="font-display text-sm font-bold text-navy">{term}</dt>
                <dd className="min-w-0 text-sm leading-relaxed text-slate">{meaning}</dd>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Regulatory briefings */}
      <Section className="bg-navy bg-trust-grid">
        <Container>
          <SectionHeading
            light
            eyebrow="Regulatory briefings"
            title="What the law already requires"
            intro="These are in force now, with defined obligations and defined penalties. Each maps directly onto controls the framework scores."
          />
          <div className="stagger-in mt-10 grid gap-5 md:grid-cols-3">
            {regulations.map((r) => (
              <div
                key={r.name}
                className="flex h-full flex-col rounded-[var(--radius-brand)] border border-white/12 bg-[#0e2143]/90 p-6"
              >
                <Scale className="h-6 w-6 text-orange" />
                <h3 className="mt-4 font-display text-base font-bold !text-white">{r.name}</h3>
                <p className="mt-1 text-xs font-medium text-orange">{r.inForce}</p>
                <p className="mt-3 text-sm leading-relaxed text-blue-soft/85">{r.requirement}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Common questions"
            title="Frequently asked"
            intro="The questions that come up most often before an assessment is commissioned."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="group rounded-[var(--radius-brand)] border border-line bg-white p-5 shadow-[var(--shadow-brand-sm)] transition-colors duration-300 open:border-blue/30"
              >
                <summary className="flex cursor-pointer list-none items-start gap-3 font-display text-base font-bold text-navy">
                  <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue transition-transform duration-300 group-open:rotate-90" />
                  {f.q}
                </summary>
                <p className="mt-3 pl-7 text-sm leading-relaxed text-slate">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand title="Prepare for assessment with the right resources." intro="Get the executive whitepaper, certification guide, and readiness checklist." />
    </>
  );
}
