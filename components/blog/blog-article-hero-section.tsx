import { BlogBreadcrumbs } from "@/components/blog/blog-breadcrumbs";
import { CinematicInteriorHero } from "@/components/hero/cinematic-interior-hero";
import type { BlogArticleDocument } from "@/data/blog/types";
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
    <CinematicInteriorHero
      sectionId={`${idPrefix}-hero`}
      aria-labelledby={labelledById}
      media={{
        src: doc.heroImage.src,
        alt: doc.heroImage.alt,
        sizes: "100vw",
        priority: true,
        quality: 88,
        imgClassName: "object-[center_46%]",
      }}
    >
      <div className="max-w-[min(41rem,100%)]">
        <BlogBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: doc.title }]} />

        <p className="mt-8 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-lux-ink/42 md:mt-9">
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

        <h1
          id={labelledById}
          className="mt-6 text-balance font-display text-display-xl leading-[1.06] tracking-[-0.022em] text-lux-ink md:mt-7"
        >
          {doc.title}
        </h1>
        <p
          className={cn(
            "mt-6 font-display text-[1.1875rem] font-normal leading-[1.45] tracking-[-0.013em] text-lux-ink/74 md:text-xl lg:text-[1.3125rem]",
          )}
        >
          {doc.deck}
        </p>
      </div>
    </CinematicInteriorHero>
  );
}
