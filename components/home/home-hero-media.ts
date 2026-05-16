import { solanaWestCanonicalFiles, solanaWestMedia } from "@/data/media/solana-west";
import type { LuxuryFillImageProps } from "@/components/media/luxury-fill-image";
import { cn } from "@/lib/utils";

/** Shared home hero image props — EN + AR must stay aligned for LCP and art direction. */
export const homeHeroImageProps = {
  src: solanaWestCanonicalFiles.heroDaylightDesktop,
  mobileSrc: solanaWestCanonicalFiles.heroDaylightMobile,
  alt: solanaWestMedia.hero.alt,
  sizes: "(max-width: 1023px) 100vw, min(100vw, 1920px)",
  priority: true,
  quality: 88,
  filmGrade: false,
  imgClassName: cn(
    "object-cover motion-reduce:brightness-100 motion-reduce:saturate-100",
    "brightness-[1.085] saturate-[1.035] contrast-[0.982]",
    "max-lg:min-h-[104%] max-lg:object-[center_30%] lg:object-[58%_42%] xl:object-[56%_40%]",
  ),
} satisfies Omit<LuxuryFillImageProps, "alt"> & { alt: string };

export const homeHeroOverlayClassName = "pointer-events-none absolute inset-0 z-[1]";

/** Daylight veils — minimal stack; card carries readability on mobile. */
export const homeHeroOverlays = {
  topWash: cn(
    homeHeroOverlayClassName,
    "bg-gradient-to-br from-[#fdfcfa]/42 via-transparent to-[#f5f0e6]/32",
    "max-lg:from-[#fdfcfa]/48 max-lg:to-[#f5f0e6]/38",
  ),
  bottomLift: cn(
    homeHeroOverlayClassName,
    "inset-x-0 bottom-0 top-auto h-[54%] max-lg:h-[58%]",
    "bg-gradient-to-t from-[#faf7f2]/88 via-[#fdfcfa]/22 to-transparent",
    "max-lg:from-[#faf7f2]/92",
  ),
  cardScrim: cn(
    homeHeroOverlayClassName,
    "z-[2] lg:hidden",
    "bg-gradient-to-t from-[#faf7f2]/55 via-transparent to-transparent",
    "h-[42%] inset-x-0 bottom-0 top-auto",
  ),
} as const;

export const homeHeroSectionClassName = cn(
  "relative isolate min-h-[100dvh]",
  "supports-[height:100svh]:min-h-[100svh]",
  "overflow-hidden bg-[#efeae2]",
);

export const homeHeroContainerClassName = cn(
  "relative z-[20] mx-auto flex min-h-[100dvh] w-full flex-col",
  "supports-[height:100svh]:min-h-[100svh]",
  "justify-end pb-[max(clamp(2.5rem,8vw,5rem),env(safe-area-inset-bottom,0px))]",
  "max-lg:pb-[max(5.75rem,calc(env(safe-area-inset-bottom,0px)+5rem))]",
  "lg:justify-center lg:pb-[clamp(2.25rem,5vh,3.75rem)]",
  "pt-[clamp(5.5rem,calc(env(safe-area-inset-top,0px)+5.25rem),7.25rem)]",
  "max-lg:pt-[clamp(4.75rem,calc(env(safe-area-inset-top,0px)+4.35rem),5.85rem)]",
  "lg:pt-[clamp(5.75rem,min(11vh,6.5rem),6.5rem)]",
);

export const homeHeroCardClassName = cn(
  "rounded-[6px] border border-lux-ink/[0.08] bg-[#fdfcfa]/[0.97]",
  "px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(1.35rem,3.8vw,2.25rem)]",
  "shadow-lux-soft",
);

export const homeHeroH1ClassName = cn(
  "max-w-[min(22ch,100%)] text-balance font-display font-medium text-lux-ink",
  "text-[clamp(1.875rem,4.2vw+0.85rem,2.875rem)] leading-[1.08] tracking-[-0.026em]",
  "max-lg:leading-[1.1] max-lg:tracking-[-0.024em]",
);
