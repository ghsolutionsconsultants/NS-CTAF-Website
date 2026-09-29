import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { governanceSafeguards } from "@/data/content";
import { site } from "@/data/site";
import { Check, ShieldCheck, Scale, Users, ArrowRight } from "lucide-react";

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
        intro="The Nucleus Systems Code Trust Assurance Framework is a public trust infrastructure for the software economy — defining trust, measuring trust, certifying trust, and making trust visible to the market."
      >
        <Button href="/contact" variant="orange" size="lg">
          Get in touch <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Who created the Framework" title="A framework built on assurance work" />
              <p className="mt-5 text-lg leading-relaxed text-slate">
                Nucleus Systems Code Trust Assurance Framework was created by {site.owner} as part of its work in software assurance, code
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
            <div className="grid gap-4 sm:grid-cols-2">
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
            intro="A framework that certifies trust must itself be governed transparently. These safeguards keep Nucleus Systems Code Trust Assurance Framework credible as it scales."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {governanceSafeguards.map((g) => (
              <div key={g} className="flex gap-3 rounded-[var(--radius-brand)] border border-line bg-white p-5">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue" />
                <span className="text-sm text-ink">{g}</span>
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
