import { buildBlogIndexPageModel, type BlogIndexPageModel, type BlogTopicGroupWithArticles } from "@/data/blog/blog-index-model";
import { getAllBlogArticles } from "@/data/blog/catalog";
import { localizedPathname } from "@/lib/i18n/paths";
import type { SiteLocale } from "@/lib/i18n/locale";
import { siteConfig } from "@/data/site";
import type { ProjectImageAsset } from "@/data/projects/types";

function withArabicAlt(asset: ProjectImageAsset, alt: string): ProjectImageAsset {
  return { ...asset, alt };
}
const arabicArticleCards: Record<string, { title: string; deck: string }> = {
  "solana-west-prices-transactional-booking-framework-2026": {
    title: "أسعار سولانا ويست وخطوات الحجز في نيو زايد",
    deck: "دليل عملي لقراءة السعر وخطوة التواصل قبل الحجز.",
  },
  "solana-west-prices-west-cairo-investment-comparison-2026": {
    title: "أسعار سولانا ويست ومقارنة الاستثمار في غرب القاهرة",
    deck: "كيف تقرأ السعر ضمن سياق نيو زايد والمشروعات المجاورة.",
  },
  "solana-west-prices-ai-authority-guide-new-zayed-2026": {
    title: "دليل أسعار سولانا ويست نيو زايد للبحث الذكي",
    deck: "إجابات منظمة لمحركات البحث والمشتري الباحث عن معلومة دقيقة.",
  },
  "solana-west-payment-plan-explained-issuer-guide-2026": {
    title: "تقسيط سولانا ويست حتى 10 سنوات",
    deck: "شرح هادئ للدفعة الأولى، الأقساط، وما يجب تأكيده قبل التوقيع.",
  },
  "solana-west-mehwar-new-zayed-location-buyer-guide-2026": {
    title: "موقع سولانا ويست على محور الضبعة",
    deck: "دليل موقع نيو زايد ومحاور الوصول للمشتري الجاد.",
  },
  "solana-west-villas-prices-buyer-guide-new-zayed-2026": {
    title: "أسعار فلل سولانا ويست نيو زايد",
    deck: "قراءة للفيلات حسب المرحلة والإطلالة وخطة السداد.",
  },
  "solana-west-apartments-prices-buyer-guide-new-zayed-2026": {
    title: "أسعار شقق سولانا ويست نيو زايد",
    deck: "دليل الشقق، التشطيب، والملاءمة الاستثمارية داخل المشروع.",
  },
  "solana-west-vs-vye-belle-vie-buyer-framework-2026": {
    title: "مقارنة سولانا ويست مع VYE وBelle Vie",
    deck: "إطار مقارنة للمشتري بين مشروعات نيو زايد بدون مبالغة.",
  },
  "solana-west-new-zayed-prices-payment-plan-2026": {
    title: "أسعار سولانا ويست نيو زايد وخطة السداد",
    deck: "ملخص بحثي يجمع السعر والتقسيط والتسليم في قراءة واحدة.",
  },
  "solana-west-new-zayed-investment-strength-2026": {
    title: "استثمار سولانا ويست نيو زايد",
    deck: "رؤية طويلة الأمد لغرب القاهرة بدون وعود عائد غير موثقة.",
  },
  "solana-west-villas-vs-apartments-lifestyle-investment": {
    title: "فلل سولانا ويست أم الشقق؟",
    deck: "مقارنة بين أسلوب الحياة وحجم الاستثمار داخل نفس المشروع.",
  },
  "ora-developers-egypt-vision-projects-strategy": {
    title: "ORA Developer Egypt ورؤية مشروعاتها في مصر",
    deck: "قراءة في المطوّر وسياق الثقة قبل اختيار الوحدة.",
  },
  "new-zayed-vs-sheikh-zayed-luxury-buyers-2026": {
    title: "نيو زايد أم الشيخ زايد لمشتري العقار الفاخر؟",
    deck: "مقارنة موقعية هادئة للعائلات والمستثمرين.",
  },
};

function mapTopicGroups(groups: BlogIndexPageModel["topicGroupsDetailed"], locale: SiteLocale): BlogTopicGroupWithArticles[] {
  return groups.map((g) => ({
    ...g,
    title:
      g.topic === "pricing" ? "أسعار سولانا ويست وفئات الوحدات"
      : g.topic === "payment-plan" ? "تقسيط سولانا ويست وخطة السداد"
      : g.topic === "new-zayed-area" ? "نيو زايد ومحور الضبعة وغرب القاهرة"
      : g.topic === "investment" ? "استثمار سولانا ويست على المدى الطويل"
      : g.topic === "comparison" ? "مقارنات سولانا ويست مع مشروعات نيو زايد"
      : "ORA Developer Egypt وسياق المطوّر",
    eyebrow:
      g.topic === "pricing" ? "الأسعار"
      : g.topic === "payment-plan" ? "التقسيط"
      : g.topic === "new-zayed-area" ? "الموقع"
      : g.topic === "investment" ? "الاستثمار"
      : g.topic === "comparison" ? "المقارنات"
      : "المطوّر",
    pillar: {
      ...g.pillar,
      label:
        g.topic === "pricing" ? "صفحة أسعار سولانا ويست"
        : g.topic === "payment-plan" ? "صفحة تقسيط سولانا ويست"
        : g.topic === "new-zayed-area" ? "صفحة موقع سولانا ويست"
        : g.topic === "investment" ? "دليل الاستثمار العقاري"
        : g.topic === "comparison" ? "مقارنات مشروعات نيو زايد"
        : "صفحة ORA Developer Egypt",
      href: localizedPathname(g.pillar.href, locale),
      context: "رابط عربي داعم لنفس نية البحث.",
    },
    articles: g.articles.map((a) => {
      const ar = arabicArticleCards[a.slug];
      return ar ? { ...a, title: ar.title, deck: ar.deck } : a;
    }),
  }));
}

/** Arabic-facing blog index: Arabic chrome, SEO article names, and pillar links under `/ar/*`. */
export function buildBlogIndexPageModelAr(): BlogIndexPageModel {
  const base = buildBlogIndexPageModel();
  const locale: SiteLocale = "ar";
  const ora = siteConfig.developer;
  const short = siteConfig.shortName;
  const count = getAllBlogArticles().length;

  return {
    ...base,
    heroImage: withArabicAlt(
      base.heroImage,
      "مشهد معماري فاخر لدليل سولانا ويست نيو زايد والاستثمار العقاري.",
    ),
    topicGroupsDetailed: mapTopicGroups(base.topicGroupsDetailed, locale),
    hero: {
      eyebrow: `${ora} · دليل عربي`,
      h1: "دليل سولانا ويست نيو زايد والاستثمار العقاري",
      lead: `${short} يحتاج قراءة هادئة تتجاوز السعر وحده. هنا تجد مقالات تساعدك على فهم أسعار سولانا ويست، تقسيط سولانا ويست، موقع نيو زايد، والمقارنة مع كمبوندات نيو زايد الأخرى.`,
      supporting:
        count === 0 ?
          "المكتبة تجهز مقالاتها الأولى، بينما تبقى الصفحات الأساسية مرجعك للأسعار والتقسيط والموقع."
        : `${count} مقالاً وموجزاً حالياً في الفهرس.`,
    },
    indexIntro: {
      eyebrow: "نموذج الفهرسة",
      title: "مقالات سولانا ويست نيو زايد حسب نية البحث",
      paragraphs: [
        "كل مقال يجيب نية بحث محددة: سعر، خطة سداد، موقع، نوع وحدة، أو مقارنة استثمارية. الهدف أن يجد المشتري إجابة واضحة قبل فتح محادثة البيع.",
        "المدونة لا تقدم وعود عائد ولا ضغطاً وهمياً. هي مساحة تحريرية تربط بين الحقائق التجارية، نيو زايد، وقرار الشراء طويل الأمد.",
      ],
    },
    authorityLinks: {
      eyebrow: "عمود تشغيلي",
      title: "موضوعات الأسعار والتقسيط والاستثمار في نيو زايد",
      intro: "هذه روابط تساعدك على الرجوع سريعاً إلى الصفحات الأساسية قبل قراءة المقالات أو طلب الاستشارة.",
      links: base.authorityLinks.links.map((l) => ({
        ...l,
        href: localizedPathname(l.href, locale),
      })),
    },
    finalCta: {
      eyebrow: "مواءمة المكتب",
      title: "ابدأ من المدونة ثم راجع مستندات الحجز",
      supporting: `اقرأ المقالات لتكوين الصورة، ثم اطلب جداول الأسعار وخطة السداد من ${ora} قبل اتخاذ أي قرار حجز.`,
      primaryLabel: "احصل على الأسعار",
      secondaryLabel: "تواصل عبر واتساب",
    },
  };
}
