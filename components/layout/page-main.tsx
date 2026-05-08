import type { ReactNode } from "react";

/**
 * Full-bleed page stack (no inner `Container` wrapper) — for cinematic home composition.
 */
export function PageMain({ children }: { children: ReactNode }) {
  return <main id="main-content" className="flex flex-1 flex-col">{children}</main>;
}
