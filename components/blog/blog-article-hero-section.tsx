import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { Container } from "@/components/ui/container";
import type { BlogArticleDocument } from "@/data/blog/types";
import { BlogBreadcrumbs } from "@/components/blog/blog-breadcrumbs";
import { cn } from "@/lib/utils";

export function BlogArticleHeroSection({ doc }: { doc: BlogArticleDocument }) {
  const idPrefix = `blog-article-${doc.slug}`;
  const labelledById = `${idPrefix}-heading`;
  const dateLabel = new Date(doc.publishedIso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section
      id={`${idPrefix}-hero`}
      aria-labelledby={labelledById}
      className="relative bg-lux-paper shadow-[inset_0_-1px_0_rgba(10,10,10,0.06)]"
    >
      <Container as="div" size="wide" className="grid grid-cols-1 gap-0 lg:grid-cols-12 lg:items-stretch xl:gap-x-4">
        <div
          className={cn(
            "flex flex-col justify-end lg:justify-center lg:col-span-[5] xl:col-span-5",
            "pb-[clamp(3rem,9vw,5.5rem)] pt-[clamp(5.75rem,14vw,7.75rem)]",
            "lg:pb-[clamp(3.75rem,8vw,6.25rem)] lg:pt-[clamp(6.25rem,12vw,7.75rem)]",
          )}
        >
          <div className="max-w-lg xl:max-w-xl">
            <BlogBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: doc.title }]} />

            <p className="mt-8 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-lux-ink/36 md:mt-9">
              <time dateTime={doc.publishedIso}>{dateLabel}</time>
              {doc.authors && doc.authors.length > 0 ?
                <>
                  {" "}
                  <span aria-hidden className="text-lux-ink/20">
                    ·
                  </span>{" "}
                  <span>{doc.authors.join(" · ")}</span>
                </>
              : null}
            </p>

            <h1
              id={labelledById}
              className="mt-5 font-display text-display-xl leading-[1.06] tracking-[-0.02em] text-balance text-lux-ink md:mt-[1.375rem]"
            >
              {doc.title}
            </h1>
            <p className="mt-6 font-display text-lg font-normal tracking-[-0.012em] text-lux-ink/72 md:text-xl">{doc.deck}</p>
          </div>
        </div>

        <div
          className={cn(
            "relative min-h-[min(48vh,26rem)] border-t border-lux-ink/[0.06] lg:col-span-7 lg:min-h-[min(92dvh-6rem,44rem)] lg:border-l lg:border-t-0",
            "bg-lux-mist/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]",
          )}
        >
          <LuxuryFillImage
            src={doc.heroImage.src}
            alt={doc.heroImage.alt}
            sizes="(max-width: 1023px) 100vw, 52vw"
            priority
            quality={88}
            imgClassName="object-cover object-[center_46%]"
          />
          <div className="pointer-events-none absolute inset-[10%] z-[1] border border-lux-ink/[0.07]" aria-hidden />
        </div>
      </Container>
    </section>
  );
}
