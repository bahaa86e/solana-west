import { getProjectBySlug } from "@/data/projects/registry";
import { getProjectPageContent } from "@/data/projects/content/project-content-by-slug";
import { getProjectPageMedia } from "@/data/projects/media/project-media-by-slug";
import type { ResolvedProjectPage } from "@/data/projects/types";

export function resolveProjectPage(slug: string): ResolvedProjectPage | null {
  const entry = getProjectBySlug(slug);
  if (!entry) return null;

  const content = getProjectPageContent(entry);
  const media = getProjectPageMedia(entry.slug);

  if (!content || !media) return null;

  return { entry, content, media };
}
