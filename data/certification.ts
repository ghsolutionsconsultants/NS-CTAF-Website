// CTA certification levels, lifecycle, and public certificate statuses.

export type CtaLevel = "CTA-1" | "CTA-2" | "CTA-3" | "CTA-4";

export interface CtaLevelDef {
  id: CtaLevel;
  name: string;
  colorVar: string; // css var token
  meaning: string;
  trustScore: string;
  controls: string;
  requirements: string[];
}

export const ctaLevels: CtaLevelDef[] = [
  {
    id: "CTA-1",
    name: "Transparent",
    colorVar: "var(--color-cta1)",
    meaning:
      "The software supply chain is visible. SBOMs, basic scanning, dependency inventory, and ownership are in place.",
    trustScore: "≥ 30",
    controls: "45+ controls",
    requirements: [
      "L2 maturity in D1, D4, and D6",
      "Automated SBOM generation",
      "Basic identity & governance controls",
    ],
  },
  {
    id: "CTA-2",
    name: "Verified",
    colorVar: "var(--color-cta2)",
    meaning:
      "Trust is backed by cryptographic evidence — artifact signing, build provenance, and automated security controls.",
    trustScore: "≥ 48",
    controls: "63+ controls",
    requirements: [
      "L3 maturity in D1–D3",
      "Artifact signing & SLSA Build L2",
      "SAST gate and threat modelling in place",
    ],
  },
  {
    id: "CTA-3",
    name: "Assured",
    colorVar: "var(--color-cta3)",
    meaning:
      "Trust is continuously measured across development, supply chain, runtime, and governance.",
    trustScore: "≥ 62",
    controls: "78+ controls",
    requirements: [
      "L3.5+ maturity across all domains",
      "SLSA Build L3 and CVE patch SLAs",
      "Runtime anomaly detection operating",
    ],
  },
  {
    id: "CTA-4",
    name: "Adaptive Trust",
    colorVar: "var(--color-cta4)",
    meaning:
      "Trust is automated, continuously computed, self-healing, and independently verified.",
    trustScore: "≥ 78",
    controls: "86 / 86 controls",
    requirements: [
      "L4+ maturity across all domains",
      "SLSA Build L4 and reproducible builds",
      "Trust API and continuous re-certification",
    ],
  },
];

export const HARD_GATES = 7;

export const certificationLifecycle = [
  "Application and commercial onboarding",
  "Assessment scoping and evidence request",
  "Evidence submission through the portal",
  "Assessment and scoring",
  "Independent review and certification decision",
  "Certificate issue and registry listing",
  "Annual renewal and, for higher levels, quarterly verification",
  "Suspension or withdrawal if conditions degrade",
];

export type CertStatus =
  | "Active"
  | "Expiring Soon"
  | "Expired"
  | "Suspended"
  | "Withdrawn"
  | "Superseded";

export const certStatuses: { status: CertStatus; meaning: string; colorVar: string }[] = [
  { status: "Active", meaning: "Certificate is valid and current.", colorVar: "var(--color-status-active)" },
  { status: "Expiring Soon", meaning: "Expires within the notification period (e.g. 60 days).", colorVar: "var(--color-status-expiring)" },
  { status: "Expired", meaning: "Certificate validity has ended.", colorVar: "var(--color-status-expired)" },
  { status: "Suspended", meaning: "Temporarily paused pending review.", colorVar: "var(--color-status-suspended)" },
  { status: "Withdrawn", meaning: "Certification has been removed.", colorVar: "var(--color-status-withdrawn)" },
  { status: "Superseded", meaning: "Replaced by a newer certificate or assessment.", colorVar: "var(--color-status-withdrawn)" },
];

export function ctaColor(level: CtaLevel): string {
  return ctaLevels.find((l) => l.id === level)?.colorVar ?? "var(--color-blue)";
}

export function statusColor(status: CertStatus): string {
  return certStatuses.find((s) => s.status === status)?.colorVar ?? "var(--color-slate)";
}
