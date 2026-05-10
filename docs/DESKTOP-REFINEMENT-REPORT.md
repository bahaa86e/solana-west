# Desktop luxury editorial refinement report — Solana West

**May 2026** — holistic pass to lift **large-viewport** polish (≥ `lg`) toward premium architecture editorial benchmarks (Jirian / Emaar / Aman calibre).

## Problems addressed

| Symptom | Root cause (observed) | Response |
|---------|------------------------|----------|
| Stretched, “SaaS-wide” reading | `wide` container at **90rem** + loose `section-gap`/`section` scales | **Narrowed `wide`** (~**76rem** cap with viewport margin); **`max-w-content`** now **min(72rem, vw)**; **section vertical rhythm** capped on **`lg`** via `SectionShell`. |
| Hero text “floating” vs image | 12-col grid with **empty** right span; copy bottom-anchored only | **Dual-column hero on desktop**: left **prism** (capped width); right **acquisition masthead** (summary + commercial facts) **in the frame**. **Vertically centred** grid; **subject-biased `object-position`** on photography. |
| Isolated story sections | Ultra-tall `py` from `11vw`/`12vw` clamps | **Breath / default / compact** rhythms rewritten: **mobile** retains generous clamps; **`lg:`** uses **fixed vw ceilings** to stop runaway whitespace. |
| Small “postage stamp” figures | **4:3** hero imagery on many overviews | Homepage **trust** + hub **overview** patterns: **`lg:aspect-[21/9]`** + **`min-h`** + richer **`sizes`** for large viewports. |

## Key file touchpoints

- `components/ui/container.tsx` — `wide`, new optional **`editorial`**
- `components/sections/section-shell.tsx` — **rhythmPadding** `lg` caps
- `components/home/hero-section.tsx` — composition + masthead
- `tailwind.config.ts` — **`section-gap`**, **`lux-hero`**, **`maxWidth.content`**
- Overview sections (projects, hub, location, master-plan, about, transactions, properties) — **grid rhythm + cinematic figures**
- `components/home/masterplan-section.tsx`, `cinematic-story-moment.tsx`, `home-snapshot-section.tsx`, `section-header.tsx`

## Non-goals (this pass)

- Replacing photography assets or rewriting long-form narrative copy site-wide  
- Replacing animation system wholesale (Framer remains; Ken Burns tweaked selectively)
