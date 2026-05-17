import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type HoverMode = false | "lift" | "cinematic";

type FrameMode = "default" | "editorial";

type LuxuryImageShellProps = {
  children: ReactNode;
  className?: string;
  /** Scale on hover (`false` = static editorial frame). */
  hover?: HoverMode;
  /** Warm mat + soft shadow for editorial sections */
  frame?: FrameMode;
  aspectClassName?: string;
  frameAccent?: ReactNode;
};

/**
 * Editorial figure — calm border, minimal rim; hover is optional and subtle.
 */
export function LuxuryImageShell({
  children,
  className,
  hover = "lift",
  frame = "default",
  aspectClassName,
  frameAccent,
}: LuxuryImageShellProps) {
  const isEditorial = frame === "editorial";

  return (
    <figure
      className={cn(
        "group/image relative isolate w-full overflow-hidden",
        isEditorial ?
          cn(
            "rounded-[6px] border border-[rgb(212_196_176/0.32)]",
            "bg-[linear-gradient(180deg,#faf8f4_0%,#f3efe8_100%)]",
            "p-[2px]",
            "shadow-[0_16px_44px_-36px_rgba(45,42,37,0.09),inset_0_1px_0_0_rgba(255,255,255,0.72)]",
            "ring-1 ring-lux-ink/[0.04]",
          )
        : "rounded-[6px] bg-lux-mist ring-1 ring-lux-ink/[0.04]",
        hover === "lift" &&
          "motion-safe:[&_.lux-img-hover-layer]:transition-transform motion-safe:[&_.lux-img-hover-layer]:duration-[900ms] motion-safe:[&_.lux-img-hover-layer]:ease-luxury motion-safe:hover:[&_.lux-img-hover-layer]:scale-[1.008]",
        hover === "cinematic" &&
          "motion-safe:[&_.lux-img-hover-layer]:transition-transform motion-safe:[&_.lux-img-hover-layer]:duration-[1s] motion-safe:[&_.lux-img-hover-layer]:ease-luxury motion-safe:hover:[&_.lux-img-hover-layer]:scale-[1.01]",
        aspectClassName,
        className,
      )}
    >
      <div
        className={cn(
          "lux-img-hover-layer absolute z-[1] overflow-hidden motion-reduce:!scale-100",
          "[backface-visibility:hidden] [-webkit-backface-visibility:hidden] transform-gpu",
          isEditorial ? "inset-[2px] rounded-[6px]" : "inset-0",
        )}
      >
        {children}
      </div>

      {frameAccent ?
        <div className="pointer-events-none absolute inset-0 z-[5]">{frameAccent}</div>
      : null}

      {hover ?
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[6] opacity-0 transition-opacity duration-500 motion-safe:group-hover/image:opacity-100 motion-reduce:opacity-0"
          style={{
            background: "linear-gradient(to top, rgba(253,252,249,0.12) 0%, transparent 45%)",
          }}
        />
      : null}

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-[8] h-px bg-gradient-to-r from-transparent to-transparent",
          isEditorial ? "via-lux-champagne/28" : "via-lux-ink/[0.06]",
        )}
      />
    </figure>
  );
}
