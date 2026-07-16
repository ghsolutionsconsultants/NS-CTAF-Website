import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/site";
import { Mail, CircleDollarSign, CalendarClock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Assessed",
  description:
    "Request a NS-CTAF assessment. Fixed fee, ~20 business days, and a CTA certificate. Tell us about your software and target certification level.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get assessed"
        title="Start your NS-CTAF assessment"
        intro="Tell us about your software and target certification level. Our team confirms eligibility and scope, then issues a fixed-fee proposal."
      />
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="font-display text-xl font-bold text-navy">What to expect</h2>
              <div className="mt-5 space-y-4">
                {[
                  { icon: CircleDollarSign, t: "Fixed fee", d: `${site.fee}, all-inclusive — form, verification, session, report, and certificate.` },
                  { icon: CalendarClock, t: "Fast turnaround", d: `${site.turnaround} from kickoff to certificate.` },
                  { icon: ShieldCheck, t: "Independent scoring", d: "All 86 controls scored independently, with hard gates applied." },
                ].map((c) => (
                  <div key={c.t} className="flex gap-4 rounded-[var(--radius-brand)] border border-line bg-white p-5">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-navy">{c.t}</div>
                      <p className="mt-1 text-sm text-slate">{c.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[var(--radius-brand)] border border-line bg-grey p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <Mail className="h-4 w-4 text-blue" /> Prefer email?
                </div>
                <a href={`mailto:${site.email}`} className="mt-1 block text-sm font-medium text-blue hover:text-blue-bright">
                  {site.email}
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
