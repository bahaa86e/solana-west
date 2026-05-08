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
    tone === "onDark" ? "text-lux-paper/50" : "text-lux-ink/46";
  const titleMuted = tone === "onDark" ? "text-lux-paper" : "text-lux-ink";
  const kickerMuted =
    tone === "onDark" ? "text-lux-paper/72" : "text-lux-ink/62";

  return (
    <header
      className={cn(
        "flex max-w-readable flex-col gap-5 md:gap-6 lg:gap-7",
        alignClass,
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("font-sans uppercase text-micro", eyebrowMuted)}>{eyebrow}</p>
      ) : null}
      <div
        className={cn(
          "flex flex-col gap-6 md:gap-7",
          align === "center" ? "items-center" : "items-start",
        )}
      >
        <div
          className={cn(
            "h-px bg-lux-ink/[0.07]",
            align === "center" ? "w-6 md:w-7" : "w-5 md:w-6",
          )}
          aria-hidden
        />
        <TitleTag
          id={id}
          className={cn(
            "max-w-[26ch] font-display text-display-lg text-balance md:max-w-[32ch]",
            titleMuted,
          )}
        >
          {title}
        </TitleTag>
        {kicker ? (
          <div
            className={cn(
              "max-w-readable text-[0.9375rem] font-normal leading-[1.72] md:text-base",
              kickerMuted,
            )}
          >
            {kicker}
          </div>
        ) : null}
      </div>
    </header>
  );
}
