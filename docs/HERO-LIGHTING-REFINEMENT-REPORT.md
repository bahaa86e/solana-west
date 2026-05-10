# Homepage hero — luxury lighting & atmosphere refinement

_Scope: `components/home/hero-section.tsx` only. Architecture, layout grid, hero copy sources, and image URLs unchanged._

## 1. Hero brightness adjustments

| Element | Direction |
|---------|-----------|
| **Photography plate** | `imgClassName`: `brightness-[1.045]`, `saturate-[1.052]`, `contrast-[0.975]` (desktop); **mobile** slightly gentler brightness/saturation so noise does not spike. |
| **Section letterbox fallback** | Base `bg` lifted from `#171514` → `#1f1d1b` (warmer charcoal, less “void”). |
| **Top / sky hemisphere** | New **paper-tint radial** (`z-[8]`) strengthened for **lift** (`rgba(255,253,249,0.22)` into transparent) vs the previous subdued highlight. |

## 2. Overlay adjustments

| Layer | Before | After |
|-------|--------|--------|
| **Primary mood wash (`z-[2]`)** | Dark amber/ink-heavy linear ramp + strong pulse (`0.08–0.13` opacity). | **Cream/paper** linear illumination + **pulse attenuated** to `0.035–0.055` so motion does not read as flickering dusk. |
| **Lateral wash** | Mixed at `opacity-[0.62]` with middling ivory. | **Lower blend strength** (`0.38` / `0.34` mobile), **lighter stops** (`rgba(255,253,249,0.18)`). |
| **Teal dodge accent** | `color-dodge` teal-grey **0.07** opacity — could read muddy on greens. | Replaced with **low-opacity bronze overlay** (`mix-blend-overlay`, **0.038**) for neutrality. |
| **Top-down ink stack (`z-[4]`…`z-[6]`)** | Multi-layer **`lux-ink` up to `/58`** + **`#141210` bottom veil** → heavy noir. | **Sky veil**: `lux-paper` translucency; **readability scaffold**: softened warm neutrals **`rgba(36,34,31,~0.12–0.42)`** instead of stacked near-black gradients; lateral vignette capped near **22%**. |
| **Corner radial** | `rgba(24,22,20,0.32)`. | **`0.14` / mobile `0.12`** — enough depth for headings without crushing mid-tones. |
| **Lower half lift** | `rgba(42,36,32,0.28)` brown block. | **12–14%** warm shadow only — typography still anchors without a “storm cloud” base. |

## 3. Contrast adjustments

- **Reduced global contrast competition** between stacked gradients (fewer simultaneous dark multipliers).
- **Glass prism** gradient: brighter **paper-forward** stops (`from-white/[0.2]`, mid `lux-paper`, bottom `rgba(48,44,39,0.52)` vs near-opaque `#161412`).
- **Eyebrow chip & payment chips**: swapped **black-tint fills** → **white/glass fills** (`bg-white/[0.1]`–`0.12`) for editorial daylight balance.
- **Secondary CTA (ghost)**:** `bg-black/18` → `bg-white/10`**, higher border luminance → less “fighting” the brighter plate.

## 4. Mobile crop refinements

| Control | Before | After |
|---------|--------|--------|
| **Vertical over-scan** | `min-h-[112%]` — aggressive crop, can crush lawns / feel zoomed | **`106%`** — more breathable field of view |
| **`object-position`** | `center_38%` | **`center_32%`** — slightly more **sky / tree canopy**, reads more “day resort” |

## 5. Final emotional mood evaluation

**Intent achieved:** Shift from **“noir architectural trailer” → “expensive calm daylight foyer.”** Brightness-first, restrained shadow, creams instead of blacks, softened CTA slab.

**Residual risk:** If the underlying WebP skews warm already, saturation lift may need a **minus 2–3%** tweak per art-direction pass—current values stay within typical resort-hero normalization.

_Gulf benchmark:_ Closer to **Emaar / Four Seasons Residence** palettes (bright base + soft vignette + frosted editorial UI) than to **teaser-grade night grading**. Still issuer photography—not bespoke SOHO House—so ceiling remains **high-7/low-8 emotional band** versus unlimited CGI hero budgets.

## 6. Before vs after luxury direction notes

| Dimension | Before | After |
|-----------|--------|--------|
| **Energy** | Low-lux nocturnal, heavy | **Bright, optimistic, airy** |
| **Depth** | Vignette-forward, dramatic | **Lateral cream lift + restrained floor shadow** |
| **UI coupling** | Dark glass prism + black fills | **Frosted paper glass + luminous chips** |
| **Motion pulse** | Noticeable dusk pump | **Whisper ambience** |

---

_End of QA report._
