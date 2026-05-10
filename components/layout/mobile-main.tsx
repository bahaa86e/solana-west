"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type MobileMainProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

/**
 * Path-aware bottom padding so full-height heroes and long pages clear the sticky CTA —
 * tighter on homepage where the floating WhatsApp button is suppressed (sticky bar alone).
 */
export function MobileMain({ children, id, className }: MobileMainProps) {
  const pathname = usePathname() ?? "/";
  const stickyOnlyHome = pathname === "/";

  return (
    <div
      id={id}
      className={cn(
        "flex flex-1 flex-col pt-0 lg:pb-0",
        stickyOnlyHome
          ? "pb-[calc(6rem+env(safe-area-inset-bottom,0px))]"
          : "pb-[calc(8.25rem+env(safe-area-inset-bottom,0px))]",
        className,
      )}
    >
      {children}
    </div>
  );
}
