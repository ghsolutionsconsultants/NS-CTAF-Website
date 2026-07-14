// Site-wide constants and navigation.

export const site = {
  name: "NS-CTAF",
  fullName: "Code Trust Assurance Framework",
  owner: "Nucleus Systems (Pty) Ltd",
  frameworkVersion: "NS-CTAF v1.0",
  email: "enquiries@nucleus-systems.com",
  fee: "$5,000 USD",
  turnaround: "~20 business days",
  tagline: "Security tools find issues. CTAF proves trust.",
  category: "Code Trust Assurance Intelligence",
  metrics: {
    controls: 86,
    domains: 6,
    maturityLevels: 5,
    ctaLevels: 4,
    alignments: "30+",
    axes: 5,
  },
};

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const primaryNav: NavItem[] = [
  { label: "Framework", href: "/framework", description: "6 domains, 86 controls, maturity model, Trust Score." },
  { label: "Assessment", href: "/assessment", description: "Process, evidence, deliverables, and the engagement journey." },
  { label: "Certification", href: "/certification", description: "CTA-1 to CTA-4 levels, lifecycle, and status rules." },
  { label: "Trust Registry", href: "/registry", description: "Search certified companies and verify certificates." },
  { label: "Report Access", href: "/report-access", description: "Annual bundles for certificates, reports, and API." },
  { label: "Resources", href: "/resources", description: "Whitepapers, guides, checklists, and FAQs." },
  { label: "About", href: "/about", description: "Who created CTAF and why." },
  { label: "What is CTAF", href: "/what-is-ctaf", description: "Definition, why it exists, and who created it." },
  { label: "Industries", href: "/industries", description: "Why CTAF matters to your sector." },
  { label: "Training", href: "/training", description: "Role-based enablement pathways." },
  { label: "Partners & Assessors", href: "/partners", description: "Accredited assessor and partner programme." },
];

// Header nav follows the strategy's recommended top-level structure (§3);
// the remaining pages live under "More" and in the footer.
export const headerNav: NavItem[] = [
  { label: "Framework", href: "/framework" },
  { label: "Assessment", href: "/assessment" },
  { label: "Certification", href: "/certification" },
  { label: "Trust Registry", href: "/registry" },
  { label: "Report Access", href: "/report-access" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Framework",
    items: [
      { label: "What is CTAF", href: "/what-is-ctaf" },
      { label: "The Framework", href: "/framework" },
      { label: "Maturity & Trust Score", href: "/framework#trust-score" },
      { label: "Control Library", href: "/framework#controls" },
    ],
  },
  {
    heading: "Services",
    items: [
      { label: "Assessment", href: "/assessment" },
      { label: "Certification", href: "/certification" },
      { label: "Report Access", href: "/report-access" },
      { label: "Portal", href: "/portal" },
    ],
  },
  {
    heading: "Trust Registry",
    items: [
      { label: "Search Registry", href: "/registry" },
      { label: "Verify a Certificate", href: "/verify" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Resources", href: "/resources" },
      { label: "Training", href: "/training" },
      { label: "Partners & Assessors", href: "/partners" },
      { label: "Get Assessed", href: "/contact" },
    ],
  },
];
