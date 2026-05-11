import { SOLANA_WEST_AR_FAQ_GROUPS, SOLANA_WEST_FAQ_SHARED_INTRO_AR } from "@/data/faq/solana-west-faq-ar";
import type { FaqPair, ProjectImageAsset } from "@/data/projects/types";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import type {
  LocationConnectivitySection,
  LocationInternalLink,
  LocationPageModel,
} from "@/data/location/location-page-model";
import { englishPathToArabicPath } from "@/lib/i18n/paths";
import { siteConfig } from "@/data/site";

function faqPickAr(indices: readonly [number, number, number]): readonly FaqPair[] {
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

function editorialInternalLinksAr(short: string): readonly LocationInternalLink[] {
  const m = englishPathToArabicPath;

  return [
    {
      label: "كمبوند سولانا ويست نيو زايد",
      href: m["/projects/solana-west"]!,
      context: "المخطط والمرافق والسياق التجاري وأسئلة موسَّعة.",
    },
    { label: "أسعار سولانا ويست", href: m["/prices"]!, context: "بداية الأسعار والفئات قبل الحجز.", },
    { label: "تقسيط سولانا ويست", href: m["/payment-plan"]!, context: "دفعة الحجز والمدة وأفق التسليم.", },
    { label: "شقق سولانا ويست", href: m["/properties/apartments"]!, context: "شقق داخل مجتمع منخفض الكثافة.", },
    { label: "تاون هاوس سولانا ويست", href: m["/properties/townhouses"]!, context: "منازل على محاور المشاة.", },
    {
      label: "توين هاوس سولانا ويست",
      href: m["/properties/twin-houses"]!,
      context: "فيلات مزدوجة بكثافة متوسطة بين التاون هاوس والفيلا المستقلة.",
    },
    { label: "فلل سولانا ويست", href: m["/properties/villas"]!, context: "فلل بإطلالات وخصوصية حسب المرحلة.", },
    { label: "أسئلة سولانا ويست", href: m["/faq"]!, context: "إجابات عن الموقع والمواصلات والأنواع.", },
  ];
}

/** Arabic desk confirmation-safe narrative for `/ar/solana-west-location`. */
export function buildLocationPageModelAr(): LocationPageModel {
  const bundle = resolveProjectPage("solana-west");
  if (!bundle) {
    throw new Error("Solana West bundle required for Arabic location route.");
  }

  const entry = bundle.entry;
  const short = entry.shortName ?? entry.name;
  const dev = entry.developer;
  const founder = siteConfig.founder;

  const heroImage: ProjectImageAsset = withArabicAlt(
    bundle.media.hero,
    "مساحات خضراء وواجهات فاخرة في موقع سولانا ويست نيو زايد من ORA Developer Egypt.",
  );
  const overviewFigure: ProjectImageAsset = withArabicAlt(
    bundle.media.locationAtmosphere,
    "مشهد غرب القاهرة يبرز موقع سولانا ويست نيو زايد على محور الضبعة.",
  );

  return {
    idPrefix: "location-sw-ar",
    heroImage,
    overviewFigure,
    hero: {
      locationEyebrow: "نيو زايد · غرب القاهرة · موقع",
      h1: "موقع سولانا ويست نيو زايد",
      lead: `${entry.name} يقع على محور الضبعة في نيو زايد، ضمن امتداد غرب القاهرة المتصل بطريق الإسكندرية الصحراوي والطريق الدائري الأوسط. الموقع مناسب لمن يريد خصوصية ومساحات مفتوحة مع وصول مدروس إلى الشيخ زايد والخدمات الكبرى.`,
      supporting:
        "أوقات الوصول المذكورة تظل تقريبية وتتأثر بالزحام ووقت الزيارة. تُذكر VYE وBelle Vie كمراجع سوقية داخل نيو زايد، لا كشراكة أو مقارنة سعرية مباشرة.",
    },
    overview: {
      eyebrow: "نظرة موقعية",
      title: "موقع سولانا ويست في نيو زايد ومحور الضبعة",
      paragraphs: [
        "نيو زايد أصبحت واحدة من أكثر مناطق غرب القاهرة حضوراً لدى الباحثين عن كمبوندات فاخرة ومساحات أهدأ. قرب الطرق والمطار والخدمات يمنح المنطقة منطقاً واضحاً للعائلات والمستثمرين.",
        `${short} يمتد على نحو 316 فداناً بتخطيط منخفض الكثافة، حيث تتحول المساحات المفتوحة إلى جزء من قيمة السكن، لا مجرد مساحة تجميلية حول الوحدات.`,
        `${dev} يضع المشروع ضمن سياق مؤسسي واضح، لكن قرار الشراء يجب أن يظل مرتبطاً بنمط تنقلك اليومي، المدارس، والخدمات التي تعتمد عليها.`,
      ],
    },
    connectivity: {
      eyebrow: "الارتباط",
      title: "محاور الوصول إلى سولانا ويست نيو زايد",
      intro:
        "هذه النقاط تساعدك على قراءة موقع سولانا ويست نيو زايد. هي إشارات عملية للتقييم وليست ضماناً لزمن قيادة ثابت.",
      sections: [
        {
          heading: "محور الضبعة كعنوان رئيسي للمشروع",
          body: [
            `${short} يستفيد من حضوره على محور الضبعة كعنوان واضح داخل نيو زايد، ما يساعد على فهم حركة الدخول والخروج من المشروع.`,
            "عند المقارنة بين كمبوندات نيو زايد، لا تكتفِ باسم الطريق؛ راجع البوابة، اتجاه الحركة، وموقع المرحلة التي تفكر فيها.",
          ],
        },
        {
          heading: "طريق الإسكندرية الصحراوي",
          body: [
            "القرب من طريق الإسكندرية الصحراوي مهم لمن يتحرك بين القاهرة، الساحل، ومناطق غرب المدينة.",
            "راجع المسار بالخرائط والزيارة الفعلية، لأن الطرق المحيطة بمناطق النمو تتغير مع الوقت.",
          ],
        },
        {
          heading: "الطريق الدائري الأوسط",
          body: [
            "الطريق الدائري الأوسط يضيف طبقة ربط مهمة بين أكتوبر، الشيخ زايد وامتدادات القاهرة.",
            "لكن قيمة الطريق لا تُقاس على الخريطة فقط؛ جرّب المسار في أوقات مختلفة قبل حسم قرار السكن.",
          ],
        },
        {
          heading: "القرب من وصلة دهشور",
          body: [
            "القرب من وصلة دهشور يمنح المشروع ارتباطاً عملياً بمناطق الشيخ زايد والخدمات المحيطة.",
            "تعامل مع الرقم كدلالة اتجاهية؛ أعمال الطرق وساعات الذروة قد تغير الزمن الفعلي.",
          ],
        },
        {
          heading: "الوصول إلى مطار سفنكس",
          body: [
            "القرب من مطار سفنكس مهم للمشتري الخليجي والعائلات كثيرة السفر، لأنه يضيف سهولة في الوصول للضيوف والتنقل.",
            "هذه ميزة موقعية، لكنها لا تكفي وحدها لتقييم الاستثمار؛ السعر، المرحلة، والخدمات تبقى عوامل أساسية.",
          ],
        },
        {
          heading: "الوصول إلى مول العرب",
          body: [
            "مول العرب يمثل نقطة خدمات وتجارية معروفة في غرب القاهرة، ويُستخدم كثيراً كمرجع لفهم المسافة.",
            "القرب من الخدمات يدعم راحة الحياة اليومية، لكنه لا يغني عن مراجعة تفاصيل المشروع نفسه.",
          ],
        },
        {
          heading: "سياق المقارنة مع VYE وBelle Vie",
          body: [
            "وجود VYE وBelle Vie في نطاق المقارنة يساعد على فهم مستوى الطلب في نيو زايد، دون أن يعني علاقة تجارية أو تشابه أسعار.",
            "المقارنة الجادة تبدأ من الكثافة، الماستر بلان، نظام السداد، وتاريخ التسليم لكل مشروع.",
            "نمو المنطقة قائم على طرق أوضح ومطورين كبار وطلب متنوع، لا على وعود عائد أو مبالغة تسويقية.",
          ],
        },
      ],
    },
    areaGrowth: {
      eyebrow: "تموضع نمو الحيّ",
      title: "نيو زايد كمنطقة نمو سكني في غرب القاهرة",
      paragraphs: [
        "قوة نيو زايد لا تُقرأ من وعد واحد، بل من تراكم الطرق، المطورين الكبار، واتساع الطلب على السكن الهادئ في غرب القاهرة.",
        "المشتري الذكي يفرق بين جودة الأرض، تخطيط المشروع، ومستوى الخدمة، ولا يبني قراره على عبارات تسويقية عامة.",
        `${short} يناسب من يبحث عن احتفاظ طويل الأمد في مشروع منخفض الكثافة؛ أما الاستثمار فيحتاج حساب السيولة، العملة، وخطة الخروج بواقعية.`,
      ],
    },
    investment: {
      eyebrow: "صلة القراءة الاستثمارية",
      title: "الموقع يدعم القرار لكن العقد يحسم التفاصيل",
      paragraphs: [
        "الموقع يسهّل قراءة المشروع للعائلات والمشتري الخليجي: مطار قريب، محاور واضحة، وخدمات معروفة في غرب القاهرة.",
        "لكن الجغرافيا لا تلغي أهمية السعر، خطة السداد، رسوم الصيانة، وموعد التسليم. هذه التفاصيل هي التي تحسم جودة القرار.",
        `اقرأ هذا الموجز مع صفحات أسعار سولانا ويست وتقسيط سولانا ويست، ثم راجع وثائق ${dev} قبل الحجز.`,
      ],
    },
    internalLinks: {
      eyebrow: "صواميل سلطة",
      title: "من الموقع إلى الأسعار وأنواع الوحدات",
      intro: "بعد فهم الموقع، انتقل إلى السعر، خطة السداد، ونوع الوحدة الأنسب لك.",
      links: editorialInternalLinksAr(short),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO_AR,
      items: faqPickAr([3, 4, 0]),
      fullFaqHref: englishPathToArabicPath["/faq"]!,
    },
    finalCta: {
      eyebrow: "الخطوة التالية",
      title: "اطلب استشارة موقع قبل اختيار الوحدة",
      supporting: `اطلب خريطة الموقع أو ترتيب زيارة عبر قنوات ${dev}، مع توضيح نوع الوحدة والمرحلة التي تفكر فيها.`,
      primaryLabel: "احجز زيارة للمشروع",
      secondaryLabel: "تواصل عبر واتساب",
    },
  };
}
