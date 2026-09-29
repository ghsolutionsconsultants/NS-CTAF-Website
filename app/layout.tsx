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
  metadataBase: new URL("https://codetrustassurance.com"),
  title: {
    default: "Nucleus Systems Code Trust Assurance Framework",
    template: "%s | Nucleus Systems Code Trust Assurance Framework",
  },
  description:
    "The Nucleus Systems Code Trust Assurance Framework: the global standard for measuring, evidencing, and certifying software supply-chain trust. 86 controls, 6 domains, a 0–100 Trust Score, and CTA-1 to CTA-4 certification.",
  keywords: [
    "Nucleus Systems Code Trust Assurance Framework",
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
    title: "Nucleus Systems Code Trust Assurance Framework",
    description:
      "Security tools find issues. This framework proves trust. The global standard for measuring, evidencing, and certifying software trust.",
    siteName: "Nucleus Systems Code Trust Assurance Framework",
    url: "https://codetrustassurance.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nucleus Systems Code Trust Assurance Framework",
    description: "Security tools find issues. This framework proves trust.",
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
        <div className="scroll-progress" aria-hidden />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
