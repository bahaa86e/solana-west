import { BlogBreadcrumbs } from "@/components/blog/blog-breadcrumbs";
import { CinematicInteriorHero } from "@/components/hero/cinematic-interior-hero";
import type { BlogArticleDocument } from "@/data/blog/types";
import { cn } from "@/lib/utils";

export function BlogArticleHeroSection({ doc }: { doc: BlogArticleDocument }) {
  const idPrefix = `blog-article-${doc.slug}`;
  const labelledById = `${idPrefix}-heading`;
  const isArabic = /[\u0600-\u06FF]/.test(doc.title);
  const dateLabel = new Date(doc.publishedIso).toLocaleDateString(isArabic ? "ar-EG" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <CinematicInteriorHero
      sectionId={`${idPrefix}-hero`}
      aria-labelledby={labelledById}
      media={{
        src: doc.heroImage.src,
        alt: doc.heroImage.alt,
        sizes: "100vw",
        priority: true,
        imgClassName: "object-[center_46%]",
      }}
    >
      <div className="max-w-[min(41rem,100%)]">
        <BlogBreadcrumbs
          items={
            isArabic ?
              [{ label: "الرئيسية", href: "/ar" }, { label: "المدونة", href: "/ar/blog" }, { label: doc.title }]
            : [{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: doc.title }]
          }
        />

        <p className={cn("lux-article-meta mt-8 md:mt-9")}>
          <time dateTime={doc.publishedIso}>{dateLabel}</time>
          {doc.authors && doc.authors.length > 0 ?
            <>
              {" "}
              <span aria-hidden className="text-lux-ink/22">
                ·
              </span>{" "}
              <span>{doc.authors.join(" · ")}</span>
            </>
          : null}
        </p>

        <h1 id={labelledById} className={cn("lux-hub-h1 mt-6 md:mt-7")}>
          {doc.title}
        </h1>

        <p className={cn("lux-deck mt-6 max-w-[min(42rem,100%)] md:mt-[1.35rem]")}>{doc.deck}</p>
      </div>
    </CinematicInteriorHero>
  );
}
