/**
 * SEO definitions live in `data/seo/*` and are composed into Next `Metadata` via `buildPageMetadata`.
 */

export type RouteSeoDefinition = {
  title: string;
  description: string;
  /** URL path segment only, canonicalized inside the builder */
  path: string;
  noIndex?: boolean;
  /** Entity + intent vocabulary for retrieval surfaces (avoid stuffing) */
  keywords?: readonly string[];
  /** Public path for default OG/Twitter preview, e.g. `/images/projects/…/hero.webp` */
  openGraphImagePath?: string;
  /** Rich results / sharing — journals default to `website` */
  openGraphKind?: "website" | "article";
  /** When `openGraphKind` is `article` */
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    /** Display strings (names or organisational labels) */
    authors?: readonly string[];
    /** e.g. topic lane label */
    section?: string;
    tags?: readonly string[];
  };
};
