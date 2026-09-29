// Nucleus Systems Code Trust Assurance Framework v1.0 framework data — domains, maturity model, scoring axes,
// evidence tiers, and Trust Score bands.
//
// The 86-control library is deliberately NOT here: it is assessment IP and
// must not ship in the public bundle. It lives in reference/ns-ctaf-controls.ts,
// which nothing in app/ imports.
// Source: NS_CTAF_Domain_Architecture.pptx + Client Assessment Guide.

export type DomainId = "D1" | "D2" | "D3" | "D4" | "D5" | "D6";

export interface Domain {
  id: DomainId;
  slug: string;
  title: string;
  weight: number; // percentage
  controlCount: number;
  tagline: string;
  scope: string;
  icon: string; // lucide icon name
}

export const domains: Domain[] = [
  {
    id: "D1",
    slug: "identity-provenance",
    title: "Identity & Provenance",
    weight: 18,
    controlCount: 15,
    tagline: "Who wrote the code, and where it came from.",
    scope:
      "Developer and build identity cryptography, SBOM generation, contributor trust weighting, AI-generated code attribution, and cross-organisation identity federation.",
    icon: "Fingerprint",
  },
  {
    id: "D2",
    slug: "integrity-immutability",
    title: "Integrity & Immutability",
    weight: 18,
    controlCount: 15,
    tagline: "Whether builds and artifacts are tamper-proof.",
    scope:
      "Artifact signing, build provenance attestation, reproducible builds, immutable artifact storage, SLSA level achievement, and binary transparency logging.",
    icon: "ShieldCheck",
  },
  {
    id: "D3",
    slug: "secure-development",
    title: "Secure Development Practices",
    weight: 22,
    controlCount: 18,
    tagline: "Whether secure engineering stops vulnerabilities at the source.",
    scope:
      "Threat modeling, SAST/DAST/IAST/RASP integration, secure coding standards, developer security training, Security Champions Programme, and penetration testing.",
    icon: "Code2",
  },
  {
    id: "D4",
    slug: "dependency-supply-chain",
    title: "Dependency & Supply Chain",
    weight: 20,
    controlCount: 16,
    tagline: "Whether third-party components are governed and controlled.",
    scope:
      "CVE monitoring, dependency risk scoring, patch SLA management, private registry controls, SBOM-CVE correlation, and supplier contractual security obligations.",
    icon: "Boxes",
  },
  {
    id: "D5",
    slug: "runtime-behavior",
    title: "Runtime Behavior Assurance",
    weight: 14,
    controlCount: 12,
    tagline: "Whether deployed software keeps behaving as expected.",
    scope:
      "Runtime anomaly detection, behavioural baselines, drift detection, container runtime security, process behavior analytics, and runtime Trust Score updates.",
    icon: "Activity",
  },
  {
    id: "D6",
    slug: "governance-accountability",
    title: "Governance & Accountability",
    weight: 8,
    controlCount: 10,
    tagline: "Whether ownership and policy sustain trust over time.",
    scope:
      "CTA Governance Charter, executive accountability assignment, RACI matrix, audit trail management, policy-as-code enforcement, and regulatory compliance mapping.",
    icon: "Landmark",
  },
];

// ---------------------------------------------------------------------------

export interface MaturityLevel {
  level: string; // L1..L5
  name: string;
  type: string;
  short: string;
  definition: string;
}

export const maturityLevels: MaturityLevel[] = [
  {
    level: "L1",
    name: "Initial",
    type: "Ad Hoc",
    short: "Absent or informal",
    definition:
      "No documented process. The control is absent, informal, or exists only as individual knowledge. No named owner. Evidence is anecdotal. Risk is unmanaged.",
  },
  {
    level: "L2",
    name: "Developing",
    type: "Basic",
    short: "Inconsistent, manual",
    definition:
      "A process exists but is inconsistently applied. Manually executed and individual-dependent. Basic evidence exists but is not structured or regularly captured.",
  },
  {
    level: "L3",
    name: "Defined",
    type: "Standard",
    short: "Standardised & owned",
    definition:
      "Standardised, documented, and consistently applied across the organisation. Named owner. Structured evidence retained. The minimum regulatory baseline for most obligations.",
  },
  {
    level: "L4",
    name: "Managed",
    type: "Measured",
    short: "KPI-driven & measured",
    definition:
      "KPI-driven with continuous measurement. Performance tracked and reported. Exceptions formally managed with time-bounded resolution. System-generated evidence.",
  },
  {
    level: "L5",
    name: "Optimised",
    type: "Automated",
    short: "Automated & assured",
    definition:
      "Fully automated, self-healing, and continuously evidenced. Independently assured by third-party attestation. Self-improving from measured outcomes and threat intelligence.",
  },
];

export interface ScoringAxis {
  name: string;
  weight: number; // percentage of the control score
  assesses: string;
  why: string;
}

// The official Nucleus Systems Code Trust Assurance Framework v1.0 5-axis scoring model. A control is only as strong
// as its weakest dimension, so strength in one axis cannot mask a critical
// weakness in another.
export const scoringAxes: ScoringAxis[] = [
  {
    name: "Design Adequacy",
    weight: 20,
    assesses:
      "Is the control well designed for the specific trust threat? Are appropriate cryptographic primitives used, across the full population?",
    why: "A poorly designed signing scheme — wrong algorithms or key lengths — gives false assurance no matter how consistently it is applied.",
  },
  {
    name: "Implementation Coverage",
    weight: 25,
    assesses:
      "Is the control deployed across 100% of the in-scope population, with exceptions formally documented?",
    why: "90% signing coverage means 10% of artifacts can be substituted without detection. Coverage is binary from an attacker's perspective.",
  },
  {
    name: "Operating Effectiveness",
    weight: 25,
    assesses:
      "Does the control operate consistently in normal operations, with three or more months of continuous evidence?",
    why: "Signing processes that fail silently provide no real protection. Consistent operation is the difference between a control and a policy statement.",
  },
  {
    name: "Monitoring & Assurance",
    weight: 20,
    assesses: "Is the control independently tested, and are trust metrics reported against KPIs?",
    why: "Unmeasured trust controls degrade silently. Monitoring ensures degradation is detected before an attacker exploits it.",
  },
  {
    name: "Automation & Resilience",
    weight: 10,
    assesses: "Is the control automated, and does it sustain itself without constant human intervention?",
    why: "Manual processes cannot scale with modern code velocity, particularly as AI-generated code volume grows.",
  },
];

export interface EvidenceTier {
  tier: string;
  name: string;
  description: string;
  examples: string;
}

export const evidenceTiers: EvidenceTier[] = [
  {
    tier: "T1",
    name: "Cryptographic evidence",
    description: "The strongest, machine-verifiable proof.",
    examples: "Signatures, attestations, hashes, transparency-log entries, SBOMs, provenance records.",
  },
  {
    tier: "T2",
    name: "System-generated artefacts",
    description: "Automated output from tooling and pipelines.",
    examples: "CI/CD logs, automated scan reports, pipeline execution records, monitoring dashboards.",
  },
  {
    tier: "T3",
    name: "Structured documentation",
    description: "Maintained records and process artefacts.",
    examples: "Policies, standards, process documents, architecture diagrams, manual records.",
  },
  {
    tier: "T4",
    name: "Management attestation",
    description: "The weakest tier — assertions only.",
    examples: "Interview responses, declarations, and unverified assertions.",
  },
];

export interface TrustScoreBand {
  range: string;
  min: number;
  label: string;
  readiness: string;
  action: string;
}

export const trustScoreBands: TrustScoreBand[] = [
  {
    range: "80–100",
    min: 80,
    label: "Optimised",
    readiness: "CTA-4 readiness",
    action: "Sustain, validate through advanced testing, and publish high-assurance trust signals.",
  },
  {
    range: "65–79",
    min: 65,
    label: "Managed",
    readiness: "CTA-3 readiness",
    action: "Increase automation and progress priority domains toward CTA-4.",
  },
  {
    range: "50–64",
    min: 50,
    label: "Defined",
    readiness: "CTA-2 readiness",
    action: "Address gaps systematically and fund the maturity roadmap.",
  },
  {
    range: "30–49",
    min: 30,
    label: "Developing",
    readiness: "CTA-1 readiness",
    action: "Create executive focus and fund remediation.",
  },
  {
    range: "Below 30",
    min: 0,
    label: "Initial",
    readiness: "High exposure",
    action: "Escalate to leadership and establish a CTA-1 baseline first.",
  },
];
