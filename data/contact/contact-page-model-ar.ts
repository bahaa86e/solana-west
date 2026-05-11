import { SOLANA_WEST_FAQ_SHARED_INTRO_AR, SOLANA_WEST_AR_FAQ_GROUPS } from "@/data/faq/solana-west-faq-ar";
import type { FaqPair, ProjectImageAsset } from "@/data/projects/types";
import type { ContactPageModel } from "@/data/contact/contact-page-model";
import { buildContactPageModel } from "@/data/contact/contact-page-model";
import { englishPathToArabicPath } from "@/lib/i18n/paths";

function toPairs(items: typeof SOLANA_WEST_AR_FAQ_GROUPS[number]["items"]): readonly FaqPair[] {
  return items.map((item) => ({
    question: item.question,
    answer: `${item.aiSnippet}\n\n${item.answer}`,
  }));
}

function withArabicAlt(asset: ProjectImageAsset, alt: string): ProjectImageAsset {
  return { ...asset, alt };
}

export function buildContactPageModelAr(): ContactPageModel {
  const base = buildContactPageModel();
  const flat = SOLANA_WEST_AR_FAQ_GROUPS.flatMap((g) => g.items);

  return {
    ...base,
    heroImage: withArabicAlt(
      base.heroImage,
      "مرافق ومساحات خضراء داخل سولانا ويست نيو زايد لمشتري الفلل والشقق الفاخرة.",
    ),
    hero: {
      ...base.hero,
      locationEyebrow: "تواصل · أسعار · زيارة",
      h1: "تواصل مع مكتب مبيعات سولانا ويست",
      lead:
        "استخدم هذه الصفحة لطلب أسعار سولانا ويست، خطة السداد، أو ترتيب زيارة للمشروع. كلما كان طلبك محدداً، كان الرد أوضح وأسرع.",
      supporting:
        "لا نستخدم ضغطاً زائفاً أو وعوداً غير موثقة. الهدف أن تصل إلى معلومة واضحة تناسب نوع الوحدة ومرحلة الشراء.",
    },
    overview: {
      ...base.overview,
      eyebrow: "نظرة عامة على التوجيه",
      title: "استشارة مبيعات سولانا ويست نيو زايد",
      paragraphs: [
        "تبدأ الاستشارة بفهم نيتك: هل تبحث عن شقة، فيلا، تاون هاوس أم توين هاوس؟ وهل القرار للسكن أم الاستثمار؟",
        "بعد ذلك تُراجع أسعار سولانا ويست وخطة التقسيط والمتاح حسب المرحلة، مع توضيح ما يحتاج إلى تأكيد من الإصدار الرسمي.",
        "لأفضل نتيجة، راجع صفحات الأسعار، التقسيط والموقع ثم أرسل استفسارك مختصراً وواضحاً.",
      ],
    },
    reassurance: {
      ...base.reassurance,
      eyebrow: "تهدئة الاستفسار",
      title: "نموذج مختصر لطلب الأسعار والمتاح",
      paragraphs: [
        "النموذج يطلب بيانات قليلة: الاسم، الهاتف، ونوع الاهتمام. هذه المعلومات تكفي لبدء محادثة منظمة دون إطالة.",
        "إذا كنت تقارن أكثر من وحدة، اذكر الميزانية التقريبية وموعد الشراء المتوقع حتى يتم توجيه الرد بشكل أدق.",
      ],
    },
    channels: {
      ...base.channels,
      eyebrow: "قنوات مباشرة",
      title: "واتساب واتصال وبريد لمشتري سولانا ويست",
      intro: "اختر الوسيلة الأنسب لك: واتساب للرد السريع، اتصال للأسئلة المباشرة، أو نموذج مختصر إذا كنت تفضل إرسال التفاصيل أولاً.",
    },
    formColumn: {
      ...base.formColumn,
      eyebrow: "رسالة مختصرة",
      title: "بيانات قليلة تكفي لبدء الاستشارة",
      intro:
        "اكتب نوع الوحدة التي تبحث عنها، مثل فلل سولانا ويست أو شقق للبيع في نيو زايد، وسنعود إليك بصورة أوضح عن الأسعار والمتاح.",
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO_AR,
      items: toPairs([flat[2]!, flat[4]!]),
      fullFaqHref: englishPathToArabicPath["/faq"]!,
    },
    finalCta: {
      ...base.finalCta,
      eyebrow: "ما زلتم تمرُّون بالبحث",
      title: "راجع الأسعار والتقسيط والموقع قبل التواصل",
      supporting:
        "قارن السعر، خطة السداد، وموقع المشروع أولاً، ثم تواصل عندما تكون جاهزاً لطلب المتاح أو تحديد زيارة.",
      primaryLabel: "تواصل عبر واتساب",
      secondaryLabel: "الأسعار وأنظمة السداد",
      secondaryHref: englishPathToArabicPath["/prices"]!,
    },
  };
}
