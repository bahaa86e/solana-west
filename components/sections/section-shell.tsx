import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import type { ContainerSize } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export type SectionTone = "paper" | "sand" | "ink";

const toneClass: Record<SectionTone, string> = {
  paper: cn(
    "bg-gradient-to-b from-[#fcfaf7] via-lux-paper to-[#f2ece4]/95 text-lux-ink",
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.62)]",
    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-px before:bg-gradient-to-r before:from-transparent before:via-lux-ink/[0.07] before:to-transparent",
    "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[1] after:h-[min(4.5rem,12vw)] after:bg-gradient-to-b after:from-transparent after:to-lux-ink/[0.018]",
  ),
  sand: cn(
    "bg-gradient-to-br from-[#e9e2d8]/95 via-lux-mist/98 to-[#f7f5f0] text-lux-ink",
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.52),inset_0_-1px_0_0_rgba(10,10,10,0.02)]",
    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-px before:bg-gradient-to-r before:from-transparent before:via-lux-gold/[0.09] before:to-transparent",
  ),
  ink: cn(
    "bg-gradient-to-b from-lux-ink via-[#0c0c0c] to-lux-ink text-lux-paper",
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.075)]",
    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/12 before:to-transparent",
  ),
};

export type SectionShellProps = {
  id: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
  children: ReactNode;
  className?: string;
  density?: "editorial" | "compact";
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
  tone = "paper",
  containerSize = "default",
  bleed = true,
}: SectionShellProps) {
  const vertical =
    density === "editorial"
      ? "py-section-xl"
      : "py-[clamp(2.75rem,7vw,5rem)]";

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
      className={cn(
        "relative isolate scroll-mt-28 overflow-hidden lg:scroll-mt-32",
        toneClass[tone],
        vertical,
        className,
      )}
    >
      {bleed ?
        <Container size={containerSize} as="div" className="relative z-[2]">
          {children}
        </Container>
      : children}
    </section>
  );
}
