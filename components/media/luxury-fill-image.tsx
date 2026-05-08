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
}: LuxuryFillImageProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
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
          imgClassName,
        )}
      />
    </div>
  );
}
