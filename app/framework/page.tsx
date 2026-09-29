import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Icon } from "@/components/icon";
import { MaturityLadder } from "@/components/maturity-ladder";
import { CtaBand } from "@/components/cta-band";
import { domains, scoringAxes, evidenceTiers, trustScoreBands } from "@/data/framework";
import { alignments } from "@/data/alignments";
import { HARD_GATES } from "@/data/certification";
import { ArrowRight, ShieldCheck, Gauge, Award, ClipboardCheck, Layers, BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Framework",
  description:
    "The Nucleus Systems Code Trust Assurance Framework (NS-CTAF) explained in plain terms: what it is, what it does, its six domains, five maturity levels, and the 0–100 Trust Score.",
};

export default function FrameworkPage() {
  return (
    <>
      <PageHero
        eyebrow="The framework"
        title="Where software trust is defined and measured"
        intro="The Nucleus Systems Code Trust Assurance Framework (NS-CTAF) is the standard for proving software can be trusted. It measures how well an organisation controls its software — from who writes the code to how it behaves in production — and turns that into one evidence-backed score."
      >
        <Button href="#in-simple-terms" variant="light" size="lg">
          What is NS-CTAF?
        </Button>
        <Button href="#trust-score" variant="orange" size="lg">
          Understand the Trust Score
        </Button>
      </PageHero>

      {/* Plain-English explainer */}
      <Section id="in-simple-terms" className="scroll-mt-16">
        <Container>
          <SectionHeading
            eyebrow="In simple terms"
            title="What NS-CTAF is, and what it actually does"
            intro="The Nucleus Systems Code Trust Assurance Framework (NS-CTAF) exists to answer one question a customer, regulator, or insurer will eventually ask you: can your software be trusted — and can you prove it?"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                t: "What it is",
                d: "A structured, independently assessable standard for software trust. Not a scan and not a checklist — it measures whether the controls that protect your software genuinely work, and whether you can evidence it.",
              },
              {
                icon: Gauge,
                t: "What it does",
                d: "An independent assessor rates 86 controls across six domains, each on a five-level maturity scale. Those ratings roll up into a single Trust Score from 0 to 100 that a non-technical reader can act on.",
              },
              {
                icon: Award,
                t: "What you get",
                d: "A certification level from CTA-1 to CTA-4, a signed certificate, a board-ready report, a 12-month improvement roadmap, and a public Trust Registry listing anyone can verify.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="card-accent rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[var(--shadow-brand)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <c.icon className="h-[22px] w-[22px]" />
                </div>
                <h3 className="mt-5 text-[1.0625rem] font-bold text-navy">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{c.d}</p>
              </div>
            ))}
          </div>

          {/* Four-step flow */}
          <div className="mt-14">
            <h3 className="font-display text-xl font-bold text-navy">How it works, step by step</h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  n: "01",
                  icon: ClipboardCheck,
                  t: "You are assessed",
                  d: "You complete a structured assessment and provide evidence — SBOMs, signing records, scan output, policies, and pipeline logs.",
                },
                {
                  n: "02",
                  icon: Layers,
                  t: "Every control is rated",
                  d: "An assessor independently rates each control from L1 (ad hoc) to L5 (automated and continuously evidenced).",
                },
                {
                  n: "03",
                  icon: Gauge,
                  t: "You get a Trust Score",
                  d: "Ratings are weighted by domain into a single 0–100 Trust Score, plus a gap analysis showing exactly what to fix first.",
                },
                {
                  n: "04",
                  icon: BadgeCheck,
                  t: "You are certified",
                  d: "Clear the score thresholds and the seven hard gates and you are certified CTA-1 to CTA-4, and listed publicly.",
                },
              ].map((s) => (
                <div
                  key={s.n}
                  className="flex h-full flex-col rounded-[var(--radius-brand)] border border-line bg-grey p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="tabular font-mono text-xl font-bold text-line">{s.n}</span>
                  </div>
                  <h4 className="mt-5 font-display text-base font-bold text-navy">{s.t}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Jargon decoder */}
          <div className="mt-14 overflow-hidden rounded-[var(--radius-brand)] border border-line">
            <div className="border-b border-line bg-grey px-6 py-4">
              <h3 className="font-display text-base font-bold text-navy">The terms, in one line each</h3>
            </div>
            {[
              ["Domain", "One of the six areas of software trust NS-CTAF measures, such as who writes your code or whether builds can be tampered with."],
              ["Control", "A single specific practice that gets rated — for example, whether your releases are cryptographically signed."],
              ["Maturity level (L1–L5)", "How well one control actually works, from ad hoc and undocumented (L1) to fully automated and independently assured (L5)."],
              ["Trust Score (0–100)", "All the control ratings weighted into one number that summarises your overall software trust posture."],
              ["Hard gate", "A foundational requirement that must pass no matter how high your score is. Strength elsewhere cannot buy your way past it."],
              ["CTA level (CTA-1 to CTA-4)", "The certification you earn, from CTA-1 Transparent up to CTA-4 Adaptive Trust."],
            ].map(([term, meaning], i) => (
              <div
                key={term}
                className={`grid gap-1 px-6 py-4 md:grid-cols-[260px_1fr] md:gap-6 ${i !== 0 ? "border-t border-line" : ""}`}
              >
                <div className="font-display font-semibold text-navy">{term}</div>
                <div className="text-sm leading-relaxed text-slate">{meaning}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

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
            intro="NS-CTAF maps to the standards and regulations that shape software security worldwide."
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
