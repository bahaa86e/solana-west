import type { ProjectPageMedia } from "@/data/projects/types";
import { solanaWestMedia } from "@/data/media/solana-west";

/** Solana West media bindings — swaps when another project slug adds its bundle */
export const solanaWestBundle: ProjectPageMedia = {
  hero: solanaWestMedia.hero,
  overviewFigure: solanaWestMedia.developer,
  locationMap: solanaWestMedia.locationMap,
  amenities: solanaWestMedia.amenities,
};
