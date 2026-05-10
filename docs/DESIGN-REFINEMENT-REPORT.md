# Solana West — Design system refinement report

Calmer, editorial ultra-luxury pass (May 2026). No IA or architectural changes; motion remains subtle; SEO and markup structure preserved.

## Color palette (current system)

| Token | Hex / role |
|-------|-------------|
| `lux.ivory` | `#fcfaf7` — primary canvas wash, viewport `theme-color` |
| `lux.paper` | `#f7f6f3` — section paper, cards |
| `lux.mist` | `#f1eee8` — soft fills, FAB gradient toe |
| `lux.sand` | `#e8e4dc` — sandtone sections |
| `lux.stone` | `#c4bdb2` — muted architectural stone (support) |
| `lux.gold` | `#b9a892` — champagne-leaning accent; reduced saturation vs. heavy gold |
| `lux.champagne` | `#c4b69a` — secondary warm highlight |
| `lux.ink` | `#2c2b28` — body/headlines (warm charcoal, not pure black) |
| `lux.charcoal` | `#1f1e1b` — deep ink shells, overlays, dark section bases |

Principles enforced in code:

- Ivory / sand gradients replace harsh white-on-black contrasts where sections allow.
- Ink sections use charcoal stops, not `#030303`-style flats.
- Gold appears as rules, separators, and focus rings at **low opacity** (≈22–35% borders; rail dots ≈28%).

## Typography

- Display scale unchanged in structure (`lux-hero`, `display-xl` / `display-lg`, micro eyebrows) but tuned toward **calmer line-length rhythm** via globals: softer hero text shadows, eyebrow rules, section headers with more vertical air between eyebrow → title → kicker.
- Body: Source Sans stack at slightly muted contrast on sand (`text-lux-ink/62–66` tiers) vs. punching pure `#000`.

## Section & shell refinements

- **`SectionShell`**: Paper/sand/ink gradients use warmer stops; inset highlights and bottom washes toned down; lifted shadow footprint reduced (~36px blur vs. 52px-class depth).
- **`SectionHeader`**: More gap between tiers; quieter rule line.
- **`GlobalCroRail`**: Lighter bar border/shadow; WA capsule without `translate-y` feedback; softened green gradient; divider dots muted gold.
- **`FinalConversionPanel`**: Quieter inset quote border; WA primary shadow moderated; ghost secondary uses `ring-offset-lux-charcoal`; white overlays less stark.

## Card & elevation system

- Global tokens: **`shadow-lux-soft`**, **`shadow-lux-card`**, **`lux-image`**, **`lux-depth`** reduced in spread and opacity (Tailwind `theme.extend.boxShadow`).
- **Home amenities** / **project amenities**: Hover lift (`translate-y`) removed; pacing uses layout offset (`pt-*`) instead of kinetic cards.
- **Project property types** & **projects hub**: Borders at ~5% ink; hover elevates via **shadow + border only**, no vertical transform.
- **`LuxuryImageShell`**: Softer outer ring (`ring-lux-ink/[0.045]`).

## Header & navigation

- Glass treatments lightened (`site-header-client`); logo hover micro-lift retained at **1px** (minimal).
- **`PrimaryNavigation`**: CTA and drawer treatments use softer emerald/shadow stacks; mobile link rows avoid “floating” transforms.

## Hero & cinematic

- (Prior pass retained) Reduced multiply overlays; gentler Ken Burns; softer glass KPI card.
- **`CinematicStoryMoment`** / **`CinematicInterlude`**: Warmer stone charcoals, lighter vignettes.

## Conversion & mobile

- **Sticky mobile CTA** (earlier): Softer bar; no aggressive `active:translate` on alternate cells.
- **WhatsApp FAB**: Press state uses opacity, not downward shift; breathe animation keyframes use lighter shadows.

## Footer

- Stone-tint hairline, expanded vertical rhythm, quieter gold on headings and links (implemented in `site-footer`).

## Image presentation

- Shared **`lux-image`** shadow is shallower site-wide; project/hub cards use **`shadow-lux-soft`** on hover where a stronger read is needed without “dashboard float.”

## Consistency QA checklist

- [x] Spacing: section clamps + `section-*` tokens drive vertical rhythm; shells share paper/sand/ink language.
- [x] Color: gold used sparingly; ink is warm charcoal; theme-color matches ivory.
- [x] Motion: no new heavy animation; reveals use small Y and short duration; cards avoid hover translate.
- [x] SEO: no H1/H2/schema or route changes in this pass.
- [x] Accessibility: focus rings still `lux-gold`; contrast checked on sand + paper (body text remains ≥ intended AA on primary surfaces).
- [x] Performance: no new image sizes or blocking scripts; shadow/blur values are CSS-only.

## Files touched in this refinement wave (reference)

- `tailwind.config.ts` — shadows, WA keyframes
- `app/layout.tsx` — `themeColor`
- `components/sections/section-shell.tsx`
- `components/conversion/global-cro-rail.tsx`, `final-conversion-panel.tsx`
- `components/contact/contact-channels-and-form-section.tsx`
- `components/projects-hub/projects-hub-project-cards-section.tsx`
- `components/projects/project-amenities-section.tsx`, `project-property-types-section.tsx`
- `components/home/amenities-section.tsx`
- `components/media/luxury-image-shell.tsx`
- `components/layout/whatsapp-floating-button.tsx`
- `components/navigation/primary-navigation.tsx`

*(Plus earlier-pass files: globals, hero, cinematic components, header, footer, CTA button, sticky CTA, motion reveal, investor strip, snapshot section.)*
