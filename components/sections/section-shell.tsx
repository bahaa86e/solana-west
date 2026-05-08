import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import type { ContainerSize } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export type SectionTone = "paper" | "sand" | "ink";

const toneClass: Record<SectionTone, string> = {
  paper: "bg-lux-paper text-lux-ink",
  sand: "bg-lux-mist/90 text-lux-ink",
  ink: "bg-lux-ink text-lux-paper",
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
      : "py-[clamp(2.75rem,6.5vw,4.75rem)]";

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
      className={cn(
        "relative scroll-mt-28 lg:scroll-mt-32",
        toneClass[tone],
        vertical,
        className,
      )}
    >
      {bleed ? (
        <Container size={containerSize} as="div" className="relative">
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  );
}
