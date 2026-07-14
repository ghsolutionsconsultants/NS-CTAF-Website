// Report Access annual bundles and recommended access rules.

export interface Bundle {
  name: string;
  certAccess: number;
  reportReviews: number;
  bestFor: string;
  api: boolean;
}

export const bundles: Bundle[] = [
  { name: "Bundle 1", certAccess: 60, reportReviews: 30, bestFor: "Small procurement teams and boutique advisors.", api: false },
  { name: "Bundle 2", certAccess: 120, reportReviews: 60, bestFor: "Mid-sized vendor risk teams.", api: false },
  { name: "Bundle 3", certAccess: 240, reportReviews: 120, bestFor: "Banks, insurers, and enterprise procurement.", api: false },
  { name: "Bundle 4", certAccess: 480, reportReviews: 240, bestFor: "Large enterprises and regulated groups.", api: true },
  { name: "Bundle 5", certAccess: 960, reportReviews: 480, bestFor: "Multi-country organisations.", api: true },
  { name: "Bundle 6", certAccess: 1920, reportReviews: 960, bestFor: "Global procurement teams.", api: true },
  { name: "Bundle 7", certAccess: 3840, reportReviews: 1920, bestFor: "Sector-wide assurance programmes.", api: true },
  { name: "Bundle 8", certAccess: 7680, reportReviews: 3840, bestFor: "Large financial groups or regulators.", api: true },
  { name: "Bundle 9", certAccess: 15360, reportReviews: 7680, bestFor: "Global market-intelligence users.", api: true },
  { name: "Bundle 10", certAccess: 30720, reportReviews: 15360, bestFor: "Platform and API-scale access.", api: true },
];

export const bundleFeatures = [
  "Certificate verification and PDF certificate downloads",
  "Full report access credits",
  "Saved watchlists and expiry alerts",
  "Sector benchmarking and exportable due-diligence packs",
  "API access for higher bundles",
  "Multi-user account management and procurement workflow support",
];

export const accessRules: { item: string; access: string; tone: "public" | "metered" | "paid" | "private" }[] = [
  { item: "Basic company listing", access: "Public", tone: "public" },
  { item: "Certificate status", access: "Public", tone: "public" },
  { item: "Certificate PDF", access: "Public or metered", tone: "metered" },
  { item: "Certificate verification API", access: "Paid", tone: "paid" },
  { item: "Summary report", access: "Paid or request-based", tone: "paid" },
  { item: "Full report", access: "Paid + company consent / NDA", tone: "paid" },
  { item: "Technical evidence pack", access: "Private only", tone: "private" },
  { item: "Vulnerability detail", access: "Restricted — never public", tone: "private" },
];
