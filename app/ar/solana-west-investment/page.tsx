import Link from "next/link";

import { SectionMain } from "@/components/layout/section-main";
import { investmentGuidesPageSeoAr } from "@/data/seo/ar-routes-registry";
import { siteConfig } from "@/data/site";
import { localizedPathname } from "@/lib/i18n/paths";
import { buildPageMetadata } from "@/seo/build-metadata";
import { cn } from "@/lib/utils";

export const metadata = buildPageMetadata(investmentGuidesPageSeoAr);

const linkClass = cn(
  "font-sans text-[0.9375rem] font-normal tracking-[0.012em] text-lux-ink/[0.88]",
  "underline decoration-lux-gold/32 underline-offset-[0.38em]",
  "transition-[color,decoration-color] hover:text-lux-ink hover:decoration-lux-gold/55",
);

const guides = [
  {
    title: "محور الضبعة ومنطق الأرض — أين يمتص غرب القاهرة الطلب",
    body: `يضع نضج محور الضبعة والحلقة سياق الطلب غرباً. ابدأ بالمكان ثم اقرأ ${siteConfig.shortName} بأفق احتفاظك — لا بمزاج الإطلاق.`,
    href: "/blog/solana-west-mehwar-new-zayed-location-buyer-guide-2026",
    cta: "دليل الموقع للمشتري",
  },
  {
    title: "ثقافة سداد على مستوى الجهة المصدرة",
    body: "مقدّم 5% وأقساط حتى عشر سنوات عنوان تسويق؛ الضبط الفعلي على جدول الإصدار الذي يحمل حقيبتك الحجز.",
    href: "/blog/solana-west-payment-plan-explained-issuer-guide-2026",
    cta: "دليل خطة السداد",
  },
  {
    title: "هيكل تصحيح — روايات لا وعود عائد",
    body: `تخطيط ORA المفتوح والانضباط المساحي مدخل للتدقيق لا وعد أداء. أنمذِج على أرقام تحققها عند الحجز.`,
    href: "/blog/solana-west-new-zayed-investment-strength-2026",
    cta: "سياق استثماري",
  },
  {
    title: "الزيادة الجديدة مقابل الشيخ زايد — برك المشترين وتوسع المدينة",
    body: "كيف تختلف جغرافيا التوسّع، والقرب من المطار، وبرك المشترين عند اختيار عنوان طويل الأمد.",
    href: "/blog/new-zayed-vs-sheikh-zayed-luxury-buyers-2026",
    cta: "مقارنة منطقة",
  },
  {
    title: "قراءة الطرف المقابل لـORA — مخاطر التسلسل قبل SKU",
    body: "تسلسل المطوِّر—منظر، خدمات، مبيعات—يُوزن كمثل خطر نوع الوحدة عند حساب المخاطر التشغيلية.",
    href: "/blog/ora-developers-egypt-vision-projects-strategy",
    cta: "ملاحظة استراتيجية ORA",
  },
] as const;

export default function ArabicInvestmentGuidesPage() {
  return (
    <SectionMain>
      <article className="mx-auto max-w-readable" aria-labelledby="investment-guides-ar-heading" dir="rtl">
        <header className="border-b border-lux-ink/[0.06] pb-lux-stack-md md:pb-lux-stack-lg">
          <p className="lux-eyebrow text-lux-ink/46">تحقق</p>
          <div className="mt-lux-stack-xs h-px w-9 bg-lux-gold/42 md:mt-lux-stack-sm" aria-hidden />
          <h1
            id="investment-guides-ar-heading"
            className="mt-lux-stack-xs max-w-[min(40ch,100%)] text-balance font-display text-display-xl text-lux-ink"
          >
            الاستثمار في غرب القاهرة — أدلة تدقيق مرساة على {siteConfig.shortName}
          </h1>
          <p className="lux-body mt-lux-stack-sm max-w-[52ch] text-lux-ink/68 md:mt-lux-stack-md">
            مسارات عربية قصيرة — كل واحدة تربط بتدوينة إنجليزية كاملة. لا شيء هنا بديلاً لحقيبة الحجز أو المستشار
            القانوني أو تأكيدات الجهة المصدرة.
          </p>
        </header>

        <ul className="m-0 list-none space-y-0 p-0">
          {guides.map((g) => (
            <li key={g.href} className="border-b border-lux-ink/[0.06] py-10 md:py-12">
              <h2 className="font-display text-lux-display-sm font-medium text-lux-ink">{g.title}</h2>
              <p className="lux-body mt-4 max-w-[52ch] text-lux-ink/70">{g.body}</p>
              <p className="mt-5">
                <Link href={localizedPathname(g.href, "ar")} className={linkClass}>
                  {g.cta}
                </Link>
              </p>
            </li>
          ))}
        </ul>

        <section className="border-t border-lux-ink/[0.06] py-10 md:py-12" aria-labelledby="investment-next-ar">
          <h2 id="investment-next-ar" className="font-display text-lux-display-sm font-medium text-lux-ink">
            اربط الأدلة بمسارات سولانا ويست المعاملاتية
          </h2>
          <ul className="lux-body mt-4 max-w-[52ch] list-disc space-y-2 pr-5 text-lux-ink/68">
            <li>
              <Link href={localizedPathname("/prices", "ar")} className={linkClass}>
                مرجع الأسعار العربي
              </Link>
            </li>
            <li>
              <Link href={localizedPathname("/payment-plan", "ar")} className={linkClass}>
                خطة السداد العربية
              </Link>
            </li>
            <li>
              <Link href={localizedPathname("/contact", "ar")} className={linkClass}>
                مكتب استفسارات
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </SectionMain>
  );
}
