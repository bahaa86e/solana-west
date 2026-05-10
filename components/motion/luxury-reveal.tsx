"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const easeLux = [0.22, 1, 0.36, 1] as const;

export type LuxuryRevealLift = "sm" | "md" | "lg";

const liftY: Record<LuxuryRevealLift, number> = {
  sm: 14,
  md: 20,
  lg: 26,
};

type LuxuryRevealProps = {
  children: ReactNode;
  className?: string;
  /** Alternating entry distance for section storytelling rhythm */
  lift?: LuxuryRevealLift;
  /** Longer travel + duration for editorial / cinematic sections. */
  variant?: "standard" | "cinematic";
};

/**
 * One-shot viewport reveal — preserves layout; keeps motion modest for CLS + perf.
 */
export function LuxuryReveal({
  children,
  className,
  lift = "md",
  variant = "standard",
}: LuxuryRevealProps) {
  const reduceMotion = useReducedMotion();
  const yBase = liftY[lift];
  const y = variant === "cinematic" ? yBase + 8 : yBase;
  const duration = variant === "cinematic" ? 0.82 : 0.65;
  const amount = variant === "cinematic" ? 0.1 : 0.08;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -7% 0px" }}
      transition={{ duration, ease: easeLux }}
    >
      {children}
    </motion.div>
  );
}
