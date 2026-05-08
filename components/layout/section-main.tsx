import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";

type SectionMainProps = {
  children?: ReactNode;
};

/**
 * Semantic main landmark + consistent vertical rhythm for interior templates.
 */
export function SectionMain({ children }: SectionMainProps) {
  return (
    <main id="main-content" className="flex-1 pt-section-tight">
      <Container as="div" className="pb-section">
        {children}
      </Container>
    </main>
  );
}
