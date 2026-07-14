import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Icon } from "@/components/icon";
import { ControlLibrary } from "@/components/control-library";
import { MaturityLadder } from "@/components/maturity-ladder";
import { CtaBand } from "@/components/cta-band";
import { domains, scoringAxes, evidenceTiers, trustScoreBands } from "@/data/framework";
import { alignments } from "@/data/alignments";
import { HARD_GATES } from "@/data/certification";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Framework",
  description:
    "The NS-CTAF framework: 6 weighted domains, 86 controls, a 5-level maturity model, the 5-axis scoring model, and the 0–100 Trust Score.",
};

export default function FrameworkPage() {
  return (
    <>
      <PageHero
        eyebrow="The framework"
        title="Where software trust is defined and measured"
        intro="Code Trust Assurance Intelligence — creating public trust in the modern software supply chain. Six domains, 86 controls, five maturity levels, and a single 0–100 Trust Score."
      >
        <Button href="#controls" variant="light" size="lg">
          Browse the control library
        </Button>
        <Button href="#trust-score" variant="orange" size="lg">
          Understand the Trust Score
        </Button>
      </PageHero>

      {/* Domains detail */}
      <Section id="domains">
        <Container>
          <SectionHeading
            eyebrow="Six domains"
            title="Each domain is a trust boundary"
            intro="Domain weights reflect their relative impact on overall software trust posture. Together they span identity, integrity, development, dependencies, runtime, and governance."
          />
          <div className="mt-12 space-y-4">
            {domains.map((d) => (
              <div
                key={d.id}
                id={d.slug}
                className="grid scroll-mt-24 gap-6 rounded-[var(--radius-brand)] border border-line bg-white p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-soft text-blue">
                    <Icon name={d.icon} className="h-7 w-7" />
                  </div>
                  <div className="md:hidden">
                    <div className="font-mono text-xs font-semibold text-slate">{d.id} · {d.weight}%</div>
                    <h3 className="text-lg font-bold text-navy">{d.title}</h3>
                  </div>
                </div>
                <div>
                  <div className="hidden items-center gap-3 md:flex">
                    <span className="font-mono text-xs font-semibold text-slate">{d.id}</span>
                    <h3 className="text-xl font-bold text-navy">{d.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{d.scope}</p>
                </div>
                <div className="flex items-center gap-6 md:flex-col md:items-end md:gap-1">
                  <div className="text-center md:text-right">
                    <div className="font-display text-2xl font-bold text-navy">{d.weight}%</div>
                    <div className="text-xs text-slate">weight</div>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="font-display text-2xl font-bold text-blue">{d.controlCount}</div>
                    <div className="text-xs text-slate">controls</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Control library */}
      <Section id="controls" className="scroll-mt-16 bg-grey">
        <Container>
          <SectionHeading
            eyebrow="Control library"
            title="All 86 controls, searchable"
            intro="Filter by domain or search by control ID, name, or what it assesses. This is the same control set an assessment scores independently, L1–L5."
          />
          <div className="mt-10">
            <ControlLibrary />
          </div>
        </Container>
      </Section>

      {/* Maturity model */}
      <Section id="maturity">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Maturity model"
              title="Five levels, applied per control"
              intro="A maturity level is not an organisation-wide score — it characterises how well a specific capability is embedded. The same organisation may be L4 on one control and L1 on another."
            />
            <MaturityLadder />
          </div>
        </Container>
      </Section>

      {/* Scoring model + Trust Score */}
      <Section id="trust-score" className="scroll-mt-16 bg-navy bg-trust-grid">
        <Container>
          <SectionHeading
            light
            eyebrow="Scoring model"
            title="From maturity ratings to one Trust Score"
            intro="Each control is scored across five axes, aggregated into weighted domain scores, then composed into a single executive-readable Trust Score."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[var(--radius-brand)] border border-white/12 bg-white/5 p-6">
              <h3 className="font-display text-lg font-bold !text-white">The five scoring axes</h3>
              <div className="mt-5 space-y-3">
                {scoringAxes.map((a, i) => (
                  <div key={a.name} className="flex gap-4">
                    <span className="font-mono text-sm font-semibold text-orange">0{i + 1}</span>
                    <div>
                      <div className="font-semibold !text-white">{a.name}</div>
                      <div className="text-sm text-blue-soft/70">{a.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-[var(--radius-brand)] border border-white/12 bg-white/5 p-6">
                <h3 className="font-display text-lg font-bold !text-white">How the Trust Score is built</h3>
                <ol className="mt-4 space-y-3 text-sm text-blue-soft/80">
                  <li>1 · Each applicable control is rated L1–L5 (1–5 points).</li>
                  <li>2 · A domain score is the weighted average of its control scores.</li>
                  <li>3 · The Trust Score sums each domain score × its domain weight.</li>
                  <li>4 · {HARD_GATES} hard gates must pass before any CTA level is awarded.</li>
                </ol>
              </div>
              <div className="rounded-[var(--radius-brand)] border border-orange/30 bg-orange/10 p-6">
                <p className="text-sm text-blue-soft/85">
                  Hard gates address foundational security requirements that cannot be compensated
                  for by high scores elsewhere — no amount of maturity in one domain can buy a
                  certification level if a gate fails.
                </p>
              </div>
            </div>
          </div>

          {/* Trust score bands */}
          <div className="mt-8 overflow-hidden rounded-[var(--radius-brand)] border border-white/12 bg-white/5">
            {trustScoreBands.map((b, i) => (
              <div
                key={b.range}
                className={`flex flex-col gap-1 px-5 py-4 md:flex-row md:items-center md:gap-4 ${i !== 0 ? "border-t border-white/10" : ""}`}
              >
                <div className="w-24 font-mono text-sm font-semibold text-orange">{b.range}</div>
                <div className="font-display font-semibold !text-white md:w-64">
                  {b.label} · {b.readiness}
                </div>
                <div className="flex-1 text-sm text-blue-soft/70">{b.action}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Evidence tiers */}
      <Section id="evidence">
        <Container>
          <SectionHeading
            eyebrow="Evidence tiers"
            title="Not all evidence is equal"
            intro="Assessment is evidence-first. Cryptographic proof outranks documentation, which outranks assertion — and higher maturity levels require higher-tier evidence."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {evidenceTiers.map((t) => (
              <div key={t.tier} className="rounded-[var(--radius-brand)] border border-line bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-lg font-bold text-blue">{t.tier}</span>
                </div>
                <h3 className="mt-2 font-bold text-navy">{t.name}</h3>
                <p className="mt-1 text-xs font-medium text-slate">{t.description}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">{t.examples}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Alignments */}
      <Section className="bg-grey">
        <Container>
          <SectionHeading
            eyebrow="Framework alignment"
            title="One assessment, many obligations"
            intro="CTAF maps to the standards and regulations that shape software security worldwide."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {alignments.map((a) => (
              <div key={a.name} className="rounded-[var(--radius-brand)] border border-line bg-white p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-navy">{a.name}</h3>
                  <span className="rounded-full bg-blue-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue">
                    {a.category}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate">{a.blurb}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/certification" variant="dark">
              See how domains map to CTA levels <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
