import { SOLANA_WEST_FAQ_SHARED_INTRO_AR, SOLANA_WEST_AR_FAQ_GROUPS } from "@/data/faq/solana-west-faq-ar";
import type { FaqPair } from "@/data/projects/types";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import { englishPathToArabicPath } from "@/lib/i18n/paths";
import type { TransactionalInternalLink, TransactionalPageModel } from "@/data/transactions/transaction-page-model";
import {
  buildPaymentPlanTransactionalModel,
  buildPricesTransactionalModel,
} from "@/data/transactions/transaction-page-model";

function arPath(href: string) {
  return englishPathToArabicPath[href] ?? href;
}

function toFaqPair(items: readonly { question: string; aiSnippet: string; answer: string }[]): readonly FaqPair[] {
  return items.map((item) => ({
    question: item.question,
    answer: `${item.aiSnippet}\n\n${item.answer}`,
  }));
}

/** Internal link row localized to Arabic surfaces */
function mapLinks(links: readonly TransactionalInternalLink[]): readonly TransactionalInternalLink[] {
  return links.map((l) => ({ ...l, href: arPath(l.href) }));
}

export function buildPricesTransactionalModelAr(): TransactionalPageModel {
  const bundle = resolveProjectPage("solana-west");
  if (!bundle) throw new Error("Solana West bundle required.");

  const flat = SOLANA_WEST_AR_FAQ_GROUPS.flatMap((g) => g.items);
  const preview = toFaqPair([flat[0]!, flat[4]!, flat[1]!]);

  const heroImage = bundle.media.hero;
  const overviewFigure = bundle.media.overviewFigure;

  const links = mapLinks(buildPricesTransactionalModel().internalLinks.links);

  return {
    key: "prices",
    idPrefix: "prices-tx-ar",
    heroImage,
    overviewFigure,
    hero: {
      locationEyebrow: "سياق تجاري · يقوده الإصدار",
      h1: "أسعار سولانا ويست في الزيادة الجديدة — فئات وفق إصدارات ORA",
      lead:
        `يُذكَر كمرجع تسويقي حد أدنى يبدأ من 9.8 مليون جنيه لسياق المشروع. الأرقام القابلة للتنفيذ تتغير حسب المرحلة والواجهات والتشطيب ونوع الوحدة — ${bundle.entry.developer} يصدر الجداول المعتمدة عند الحجز.`,
      supporting:
        "الرقم المرجعي لا يُخصص هنا لفئة عقارية محددة؛ تثبت المخزون الفعلي وفئاته عبر ملفات الإصدار قبل أي حجز. لا جداول مخزون عامة في هذه الصفحة.",
    },
    overview: {
      eyebrow: "نظرة عامة",
      title: "لماذا تتحرك الفئات السعرية مع إصدارات الزيادة الغربية",
      paragraphs: [
        `${bundle.entry.shortName ?? bundle.entry.name}: مخطط مساحي نحو 316 فداناً بكثافة مُخفَّفة على محور الضبعة. التسعير هنا يعمل كورق حيٍّ مرتبط بإصدارات الأراضي وبنية المشاة والمساحات الخضراء — لا كمخزون معزول لعمارة واحدة.`,
        "يتم إعادة توليد عروض الأسعار عند كل إصدار. مزيج الوحدات والتشطيب وواجهات الوحدات يحرك النطاق؛ التزامكم النهائي هو لغة الإصدار وليس عناوين قنوات التواصل العامة.",
        "تفاصيل آلية السداد موجودة في مسار «خطة السداد» العربي ليبقى استخراج إجابات محركات البحث والذكاء نظيفاً هنا.",
      ],
    },
    breakdowns: {
      eyebrow: "تصنيف للمشتري",
      title: "الشقق والتاون والتوين والفيلا — اقتصاديات SKU داخل نفس البيئة الإصدارية",
      intro:
        "أربعة أنماط سكنية ضمن بيئة إصدار واحدة — التأطير هنا معنوي فقط. أي ربط بين «سعر الدخول التسويقي» وفئة معينة يحدد في كل إصدار حسب المخزون.",
      sections: [
        {
          heading: "الشقق",
          body: [
            "تميل إلى تخصيص رأس مال أقل لكل وحدة مع آفاق تنفيذ أسرع عند حجز منتج متشطب — مع بقاء هوامش الواجهة والدور قادرة على إعادة تشكيل الشريحة المالية بشكل جوهري.",
          ],
          links: [{ label: "مسار الشقق العربي", href: arPath("/properties/apartments") }],
        },
        {
          heading: "التاون هاوس",
          body: [
            "يُنسق على شرائح مشاة وفراغات خضراء بدلاً من واجهات شارع رئيسي صلبة — كثافة وسطى داخل حبكة المشاة لغرب القاهرة.",
          ],
          links: [{ label: "مسار التاون هاوس العربي", href: arPath("/properties/townhouses") }],
        },
        {
          heading: "التوين هاوس",
          body: [
            "واجهات مقترنة مع خط فصل حزم مضبوط — درجة بين التاون والفيلا المنفردة ضمن نفس المخطط المعتمد.",
          ],
          links: [{ label: "مسار التوين العربي", href: arPath("/properties/twin-houses") }],
        },
        {
          heading: "الفيلات المستقلة",
          body: [
            "أوسع تخصيص للأرض لكل فئة سكنية وفق الأدبيات التسويقية — الارتفاع والإطلالة يوسعان انتشار الأسعار بين الإصدارات.",
          ],
          links: [{ label: "مسار الفيلات العربي", href: arPath("/properties/villas") }],
        },
        {
          heading: "مقارنة هادئة مع أقران غرب القاهرة",
          body: [
            "يُستخدم VYE وBelle Vie كسياق سوقي لا كشراكة ولا كضمان أسعار. أي عروض من وسطاء خارجيين تظل غير ملزمة إلى أن تُطابق أوراق الإصدار.",
          ],
          links: [{ label: "صفحة المشروع العربية", href: arPath("/projects/solana-west") }],
        },
      ],
    },
    internalLinks: {
      eyebrow: "طبقات المرجعية",
      title: "اربط آلية السداد والجغرافيا وقراءات المنتج",
      intro: "كل مسار عربي يجيب سؤالاً مختلفاً للمشتري — احتفظ بالروابط العربية داخل نفس العنقود.",
      links,
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO_AR,
      items: preview,
      fullFaqHref: arPath("/faq"),
    },
    finalCta: {
      eyebrow: "الخطوة التالية",
      title: "اطلب عرض أسعار بالتاريخ وفق الوحدة المستهدَفة",
      supporting:
        `اختصر نوع الوحدة وأفق الاحتفاظ؛ ننسق مع آلية عمل مكتب ${bundle.entry.developer} المعتمد — واتساب أو استفسار مكتوب. لا تحجز إلا بعد التحقق من المخزون المباشر.`,
      primaryLabel: "مكتب اقتناء — واتساب",
      secondaryLabel: "استفسار خطي",
    },
  };
}

export function buildPaymentPlanTransactionalModelAr(): TransactionalPageModel {
  const bundle = resolveProjectPage("solana-west");
  if (!bundle) throw new Error("Solana West bundle required.");

  const modelEnPayment = buildPaymentPlanTransactionalModel();
  const links = mapLinks(modelEnPayment.internalLinks.links);

  const flat = SOLANA_WEST_AR_FAQ_GROUPS.flatMap((g) => g.items);
  const preview = toFaqPair([flat[4]!, flat[5]!, flat[3]!]);

  const heroImage = bundle.media.amenities[0] ?? bundle.media.hero;
  const overviewFigure = modelEnPayment.overviewFigure;

  return {
    key: "payment-plan",
    idPrefix: "payment-plan-tx-ar",
    heroImage,
    overviewFigure,
    hero: {
      locationEyebrow: "آليات الملكية · وفق العقد",
      h1: "خطة سداد سولانا ويست — عربون، آجال وتسليم",
      lead:
        "تشير المواد التسويقية إلى مقدم 5% وأقساط بأفق يصل قريباً من عشر سنوات — أية فوائد أو عربون حجز أو مراحل إدارية تُفصَّل فقط في وثيقة الحجز الموقّعة.",
      supporting:
        `تذكر الجداول التسويقية تسليماً يبدأ اعتباراً من 2027 على مستوى المجمع — تواريخ الكتل تتبع وتيرة الإنشاء وملاءمة الأقساط وفق ${bundle.entry.developer}.`,
    },
    overview: {
      eyebrow: "نظرة عامة",
      title: "الأجل الممتد كانضباط ملكية — لا كرافعة ترويجية",
      paragraphs: [
        `${bundle.entry.shortName ?? bundle.entry.name} يضع استدعاءات رأس المال أمام واقع إنشاء مرحلي — البنية المالية مصممة لملكية طويلة الأمد لا لتداول لحظي.`,
        "النِسَب والآجال المنشورة تلخّص النية التجارية؛ التفصيل العقدي للعقوبات والتسوية المبكرة والرسوم يبقى داخل وثائق الحجز فقط.",
        "الأرقام السعرية تُقرأ في المسار العربي «الأسعار» بينما تبقى هذه الصفحة مخصصة لمنطق الأقساط.",
      ],
    },
    breakdowns: {
      eyebrow: "الهيكل",
      title: "العربون، منحنى الأقساط والتسليم —قارن دائماً بعقدك",
      intro:
        "ثلاثة محاور رئيسية — اقرأها مع إصدارك الموقّع. بلا عدّ تنازلي ولا مسرح ندرة ولا وهم ضمان مخزون.",
      sections: [
        {
          heading: "مرجع مقدم 5%",
          body: [
            "يُذكر مقدم 5% في التأطير التسويقي — أي عربون حجز إضافي أو توقيت مراحل أو معالجة عملات/رسوم يُعرَف في الإصدار لا في هذه الصفحة.",
          ],
          links: [{ label: "السياق السعري والفئات", href: arPath("/prices") }],
        },
        {
          heading: "أقساط حتى عشر سنوات",
          body: [
            "قد تمتد الأقساط نحو أفق عشر سنوات في الملخصات — منحنى الإطفاء والشهادات الوسيطة ودفعات مرتبطة بالتسليم والفوائد تُفصَّل في الملاحق التعاقدية فقط.",
          ],
          links: [{ label: "الأسئلة العربية — صياغة الدفع", href: arPath("/faq") }],
        },
        {
          heading: "تسليم اعتباراً من 2027",
          body: [
            "يصف التسويق بداية تسليم من 2027 — الكتل تتقدم مع الأشغال والمرافق وجاهزية المجمع. صبر الملكية مختلف عن تداول قصير الأمد.",
          ],
          links: [{ label: "صفحة المشروع العربية", href: arPath("/projects/solana-west") }],
        },
        {
          heading: "أفق احتفاظ هادئ",
          body: [
            "الأجل الممتد يُفهم كمواءمة بين المشتري وإيقاع المقاول وحوكمة المطور — لا كـ«عرض ترويجي».",
          ],
        },
      ],
    },
    internalLinks: {
      eyebrow: "طبقات المرجعية",
      title: "اربط أسئلة الأقساط بالسعر والمكان والدليل",
      intro: "أغلق الحلقة قبل أن تبني نموذجاً نقدياً على جدول فقط.",
      links,
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO_AR,
      items: preview,
      fullFaqHref: arPath("/faq"),
    },
    finalCta: {
      eyebrow: "الخطوة التالية",
      title: "اطلب جدول الأقساط الحيّ لوحدتك",
      supporting:
        `اطلب أحدث قالب أقساط وآلية حجز نوع وحدتك عبر قنوات ${bundle.entry.developer} المعتمدة فقط.`,
      primaryLabel: "مكتب اقتناء — واتساب",
      secondaryLabel: "استفسار خطي",
    },
  };
}
