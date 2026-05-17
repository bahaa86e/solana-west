import { Container } from "@/components/ui/container";
import type { BlogArticleDocument } from "@/data/blog/types";

export function BlogArticleIntroSection({ doc }: { doc: BlogArticleDocument }) {
  return (
    <section aria-label="Introduction" className="lux-post-hero-section border-t border-lux-ink/[0.04]">
      <Container as="div" size="wide" className="relative z-[2] py-section-xl">
        <div className="mx-auto max-w-readable space-y-6">
          {doc.intro.map((p, i) => (
            <p
              key={"intro-" + doc.slug + "-" + i}
              className="font-display text-lg font-normal leading-[1.8] tracking-[-0.008em] text-lux-ink/78 md:text-[1.0625rem] md:text-balance lg:text-xl"
            >
              {p}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
