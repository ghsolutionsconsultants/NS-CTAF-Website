import type { Metadata } from "next";
import { Container, Section, Button } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { RegistrySearch } from "@/components/registry-search";
import { registry } from "@/data/registry";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Trust Registry",
  description:
    "The NS-CTAF Trust Registry — a searchable public directory of certified companies. Verify certificates by continent, country, sector, level, status, and year.",
};

export default function RegistryPage() {
  const active = registry.filter((r) => r.status === "Active").length;
  return (
    <>
      <PageHero
        eyebrow="NS-CTAF Trust Registry"
        title="Verify certified companies"
        intro="A public directory where customers, procurement teams, regulators, and investors can verify certified companies and check certificate status."
      >
        <Button href="/verify" variant="orange" size="lg">
          <ShieldCheck className="h-4 w-4" /> Verify by certificate ID
        </Button>
      </PageHero>

      <div className="border-b border-line bg-white">
        <Container className="grid grid-cols-2 gap-6 py-6 md:grid-cols-4">
          <Stat value={registry.length} label="Listed companies" />
          <Stat value={active} label="Active certificates" />
          <Stat value="7" label="Continents covered" />
          <Stat value="CTA-1→4" label="All levels" />
        </Container>
      </div>

      <Section>
        <Container>
          <RegistrySearch />
        </Container>
      </Section>

      <Section className="bg-grey">
        <Container>
          <div className="flex flex-col items-start gap-4 rounded-[var(--radius-brand)] border border-line bg-white p-6 md:flex-row md:items-center">
            <ShieldCheck className="h-8 w-8 flex-shrink-0 text-blue" />
            <div className="flex-1">
              <h2 className="font-display text-lg font-bold text-navy">Registry access safeguards</h2>
              <p className="mt-1 text-sm text-slate">
                Basic listings and certificate status are public. Certificate downloads, bulk checks,
                API verification, watchlists, and full reports are available through Report Access
                bundles — while sensitive technical evidence stays private by default.
              </p>
            </div>
            <Button href="/report-access" variant="dark">
              Report Access plans
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-navy">{value}</div>
      <div className="text-xs font-medium uppercase tracking-wider text-slate">{label}</div>
    </div>
  );
}
