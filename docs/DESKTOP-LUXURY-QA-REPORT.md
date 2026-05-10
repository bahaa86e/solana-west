# Desktop luxury QA checklist — Solana West

**May 2026** — manual verification recommended after deploy (esp. real device + 4K).

## Composition

- [ ] **Hero**: Prism + masthead **do not collide** at **1280×800** and **1512×982** (common laptops).
- [ ] **Hero**: **No duplicate** payment summary inside prism on desktop (aside only).
- [ ] **Project overview sticky rail**: Pull-quote **tracks** scrolling without overlapping footer CTA bands.

## Immersion / imagery

- [ ] **`CinematicStoryMoment`**: **Min-height** feels editorial (not squat) — check **architecture** + **aerial** beats.
- [ ] **Trust / overview spreads**: Ultrawide **21:9** shells **don't clip** focal subject awkwardly (`object-position` + crops).
- [ ] **Masterplan**: **`contain`** mode retains **map legibility** with new taller shell.

## Layout / grids

- [ ] **`wide`** pages (most routes) **don't exceed** intended **~76rem** comfortable reading island.
- [ ] **`default`** containers obey **72rem max** optics on **FAQ / transactional** narrower templates.

## Typography

- [ ] **H1 homepage** respects new **`lux-hero`** clamp across **720p → 4K**.
- [ ] **`SectionHeader`**: No awkward **widows** after **`max-ch`** tightening on multilingual copy (if introduced later).

## CTAs & conversion

- [ ] **Hero buttons** remain **readable** atop varied photography (green primary + translucent secondary).
- [ ] **`GlobalCroRail`** + **masthead facts** messaging **stay consistent** (no conflicting numbers vs snapshot).

## Performance / a11y

- [ ] **CLS**: Ken Burns transforms **remain GPU-contained** (`will-change` only on wrappers).
- [ ] **`prefers-reduced-motion`** still neutralises Framer oscillation.

## Regression matrix (spot)

| Route | Check |
|-------|-------|
| `/` | Hero, trust, overview, cinematic beats |
| `/projects/solana-west` | Overview figure |
| `/location`, `/master-plan` | Overview + immersive bands |
| `/blog/[slug]` | Article width vs new `max-w-content` |

## Benchmark alignment (intent)

Evaluated against aesthetic goals of **Jirian / Emaar / Aman / architecture editorials**:

- ✅ **Controlled max width** vs template sprawl  
- ✅ **Dedicated hero narrative column** beside identity glass  
- ✅ **Larger cinematic interludes**  
- ⚠️ **Further** polish possible via **custom art-directed breakpoints** beyond CSS grid (requires design comps)
