"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const easeLux = [0.22, 1, 0.36, 1] as const;

export type LuxuryRevealLift = "sm" | "md" | "lg";

const liftY: Record<LuxuryRevealLift, number> = {
  sm: 22,
  md: 30,
  lg: 38,
};

type LuxuryRevealProps = {
  children: ReactNode;
  className?: string;
  /** Alternating entry distance for section storytelling rhythm */
  lift?: LuxuryRevealLift;
};

/**
 * One-shot viewport reveal — preserves layout; keeps motion modest for CLS + perf.
 */
export function LuxuryReveal({ children, className, lift = "md" }: LuxuryRevealProps) {
  const reduceMotion = useReducedMotion();
  const y = liftY[lift];

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -7% 0px" }}
      transition={{ duration: 0.72, ease: easeLux }}
    >
      {children}
    </motion.div>
  );
}
