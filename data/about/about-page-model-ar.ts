import { buildAboutPageModel } from "@/data/about/about-page-model";
import type { AboutInternalLink, AboutPageModel } from "@/data/about/about-page-model";
import { SOLANA_WEST_AR_FAQ_GROUPS, SOLANA_WEST_FAQ_SHARED_INTRO_AR } from "@/data/faq/solana-west-faq-ar";
import type { FaqPair, ProjectImageAsset } from "@/data/projects/types";
import { englishPathToArabicPath } from "@/lib/i18n/paths";
import { siteConfig } from "@/data/site";

function faqPickAr(indices: readonly [number, number]): readonly FaqPair[] {
  const flat = SOLANA_WEST_AR_FAQ_GROUPS.flatMap((g) => g.items);
  return indices.map((i) => {
    const item = flat[i]!;
    return {
      question: item.question,
      answer: `${item.aiSnippet}\n\n${item.answer}`,
    };
  });
}

function withArabicAlt(asset: ProjectImageAsset, alt: string): ProjectImageAsset {
  return { ...asset, alt };
}

function internalLinksAr(short: string): readonly AboutInternalLink[] {
  const m = englishPathToArabicPath;

  return [
    { label: "مشروعات ORA Developer Egypt", href: m["/projects"]!, context: "تصفح الصفحات العربية للمشروعات المتاحة.", },
    {
      label: "كمبوند سولانا ويست نيو زايد",
      href: m["/projects/solana-west"]!,
      context: "المخطط، المرافق، الموقع والأسئلة في قراءة واحدة.",
    },
    { label: "أسعار سولانا ويست", href: m["/prices"]!, context: "بداية الأسعار والفئات قبل الحجز.", },
    { label: "تقسيط سولانا ويست", href: m["/payment-plan"]!, context: "دفعة الحجز والمدة وأفق التسليم.", },
    { label: "تواصل مع المبيعات", href: m["/contact"]!, context: "مسار واضح للمشتري الجاد.", },
  ];
}

/** Arabic editorial surface for `/ar/ora-developers-egypt` — mirrors desk confirmation posture of `/about`. */
export function buildAboutPageModelAr(): AboutPageModel {
  const base = buildAboutPageModel();
  const dev = siteConfig.developer;
  const founder = siteConfig.founder;
  const projectName = siteConfig.name;
  const short = siteConfig.shortName;
  const domain = siteConfig.url.replace(/\/$/, "");

  return {
    ...base,
    idPrefix: "about-ora-ar",
    heroImage: withArabicAlt(
      base.heroImage,
      "ماستر بلان سولانا ويست نيو زايد ضمن رؤية ORA Developer Egypt للمجتمعات الفاخرة.",
    ),
    overviewFigure: withArabicAlt(
      base.overviewFigure,
      "واجهة فيلا فاخرة توضّح الطابع المعماري لمشروعات ORA Developer Egypt.",
    ),
    hero: {
      locationEyebrow: `${dev} · تخطيط رئيسي`,
      h1: "ORA Developer Egypt ومشروعاتها في مصر",
      lead: `${projectName} من ${dev} ضمن رؤية سكنية تعتمد على التخطيط الواسع، الكثافة المنخفضة، والمساحات الخضراء الممتدة في نيو زايد.`,
      supporting: `هذه الصفحة تقدم سياقاً مؤسسياً للمشتري. ${domain} موقع معلومات وتسويق مستقل، وليس الموقع الرسمي لشركة ORA أو قناة حجز حصرية.`,
    },
    developerOverview: {
      eyebrow: "نظرة عامة على المطوِّر",
      title: `${dev} وخبرة المجتمعات السكنية المخططة`,
      paragraphs: [
        `${dev} هو الاسم المرتبط بمشروع ${projectName} في المواد التسويقية المتاحة، وهو ما يمنح المشتري نقطة واضحة لفهم الطرف المطوّر.`,
        "مشروعات ORA عادةً تميل إلى التخطيط الواسع، المشاة، والخضرة المتصلة، وهي عناصر تظهر بوضوح في قراءة سولانا ويست نيو زايد.",
        "الثقة لا تُبنى على الشعارات وحدها؛ راجع العقد، جدول السداد، المرحلة، ومواعيد التسليم قبل أي قرار شراء.",
      ],
    },
    leadership: {
      eyebrow: "القيادة · سياق المؤسِّس",
      title: `${founder} وسياق الثقة المؤسسية`,
      paragraphs: [
        `يرتبط اسم ${founder} بسياق المجموعة وسمعتها العامة، وهو عامل ثقة لدى كثير من المشترين في مصر والخليج.`,
        "مع ذلك، القرار الجاد يُبنى على مستندات البيع واسم الكيان المتعاقد، لا على الانطباع العام وحده.",
      ],
    },
    portfolio: {
      eyebrow: "محفظة مشاريع · سياق",
      title: "معلومات واضحة بدون ادعاء تمثيل رسمي",
      paragraphs: [
        `${dev} تعمل على وجهات سكنية وسياحية متعددة، بينما يركز هذا الموقع على قراءة ${projectName} ومساراته العربية للمشتري الجاد.`,
        "إذا كنت تقارن مع مشروع آخر من ORA، اعتمد على المواد الرسمية لكل مشروع ولا تنقل شروط مشروع إلى آخر.",
        "أي وسيط أو قناة خارجية يجب أن تُراجع من خلال مستندات البيع الرسمية قبل دفع أي مبلغ.",
      ],
    },
    solanaWestRelationship: {
      eyebrow: `علاقة ${short}`,
      title: `${projectName} على محور الضبعة في نيو زايد`,
      paragraphs: [
        `${projectName} يمتد على نحو 316 فداناً في نيو زايد على محور الضبعة، ويجمع الفلل، التوين هاوس، التاون هاوس والشقق داخل نسيج مشاة وخضرة واحد.`,
        `أسعار سولانا ويست وتقسيط سولانا ويست يتغيران حسب المرحلة ونوع الوحدة، لذلك تُقرأ التفاصيل من صفحات الأسعار وخطة السداد قبل التواصل.`,
      ],
    },
    buyerTrust: {
      eyebrow: "ثقة المشتري · إشارات مصداقية",
      title: "قبل الحجز: راجع العقود لا رسائل الدردشة",
      paragraphs: [
        "قبل الحجز، ثبّت اسم الجهة المطوّرة، مستندات الوحدة، خطة السداد، وأي رسوم إدارية أو شروط صيانة.",
        "قد تجد عروضاً من أطراف متعددة؛ تعامل معها كمعلومات أولية حتى تُطابق مستندات البيع الرسمية.",
        "لا نستخدم عبارات شراكة حصرية أو قناة وحيدة. هدف الصفحة هو تنظيم البحث لا فرض مسار واحد على المشتري.",
      ],
    },
    internalLinks: {
      eyebrow: "متابعة داخل الموقع",
      title: "صفحات المشروع والأسعار والتواصل",
      intro: "ابدأ من الصفحات العربية الأساسية، ثم اطلب المستندات الرسمية عندما تضيق اختياراتك.",
      links: internalLinksAr(short),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO_AR,
      items: faqPickAr([5, 4]),
      fullFaqHref: englishPathToArabicPath["/faq"]!,
    },
    finalCta: {
      eyebrow: "الخطوة التالية",
      title: "اطلب استشارة واضحة قبل حجز سولانا ويست",
      supporting: `اطلب أسعار ${siteConfig.shortName} أو المتاح الحالي عبر واتساب أو نموذج التواصل، ثم راجع مستندات ${dev} قبل الحجز.`,
      primaryLabel: "تواصل عبر واتساب",
      secondaryLabel: "استعرض الوحدات",
    },
  };
}
