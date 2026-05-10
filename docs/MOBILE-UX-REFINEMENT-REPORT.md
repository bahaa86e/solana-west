# Mobile UX refinement report — Solana West

**Pass date:** May 2026  
**Objective:** Reduce dark, crowded, over-designed mobile patterns; shift toward bright, calm, premium rhythm with clearer conversion ergonomics.

## Summary of outcomes

| Area | Before concern | Direction taken |
|------|----------------|----------------|
| Vertical rhythm | Sections felt stacked/cramped | `SectionShell` adds path-specific **extra mobile padding** for editorial/breath/compact rhythms; contact grid **`gap-12 / max-lg:gap-14`**. |
| Safe areas | FAB / sticky bar collision risk | **`MobileMain`** bottom padding raised (home **`6rem`**, inner pages **`8.25rem`** + safe area). FAB sits **`6.5rem`** above bottom + safe inset; respects **`safe-area-inset-right`** on notch devices. |
| Sticky chrome | Heavy gradient + dark WhatsApp slab | **`StickyMobileCtaBar`**: paper base, subtle top border/shadow; WhatsApp column is **light sage** with **ink typography** — not a dark forest panel. Uses **divider** rails instead of competing borders. |
| Floating WhatsApp | Aggressive pulse + large hit target | **`max-lg`**: smaller control (**`3.375rem`**), higher bottom offset, **animations disabled**, solid **paper** shell + **muted shadow** + brand WhatsApp green on icon only. |

## Homepage-specific

- Hero content column **bottom padding** increased on small viewports so the glass card clears the sticky bar comfortably.
- Hero **glass prism**: **no backdrop blur on mobile**, brighter fill, **no inner glow** pseudo-shadow on mobile.

## Benchmark alignment (intent)

Touches the same ergonomic goals as **Jirian / Emaar / Apple-like calm**: fewer stacked effects, clearer touch targets hierarchy, quieter motion.

## Residual QA (manual)

- Verify **`MobileMain`** clearance on **`/thank-you`** and long pages with keyboard open (iOS).
- Spot-check **RTL** or **large dynamic type** if enabled in future.
