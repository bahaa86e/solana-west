import { Container } from "@/components/ui/container";
import type { BlogArticleDocument } from "@/data/blog/types";

export function BlogArticleIntroSection({ doc }: { doc: BlogArticleDocument }) {
  return (
    <section aria-label="Introduction" className="border-t border-lux-sand bg-lux-mist/35">
      <Container as="div" size="wide" className="py-section-xl">
        <div className="mx-auto max-w-readable space-y-6">
          {doc.intro.map((p, i) => (
            <p
              key={`intro-${doc.slug}-${i}`}
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
