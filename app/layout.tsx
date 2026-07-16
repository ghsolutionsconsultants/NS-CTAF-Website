import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ctaf.nucleus-systems.com"),
  title: {
    default: "Nucleus Systems Code Trust Assurance Framework (NS-CTAF)",
    template: "%s | NS-CTAF",
  },
  description:
    "The Nucleus Systems Code Trust Assurance Framework (NS-CTAF): the global standard for measuring, evidencing, and certifying software supply-chain trust. 86 controls, 6 domains, a 0–100 Trust Score, and CTA-1 to CTA-4 certification.",
  keywords: [
    "NS-CTAF",
    "Code Trust Assurance Framework",
    "software supply chain security",
    "SBOM",
    "SLSA",
    "NIST SSDF",
    "code trust",
    "Nucleus Systems",
  ],
  authors: [{ name: "Nucleus Systems" }],
  openGraph: {
    type: "website",
    title: "Nucleus Systems Code Trust Assurance Framework (NS-CTAF)",
    description:
      "Security tools find issues. NS-CTAF proves trust. The global framework for measuring, evidencing, and certifying software trust.",
    siteName: "NS-CTAF",
    url: "https://ctaf.nucleus-systems.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nucleus Systems Code Trust Assurance Framework (NS-CTAF)",
    description: "Security tools find issues. NS-CTAF proves trust.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen bg-white text-ink antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
