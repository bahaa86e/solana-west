import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Noto_Sans_Arabic, Source_Sans_3 } from "next/font/google";

import { AnalyticsScripts } from "@/components/tracking/analytics-scripts";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/env";
import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/schema/jsonld/organization";

import "./globals.css";

const fontDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const fontSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const fontArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
});

/** Route-level pages export full metadata (canonical, OG, Twitter). Homepage uses `homeMetadata` in `app/page.tsx`. */
export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${siteConfig.name} | ${siteConfig.developer}`,
    template: `%s | ${siteConfig.developer}`,
  },
  description:
    `${siteConfig.name} New Zayed on Mehwar El Dabaa by ${siteConfig.developer}. ` +
    `Prices from 9.8M EGP, 5% down, up to 10 years, delivery from 2027. Villas, townhouses, twin houses, apartments.`,
  applicationName: siteConfig.shortName,
  formatDetection: { telephone: true, email: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcfaf7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const graph = [getOrganizationJsonLd(), getWebSiteJsonLd()];

  return (
    <html
      lang="en"
      dir="ltr"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontArabic.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-lux-paper font-sans text-body-lg leading-lux-body text-lux-ink/[0.93]">
        <JsonLd data={graph} />
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}
