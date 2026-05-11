/**
 * Arabic navigation copy + paths — Arabic UI must link only within `/ar/…`.
 */

import type { FooterMegaColumn, NavItem } from "@/data/navigation";

export const primaryNavItemsAr: readonly NavItem[] = [
  { label: "الرئيسية", href: "/ar" },
  { label: "مشروعات ORA", href: "/ar/projects" },
  { label: "أسعار سولانا ويست", href: "/ar/solana-west-prices" },
  { label: "موقع سولانا ويست", href: "/ar/solana-west-location" },
  { label: "الأسئلة الشائعة", href: "/ar/solana-west-faq" },
  { label: "تواصل المبيعات", href: "/ar/contact" },
];

export const footerMegaColumnsAr: readonly FooterMegaColumn[] = [
  {
    id: "portfolio",
    headline: "المشروع والمطوّر",
    ariaLabel: "سولانا ويست وORA Developer Egypt",
    links: [
      { label: "الرئيسية", href: "/ar" },
      { label: "ORA Developer Egypt", href: "/ar/ora-developers-egypt" },
      { label: "مشروعات ORA Developer Egypt", href: "/ar/projects" },
      { label: "كمبوند سولانا ويست نيو زايد", href: "/ar/projects/solana-west" },
    ],
  },
  {
    id: "acquisition",
    headline: "الوحدات والأسعار",
    ariaLabel: "أنواع الوحدات وأسعار سولانا ويست وخطة السداد",
    links: [
      { label: "فلل سولانا ويست", href: "/ar/solana-west-villas" },
      { label: "تاون هاوس سولانا ويست", href: "/ar/solana-west-townhouses" },
      { label: "شقق سولانا ويست", href: "/ar/solana-west-apartments" },
      { label: "توين هاوس سولانا ويست", href: "/ar/solana-west-twin-houses" },
      { label: "أسعار سولانا ويست", href: "/ar/solana-west-prices" },
      { label: "تقسيط سولانا ويست", href: "/ar/solana-west-payment-plan" },
    ],
  },
  {
    id: "place",
    headline: "الموقع والاستشارة",
    ariaLabel: "الموقع والمخطط والأسئلة والتواصل",
    links: [
      { label: "موقع سولانا ويست", href: "/ar/solana-west-location" },
      { label: "المخطط العام", href: "/ar/solana-west-master-plan" },
      { label: "الأسئلة الشائعة", href: "/ar/solana-west-faq" },
      { label: "تواصل معنا", href: "/ar/contact" },
    ],
  },
  {
    id: "research",
    headline: "رؤى ومقارنات",
    ariaLabel: "أدلة استثمارية ومدونة ومقارنات",
    links: [
      { label: "رؤية استثمارية", href: "/ar/solana-west-investment" },
      { label: "دليل الاستثمار العقاري", href: "/ar/blog" },
      { label: "مقارنات مختارة", href: "/ar/comparison-pages" },
    ],
  },
];

export const footerLegalLinksAr: readonly NavItem[] = [{ label: "سياسة الخصوصية", href: "/ar/privacy-policy" }] as const;
