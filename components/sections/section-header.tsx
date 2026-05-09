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
    tone === "onDark" ? "text-lux-paper/54" : "text-lux-ink/48";
  const titleMuted = tone === "onDark" ? "text-lux-paper" : "text-lux-ink";
  const kickerMuted =
    tone === "onDark" ? "text-lux-paper/76" : "text-lux-ink/66";

  return (
    <header
      className={cn(
        "flex max-w-readable flex-col gap-6 md:gap-7 lg:gap-8",
        alignClass,
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("font-sans uppercase text-micro", eyebrowMuted)}>{eyebrow}</p>
      ) : null}
      <div
        className={cn(
          "flex flex-col gap-6 md:gap-7 lg:gap-8",
          align === "center" ? "items-center" : "items-start",
        )}
      >
        <div
          className={cn(
            "h-px bg-gradient-to-r",
            tone === "onDark"
              ? "from-lux-paper/42 via-lux-paper/16 to-transparent"
              : "from-lux-ink/16 via-lux-gold/25 to-transparent",
            align === "center" ? "w-9 md:w-10" : "w-6 md:w-7 lg:w-8",
          )}
          aria-hidden
        />
        <TitleTag
          id={id}
          className={cn(
            "max-w-[28ch] font-display text-display-lg text-balance md:max-w-[34ch]",
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
