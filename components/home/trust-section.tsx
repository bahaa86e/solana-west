import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import {
  editorialBodyStack,
  editorialLandscapeAspectProminent,
  editorialSplitCopy,
  editorialSplitGrid,
  editorialSplitMedia,
} from "@/lib/media/editorial-image-layout";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSections } from "@/data/seo/home";
import { solanaWestMedia } from "@/data/media/solana-west";

const { trust } = homeSections;

export function TrustSection() {
  return (
    <SectionShell
      id="developer"
      aria-labelledby="developer-heading"
      tone="sand"
      containerSize="wide"
      depth="lifted"
      accentRim
    >
      <div className={editorialSplitGrid}>
        <div className={editorialSplitCopy}>
          <div>
            <SectionHeader
              id="developer-heading"
              eyebrow={trust.eyebrow}
              title={trust.title}
            />
            <div className={editorialBodyStack}>
              {trust.paragraphs.map((paragraph, i) => (
                <p key={i} className="lux-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        <LuxuryImageShell
          hover="lift"
          frame="editorial"
          aspectClassName={editorialLandscapeAspectProminent}
          className={editorialSplitMedia}
          frameAccent={
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-lux-ink/[0.05] via-transparent to-lux-paper/[0.04]" aria-hidden />
          }
        >
          <LuxuryFillImage
            src={solanaWestMedia.trustAnchor.src}
            alt={solanaWestMedia.trustAnchor.alt}
            sizes="(max-width: 1023px) 100vw, min(928px, 58vw)"
            crop="editorialWideLow"
            treatment="rich"
          />
        </LuxuryImageShell>
      </div>
    </SectionShell>
  );
}
