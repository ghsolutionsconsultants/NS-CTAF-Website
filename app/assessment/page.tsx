import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button, StatTile } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import {
  assessmentPhases,
  deliverables,
  methodPrinciples,
  journey,
} from "@/data/journey";
import { evidenceTiers } from "@/data/framework";
import { site } from "@/data/site";
import { ArrowRight, Check, CircleDollarSign, CalendarClock, FileBadge } from "lucide-react";

export const metadata: Metadata = {
  title: "Assessment Services",
  description:
    "The Nucleus Systems Code Trust Assurance Framework assessment: a fixed-fee, evidence-first engagement that scores 86 controls, computes your Trust Score, and determines CTA certification readiness.",
};

export default function AssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Assessment services"
        title="An evidence-first assessment, end to end"
        intro="A structured engagement that collects evidence, scores all 86 controls, applies hard gates, and delivers a Trust Score, board-ready report, and certification recommendation."
      >
        <Button href="/contact" variant="orange" size="lg">
          Get Assessed <ArrowRight className="h-4 w-4" />
        </Button>
        <Button href="#journey" variant="light" size="lg">
          See the 8-stage journey
        </Button>
      </PageHero>

      {/* Commercial facts */}
      <Section>
        <Container>
          <div className="stagger-in grid gap-5 md:grid-cols-3">
            {[
              { icon: CircleDollarSign, v: site.fee, l: "Fixed fee — all-inclusive" },
              { icon: CalendarClock, v: site.turnaround, l: "From kickoff to certificate" },
              { icon: FileBadge, v: "3 deliverables", l: "Report · Certificate · Roadmap" },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-4 rounded-[var(--radius-brand)] border border-line bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-navy">{s.v}</div>
                  <div className="text-sm text-slate">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-grey">
        <Container>
          <SectionHeading
            eyebrow="Assessment process"
            title="Six phases from scope to certification readiness"
            intro="Automated tooling structures the scoring; independent assessors validate the evidence."
          />
          <div className="stagger-in mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {assessmentPhases.map((p, i) => (
              <div key={p.phase} className="flex flex-col rounded-[var(--radius-brand)] border border-line bg-white p-6">
                <span className="font-mono text-2xl font-bold text-blue/70">0{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-bold text-navy">{p.phase.replace(/^\d+\.\s/, "")}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{p.description}</p>
                <p className="mt-4 border-t border-line pt-3 text-xs font-medium text-blue">→ {p.output}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Deliverables + principles */}
      <Section>
        <Container>
          <div className="stagger-in grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Deliverables" title="What you receive" />
              <ul className="mt-6 space-y-3">
                {deliverables.map((d) => (
                  <li key={d} className="flex gap-3 rounded-[var(--radius-brand)] border border-line bg-white p-4">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue" />
                    <span className="text-sm text-ink">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="Method principles" title="How we keep it rigorous" />
              <ul className="mt-6 space-y-3">
                {methodPrinciples.map((p) => (
                  <li key={p} className="flex gap-3 rounded-[var(--radius-brand)] bg-navy p-4 text-white">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange" />
                    <span className="text-sm text-blue-soft/90">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Evidence tiers */}
      <Section className="bg-grey">
        <Container>
          <SectionHeading
            eyebrow="Evidence tiers"
            title="Cryptographic proof beats assertion"
            intro="Higher maturity levels require higher-tier evidence — there is no maturity inflation through policy-only documentation."
          />
          <div className="stagger-in mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {evidenceTiers.map((t) => (
              <div key={t.tier} className="rounded-[var(--radius-brand)] border border-line bg-white p-6">
                <span className="font-mono text-lg font-bold text-blue">{t.tier}</span>
                <h3 className="mt-2 font-bold text-navy">{t.name}</h3>
                <p className="mt-3 text-sm text-slate">{t.examples}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Journey timeline */}
      <Section id="journey" className="scroll-mt-16">
        <Container>
          <SectionHeading
            eyebrow="Client assessment journey"
            title="Eight stages, ~20 business days"
            intro="From first contact to CTA certification — a predictable path with a fixed fee and defined deliverables at each stage."
          />
          <div className="stagger-in mt-12 grid grid-cols-2 gap-6 border-b border-line pb-8 md:grid-cols-4">
            <StatTile value="86" label="Controls scored" />
            <StatTile value="6" label="Domains" />
            <StatTile value="~20" label="Business days" />
            <StatTile value={site.fee} label="Fixed fee" />
          </div>

          <div className="mt-10 space-y-4">
            {journey.map((s) => (
              <div
                key={s.n}
                className="stagger-in grid gap-4 rounded-[var(--radius-brand)] border border-line bg-white p-6 md:grid-cols-[auto_1fr_1.2fr]"
              >
                <div className="flex items-center gap-4 md:flex-col md:items-start">
                  <span className="font-display text-3xl font-bold text-blue/70">{s.n}</span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-blue">{s.phase}</div>
                    <div className="text-xs text-slate">{s.duration}</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy">{s.title}</h3>
                  <p className="mt-1 text-xs text-slate">{s.owner}</p>
                  <ul className="mt-3 space-y-1.5">
                    {s.steps.map((st) => (
                      <li key={st} className="flex gap-2 text-sm text-slate">
                        <span className="text-blue">·</span> {st}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-start">
                  <div className="rounded-xl bg-blue-soft/60 p-4 text-sm text-ink">
                    <span className="font-semibold text-blue">Outcome</span>
                    <p className="mt-1">{s.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
