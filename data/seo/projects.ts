import type { ResolvedProjectPage } from "@/data/projects/types";
import { buildPageMetadata } from "@/seo/build-metadata";
import type { Metadata } from "next";

/** Composes `@/seo/build-metadata` using per-project SEO payload resolved from `resolveProjectPage`. */
export function buildProjectRouteMetadata(bundle: ResolvedProjectPage): Metadata {
  return buildPageMetadata({
    ...bundle.content.seo,
    path: `/projects/${bundle.entry.slug}`,
  });
}
