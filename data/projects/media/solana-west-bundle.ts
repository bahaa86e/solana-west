import type { ProjectPageMedia } from "@/data/projects/types";
import { solanaWestMedia } from "@/data/solana-west-media";

/** Solana West media bindings — swaps when another project slug adds its bundle */
export const solanaWestBundle: ProjectPageMedia = {
  hero: solanaWestMedia.hero,
  overviewFigure: solanaWestMedia.developer,
  locationMap: solanaWestMedia.locationMap,
  amenities: solanaWestMedia.amenities,
};
