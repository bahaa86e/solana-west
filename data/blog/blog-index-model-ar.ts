import { buildBlogIndexPageModel, type BlogIndexPageModel, type BlogTopicGroupWithArticles } from "@/data/blog/blog-index-model";
import { getAllBlogArticles } from "@/data/blog/catalog";
import { localizedPathname } from "@/lib/i18n/paths";
import type { SiteLocale } from "@/lib/i18n/locale";
import { siteConfig } from "@/data/site";

function mapTopicGroups(groups: BlogIndexPageModel["topicGroupsDetailed"], locale: SiteLocale): BlogTopicGroupWithArticles[] {
  return groups.map((g) => ({
    ...g,
    pillar: { ...g.pillar, href: localizedPathname(g.pillar.href, locale) },
  }));
}

/** Arabic-facing blog index: Arabic chrome + pillar links under `/ar/*`; article cards stay English titles (body on detail route). */
export function buildBlogIndexPageModelAr(): BlogIndexPageModel {
  const base = buildBlogIndexPageModel();
  const locale: SiteLocale = "ar";
  const ora = siteConfig.developer;
  const short = siteConfig.shortName;
  const count = getAllBlogArticles().length;

  return {
    ...base,
    topicGroupsDetailed: mapTopicGroups(base.topicGroupsDetailed, locale),
    hero: {
      eyebrow: `${ora} · مكتب تحرير عربي`,
      h1: `${short} — يوميات بحث لمشتري جادٍّ`,
      lead: `${short} ينشر موجزات طويلة كلما نضج الكولاتيرال — كل مقال موثَّق ومؤرخ للمشتري الذي قرأ الأسئلة الشائعة ولا يزال بحاجة لترتيب السياق.`,
      supporting:
        count === 0 ?
          "المكتبة تجهِّز الدفعة الأولى — مسارات السلطة أدناه تظل عموداً تشغيلياً حتى تُفعَّل القائمة."
        : `${count} مقال/موجز حالياً في الفهرس.`,
    },
    indexIntro: {
      eyebrow: "نموذج الفهرسة",
      title: "كيف تبقى الموجزات مسؤولة أمام المسارات الثابتة",
      paragraphs: [
        "كل موجز يعيد ربط الحقائق نفسها المرئية في الموقع العربي (الدقائق الاتجاهية، التأطير التجاري، أسئلة الأسئلة الشائعة). الاختلاف مقصود — المقالات تحكي تسلسلاً ومقارنات لا تستوعبها الأسئلة المصدَّرة وحدها.",
        "المنشورات الجديدة تحمل نفس الهيكل: موضوع موسوم، تواريخ، وتشابه OG/Twitter، وروابط داخلية عربية للمسارات المعاملاتية.",
      ],
    },
    authorityLinks: {
      eyebrow: "عمود تشغيلي",
      title: "حقائق بروابط عربية مستقرة قبل اكتمال المكتبة",
      intro: "اختصروا هذه الروابط لمشاركة الفِرق بين البريد وحزم مجالس الإدارة.",
      links: base.authorityLinks.links.map((l) => ({
        ...l,
        href: localizedPathname(l.href, locale),
      })),
    },
    finalCta: {
      eyebrow: "مواءمة المكتب",
      title: "أعد المقال العربي إلى حزم المطوِّر المختومة",
      supporting: `${ora} يصدر عروضاً مؤرخة وخرائط مرحلية وملاحق دفع — النثر هنا يوجِّه والعقود تحكم.`,
      primaryLabel: "مكتب واتساب",
      secondaryLabel: "استفسار خطيّ",
    },
  };
}
