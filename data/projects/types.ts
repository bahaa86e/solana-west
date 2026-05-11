import type { RouteSeoDefinition } from "@/data/seo/types";

/** Public image slot for `next/image` */
export type ProjectImageAsset = {
  src: string;
  alt: string;
  /** Optional portrait-safe WebP for small viewports (see `LuxuryFillImage`). */
  mobileSrc?: string;
};

/** Media required to render a cinematic project surface */
export type ProjectPageMedia = {
  hero: ProjectImageAsset;
  overviewFigure: ProjectImageAsset;
  /** Cinematic geography mood — homepage + project location narratives (not brochure maps). */
  locationAtmosphere: ProjectImageAsset;
  /** Current sales sheet connectivity / map plate — retained for deep editorial routes that starting price cartography. */
  locationMap: ProjectImageAsset;
  amenities: readonly ProjectImageAsset[];
};

export type RouteRow = { readonly term: string; readonly detail: string };

export type PropertyTypeCard = {
  readonly title: string;
  readonly description: string;
  readonly investorNote: string;
};

export type AmenityGroup = {
  readonly title: string;
  readonly lines: readonly string[];
};

export type FaqPair = { readonly question: string; readonly answer: string };

export type ProjectPageSeoPayload = Omit<RouteSeoDefinition, "path">;

export type ProjectPageContent = {
  readonly seo: ProjectPageSeoPayload;
  /** Optional WebPage Place containment — avoids hard-coded geography inside schema helpers */
  readonly schemaPlaceContainedIn?: string;
  readonly hero: {
    readonly locationEyebrow: string;
    readonly h1: string;
    readonly communityLine: string;
    readonly seoSupportLine: string;
  };
  readonly overview: {
    readonly eyebrow: string;
    readonly title: string;
    readonly paragraphs: readonly string[];
  };
  readonly propertyTypes: {
    readonly intro: string;
    readonly types: readonly PropertyTypeCard[];
  };
  readonly payment: {
    readonly eyebrow: string;
    readonly title: string;
    readonly summary: string;
    readonly bullets: readonly string[];
  };
  readonly location: {
    readonly eyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly routes: readonly RouteRow[];
  };
  readonly amenities: {
    readonly eyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly groups: readonly AmenityGroup[];
  };
  readonly faq: {
    readonly eyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly items: readonly FaqPair[];
    /** Site FAQ route when project FAQs mirror global answers */
    readonly fullFaqHref: string;
  };
  readonly finalCta: {
    readonly eyebrow: string;
    readonly title: string;
    readonly supporting: string;
    readonly primaryLabel: string;
    readonly secondaryLabel: string;
  };
};

export type ResolvedProjectPage = {
  entry: ProjectEntry;
  content: ProjectPageContent;
  media: ProjectPageMedia;
};

/** Core registry identity — expandable for further ORA destinations */
export type ProjectEntry = {
  slug: string;
  name: string;
  /** Short editorial label (“Solana West”) — falls back to `name` in copy when omitted */
  shortName?: string;
  developer: string;
};
