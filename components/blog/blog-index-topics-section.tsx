import Link from "next/link";

import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { BlogIndexPageModel } from "@/data/blog/blog-index-model";
import { cn } from "@/lib/utils";

export function BlogIndexTopicsSection({ model }: { model: BlogIndexPageModel }) {
  const { idPrefix, topicGroupsDetailed } = model;
  const headingId = `${idPrefix}-topics-heading`;

  return (
    <SectionShell id={`${idPrefix}-topics`} aria-labelledby={headingId} tone="paper" containerSize="wide">
      <SectionHeader
        id={headingId}
        eyebrow="Topical structure"
        title="Lanes that future briefings file under"
      />

      <div className="mt-14 space-y-0 border-t border-lux-ink/[0.07] md:mt-16">
        {topicGroupsDetailed.map((group, i) => {
          const sid = `${idPrefix}-topic-${group.topic}`;
          return (
            <section
              key={group.topic}
              id={sid}
              aria-labelledby={`${sid}-title`}
              className={cn(
                "border-b border-lux-ink/[0.07] py-12 md:py-14",
                i === 0 && "pt-10 md:pt-12",
              )}
            >
              <p className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.26em] text-lux-ink/40">
                {group.eyebrow}
              </p>
              <h3
                id={`${sid}-title`}
                className="mt-4 max-w-[28ch] font-display text-[1.5rem] font-normal tracking-[-0.014em] text-lux-ink md:text-[1.6875rem]"
              >
                {group.title}
              </h3>
              <div className="mt-7 max-w-readable space-y-5">
                {group.body.map((p, j) => (
                  <p
                    key={`${sid}-b-${j}`}
                    className="text-[0.9375rem] font-normal leading-[1.75] tracking-[0.012em] text-lux-ink/70 md:text-base"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <p className="mt-8 text-[0.8125rem] font-normal leading-relaxed text-lux-ink/54">
                <Link
                  href={group.pillar.href}
                  className="border-b border-lux-ink/[0.12] pb-px font-display text-[0.9375rem] tracking-[-0.01em] text-lux-ink/72 transition-colors duration-400 hover:border-lux-gold/40 hover:text-lux-ink"
                >
                  {group.pillar.label}
                </Link>
                <span className="mt-2 block text-[11px] font-normal uppercase tracking-[0.16em] text-lux-ink/38 md:mt-2.5">
                  {group.pillar.context}
                </span>
              </p>

              {group.articles.length > 0 ?
                <ul className="m-0 mt-10 list-none space-y-4 border-t border-lux-ink/[0.05] pt-10 p-0" role="list">
                  {group.articles.map((a) => (
                    <li key={a.slug}>
                      <article>
                        <h4 className="m-0 font-display text-lg font-normal tracking-[-0.012em] text-lux-ink md:text-xl">
                          <Link
                            href={`/blog/${a.slug}`}
                            className="underline-offset-[10px] transition-colors hover:underline hover:decoration-lux-ink/[0.2]"
                          >
                            {a.title}
                          </Link>
                        </h4>
                        <p className="mt-2 text-[0.8125rem] font-normal uppercase tracking-[0.18em] text-lux-ink/38">
                          {new Date(a.publishedIso).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                        <p className="mt-2 max-w-readable text-[0.9375rem] leading-relaxed text-lux-ink/62">{a.deck}</p>
                      </article>
                    </li>
                  ))}
                </ul>
              : <p className="mt-10 max-w-readable border-t border-lux-ink/[0.05] pt-10 text-[0.9375rem] leading-relaxed text-lux-ink/48">
                  Posts in this lane will archive here alongside the pillar route — none indexed yet.
                </p>}
            </section>
          );
        })}
      </div>
    </SectionShell>
  );
}
