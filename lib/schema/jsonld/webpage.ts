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
  homeMeta: Pick<RouteSeoDefinition, "description" | "openGraphImagePath" | "path">,
  opts?: HomeWebPageJsonLdOpts,
) {
  const canonical = siteConfig.url.replace(/\/$/, "");
  const pageUrl = canonical + "/";
  const heroPath = homeMeta.openGraphImagePath ?? defaultOpenGraphImagePath;
  const imageUrl = toAbsoluteSiteUrl(heroPath);
  const pageName = opts?.headline?.trim() || siteConfig.name;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageName,
    description: homeMeta.description,
    isPartOf: { "@id": `${canonical}#website` },
    publisher: { "@id": `${canonical}#organization` },
    about: {
      "@type": "Place",
      name: pageName,
      containedInPlace: {
        "@type": "Place",
        name: "New Zayed · Mehwar El Dabaa, West Cairo, Egypt",
      },
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
      caption:
        `${siteConfig.name} — landscaped master-planned compound by ${siteConfig.developer}`,
    },
  };
}
