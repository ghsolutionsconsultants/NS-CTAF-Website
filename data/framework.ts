// NS-CTAF v1.0 framework data — domains, the full 86-control library,
// maturity model, scoring axes, evidence tiers, and Trust Score bands.
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

export type EvidenceTierId = "T1" | "T2" | "T3" | "T4";
export type CtaRelevance = "CTA-1" | "CTA-2" | "CTA-3" | "CTA-4";

export interface Control {
  id: string; // e.g. "D1-01"
  domain: DomainId;
  name: string;
  description: string;
  evidenceTier: EvidenceTierId; // evidence required (strongest expected)
  maturityExpectation: string; // e.g. "L3"
  standards: string[]; // mapped standards / regulations
  certRelevance: CtaRelevance; // first CTA level that requires it
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

// Raw control names per domain, in order (from the Domain Architecture deck),
// each paired with a concise assessment-focused description.
const controlSeed: Record<DomainId, [string, string][]> = {
  D1: [
    ["Developer identity verification", "Every committer is cryptographically bound to a verified real-world identity."],
    ["Cryptographic commit signing", "Commits are signed and signatures are enforced at merge time."],
    ["Contribution attribution & audit trail", "Every change traces to an accountable author with an immutable log."],
    ["Signing key lifecycle management", "Signing keys are issued, rotated, escrowed, and revoked under policy."],
    ["Build identity attestations", "CI/CD builders assert their identity via signed attestations."],
    ["Pipeline identity & credentials", "Pipeline workloads use short-lived, scoped, auditable credentials."],
    ["Automated SBOM generation", "A Software Bill of Materials is produced automatically for every build."],
    ["SBOM lifecycle management", "SBOMs are versioned, stored, and kept current across releases."],
    ["Component origin verification", "The provenance of each component is verified before it enters a build."],
    ["Contributor trust weighting", "Contributions are risk-weighted by contributor history and trust level."],
    ["External contributor vetting", "Outside contributors are screened before code is accepted."],
    ["Credential revocation", "Compromised or stale identities and keys are revoked rapidly."],
    ["Trust Lineage Graph", "A graph links identity, provenance, and integrity across the lifecycle."],
    ["AI-generated code attribution", "AI-authored code is labelled, attributed, and trust-classified."],
    ["Federated identity standards", "Identity federates across organisations using open standards."],
  ],
  D2: [
    ["Signed commits enforcement", "Unsigned commits are blocked from protected branches."],
    ["Artifact signing", "Release artifacts are cryptographically signed before distribution."],
    ["Build provenance attestation", "Builds emit verifiable provenance describing how they were produced."],
    ["Tamper-evident pipeline", "Pipeline steps are recorded so tampering is detectable."],
    ["Reproducible builds", "Builds are bit-for-bit reproducible from source."],
    ["Immutable artifact storage", "Published artifacts cannot be silently altered or replaced."],
    ["Pipeline integrity monitoring", "Pipeline configuration and integrity are continuously monitored."],
    ["Dependency hash verification", "Dependencies are verified against known-good cryptographic hashes."],
    ["Release integrity gates", "Releases must pass integrity checks before promotion."],
    ["Container image signing", "Container images are signed and verified at deploy time."],
    ["Package hash verification", "Package contents are hash-verified on install."],
    ["Integrity exception governance", "Integrity exceptions are formally approved and time-bounded."],
    ["in-toto framework adoption", "Supply-chain steps are attested using the in-toto framework."],
    ["SLSA level achievement", "Build integrity is measured against SLSA build levels."],
    ["Binary transparency logging", "Released binaries are recorded in a public transparency log."],
  ],
  D3: [
    ["Threat modelling", "Systems are threat-modelled before and during development."],
    ["Security requirements definition", "Security requirements are defined alongside functional ones."],
    ["Secure coding standards", "Enforced secure-coding standards guide all development."],
    ["Security training (role-specific)", "Engineers receive security training tailored to their role."],
    ["SAST as CI/CD gate", "Static analysis runs as a blocking gate in the pipeline."],
    ["DAST integration", "Dynamic testing exercises running applications for flaws."],
    ["IAST & RASP deployment", "Interactive and runtime protection instrument live code paths."],
    ["Fuzz testing programme", "Fuzzing continuously probes inputs for undiscovered defects."],
    ["Security peer review", "Security-focused peer review is required before merge."],
    ["Pre-commit security hooks", "Local hooks catch secrets and issues before commit."],
    ["Security Champions programme", "Embedded champions drive security within each team."],
    ["Security requirements traceability", "Requirements trace to tests and implemented controls."],
    ["AI-generated code review policy", "AI-generated code undergoes enhanced, documented review."],
    ["IaC security scanning", "Infrastructure-as-code is scanned for misconfiguration."],
    ["Container vulnerability scanning", "Images are scanned for known vulnerabilities pre-deploy."],
    ["API security testing", "APIs are tested against authz, injection, and abuse cases."],
    ["Security regression testing", "Fixed vulnerabilities are guarded by regression tests."],
    ["Penetration testing", "Independent penetration tests validate real-world resilience."],
  ],
  D4: [
    ["Dependency inventory", "A complete, current inventory of all dependencies is maintained."],
    ["Automated CVE monitoring", "Dependencies are continuously monitored for new CVEs."],
    ["Dependency risk scoring", "Each dependency carries a quantified, tracked risk score."],
    ["Patch SLA enforcement", "Vulnerable dependencies are patched within defined SLAs."],
    ["Licence compliance", "Dependency licences are inventoried and policy-checked."],
    ["Transitive dependency analysis", "Indirect dependencies are resolved, mapped, and assessed."],
    ["Vendor / OSS assessment", "Suppliers and OSS projects are assessed for trustworthiness."],
    ["Supply chain attack detection", "Typosquatting and malicious-package signals are detected."],
    ["Automated dependency updates", "Safe dependency updates are automated and tested."],
    ["End-of-life tracking", "Unmaintained and EOL components are flagged and replaced."],
    ["Private registry control", "Internal artifacts flow through controlled private registries."],
    ["Dependency pinning", "Dependencies are pinned to verified, immutable versions."],
    ["SBOM-CVE correlation", "SBOMs are correlated against CVE feeds in real time."],
    ["Policy-as-code enforcement", "Dependency policy is enforced automatically as code."],
    ["Dependency vetting workflow", "New dependencies pass a documented vetting workflow."],
    ["Contractual SBOM obligations", "Suppliers are contractually required to provide SBOMs."],
  ],
  D5: [
    ["Runtime anomaly detection", "Anomalous runtime behaviour is detected and alerted."],
    ["Behavioral baseline", "Normal application behaviour is baselined for comparison."],
    ["Drift detection", "Deviation from expected configuration and behaviour is caught."],
    ["RASP protection", "Runtime application self-protection blocks live exploitation."],
    ["Application behavioral monitoring", "Application behaviour is monitored across production."],
    ["Kernel-level restrictions", "Workloads run under least-privilege kernel restrictions."],
    ["Audit logging & distributed tracing", "Actions are logged and traced end-to-end for forensics."],
    ["Runtime exploit detection", "Active exploitation attempts are detected at runtime."],
    ["Memory safety controls", "Memory-safety protections mitigate whole vulnerability classes."],
    ["Process behavior analytics", "Process activity is analysed for malicious patterns."],
    ["Runtime trust score updates", "Runtime signals continuously update the live Trust Score."],
    ["Cloud-native runtime controls", "Container and cloud-native runtime controls are enforced."],
  ],
  D6: [
    ["CTA Governance Charter", "A board-approved charter governs the code-trust programme."],
    ["Executive accountability", "A named executive owns code-trust outcomes and risk."],
    ["RACI matrix", "Responsibilities across trust controls are formally assigned."],
    ["Audit trail management", "Governance decisions and evidence are audit-logged and retained."],
    ["Compliance reporting", "Trust posture is reported to leadership and regulators."],
    ["Policy-as-code", "Governance policy is codified and enforced automatically."],
    ["Certification programme management", "Certification status and renewals are actively managed."],
    ["Third-party trust obligations", "Trust obligations extend contractually to third parties."],
    ["Regulatory compliance matrix", "Controls are mapped to applicable regulatory obligations."],
    ["Continuous improvement programme", "Findings feed a measured, continuous improvement loop."],
  ],
};

// Mapped standards per domain (§7.2 "mapped standard" filter facet).
const domainStandards: Record<DomainId, string[]> = {
  D1: ["NIST SSDF", "SLSA", "in-toto"],
  D2: ["SLSA", "in-toto", "EU CRA"],
  D3: ["NIST SSDF", "OWASP SAMM v2", "ISO 27001"],
  D4: ["EU CRA", "NIST SSDF", "SOC 2"],
  D5: ["SOC 2", "ISO 27001", "PCI DSS"],
  D6: ["ISO 27001", "DORA", "NIS2"],
};

// Domain-level default for the CTA level a control first becomes relevant at
// (§7.2 "certification relevance"), reflecting the CTA level requirements.
const domainCtaRelevance: Record<DomainId, CtaRelevance> = {
  D1: "CTA-1",
  D2: "CTA-2",
  D3: "CTA-2",
  D4: "CTA-1",
  D5: "CTA-3",
  D6: "CTA-1",
};

// Advanced controls that only become relevant at higher CTA levels.
const advancedControls: Record<string, CtaRelevance> = {
  "Reproducible builds": "CTA-4",
  "Binary transparency logging": "CTA-4",
  "SLSA level achievement": "CTA-3",
  "Trust Lineage Graph": "CTA-3",
  "Federated identity standards": "CTA-4",
  "AI-generated code attribution": "CTA-3",
  "Runtime trust score updates": "CTA-4",
  "Continuous improvement programme": "CTA-4",
  "IAST & RASP deployment": "CTA-3",
  "Fuzz testing programme": "CTA-3",
  "Policy-as-code enforcement": "CTA-3",
  "Cloud-native runtime controls": "CTA-4",
};

const T1 = /sign|attestation|provenance|hash|sbom|transparency|cryptograph|\bkey\b|reproducible|immutable|in-toto|slsa|binary|federated identity/i;
const T2 = /scan|monitor|detection|detect|sast|dast|iast|rasp|analytics|testing|baseline|drift|logging|tracing|automated|updates|behavior|behaviour|fuzz|exploit|anomaly/i;

function evidenceTierFor(name: string): EvidenceTierId {
  if (T1.test(name)) return "T1";
  if (T2.test(name)) return "T2";
  return "T3";
}

const expectationForLevel: Record<CtaRelevance, string> = {
  "CTA-1": "L2",
  "CTA-2": "L3",
  "CTA-3": "L4",
  "CTA-4": "L5",
};

export const controls: Control[] = domains.flatMap((d) =>
  controlSeed[d.id].map(([name, description], i) => {
    const certRelevance = advancedControls[name] ?? domainCtaRelevance[d.id];
    return {
      id: `${d.id}-${String(i + 1).padStart(2, "0")}`,
      domain: d.id,
      name,
      description,
      evidenceTier: evidenceTierFor(name),
      maturityExpectation: expectationForLevel[certRelevance],
      standards: domainStandards[d.id],
      certRelevance,
    };
  })
);

export const TOTAL_CONTROLS = controls.length; // 86

export const controlStandards = [...new Set(controls.flatMap((c) => c.standards))].sort();

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

export const scoringAxes = [
  { name: "Coverage", description: "How much of the estate the control actually reaches." },
  { name: "Automation", description: "How far the control runs without human intervention." },
  { name: "Integration", description: "How deeply it is embedded into the delivery pipeline." },
  { name: "Verification", description: "How independently the control’s operation can be proven." },
  { name: "Continuous Assurance", description: "How continuously the control is evidenced over time." },
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
