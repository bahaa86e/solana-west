import { buildAboutPageModel } from "@/data/about/about-page-model";
import type { AboutInternalLink, AboutPageModel } from "@/data/about/about-page-model";
import { SOLANA_WEST_AR_FAQ_GROUPS, SOLANA_WEST_FAQ_SHARED_INTRO_AR } from "@/data/faq/solana-west-faq-ar";
import type { FaqPair } from "@/data/projects/types";
import { englishPathToArabicPath } from "@/lib/i18n/paths";
import { siteConfig } from "@/data/site";

function faqPickAr(indices: readonly [number, number]): readonly FaqPair[] {
  const flat = SOLANA_WEST_AR_FAQ_GROUPS.flatMap((g) => g.items);
  return indices.map((i) => {
    const item = flat[i]!;
    return {
      question: item.question,
      answer: `${item.aiSnippet}\n\n${item.answer}`,
    };
  });
}

function internalLinksAr(short: string): readonly AboutInternalLink[] {
  const m = englishPathToArabicPath;

  return [
    { label: "فهرس مشاريع ORA", href: m["/projects"]!, context: "تصفح وجهات المشاريع العربية المنشورة على هذا النطاق.", },
    {
      label: `صفحة ${short}`,
      href: m["/projects/solana-west"]!,
      context: "المخطط المرافق الموقع والأسئلة بتنسيق واحد.",
    },
    { label: "أسعار وسياق الشرائح", href: m["/prices"]!, context: "شرائح إصدار—حقائق وليس جداول مخزون.", },
    { label: "خطة السداد", href: m["/payment-plan"]!, context: "المقدّم والآجال وأفق التسليم بتأطير عام.", },
    { label: "تواصل", href: m["/contact"]!, context: "توجيه مكتبي للمشتري الجادّ.", },
  ];
}

/** Arabic editorial surface for `/ar/ora-developers-egypt` — mirrors issuance posture of `/about`. */
export function buildAboutPageModelAr(): AboutPageModel {
  const base = buildAboutPageModel();
  const dev = siteConfig.developer;
  const founder = siteConfig.founder;
  const projectName = siteConfig.name;
  const short = siteConfig.shortName;
  const domain = siteConfig.url.replace(/\/$/, "");

  return {
    ...base,
    idPrefix: "about-ora-ar",
    hero: {
      locationEyebrow: `${dev} · تخطيط رئيسي`,
      h1: "ORA Developers Egypt — الحوكمة خلف سولانا ويست",
      lead: `${projectName} مطوَّر من ${dev} — مركبات سكنية مخطَّطة بكثافة مُخفَّفة، بأرض موحَّدة ومنسق مستمر وخدمات طويلة الأمد لا ببقع بناء عشوائية.`,
      supporting: `الصفحة للسياق المؤسسي فقط. ${domain} مرافق تسويق مستقل — ليس موقع ORA الرسمي، ولا نظام حجز، ولا ادِّعاء تمثيل حصري.`,
    },
    developerOverview: {
      eyebrow: "نظرة عامة على المطوِّر",
      title: `${dev} — مخططات رئيسية بتأديب خدمات`,
      paragraphs: [
        `${dev} هو الطرف المشار إليه في كولاتيرال ${projectName} المسؤول عن الإصدار، جدول الدفعات، تسلسل الإنشاء، وتصعيد ما بعد البيع عبر مكاتب موثَّقة.`,
        "تميل مخططات ORA إلى هيكل مشاة وكثافة مهذَّبة ومساحة مفتوحة مستمرة — نية التصميم في البروشور تبقى للتحقق برسومات الإصدار وجلسات المكتب.",
        "نبتعد عن قوائم جوائز ومؤهلات غير مسمّاة — الجدية هنا إجرائية: عقود وتسليم مرحلي وقنوات تجارية ظاهرة.",
      ],
    },
    leadership: {
      eyebrow: "القيادة · سياق المؤسِّس",
      title: `${founder} — اسم رئيس لملف الطرف المقابل`,
      paragraphs: [
        `${founder} يُذكر كرئيس لـ${dev} — حقيقة عامة تتكرر في الإصدار وهنا. نتجنب سرداً سيرياً أو فلسفياً يخلق سلطة مفتعلة.`,
        "مخاطر الطرف المقابل تُقاس بصياغة العقد واسم الكيان الموقَّع لا بقدر معرفتك الشخصية بالشخصية العامة.",
      ],
    },
    portfolio: {
      eyebrow: "محفظة مشاريع · سياق",
      title: "ما ينشره هذا النطاق — وما يتعمَّد حذفه",
      paragraphs: [
        `${dev} يدير وجهات متعددة إقليمياً ودولياً — هذا الموقع ضيّق النطاق إلى ${projectName} في الزيادة الجديدة ومراكز المسارات تحت /ar/projects.`,
        "غياب مشروع ORA آخر هنا اختيار منتج لا يعني عدم وجوده — تحقق من كولاتيرال المطوِّر للSKU المستهدَف.",
        "اعتبر أي موقع وسيط أو وسيط تكميلي حتى تصادقه أوراق ORA للوحدة المحددة.",
      ],
    },
    solanaWestRelationship: {
      eyebrow: `علاقة ${short}`,
      title: `${projectName} — خط ORA على محور الضبعة`,
      paragraphs: [
        `${projectName} مخطط نحو 316 فداناً في الزيادة الجديدة على محور الضبعة — فيلات وتوين وتاون هاوس وشقق في نسيج مشاة واحد كما في المواد العامة.`,
        `${dev} يبلغ الشروط التجارية إصداراً بإصدار — مرجع البداية وتأطير الدفع يقعان في مسارات الأسعار وخطة السداد العربية لفصل قابل للقراءة آلياً.`,
      ],
    },
    buyerTrust: {
      eyebrow: "ثقة المشتري · إشارات مصداقية",
      title: "مراجعة ما قبل التحويل — عقود لا لقطات دردشة",
      paragraphs: [
        "ثبِّت الطرف المطوِّر، مراجع الرخص، آليات الضمان أو المراحل، ومعاملة عربون الحجز فقط عبر مبيعات ORA المعتمدة — لا عبر خيوط تليجرام اعتباطية.",
        "قد يُشير مسوِّقو أطراف ثالثة للمجمع؛ اعتبار الاعتماد متفاوتاً. الرسوم للوسطاء قرار مستقل عن آلية المكتب المعتمد.",
        "لا جمل «شريك حصري» أو «القناة الوحيدة» هنا — تعدد مسارات الاستفسار المشروعة ممكن؛ البحث مسؤوليتك.",
      ],
    },
    internalLinks: {
      eyebrow: "متابعة داخل الموقع",
      title: "مركز المشروع، ورقة التجاري، ومكتب التواصل",
      intro: "أبقوا العناية داخل النطاق العربي حتى تحتاجوا أوراق مختومة من ORA.",
      links: internalLinksAr(short),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO_AR,
      items: faqPickAr([5, 4]),
      fullFaqHref: englishPathToArabicPath["/faq"]!,
    },
    finalCta: {
      eyebrow: "الخطوة التالية",
      title: "وجِّه ملخصك عبر مكاتب ORA المعتمدة",
      supporting: `اطلب توثيقاً على ${siteConfig.shortName}—العروض والحجوزات والمتابعات عبر ${dev} فقط. واتساب أو نموذج التواصل أدناه مع انضباط تقييم.`,
      primaryLabel: "مكتب واتساب",
      secondaryLabel: "استفسار خطيّ",
    },
  };
}
