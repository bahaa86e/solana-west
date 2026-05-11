import type { Metadata } from "next";

import { defaultOpenGraphImagePath } from "@/data/seo/defaults";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";
import { getSiteUrl, toAbsoluteSiteUrl } from "@/lib/env";
import { alternatePairForPathname } from "@/lib/i18n/paths";

export type BuildPageMetadataInput = RouteSeoDefinition;

function normalizePath(path: string) {
  if (path === "" || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

function resolveOgImagePath(input: RouteSeoDefinition): string | undefined {
  if (input.noIndex) return undefined;
  return input.openGraphImagePath ?? defaultOpenGraphImagePath;
}

/** Next.js `Metadata` from centralized route SEO definitions (canonical, OG, Twitter, retrieval hints). */
export function buildPageMetadata(input: RouteSeoDefinition): Metadata {
  const { title, description, noIndex = false, locale } = input;
  const base = getSiteUrl();
  const pathname = normalizePath(input.path ?? "/");
  const canonical = new URL(pathname === "/" ? "/" : pathname, base.origin).toString();
  const alternatePair = alternatePairForPathname(pathname);

  const imagePath = resolveOgImagePath(input);
  const ogImageUrl = imagePath ? toAbsoluteSiteUrl(imagePath) : undefined;
  const ogImageAlt =
    locale === "ar" ? "سولانا ويست نيو زايد من ORA Developer Egypt" : `${siteConfig.name} · ${siteConfig.developer}`;
  const ogImages = ogImageUrl
    ? [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ]
    : undefined;

  const ogType = input.openGraphKind ?? "website";
  const ogArticle =
    ogType === "article" && input.article
      ? {
          publishedTime: input.article.publishedTime,
          modifiedTime: input.article.modifiedTime,
          authors: input.article.authors,
          section: input.article.section,
          tags: input.article.tags ? [...input.article.tags] : undefined,
        }
      : undefined;

  const alternateLanguages =
    alternatePair && !noIndex ?
      ({
        en: new URL(normalizePath(alternatePair.enPath), base.origin).toString(),
        ar: new URL(normalizePath(alternatePair.arPath), base.origin).toString(),
        "x-default": new URL(normalizePath(alternatePair.enPath), base.origin).toString(),
      } satisfies Record<string, string>)
    : undefined;

  const ogLocale = locale === "ar" ? "ar_EG" : "en_US";

  return {
    metadataBase: base,
    title,
    description,
    keywords: input.keywords ? [...input.keywords] : undefined,
    alternates: { canonical, ...(alternateLanguages ? { languages: alternateLanguages } : {}) },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: ogType,
      locale: ogLocale,
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
      url: canonical,
      siteName: siteConfig.shortName,
      title,
      description,
      images: ogImages,
      ...(ogArticle ?? {}),
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterSite,
      creator: siteConfig.twitterCreator,
      title,
      description,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
  };
}
