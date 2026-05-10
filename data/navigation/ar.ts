/**
 * Arabic navigation copy + paths — Arabic UI must link only within `/ar/…`.
 */

import type { FooterMegaColumn, NavItem } from "@/data/navigation";

export const primaryNavItemsAr: readonly NavItem[] = [
  { label: "الرئيسية", href: "/ar" },
  { label: "المشاريع", href: "/ar/projects" },
  { label: "الأسعار", href: "/ar/solana-west-prices" },
  { label: "الموقع", href: "/ar/solana-west-location" },
  { label: "الأسئلة", href: "/ar/solana-west-faq" },
  { label: "اتصل بنا", href: "/ar/contact" },
];

export const footerMegaColumnsAr: readonly FooterMegaColumn[] = [
  {
    id: "portfolio",
    headline: "الهوية والمشروع",
    ariaLabel: "نبذة المطور ومشروع سولانا ويست",
    links: [
      { label: "الرئيسية", href: "/ar" },
      { label: "مطورو ORA مصر", href: "/ar/ora-developers-egypt" },
      { label: "مشاريع ORA", href: "/ar/projects" },
      { label: "سولانا ويست — الزيادة الجديدة", href: "/ar/projects/solana-west" },
    ],
  },
  {
    id: "acquisition",
    headline: "الوحدات والشروط",
    ariaLabel: "أنواع الوحدات والأسعار وخطة السداد",
    links: [
      { label: "فيلات مستقلة", href: "/ar/solana-west-villas" },
      { label: "تاون هاوس", href: "/ar/solana-west-townhouses" },
      { label: "شقق سكنية", href: "/ar/solana-west-apartments" },
      { label: "توين هاوس", href: "/ar/solana-west-twin-houses" },
      { label: "أسعار سولانا ويست", href: "/ar/solana-west-prices" },
      { label: "خطة السداد", href: "/ar/solana-west-payment-plan" },
    ],
  },
  {
    id: "place",
    headline: "المكان والاستشارات",
    ariaLabel: "الموقع، المخطط، الأسئلة، التواصل",
    links: [
      { label: "موقع الحيّ", href: "/ar/solana-west-location" },
      { label: "المخطط العام للمجمع", href: "/ar/solana-west-master-plan" },
      { label: "الأسئلة الشائعة", href: "/ar/solana-west-faq" },
      { label: "اتصل بنا", href: "/ar/contact" },
    ],
  },
  {
    id: "research",
    headline: "الأبحاث والمقارنات",
    ariaLabel: "أدلة استثمارية، مدونة، مقارنات",
    links: [
      { label: "أدلة استثمارية", href: "/ar/solana-west-investment" },
      { label: "المدونة", href: "/ar/blog" },
      { label: "مقارنة المشاريع", href: "/ar/comparison-pages" },
    ],
  },
];

export const footerLegalLinksAr: readonly NavItem[] = [{ label: "سياسة الخصوصية", href: "/ar/privacy-policy" }] as const;
