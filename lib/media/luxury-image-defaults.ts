/** Central image delivery tuning — single place for sharpness vs payload. */
export const LUXURY_IMAGE_QUALITY_DEFAULT = 95;
export const LUXURY_IMAGE_QUALITY_HERO = 95;

/** Applied to all `next/image` fill layers for GPU clarity (not layout). */
export const luxuryImageSharpClass =
  "h-full w-full max-h-none max-w-none [image-rendering:auto] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] transform-gpu";
