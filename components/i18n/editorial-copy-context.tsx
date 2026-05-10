"use client";

import { createContext, useContext, type ReactNode } from "react";

import {
  croCommercialFacts,
  croInvestorAssurance,
  croMessaging,
  croPrivateDeskTagline,
  croReferenceChipLabels,
} from "@/data/cro";
import {
  croCommercialFactsAr,
  croInvestorAssuranceAr,
  croMessagingAr,
  croPrivateDeskTaglineAr,
  croReferenceChipLabelsAr,
} from "@/data/cro/ar";
import type { SiteLocale } from "@/lib/i18n/locale";

export type EditorialCopyBundle = {
  locale: SiteLocale;
  croMessaging: typeof croMessaging | typeof croMessagingAr;
  croCommercialFacts: typeof croCommercialFacts | typeof croCommercialFactsAr;
  croPrivateDeskTagline: string;
  croReferenceChipLabels: typeof croReferenceChipLabels | typeof croReferenceChipLabelsAr;
  croInvestorAssurance: typeof croInvestorAssurance | typeof croInvestorAssuranceAr;
};

const enBundle: EditorialCopyBundle = {
  locale: "en",
  croMessaging,
  croCommercialFacts,
  croPrivateDeskTagline,
  croReferenceChipLabels,
  croInvestorAssurance,
};

const arBundle: EditorialCopyBundle = {
  locale: "ar",
  croMessaging: croMessagingAr,
  croCommercialFacts: croCommercialFactsAr,
  croPrivateDeskTagline: croPrivateDeskTaglineAr,
  croReferenceChipLabels: croReferenceChipLabelsAr,
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
