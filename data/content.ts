// Industries, resources, training, use cases, and governance safeguards.

export interface Industry {
  slug: string;
  title: string;
  focus: string;
  problem: string;
  priorityDomains: string[];
  targetLevel: string;
  value: string;
  icon: string;
}

export const industries: Industry[] = [
  {
    slug: "software-vendors",
    title: "Software Vendors",
    focus: "Use certification as a customer trust and procurement differentiator.",
    problem: "Buyers increasingly demand evidence of software trust before they purchase — claims are no longer enough.",
    priorityDomains: ["D1 Identity & Provenance", "D2 Integrity & Immutability", "D3 Secure Development"],
    targetLevel: "CTA-2 Verified or higher",
    value: "Shorten security reviews, win procurement, and differentiate on demonstrable trust.",
    icon: "Package",
  },
  {
    slug: "banks-fintech",
    title: "Banks & FinTech",
    focus: "Assess ICT supplier risk, software supply chain risk, and operational resilience.",
    problem: "Regulators (DORA, NIS2) require evidence-backed control over ICT and software supply chain risk.",
    priorityDomains: ["D4 Dependency & Supply Chain", "D6 Governance", "D2 Integrity"],
    targetLevel: "CTA-3 Assured",
    value: "Satisfy operational-resilience obligations and standardise supplier assurance.",
    icon: "Landmark",
  },
  {
    slug: "saas-providers",
    title: "SaaS Providers",
    focus: "Demonstrate secure delivery, dependency assurance, and runtime trust.",
    problem: "Continuous delivery and heavy OSS reliance widen the supply-chain attack surface.",
    priorityDomains: ["D3 Secure Development", "D4 Dependency & Supply Chain", "D5 Runtime Behavior"],
    targetLevel: "CTA-2 to CTA-3",
    value: "Prove continuous, evidence-backed assurance to enterprise customers.",
    icon: "Cloud",
  },
  {
    slug: "open-source",
    title: "Open-Source Projects",
    focus: "Improve trust through contributor identity, dependency transparency, and secure development.",
    problem: "Maintainer identity, provenance, and dependency risk are hard to demonstrate at scale.",
    priorityDomains: ["D1 Identity & Provenance", "D2 Integrity", "D4 Dependency"],
    targetLevel: "CTA-1 Transparent",
    value: "Signal maturity to downstream consumers and funders with independent evidence.",
    icon: "GitBranch",
  },
  {
    slug: "ai-software",
    title: "AI Software Companies",
    focus: "Address AI-generated code attribution, enhanced review, and trust classification.",
    problem: "AI-generated code introduces new attribution, review, and provenance challenges.",
    priorityDomains: ["D1 Identity & Provenance", "D3 Secure Development", "D5 Runtime Behavior"],
    targetLevel: "CTA-3 to CTA-4",
    value: "Establish trust classification and review controls for AI-authored code.",
    icon: "Cpu",
  },
  {
    slug: "regulators",
    title: "Regulators",
    focus: "Provide evidence-backed maturity and certification signals for supervisory review.",
    problem: "Supervisors need a consistent, comparable measure of software supply-chain posture.",
    priorityDomains: ["D6 Governance", "D2 Integrity", "D4 Dependency"],
    targetLevel: "Reference framework",
    value: "A common yardstick mapped to CRA, DORA, NIS2, and EO 14028.",
    icon: "Scale",
  },
  {
    slug: "ma-investors",
    title: "M&A & Investors",
    focus: "Assess software product trust risk before acquisition or investment.",
    problem: "Software risk is often opaque during due diligence and priced in too late.",
    priorityDomains: ["D2 Integrity", "D3 Secure Development", "D4 Dependency"],
    targetLevel: "Assessment-driven",
    value: "Quantify software trust risk as an input to valuation and deal terms.",
    icon: "TrendingUp",
  },
  {
    slug: "critical-infrastructure",
    title: "Critical Infrastructure",
    focus: "Prioritise integrity, runtime behaviour assurance, and supplier trust obligations.",
    problem: "Compromise of trusted software can cascade into physical and societal impact.",
    priorityDomains: ["D2 Integrity", "D5 Runtime Behavior", "D4 Dependency"],
    targetLevel: "CTA-3 to CTA-4",
    value: "Assure integrity and runtime trust across critical software supply chains.",
    icon: "Factory",
  },
];

export interface UseCase {
  audience: string;
  help: string;
}

export const useCases: UseCase[] = [
  { audience: "Software vendors", help: "Demonstrate trust posture to customers and procurement teams." },
  { audience: "Banks & financial institutions", help: "Assess ICT supplier and software supply-chain risk." },
  { audience: "Open-source projects", help: "Show maturity around identity, provenance, and secure development." },
  { audience: "Enterprises", help: "Build a measurable code-trust programme across internal applications." },
  { audience: "Regulators & auditors", help: "Review evidence-backed maturity against applicable obligations." },
  { audience: "M&A and investors", help: "Assess software product risk during due diligence." },
  { audience: "Boards", help: "Understand code trust as a business, operational, and regulatory metric." },
];

export interface Resource {
  title: string;
  type: string;
  blurb: string;
  icon: string;
}

export const resources: Resource[] = [
  { title: "Code Trust Assurance Executive Whitepaper", type: "Whitepaper", blurb: "The case for code trust assurance intelligence, for boards and executives.", icon: "FileText" },
  { title: "Code Trust Assurance Certification Guide", type: "Guide", blurb: "How the CTA-1 to CTA-4 certification programme works, end to end.", icon: "Award" },
  { title: "Assessment Preparation Checklist", type: "Checklist", blurb: "Get your evidence, scope, and teams ready before assessment.", icon: "ListChecks" },
  { title: "Buyer’s Guide to Software Trust", type: "Guide", blurb: "For procurement and vendor-risk teams evaluating software suppliers.", icon: "ShoppingCart" },
  { title: "SBOM & Dependency Assurance Guide", type: "Guide", blurb: "Practical guidance on SBOMs, CVE correlation, and supply-chain control.", icon: "Boxes" },
  { title: "Secure Build Pipeline Guide", type: "Guide", blurb: "Signing, provenance, reproducible builds, and SLSA in practice.", icon: "Workflow" },
  { title: "AI-Generated Code Assurance Guide", type: "Guide", blurb: "Attribution, enhanced review, and trust classification for AI code.", icon: "Cpu" },
  { title: "Code Trust Assurance Glossary", type: "Reference", blurb: "Definitions for every term used across the framework.", icon: "BookOpen" },
  { title: "Frequently Asked Questions", type: "FAQ", blurb: "Common questions on assessment, scoring, and certification.", icon: "HelpCircle" },
];

export interface TrainingTrack {
  title: string;
  audience: string;
  blurb: string;
  icon: string;
}

export const trainingTracks: TrainingTrack[] = [
  { title: "Code Trust Assurance Executive Briefing", audience: "Boards, CEOs, CIOs, CISOs, audit committees", blurb: "Understand code trust as a business, operational, and regulatory risk.", icon: "Presentation" },
  { title: "Code Trust Assurance Practitioner", audience: "Security engineers, DevSecOps, AppSec teams", blurb: "Operate the framework's controls across the delivery lifecycle.", icon: "Wrench" },
  { title: "Code Trust Assurance Developer Foundation", audience: "Software engineers and engineering managers", blurb: "Build trust-by-design into everyday development.", icon: "Code2" },
  { title: "Code Trust Assurance Security Champion", audience: "Nominated champions in engineering teams", blurb: "Drive secure development from within the team.", icon: "Shield" },
  { title: "Code Trust Assurance Assessor Training", audience: "Internal and external accredited assessors", blurb: "Assess evidence, apply hard gates, and score consistently.", icon: "ClipboardCheck" },
  { title: "Code Trust Assurance Procurement Training", audience: "Vendor risk, procurement, compliance teams", blurb: "Use Nucleus Systems Code Trust Assurance Framework to evaluate and compare software suppliers.", icon: "ShoppingBag" },
];

export interface PartnerTrack {
  title: string;
  blurb: string;
  points: string[];
  icon: string;
}

export const partnerTracks: PartnerTrack[] = [
  {
    title: "Accredited Assessor Programme",
    blurb: "Become an independent Nucleus Systems Code Trust Assurance Framework assessor.",
    points: [
      "Formal accreditation and assessor training",
      "Annual recertification to stay accredited",
      "Consistent scoring against the five Nucleus Systems Code Trust Assurance Framework axes",
    ],
    icon: "ClipboardCheck",
  },
  {
    title: "Consulting Partner Programme",
    blurb: "Help clients close gaps and reach certification.",
    points: [
      "Implementation support for assessed organisations",
      "Readiness and remediation engagements",
      "Access to Nucleus Systems Code Trust Assurance Framework enablement and materials",
    ],
    icon: "Handshake",
  },
  {
    title: "Technology Integration Partners",
    blurb: "Automate evidence collection and verification.",
    points: [
      "Integrate signing, SBOM, and scanning tooling",
      "Automated evidence feeds into assessments",
      "Verification and Trust API integrations",
    ],
    icon: "Plug",
  },
  {
    title: "Regional Representatives",
    blurb: "Extend Nucleus Systems Code Trust Assurance Framework into new markets.",
    points: [
      "Regional expansion and market development",
      "Local language and regulatory context",
      "Front-line relationships with assessed organisations",
    ],
    icon: "Globe",
  },
];

export const assessorPolicies = [
  "Assessor ethics and code of conduct",
  "Independence from assessed organisations",
  "Conflict-of-interest declaration and management",
  "Quality assurance and peer review of scoring",
];

export const governanceSafeguards = [
  "Certification methodology published at a high level",
  "Certificate status rules and verification process published",
  "Appeals, suspension, and withdrawal policy",
  "Assessor independence and conflict-of-interest policy",
  "Independent advisory board as adoption grows",
  "Versioned framework with published release notes",
  "Sensitive technical evidence kept private; external assurance reports allowed",
];
