import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type HoverMode = false | "lift" | "cinematic";

type LuxuryImageShellProps = {
  children: ReactNode;
  className?: string;
  /** Scale + glow on hover (`false` disables motion + sheen overlays). */
  hover?: HoverMode;
  /** Optional aspect lock on the `<figure>` (e.g. `aspect-[4/3]`). */
  aspectClassName?: string;
  /** Static rims / scrims rendered above the motion layer — do not scale on hover */
  frameAccent?: ReactNode;
};

/**
 * Figure wrapper: outer vignette, depth rim, premium hover kinematics around a fill image.
 * Place **`LuxuryFillImage`** (`absolute inset-0`) inside as `children`.
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
        "group/image relative isolate w-full overflow-hidden bg-lux-mist/38 shadow-lux-image ring-1 ring-lux-ink/[0.035]",
        /* Outer sculpting vignette — quiet, daylight */
        "before:pointer-events-none before:absolute before:inset-0 before:z-[4] before:shadow-[inset_0_0_88px_-20px_rgb(72_66_58_/8%)]",
        "after:pointer-events-none after:absolute after:inset-[-3%_-1%_-5%_-1%] after:z-[3] after:bg-[radial-gradient(ellipse_90%_96%_at_48%_50%,transparent_52%,rgba(72,66,58,0.045)_93%,rgba(72,66,58,0.08)_100%)]",
        hover === "lift" &&
          "motion-safe:[&_.lux-img-hover-layer]:transition-[transform] motion-safe:[&_.lux-img-hover-layer]:duration-[1.08s] motion-safe:[&_.lux-img-hover-layer]:ease-luxury motion-safe:hover:[&_.lux-img-hover-layer]:scale-[1.026]",
        hover === "cinematic" &&
          "motion-safe:[&_.lux-img-hover-layer]:transition-[transform] motion-safe:[&_.lux-img-hover-layer]:duration-[1.26s] motion-safe:[&_.lux-img-hover-layer]:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:[&_.lux-img-hover-layer]:scale-[1.034]",
        aspectClassName,
        className,
      )}
    >
      <div
        className={cn(
          "lux-img-hover-layer absolute inset-0 z-[1] overflow-hidden motion-reduce:!scale-100 motion-reduce:!transform-none",
        )}
      >
        {children}
      </div>

      {frameAccent ? <div className="pointer-events-none absolute inset-0 z-[5]">{frameAccent}</div> : null}

      {hover ?
        <>
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0 z-[6] opacity-0 mix-blend-soft-light transition-opacity duration-700 ease-luxury",
              "bg-[radial-gradient(ellipse_105%_78%_at_52%_-5%,rgba(250,248,245,0.16)_0%,transparent_54%)]",
              "motion-safe:group-hover/image:opacity-100 motion-reduce:opacity-0",
            )}
          />
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0 z-[7] opacity-0 mix-blend-overlay transition-opacity duration-[620ms] ease-luxury",
              "bg-[linear-gradient(to_top,rgba(196,165,116,0.14)_0%,transparent_52%)]",
              "motion-safe:group-hover/image:opacity-[0.38] motion-reduce:opacity-0",
            )}
          />
        </>
      : null}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[9] h-px bg-gradient-to-r from-transparent via-lux-gold/[0.26] to-transparent opacity-60 motion-safe:transition-opacity motion-safe:duration-500 motion-safe:group-hover/image:opacity-95"
      />
    </figure>
  );
}
