import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const maxWidthMap = {
  default: "max-w-content",
  narrow: "max-w-readable",
  wide: "max-w-[90rem]",
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
