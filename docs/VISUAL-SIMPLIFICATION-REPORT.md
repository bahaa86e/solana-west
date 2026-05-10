# Visual simplification report — Solana West (mobile-led)

**Pass date:** May 2026  
**Intent:** Remove “cheap glass” and stacked chrome; converge on restrained editorial surfaces (Aman / Emaar / calm Apple-like luxury).

## What was reduced or removed on small screens

| Pattern | Location | Change |
|---------|----------|--------|
| Heavy backdrop blur | `HeroSection` content prism | **Disabled on `max-lg`** |
| Nested frosted overlays | Hero eyebrow capsule | **`backdrop-blur-none` on mobile**, softer gold dot |
| Dark forest gradients | `StickyMobileCtaBar` WhatsApp column | → **Pale sage tiles** |
| Decorative inner glow | Hero prism (`after:`) | **Removed on mobile** |
| Thick glass form shell | Contact form wrapper | **Solid paper / light border on mobile**; gradient+blur confined to **`md+`** |
| Dashboard-like WA rail | `GlobalCroRail` CTA | **Light mint panel** + ink subcopy (no white-on-forest stack) |
| Input “studio” chrome | `LeadInquiryForm` | **No gradient / blur** — paper + single inset highlight |
| Ambient motion | `WhatsAppFloatingButton` | **No breathe animation on `max-lg`** |

## Global typography tokens

**File:** `tailwind.config.ts` — `display-lg` **lower minimum optical size** + **calmer line-height/letter-spacing** for section titles.

**File:** `app/globals.css` — `.lux-section-head` gains **mobile-specific** looser line-height / tracking.

**File:** `components/sections/section-shell.tsx` — **Added mobile padding headroom** so sections do not visually collide when chrome is simpler.

## What was intentionally *not* stripped

- **Hero** still uses a **layered** (not flat) grade for **cinema depth** — but weights are **asymmetric**: mobile favours **lift**, desktop keeps **gentle anchor**.
- **Desktop** may still use subtle blur in contact column for depth — **mobile stays flat** for clarity.

## Design debt / follow-ups (optional)

- Audit **property cards** & **amenities grid** for duplicate `ring` + `shadow` stacks on touch devices.  
- Consider a **single** shared token file for “mobile flat / desktop depth” to avoid drift.
