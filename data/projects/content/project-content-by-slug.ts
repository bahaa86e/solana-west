import type { ProjectEntry } from "@/data/projects/types";
import type { ProjectPageContent } from "@/data/projects/types";

import { createSolanaWestPageContent } from "@/data/projects/content/solana-west";

export type ProjectContentFactory = (entry: ProjectEntry) => ProjectPageContent;

const factories: Partial<Record<string, ProjectContentFactory>> = {
  "solana-west": createSolanaWestPageContent,
};

export function getProjectPageContent(entry: ProjectEntry): ProjectPageContent | null {
  const build = factories[entry.slug];
  return build ? build(entry) : null;
}
