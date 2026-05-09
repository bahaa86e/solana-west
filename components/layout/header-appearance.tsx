"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type HeaderAppearance = "overDark" | "document";

const HeaderAppearanceContext = createContext<HeaderAppearance>("document");

export function useHeaderAppearance(): HeaderAppearance {
  return useContext(HeaderAppearanceContext);
}

type HeaderAppearanceProviderProps = {
  children: React.ReactNode;
};

/**
 * Home: transparent bar over dark hero until user scrolls past most of the hero.
 * Other routes: always document (paper glass) for predictable contrast.
 */
export function HeaderAppearanceProvider({ children }: HeaderAppearanceProviderProps) {
  const pathname = usePathname() ?? "/";
  const [appearance, setAppearance] = useState<HeaderAppearance>("document");

  const compute = useCallback(() => {
    if (pathname !== "/") {
      setAppearance("document");
      return;
    }
    const hero = document.getElementById("hero");
    if (!hero) {
      setAppearance("document");
      return;
    }
    const rect = hero.getBoundingClientRect();
    const threshold = Math.max(120, rect.height * 0.72);
    const y = window.scrollY;
    setAppearance(y < threshold ? "overDark" : "document");
  }, [pathname]);

  useEffect(() => {
    compute();
    const onScroll = () => compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [compute]);

  return (
    <HeaderAppearanceContext.Provider value={appearance}>{children}</HeaderAppearanceContext.Provider>
  );
}
