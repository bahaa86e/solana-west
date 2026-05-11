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
    title: "محور الضبعة ونيو زايد كعنوان استثماري",
    body: `يمثل محور الضبعة ونيو زايد جزءاً من توسع غرب القاهرة نحو مجتمعات أوسع وأهدأ. ابدأ بالموقع، ثم اقرأ ${siteConfig.shortName} وفق أفق احتفاظ واضح لا وفق ضجيج الطرح الأول.`,
    href: "/blog/solana-west-mehwar-new-zayed-location-buyer-guide-2026",
    cta: "اقرأ دليل موقع سولانا ويست",
  },
  {
    title: "تقسيط سولانا ويست حتى 10 سنوات",
    body: "دفعة حجز 5% وتقسيط حتى 10 سنوات يمنحان إطاراً أولياً، لكن القرار المالي الحقيقي يبدأ من جدول السداد الرسمي للوحدة التي تختارها.",
    href: "/blog/solana-west-payment-plan-explained-issuer-guide-2026",
    cta: "اقرأ دليل خطة السداد",
  },
  {
    title: "استثمار سولانا ويست بدون وعود عائد مبالغ فيها",
    body: "قيمة الاستثمار تُقرأ من التخطيط، السعر، خطة السداد، وموعد التسليم. لا تعتمد على وعد عائد؛ ابنِ قرارك على أرقام تُراجع عند الحجز.",
    href: "/blog/solana-west-new-zayed-investment-strength-2026",
    cta: "اقرأ الرؤية الاستثمارية",
  },
  {
    title: "نيو زايد والشيخ زايد: قراءة للمشتري طويل الأمد",
    body: "المقارنة بين نيو زايد والشيخ زايد تبدأ من نمط الحياة اليومي، سهولة الوصول، القرب من المطار، وطبيعة الطلب طويل الأمد.",
    href: "/blog/new-zayed-vs-sheikh-zayed-luxury-buyers-2026",
    cta: "اقرأ مقارنة المنطقة",
  },
  {
    title: "ORA Developer Egypt وسياق الثقة قبل اختيار الوحدة",
    body: "اسم المطوّر، وضوح المستندات، جودة التخطيط، وخدمة ما بعد البيع عناصر تُراجع مع نوع الوحدة قبل اتخاذ قرار الشراء.",
    href: "/blog/ora-developers-egypt-vision-projects-strategy",
    cta: "اقرأ عن ORA Developer Egypt",
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
            الاستثمار العقاري في نيو زايد وسولانا ويست
          </h1>
          <p className="lux-body mt-lux-stack-sm max-w-[52ch] text-lux-ink/68 md:mt-lux-stack-md">
            مسارات مختصرة تساعدك على قراءة الاستثمار العقاري في نيو زايد بهدوء. لا شيء هنا بديل عن مستندات الحجز،
            أو مراجعة قانونية مستقلة، أو تأكيدات الجهة المطوّرة.
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
            اربط الاستثمار بالأسعار والتقسيط والموقع
          </h2>
          <ul className="lux-body mt-4 max-w-[52ch] list-disc space-y-2 pr-5 text-lux-ink/68">
            <li>
              <Link href={localizedPathname("/prices", "ar")} className={linkClass}>
                أسعار سولانا ويست
              </Link>
            </li>
            <li>
              <Link href={localizedPathname("/payment-plan", "ar")} className={linkClass}>
                تقسيط سولانا ويست
              </Link>
            </li>
            <li>
              <Link href={localizedPathname("/contact", "ar")} className={linkClass}>
                تواصل مع مكتب المبيعات
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </SectionMain>
  );
}
