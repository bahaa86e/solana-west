import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

export type LuxuryFillImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  quality?: number;
  loading?: ImageProps["loading"];
  fit?: "cover" | "contain";
  imgClassName?: string;
  /** Merged onto the absolutely positioned wrapper (default fills a `relative` parent). */
  className?: string;
  /**
   * Subtle vignette + inset depth (no extra image decode). Disable on heroes that already
   * apply heavy layered grades.
   */
  filmGrade?: boolean;
};

/**
 * Fills a **`relative` parent** (typically `absolute inset-0` layer).
 * Use `object-cover` by default to protect aspect ratios (no stretching).
 */
export function LuxuryFillImage({
  src,
  alt,
  sizes,
  priority,
  quality = 80,
  loading,
  fit = "cover",
  imgClassName,
  className,
  filmGrade = true,
}: LuxuryFillImageProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", filmGrade && "bg-lux-ink/[0.025]", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        {...(priority ? { fetchPriority: "high" as const } : { loading: loading ?? ("lazy" as const) })}
        className={cn(
          fit === "cover" ? "object-cover" : "object-contain",
          filmGrade && "[transform:translateZ(0)] contrast-[1.02]",
          imgClassName,
        )}
      />
      {filmGrade ?
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_-32px_rgba(10,10,10,0.22),inset_0_0_0_1px_rgba(250,248,245,0.05)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_92%_74%_at_50%_50%,transparent_30%,rgba(10,10,10,0.06)_78%,rgba(10,10,10,0.15)_100%)]"
          />
        </>
      : null}
    </div>
  );
}
