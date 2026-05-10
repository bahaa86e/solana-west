import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/env";

function faqCanonicalUrl(path: string): string {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return new URL(p, base.origin).toString();
}

export type FaqJsonLdItem = { readonly question: string; readonly answer: string };

/**
 * FAQPage JSON-LD — `acceptedAnswer.text` must equal on-page FAQ copy (canonical data).
 */
export function getSolanaWestFaqPageJsonLd(
  items: ReadonlyArray<FaqJsonLdItem>,
  path: "/faq" = "/faq",
) {
  const url = faqCanonicalUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    name: `${siteConfig.shortName} — frequently asked questions`,
    description:
      `${siteConfig.name}: pricing context, installments, delivery, connectivity, inventory, ${siteConfig.developer}. Visible answers mirror this markup.`,
    isPartOf: { "@id": `${siteConfig.url}#website` },
    publisher: { "@id": `${siteConfig.url}#organization` },
    mainEntity: items.map((item, index) => ({
      "@type": "Question" as const,
      "@id": `${url}#faq-q-${index}`,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.answer,
      },
    })),
  };
}
