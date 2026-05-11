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

function withArabicAlt(asset: ProjectImageAsset, alt: string): ProjectImageAsset {
  return { ...asset, alt };
}

function internalLinksAr(short: string): readonly MasterPlanInternalLink[] {
  const m = englishPathToArabicPath;
  return [
    {
      label: "كمبوند سولانا ويست نيو زايد",
      href: m["/projects/solana-west"]!,
      context: "سرد المجمع والمرافق والتجاري والأسئلة الموسَّعة.",
    },
    { label: "أسعار سولانا ويست", href: m["/prices"]!, context: "بداية الأسعار والفئات قبل الحجز.", },
    { label: "تقسيط سولانا ويست", href: m["/payment-plan"]!, context: "دفعة حجز ومدة وتسليم بحسب الإصدار.", },
    {
      label: "فلل سولانا ويست",
      href: m["/properties/villas"]!,
      context: "قطع وإطلالات مقابل الهيكل الأخضر.",
    },
    { label: "تاون هاوس سولانا ويست", href: m["/properties/townhouses"]!, context: "منازل على محاور المشاة.", },
    {
      label: "توين هاوس سولانا ويست",
      href: m["/properties/twin-houses"]!,
      context: "فيلات مزدوجة بحدود وتراجعات مضبوطة.",
    },
    { label: "شقق سولانا ويست", href: m["/properties/apartments"]!, context: "شقق بالقرب من المساحات والخدمات.", },
    { label: "أسئلة سولانا ويست", href: m["/faq"]!, context: "الموقع والأنواع والأسعار والتقسيط.", },
  ];
}

/** Arabic narrative for `/ar/solana-west-master-plan`. */
export function buildMasterPlanPageModelAr(): MasterPlanPageModel {
  const bundle = resolveProjectPage("solana-west");
  if (!bundle) throw new Error("Solana West bundle required for Arabic master-plan route.");

  const entry = bundle.entry;
  const short = entry.shortName ?? entry.name;
  const dev = entry.developer;

  const heroImage: ProjectImageAsset = withArabicAlt(
    solanaWestMedia.amenities[2] ?? bundle.media.hero,
    "تصميم معماري عصري ومساحات خضراء داخل سولانا ويست نيو زايد.",
  );
  const overviewFigure: ProjectImageAsset = withArabicAlt(
    solanaWestMedia.masterplan,
    "الماستر بلان في سولانا ويست نيو زايد على مساحة 316 فداناً من ORA Developer Egypt.",
  );

  return {
    idPrefix: "master-plan-sw-ar",
    heroImage,
    overviewFigure,
    hero: {
      eyebrow: "المخطط · تنظيم مكاني · نيو زايد",
      h1: "الماستر بلان في سولانا ويست نيو زايد",
      lead: `${entry.name} يمتد على نحو 316 فداناً في نيو زايد، بتخطيط يوازن بين الخصوصية، المشي، والمساحات الخضراء. الماستر بلان هنا ليس رسماً زخرفياً، بل جزء أساسي من قيمة السكن.`,
      supporting:
        "تعرض الصفحة الفكرة العامة للمخطط: كثافة منخفضة، وحدات متنوعة، وممرات خضراء. تفاصيل القطع، المساحات الدقيقة، وحدود كل مرحلة تُراجع من الإصدار الرسمي قبل الحجز.",
    },
    overview: {
      eyebrow: "نظرة على المخطط",
      title: "ماستر بلان سولانا ويست: مجتمع مترابط لا جزر منفصلة",
      paragraphs: [
        "يُقرأ سولانا ويست كمجتمع مترابط، لا كمجموعة مبانٍ متجاورة. الطرق، الممرات، المساحات الخضراء والوحدات السكنية تعمل معاً لتكوين تجربة سكنية أكثر هدوءاً.",
        "الكثافة المنخفضة تمنح المشروع إحساساً بالرحابة وتدعم الخصوصية بين الوحدات، خاصة في الفلل والتوين هاوس.",
        "تترك ORA Developer Egypt مساحة واضحة للمشي، التراجع، والمشهد الأخضر، بحيث تبدو المرافق جزءاً من الحياة اليومية لا إضافة بعيدة عن السكن.",
      ],
    },
    spatialOrganization: {
      eyebrow: "التنظيم الفضائي",
      title: "مناطق سكنية ومساحات خضراء داخل المخطط",
      intro:
        "هذه قراءة مبسطة لعناصر الماستر بلان. عند اختيار وحدة محددة، اطلب خريطة المرحلة وموقع القطعة قبل تثبيت الحجز.",
      blocks: [
        {
          heading: "توزيع الوحدات السكنية داخل سولانا ويست",
          body: [
            `يضم ${short} شققاً، تاون هاوس، توين هاوس وفللاً ضمن مخطط واحد، ما يمنح المشتري أكثر من مستوى للخصوصية وحجم الاستثمار.`,
            "توزيع الوحدات يساعد على خلق انتقال هادئ بين الكثافات المختلفة، من الشقق إلى الفلل الأكثر خصوصية.",
            "عند الحجز، يصبح موقع الوحدة داخل المرحلة، اتجاهها، وقربها من المساحات الخضراء عناصر مؤثرة في القرار.",
          ],
        } satisfies MasterPlanSpatialBlock,
        {
          heading: "مساحات خضراء تربط مراحل المعيشة",
          body: [
            "المساحات الخضراء ليست فاصلاً شكلياً، بل عنصر يخفف الإحساس بالكثافة ويمنح الواجهات عمقاً بصرياً أهدأ.",
            "اتجاه الوحدات نحو الخضرة يدعم الضوء، التهوية، والإحساس بالانفتاح داخل المجتمع.",
            "تفاصيل كل مساحة وممر تُراجع في خريطة المرحلة، خصوصاً للمشتري الذي يقارن بين أكثر من وحدة.",
          ],
        },
        {
          heading: "محاور مشاة كجزء من تجربة السكن",
          body: [
            "محاور المشاة تجعل الوصول إلى المرافق والخدمات الداخلية أكثر طبيعية، وتقلل اعتماد الحياة اليومية على السيارة داخل المشروع.",
            "عندما يتصل المشي بالخضرة، يصبح الطريق نفسه جزءاً من تجربة السكن، وليس مجرد ممر بين نقطتين.",
          ],
        },
        {
          heading: "إطلالات أهدأ وخصوصية أعلى",
          body: [
            "التراجعات والمساحات المزروعة تساعد على فصل الوحدات بصرياً وتمنح الفلل والتوين هاوس إحساساً أعلى بالخصوصية.",
            `الإطلالة النهائية تتأثر بموقع المرحلة، منسوب الأرض، وحزمة الوحدة التي تصدرها ${dev}.`,
          ],
        },
        {
          heading: "ما يجب تأكيده من مستندات الإصدار",
          body: [
            "لا تعتمد على وصف عام فقط عند اختيار وحدة. اطلب خريطة المرحلة، موقع الوحدة، اتجاهها، وقربها من المرافق أو المساحات المفتوحة.",
            "الزيارة الميدانية ومراجعة مستندات الإصدار هما ما يحولان فكرة الماستر بلان إلى قرار شراء واضح.",
          ],
        },
      ],
    },
    lifestyle: {
      eyebrow: "أسلوب معيشة",
      title: "حياة يومية هادئة بين المنازل والمساحات المفتوحة",
      paragraphs: [
        "الإيقاع اليومي في سولانا ويست يعتمد على المسافة الهادئة بين المنازل، الممرات الخضراء، وفصل حركة السيارات قدر الإمكان عن واجهات السكن.",
        "النادي، المسابح والحدائق المشتركة تُقرأ كجزء من شبكة الحياة اليومية، لا كمرافق بعيدة يحتاج السكان للوصول إليها بالسيارة.",
        "اختلاف الاحتياج بين عائلة صغيرة، أسرة كبيرة، أو مستثمر خليجي يجعل زيارة المرحلة ومراجعة الخريطة خطوة أساسية قبل الاختيار.",
      ],
    },
    investment: {
      eyebrow: "بعد استثماري",
      title: "قيمة الماستر بلان في قرار الاستثمار طويل الأمد",
      paragraphs: [
        "الماستر بلان القابل للمشي والمنخفض الكثافة يدعم قيمة المشروع على المدى الطويل، لكنه لا يعني وعداً بعائد محدد.",
        "قرار الاستثمار يحتاج قراءة السعر، التقسيط، موعد التسليم، رسوم الصيانة، ومستوى التشطيب في كل مرحلة.",
        `قوة ${dev} تضيف ثقة، لكن قيمة كل وحدة داخل 316 فداناً تختلف حسب الإطلالة، القرب من الممرات، والمرحلة.`,
      ],
    },
    internalLinks: {
      eyebrow: "متابعة البحث",
      title: "من الماستر بلان إلى الأسعار وأنواع الوحدات",
      intro: "انتقل من قراءة المخطط إلى فهم السعر، التقسيط، وأنواع الوحدات.",
      links: internalLinksAr(short),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO_AR,
      items: faqPickAr([4, 3, 1]),
      fullFaqHref: englishPathToArabicPath["/faq"]!,
    },
    finalCta: {
      eyebrow: "توجيه",
      title: "اطلب خريطة المرحلة قبل اختيار الوحدة",
      supporting: `اطلب خريطة المرحلة أو المتاح الحالي عبر قنوات ${dev}، ثم قارن الموقع والإطلالة قبل الحجز.`,
      primaryLabel: "استعرض الوحدات",
      secondaryLabel: "احجز زيارة للمشروع",
    },
  };
}
