// Frameworks and regulations the Nucleus Systems Code Trust Assurance Framework
// maps to. A single assessment
// simultaneously addresses multiple compliance obligations.

export interface Alignment {
  name: string;
  category: "Framework" | "Regulation" | "Standard";
  blurb: string;
}

export const alignments: Alignment[] = [
  { name: "SLSA", category: "Framework", blurb: "Supply-chain Levels for Software Artifacts — build integrity levels." },
  { name: "NIST SSDF (SP 800-218)", category: "Framework", blurb: "Secure Software Development Framework practices." },
  { name: "OWASP SAMM v2", category: "Framework", blurb: "Software Assurance Maturity Model." },
  { name: "in-toto", category: "Framework", blurb: "Supply-chain step attestation framework." },
  { name: "EU Cyber Resilience Act", category: "Regulation", blurb: "EU product cybersecurity and SBOM obligations." },
  { name: "DORA", category: "Regulation", blurb: "Digital Operational Resilience Act for EU financial entities." },
  { name: "NIS2", category: "Regulation", blurb: "EU network & information security directive." },
  { name: "US EO 14028", category: "Regulation", blurb: "Executive Order on improving the nation’s cybersecurity." },
  { name: "ISO/IEC 27001:2022", category: "Standard", blurb: "Information security management systems." },
  { name: "SOC 2", category: "Standard", blurb: "Trust services criteria for service organisations." },
  { name: "PCI DSS v4.0.1", category: "Standard", blurb: "Payment card industry data security standard." },
];
