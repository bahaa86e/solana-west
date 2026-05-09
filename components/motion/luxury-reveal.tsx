"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const easeLux = [0.22, 1, 0.36, 1] as const;

type LuxuryRevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * One-shot viewport reveal — preserves layout; keeps motion modest for CLS + perf.
 */
export function LuxuryReveal({ children, className }: LuxuryRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.75, ease: easeLux }}
    >
      {children}
    </motion.div>
  );
}
