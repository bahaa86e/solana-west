# Hero readability report — Solana West (mobile-first)

**Pass date:** May 2026  
**Goal:** Preserve readable headline/supporting copy without “muddy” hero photography — optimistic daylight luxury, still editorial.

## Photography treatment

**File:** `components/home/hero-section.tsx`

- **Mobile lifts:** `max-lg:brightness-[1.092]`, slightly lower **contrast** (`max-lg:contrast-[0.96]`), controlled **saturation** — adds air without blowing highlights.

## Overlay stack (mobile-specific reductions)

Applied **lighter bottom anchoring**:

- **`z-[5]`** bottom gradient: **~half** prior alpha weights on **`max-lg`**.
- **`z-[6]`** lateral / mobile column: softened; **extra top paper lift** (`to-lux-paper/[0.14]`).
- **`z-[7]`** radial vignette: **much lighter** footprint on **`max-lg`**.
- **`z-[8]`** top “skylight” soft-light: slightly **stronger opacity** on **`max-lg`** — pulls sky/air forward.
- **`z-[9]`** bottom wash: **shorter height** + **mist tone** vs warm soot.

**Sky veil (`z-[4]`):** stronger **`from-lux-paper`** on **`max-lg`** — reduces gloom in upper field.

Supporting layers (cream wash / warm pulse) tweaked so **narrow viewports skew brighter**, not heavier.

## Glass content prism

- **`max-lg:backdrop-blur-none`** — removes frosted ambiguity over already-busy foliage/sky edges.
- **Brighter fills** (`from-white` / `via-white`) on **`max-lg`**, **drops inner after-glow** on mobile (`max-lg:after:shadow-none`).

## Typography

- **H1:** `max-lg:leading-[1.07]` — avoids cramped descenders without oversizing type.
- **Community line:** `max-lg:leading-[1.72]` — breathable body rhythm.
- **Payment strip (mobile-only block):** no blur shell; stronger **paper** fill for legibility.

## CTA readability

- Buttons: **solid primary green** variant on dark plate (`whatsappOnDark`) + brighter **ghost** Prices control; stripped **heavy black shadows** on mobile.

## Quick visual QA checklist

- [ ] H1 readable on **bright sky** clips and **shadowed greenery** clips.  
- [ ] Badge + payment line readable without **outline halos**.  
- [ ] No banding/mud line **between image and sticky bar**.  
- [ ] Thumb reach: WhatsApp hero CTA clears **rounded device corners**.
