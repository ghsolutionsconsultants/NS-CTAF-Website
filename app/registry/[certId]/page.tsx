import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, Button } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { registry, findByCertId } from "@/data/registry";
import { ctaColor, ctaLevels, statusColor } from "@/data/certification";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  FileText,
  ShieldCheck,
  Download,
  Building2,
  Lock,
} from "lucide-react";

export function generateStaticParams() {
  return registry.map((r) => ({ certId: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ certId: string }>;
}): Promise<Metadata> {
  const { certId } = await params;
  const entry = findByCertId(certId);
  if (!entry) return { title: "Certificate not found" };
  return {
    title: `${entry.company} — ${entry.level}`,
    description: `${entry.company} holds a ${entry.level} certification for ${entry.product}. Verify status on the Nucleus Systems Code Trust Assurance Framework Trust Registry.`,
  };
}

export default async function CompanyProfilePage({
  params,
}: {
  params: Promise<{ certId: string }>;
}) {
  const { certId } = await params;
  const entry = findByCertId(certId);
  if (!entry) notFound();

  const levelDef = ctaLevels.find((l) => l.id === entry.level);

  const fields: { icon: React.ElementType; label: string; value: React.ReactNode }[] = [
    { icon: Building2, label: "Product / service assessed", value: entry.product },
    { icon: MapPin, label: "Country & continent", value: `${entry.country} · ${entry.continent}` },
    { icon: FileText, label: "Sector", value: entry.sector },
    { icon: ShieldCheck, label: "Certificate ID", value: <span className="font-mono">{entry.certId}</span> },
    { icon: FileText, label: "Framework version", value: entry.frameworkVersion },
    { icon: Calendar, label: "Issued", value: entry.issueDate },
    { icon: Calendar, label: "Expires", value: entry.expiryDate },
    { icon: Building2, label: "Assessor", value: entry.assessor },
  ];

  return (
    <>
      {/* Header band */}
      <section className="bg-mesh bg-trust-grid text-white">
        <Container className="py-12 md:py-16">
          <Link
            href="/registry"
            className="inline-flex items-center gap-1.5 text-sm text-blue-soft/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to registry
          </Link>
          <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold !text-white md:text-4xl">{entry.company}</h1>
              <p className="mt-2 text-blue-soft/80">{entry.product}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span
                  className="rounded-full px-3 py-1 text-sm font-bold text-white"
                  style={{ background: ctaColor(entry.level) }}
                >
                  {entry.level} · {levelDef?.name}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold"
                  style={{ color: "white" }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: statusColor(entry.status) }} />
                  {entry.status}
                </span>
              </div>
            </div>
            <div className="rounded-2xl bg-white/8 px-6 py-4 text-center">
              <div className="font-display text-4xl font-bold !text-white">
                {entry.trustScore}
                <span className="text-lg text-blue-soft/70">/100</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-blue-soft/70">Trust Score</div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="stagger-in grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            {/* Details */}
            <div>
              <h2 className="font-display text-xl font-bold text-navy">Certificate details</h2>
              <div className="mt-5 overflow-hidden rounded-[var(--radius-brand)] border border-line">
                {fields.map((f, i) => (
                  <div
                    key={f.label}
                    className={`grid grid-cols-[auto_1fr] items-center gap-4 px-5 py-4 md:grid-cols-[260px_1fr] ${i !== 0 ? "border-t border-line" : ""}`}
                  >
                    <div className="flex items-center gap-2 text-sm text-slate">
                      <f.icon className="h-4 w-4" /> {f.label}
                    </div>
                    <div className="text-sm font-medium text-navy">{f.value}</div>
                  </div>
                ))}
              </div>

              <h2 className="mt-8 font-display text-xl font-bold text-navy">Assessment scope</h2>
              <p className="mt-3 rounded-[var(--radius-brand)] border border-line bg-grey p-5 text-sm text-ink">
                {entry.scope}
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-5">
              <div className="rounded-[var(--radius-brand)] border border-line bg-white p-6">
                <h3 className="font-display font-bold text-navy">Verification</h3>
                <p className="mt-2 text-sm text-slate">
                  This listing is publicly verifiable. Basic status is free; downloads and full
                  reports are metered through Report Access.
                </p>
                <div className="mt-4 space-y-2.5">
                  {entry.certificatePdf ? (
                    <Button href={entry.certificatePdf} target="_blank" variant="primary" className="w-full">
                      <Download className="h-4 w-4" /> View certificate (PDF)
                    </Button>
                  ) : (
                    <div className="flex items-center gap-2 rounded-full border border-line bg-grey px-4 py-2.5 text-sm text-slate">
                      <Lock className="h-4 w-4" /> Certificate PDF — metered access
                    </div>
                  )}
                  <Button href="/verify" variant="outline" className="w-full">
                    <ShieldCheck className="h-4 w-4" /> Verify by certificate ID
                  </Button>
                  {entry.reportAvailable ? (
                    <div className="flex items-center gap-2 rounded-full border border-line bg-grey px-4 py-2.5 text-sm text-slate">
                      <FileText className="h-4 w-4" /> Full report — paid + consent / NDA
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 rounded-full border border-line bg-grey px-4 py-2.5 text-sm text-slate">
                      <Lock className="h-4 w-4" /> Full report — not published
                    </div>
                  )}
                </div>
              </div>

              {levelDef && (
                <div className="rounded-[var(--radius-brand)] border border-line bg-white p-6">
                  <h3 className="font-display font-bold text-navy">About {entry.level} {levelDef.name}</h3>
                  <p className="mt-2 text-sm text-slate">{levelDef.meaning}</p>
                  <Link href="/certification" className="mt-3 inline-block text-sm font-medium text-blue hover:text-blue-bright">
                    How certification works →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand title="Want your company listed in the Trust Registry?" />
    </>
  );
}
