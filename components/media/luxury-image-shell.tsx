import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type HoverMode = false | "lift" | "cinematic";

type LuxuryImageShellProps = {
  children: ReactNode;
  className?: string;
  /** Scale on hover (`false` = static editorial frame). */
  hover?: HoverMode;
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
  aspectClassName,
  frameAccent,
}: LuxuryImageShellProps) {
  return (
    <figure
      className={cn(
        "group/image relative isolate w-full overflow-hidden rounded-[6px] bg-lux-mist ring-1 ring-lux-ink/[0.04]",
        hover === "lift" &&
          "motion-safe:[&_.lux-img-hover-layer]:transition-transform motion-safe:[&_.lux-img-hover-layer]:duration-[900ms] motion-safe:[&_.lux-img-hover-layer]:ease-luxury motion-safe:hover:[&_.lux-img-hover-layer]:scale-[1.015]",
        hover === "cinematic" &&
          "motion-safe:[&_.lux-img-hover-layer]:transition-transform motion-safe:[&_.lux-img-hover-layer]:duration-[1s] motion-safe:[&_.lux-img-hover-layer]:ease-luxury motion-safe:hover:[&_.lux-img-hover-layer]:scale-[1.018]",
        aspectClassName,
        className,
      )}
    >
      <div className={cn("lux-img-hover-layer absolute inset-0 z-[1] overflow-hidden motion-reduce:!scale-100")}>
        {children}
      </div>

      {frameAccent ? <div className="pointer-events-none absolute inset-0 z-[5]">{frameAccent}</div> : null}

      {hover ?
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[6] opacity-0 transition-opacity duration-500 motion-safe:group-hover/image:opacity-100 motion-reduce:opacity-0"
          style={{
            background:
              "linear-gradient(to top, rgba(253,252,249,0.12) 0%, transparent 45%)",
          }}
        />
      : null}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[8] h-px bg-gradient-to-r from-transparent via-lux-ink/[0.06] to-transparent"
      />
    </figure>
  );
}
