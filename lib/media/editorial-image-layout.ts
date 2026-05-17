import { cn } from "@/lib/utils";

/** Split grid — calmer column rhythm for text + landscape figure */
export const editorialSplitGrid = cn(
  "grid gap-section-gap lg:grid-cols-12 lg:items-center",
  "lg:gap-x-section-gap lg:gap-y-12",
  "xl:gap-x-[clamp(3.25rem,5.75vw,4.5rem)]",
);

export const editorialSplitCopy = cn(
  "flex flex-col justify-between lg:col-span-5",
  "lg:py-2 lg:pr-[clamp(0.25rem,2vw,1.25rem)]",
);

export const editorialSplitMedia = cn("lg:col-span-7 lg:pl-[clamp(0.25rem,1.5vw,1rem)]");

/** Headline → body stack — more breathing room without changing section shell padding */
export const editorialBodyStack = cn(
  "mt-[clamp(2.5rem,4.8vw,3.25rem)] max-w-md space-y-[clamp(1.125rem,2.25vw,1.375rem)] xl:max-w-lg",
);

/**
 * Standard split landscape — capped height so renders do not overpower copy.
 * 16:10 on desktop reads more editorial than 16:9 video.
 */
export const editorialLandscapeAspect = cn(
  "aspect-[3/2] lg:aspect-[16/10] lg:min-h-0",
  "lg:max-h-[min(27rem,44vh)] xl:max-h-[min(29rem,46vh)]",
);

/** Trust / investment — slightly taller cap, still bounded */
export const editorialLandscapeAspectProminent = cn(
  "aspect-[3/2] lg:aspect-[16/10] lg:min-h-0",
  "lg:max-h-[min(30rem,50vh)] xl:max-h-[min(32rem,52vh)]",
);

/** Full-width ribbons — master plan, payment strip, location mood */
export const editorialRibbonAspect = cn(
  "aspect-[3/2] sm:aspect-[16/10] lg:min-h-0",
  "lg:max-h-[min(30rem,50vh)] xl:max-h-[min(32rem,52vh)]",
);

/** Wide location / waterfront atmosphere */
export const editorialPanoramaAspect = cn(
  "aspect-[3/2] lg:aspect-[2/1] lg:min-h-0",
  "lg:max-h-[min(26rem,44vh)] xl:max-h-[min(28rem,46vh)]",
);

/** Amenities stack — primary portrait tile */
export const editorialPortraitAspect = cn(
  "aspect-[4/5] max-lg:max-h-[min(64vh,480px)]",
  "lg:max-h-[min(34rem,52vh)]",
);

/** Amenities — full-width closing beat */
export const editorialStackWideAspect = cn(
  "aspect-video max-lg:aspect-video lg:min-h-0",
  "lg:max-h-[min(24rem,40vh)] xl:max-h-[min(26rem,42vh)]",
);
