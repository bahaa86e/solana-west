import Link from "next/link";

import { SectionMain } from "@/components/layout/section-main";
import { comparisonPagesSeoAr } from "@/data/seo/ar-routes-registry";
import { siteConfig } from "@/data/site";
import { localizedPathname } from "@/lib/i18n/paths";
import { buildPageMetadata } from "@/seo/build-metadata";
import { cn } from "@/lib/utils";

export const metadata = buildPageMetadata(comparisonPagesSeoAr);

const linkClass = cn(
  "font-sans text-[0.9375rem] font-normal tracking-[0.012em] text-lux-ink/[0.88]",
  "underline decoration-lux-gold/32 underline-offset-[0.38em]",
  "transition-[color,decoration-color] hover:text-lux-ink hover:decoration-lux-gold/55",
);

export default function ArabicComparisonPagesHub() {
  return (
    <SectionMain>
      <article className="mx-auto max-w-readable" aria-labelledby="comparison-ar-heading" dir="rtl">
        <header className="border-b border-lux-ink/[0.06] pb-lux-stack-md md:pb-lux-stack-lg">
          <p className="lux-eyebrow text-lux-ink/46">مساحة عمل</p>
          <div className="mt-lux-stack-xs h-px w-9 bg-lux-gold/42 md:mt-lux-stack-sm" aria-hidden />
          <h1
            id="comparison-ar-heading"
            className="mt-lux-stack-xs max-w-[min(42ch,100%)] font-display text-display-xl text-lux-ink"
          >
            مقارنة مشاريع غرب القاهرة — إطار تدقيق حول {siteConfig.shortName}
          </h1>
          <p className="lux-body mt-lux-stack-sm max-w-[54ch] text-lux-ink/68 md:mt-lux-stack-md">
            استخدم نفس العدسات لكل عرض: كثافة المخطط، الهيكل الأخضر، وصول الطرق، انضباط الجهة المصدرة، وما تطل
            عليه وحدتك عند التسليم. المشاريع المجاورة مثل VYE (سوديك) وBelle Vie (إعمار) مقارنات سوقية — لا انتماء
            ولا شراكة.
          </p>
        </header>

        <section className="border-b border-lux-ink/[0.06] py-10 md:py-12" aria-labelledby="comparison-framework-ar">
          <h2 id="comparison-framework-ar" className="font-display text-lux-display-sm font-medium text-lux-ink">
            عدسات التدقيق على المجمع قبل القائمة المختصرة
          </h2>
          <ul className="lux-body mt-4 max-w-[52ch] list-disc space-y-2 pr-5 text-lux-ink/68">
            <li>تخصيص الأرض قبل الواجهة — أين تجلس الكثافة وكيف تمسك المنظر مساحات خضراء.</li>
            <li>وصول الشرايين (محور الضبعة، الحلقة) مقابل الخصوصية — ضجيج وإطلالة على سرعتك اليومية.</li>
            <li>لغة السداد مقابل جداول الإصدار — العناوين التسويقية مقابل ما يُوقَّع.</li>
            <li>نوافذ التسليم لكل مجموعة — تجنب أرباع تسويق عندما تبني نموذجاً نقدياً.</li>
          </ul>
          <p className="lux-body mt-6 max-w-[52ch] text-lux-ink/68">
            تعميق:&nbsp;
            <Link href={localizedPathname("/blog/solana-west-vs-vye-belle-vie-buyer-framework-2026", "ar")} className={linkClass}>
              سولانا ويست مقابل VYE وBelle Vie
            </Link>
          </p>
        </section>

        <section className="border-b border-lux-ink/[0.06] py-10 md:py-12" aria-labelledby="comparison-product-ar">
          <h2 id="comparison-product-ar" className="font-display text-lux-display-sm font-medium text-lux-ink">
            داخل {siteConfig.shortName} — من الفيلا إلى الشقة ضمن مخطط واحد
          </h2>
          <p className="lux-body mt-4 max-w-[52ch] text-lux-ink/68">
            اقرأوا الأنواع بترابط قبل مقارنة المجمعات — الواجهات وحزم التشطيب تتحرك مع الإصدار.
          </p>
          <ul className="lux-body mt-5 max-w-[52ch] list-disc space-y-2 pr-5 text-lux-ink/68">
            <li>
              <Link href={localizedPathname("/properties/villas", "ar")} className={linkClass}>
                فيلات
              </Link>
            </li>
            <li>
              <Link href={localizedPathname("/properties/townhouses", "ar")} className={linkClass}>
                تاون هاوس
              </Link>
            </li>
            <li>
              <Link href={localizedPathname("/properties/twin-houses", "ar")} className={linkClass}>
                توين هاوس
              </Link>
            </li>
            <li>
              <Link href={localizedPathname("/properties/apartments", "ar")} className={linkClass}>
                شقق
              </Link>
            </li>
          </ul>
        </section>

        <section className="py-10 md:py-12" aria-labelledby="comparison-journal-ar">
          <h2 id="comparison-journal-ar" className="font-display text-lux-display-sm font-medium text-lux-ink">
            مقالات تقارب منافسين دون جداول نقاط مخترعة
          </h2>
          <ul className="lux-body mt-4 max-w-[52ch] list-disc space-y-2 pr-5 text-lux-ink/68">
            <li>
              <Link href={localizedPathname("/blog/solana-west-villas-vs-apartments-lifestyle-investment", "ar")} className={linkClass}>
                فيلات مقابل شقق — أسلوب عيش ومنطق احتفاظ
              </Link>
            </li>
            <li>
              <Link href={localizedPathname("/blog/solana-west-new-zayed-prices-payment-plan-2026", "ar")} className={linkClass}>
                أسعار وخطة سداد — مرجع 2026
              </Link>
            </li>
            <li>
              <Link href={localizedPathname("/location", "ar")} className={linkClass}>
                مزايا الموقع العربية
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </SectionMain>
  );
}
