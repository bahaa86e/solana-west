import type { ProjectPageMedia } from "@/data/projects/types";

import { solanaWestBundle } from "@/data/projects/media/solana-west-bundle";

const bundles: Partial<Record<string, ProjectPageMedia>> = {
  "solana-west": solanaWestBundle,
};

export function getProjectPageMedia(slug: string): ProjectPageMedia | null {
  const m = bundles[slug];
  return m ?? null;
}
