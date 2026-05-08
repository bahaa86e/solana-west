import type { Metadata } from "next";

import { defaultOpenGraphImagePath } from "@/data/seo/defaults";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";
import { getSiteUrl, toAbsoluteSiteUrl } from "@/lib/env";

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
  const { title, description, noIndex = false } = input;
  const base = getSiteUrl();
  const pathname = normalizePath(input.path ?? "/");
  const canonical = new URL(pathname, base.origin).toString();

  const imagePath = resolveOgImagePath(input);
  const ogImageUrl = imagePath ? toAbsoluteSiteUrl(imagePath) : undefined;
  const ogImages = ogImageUrl
    ? [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} · ${siteConfig.developer}`,
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

  return {
    metadataBase: base,
    title,
    description,
    keywords: input.keywords ? [...input.keywords] : undefined,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: ogType,
      locale: "en_US",
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
