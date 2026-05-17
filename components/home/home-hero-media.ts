import { solanaWestCanonicalFiles, solanaWestMedia } from "@/data/media/solana-west";
import type { LuxuryFillImageProps } from "@/components/media/luxury-fill-image";
import { LUXURY_IMAGE_QUALITY_HERO } from "@/lib/media/luxury-image-defaults";
import { cn } from "@/lib/utils";

/** Shared home hero image props — EN + AR must stay aligned for LCP and art direction. */
export const homeHeroImageProps = {
  src: solanaWestCanonicalFiles.heroDaylightDesktop,
  mobileSrc: solanaWestCanonicalFiles.heroDaylightMobile,
  alt: solanaWestMedia.hero.alt,
  sizes: "(max-width: 1023px) 100vw, min(100vw, 2560px)",
  priority: true,
  quality: LUXURY_IMAGE_QUALITY_HERO,
  filmGrade: false,
  imgClassName: cn(
    "object-cover motion-reduce:brightness-100 motion-reduce:saturate-100",
    "brightness-[1.06] saturate-[1.02] contrast-[0.99]",
    "max-lg:object-[center_30%] lg:object-[58%_42%] xl:object-[56%_40%]",
  ),
} satisfies Omit<LuxuryFillImageProps, "alt"> & { alt: string };

export const homeHeroOverlayClassName = "pointer-events-none absolute inset-0 z-[1]";

/** Cinematic scrims — readability without opaque content panels */
export const homeHeroOverlays = {
  vignette: cn(
    homeHeroOverlayClassName,
    "bg-[radial-gradient(ellipse_92%_88%_at_50%_42%,transparent_48%,rgba(28,26,23,0.22)_100%)]",
  ),
  topWash: cn(
    homeHeroOverlayClassName,
    "bottom-auto h-[min(32vh,18rem)] bg-gradient-to-b from-lux-ink/42 via-lux-ink/12 to-transparent",
  ),
  contentRail: cn(
    homeHeroOverlayClassName,
    "z-[2]",
    "bg-[linear-gradient(118deg,rgba(28,26,23,0.72)_0%,rgba(28,26,23,0.4)_40%,rgba(28,26,23,0.08)_66%,transparent_86%)]",
    "max-lg:bg-[linear-gradient(to_top,rgba(28,26,23,0.76)_0%,rgba(28,26,23,0.36)_46%,rgba(28,26,23,0.06)_70%,transparent_100%)]",
  ),
  bottomLift: cn(
    homeHeroOverlayClassName,
    "inset-x-0 bottom-0 top-auto h-[56%] max-lg:h-[62%]",
    "bg-gradient-to-t from-lux-ink/48 via-lux-ink/14 to-transparent",
  ),
} as const;

export const homeHeroTextShadow =
  "[text-shadow:0_1px_2px_rgba(12,11,10,0.28),0_8px_32px_rgba(12,11,10,0.32)]";

export const homeHeroSectionClassName = cn(
  "relative isolate min-h-[100dvh]",
  "supports-[height:100svh]:min-h-[100svh]",
  "overflow-hidden bg-[#efeae2]",
);

/** Editorial column — no card; content sits on cinematic scrim */
export const homeHeroContainerClassName = cn(
  "relative z-[20] mx-auto flex min-h-[100dvh] w-full flex-col",
  "supports-[height:100svh]:min-h-[100svh]",
  "items-start justify-end",
  "pb-[max(clamp(3rem,9vw,5.5rem),env(safe-area-inset-bottom,0px))]",
  "max-lg:pb-[max(6.25rem,calc(env(safe-area-inset-bottom,0px)+5.75rem))]",
  "pt-[clamp(5.25rem,calc(env(safe-area-inset-top,0px)+5rem),7.5rem)]",
  "max-lg:pt-[clamp(4.85rem,calc(env(safe-area-inset-top,0px)+4.5rem),6rem)]",
  "lg:justify-center lg:pb-[clamp(3.5rem,8vh,5.25rem)]",
  "lg:pt-[clamp(5.75rem,min(11vh,6.75rem),7rem)]",
);

/** Major editorial zones — title / narrative / commercial / CTA */
export const homeHeroContentClassName = cn(
  "relative flex w-full max-w-[min(38rem,100%)] flex-col",
  "gap-[clamp(1.75rem,4vw,2.75rem)] lg:max-w-[min(44rem,86vw)]",
);

export const homeHeroZoneNarrativeClassName =
  "flex flex-col gap-[clamp(0.75rem,1.8vw,1.125rem)]";

export const homeHeroZoneCommercialClassName = cn(
  "flex flex-col gap-[clamp(0.875rem,2vw,1.25rem)]",
);

export const homeHeroZoneCtaClassName = "flex flex-col gap-[clamp(1rem,2.2vw,1.375rem)]";

export const homeHeroEyebrowClassName = cn(
  "font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-lux-paper/52",
  "lg:text-[0.6875rem] lg:tracking-[0.14em]",
  homeHeroTextShadow,
);

export const homeHeroRuleClassName = "mt-4 block h-px max-w-[2.5rem] bg-lux-paper/20";

export const homeHeroH1ClassName = cn(
  "mt-4 max-w-[min(20ch,100%)] text-balance font-display font-medium text-lux-paper",
  "text-[clamp(1.875rem,4.2vw+0.85rem,2.875rem)] leading-[1.08] tracking-[-0.026em]",
  "max-lg:leading-[1.1] max-lg:tracking-[-0.024em]",
  homeHeroTextShadow,
);

export const homeHeroLeadClassName = cn(
  "max-w-[min(36rem,100%)] font-sans text-lux-lead font-normal leading-[1.68] tracking-[0.006em] text-lux-paper/84",
  homeHeroTextShadow,
);

export const homeHeroSupportClassName = cn(
  "hidden max-w-[34rem] border-l border-lux-gold/35 pl-4 font-sans text-lux-muted font-normal leading-[1.7] tracking-[0.01em] text-lux-paper/58 lg:block lg:pl-5",
  homeHeroTextShadow,
);

export const homeHeroFactChipClassName = cn(
  "rounded-[6px] border border-lux-paper/10 bg-lux-ink/14 px-3.5 py-2.5",
  "backdrop-blur-[10px] supports-[backdrop-filter]:bg-lux-ink/10",
  "shadow-[0_10px_28px_-22px_rgba(8,7,6,0.38)]",
);

export const homeHeroFactLabelClassName =
  "font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-lux-gold/80";

export const homeHeroFactValueClassName =
  "mt-1.5 font-sans text-[0.8125rem] font-normal leading-[1.5] tracking-[0.015em] text-lux-paper/82";

export const homeHeroPaymentClassName = cn(
  "font-sans text-[0.90625rem] leading-[1.68] tracking-[0.01em] text-lux-paper/68 lg:text-[0.9375rem]",
  homeHeroTextShadow,
);

export const homeHeroAnnotationClassName = cn(
  "font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-lux-paper/36",
  "max-lg:hidden",
  homeHeroTextShadow,
);

/** @deprecated use `homeHeroContentClassName` */
export const homeHeroCardClassName = homeHeroContentClassName;
