// Explanatory NS-CTAF content, sourced from:
// "Code Trust Assurance Framework & Maturity Measurement Model —
//  NS-CTAF v1.0, Brief Summary, May 2026" (Nucleus Systems).
//
// Deliberately excludes the 86-control library, which is assessment IP and is
// not published. See reference/ns-ctaf-controls.ts.

/** The canonical one-paragraph definition used across the site. */
export const definition =
  "The Nucleus Systems Code Trust Assurance Framework & Maturity Measurement Model (NS-CTAF v1.0) is a continuous, cryptographically verifiable, and measurable standard for software code trust — spanning identity, integrity, secure development, supply chain, runtime assurance, and governance.";

/** The shorter definition, for cards and intros. */
export const definitionShort =
  "A framework where trust is measured, evidenced, and continuously proven across the full software lifecycle.";

export const category = "Code Trust Assurance Intelligence";

export interface Attribute {
  label: string;
  value: string;
}

export const frameworkAttributes: Attribute[] = [
  { label: "Framework name", value: "Nucleus Systems Code Trust Assurance Framework & Maturity Measurement Model (NS-CTAF v1.0)" },
  { label: "Edition", value: "Professional Edition v1.0 — 2026" },
  { label: "Controls", value: "86 controls, fully defined with requirements, guidance, and framework alignment" },
  { label: "Domains", value: "6 domains, weighted by trust significance and supply-chain risk impact" },
  { label: "Domain weights", value: "D1 Identity 18% · D2 Integrity 18% · D3 Secure Dev 22% · D4 Supply Chain 20% · D5 Runtime 14% · D6 Governance 8%" },
  { label: "Maturity scale", value: "L1 Initial → L2 Developing → L3 Defined → L4 Managed → L5 Optimised" },
  { label: "Maturity interpretations", value: "430 control-specific level interpretations (5 levels × 86 controls)" },
  { label: "Framework alignment", value: "NIST SSDF · SLSA · in-toto · Sigstore · OWASP SAMM · BSIMM · ISO/IEC 27001 · EU CRA · EO 14028 · NIS2 · DORA · PCI DSS v4.0.1 — 30+ in total" },
  { label: "Certification", value: "CTA-1 Transparent → CTA-2 Verified → CTA-3 Assured → CTA-4 Adaptive Trust" },
  { label: "Training", value: "Role-specific pathways: Developer · Security Engineer · Security Champion · Architect · Board" },
];

export interface Attack {
  name: string;
  year: string;
  compromised: string;
  missing: string;
  domain: string;
}

export const supplyChainAttacks: Attack[] = [
  {
    name: "SolarWinds SUNBURST",
    year: "2020",
    compromised: "Build pipeline integrity — malicious code injected into a signed release.",
    missing: "Tamper-evident pipeline design, build provenance attestation, artifact signing, in-toto attestations.",
    domain: "D2",
  },
  {
    name: "Log4Shell",
    year: "2021",
    compromised: "Transitive dependency visibility — organisations could not identify affected systems.",
    missing: "Dependency inventory management, transitive dependency analysis, SBOM-CVE correlation, dependency risk scoring.",
    domain: "D4",
  },
  {
    name: "XZ Utils backdoor",
    year: "2024",
    compromised: "Contributor identity trust — a maintainer account compromised over a two-year timeline.",
    missing: "Developer identity verification, contributor trust weighting, third-party identity vetting, trust lineage graph.",
    domain: "D1",
  },
  {
    name: "Polyfill.io supply chain",
    year: "2024",
    compromised: "Domain hijack — a legitimate CDN domain acquired and used to serve malicious code.",
    missing: "Supply chain attack detection, private registry controls, component origin verification.",
    domain: "D4",
  },
];

export interface Principle {
  name: string;
  description: string;
  why: string;
}

export const designPrinciples: Principle[] = [
  {
    name: "Cryptography-first",
    description: "Cryptographic evidence, signatures, attestations, and hashes back every trust claim. Policy assertions without cryptographic proof cannot achieve high maturity.",
    why: "Trust claims without cryptographic backing are unverifiable. In supply chain attacks, signed versus unsigned is the difference between evidence and assumption.",
  },
  {
    name: "Continuous over point-in-time",
    description: "Trust is measured continuously. Controls that only function on audit day cannot achieve high maturity scores.",
    why: "SolarWinds persisted for months because monitoring was periodic. Continuous signals eliminate the gap attackers exploit.",
  },
  {
    name: "Lifecycle-wide coverage",
    description: "Trust is demonstrated from developer identity through to runtime behaviour. Partial lifecycle coverage creates exploitable gaps.",
    why: "Supply chain attacks target the weakest link. A framework covering build integrity but not runtime gives false assurance in production.",
  },
  {
    name: "Evidence-graded maturity",
    description: "Maturity levels require progressively higher-quality evidence, from informal (L1) to continuous cryptographic (L5).",
    why: "Evidence quality separates genuine trust from documented intention. High standards prevent compliance theatre.",
  },
  {
    name: "AI-native architecture",
    description: "Controls explicitly address AI-generated code and AI coding tools. AI is a first-class trust dimension, not an afterthought.",
    why: "AI code volume is growing exponentially. Frameworks predating AI tools are structurally unable to address trust in AI-generated software.",
  },
  {
    name: "Automation-ready design",
    description: "Each control defines an automation pathway from manual (L2–L3) to continuously automated (L4–L5).",
    why: "Manual processes cannot scale with AI-driven code growth. Automation pathways keep NS-CTAF relevant at modern code velocity.",
  },
  {
    name: "Regulation-anchored",
    description: "Every control maps to specific articles of applicable regulations. Controls without a regulatory basis are not included.",
    why: "Organisations need legally defensible evidence. Regulatory anchoring makes assessment outputs auditor-ready.",
  },
];

/** Strategic rationale for each domain's weighting. */
export const domainRationale: Record<string, string> = {
  D1: "Every software artifact inherits trust from its creators and origins. Without cryptographically verified developer identity, commit authorship cannot be attributed and dependency origins cannot be traced.",
  D2: "SolarWinds and XZ Utils succeeded by compromising integrity precisely where it was assumed rather than verified. D2 converts implicit trust into cryptographic proof.",
  D3: "Fixing a defect in production costs roughly 15× more than catching it at design. D3 carries the highest weight because upstream prevention multiplies the effectiveness of every downstream control.",
  D4: "The most impactful supply chain attacks succeeded not by compromising the target's own code but by compromising trusted components. Every component must earn trust through verification.",
  D5: "Static analysis operates on code as written, not code as executed. A substantial class of vulnerabilities only manifests at runtime, and runtime assurance closes that gap.",
  D6: "Every major supply chain failure shares a root cause: accountability gaps. Either no one owned a component's security, or the owner lacked the authority to enforce controls.",
};

export interface MaturityDetail {
  level: string;
  score: string;
  meaning: string;
  characteristics: string[];
}

export const maturityDetail: MaturityDetail[] = [
  {
    level: "L1 — Initial",
    score: "1.0",
    meaning: "The control does not exist or is applied only reactively. No defined process, no accountability, no evidence of consistent operation.",
    characteristics: [
      "No named owner",
      "No documented process",
      "Evidence absent or anecdotal",
      "Controls applied after incidents, not proactively",
      "Cryptographic verification absent",
    ],
  },
  {
    level: "L2 — Developing",
    score: "2.0",
    meaning: "Basic processes exist but depend on individual knowledge rather than institutional systems. Controls are applied inconsistently.",
    characteristics: [
      "Basic policy documented",
      "Applied inconsistently across teams",
      "Manual, irregular evidence collection",
      "No formal performance measurement",
      "Cryptographic controls partially deployed",
    ],
  },
  {
    level: "L3 — Defined",
    score: "3.0",
    meaning: "Standardised, documented, and consistently applied across the full in-scope population, with a named owner and systematic evidence collection.",
    characteristics: [
      "Named owner with documented accountability",
      "Consistent application across all in-scope systems",
      "Regular review cycle with structured evidence",
      "Performance expectations formally defined",
      "Cryptographic controls fully deployed and verified",
    ],
  },
  {
    level: "L4 — Managed",
    score: "4.0",
    meaning: "Actively measured against defined performance targets, risk-integrated, and reported to leadership. Trust metrics feed the risk register.",
    characteristics: [
      "Defined KPIs with quantitative measurement",
      "Performance reported to security leadership",
      "Risk-integrated exception management",
      "Automated reporting and alerting",
      "Trust metrics in organisational risk registers",
    ],
  },
  {
    level: "L5 — Optimised",
    score: "5.0",
    meaning: "Highly automated and self-healing. Evidence is generated continuously and Trust Scores are computed in real time under independent continuous assurance.",
    characteristics: [
      "Automated control with self-healing capability",
      "Continuous cryptographic evidence generation",
      "Trust scores computed and published in real time",
      "Independent continuous assurance, not periodic audits",
      "AI-assisted anomaly detection and predictive risk modelling",
    ],
  },
];

export interface Regulation {
  name: string;
  inForce: string;
  requirement: string;
}

export const regulations: Regulation[] = [
  {
    name: "EU Cyber Resilience Act",
    inForce: "In force since December 2024",
    requirement: "Article 13 mandates SBOM provision, Article 14 vulnerability handling with defined notification timelines, and Article 18 supply chain security for integrated components. Fines reach €15 million or 2.5% of global annual turnover.",
  },
  {
    name: "US Executive Order 14028",
    inForce: "Signed May 2021, implemented 2022–2024",
    requirement: "Suppliers to the US federal government must attest to their software development practices, provide SBOMs for all delivered software, and demonstrate compliance with NIST SSDF SP 800-218.",
  },
  {
    name: "DORA",
    inForce: "Effective January 2025",
    requirement: "Articles 28–30 require EU financial entities and their ICT providers to implement contractual security obligations, conduct supply chain risk assessments, and evidence third-party risk management.",
  },
];

/** The checklist-versus-measurement contrast that defines the framework. */
export const checklistQuestions = [
  "Are your commits signed?",
  "Do you run security scans?",
  "Do you have a policy?",
];

export const measurementQuestions = [
  "How consistently are commits signed across your entire organisation — not just a few repositories?",
  "What percentage of your codebase is truly covered by enforced controls?",
  "How are signing keys generated, stored, rotated, and revoked?",
  "Are these controls operating continuously, or only when someone checks?",
  "Where is the verifiable evidence that proves all of this is working over time?",
];

/** What NS-CTAF evaluates, rather than rewarding documentation. */
export const whatItEvaluates = [
  "Consistency of implementation",
  "Depth of coverage",
  "Operational reliability over time",
  "Quality of evidence, especially cryptographic proof",
  "Level of automation and resilience",
];

/** Once trust is measurable, it becomes: */
export const measurableOutcomes = [
  { title: "Actionable", detail: "with clear, prioritised improvement pathways" },
  { title: "Comparable", detail: "across teams, systems, and organisations" },
  { title: "Defensible", detail: "under audit, regulatory scrutiny, and due diligence" },
  { title: "Scalable", detail: "through automation and continuous assurance" },
];
