import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";

/** Align JSON-LD language + breadcrumb home with bilingual routes (`/`, `/ar`, …). */
export function schemaLocaleFromSeo(seo: RouteSeoDefinition | undefined) {
  const root = siteConfig.url.replace(/\/$/, "");
  const isAr = seo?.locale === "ar";
  return {
    root,
    isAr,
    inLanguage: isAr ? "ar-EG" : "en-US",
    homeUrl: isAr ? `${root}/ar` : `${root}/`,
    homeName: isAr ? "الرئيسية" : "Home",
  } as const;
}
