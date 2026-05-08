import type { MetadataRoute } from "next";

import { getBlogArticleSlugs } from "@/data/blog/catalog";
import { getSiteUrl } from "@/lib/env";
import { indexablePathnames } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;
  const lastModified = new Date();

  const blogArticlePaths = getBlogArticleSlugs().map((slug) => `/blog/${slug}`);

  const pathnames = [...indexablePathnames, ...blogArticlePaths];

  return pathnames.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
