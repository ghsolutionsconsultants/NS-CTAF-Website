// The 8-stage client assessment journey — first contact to CTA certification.
// Fixed fee $5,000 USD · ~20 business days.

export interface JourneyStage {
  n: string;
  phase: string;
  title: string;
  owner: string;
  duration: string;
  steps: string[];
  outcome: string;
}

export const journey: JourneyStage[] = [
  {
    n: "01",
    phase: "Discovery",
    title: "Awareness & Research",
    owner: "Client · Self-paced",
    duration: "Self-paced",
    steps: [
      "Read the Nucleus Systems Code Trust Assurance Framework framework overview and domain summaries",
      "Review CTA certification levels and minimum requirements",
      "Identify applicable regulations (EU CRA, DORA, EO 14028)",
    ],
    outcome: "Framework understanding · Target CTA level identified",
  },
  {
    n: "02",
    phase: "Engagement",
    title: "Initial Contact & Session",
    owner: "Client + NS",
    duration: "1–3 days",
    steps: [
      "Reach out via info@nucleus-systems.com or the website",
      "Introductory session or email exchange on scope",
      "NS confirms eligibility and target CTA level",
    ],
    outcome: "Agreed scope · Confirmed target CTA level",
  },
  {
    n: "03",
    phase: "Proposal",
    title: "Proposal & Agreement",
    owner: "Client + NS",
    duration: "2–5 days",
    steps: [
      "NS issues a fixed-fee proposal — $5,000 USD all-inclusive",
      "Covers form, verification, session, report, and certificate",
      "Client signs the engagement letter and processes payment",
    ],
    outcome: "Signed agreement · Payment confirmed · Scheduled",
  },
  {
    n: "04",
    phase: "Assessment",
    title: "Assessment Pack Issued",
    owner: "Nucleus Systems",
    duration: "Day 1",
    steps: [
      "NS issues the Client Assessment Guide and Excel Form",
      "Client completes all domain tabs and the Scoping tab",
      "Evidence Register populated · EV-IDs assigned",
    ],
    outcome: "Completed form returned to Nucleus Systems",
  },
  {
    n: "05",
    phase: "Assessment",
    title: "Validation Session",
    owner: "Client + NS",
    duration: "90–120 min",
    steps: [
      "Walkthrough of all form answers with the client team",
      "NS requests evidence samples for L3+ rated controls",
      "Clarifications recorded · Ambiguous ratings confirmed",
    ],
    outcome: "Verified answers · Evidence log · Outstanding items",
  },
  {
    n: "06",
    phase: "Analysis",
    title: "Internal Analysis & Scoring",
    owner: "Nucleus Systems",
    duration: "3–5 days",
    steps: [
      "NS independently scores all 86 controls",
      "Trust Score computed · Domain scores weighted 0–100",
      "CTA level determined · 7 hard gates verified",
    ],
    outcome: "Trust Score · Domain scores · CTA level · Gap analysis",
  },
  {
    n: "07",
    phase: "Reporting",
    title: "Draft Report Review",
    owner: "Client + NS",
    duration: "3–5 days",
    steps: [
      "Draft report shared for factual-accuracy review",
      "Client may correct context — not verified ratings",
      "NS incorporates corrections and finalises content",
    ],
    outcome: "Agreed findings · Finalised roadmap · Approved draft",
  },
  {
    n: "08",
    phase: "Completion",
    title: "Final Report & Certificate",
    owner: "Nucleus Systems",
    duration: "Day ~22",
    steps: [
      "Signed final report issued with verified Trust Score",
      "CTA Certificate issued at achieved level (CTA-1 → CTA-4)",
      "Improvement roadmap and next assessment date confirmed",
    ],
    outcome: "Final Report · CTA Certificate · Improvement Roadmap",
  },
];

export const assessmentPhases = [
  {
    phase: "1. Scoping",
    description: "Define systems, repositories, pipelines, products, environments, and regulatory context.",
    output: "Assessment scope and priority domain list.",
  },
  {
    phase: "2. Evidence Collection",
    description: "Collect SBOMs, CI/CD logs, signing evidence, policies, scan outputs, attestations, runtime data, and governance documents.",
    output: "Evidence register and gap log.",
  },
  {
    phase: "3. Automated Tool Review",
    description: "Use the Nucleus Systems Code Trust Assurance Framework assessment tool to structure scoring, dashboards, recommendations, roadmap, and readiness.",
    output: "Draft scorecard and preliminary roadmap.",
  },
  {
    phase: "4. Assessor Validation",
    description: "Review evidence quality, test claims, apply hard scoring gates, and validate control maturity.",
    output: "Validated maturity scores.",
  },
  {
    phase: "5. Reporting",
    description: "Produce Trust Score, domain scores, control gaps, roadmap, board report, and regulatory view.",
    output: "Final report pack.",
  },
  {
    phase: "6. Certification Readiness",
    description: "Determine whether the assessed organisation qualifies for CTA-1, CTA-2, CTA-3, or CTA-4.",
    output: "Certification recommendation.",
  },
];

export const deliverables = [
  "Nucleus Systems Code Trust Assurance Framework Trust Score and domain maturity scores",
  "Control-level maturity analysis across applicable controls",
  "Evidence quality review and evidence register",
  "Certification readiness assessment",
  "Prioritised 12-month improvement roadmap",
  "Board-ready report written in non-technical language",
  "Optional public certificate and shareable assurance report",
];

export const methodPrinciples = [
  "Evidence-first assessment, cryptographic evidence preferred",
  "No maturity inflation through policy-only evidence",
  "Clear scope definition before scoring begins",
  "Repeatable scoring across the five Nucleus Systems Code Trust Assurance Framework axes",
  "Hard scoring gates cap maturity where trust conditions are absent",
  "Independent review before certification is issued",
];
