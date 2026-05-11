/**
 * Arabic-facing Route SEO payloads (`locale: "ar"`) — canonical paths beneath `/ar`.
 * Mirrors desk confirmation-safe factual framing aligned with English hubs without overwriting EN defs.
 */

import { defaultOpenGraphImagePath } from "@/data/seo/defaults";
import { solanaWestMedia } from "@/data/media/solana-west";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";

const OG = defaultOpenGraphImagePath;
const nx = siteConfig.name;
const ora = siteConfig.developer;

export const aboutPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/ora-developers-egypt",
  title: `مشروعات ORA في مصر وسولانا ويست`,
  description: `تعرف على ORA Developer Egypt وسياق سولانا ويست نيو زايد: مشروع فاخر منخفض الكثافة على محور الضبعة مع أسعار وتقسيط يراجَعان قبل الحجز.`,
  openGraphImagePath: OG,
  keywords: ["ORA Developer Egypt", "سولانا ويست نيو زايد", "ناجيب ساويرس", "مشروعات ORA"],
};

export const projectsHubPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/projects",
  title: `مشروعات ORA وسولانا ويست في مصر`,
  description: `فهرس عربي لمشروعات ORA Developer Egypt مع تركيز على سولانا ويست نيو زايد: الأسعار، الموقع، أنظمة السداد، وأنواع الوحدات الفاخرة.`,
  openGraphImagePath: OG,
  keywords: ["مشروعات ORA", "سولانا ويست نيو زايد", "نيو زايد عقارات"],
};

export const contactPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/contact",
  title: `تواصل مع مبيعات سولانا ويست | نيو زايد`,
  description: `تواصل لطلب أسعار سولانا ويست نيو زايد، تقسيط حتى 10 سنوات، أو حجز زيارة للمشروع من ORA Developer Egypt عبر واتساب أو الهاتف.`,
  openGraphImagePath: OG,
  keywords: ["تواصل سولانا ويست", "مبيعات ORA", "حجز زيارة سولانا ويست"],
};

export const faqPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-faq",
  title: `أسئلة سولانا ويست نيو زايد | أسعار وتقسيط`,
  description: `إجابات واضحة عن سولانا ويست نيو زايد من ORA Developer Egypt: الأسعار، التقسيط، الفلل، الشقق، الموقع، والتسليم من 2027.`,
  openGraphImagePath: OG,
  keywords: ["أسئلة سولانا ويست", "تقسيط سولانا ويست", "ORA Developer Egypt"],
};

export const pricesPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-prices",
  title: `أسعار سولانا ويست نيو زايد`,
  description: `أسعار سولانا ويست نيو زايد تبدأ من 9.8 مليون جنيه، مع فلل وشقق وتاون هاوس وأنظمة سداد مرنة من ORA Developer Egypt.`,
  openGraphImagePath: OG,
  keywords: ["أسعار سولانا ويست", "فلل سولانا ويست", "نيو زايد", "ORA Developer Egypt"],
};

export const paymentPlanPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-payment-plan",
  title: `أنظمة سداد سولانا ويست حتى 10 سنوات`,
  description: `تقسيط سولانا ويست نيو زايد من ORA Developer Egypt يبدأ بدفعة حجز 5% وأقساط حتى 10 سنوات، مع تسليم من 2027 حسب المرحلة.`,
  openGraphImagePath: OG,
  keywords: ["تقسيط سولانا ويست", "أقساط 10 سنوات", "سولانا ويست نيو زايد"],
};

export const locationPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-location",
  title: `موقع سولانا ويست نيو زايد | محور الضبعة`,
  description: `موقع سولانا ويست نيو زايد على محور الضبعة يربط المشروع بغرب القاهرة، طريق الإسكندرية الصحراوي، ومطار سفنكس ضمن رؤية ORA Developer Egypt.`,
  openGraphImagePath: OG,
  keywords: ["موقع سولانا ويست", "محور الضبعة", "نيو زايد", "ORA Developer Egypt"],
};

export const masterPlanPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-master-plan",
  title: `ماستر بلان سولانا ويست نيو زايد | 316 فدان`,
  description: `ماستر بلان سولانا ويست نيو زايد يمتد على 316 فداناً من ORA Developer Egypt، بتخطيط منخفض الكثافة ومساحات خضراء وممرات مشاة.`,
  openGraphImagePath: solanaWestMedia.masterplan.src,
  keywords: ["ماستر بلان سولانا ويست", "سولانا ويست نيو زايد", "ORA Developer Egypt"],
};

export const blogIndexPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/blog",
  title: `دليل سولانا ويست نيو زايد والاستثمار العقاري`,
  description: `مدونة عربية عن سولانا ويست نيو زايد: أسعار، تقسيط، فلل، شقق، موقع، مقارنات، والاستثمار العقاري في نيو زايد من ORA Developer Egypt.`,
  openGraphImagePath: OG,
  keywords: ["مدونة سولانا ويست", "استثمار نيو زايد", "ORA Developer Egypt"],
};

export const villasPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-villas",
  title: `فلل للبيع في سولانا ويست نيو زايد`,
  description: `فلل للبيع في سولانا ويست نيو زايد من ORA Developer Egypt، بخصوصية أعلى وإطلالات خضراء داخل مجتمع فاخر منخفض الكثافة.`,
  openGraphImagePath: OG,
  keywords: ["فلل للبيع في نيو زايد", "فلل سولانا ويست", "سولانا ويست نيو زايد"],
};

export const townhousesPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-townhouses",
  title: `تاون هاوس سولانا ويست نيو زايد`,
  description: `تاون هاوس سولانا ويست نيو زايد يوفر مساحة عائلية وخصوصية داخل مجتمع فاخر من ORA Developer Egypt مع تقسيط حتى 10 سنوات.`,
  openGraphImagePath: OG,
  keywords: ["تاون هاوس سولانا ويست", "تاون هاوس نيو زايد"],
};

export const apartmentsPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-apartments",
  title: `شقق للبيع في سولانا ويست نيو زايد`,
  description: `شقق للبيع في سولانا ويست نيو زايد من ORA Developer Egypt داخل مجتمع منخفض الكثافة، مع أسعار تبدأ من 9.8 مليون جنيه.`,
  openGraphImagePath: OG,
  keywords: ["شقق للبيع في سولانا ويست", "شقق نيو زايد", "أسعار سولانا ويست"],
};

export const twinHousesPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-twin-houses",
  title: `توين هاوس سولانا ويست نيو زايد`,
  description: `توين هاوس سولانا ويست نيو زايد يمنح إحساس الفيلا بكفاءة أعلى، ضمن مشروع فاخر من ORA Developer Egypt ومساحات خضراء واسعة.`,
  openGraphImagePath: OG,
  keywords: ["توين هاوس سولانا ويست", "توين هاوس نيو زايد", "ORA Developer Egypt"],
};

export const privacyPolicyPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/privacy-policy",
  title: `سياسة خصوصية سولانا ويست نيو زايد`,
  description: `سياسة خصوصية سولانا ويست نيو زايد توضّح كيفية إدارة بيانات الاستفسار، واتساب، النماذج، والتحليلات لخدمة طلبات الأسعار والتواصل.`,
  keywords: ["خصوصية سولانا ويست"],
};

export const comparisonPagesSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/comparison-pages",
  title: `مقارنة كمبوندات نيو زايد | سولانا ويست`,
  description: `قارن سولانا ويست نيو زايد مع كمبوندات مثل VYE وBelle Vie من حيث الموقع، الكثافة، الأسعار، التقسيط، وجودة التخطيط.`,
  openGraphImagePath: OG,
  keywords: ["مقارنة كمبوندات نيو زايد", "سولانا ويست", "VYE", "Belle Vie"],
};

export const investmentGuidesPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-investment",
  title: `استثمار سولانا ويست نيو زايد | غرب القاهرة`,
  description: `دليل الاستثمار العقاري في نيو زايد عبر سولانا ويست من ORA Developer Egypt: موقع محور الضبعة، أسعار، تقسيط، ومجتمع منخفض الكثافة.`,
  openGraphImagePath: OG,
  keywords: ["الاستثمار العقاري في نيو زايد", "استثمار سولانا ويست", "ORA Developer Egypt"],
};

/** Solana West project hub (Arabic pathname stays under `/ar/projects`). */
export const solanaWestProjectPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/projects/solana-west",
  title: `كمبوند سولانا ويست نيو زايد`,
  description: `كمبوند سولانا ويست نيو زايد من ORA Developer Egypt على 316 فداناً، بأسعار تبدأ من 9.8 مليون وتقسيط حتى 10 سنوات وفلل وشقق.`,
  openGraphImagePath: OG,
  keywords: [`${nx} ORA`, "كمبوند سولانا ويست نيو زايد"],
};
