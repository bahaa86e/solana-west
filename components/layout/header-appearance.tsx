"use client";

import { createContext, useContext, type ReactNode } from "react";

export type HeaderAppearance = "overDark" | "document";

const HeaderAppearanceContext = createContext<HeaderAppearance>("document");

export function useHeaderAppearance(): HeaderAppearance {
  return useContext(HeaderAppearanceContext);
}

/**
 * Quiet editorial header contrast everywhere — avoids glass-on-hero juggling.
 */
export function HeaderAppearanceProvider({ children }: { children: ReactNode }) {
  return (
    <HeaderAppearanceContext.Provider value="document">{children}</HeaderAppearanceContext.Provider>
  );
}
