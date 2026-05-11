"use client";

import { createContext, useContext, type ReactNode } from "react";

import {
  croCommercialFacts,
  croCommercialChipLabels,
  croInvestorAssurance,
  croMessaging,
  croPrivateDeskTagline,
} from "@/data/cro";
import {
  croCommercialChipLabelsAr,
  croCommercialFactsAr,
  croInvestorAssuranceAr,
  croMessagingAr,
  croPrivateDeskTaglineAr,
} from "@/data/cro/ar";
import type { SiteLocale } from "@/lib/i18n/locale";

export type EditorialCopyBundle = {
  locale: SiteLocale;
  croMessaging: typeof croMessaging | typeof croMessagingAr;
  croCommercialFacts: typeof croCommercialFacts | typeof croCommercialFactsAr;
  croPrivateDeskTagline: string;
  croCommercialChipLabels: typeof croCommercialChipLabels | typeof croCommercialChipLabelsAr;
  croInvestorAssurance: typeof croInvestorAssurance | typeof croInvestorAssuranceAr;
};

const enBundle: EditorialCopyBundle = {
  locale: "en",
  croMessaging,
  croCommercialFacts,
  croPrivateDeskTagline,
  croCommercialChipLabels,
  croInvestorAssurance,
};

const arBundle: EditorialCopyBundle = {
  locale: "ar",
  croMessaging: croMessagingAr,
  croCommercialFacts: croCommercialFactsAr,
  croPrivateDeskTagline: croPrivateDeskTaglineAr,
  croCommercialChipLabels: croCommercialChipLabelsAr,
  croInvestorAssurance: croInvestorAssuranceAr,
};

const EditorialCopyContext = createContext<EditorialCopyBundle>(enBundle);

export function EditorialCopyProvider({ locale, children }: { locale: SiteLocale; children: ReactNode }) {
  const value = locale === "ar" ? arBundle : enBundle;
  return <EditorialCopyContext.Provider value={value}>{children}</EditorialCopyContext.Provider>;
}

export function useEditorialCopy(): EditorialCopyBundle {
  return useContext(EditorialCopyContext);
}
