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
    "max-lg:object-[center_28%] lg:object-[62%_40%] xl:object-[60%_38%]",
  ),
} satisfies Omit<LuxuryFillImageProps, "alt"> & { alt: string };

export const homeHeroOverlayClassName = "pointer-events-none absolute inset-0 z-[1]";

/** Cinematic scrims — localized ink rail behind copy; no boxed panels */
export const homeHeroOverlays = {
  vignette: cn(
    homeHeroOverlayClassName,
    "bg-[radial-gradient(ellipse_92%_88%_at_50%_42%,transparent_48%,rgba(28,26,23,0.2)_100%)]",
  ),
  topWash: cn(
    homeHeroOverlayClassName,
    "bottom-auto h-[min(30vh,17rem)] bg-gradient-to-b from-lux-ink/38 via-lux-ink/10 to-transparent",
  ),
  /** Desktop — soft L→R ink rail aligned to text column; fades before mid-frame */
  contentRailDesktop: cn(
    homeHeroOverlayClassName,
    "z-[2] hidden lg:block",
    "bg-[linear-gradient(104deg,rgba(20,18,16,0.78)_0%,rgba(20,18,16,0.63)_18%,rgba(20,18,16,0.35)_38%,rgba(20,18,16,0.11)_54%,transparent_72%)]",
  ),
  /** Desktop — radial soften so the rail has no hard vertical edge */
  contentRailFocus: cn(
    homeHeroOverlayClassName,
    "z-[2] hidden lg:block",
    "left-0 right-[38%] top-[18%] bottom-[12%]",
    "bg-[radial-gradient(ellipse_95%_88%_at_8%_72%,rgba(20,18,16,0.39)_0%,rgba(20,18,16,0.13)_42%,transparent_68%)]",
  ),
  /** Mobile — stronger bottom-up scrim only */
  contentRailMobile: cn(
    homeHeroOverlayClassName,
    "z-[2] lg:hidden",
    "inset-x-0 bottom-0 top-auto h-[74%]",
    "bg-[linear-gradient(to_top,rgba(18,16,14,0.84)_0%,rgba(18,16,14,0.54)_32%,rgba(18,16,14,0.2)_62%,transparent_100%)]",
  ),
  bottomLift: cn(
    homeHeroOverlayClassName,
    "inset-x-0 bottom-0 top-auto lg:hidden",
    "h-[58%] bg-gradient-to-t from-lux-ink/42 via-lux-ink/12 to-transparent",
  ),
} as const;

/** Display type — H1 & lead on bright daylight renders */
export const homeHeroTextShadowDisplay = cn(
  "[text-shadow:0_1px_3px_rgba(8,7,6,0.5),0_2px_14px_rgba(8,7,6,0.42),0_14px_44px_rgba(8,7,6,0.38)]",
);

/** Hero narrative paragraph + commercial support line — soft editorial lift */
export const homeHeroTextShadowNarrative = cn(
  "[text-shadow:0_2px_10px_rgba(0,0,0,0.22),0_1px_2px_rgba(0,0,0,0.18)]",
);

/** Supporting lines, chips labels, payment */
export const homeHeroTextShadowBody =
  "[text-shadow:0_1px_2px_rgba(8,7,6,0.44),0_6px_26px_rgba(8,7,6,0.34)]";

export const homeHeroTextShadow = homeHeroTextShadowBody;

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
  "pl-[clamp(1.125rem,3.5vw,0px)] lg:pl-[clamp(1.25rem,2.8vw,2.25rem)]",
  "pb-[max(clamp(3.25rem,9.5vw,5.75rem),env(safe-area-inset-bottom,0px))]",
  "max-lg:pb-[max(7rem,calc(env(safe-area-inset-bottom,0px)+6.5rem))]",
  "pt-[clamp(5.25rem,calc(env(safe-area-inset-top,0px)+5rem),7.5rem)]",
  "max-lg:pt-[clamp(4.75rem,calc(env(safe-area-inset-top,0px)+4.25rem),5.75rem)]",
  "lg:justify-center lg:pb-[clamp(3.75rem,8.5vh,5.5rem)]",
  "lg:pt-[clamp(5.5rem,min(10.5vh,6.5rem),6.75rem)]",
);

/** Major editorial zones — title / narrative / commercial / CTA */
export const homeHeroContentClassName = cn(
  "relative z-[1] flex w-full max-w-[min(38rem,100%)] flex-col",
  "gap-[clamp(2rem,4.6vw,3.125rem)] lg:max-w-[min(42rem,82vw)]",
);

export const homeHeroZoneNarrativeClassName =
  "flex flex-col gap-[clamp(0.875rem,2vw,1.25rem)]";

export const homeHeroZoneCommercialClassName = cn(
  "flex flex-col gap-[clamp(1rem,2.25vw,1.375rem)]",
);

export const homeHeroZoneCtaClassName = "flex flex-col gap-[clamp(1.125rem,2.5vw,1.5rem)]";

export const homeHeroEyebrowClassName = cn(
  "font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-lux-paper/58",
  "lg:text-[0.6875rem] lg:tracking-[0.14em]",
  homeHeroTextShadowBody,
);

export const homeHeroRuleClassName = "mt-5 block h-px max-w-[2.5rem] bg-lux-paper/24";

export const homeHeroH1ClassName = cn(
  "mt-5 max-w-[min(20ch,100%)] text-balance font-display font-medium text-lux-paper",
  "text-[clamp(1.875rem,4.2vw+0.85rem,2.875rem)] leading-[1.08] tracking-[-0.026em]",
  "max-lg:leading-[1.1] max-lg:tracking-[-0.024em]",
  homeHeroTextShadowDisplay,
);

export const homeHeroLeadClassName = cn(
  "max-w-[min(36rem,100%)] font-sans text-lux-lead font-normal leading-[1.68] tracking-[0.006em] text-[rgb(255_255_255/0.94)]",
  homeHeroTextShadowNarrative,
);

export const homeHeroSupportClassName = cn(
  "hidden max-w-[34rem] border-l border-lux-gold/38 pl-4 font-sans text-lux-muted font-normal leading-[1.7] tracking-[0.01em] text-[rgb(255_255_255/0.88)] lg:block lg:pl-5",
  homeHeroTextShadowNarrative,
);

export const homeHeroFactChipClassName = cn(
  "rounded-[6px] border border-lux-paper/12 bg-lux-ink/28 px-3.5 py-2.5",
  "backdrop-blur-[14px] supports-[backdrop-filter]:bg-lux-ink/22",
  "shadow-[0_12px_32px_-20px_rgba(6,5,4,0.45)]",
);

export const homeHeroFactLabelClassName =
  "font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-lux-gold/80";

export const homeHeroFactValueClassName =
  "mt-1.5 font-sans text-[0.8125rem] font-normal leading-[1.5] tracking-[0.015em] text-lux-paper/90";

export const homeHeroPaymentClassName = cn(
  "font-sans text-[0.90625rem] leading-[1.68] tracking-[0.01em] text-lux-paper/88 lg:text-[0.9375rem]",
  homeHeroTextShadowBody,
);

export const homeHeroAnnotationClassName = cn(
  "font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-lux-paper/44",
  "max-lg:hidden",
  homeHeroTextShadow,
);

/** @deprecated use `homeHeroContentClassName` */
export const homeHeroCardClassName = homeHeroContentClassName;
