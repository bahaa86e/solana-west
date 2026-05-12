/**
 * Authoritative slug list for static `[slug]` routes. Content + media wire per slug in `content/` and `media/`.
 */

import type { ProjectEntry } from "@/data/projects/types";

export type { ProjectEntry } from "@/data/projects/types";

export const projectRegistry: readonly ProjectEntry[] = [
  {
    slug: "solana-west",
    name: "Solana West New Zayed",
    shortName: "Solana West",
    developer: "ORA Developers Egypt",
  },
];

export const projectSlugs = projectRegistry.map((p) => p.slug);

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projectRegistry.find((p) => p.slug === slug);
}
