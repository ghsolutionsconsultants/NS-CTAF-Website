import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Building2, FileSearch, ClipboardCheck, Lock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portal",
  description:
    "The Nucleus Systems Code Trust Assurance Framework portal for assessed companies, report subscribers, and assessors — evidence upload, registry search, and assessment workflow.",
};

const areas = [
  {
    icon: Building2,
    title: "Assessed companies",
    caps: [
      "Evidence upload & assessment status",
      "Draft scores and finding review",
      "Certificate management & report sharing",
      "Renewal reminders",
    ],
  },
  {
    icon: FileSearch,
    title: "Report subscribers",
    caps: [
      "Registry search & certificate downloads",
      "Report credits & full-report access",
      "Watchlists & expiry alerts",
      "Due-diligence exports",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Assessors",
    caps: [
      "Assessment management",
      "Evidence review & scoring",
      "Report generation",
      "Certification recommendation workflow",
    ],
  },
];

export default function PortalPage() {
  return (
    <>
      <PageHero
        eyebrow="The portal"
        title="One workspace for the whole trust lifecycle"
        intro="The portal digitises assessment workflows for assessed companies, report subscribers, and assessors. Sign-in launches with the certification programme."
      />
      <Section>
        <Container>
          <div className="stagger-in grid gap-5 md:grid-cols-3">
            {areas.map((a) => (
              <div key={a.title} className="flex flex-col rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                  <a.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{a.title}</h3>
                <ul className="mt-4 flex-1 space-y-2">
                  {a.caps.map((c) => (
                    <li key={c} className="flex gap-2 text-sm text-slate">
                      <span className="text-blue">·</span> {c}
                    </li>
                  ))}
                </ul>
                <button
                  disabled
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-line bg-grey px-5 py-2.5 text-sm font-medium text-slate"
                >
                  <Lock className="h-4 w-4" /> Sign-in coming soon
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 rounded-[var(--radius-brand)] border border-line bg-grey p-6 md:flex-row md:items-center">
            <p className="flex-1 text-sm text-ink">
              Want early access to the portal as part of your assessment? Start the conversation and
              we’ll onboard you when it opens.
            </p>
            <Button href="/contact" variant="dark">
              Get Assessed <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
