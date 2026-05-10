import { SOLANA_WEST_FAQ_SHARED_INTRO_AR, SOLANA_WEST_AR_FAQ_GROUPS } from "@/data/faq/solana-west-faq-ar";
import type { FaqPair } from "@/data/projects/types";
import type { ContactPageModel } from "@/data/contact/contact-page-model";
import { buildContactPageModel } from "@/data/contact/contact-page-model";
import { englishPathToArabicPath } from "@/lib/i18n/paths";

function toPairs(items: typeof SOLANA_WEST_AR_FAQ_GROUPS[number]["items"]): readonly FaqPair[] {
  return items.map((item) => ({
    question: item.question,
    answer: `${item.aiSnippet}\n\n${item.answer}`,
  }));
}

export function buildContactPageModelAr(): ContactPageModel {
  const base = buildContactPageModel();
  const flat = SOLANA_WEST_AR_FAQ_GROUPS.flatMap((g) => g.items);

  return {
    ...base,
    hero: {
      ...base.hero,
      locationEyebrow: "استفسار · مكتب معتمد",
      h1: "تواصل مبيعات سولانا ويست — استفسارات المشتري في الزيادة الجديدة",
      lead:
        "استخدم هذه الصفحة للوصول باحتكاك أقل: قنوات مباشرة عندما تريد سياقاً سريعاً أو نموذجاً مختصراً عندما تفضل توثيقاً رسمياً.",
      supporting:
        "بدون تأطير اندفاع أو وهم مخزون — الاستجابة تتابع آلية المكتب المعتمد. غالباً يكون الواتساب أو الهاتف أسرع طريق لصف إصدار واضح.",
    },
    overview: {
      ...base.overview,
      eyebrow: "نظرة عامة على التوجيه",
      title: "مكاتب موثَّقة — كيف تُوجَّه ملفات سولانا ويست",
      paragraphs: [
        "تتم معالجة الاستفسارات عبر آلية ORA الموثَّقة — العروض والمراحل والحجز والمتابعات تُدار بمستند رسمي لا بملخص محادثة فقط.",
        "هذه الواجهة معلوماتية: اختَر وسيلة التواصل المناسبة لأفقكم ثم ارجعوا إلى ورقة الإصدار لأي التزام مالي.",
        "للحقائق الذاتية راجعوا مسارات الأسعار وخطط السداد والموقع ثم عدّوا للتواصل عندما تحتاجون توجيهاً لنوع الوحدة.",
      ],
    },
    reassurance: {
      ...base.reassurance,
      eyebrow: "تهدئة الاستفسار",
      title: "توجيه شفّاف — حقول مختصرة",
      paragraphs: [
        "ثلاث حقول ظاهرة — الاسم والهاتف والاهتمام — لتقليل الاحتكاك مع الإبقاء على توجه يفهم مخزونكم المستهدف.",
        "الوسطاء الخارجيون ليسوا مصنَّفين عبر هذا المسار؛ التعامل معهم جزء من بحثكم المستقل ما لم يُصرَّح عن شريك اعتماد من المطوِّر.",
      ],
    },
    channels: {
      ...base.channels,
      eyebrow: "قنوات مباشرة",
      title: "واتساب وصوت وبريد — فلسفة مكتب واحدة",
      intro: "اختاروا وسيلة تلائم وتيرة تقييمكم — كلها تنطلق من نفس الانضباط الوثائقي للمكتب المعتمد.",
    },
    formColumn: {
      ...base.formColumn,
      eyebrow: "رسالة مختصرة",
      title: "نموذج قصير — الاسم وسيلة الوصول النوع",
      intro:
        "ثلاث حقول تجمع الهوية وكيفية الرد والنوع المستهدَف؛ يُضاف السياق تلقائياً لوجه مراجعة المكتب المعتمد.",
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO_AR,
      items: toPairs([flat[2]!, flat[4]!]),
      fullFaqHref: englishPathToArabicPath["/faq"]!,
    },
    finalCta: {
      ...base.finalCta,
      eyebrow: "ما زلتم تمرُّون بالبحث",
      title: "أعيدوا فتح الأسعار والدفع وممر الوصول الجغرافي",
      supporting:
        "قارنوا تأطير السعر وخطة الأقساط ومداخل غرب القاهرة قبل الحجز—ثم عودوا لواتساب أو لهذا النموذج مع ملخص جاهز.",
      primaryLabel: "مكتب اقتناء — واتساب",
      secondaryLabel: "صفحة الأسعار العربية",
      secondaryHref: englishPathToArabicPath["/prices"]!,
    },
  };
}
