import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { governanceSafeguards } from "@/data/content";
import { designPrinciples, defensibility, frameworkAttributes } from "@/data/framework-detail";
import { site } from "@/data/site";
import { Check, X, ShieldCheck, Scale, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Nucleus Systems Code Trust Assurance Framework makes software trust measurable, certifiable, and verifiable. Learn who created it and the credibility safeguards behind it.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Framework"
        title="Created by Nucleus Systems"
        intro="The Nucleus Systems Code Trust Assurance Framework (NS-CTAF) is a public trust infrastructure for the software economy — defining trust, measuring trust, certifying trust, and making trust visible to the market."
      >
        <Button href="/contact" variant="orange" size="lg">
          Get in touch <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      <Section>
        <Container>
          <div className="stagger-in grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Who created the Framework" title="A framework built on assurance work" />
              <p className="mt-5 text-lg leading-relaxed text-slate">
                NS-CTAF was created by {site.owner} as part of its work in software assurance, code
                security, secure delivery, supply-chain risk, and evidence-based maturity
                measurement. It is positioned as a new category — {site.category} — because it
                measures trust, evidence, maturity, certification, and continuous assurance rather
                than simply finding issues.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate">
                The initiative is deliberately launched as a serious market trust infrastructure,
                not a consulting brochure. Independence, methodological rigour, transparency, and
                commercial usefulness are the design goals.
              </p>
              <div className="mt-6">
                <Button href={`mailto:${site.email}`} variant="outline">
                  {site.email}
                </Button>
              </div>
            </div>
            <div className="stagger-in grid gap-4 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, t: "Methodological rigour", d: "Evidence-first scoring, hard gates, and independent review before certification." },
                { icon: Scale, t: "Independence", d: "Assessor ethics, conflict-of-interest, and quality-assurance policies." },
                { icon: Users, t: "Ecosystem", d: "Independent advisors, accredited assessors, and partners as adoption grows." },
                { icon: Check, t: "Transparency", d: "Published methodology, status rules, and versioned release notes." },
              ].map((c) => (
                <div key={c.t} className="rounded-[var(--radius-brand)] border border-line bg-white p-5">
                  <c.icon className="h-6 w-6 text-blue" />
                  <h3 className="mt-3 font-display font-bold text-navy">{c.t}</h3>
                  <p className="mt-1 text-sm text-slate">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-grey">
        <Container>
          <SectionHeading
            eyebrow="Credibility safeguards"
            title="How the Framework stays trustworthy"
            intro="A framework that certifies trust must itself be governed transparently. These safeguards keep NS-CTAF credible as it scales."
          />
          <div className="stagger-in mt-10 grid gap-4 md:grid-cols-2">
            {governanceSafeguards.map((g) => (
              <div key={g} className="flex gap-3 rounded-[var(--radius-brand)] border border-line bg-white p-5">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue" />
                <span className="text-sm text-ink">{g}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What it is, and deliberately is not */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Positioning"
            title="What NS-CTAF is — and what it deliberately is not"
            intro="The category matters. A scanner tells you what is broken in the code you already have. NS-CTAF tells you, with evidence, whether the system that produces that code can be trusted at all."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[var(--radius-brand)] border border-blue/25 bg-blue-soft/50 p-7">
              <h3 className="font-display text-lg font-bold text-navy">It is</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "A measurement model — 86 controls, six weighted domains, five maturity levels, five scoring axes.",
                  "An evidence standard — what counts as proof, and how much weight each kind of proof carries.",
                  "A certification scheme — CTA-1 to CTA-4, awarded against published thresholds and hard gates.",
                  "A public trust signal — a registry entry a customer, regulator, or insurer can verify independently.",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[var(--radius-brand)] border border-line bg-grey p-7">
              <h3 className="font-display text-lg font-bold text-navy">It is not</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "A scanner, or a replacement for one — scanner output is an input to the assessment, not the assessment.",
                  "A questionnaire — self-asserted answers without evidence cannot clear the cryptographic gates.",
                  "A one-off audit — a control that only functions on audit day cannot reach high maturity.",
                  "A consulting engagement dressed as a standard — the methodology, thresholds, and status rules are published.",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5 text-sm leading-relaxed text-slate">
                    <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate" />
                    {t}
                  </li>
                ))}
              </ul>
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
            title="The decisions the model is built on"
            intro="Each principle exists because of a specific failure mode seen in real supply chain compromises. They are what make a score hard to argue with."
          />
          <div className="stagger-in mt-10 grid gap-5 md:grid-cols-2">
            {designPrinciples.map((pr, i) => (
              <div
                key={pr.name}
                className="rounded-[var(--radius-brand)] border border-white/12 bg-[#0e2143]/90 p-6"
              >
                <div className="flex items-baseline gap-3">
                  <span className="tabular font-mono text-sm font-semibold text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-base font-bold !text-white">{pr.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-blue-soft/85">{pr.description}</p>
                <p className="mt-3 border-t border-white/10 pt-3 text-xs leading-relaxed text-blue-soft/85">
                  <span className="font-semibold text-white">Why: </span>
                  {pr.why}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why a score holds up under challenge */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Defensibility"
            title="Why a score survives being challenged"
            intro="A trust score is only useful if it holds up when a customer, an auditor, or an acquirer pushes back on it. Four structural choices make that possible."
          />
          <div className="stagger-in mt-10 grid gap-5 md:grid-cols-2">
            {defensibility.map((d) => (
              <div
                key={d.title}
                className="card-accent lift rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)]"
              >
                <h3 className="font-display text-base font-bold text-navy">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{d.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* The framework at a glance */}
      <Section className="bg-grey">
        <Container>
          <SectionHeading
            eyebrow="At a glance"
            title="The published specification"
            intro="Everything below is fixed and published, so an assessment can be reproduced and a score can be checked."
          />
          <div className="mt-10 overflow-hidden rounded-[var(--radius-brand)] border border-line bg-white shadow-[var(--shadow-brand-sm)]">
            {frameworkAttributes.map((a, i) => (
              <div
                key={a.label}
                className={`flex flex-col gap-1 px-6 py-4 md:flex-row md:gap-6 ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <div className="font-display text-sm font-bold text-navy md:w-56 md:shrink-0">
                  {a.label}
                </div>
                <div className="min-w-0 text-sm leading-relaxed text-slate">{a.value}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-[calc(var(--radius-brand)+6px)] border border-line bg-navy bg-trust-grid p-10 text-center">
            <p className="mx-auto max-w-3xl font-display text-2xl font-semibold !text-white md:text-3xl">
              “Code trust is no longer a claim; it is evidence.”
            </p>
            <p className="mt-4 text-sm uppercase tracking-wider text-blue-soft/70">
              {site.owner} · {site.frameworkVersion}
            </p>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
