import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  id: string;
  eyebrow?: string;
  align?: "start" | "center";
  tone?: "default" | "onDark";
  kicker?: ReactNode;
  className?: string;
  /** Default `h2` keeps section rhythm; hub pages may use `h1` exactly once */
  titleAs?: "h1" | "h2";
};

export function SectionHeader({
  title,
  id,
  eyebrow,
  align = "start",
  tone = "default",
  kicker,
  className,
  titleAs = "h2",
}: SectionHeaderProps) {
  const TitleTag = titleAs;

  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const eyebrowMuted =
    tone === "onDark" ? "text-lux-paper/48" : "text-lux-ink/40";
  const titleMuted = tone === "onDark" ? "text-lux-paper" : "text-lux-ink";
  const kickerMuted =
    tone === "onDark" ? "text-lux-paper/70" : "text-lux-ink/62";

  return (
    <header
      className={cn(
        "flex max-w-readable flex-col gap-[clamp(1rem,2.4vw,1.375rem)] md:gap-[clamp(1.125rem,2.85vw,1.75rem)]",
        alignClass,
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "font-sans text-micro uppercase leading-[1.55] max-md:tracking-[0.28em] md:tracking-[0.3em]",
            eyebrowMuted,
          )}
        >
          {eyebrow}
        </p>
      ) : null}
        <div
          className={cn(
            "flex flex-col gap-[clamp(1.0625rem,2.65vw,1.625rem)] md:gap-[clamp(1.2rem,3.05vw,2rem)] lg:gap-[clamp(1.35rem,3.35vw,2.25rem)]",
            align === "center" ? "items-center" : "items-start",
          )}
        >
        <div
          className={cn(
            "h-px bg-gradient-to-r",
            tone === "onDark"
              ? "from-lux-paper/32 via-lux-paper/12 to-transparent"
              : "from-lux-ink/12 via-lux-gold/18 to-transparent",
            align === "center" ? "w-9 md:w-10" : "w-6 md:w-7 lg:w-8",
          )}
          aria-hidden
        />
        <TitleTag
          id={id}
          className={cn(
            "max-w-[min(28ch,100%)] text-balance font-display text-display-lg md:max-w-[min(32ch,100%)] lg:max-w-[min(36ch,100%)] lg:leading-[1.08]",
            titleMuted,
          )}
        >
          {title}
        </TitleTag>
        {kicker ?
          <div
            className={cn(
              "max-w-readable lux-body",
              kickerMuted,
            )}
          >
            {kicker}
          </div>
        : null}
      </div>
    </header>
  );
}
