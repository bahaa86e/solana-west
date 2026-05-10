# Editorial flow report — desktop scrolling

**May 2026**

## Pacing levers

| Mechanism | Effect |
|-----------|--------|
| **Capped section padding** (`SectionShell` `lg` overrides) | Prevents **“valley of death”** whitespace between chapters; scroll velocity feels **curated**. |
| **Tighter `section-gap`** | Grids **breathe** without **disconnecting** siblings. |
| **Taller cinematic beats** (`CinematicStoryMoment` **`lg`/`xl` min-height**) | Restores **immersive punctuation** between dense copy bands — closer to **magazine fold → full-bleed → essay** cadence. |
| **Masterplan figure** | Responsive **aspect ladder** (`4:3 → 16:11 → 21:9`) + **`min-h` / `max-h` clamp** — **progressive disclosure** of scale drawing. |
| **Snapshot band** | **Centred max width** — transition from hero → facts reads as **intentional plate**, not stretched ticker. |
| **Trust + overview spreads** | **Vertical align centre** on **`lg`** — eye line **travels** text ↔ image without vertical “sag”. |

## Story-specific upgrades

- **Home project overview** — **sticky** right rail with **typographic emphasis** of comparative paragraph — creates **parallel reading track** while scrolling long left column (editorial device).
- **Hero masthead** — introduces **commercial spine** before first sand section — sets **acquisition tone** early.

## Still static (by design)

- No new **scroll-jacking** or **pinned multi-scene** stacks (performance + accessibility). Flow improvements are **spatial**, not **interaction-heavy**.

## Next narrative upgrades (optional)

- Introduce **shared “chapter numeral”** (`01 / 02`) in `SectionHeader` optional prop for long vertical pages (projects hub, blog index) — requires content model agreement.
