import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const maxWidthMap = {
  /** ~1200px — primary editorial column for long-form & sections */
  default: "max-w-content",
  narrow: "max-w-readable",
  /** ~1216px — luxury desktop grid; avoids ultra-wide stretched layouts */
  wide: "max-w-[min(76rem,calc(100vw-4.75rem))]",
  /** ~1136px — tighter feature articles & dense hubs */
  editorial: "max-w-[min(71rem,calc(100vw-4.5rem))]",
  full: "max-w-none",
} as const;

export type ContainerSize = keyof typeof maxWidthMap;

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "main" | "section" | "article" | "header" | "footer" | "nav";
  /** Horizontal padding: default follows mobile-first `px-gutter`. */
  pad?: "default" | "none";
  size?: ContainerSize;
};

export function Container({
  as: Component = "div",
  children,
  className,
  pad = "default",
  size = "default",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full",
        maxWidthMap[size],
        pad === "default" && "px-gutter",
        className,
      )}
    >
      {children}
    </Component>
  );
}
