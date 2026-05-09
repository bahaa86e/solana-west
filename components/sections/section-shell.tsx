import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import type { ContainerSize } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export type SectionTone = "paper" | "sand" | "ink";

export type SectionRhythm = "editorial" | "breath" | "compact";
export type SectionDepth = "flat" | "lifted";

const toneClass: Record<SectionTone, string> = {
  paper: cn(
    "bg-gradient-to-b from-[#fcfaf8] via-lux-paper to-[#ede6dd]/88 text-lux-ink",
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.68)]",
    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-px before:bg-gradient-to-r before:from-transparent before:via-lux-ink/[0.08] before:to-transparent",
    "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[1] after:h-[min(5rem,14vw)] after:bg-gradient-to-b after:from-transparent after:to-lux-ink/[0.025]",
  ),
  sand: cn(
    "bg-gradient-to-br from-[#e5ddd3]/98 via-lux-mist to-[#f8f6f2] text-lux-ink",
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.48),inset_0_-1px_0_0_rgba(10,10,10,0.025)]",
    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-px before:bg-gradient-to-r before:from-transparent before:via-lux-gold/[0.12] before:to-transparent",
    "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[1] after:h-[min(3.5rem,10vw)] after:bg-gradient-to-b after:from-transparent after:to-lux-ink/[0.02]",
  ),
  ink: cn(
    "bg-gradient-to-b from-lux-ink via-[#0b0b0b] to-[#050505] text-lux-paper",
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.085)]",
    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/14 before:to-transparent",
  ),
};

const depthClass: Record<SectionDepth, string> = {
  flat: "",
  lifted:
    "shadow-[0_52px_120px_-72px_rgba(10,10,10,0.14),inset_0_1px_0_0_rgba(255,255,255,0.04)]",
};

function rhythmPadding(rhythm: SectionRhythm): string {
  switch (rhythm) {
    case "breath":
      return "py-section-breath";
    case "compact":
      return "py-[clamp(2.75rem,7vw,5.25rem)]";
    default:
      return "py-section-xl";
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
          className="pointer-events-none absolute bottom-[12%] left-0 top-[12%] z-[3] hidden w-px bg-gradient-to-b from-transparent via-lux-gold/35 to-transparent md:block"
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
