import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import type { ContainerSize } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export type SectionTone = "paper" | "sand" | "ink" | "postHero";

export type SectionRhythm = "editorial" | "breath" | "compact";
export type SectionDepth = "flat" | "lifted";

const toneClass: Record<SectionTone, string> = {
  /** First editorial block after hero + enquiry — warm ivory lift from cinematic dark */
  postHero: cn(
    "bg-[linear-gradient(180deg,#fdfbf7_0%,#f9f5ee_38%,#f4efe6_100%)] text-lux-charcoal",
    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-px before:bg-gradient-to-r before:from-transparent before:via-lux-champagne/38 before:to-transparent",
    "after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:z-0 after:h-[min(14rem,32vw)] after:bg-[radial-gradient(ellipse_92%_72%_at_50%_-18%,rgb(196_165_116/0.09),transparent_62%)]",
  ),
  paper: cn(
    "bg-lux-paper text-lux-ink",
    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-px before:bg-lux-ink/[0.04]",
    "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[1] after:h-[min(2.5rem,8vw)] after:bg-gradient-to-b after:from-transparent after:to-lux-sand/30",
  ),
  sand: cn(
    "bg-[#f3efe8] text-lux-ink",
    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-px before:bg-lux-ink/[0.04]",
    "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[1] after:h-[min(2rem,6vw)] after:bg-transparent",
  ),
  ink: cn(
    "bg-gradient-to-b from-[#4f4b45] via-[#45413b] to-[#3c3834] text-lux-paper",
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),inset_0_-80px_64px_-40px_rgba(185,168,146,0.04)]",
    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/14 before:to-transparent",
  ),
};

const depthClass: Record<SectionDepth, string> = {
  flat: "",
  lifted: "shadow-[0_18px_40px_-42px_rgba(45,42,37,0.045)]",
};

function rhythmPadding(rhythm: SectionRhythm): string {
  switch (rhythm) {
    case "breath":
      return cn(
        "max-lg:py-[clamp(3.875rem,10.5vw,6.75rem)]",
        "py-[clamp(4.75rem,min(11vw,7rem),8.5rem)] lg:py-[clamp(5.5rem,6.5vw,8rem)]",
      );
    case "compact":
      return cn(
        "max-lg:py-[clamp(3rem,7.75vw,4.75rem)]",
        "py-[clamp(2.75rem,7vw,5.25rem)] lg:py-[clamp(3.25rem,5.5vw,4.75rem)]",
      );
    default:
      return cn(
        "max-lg:py-[clamp(3.5rem,9.5vw,6.25rem)]",
        "py-[clamp(4rem,8.5vw,7rem)] lg:py-[clamp(4.75rem,6vw,6.5rem)]",
      );
  }
}

export type SectionShellProps = {
  id: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
  children: ReactNode;
  className?: string;
  /** @deprecated use `rhythm` — maps to `rhythm` when set */
  density?: "editorial" | "compact";
  rhythm?: SectionRhythm;
  /** Soft outer lift for stacked depth */
  depth?: SectionDepth;
  /** Thin gold vertical accent — editorial spine */
  accentRim?: boolean;
  tone?: SectionTone;
  containerSize?: ContainerSize;
  bleed?: boolean;
};

export function SectionShell({
  id,
  "aria-labelledby": ariaLabelledBy,
  "aria-label": ariaLabel,
  children,
  className,
  density = "editorial",
  rhythm: rhythmProp,
  depth = "flat",
  accentRim = false,
  tone = "paper",
  containerSize = "default",
  bleed = true,
}: SectionShellProps) {
  const rhythm: SectionRhythm =
    rhythmProp ?? (density === "compact" ? "compact" : "editorial");

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
      className={cn(
        "relative isolate scroll-mt-28 overflow-hidden lg:scroll-mt-32",
        toneClass[tone],
        depthClass[depth],
        rhythmPadding(rhythm),
        className,
      )}
    >
      {accentRim ?
        <span
          className="pointer-events-none absolute bottom-[12%] left-0 top-[12%] z-[3] hidden w-px bg-gradient-to-b from-transparent via-lux-gold/28 to-transparent md:block"
          aria-hidden
        />
      : null}

      {bleed ?
        <Container size={containerSize} as="div" className="relative z-[2]">
          {children}
        </Container>
      : children}
    </section>
  );
}
