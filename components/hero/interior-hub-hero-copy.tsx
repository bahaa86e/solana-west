import { cn } from "@/lib/utils";

type InteriorHubHeroCopyProps = {
  eyebrow: string;
  headingId: string;
  title: string;
  lead: string;
  supporting: string;
  /** Default fits most hubs; project hero uses a slightly narrower editorial column. */
  contentMaxClass?: string;
};

/**
 * Shared serif/sans hierarchy for interior cinematic heroes — editorial rhythm and measure.
 */
export function InteriorHubHeroCopy({
  eyebrow,
  headingId,
  title,
  lead,
  supporting,
  contentMaxClass = "max-w-[min(41rem,100%)]",
}: InteriorHubHeroCopyProps) {
  return (
    <div className={cn("lux-prose-stack", contentMaxClass)}>
      <p className="lux-eyebrow">{eyebrow}</p>

      <h1 id={headingId} className={cn("lux-hub-h1 mt-7 md:mt-8")}>
        {title}
      </h1>

      <p className={cn("lux-hero-lead mt-[clamp(1.75rem,4vw,2.65rem)]")}>{lead}</p>

      <p className={cn("lux-hero-support mt-[clamp(1.875rem,3.85vw,2.6rem)] md:mt-10")}>{supporting}</p>
    </div>
  );
}
