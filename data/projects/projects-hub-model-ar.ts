import { SOLANA_WEST_AR_FAQ_GROUPS, SOLANA_WEST_FAQ_SHARED_INTRO_AR } from "@/data/faq/solana-west-faq-ar";
import type { FaqPair } from "@/data/projects/types";
import { projectRegistry } from "@/data/projects/registry";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import type {
  ProjectsHubFeaturedProject,
  ProjectsHubInternalLink,
  ProjectsHubPageModel,
} from "@/data/projects/projects-hub-model";
import { solanaWestMedia } from "@/data/media/solana-west";
import { englishPathToArabicPath } from "@/lib/i18n/paths";
import { siteConfig } from "@/data/site";

function arFaqSubset(indices: readonly [number, number, number]): readonly FaqPair[] {
  const flat = SOLANA_WEST_AR_FAQ_GROUPS.flatMap((g) => g.items);
  return indices.map((i) => {
    const item = flat[i]!;
    return {
      question: item.question,
      answer: `${item.aiSnippet}\n\n${item.answer}`,
    };
  });
}

function internalLinksAr(short: string): readonly ProjectsHubInternalLink[] {
  const m = englishPathToArabicPath;

  const rows: ProjectsHubInternalLink[] = [
    {
      label: `صفحة ${short}`,
      href: m["/projects/solana-west"]!,
      context: "سرد المخطط بالإصدار، المرافق، الموقع، ومعمق الأسئلة.",
    },
    { label: "الأسعار", href: m["/prices"]!, context: "مرجع قبل الحجز—ثبّت بالمكتب المعتمد.", },
    { label: "خطة السداد", href: m["/payment-plan"]!, context: "تأطير رأس المقال؛ الجدول الموقَّع هو المرجع.", },
    {
      label: "فيلات مستقلة",
      href: m["/properties/villas"]!,
      context: "مخزون منفصل—الطلّة وتخصيص الأرض وفق المرحلة.",
    },
    { label: "تاون هاوس", href: m["/properties/townhouses"]!, context: "مساحات متوسطة على محاور المشاة.", },
    { label: "توين هاوس", href: m["/properties/twin-houses"]!, context: "خط مشترك مضبوط بين الطلب والكثافة.", },
    { label: "شقق", href: m["/properties/apartments"]!, context: "مخزون عمودي داخل سياسة المجمع.", },
    { label: "المخطط العام", href: m["/master-plan"]!, context: "منطق 316 فداناً دون مخيلة قطع غير مصدَّرة.", },
    { label: "الموقع", href: m["/location"]!, context: "محور الضبعة وغرب القاهرة كمرجع جغرافي.", },
  ];
  return rows;
}

function buildFeaturedArabic(): readonly ProjectsHubFeaturedProject[] {
  return projectRegistry.map((entry) => {
    const resolved = resolveProjectPage(entry.slug);
    const image = resolved?.media.hero ?? solanaWestMedia.hero;
    const teaser =
      entry.slug === "solana-west" ?
        ([
          `مخطط نحو 316 فداناً بكثافة مُخفَّفة على محور الضبعة في الزيادة الجديدة — هيكل أخضر للمشاة، وواجهات فيلات مرتفعة، وشقق حتى فيلات مستقلة، بتشطيب متكامل أو عظم حسب الشريحة.`,
          `استخدم صفحة المشروع للمرافق وتأطير الدفع والأسئلة؛ التوفر والخرائط المرحلية تبقى عبر إصدار ${siteConfig.developer}.`,
        ] as const)
      : ([
          `بوابة معتمدة على النطاق لـ${entry.name}. الشروط التجارية والملاحق التقنية عبر مكتب المطوِّر فقط.`,
        ] as const);

    return { entry, teaser, image };
  });
}

export function buildProjectsHubPageModelAr(): ProjectsHubPageModel {
  const ora = siteConfig.developer;
  const founder = siteConfig.founder;
  const short = siteConfig.shortName;

  return {
    idPrefix: "projects-hub-ar",
    heroImage: solanaWestMedia.hero,
    hero: {
      eyebrow: `${ora} · غرب القاهرة · فهرس عربي`,
      h1: `مشاريع ORA المصنَّفة على هذا النطاق — ركيزة ${short}`,
      lead: `${ora} تطرح مركبات سكنية كبيرة كنطاق واحد متناسِق — المنظر والخدمات ومزيج الأنواع يُخطَّط كرسالة واحدة وليس قطعاً عشوائية. يعرض هذا الفهرس المراكز العربية الموثَّقة فقط.`,
      supporting: `بقيادة ${founder}، خط أنابيب مصر يتنافس على التسليم المؤسسي وخدمات طويلة الأمد. لا أسماء وهمية ولا مخزون مختلَق — كل مركز ملتزم بالمواد المنشورة.`,
    },
    overview: {
      eyebrow: "نظرة على الفهرس",
      title: "الصفحة فهرسة — الحجز يُغلق بالأوراق المختومة",
      paragraphs: [
        "تجمِّع صفحات المشروع ما يطلبه المشتري الجاد بترتيب: منطق الأنواع، الشق التجاري، الوصول، عمق المرافق، وأسئلة موحَّدة. لا تُضاف وجهات جديدة قبل جاهزية الكولاتيرال.",
        `${short} هو المسار الكامل المنشور حالياً على هذا البناء. بقيت مراجع الأسعار والدفع متوافقة مع مسارات «الأسعار» و«خطة السداد» العربية؛ الحجز دائماً بحزمة الإصدار المؤرخة.`,
        "الروابط أدناه تربط أنواع الوحدات والسياق السعري والمخطط والجغرافيا — كل رابط نية شراء منفصلة دون تكرار سرد المشروع.",
      ],
      figure: solanaWestMedia.projectOverview,
    },
    corridor: {
      eyebrow: "الجغرافيا والتموضع",
      title: "مجمعات ORA مقروءة ضد العمود الفقري الغربي للزيادة الجديدة",
      paragraphs: [
        "الزيادة الجديدة تمتد العمود السكني الغربي للقاهرة الكبرى — نضج محور الضبعة، وقرب المطار، وتجزئة التجزئة الكبرى كيف يقرأ المؤسسون الحي. مجمعات ORA تشارك في ذلك بكثافة أقل وشريان أخضر للمشاة لا بأقصى كثافة ممكنة.",
        "منافسة غرب القاهرة تشمل أقراناً كباراً (يُذكر غالباً VYE وBelle Vie كسياق حي). نذكرهم كسياق سوقي فقط — لا شراكة ولا إقرار تمثيل.",
        "تموضع ORA يبرز الانضباط المعماري واستمرار المنظر والمراحل الخدمية — مادة للمستثمر الذي يضمن جودة الطرف المقابل وسلوك احتفاظ متعدد السنوات لا مقارنات بروشور فقط.",
      ],
    },
    projectCardsEyebrow: "مراكز مفصَّلة",
    projectCardsTitle: "المسارات المعتمدة على هذا النشر",
    scaleNote:
      "ستُضاف وجهات ORA أخرى عند التفويض — لا بطاقات وهمية ولا أسماء غير منشورة.",
    featuredProjects: buildFeaturedArabic(),
    internalLinks: {
      eyebrow: "مسارات سلطة",
      title: "تجاري، أنواع، مخطط، ومكان — روابط ثابتة للفِرق",
      intro: "روابط داخلية عربية للمذكرات والمحادثات المهنية.",
      links: internalLinksAr(short),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO_AR,
      items: arFaqSubset([5, 4, 3]),
      fullFaqHref: englishPathToArabicPath["/faq"]!,
    },
    finalCta: {
      eyebrow: "تحقق مكتبي",
      title: "ارفع من الفهرس إلى أوراق مختومة",
      supporting: `اطلب إحاطات الخرائط المرحلية أو أوراق النوع عبر قنوات ${ora} المعتمدة — دون مخزون اصطناعي.`,
      primaryLabel: "مكتب واتساب",
      secondaryLabel: "استفسار خطيّ",
    },
  };
}
