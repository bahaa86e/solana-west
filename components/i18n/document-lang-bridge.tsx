"use client";

import { useEffect } from "react";

import type { SiteLocale } from "@/lib/i18n/locale";

/**
 * Aligns `<html lang dir>` with the active editorial locale segment (English remains root; Arabic under `/ar`).
 * Root layout keeps a safe default (`en` / `ltr`); this updates the document while Arabic routes render.
 */
export function DocumentLangBridge({ locale }: { locale: SiteLocale }) {
  useEffect(() => {
    const lang = locale === "ar" ? "ar" : "en";
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;

    return () => {
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    };
  }, [locale]);

  return null;
}
