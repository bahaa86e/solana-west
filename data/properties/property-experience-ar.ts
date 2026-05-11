import type { PropertyExperienceModel } from "@/data/properties/property-type-experience";
import { buildPropertyExperienceModel, type PropertyExperienceSlug } from "@/data/properties/property-type-experience";
import { SOLANA_WEST_AR_FAQ_GROUPS, SOLANA_WEST_FAQ_SHARED_INTRO_AR } from "@/data/faq/solana-west-faq-ar";
import { englishPathToArabicPath } from "@/lib/i18n/paths";
import type { ProjectImageAsset } from "@/data/projects/types";

const ARABIC_PROPERTY_H1: Record<PropertyExperienceSlug, string> = {
  apartments: "شقق للبيع في سولانا ويست نيو زايد",
  villas: "فلل للبيع في سولانا ويست نيو زايد",
  townhouses: "تاون هاوس للبيع في سولانا ويست نيو زايد",
  "twin-houses": "توين هاوس للبيع في سولانا ويست نيو زايد",
};

const ARABIC_PROPERTY_TITLES: Record<
  PropertyExperienceSlug,
  {
    overview: string;
    lifestyle: string;
    investment: string;
    features: string;
    related: string;
    final: string;
  }
> = {
  apartments: {
    overview: "شقق سولانا ويست داخل مجتمع منخفض الكثافة",
    lifestyle: "تجربة سكنية أهدأ للشقق في نيو زايد",
    investment: "شقق سولانا ويست كمدخل استثماري مدروس",
    features: "مزايا شقق سولانا ويست",
    related: "كمبوند سولانا ويست نيو زايد",
    final: "اطلب أسعار شقق سولانا ويست",
  },
  villas: {
    overview: "فلل سولانا ويست بإطلالات ومساحات أكثر خصوصية",
    lifestyle: "حياة الفلل داخل ماستر بلان أخضر",
    investment: "فلل سولانا ويست للمشتري طويل الأمد",
    features: "مزايا فلل سولانا ويست",
    related: "كمبوند سولانا ويست نيو زايد",
    final: "اطلب أسعار فلل سولانا ويست",
  },
  townhouses: {
    overview: "تاون هاوس سولانا ويست على محاور مشاة خضراء",
    lifestyle: "توازن الخصوصية والمساحة في التاون هاوس",
    investment: "تاون هاوس سولانا ويست بين السكن والاستثمار",
    features: "مزايا تاون هاوس سولانا ويست",
    related: "كمبوند سولانا ويست نيو زايد",
    final: "اطلب أسعار تاون هاوس سولانا ويست",
  },
  "twin-houses": {
    overview: "توين هاوس سولانا ويست بخصوصية أعلى من التاون",
    lifestyle: "إيقاع سكني هادئ لوحدات التوين هاوس",
    investment: "توين هاوس سولانا ويست كاختيار متوسط الكثافة",
    features: "مزايا توين هاوس سولانا ويست",
    related: "كمبوند سولانا ويست نيو زايد",
    final: "اطلب أسعار توين هاوس سولانا ويست",
  },
};

const ARABIC_PROPERTY_COPY: Record<
  PropertyExperienceSlug,
  {
    lead: string;
    supporting: string;
    overview: readonly string[];
    lifestyle: readonly string[];
    investment: readonly string[];
    features: readonly string[];
  }
> = {
  apartments: {
    lead:
      "شقق سولانا ويست تمنح المشتري مدخلاً أكثر مرونة إلى مجتمع فاخر في نيو زايد، مع الاستفادة من المساحات الخضراء والخدمات دون الالتزام بمساحة أرض كبيرة.",
    supporting:
      "هذا المسار مناسب لمن يبحث عن شقق للبيع في نيو زايد داخل مشروع من ORA Developer Egypt، مع ضرورة مراجعة الدور، الإطلالة، التشطيب، وخطة السداد قبل الحجز.",
    overview: [
      "شقق سولانا ويست ليست منتجاً منفصلاً عن روح المشروع؛ فهي تستفيد من نفس الماستر بلان منخفض الكثافة ونفس شبكة المشاة والخضرة.",
      "اختيار الشقة يتأثر بالدور، الواجهة، المساحة، وقربها من الخدمات. لذلك لا يكفي سؤال السعر فقط؛ يجب قراءة الوحدة ضمن موقعها داخل المرحلة.",
      "للمستثمر، تمنح الشقق حجماً أكثر مرونة للصفقة، مع قابلية أوضح للمقارنة بين السعر، التقسيط، وتوقيت التسليم.",
    ],
    lifestyle: [
      "الحياة في الشقق تناسب من يريد إدارة يومية أخف، مع وصول منظم إلى المرافق والمساحات المفتوحة داخل الكمبوند.",
      "وجود الشقة داخل مجتمع منخفض الكثافة يضيف قيمة مختلفة عن مبنى مستقل؛ فالخضرة، الأمن، والهوية المعمارية جزء من التجربة.",
      "على المشتري أن يراجع اتجاه الوحدة، الخصوصية، وحركة الوصول قبل تثبيت الاختيار.",
    ],
    investment: [
      "شقق للبيع في نيو زايد داخل مشروع مثل سولانا ويست قد تكون مناسبة لمن يريد دخولاً استثمارياً أكثر انضباطاً من الفلل.",
      "العائد المحتمل لا يُفترض من اسم المشروع وحده؛ بل يُقرأ من سعر الشراء، خطة التقسيط، رسوم التشغيل، والطلب المتوقع على الإيجار.",
      "اطلب أسعار شقق سولانا ويست حسب المرحلة قبل المقارنة مع كمبوندات نيو زايد الأخرى.",
    ],
    features: [
      "مدخل مرن إلى سولانا ويست نيو زايد مقارنة بالفئات الأكبر.",
      "استفادة من الماستر بلان منخفض الكثافة والخدمات المشتركة.",
      "تأثير واضح للدور، الإطلالة، والمساحة على السعر النهائي.",
      "مناسبة لمشتري السكن العملي أو المستثمر طويل الأمد.",
      "ضرورة مراجعة التشطيب وخطة السداد في الإصدار الرسمي.",
    ],
  },
  villas: {
    lead:
      "فلل سولانا ويست هي الاختيار الأكثر خصوصية داخل المشروع، بمساحات أوسع وإطلالات أهدأ ضمن ماستر بلان أخضر في نيو زايد.",
    supporting:
      "لمن يبحث عن فلل للبيع في سولانا ويست، يجب قراءة مساحة الأرض، موقع القطعة، الإطلالة، التشطيب، وخطة التقسيط قبل مقارنة السعر بأي مشروع آخر.",
    overview: [
      "الفيلات في سولانا ويست تخاطب مشترياً يبحث عن بيت مستقل داخل مجتمع منظم، وليس مجرد مساحة كبيرة.",
      "قيمة الفيلا تتأثر بموقعها داخل المرحلة، علاقتها بالمساحات الخضراء، ودرجة الخصوصية حولها.",
      "أسعار فلل سولانا ويست تحتاج مراجعة مباشرة لأنها تختلف حسب القطعة، الإطلالة، وحزمة التشطيب.",
    ],
    lifestyle: [
      "حياة الفيلا هنا أكثر هدوءاً واتساعاً، مع مساحات مفتوحة تمنح الأسرة إحساساً أعمق بالخصوصية.",
      "الممرات الخضراء والبعد عن الكثافة العالية يساعدان على خلق تجربة سكنية أقرب إلى منتجع يومي هادئ.",
      "قبل الحجز، راجع اتجاه الفيلا، قربها من الحركة، ومسار الوصول إلى المرافق.",
    ],
    investment: [
      "فلل سولانا ويست تناسب من يفكر في احتفاظ طويل الأمد داخل واحدة من مناطق النمو في غرب القاهرة.",
      "القيمة لا تأتي من المساحة فقط؛ بل من موقع القطعة، جودة المخطط، قوة ORA Developer Egypt، ووضوح شروط السداد.",
      "لا تعتمد على سعر عام للفلل؛ اطلب الإصدار الحالي وقارن كل فيلا بموقعها ومواصفاتها.",
    ],
    features: [
      "خصوصية أعلى ومساحات أكبر داخل سولانا ويست نيو زايد.",
      "إطلالات ومساحات خضراء تؤثر على تجربة السكن والقيمة.",
      "اختلاف السعر حسب مساحة الأرض وموقع المرحلة.",
      "مناسبة للعائلات ومشتري الخليج الباحثين عن سكن فاخر طويل الأمد.",
      "ضرورة مراجعة التشطيب، التسليم، ورسوم التشغيل قبل الحجز.",
    ],
  },
  townhouses: {
    lead:
      "تاون هاوس سولانا ويست يمنح مساحة عائلية وخصوصية واضحة داخل نيو زايد، مع حجم استثماري أكثر توازناً من الفيلا المستقلة.",
    supporting:
      "هذا الاختيار يناسب من يريد منزلاً متعدد المستويات في كمبوند فاخر، مع قراءة دقيقة للسعر، المرحلة، وخطة السداد.",
    overview: [
      "التاون هاوس في سولانا ويست يقع بين الشقة والفيلا من حيث المساحة والخصوصية، لذلك يناسب كثيراً من العائلات.",
      "وجوده على محاور مشاة ومساحات خضراء يمنح الحياة اليومية إيقاعاً أهدأ من الصفوف السكنية التقليدية.",
      "السعر النهائي يتأثر بالموقع، مساحة المبنى، اتجاه الوحدة، وحزمة التشطيب المتاحة.",
    ],
    lifestyle: [
      "يوفر التاون هاوس مدخلاً أكثر خصوصية ومساحة داخلية مناسبة لحياة عائلية منظمة.",
      "القرب من الممرات والمرافق يجعل الروتين اليومي أكثر سهولة، خصوصاً للعائلات التي تريد مساحة دون عزلة كاملة.",
      "راجع علاقة الوحدة بالجيران، اتجاهها، وحركة السيارات قبل الحجز.",
    ],
    investment: [
      "تاون هاوس سولانا ويست قد يكون اختياراً عملياً لمن يريد حجم صفقة متوسط داخل مشروع فاخر.",
      "يجب مقارنة السعر بخطة السداد، مساحة الوحدة، وإمكانية إعادة البيع أو التأجير على المدى الطويل.",
      "في سوق كمبوندات نيو زايد، التاون هاوس يظل فئة مهمة لمن يوازن بين الخصوصية والسيولة.",
    ],
    features: [
      "مساحة عائلية أكبر من الشقق مع تكلفة عادة أخف من الفلل.",
      "مداخل أكثر خصوصية ضمن مجتمع منخفض الكثافة.",
      "قرب من المساحات الخضراء ومحاور المشاة.",
      "مناسب للعائلات والمستثمرين الباحثين عن توازن بين السعر والمساحة.",
      "السعر يتغير حسب الموقع والمرحلة والتشطيب.",
    ],
  },
  "twin-houses": {
    lead:
      "توين هاوس سولانا ويست يقدم إحساس الفيلا مع مساحة أكثر كفاءة، داخل مجتمع أخضر منخفض الكثافة في نيو زايد.",
    supporting:
      "هذا المسار مناسب لمن يريد خصوصية أعلى من التاون هاوس دون الانتقال إلى فيلا مستقلة بالكامل.",
    overview: [
      "التوين هاوس يمنح واجهة أوسع وشعوراً أكثر استقلالاً من التاون هاوس، مع كفاءة أعلى من الفيلا المنفصلة.",
      "داخل سولانا ويست، تتأثر قيمة التوين هاوس بالإطلالة، اتجاه الوحدة، وقربها من المساحات المفتوحة.",
      "قبل المقارنة، اطلب الأسعار حسب المرحلة وتأكد من خطة التقسيط والتشطيب.",
    ],
    lifestyle: [
      "الحياة في التوين هاوس تمنح الأسرة توازناً بين الخصوصية، المساحة، وسهولة إدارة المنزل.",
      "وجود الوحدة داخل ماستر بلان أخضر يجعل تجربة السكن أكثر هدوءاً من المجمعات عالية الكثافة.",
      "راجع موضع الوحدة، حركة الجيران، وقربها من الخدمات قبل تثبيت الحجز.",
    ],
    investment: [
      "توين هاوس سولانا ويست يناسب من يريد فئة قريبة من الفلل مع حجم استثماري أكثر مرونة.",
      "تقييمه يحتاج مقارنة دقيقة مع التاون هاوس والفلل من حيث السعر، الأرض، الإطلالة، وخطة السداد.",
      "داخل نيو زايد، هذه الفئة تخاطب مشترياً يبحث عن خصوصية واضحة دون تحميل مالي مبالغ فيه.",
    ],
    features: [
      "خصوصية أعلى من التاون هاوس مع كفاءة أفضل من الفيلا المستقلة.",
      "إطلالة وموقع المرحلة يؤثران بوضوح على السعر.",
      "مناسب للعائلات الباحثة عن منزل فاخر بحجم مدروس.",
      "جزء من ماستر بلان أخضر منخفض الكثافة.",
      "يلزم مراجعة الإصدار الرسمي قبل مقارنة الأسعار.",
    ],
  },
};

const ARABIC_PROPERTY_IMAGE_ALT: Record<PropertyExperienceSlug, { hero: string; overview: string }> = {
  apartments: {
    hero: "شقق للبيع في سولانا ويست نيو زايد وسط مساحات خضراء هادئة.",
    overview: "تصميم معماري عصري لشقق سولانا ويست من ORA Developer Egypt.",
  },
  villas: {
    hero: "فيلات فاخرة في سولانا ويست نيو زايد من ORA Developer Egypt.",
    overview: "المساحات الخضراء والخصوصية حول فلل سولانا ويست نيو زايد.",
  },
  townhouses: {
    hero: "تاون هاوس سولانا ويست نيو زايد داخل مجتمع فاخر منخفض الكثافة.",
    overview: "محاور مشاة خضراء حول تاون هاوس سولانا ويست من ORA Developer Egypt.",
  },
  "twin-houses": {
    hero: "توين هاوس فاخر في سولانا ويست نيو زايد بإطلالات خضراء.",
    overview: "واجهات هادئة ومساحات مفتوحة لوحدات توين هاوس سولانا ويست.",
  },
};

function withArabicAlt(asset: ProjectImageAsset, alt: string): ProjectImageAsset {
  return { ...asset, alt };
}

function mapPath(href: string) {
  return englishPathToArabicPath[href] ?? href;
}

function arabicFaqPreview() {
  return SOLANA_WEST_AR_FAQ_GROUPS.flatMap((g) => g.items)
    .slice(0, 4)
    .map((item) => ({ question: item.question, answer: item.answer }));
}

/** Localize URLs inside an English-authored property hub while keeping typography under the Arabic editorial shell */
export function withArabicPropertyUrls(model: PropertyExperienceModel): PropertyExperienceModel {
  return {
    ...model,
    relatedProject: {
      ...model.relatedProject,
      href: mapPath(model.relatedProject.href),
    },
    faqPreview: {
      ...model.faqPreview,
      fullFaqHref: mapPath(model.faqPreview.fullFaqHref),
    },
  };
}

export function buildPropertyExperienceModelArabicPaths(slug: PropertyExperienceSlug): PropertyExperienceModel {
  const model = withArabicPropertyUrls(buildPropertyExperienceModel(slug));
  const titles = ARABIC_PROPERTY_TITLES[slug];
  const copy = ARABIC_PROPERTY_COPY[slug];
  const imageAlt = ARABIC_PROPERTY_IMAGE_ALT[slug];

  return {
    ...model,
    heroImage: withArabicAlt(model.heroImage, imageAlt.hero),
    overviewImage: withArabicAlt(model.overviewImage, imageAlt.overview),
    hero: {
      ...model.hero,
      locationEyebrow: "سولانا ويست · نيو زايد",
      h1: ARABIC_PROPERTY_H1[slug],
      lead: copy.lead,
      supporting: copy.supporting,
    },
    overview: {
      ...model.overview,
      eyebrow: "نظرة على الوحدة",
      title: titles.overview,
      paragraphs: copy.overview,
    },
    lifestyle: {
      ...model.lifestyle,
      eyebrow: "أسلوب الحياة",
      title: titles.lifestyle,
      paragraphs: copy.lifestyle,
    },
    investment: {
      ...model.investment,
      eyebrow: "الاستثمار العقاري",
      title: titles.investment,
      paragraphs: copy.investment,
    },
    keyFeatures: copy.features,
    relatedProject: {
      ...model.relatedProject,
      title: titles.related,
      description: "اقرأ صفحة المشروع الكاملة لفهم الأسعار، خطة السداد، الموقع، المرافق والأسئلة قبل طلب الحجز.",
    },
    faqPreview: {
      ...model.faqPreview,
      intro: SOLANA_WEST_FAQ_SHARED_INTRO_AR,
      items: arabicFaqPreview(),
    },
    finalCta: {
      ...model.finalCta,
      eyebrow: "استشارة شراء",
      title: titles.final,
      primaryLabel: "احصل على الأسعار",
      secondaryLabel: "تواصل عبر واتساب",
    },
  };
}
