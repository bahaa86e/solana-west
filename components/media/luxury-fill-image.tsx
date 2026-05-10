import Image, { type ImageProps } from "next/image";

import type { LuxuryImageCrop } from "@/lib/media/luxury-image-crops";
import { luxuryImageCrops } from "@/lib/media/luxury-image-crops";
import { cn } from "@/lib/utils";

export type LuxuryImageTreatment = "flat" | "editorial" | "rich";

export type LuxuryFillImageProps = {
  src: string;
  /** When set, shown below `lg` for portrait-safe luxury crops; `src` is used `lg` and up. */
  mobileSrc?: string;
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
   * Historical toggle: `false` disables all internal grading (heavy heroes draw their own stack).
   * Equivalent to `"flat"` treatment.
   */
  filmGrade?: boolean;
  /** Cinematic overlays + warmth; defaults to `"editorial"` when `filmGrade` is true. */
  treatment?: LuxuryImageTreatment;
  /** Opinionated focal bias — merges before `imgClassName`. */
  crop?: LuxuryImageCrop;
};

function treatmentFromProps(filmGrade: boolean | undefined, treatment: LuxuryImageTreatment | undefined): LuxuryImageTreatment {
  if (filmGrade === false) return "flat";
  return treatment ?? "editorial";
}

/**
 * Fills a **`relative` parent** (typically inside an `absolute inset-0` layer).
 * Stacks luxury warmth, contrast, vignette, and inset depth unless `filmGrade={false}`.
 */
export function LuxuryFillImage({
  src,
  mobileSrc,
  alt,
  sizes,
  priority,
  quality = 80,
  loading,
  fit = "cover",
  imgClassName,
  className,
  filmGrade = true,
  treatment,
  crop,
}: LuxuryFillImageProps) {
  const mode = treatmentFromProps(filmGrade, treatment);

  const positionCls = crop ? luxuryImageCrops[crop] : undefined;

  const imgClasses = cn(
    fit === "cover" ? "object-cover" : "object-contain",
    positionCls,
    mode !== "flat" &&
      cn(
        "[transform:translateZ(0)]",
        mode === "rich" ?
          "[filter:saturate(1.03)_contrast(1.045)_brightness(0.985)] motion-reduce:filter-none"
        : "[filter:saturate(1.015)_contrast(1.028)_brightness(0.992)] motion-reduce:filter-none",
      ),
    imgClassName,
  );

  const useDual = Boolean(mobileSrc && mobileSrc !== src);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        mode !== "flat" && "bg-lux-ink/[0.028]",
        className,
      )}
    >
      {useDual ? (
        <>
          <Image
            src={mobileSrc!}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            quality={quality}
            {...(priority ? { fetchPriority: "high" as const } : { loading: loading ?? ("lazy" as const) })}
            className={cn(imgClasses, "lg:hidden")}
          />
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            quality={quality}
            {...(priority ? { fetchPriority: "high" as const } : { loading: loading ?? ("lazy" as const) })}
            className={cn(imgClasses, "hidden lg:block")}
          />
        </>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          {...(priority ? { fetchPriority: "high" as const } : { loading: loading ?? ("lazy" as const) })}
          className={imgClasses}
        />
      )}
      {mode === "flat" ?
        null
      : <>
          {/* Warmth & lift wash — cinematographer-style gold paper through highlights */}
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0 z-[1] mix-blend-soft-light opacity-[0.38] md:opacity-[0.42]",
              "bg-[radial-gradient(ellipse_88%_64%_at_18%_12%,rgba(250,248,245,0.18)_0%,transparent_54%)]",
            )}
          />
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0 z-[1] mix-blend-overlay bg-[linear-gradient(130deg,rgba(196,165,116,0.085)_0%,transparent_44%,transparent_58%,rgba(232,226,217,0.06)_100%)]",
              mode === "rich" ? "opacity-[0.22]" : "opacity-[0.14]",
            )}
          />
          {/* Bottom anchor density — readability + weight */}
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[52%]",
              mode === "rich" ? "bg-gradient-to-t from-lux-ink/[0.2] via-transparent to-transparent"
              : "bg-gradient-to-t from-lux-ink/[0.14] via-transparent to-transparent",
            )}
          />
          {/* Inset cinematographic rim */}
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0 z-[2]",
              mode === "rich" ?
                "shadow-[inset_0_0_164px_-40px_rgb(10_10_10_/26%),inset_0_0_0_1px_rgb(250_248_245_/7%)]"
              : "shadow-[inset_0_0_130px_-36px_rgb(10_10_10_/22%),inset_0_0_0_1px_rgb(250_248_245_/6%)]",
            )}
          />
          {/* Oval vignette — draws eye to focal centre */}
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0 z-[2]",
              mode === "rich" ?
                "bg-[radial-gradient(ellipse_98%_90%_at_48%_50%,transparent_24%,rgba(10,10,10,0.06)_62%,rgba(10,10,10,0.2)_100%)]"
              : "bg-[radial-gradient(ellipse_98%_90%_at_48%_50%,transparent_24%,rgba(10,10,10,0.05)_65%,rgba(10,10,10,0.15)_100%)]",
            )}
          />
          {/* Thin top skylight veil */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[2] opacity-45 mix-blend-soft-light bg-[radial-gradient(ellipse_115%_55%_at_50%_0%,rgba(250,248,245,0.16)_0%,transparent_58%)]"
          />
        </>
      }
    </div>
  );
}
