import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Search,
  ScanLine,
  FileCheck2,
  BadgeCheck,
  Radar,
  Fingerprint,
} from "lucide-react";
import { Container, Section, SectionHeading, Button, StatTile, Eyebrow } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { DomainsGrid } from "@/components/domains-grid";
import { CtaLevelCards } from "@/components/cta-levels";
import { RegistryCard } from "@/components/registry-card";
import { TrustScoreGauge } from "@/components/trust-score-gauge";
import { site } from "@/data/site";
import { registry } from "@/data/registry";
import { alignments } from "@/data/alignments";
import { trustScoreBands } from "@/data/framework";

const flow = [
  { icon: ScanLine, title: "Evidence", text: "SBOMs, signing, scans, attestations, runtime and governance data collected and registered." },
  { icon: Radar, title: "Assessment", text: "86 controls scored across 5 axes, hard gates applied, evidence independently validated." },
  { icon: FileCheck2, title: "Output", text: "Trust Score, domain scores, board report, and a prioritised 12-month roadmap." },
  { icon: BadgeCheck, title: "Certification", text: "A CTA-1 to CTA-4 certificate and a public Trust Registry listing." },
];

export default function HomePage() {
  const featured = registry.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-mesh bg-trust-grid text-white">
        <Container className="relative py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="animate-fade-up">
            <Eyebrow light>{site.category}</Eyebrow>
            <h1 className="mt-6 text-[2.5rem] font-bold leading-[1.04] !text-white md:text-[3.25rem] lg:text-[3.6rem]">
              Nucleus Systems Code Trust Assurance Framework
            </h1>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-soft/90 backdrop-blur-sm">
              NS-CTAF
            </p>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-blue-soft/80 md:text-xl">
              A continuous, cryptographically verifiable, and measurable standard for software code
              trust — spanning identity, integrity, secure development, supply chain, runtime
              assurance, and governance.
            </p>
            <p className="mt-6 flex items-center gap-3 font-display text-lg font-semibold text-orange md:text-xl">
              <span className="h-8 w-1 rounded-full bg-orange" />
              {site.tagline}
            </p>
          </div>

          {/* Above the fold: rendered visible by default, entrance is CSS-only
              enhancement so the card never depends on JS to be seen. */}
          <div className="animate-fade-up relative [animation-delay:120ms]">
            {/* Ambient glow behind the specimen card */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-full bg-blue-bright/20 blur-3xl"
            />
            <div className="relative rounded-[calc(var(--radius-brand)+8px)] border border-white/[0.14] bg-white/[0.07] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-blue-soft/80">
                  <Fingerprint className="h-4 w-4 text-orange" /> Specimen · Paxley Software
                </div>
                <span className="rounded-full bg-orange px-2.5 py-1 text-xs font-bold text-white shadow-[var(--shadow-orange)]">
                  CTA-4
                </span>
              </div>
              <div className="mt-5 flex justify-center rounded-2xl bg-white p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                <TrustScoreGauge score={84} />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {["86/86 controls", "L4 overall", "Active"].map((t) => (
                  <div
                    key={t}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.06] px-2 py-2.5 text-xs font-medium text-blue-soft/85"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>

          {/* Full-width CTA row — stays on a single line on desktop */}
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-nowrap">
            <Button href="/contact" variant="orange" size="md" className="whitespace-nowrap">
              Get Assessed <ArrowRight className="h-4 w-4 shrink-0" />
            </Button>
            <Button href="/framework" variant="light" size="md" className="whitespace-nowrap">
              Explore the Framework
            </Button>
            <Link
              href="/verify"
              className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-5 text-sm font-medium leading-none text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
            >
              <ShieldCheck className="h-4 w-4 shrink-0" /> Verify a Certificate
            </Link>
            <Link
              href="/registry"
              className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-5 text-sm font-medium leading-none text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
            >
              <Search className="h-4 w-4 shrink-0" /> Search Certified Companies
            </Link>
          </div>
        </Container>

        {/* Metrics strip */}
        <div className="edge-glow relative border-t border-white/10 bg-[#071324]/60 backdrop-blur-sm">
          <Container className="grid grid-cols-2 gap-y-8 py-10 md:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
            {[
              { v: site.metrics.controls, l: "Controls" },
              { v: site.metrics.domains, l: "Domains" },
              { v: `${site.metrics.axes}-axis`, l: "Scoring model" },
              { v: "L1–L5", l: "Maturity" },
              { v: "CTA-1→4", l: "Certification" },
              { v: site.metrics.alignments, l: "Alignments" },
            ].map((m, i) => (
              <div
                key={m.l}
                className={
                  i > 0
                    ? "lg:border-l lg:border-white/10"
                    : ""
                }
              >
                <StatTile light value={m.v} label={m.l} />
              </div>
            ))}
          </Container>
        </div>
      </section>

      {/* Problem → solution */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow>The trust gap</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Organisations scan code. They still can’t <span className="text-blue">prove</span> software trust.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate">
                SolarWinds, Log4Shell, and XZ Utils showed that perimeter-only security fails when
                the threat originates in trusted software. Every dependency, pipeline, and
                AI-generated commit is a trust decision — and most organisations cannot demonstrate,
                continuously and with evidence, that those decisions are controlled.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate">
                NS-CTAF treats every stage of software production and distribution as an independently
                assessable trust boundary — producing a single, quantified Trust Score.
              </p>
              <div className="mt-6">
                <Button href="/what-is-ctaf" variant="outline">
                  Why NS-CTAF exists <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { k: "Security tools", v: "Find issues in code you already have.", muted: true },
                  { k: "NS-CTAF", v: "Proves the whole system can be trusted.", muted: false },
                  { k: "A scan", v: "Is a point-in-time snapshot.", muted: true },
                  { k: "A Trust Score", v: "Is a continuous, evidence-backed measure.", muted: false },
                ].map((c) => (
                  <div
                    key={c.k}
                    className={`rounded-[var(--radius-brand)] border p-5 ${
                      c.muted ? "border-line bg-grey" : "border-blue/20 bg-blue-soft"
                    }`}
                  >
                    <div className={`font-display font-bold ${c.muted ? "text-slate" : "text-blue"}`}>
                      {c.k}
                    </div>
                    <p className="mt-1 text-sm text-ink">{c.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Domains */}
      <Section className="bg-grey">
        <Container>
          <SectionHeading
            eyebrow="The framework"
            title="Six domains. Eighty-six controls."
            intro="The Nucleus Systems Code Trust Assurance Framework (NS-CTAF) measures trust across the full software lifecycle — each domain weighted by its impact on overall software trust posture."
          />
          <div className="mt-12">
            <DomainsGrid />
          </div>
          <div className="mt-8">
            <Button href="/framework" variant="dark">
              Open the full framework <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="How assessment works"
            title="From evidence to a public trust signal"
            intro="Assessment combines evidence, maturity scoring, automated tooling, and independent assessor validation."
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {flow.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="flex h-full flex-col rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-line">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Certification levels */}
      <Section className="bg-navy bg-trust-grid">
        <Container>
          <SectionHeading
            light
            eyebrow="Certification"
            title="Four levels of Code Trust Assurance"
            intro="Based on the Trust Score and minimum domain thresholds — with seven hard gates that must pass regardless of overall score."
          />
          <div className="mt-12">
            <CtaLevelCards />
          </div>
          <div className="mt-8">
            <Button href="/certification" variant="light">
              How certification works <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Registry preview */}
      <Section>
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Trust Registry"
              title="Verify certified companies"
              intro="A public directory where the market can verify certified companies by continent, country, sector, year, and certification level."
            />
            <Button href="/registry" variant="outline" className="shrink-0 self-start md:self-end">
              Search the registry <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((e) => (
              <RegistryCard key={e.slug} entry={e} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-[var(--radius-brand)] border border-line bg-grey p-5">
            <ShieldCheck className="h-6 w-6 text-blue" />
            <p className="flex-1 text-sm text-ink">
              Basic certificate verification is public. Certificate downloads, bulk checks, API
              verification, and full reports are available through Report Access bundles.
            </p>
            <Button href="/verify" variant="primary" size="sm">
              Verify a Certificate
            </Button>
          </div>
        </Container>
      </Section>

      {/* Trust score bands */}
      <Section className="bg-grey">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Executive-readable"
                title="One number the board understands"
                intro="The 0–100 Trust Score summarises true code-trust posture across all six domains — mapped directly to certification readiness."
              />
              <div className="mt-8 flex justify-center rounded-[var(--radius-brand)] border border-line bg-white p-8">
                <TrustScoreGauge score={71} label="Example score" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-[var(--radius-brand)] border border-line bg-white">
                {trustScoreBands.map((b, i) => (
                  <div
                    key={b.range}
                    className={`flex items-center gap-4 px-5 py-4 ${i !== 0 ? "border-t border-line" : ""}`}
                  >
                    <div className="w-20 font-mono text-sm font-semibold text-navy">{b.range}</div>
                    <div className="flex-1">
                      <div className="font-display font-semibold text-navy">
                        {b.label} <span className="text-slate">· {b.readiness}</span>
                      </div>
                      <div className="text-sm text-slate">{b.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Alignments */}
      <Section>
        <Container>
          <SectionHeading
            align="center"
            eyebrow="One assessment, many obligations"
            title="Aligned with the standards that matter"
            intro="NS-CTAF maps to major software-security frameworks and regulations — so a single assessment addresses multiple compliance obligations."
          />
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {alignments.map((a) => (
              <span
                key={a.name}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink shadow-[var(--shadow-brand-sm)]"
              >
                {a.name}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <div className="border-t border-line" />
      <section className="py-16 md:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[calc(var(--radius-brand)+8px)] bg-mesh bg-trust-grid px-8 py-14 text-center md:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold !text-white md:text-4xl">
              Before you trust a vendor’s software, verify its code trust posture.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-soft/80">
              Fixed fee {site.fee} · {site.turnaround} · Final report, CTA certificate, and 12-month roadmap.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="orange" size="lg">
                Get Assessed
              </Button>
              <Button href="/assessment" variant="light" size="lg">
                See the assessment journey
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
