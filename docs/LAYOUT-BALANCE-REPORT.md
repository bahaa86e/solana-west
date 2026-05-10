# Layout balance report — desktop

**May 2026**

## Container discipline

| Token | Behaviour |
|-------|-----------|
| **`max-w-content`** (`theme.maxWidth.content`) | **`min(72rem, calc(100vw - 4.75rem))`** — avoids ultra-wide prose columns anywhere `default` container is used. |
| **`Container` `wide`** | **`min(76rem, calc(100vw - 4.75rem))`** — replaces 90rem “infinite SaaS strip” with bounded editorial plate. |
| **`Container` `editorial`** (new) | **`min(71rem, …)`** optional for ultra-tight hubs (not yet wired globally). |

## Horizontal rhythm

- **Section internals** continue to use **12-column** grids; **outer** width is now visually **coherent** with hero + rail.
- **`section-gap`** reduced cap: **`clamp(2.5rem, 4.25vw, 3.875rem)`** — desktop column gutters feel **intentional**, not billboard-scale.

## Vertical rhythm (`SectionShell`)

| Rhythm | Desktop intent |
|--------|----------------|
| **Default (`editorial`)** | **`lg:py-[clamp(5rem, 6.25vw, 6.875rem)]`** — trims previous **runaway vw** tails. |
| **Breath** | **`lg:py-[clamp(5.5rem, 6.5vw, 8rem)]`** — immersive but **bounded**. |
| **Compact** | **`lg:py-[clamp(3.25rem, 5.5vw, 4.75rem)]`** — denser feature bands. |

## Module-specific balance

- **Overview templates** (`*overview-section.tsx`): **`gap-section-gap`** + **`items-center`** on **`lg`** + **`gap-y-14`** so text + imagery **lock** horizontally (no orphaned stretch rows).
- **Snapshot lattice**: **`max-w-[min(68rem,100%)]`** centred — facts read as **one composition**, not edge-to-edge sprawl.

## Residual QA

- On **≤1280px** laptops, validate **masthead column** wrapping vs prism (no orphaned single-line aside).
- **`masterplan` overview** uses **`fit="contain"`** — ultrawide 21:9 may letterbox; acceptable for map fidelity; revisit if stakeholders want full-bleed vector.
