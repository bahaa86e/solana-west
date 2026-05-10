"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { SiteLocale } from "@/lib/i18n/locale";

const SiteLocaleContext = createContext<SiteLocale>("en");

export function SiteLocaleProvider({ locale, children }: { locale: SiteLocale; children: ReactNode }) {
  return <SiteLocaleContext.Provider value={locale}>{children}</SiteLocaleContext.Provider>;
}

export function useSiteLocale(): SiteLocale {
  return useContext(SiteLocaleContext);
}
