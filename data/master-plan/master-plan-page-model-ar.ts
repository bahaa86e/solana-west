import { SOLANA_WEST_AR_FAQ_GROUPS, SOLANA_WEST_FAQ_SHARED_INTRO_AR } from "@/data/faq/solana-west-faq-ar";
import type { FaqPair, ProjectImageAsset } from "@/data/projects/types";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import type {
  MasterPlanInternalLink,
  MasterPlanPageModel,
  MasterPlanSpatialBlock,
} from "@/data/master-plan/master-plan-page-model";
import { solanaWestMedia } from "@/data/media/solana-west";
import { englishPathToArabicPath } from "@/lib/i18n/paths";

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

function internalLinksAr(short: string): readonly MasterPlanInternalLink[] {
  const m = englishPathToArabicPath;
  return [
    {
      label: `صفحة ${short}`,
      href: m["/projects/solana-west"]!,
      context: "سرد المجمع والمرافق والتجاري والأسئلة الموسَّعة.",
    },
    { label: "مرجع سعري", href: m["/prices"]!, context: "شرائح إصدار—ثبِّت قبل الحجز.", },
    { label: "هيكل خطة السداد", href: m["/payment-plan"]!, context: "مقدّم ومدة وتسليم بمستوى العنوان.", },
    {
      label: "فيلات مستقلة",
      href: m["/properties/villas"]!,
      context: "قطع وإطلالات مقابل الهيكل الأخضر.",
    },
    { label: "تاون هاوس", href: m["/properties/townhouses"]!, context: "صفوف على محاور المشاة.", },
    {
      label: "توين هاوس",
      href: m["/properties/twin-houses"]!,
      context: "فيلات مزدوجة بحدود وتراجعات مضبوطة.",
    },
    { label: "شقق", href: m["/properties/apartments"]!, context: "مخزون عمودي بمحاذاة المناظر والخدمات.", },
    { label: "فهرس الأسئلة", href: m["/faq"]!, context: "نطاق الموقع والأنواع والجداول.", },
  ];
}

/** Arabic narrative for `/ar/solana-west-master-plan`. */
export function buildMasterPlanPageModelAr(): MasterPlanPageModel {
  const bundle = resolveProjectPage("solana-west");
  if (!bundle) throw new Error("Solana West bundle required for Arabic master-plan route.");

  const entry = bundle.entry;
  const short = entry.shortName ?? entry.name;
  const dev = entry.developer;

  const heroImage: ProjectImageAsset = solanaWestMedia.amenities[2] ?? bundle.media.hero;
  const overviewFigure: ProjectImageAsset = solanaWestMedia.masterplan;

  return {
    idPrefix: "master-plan-sw-ar",
    heroImage,
    overviewFigure,
    hero: {
      eyebrow: "المخطط · تنظيم مكاني · الزيادة الجديدة",
      h1: `مخطط ${short} — نحو 316 فداناً في الزيادة الجديدة`,
      lead: `${entry.name} مخطَّط كنطاق سكن واحد بمساحة كبرى نحو 316 فداناً — ربط مخضَّر ومزيج محكم وتنقُّل بارز للمشاة يقرأ الغطاء ذهبياً أكثر ما يقرأ واجهات متراصَّة متعبة. هذا الموجز يشرح ذلك على مستوى المخطط؛ لا بديل لتفاصيل إصدارك.`,
      supporting:
        "المواد العامة تتحدَّث بتسليم منخفض الكثافة، وارتفاع واجهات فيلات نحو المساحات المفتوحة، وممرات خضراء، وجيوب منظر خاصة لكل قطعة. لا ننشر أبعاداً هندسية أو نِسَباً مرحلية أو جداول غير واردة في الكولاتيرال الصادرة.",
    },
    overview: {
      eyebrow: "نظرة على المخطط",
      title: "تركيبة واحدة متماسكة — لا بقع معزولة",
      paragraphs: [
        "القطعة تُقرأ كخطة متصلة لا كتجميع بقع — تسلسل الطرق والحواجز المخضرة والعناقيد السكنية يضبط الحركة بحيث تبقى القراءة أقرب لحديقة سكنية منها لامتداد جدار–إلى–جدار.",
        "الكثافة المخفَّفة هي القاعدة: اتساع المنظر ينافس طول الواجهة العمودي. يعزِّز ذلك الخصوصية بين العناقيد ويخفِّض الضجيج الداخلي ويمنح إحساساً أقرب لـ«فيلات في حديقة» منه لممرات مرتفعة متلاصقة.",
        "يحتفظ ORA بمساحة مفتوحة سخيّة للممرات والتراجعات والمشاة — المرافق والسكن يتعانقان عبر تلك الأحزمة لا كجزر تُلحق في نهاية التسليم.",
      ],
    },
    spatialOrganization: {
      eyebrow: "التنظيم الفضائي",
      title: "عناقيد سكنية، ربط، وحزم للمساحة المفتوحة",
      intro:
        "الفقرات التالية تبيِّن العلاقات التي تذكرها المواد العامة — تأطير موضوعي لا يحل محل مخطط قطعة صادر عن المكتب المعتمد.",
      blocks: [
        {
          heading: "مناطق سكن وتراصُّ الأنواع",
          body: [
            `الأربعة أنماط — شقق، تاون، توين، فيلا مستقلة — تتحرك عبر ${short} ضمن نفس الهيكل الأخضر لا ضمن أفق منعزل لكل نوع.`,
            "التوزيع يتبع دفعات إصدار؛ منطق التجميع يخدم التأمين والإطلالة وعمق المنتج لا أحاديّة حلقة واحدة.",
            "عند الحجز تُسمَّى قطعتك واتجاهك والحاجز والممر — النثر هنا توجيه فقط بلا تفاصيل قطعة حيّة.",
          ],
        } satisfies MasterPlanSpatialBlock,
        {
          heading: "المساحات المفتوحة تربط دفعات المعيشة",
          body: [
            "أحزمة المنظر تضبط الإيقاع بين صفوف الفيلات والتاون — استمرار الخضرة يخفف إحساس ضغط الواجهة المتتالية ويقوِّي قراءة كثافة منخفضة من داخل المخطط.",
            "البنية المفتوحة تحمل ضوءاً وتهوية ومشاهد طويلة عبر المجمع؛ الكولاتيرال تؤكد مبدأ أن الوحدات تُوجَّه نحو الخضرة كمنظومة.",
            "علاقات المروج والممرات وخطوط البناء تُدقَّق عند الإصدار؛ اعتبروا النثر توجيهاً لا مسحاً قياسياً.",
          ],
        },
        {
          heading: "المشي بنية لا زينة",
          body: [
            "تصف المواد مجمعاً قابلاً للمشي بالكامل — الممرات تربط أحياء السكن بمراسي المرافق دون إلزام كل رحلة يومية بممرٍّ سيارٍ رئيسي.",
            "يلتقي المشي بالهيكل الأخضر: الممر قد يكون في آنٍ مساحة منسَّقة ومسار إنساني — مع بقاء التفصيل النهائي لأعمال مدنية وقواعد إدارية عند التسليم.",
          ],
        },
        {
          heading: "جيوب منظر خاصة وتسلسل الإطلالات",
          body: [
            "الجيوب والتراجعات تفصل الفيلات عن حركة المشاركة — الزرع مع التراجع يدعم فصلاً بصرياً وسمعياً دون ادِّعاء أمتار ثابتة لكل SKU.",
            "ارتفاع واجهات الفيلا وإطلالات مفتوحة تعبِّر عن طموح معماري؛ التنفيذ يتبع منسوب الأرض وعدد الطوابق وحزمة المرحلة من ${dev}.",
          ],
        },
        {
          heading: "ما تتعمَّد هذه الصفحة حذفه",
          body: [
            "لا جداول لعرض الطرق أو ارتفاعات التراب أو نِسَب المساحة المفتوحة أو خرائط حرارة مخزون أو مساحات مرافق بالهكتار إن لم تُرفَع في مواد مبيعات قابلة للتحميل.",
            "من يضمن التعرُّض يربط هذا القراءة بخرائط الإصدار وإرشادات الهيئة وجولات ميدانية عبر المكتب المعتمد.",
          ],
        },
      ],
    },
    lifestyle: {
      eyebrow: "أسلوب معيشة",
      title: "هدوء يومي حيث تلتقي الصفوف والمساحات المشتركة",
      paragraphs: [
        "يُشفَر الإيقاع اليومي بالتباعد: تراجعات، جيوب عشب، ممرات مخضرة، وفصل مركَّز للحركة السيارية — فيقلِّل الإحساس بالزحام أمام المداخل.",
        "تُنسَّق المرافق داخل الأحزمة لا كأقمار بعيدة — النادي والمسابح والحدائق المشتركة (بحسب إصدارات التسويق) تبقى مقروءة عبر نفس شبكة المشاة.",
        "روتين الأطفال وكبار السن والزائرين يختلف بين بود تاون وفيلا منفصلة — جرِّبوا السيناريوهات في جلسات العرض الصادرة لا من المخططات الشعرية وحدها.",
      ],
    },
    investment: {
      eyebrow: "بعد استثماري",
      title: "تماسك المخطط يهمُّ التموضع طويل الأمد",
      paragraphs: [
        "عمق الهيكل الأخضر يدعم تموضعاً فخماً طويل الأمد — ندرة المخططات المخفَّفة القابلة للمشي في القاهرة الكبرى سمة سوقية، لكنها لا تستبدل نمذجة التدفق النقدي.",
        "مخاطر المخطط تُقترن بمخاطر الإصدار: تسليم مرحلي، نظام هيئة، بنود تصعيد، وخيارات تشطيب — راجعوا مسارات الأسعار وخطة السداد العربية قبل نمذجة العائد.",
        `جودة ${dev} كطرف معروفة؛ لكن القطع تختلف — مجاورة الممر، والعازل، والضوء، ومسار التشطيب يغيِّر اقتصاد الحجز داخل نفس الإطار الـ316 فداناً.`,
      ],
    },
    internalLinks: {
      eyebrow: "متابعة البحث",
      title: "من فهم المخطط إلى الأسعار والدفع وصفحات الأنواع",
      intro: "روابط عربية ثابتة للاستشهاد في المذكرات.",
      links: internalLinksAr(short),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO_AR,
      items: faqPickAr([4, 3, 1]),
      fullFaqHref: englishPathToArabicPath["/faq"]!,
    },
    finalCta: {
      eyebrow: "توجيه",
      title: "اطلبوا طبقة الخريطة الصادرة للعنقود المختصر",
      supporting: `اطلبوا مقتطفات مخطط حالية أو توافراً مرحلياً أو إحاطة ميدانية عبر قنوات ${dev} المعتمدة—دون بيانات مسح مختلقة.`,
      primaryLabel: "مكتب واتساب",
      secondaryLabel: "استفسار خطيّ",
    },
  };
}
