import { SOLANA_WEST_AR_FAQ_GROUPS, SOLANA_WEST_FAQ_SHARED_INTRO_AR } from "@/data/faq/solana-west-faq-ar";
import type { FaqPair, ProjectImageAsset } from "@/data/projects/types";
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

function withArabicAlt(asset: ProjectImageAsset, alt: string): ProjectImageAsset {
  return { ...asset, alt };
}

function internalLinksAr(short: string): readonly ProjectsHubInternalLink[] {
  const m = englishPathToArabicPath;

  const rows: ProjectsHubInternalLink[] = [
    {
      label: "كمبوند سولانا ويست نيو زايد",
      href: m["/projects/solana-west"]!,
      context: "نظرة كاملة على المخطط، المرافق، الموقع والأسئلة.",
    },
    { label: "أسعار سولانا ويست", href: m["/prices"]!, context: "بداية الأسعار وأنظمة السداد قبل الحجز.", },
    { label: "تقسيط سولانا ويست", href: m["/payment-plan"]!, context: "دفعة حجز 5% وأقساط حتى 10 سنوات بحسب الوحدة.", },
    {
      label: "فلل سولانا ويست",
      href: m["/properties/villas"]!,
      context: "فلل مستقلة تُقرأ قيمتها حسب الإطلالة وموقع الأرض والمرحلة.",
    },
    { label: "تاون هاوس سولانا ويست", href: m["/properties/townhouses"]!, context: "منازل على محاور مشاة ومساحات خضراء.", },
    { label: "توين هاوس سولانا ويست", href: m["/properties/twin-houses"]!, context: "خصوصية أعلى ضمن كثافة مدروسة.", },
    { label: "شقق سولانا ويست", href: m["/properties/apartments"]!, context: "شقق داخل مجتمع منخفض الكثافة.", },
    { label: "ماستر بلان سولانا ويست", href: m["/master-plan"]!, context: "316 فداناً بتخطيط أخضر منخفض الكثافة.", },
    { label: "موقع سولانا ويست", href: m["/location"]!, context: "نيو زايد ومحور الضبعة وغرب القاهرة.", },
  ];
  return rows;
}

function buildFeaturedArabic(): readonly ProjectsHubFeaturedProject[] {
  return projectRegistry.map((entry) => {
    const resolved = resolveProjectPage(entry.slug);
    const image = withArabicAlt(
      resolved?.media.hero ?? solanaWestMedia.hero,
      "مشهد معماري فاخر من سولانا ويست نيو زايد ضمن مشروعات ORA Developer Egypt.",
    );
    const teaser =
      entry.slug === "solana-west" ?
        ([
          `مخطط نحو 316 فداناً على محور الضبعة في نيو زايد، يجمع مساحات خضراء، محاور مشاة، وشققاً حتى فلل مستقلة ضمن رؤية واحدة.`,
          `استخدم صفحة المشروع لفهم المرافق، الأسعار، التقسيط والأسئلة؛ أما المتاح والخرائط المرحلية فتُراجع عبر ${siteConfig.developer}.`,
        ] as const)
      : ([
          `صفحة تعريفية لـ${entry.name}. الشروط التجارية والتفاصيل الفنية تُراجع من خلال الجهة المطوّرة فقط.`,
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
    heroImage: withArabicAlt(
      solanaWestMedia.hero,
      "مشهد معماري فاخر من سولانا ويست نيو زايد ضمن مشروعات ORA Developer Egypt.",
    ),
    hero: {
      eyebrow: `${ora} · غرب القاهرة · فهرس عربي`,
      h1: "مشروعات ORA Developer Egypt في مصر",
      lead: `${ora} تقدم مشروعات سكنية تقوم على التخطيط الواسع، الخدمات المتكاملة، والهوية المعمارية الهادئة. هذا الفهرس يجمع الصفحات العربية المهمة للمشتري الباحث عن سولانا ويست ومشروعات ORA في مصر.`,
      supporting: `يرتبط اسم ${founder} بسياق ثقة قوي، لكن قرار الشراء يجب أن يبقى مبنياً على السعر، خطة السداد، المرحلة، ومستندات الحجز الرسمية.`,
    },
    overview: {
      eyebrow: "نظرة على الفهرس",
      title: "فهرس مشروعات ORA Developer Egypt للمشتري الجاد",
      paragraphs: [
        "الفهرس يساعدك على الانتقال بين المشروع، الأسعار، التقسيط، الموقع، الماستر بلان وأنواع الوحدات بدون تشتيت.",
        `${short} هو المسار الرئيسي المنشور هنا، مع صفحات مخصصة لأسعار سولانا ويست، تقسيط سولانا ويست، وقراءة موقع نيو زايد.`,
        "كل رابط يخدم نية بحث مختلفة: من يريد السعر، من يريد فلل للبيع في سولانا ويست، ومن يبحث عن الاستثمار العقاري في نيو زايد.",
      ],
      figure: withArabicAlt(
        solanaWestMedia.projectOverview,
        "واجهات سكنية ومساحات خضراء في سولانا ويست نيو زايد من ORA Developer Egypt.",
      ),
    },
    corridor: {
      eyebrow: "الجغرافيا والتموضع",
      title: "مشروعات ORA في نيو زايد وغرب القاهرة",
      paragraphs: [
        "نيو زايد أصبحت محوراً مهماً للمشروعات الفاخرة في غرب القاهرة، بفضل الطرق الجديدة، قرب مطار سفنكس، واتساع الطلب على المجتمعات منخفضة الكثافة.",
        "مشروعات مثل VYE وBelle Vie تساعد على فهم مستوى المنطقة، لكنها تُذكر كسياق سوقي فقط دون شراكة أو مقارنة سعرية مباشرة.",
        "تموضع ORA Developer Egypt يركز على التخطيط والهوية والاتساق، وهي عناصر تهم المستثمر الذي يفكر في الاحتفاظ لسنوات لا في قرار سريع.",
      ],
    },
    projectCardsEyebrow: "مراكز مفصَّلة",
    projectCardsTitle: "صفحات سولانا ويست العربية",
    scaleNote:
      "تُضاف صفحات جديدة فقط عندما تكون هناك معلومات كافية ومنظمة، بدون أسماء وهمية أو مشروعات غير واضحة.",
    featuredProjects: buildFeaturedArabic(),
    internalLinks: {
      eyebrow: "روابط مهمة",
      title: "روابط الأسعار والوحدات والموقع في سولانا ويست",
      intro: "ابدأ من الرابط الأقرب لنية بحثك، ثم انتقل إلى التواصل عندما تحتاج إلى المتاح أو الحجز.",
      links: internalLinksAr(short),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO_AR,
      items: arFaqSubset([5, 4, 3]),
      fullFaqHref: englishPathToArabicPath["/faq"]!,
    },
    finalCta: {
      eyebrow: "تحقق مكتبي",
      title: "انتقل من التصفح إلى استشارة شراء واضحة",
      supporting: `اطلب تفاصيل المشروع، أسعار الوحدات أو خرائط المرحلة عبر قنوات ${ora}، مع تجنب أي وعود غير موثقة عن المتاح.`,
      primaryLabel: "تواصل عبر واتساب",
      secondaryLabel: "استعرض الوحدات",
    },
  };
}
