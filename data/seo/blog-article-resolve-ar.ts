import type { BlogArticleDocument } from "@/data/blog/types";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { blogArticleRouteSeoFromDoc } from "@/data/seo/blog-article-resolve";
import { siteConfig } from "@/data/site";

const arabicBlogSeoTitles: Record<string, string> = {
  "solana-west-prices-transactional-booking-framework-2026":
    "أسعار سولانا ويست وخطوات الحجز | نيو زايد",
  "solana-west-prices-west-cairo-investment-comparison-2026":
    "أسعار سولانا ويست والاستثمار في غرب القاهرة",
  "solana-west-prices-ai-authority-guide-new-zayed-2026":
    "دليل أسعار سولانا ويست نيو زايد للبحث الذكي",
  "solana-west-payment-plan-explained-issuer-guide-2026":
    "تقسيط سولانا ويست حتى 10 سنوات",
  "solana-west-mehwar-new-zayed-location-buyer-guide-2026":
    "موقع سولانا ويست على محور الضبعة | نيو زايد",
  "solana-west-villas-prices-buyer-guide-new-zayed-2026":
    "أسعار فلل سولانا ويست نيو زايد",
  "solana-west-apartments-prices-buyer-guide-new-zayed-2026":
    "أسعار شقق سولانا ويست نيو زايد",
  "solana-west-vs-vye-belle-vie-buyer-framework-2026":
    "مقارنة سولانا ويست مع VYE وBelle Vie",
  "solana-west-new-zayed-prices-payment-plan-2026":
    "أسعار سولانا ويست نيو زايد وخطة السداد",
  "solana-west-new-zayed-investment-strength-2026":
    "استثمار سولانا ويست نيو زايد | غرب القاهرة",
  "solana-west-villas-vs-apartments-lifestyle-investment":
    "فلل سولانا ويست أم الشقق | سكن واستثمار",
  "ora-developers-egypt-vision-projects-strategy":
    "ORA Developer Egypt وسولانا ويست نيو زايد",
  "new-zayed-vs-sheikh-zayed-luxury-buyers-2026":
    "نيو زايد أم الشيخ زايد للعقار الفاخر",
};

const arabicBlogSeoDescriptions: Record<string, string> = {
  "solana-west-prices-transactional-booking-framework-2026":
    "دليل أسعار سولانا ويست نيو زايد من ORA Developer Egypt، مع خطوات طلب السعر، مراجعة المتاح، وخطة السداد قبل الحجز.",
  "solana-west-prices-west-cairo-investment-comparison-2026":
    "اقرأ أسعار سولانا ويست ضمن سياق الاستثمار العقاري في نيو زايد وغرب القاهرة، مع مقارنة هادئة للموقع والتقسيط.",
  "solana-west-prices-ai-authority-guide-new-zayed-2026":
    "معلومات منظمة عن أسعار سولانا ويست نيو زايد، ORA Developer Egypt، محور الضبعة، وأنواع الوحدات لبحث عربي ذكي.",
  "solana-west-payment-plan-explained-issuer-guide-2026":
    "شرح تقسيط سولانا ويست نيو زايد: دفعة حجز 5%، أقساط حتى 10 سنوات، وتسليم من 2027 حسب المرحلة والإصدار.",
  "solana-west-mehwar-new-zayed-location-buyer-guide-2026":
    "دليل موقع سولانا ويست نيو زايد على محور الضبعة، مع قراءة الوصول لغرب القاهرة ومطار سفنكس قبل اختيار الوحدة.",
  "solana-west-villas-prices-buyer-guide-new-zayed-2026":
    "دليل أسعار فلل سولانا ويست نيو زايد من ORA Developer Egypt، مع محددات الأرض، الإطلالة، المرحلة، والتقسيط.",
  "solana-west-apartments-prices-buyer-guide-new-zayed-2026":
    "دليل شقق للبيع في سولانا ويست نيو زايد، يشمل السعر، الدور، الواجهة، التشطيب، وخطة السداد للمشتري الجاد.",
  "solana-west-vs-vye-belle-vie-buyer-framework-2026":
    "مقارنة بين سولانا ويست وVYE وBelle Vie في نيو زايد من حيث الموقع، الكثافة، الأسعار، التقسيط، وجودة التخطيط.",
  "solana-west-new-zayed-prices-payment-plan-2026":
    "ملخص أسعار سولانا ويست نيو زايد وخطة السداد حتى 10 سنوات، مع فلل وشقق وتاون هاوس من ORA Developer Egypt.",
  "solana-west-new-zayed-investment-strength-2026":
    "دليل الاستثمار العقاري في نيو زايد عبر سولانا ويست، يقرأ الموقع، المطوّر، السعر، التقسيط، والمخاطر بدون وعود عائد.",
  "solana-west-villas-vs-apartments-lifestyle-investment":
    "مقارنة بين فلل سولانا ويست وشقق سولانا ويست للسكن والاستثمار، مع قراءة الخصوصية، السيولة، والسعر.",
  "ora-developers-egypt-vision-projects-strategy":
    "تعرف على ORA Developer Egypt وسياق سولانا ويست نيو زايد، مع قراءة الثقة، المستندات، وخطة الشراء قبل الحجز.",
  "new-zayed-vs-sheikh-zayed-luxury-buyers-2026":
    "مقارنة نيو زايد والشيخ زايد لمشتري العقار الفاخر، مع موقع سولانا ويست، الخصوصية، الوصول، وأفق الاستثمار.",
};

/** Arabic URL + locale for blog articles; body remains the English article (`lang="en"` wrapper on page). */
export function blogArticleRouteSeoArabic(doc: BlogArticleDocument): RouteSeoDefinition {
  const base = blogArticleRouteSeoFromDoc(doc);
  const title = arabicBlogSeoTitles[doc.slug] ?? `${doc.title} | ${siteConfig.shortName}`;
  const description =
    arabicBlogSeoDescriptions[doc.slug] ??
    `${title}: دليل عربي للمشتري عن سولانا ويست نيو زايد، الأسعار، التقسيط، الموقع، والاستثمار العقاري.`;

  return {
    ...base,
    path: `/ar/blog/${doc.slug}`,
    locale: "ar",
    title,
    description,
    keywords: [...(base.keywords ?? []), "سولانا ويست", "نيو زايد", "أسعار سولانا ويست", siteConfig.developer],
  };
}
