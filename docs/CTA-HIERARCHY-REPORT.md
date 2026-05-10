# CTA hierarchy report — Solana West

**Pass date:** May 2026  
**Focus:** Mobile clarity of primary vs secondary actions and reduction of “dark dashboard” CTAs.

## System map (mobile)

| Layer | Component | Primary action | Secondary / alt |
|-------|-----------|----------------|-----------------|
| Sticky bar | `StickyMobileCtaBar` | WhatsApp (wide cell) | Call · Contact link |
| Floating (non-home) | `WhatsAppFloatingButton` | WhatsApp | — |
| Header | `PrimaryNavigation` + `CtaButton` | WhatsApp compact | Nav links |
| Rail | `GlobalCroRail` | WhatsApp strip | Commercial facts (read) |
| Hero | `HeroSection` | **WhatsApp** (`whatsappOnDark`) | **Prices** (ghost-style on plate) |
| Forms | `LeadInquiryForm` | Submit enquiry | WhatsApp escalation |

## Changes to hierarchy & styling (`CtaButton` variants)

- **`whatsapp`:** Moved from dark forest gradient to **light sage panel** (`#eaf2ee`) with **deep green text** (`#1f3b30`) — reads as luxury editorial, not crypto UI.
- **`whatsappOnDark`:** Replaced translucent “frost stack” with **solid premium green** (`#2f5c4c`) + clear **paper ring offset** — primary action is unmistakable on hero plates.
- **`primary`:** Softened shadows and border weight; maintains contrast on sand/paper sections.
- **`inverse`:** Lighter lifts, reduced black-heavy shadow.

## Sizes (mobile ergonomics)

- **`sm` / `md` / `lg`** heights and tracking **tuned down on `max-lg`** for calmer typography and slightly smaller min-heights — less “banner button” aggression.

## Sticky vs FAB

- **Homepage (`/`)**: FAB **hidden below `lg`** (`WhatsAppFloatingButton`) to avoid triple WhatsApp crowding — sticky bar owns mobile conversion.
- **Other routes**: FAB **raised** and **shrunk**; **pulse disabled** under `lg` — hierarchy = **sticky (always)** + **FAB (accent)**.

## Residual considerations

- After this pass, **`whatsapp`** and rail/sticky visuals are intentionally **consistent** (light botanical greens). Validate brand approval vs strict WhatsApp trademark colour usage if campaigns require literal brand green fills everywhere.
