import type { MetadataRoute } from "next";

import { getBlogArticleSlugs } from "@/data/blog/catalog";
import { getSiteUrl } from "@/lib/env";
import { arabicBlogArticlePath, englishPathToArabicPath } from "@/lib/i18n/paths";
import { indexablePathnames } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;
  const lastModified = new Date();

  const blogArticlePaths = getBlogArticleSlugs().map((slug) => `/blog/${slug}`);

  const arabicStaticPaths = indexablePathnames
    .map((pathname) => englishPathToArabicPath[pathname])
    .filter((p): p is string => Boolean(p));

  const arabicBlogPaths = getBlogArticleSlugs().map((slug) => arabicBlogArticlePath(slug));

  const pathnames = [...indexablePathnames, ...blogArticlePaths, ...arabicStaticPaths, ...arabicBlogPaths];

  return pathnames.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
