import { SOLANA_WEST_FAQ_SHARED_INTRO_AR, SOLANA_WEST_AR_FAQ_GROUPS } from "@/data/faq/solana-west-faq-ar";
import type { FaqPair, ProjectImageAsset } from "@/data/projects/types";
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

function withArabicAlt(asset: ProjectImageAsset, alt: string): ProjectImageAsset {
  return { ...asset, alt };
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

  const heroImage = withArabicAlt(
    bundle.media.hero,
    "واجهات فاخرة ومساحات خضراء في سولانا ويست نيو زايد من ORA Developer Egypt.",
  );
  const overviewFigure = withArabicAlt(
    bundle.media.overviewFigure,
    "صورة معمارية توضّح تنوع الوحدات والأسعار في سولانا ويست نيو زايد.",
  );

  const links = mapLinks(buildPricesTransactionalModel().internalLinks.links);

  return {
    key: "prices",
    idPrefix: "prices-tx-ar",
    heroImage,
    overviewFigure,
    hero: {
      locationEyebrow: "أسعار · نيو زايد · ORA Developer Egypt",
      h1: "أسعار سولانا ويست نيو زايد وأنظمة السداد",
      lead:
        `تبدأ أسعار سولانا ويست من 9.8 مليون جنيه كمرجع للمشروع داخل نيو زايد. السعر النهائي يتحدد حسب نوع الوحدة، المرحلة، الإطلالة، ومسار التشطيب، ثم يُراجع من خلال جدول ${bundle.entry.developer} قبل الحجز.`,
      supporting:
        "هذه الصفحة تمنحك قراءة واضحة للسعر قبل فتح محادثة البيع. لا ننشر مخزوناً غير مؤكد، ولا نربط سعراً بوحدة بعينها إلا بعد مراجعة الإصدار الرسمي.",
    },
    overview: {
      eyebrow: "نظرة عامة",
      title: "كيف تُقرأ أسعار سولانا ويست حسب نوع الوحدة",
      paragraphs: [
        `${bundle.entry.shortName ?? bundle.entry.name} يمتد على نحو 316 فداناً في نيو زايد، لذلك لا تُقرأ الأسعار كرقم واحد ثابت. الشقق، الفلل، التاون هاوس والتوين هاوس لكل منها منطق مختلف في المساحة، الإطلالة، وموقع المرحلة.`,
        "الأرقام التي تراها في الإعلانات تساعد على تكوين صورة أولى، لكن قرار الشراء يحتاج جدولاً حديثاً يوضح الوحدة، المساحة، خطة السداد، وأي مصاريف مرتبطة بالحجز.",
        "للباحثين عن تقسيط سولانا ويست، خصصنا صفحة مستقلة لخطة السداد حتى يبقى السعر واضحاً، وتبقى شروط الدفع قابلة للمقارنة بهدوء.",
      ],
    },
    breakdowns: {
      eyebrow: "تصنيف للمشتري",
      title: "أسعار الشقق والفلل والتاون هاوس في سولانا ويست",
      intro:
        "تختلف أسعار سولانا ويست بين الشقق، التاون هاوس، التوين هاوس والفلل وفق المساحة والمرحلة والإطلالة. الهدف هنا أن تفهم الفارق بين الفئات قبل طلب جدول الأسعار.",
      sections: [
        {
          heading: "شقق سولانا ويست",
          body: [
            "شقق سولانا ويست تناسب من يبحث عن دخول أخف إلى مجتمع فاخر في نيو زايد، مع أهمية مراجعة الدور، الواجهة، وحالة التشطيب قبل مقارنة السعر.",
          ],
          links: [{ label: "شقق سولانا ويست", href: arPath("/properties/apartments") }],
        },
        {
          heading: "تاون هاوس سولانا ويست",
          body: [
            "التاون هاوس يقدم مساحة أكبر وخصوصية أوضح من الشقق، مع بقاء السعر عادةً في نطاق أكثر هدوءاً من الفيلا المستقلة.",
          ],
          links: [{ label: "تاون هاوس سولانا ويست", href: arPath("/properties/townhouses") }],
        },
        {
          heading: "توين هاوس سولانا ويست",
          body: [
            "التوين هاوس يناسب من يريد إحساس الفيلا مع كفاءة أعلى في المساحة والتكلفة، ضمن نفس الماستر بلان الأخضر.",
          ],
          links: [{ label: "توين هاوس سولانا ويست", href: arPath("/properties/twin-houses") }],
        },
        {
          heading: "فلل سولانا ويست",
          body: [
            "فلل سولانا ويست تمثل الفئة الأكثر خصوصية، وغالباً ما تتأثر أسعارها بموقع القطعة، الإطلالة، ومساحة الأرض.",
          ],
          links: [{ label: "فلل سولانا ويست", href: arPath("/properties/villas") }],
        },
        {
          heading: "مقارنة أسعار سولانا ويست مع مشروعات نيو زايد",
          body: [
            "المقارنة مع VYE أو Belle Vie مفيدة لفهم مستوى نيو زايد، لكنها لا تعني تشابه الأسعار أو وجود شراكة. كل مشروع يُقرأ من خلال إصداره وشروطه.",
          ],
          links: [{ label: "كمبوند سولانا ويست نيو زايد", href: arPath("/projects/solana-west") }],
        },
      ],
    },
    internalLinks: {
      eyebrow: "طبقات المرجعية",
      title: "روابط الأسعار والتقسيط والموقع قبل الحجز",
      intro: "استخدم هذه الروابط لترتيب الصورة: السعر أولاً، ثم التقسيط، ثم الموقع ونوع الوحدة.",
      links,
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO_AR,
      items: preview,
      fullFaqHref: arPath("/faq"),
    },
    finalCta: {
      eyebrow: "الخطوة التالية",
      title: "اطلب أسعار سولانا ويست حسب الوحدة المتاحة",
      supporting:
        `اذكر نوع الوحدة، ميزانيتك التقريبية، وأفق الشراء. نرتب لك أسعار سولانا ويست والمتاح الحالي وفق قنوات ${bundle.entry.developer} قبل أي خطوة حجز.`,
      primaryLabel: "احصل على الأسعار",
      secondaryLabel: "الأسعار وأنظمة السداد",
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

  const heroImage = withArabicAlt(
    bundle.media.amenities[0] ?? bundle.media.hero,
    "مرافق هادئة ونمط حياة فاخر داخل سولانا ويست نيو زايد.",
  );
  const overviewFigure = withArabicAlt(
    modelEnPayment.overviewFigure,
    "تصميم معماري عصري يدعم قراءة تقسيط سولانا ويست وخطة السداد.",
  );

  return {
    key: "payment-plan",
    idPrefix: "payment-plan-tx-ar",
    heroImage,
    overviewFigure,
    hero: {
      locationEyebrow: "تقسيط · دفعة حجز · تسليم",
      h1: "أنظمة سداد سولانا ويست نيو زايد حتى 10 سنوات",
      lead:
        "تعتمد خطة تقسيط سولانا ويست على دفعة حجز 5% وأقساط قد تمتد حتى 10 سنوات بحسب الإصدار. التفاصيل الدقيقة تُراجع في جدول الحجز قبل التوقيع.",
      supporting:
        `التسليم يبدأ من 2027 على مستوى المشروع، بينما تختلف مواعيد كل مرحلة حسب الإنشاء وجدول ${bundle.entry.developer}.`,
    },
    overview: {
      eyebrow: "نظرة عامة",
      title: "تقسيط سولانا ويست كخطة امتلاك طويلة الأمد",
      paragraphs: [
        `${bundle.entry.shortName ?? bundle.entry.name} يقدم خطة سداد تناسب المشتري الذي يفكر في السكن أو الاحتفاظ طويل الأمد، لا من يبحث عن قرار سريع مبني على عنوان إعلاني فقط.`,
        "النسب والمدة تمنحك إطاراً أولياً، لكن الجدول النهائي يوضح مواعيد الأقساط، الرسوم، وأي شروط خاصة بالتسوية أو التأخير.",
        "اقرأ هذه الصفحة مع صفحة الأسعار حتى ترى العلاقة بين قيمة الوحدة، مدة التقسيط، وموعد التسليم.",
      ],
    },
    breakdowns: {
      eyebrow: "الهيكل",
      title: "دفعة الحجز والأقساط والتسليم في سولانا ويست",
      intro:
        "تقوم خطة السداد على ثلاثة عناصر: الدفعة الأولى، مدة الأقساط، وموعد التسليم. كل عنصر يحتاج مراجعة هادئة قبل الحجز.",
      sections: [
        {
          heading: "دفعة حجز 5%",
          body: [
            "دفعة الحجز المعلنة 5%. قبل الدفع، تأكد من طريقة السداد، الرسوم الإدارية، وما إذا كانت هناك دفعات تكميلية عند التعاقد.",
          ],
          links: [{ label: "أسعار سولانا ويست", href: arPath("/prices") }],
        },
        {
          heading: "تقسيط حتى 10 سنوات",
          body: [
            "الأقساط قد تمتد حتى 10 سنوات، وهي نقطة مهمة لمشتري الخليج والمستثمر طويل الأمد. راجع توزيع الدفعات قبل مقارنة الخطة بمشروع آخر.",
          ],
          links: [{ label: "أسئلة تقسيط سولانا ويست", href: arPath("/faq") }],
        },
        {
          heading: "تسليم من 2027",
          body: [
            "تسليم من 2027 يعني بداية مراحل التسليم، وليس تاريخاً واحداً لكل الوحدات. اطلب موعد المرحلة الخاصة بوحدتك كتابةً.",
          ],
          links: [{ label: "كمبوند سولانا ويست نيو زايد", href: arPath("/projects/solana-west") }],
        },
        {
          heading: "خطة مناسبة للمشتري طويل الأمد",
          body: [
            "الخطة الطويلة تمنح مرونة في إدارة السيولة، لكنها تظل قراراً مالياً يجب ربطه بالدخل، العملة، وهدف الاحتفاظ.",
          ],
        },
      ],
    },
    internalLinks: {
      eyebrow: "طبقات المرجعية",
      title: "اقرأ التقسيط مع السعر والموقع ونوع الوحدة",
      intro: "لا تقرأ التقسيط بمعزل عن السعر والموقع ونوع الوحدة؛ الصورة الكاملة هي ما يحمي قرارك.",
      links,
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO_AR,
      items: preview,
      fullFaqHref: arPath("/faq"),
    },
    finalCta: {
      eyebrow: "الخطوة التالية",
      title: "اطلب جدول تقسيط سولانا ويست لوحدتك",
      supporting:
        `اطلب أحدث جدول تقسيط سولانا ويست لوحدتك عبر قنوات ${bundle.entry.developer}، مع توضيح المرحلة وموعد التسليم.`,
      primaryLabel: "الأسعار وأنظمة السداد",
      secondaryLabel: "تواصل عبر واتساب",
    },
  };
}
