# Hero composition report — desktop editorial

**May 2026**

## Structural change

Previously, the hero grid placed the **glass prism** on the **left (~7 cols)** while the **remaining columns were intentionally empty**, visually disconnecting typography from the cinematic plate once the viewport exceeded ~1440px.

### New structure ( **`lg:` and up** )

1. **Left stack (`lg:col-span-5`)** — Vertically **`items-center`** (no longer **`items-end`**) so fold reads **magazine** not “footer”.
2. **Prism card** — **`lg:max-w-[min(42rem,100%)]`** anchors measure; duplicated **desktop payment bloc inside the prism removed** — summary now lives exclusively in masthead (**single source**, less glass noise).
3. **Right masthead (`lg:col-span-7`)** — **`Acquisition reference`** eyebrow (`croMessaging.heroAnnotationTitle`), **`payment.summary`**, and a **<dl>** of factual anchors (`croCommercialFacts`) with **thin left border**. This column **inherits the scene** behind it (immersive linkage).

## Photography

- **Inset zoom** enlarged on **`lg`** (`[-7%, -3.75%, …]` vs mobile crop) → **presence** vs empty canvas.
- **Object position** biased **`58% / 42%`** ( refining to **`xl: 56% / 40%`**) → **breathing corridor** beside left typographic stack.

## CTA choreography

- **Row** clustering: **`lg:flex-nowrap`** + proportional **`flex-1`** widths — avoids two **Massive Equal Buttons**.
- Prism width cap naturally constrains CTAs → **premium acquisition desk posture**, not web-app split buttons.

## Accessibility

- Aside carries **`aria-label="Acquisition reference beside hero photography"`** (non-interactive supplementary content).
