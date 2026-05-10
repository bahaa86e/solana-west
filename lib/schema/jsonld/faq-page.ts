import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/env";

function faqCanonicalUrl(path: string): string {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return new URL(p, base.origin).toString();
}

export type FaqJsonLdItem = { readonly question: string; readonly answer: string };

export type SolanaWestFaqPageJsonLdOptions = {
  path?: string;
  locale?: "en" | "ar";
  name?: string;
  description?: string;
};

/**
 * FAQPage JSON-LD — `acceptedAnswer.text` must equal on-page FAQ copy (canonical data).
 */
export function getSolanaWestFaqPageJsonLd(items: ReadonlyArray<FaqJsonLdItem>, opts?: SolanaWestFaqPageJsonLdOptions) {
  const path = opts?.path ?? "/faq";
  const locale = opts?.locale ?? "en";
  const url = faqCanonicalUrl(path);
  const name =
    opts?.name ??
    (locale === "ar" ?
      `الأسئلة الشائعة — ${siteConfig.shortName}`
    : `${siteConfig.shortName} — frequently asked questions`);
  const description =
    opts?.description ??
    (locale === "ar" ?
      `مرجع عربي لأسعار ${siteConfig.name}، خطط السداد، موعد التسليم، الموقع، أنواع الوحدات، و${siteConfig.developer}. يطابق هذا المخطّط النصوص المرئية.`
    : `${siteConfig.name}: pricing context, installments, delivery, connectivity, inventory, ${siteConfig.developer}. Visible answers mirror this markup.`);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    name,
    description,
    inLanguage: locale === "ar" ? "ar" : "en",
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
