import { defaultOpenGraphImagePath } from "@/data/seo/defaults";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";
import { toAbsoluteSiteUrl } from "@/lib/env";

type HomeWebPageJsonLdOpts = {
  /** Must match visible `h1` for entity alignment */
  headline?: string;
};

/**
 * Homepage / landing WebPage — factual scope, aligns with visible H1 scope.
 */
export function getHomeWebPageJsonLd(
  homeMeta: Pick<RouteSeoDefinition, "description" | "openGraphImagePath" | "path" | "locale">,
  opts?: HomeWebPageJsonLdOpts,
) {
  const root = siteConfig.url.replace(/\/$/, "");
  const locale = homeMeta.locale ?? "en";
  const raw = homeMeta.path === "" || homeMeta.path === "/" ? "/" : homeMeta.path;
  const pathPart = raw.startsWith("/") ? raw : `/${raw}`;
  const pageUrlNormalized = pathPart === "/" ? `${root}/` : `${root}${pathPart}`;
  const heroPath = homeMeta.openGraphImagePath ?? defaultOpenGraphImagePath;
  const imageUrl = toAbsoluteSiteUrl(heroPath);
  const pageName = opts?.headline?.trim() || siteConfig.name;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrlNormalized}#webpage`,
    url: pageUrlNormalized,
    name: pageName,
    inLanguage: locale === "ar" ? "ar" : "en",
    description: homeMeta.description,
    isPartOf: { "@id": `${root}#website` },
    publisher: { "@id": `${root}#organization` },
    about: {
      "@type": "Place",
      name: pageName,
      containedInPlace: {
        "@type": "Place",
        name:
          locale === "ar"
            ? "الزيادة الجديدة · محور الضبعة، غرب القاهرة، مصر"
            : "New Zayed · Mehwar El Dabaa, West Cairo, Egypt",
      },
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
      caption:
        locale === "ar"
          ? `${siteConfig.name} — مشروع مخطط عمومي مخضّر بتطوير ${siteConfig.developer}`
          : `${siteConfig.name} — landscaped master-planned compound by ${siteConfig.developer}`,
    },
  };
}
