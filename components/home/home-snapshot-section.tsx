import { Container } from "@/components/ui/container";
import { homeSections } from "@/data/seo/home";
import { cn } from "@/lib/utils";

const { snapshot } = homeSections;

/**
 * Commercial fact lattice — AI-overview friendly, current sales sheet disclaimer visible.
 */
export function HomeSnapshotSection() {
  return (
    <section
      id="project-snapshot"
      aria-label="Project snapshot"
      className={cn("lux-post-hero-section relative z-[3] border-y border-lux-ink/[0.04]")}
    >
      <Container
        as="div"
        size="wide"
        className="py-[clamp(1.5rem,4vw,2.125rem)] md:py-[clamp(1.625rem,3.5vw,2.25rem)] lg:py-[clamp(1.75rem,2.75vw,2.375rem)]"
      >
        <p className="relative z-[2] mx-auto max-w-[56rem] text-center font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-lux-ink/48 md:text-[10.25px]">
          {snapshot.caption}
        </p>
        <dl className="relative z-[2] mx-auto mt-[clamp(1.25rem,3.2vw,1.75rem)] grid max-w-[min(68rem,100%)] grid-cols-2 gap-x-[clamp(1rem,3vw,2rem)] gap-y-[clamp(1rem,2.75vw,1.5rem)] sm:grid-cols-3 lg:grid-cols-6">
          {snapshot.rows.map((row) => (
            <div
              key={row.label}
              className="lux-post-hero-card rounded-[6px] px-[clamp(0.875rem,2.2vw,1.125rem)] py-[clamp(0.8125rem,2vw,1.125rem)] text-left"
            >
              <dt className="font-sans text-[9.5px] font-semibold uppercase tracking-[0.14em] text-lux-gold/[0.72] md:text-[10px]">
                {row.label}
              </dt>
              <dd className="mt-2 font-sans text-[0.8125rem] font-normal leading-snug tracking-[0.014em] text-lux-ink/[0.76] md:text-[0.84375rem] md:leading-[1.45]">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
