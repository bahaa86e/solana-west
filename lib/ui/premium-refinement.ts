import { cn } from "@/lib/utils";

/** Unified luxury radius — 6px editorial, 8px shells */
export const luxRadiusEditorial = "rounded-[6px]";
export const luxRadiusShell = "rounded-[8px]";

/** Ivory-band running text — slightly stronger for calm readability */
export const luxIvoryBodyClass = "text-lux-ink/[0.76]";
export const luxIvoryEyebrowClass = "text-lux-ink/[0.44]";
export const luxIvoryMutedClass = "text-lux-ink/[0.62]";

/** Soft elevation — no harsh marketing shadows */
export const luxShadowEditorial = "shadow-[0_16px_44px_-36px_rgba(45,42,37,0.09)]";
export const luxShadowLifted = "shadow-[0_18px_40px_-42px_rgba(45,42,37,0.045)]";

export const luxGlassIvory = cn(
  "border border-lux-champagne/22 bg-[#fdfcfa]/72",
  "ring-1 ring-inset ring-white/80",
  "backdrop-blur-[10px] backdrop-saturate-[1.04]",
  "supports-[backdrop-filter]:bg-[#fdfcfa]/58",
);
