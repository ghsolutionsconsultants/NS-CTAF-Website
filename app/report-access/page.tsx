import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { bundles, bundleFeatures, accessRules } from "@/data/commerce";
import { Check, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Report Access",
  description:
    "Annual Report Access bundles for certificate downloads, full report reviews, watchlists, API verification, and due-diligence exports.",
};

const toneStyle: Record<string, string> = {
  public: "text-status-active",
  metered: "text-blue",
  paid: "text-orange",
  private: "text-status-expired",
};

export default function ReportAccessPage() {
  return (
    <>
      <PageHero
        eyebrow="Report access & annual bundles"
        title="Commercial access to trust intelligence"
        intro="Bundles for certificate downloads, full report reviews, watchlists, API verification, and due-diligence exports — while the full technical evidence pack stays private by default."
      >
        <Button href="/contact" variant="orange" size="lg">
          Talk to sales
        </Button>
      </PageHero>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Annual bundles"
            title="Ten tiers, from boutique to platform scale"
            intro="Each bundle sets annual certificate-access / download credits and full-report review credits. Higher tiers add API access."
          />
          <div className="mt-10 overflow-x-auto thin-scroll">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs uppercase tracking-wider text-slate">
                  <th className="px-4 py-3 font-semibold">Bundle</th>
                  <th className="px-4 py-3 font-semibold">Cert access / downloads</th>
                  <th className="px-4 py-3 font-semibold">Full report reviews</th>
                  <th className="px-4 py-3 font-semibold">API</th>
                  <th className="px-4 py-3 font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody>
                {bundles.map((b, i) => (
                  <tr key={b.name} className={`border-b border-line ${i % 2 ? "bg-grey/50" : ""}`}>
                    <td className="px-4 py-3 font-display font-bold text-navy">{b.name}</td>
                    <td className="px-4 py-3 font-mono text-navy">{b.certAccess.toLocaleString()}</td>
                    <td className="px-4 py-3 font-mono text-navy">{b.reportReviews.toLocaleString()}</td>
                    <td className="px-4 py-3">
                      {b.api ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue">
                          <Zap className="h-3.5 w-3.5" /> Yes
                        </span>
                      ) : (
                        <span className="text-xs text-slate">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-slate">{b.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section className="bg-grey">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Every bundle includes" title="Bundle features" />
              <ul className="mt-6 space-y-3">
                {bundleFeatures.map((f) => (
                  <li key={f} className="flex gap-3 rounded-[var(--radius-brand)] border border-line bg-white p-4">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue" />
                    <span className="text-sm text-ink">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="Access rules" title="What’s public, what’s paid" />
              <div className="mt-6 overflow-hidden rounded-[var(--radius-brand)] border border-line bg-white">
                {accessRules.map((r, i) => (
                  <div
                    key={r.item}
                    className={`flex items-center justify-between gap-4 px-5 py-3.5 ${i !== 0 ? "border-t border-line" : ""}`}
                  >
                    <span className="text-sm text-ink">{r.item}</span>
                    <span className={`text-sm font-semibold ${toneStyle[r.tone]}`}>{r.access}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate">
                This preserves market trust — basic verification stays free — while creating a
                sustainable subscription model for deeper access.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand title="Standardise vendor software-trust due diligence." intro="Verify certificates, review reports, and export due-diligence packs at scale." />
    </>
  );
}
