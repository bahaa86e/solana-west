import { LuxuryFillImage } from "@/components/media/luxury-fill-image";

import { homeHeroImageProps, homeHeroOverlays } from "./home-hero-media";

type HomeHeroMediaLayerProps = {
  alt?: string;
};

/** Server-rendered hero background — keeps LCP image out of the client motion bundle. */
export function HomeHeroMediaLayer({ alt }: HomeHeroMediaLayerProps = {}) {
  const imageProps = alt ? { ...homeHeroImageProps, alt } : homeHeroImageProps;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <LuxuryFillImage {...imageProps} />
      <div className={homeHeroOverlays.vignette} />
      <div className={homeHeroOverlays.topWash} />
      <div className={homeHeroOverlays.contentRail} />
      <div className={homeHeroOverlays.bottomLift} />
    </div>
  );
}
