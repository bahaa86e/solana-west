import Link from "next/link";

import { FinalConversionPanel } from "@/components/conversion/final-conversion-panel";
import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/cta-button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { solanaWestCanonicalFiles, solanaWestMedia } from "@/data/media/solana-west";
import { SOLANA_WEST_AR_FAQ_GROUPS, SOLANA_WEST_FAQ_SHARED_INTRO_AR } from "@/data/faq/solana-west-faq-ar";
import { siteConfig } from "@/data/site";
import { englishPathToArabicPath } from "@/lib/i18n/paths";
import { cn } from "@/lib/utils";

const ar = englishPathToArabicPath;

const snapshotRows = [
  ["بداية الأسعار", "من 9.8 مليون جنيه"],
  ["تقسيط سولانا ويست", "5٪ مقدم · حتى 10 سنوات"],
  ["الجهة المطوّرة", siteConfig.developer],
  ["العنوان", "نيو زايد · محور الضبعة"],
  ["التسليم", "من 2027 بحسب المرحلة"],
  ["أنواع المنازل", "شقق · تاون هاوس · توين هاوس · فلل"],
] as const;

/** Arabic homepage — editorial copy with the same commercial facts. */
export function ArabicHomePage() {
  const faqPeek = SOLANA_WEST_AR_FAQ_GROUPS.flatMap((g) => g.items).slice(0, 6);

  return (
    <>
      <section
        aria-labelledby="ar-home-hero-heading"
        className={cn(
          "relative isolate overflow-hidden",
          "min-h-[100dvh] supports-[height:100svh]:min-h-[100svh] bg-[#efeae2]",
        )}
      >
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <LuxuryFillImage
            src={solanaWestMedia.hero.src}
            mobileSrc={solanaWestCanonicalFiles.heroDaylightMobile}
            alt="فيلات ومساحات خضراء في سولانا ويست نيو زايد من ORA Developer Egypt."
            sizes="100vw"
            priority
            quality={92}
            filmGrade={false}
            imgClassName={cn(
              "object-cover brightness-[1.085] saturate-[1.035] contrast-[0.982]",
              "max-lg:min-h-[104%] max-lg:object-[center_30%] lg:object-[58%_42%]",
            )}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#fdfcfa]/45 via-transparent to-[#f5f0e6]/35" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-[#faf7f2]/85 via-[#fdfcfa]/20 to-transparent" />
        </div>

        <Container
          as="div"
          size="wide"
          className="relative z-[15] flex min-h-[100dvh] supports-[height:100svh]:min-h-[100svh] flex-col justify-end pb-[max(5.75rem,calc(env(safe-area-inset-bottom,0px)+5rem))] pt-[clamp(5.25rem,calc(env(safe-area-inset-top,0px)+5rem),7rem)] lg:justify-center lg:pb-[clamp(2.25rem,5vh,3.75rem)] lg:pt-[clamp(5.75rem,min(11vh,6.5rem),6.5rem)]"
        >
          <article
            className={cn(
              "max-w-[min(40rem,100%)] rounded-[6px] border border-lux-ink/[0.08] bg-[#fdfcfa]/[0.97] px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(1.35rem,3.8vw,2.25rem)]",
              "shadow-lux-soft",
            )}
          >
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-lux-ink/45 lg:text-[0.6875rem]">
              نيو زايد · محور الضبعة
            </p>
            <span className="mt-4 mb-6 block h-px max-w-[2.75rem] bg-lux-ink/[0.1]" aria-hidden />
            <h1
              id="ar-home-hero-heading"
              className={cn(
                "max-w-[min(22ch,100%)] text-balance font-display font-medium text-lux-ink",
                "text-[clamp(2rem,2.4vw+0.92rem,2.875rem)] leading-[1.08] tracking-[-0.022em]",
              )}
            >
              سولانا ويست نيو زايد من ORA Developer Egypt
            </h1>

            <p className="mt-[clamp(1rem,2.5vw,1.5rem)] max-w-[min(36rem,100%)] text-pretty font-sans text-lux-lead font-normal leading-[1.66] tracking-[0.006em] text-lux-ink/[0.78]">
              مجتمع سكني على مساحة 316 فداناً في غرب القاهرة، بإيقاع منخفض الكثافة ومساحات خضراء ممتدة ومنازل مصممة للخصوصية. فلل سولانا ويست، التاون هاوس، التوين هاوس وشقق سولانا ويست تُطرح وفق إصدارات واضحة للأسعار وخطط السداد.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
              <CtaButton
                href={siteConfig.whatsAppUrl}
                external
                variant="whatsapp"
                size="lg"
                leadingIcon={<WhatsAppIcon className="size-[1.125rem]" />}
                className="w-full min-h-[3.25rem] px-12 sm:w-auto sm:min-w-[15rem]"
                data-track="whatsapp_click"
                data-track-placement="ar_home_hero_whatsapp"
              >
                احصل على الأسعار
              </CtaButton>
              <CtaButton
                href={ar["/prices"]!}
                variant="secondary"
                size="lg"
                className="w-full min-h-[3.25rem] sm:w-auto"
                data-track="cta_click"
                data-track-placement="ar_home_hero_prices"
              >
                الأسعار وأنظمة السداد
              </CtaButton>
            </div>
          </article>
        </Container>
      </section>

      <section className="border-t border-lux-ink/[0.06] bg-lux-paper py-section-block" aria-label="لمحة سريعة">
        <Container as="div">
          <p className="lux-eyebrow text-lux-ink/46">لمحة سريعة</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {snapshotRows.map(([k, v]) => (
              <div key={k} className="rounded-[6px] border border-lux-ink/[0.06] bg-lux-paper p-5 shadow-lux-card">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lux-ink/38">{k}</p>
                <p className="mt-2 font-display text-lg text-lux-ink/[0.9]">{v}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section-block" aria-labelledby="ar-home-journey">
        <Container as="div" className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 id="ar-home-journey" className="font-display text-display-xl text-lux-ink">
              دليل سريع لأسعار وموقع سولانا ويست نيو زايد
            </h2>
            <p className="mt-6 text-[0.9375rem] leading-[1.76] text-lux-ink/72">
              ابدأ بالمكان، ثم اقرأ المخطط، ثم قارن أسعار سولانا ويست وخطة التقسيط على أساس نوع الوحدة والمرحلة. الهدف أن تصل إلى قرار واضح، لا إلى ضجيج تسويقي.
            </p>
            <ul className="mt-8 space-y-3 text-[0.9375rem] text-lux-ink/72">
              <li>
                <Link className="underline decoration-lux-gold/35 underline-offset-4 hover:text-lux-ink" href={ar["/location"]!}>
                  موقع سولانا ويست ومحاور الوصول
                </Link>
              </li>
              <li>
                <Link className="underline decoration-lux-gold/35 underline-offset-4 hover:text-lux-ink" href={ar["/payment-plan"]!}>
                  تقسيط سولانا ويست وخطة السداد
                </Link>
              </li>
              <li>
                <Link className="underline decoration-lux-gold/35 underline-offset-4 hover:text-lux-ink" href={ar["/projects/solana-west"]!}>
                  مشروع سولانا ويست في نيو زايد
                </Link>
              </li>
            </ul>
          </div>
          <LuxuryImageShell className="lg:col-span-7 aspect-video rounded-[6px]" hover={false}>
            <LuxuryFillImage
              src={solanaWestMedia.projectOverview.src}
              alt="تصميم معماري عصري ومساحات خضراء في مشروع سولانا ويست نيو زايد."
              sizes="(max-width: 1024px) 100vw, 58vw"
              quality={84}
              crop="editorialWideLow"
              treatment="rich"
            />
          </LuxuryImageShell>
        </Container>
      </section>

      <section className="border-t border-lux-ink/[0.05] bg-lux-mist/22 py-section-block" aria-labelledby="ar-home-faq">
        <Container as="div">
          <div className="max-w-readable">
            <p className="lux-eyebrow text-lux-ink/46">أسئلة مختارة</p>
            <h2 id="ar-home-faq" className="mt-3 font-display text-display-xl text-lux-ink">
              أسئلة شائعة عن سولانا ويست نيو زايد
            </h2>
            <p className="mt-4 lux-body text-lux-ink/67">{SOLANA_WEST_FAQ_SHARED_INTRO_AR}</p>

            <dl className="mt-10 grid gap-10 md:grid-cols-2">
              {faqPeek.map((item) => (
                <div key={item.question}>
                  <dt className="font-display text-lg text-lux-ink md:text-xl">{item.question}</dt>
                  <dd className="mt-3 m-0 text-[0.9375rem] leading-[1.75] text-lux-ink/72">
                    <span className="block text-[0.8125rem] text-lux-ink/55">خلاصة — {item.aiSnippet}</span>
                    <span className="mt-2 block">{item.answer}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <CtaButton href={ar["/faq"]!} variant="secondary" size="lg">
                عرض الأسئلة الشائعة
              </CtaButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-lux-ink/[0.08] bg-[#38342f] pb-[clamp(3.75rem,10vw,6.75rem)] pt-[clamp(3.25rem,8vw,4.75rem)]" aria-labelledby="ar-home-final">
        <Container as="div">
          <FinalConversionPanel
            headingId="ar-home-final"
            eyebrow="استشارة خاصة"
            title="اطلب أسعار سولانا ويست وخطة التقسيط"
            supporting="أرسل نوع الوحدة، ميزانيتك التقريبية، وأفق الشراء أو الاستثمار. نرتّب لك الصورة التجارية بوضوح: السعر، المتاح، خطة السداد، وما يلزم مراجعته قبل الحجز."
            primaryLabel="تواصل عبر واتساب"
            secondaryLabel="احجز زيارة للمشروع"
            secondaryHref={ar["/contact"]!}
            whatsAppTrackPlacement="ar_home_final_whatsapp"
          />
        </Container>
      </section>
    </>
  );
}
