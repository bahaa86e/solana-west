# Typography hierarchy report — desktop

**May 2026**

## Token adjustments

### Display hero (`lux-hero`)

- Clamp refined to **`clamp(2rem, 3vw + 0.94rem, 3.375rem)`** — slightly **calmer cap** / progressive scale vs prior aggressive **4.5vw** middle term (still bounded by max).
- Preserves **luxury presence** without **billboard inflation** on 27" panels.

### Section titles (`SectionHeader`)

- **Character widths**: **`md: max-w-[32ch]`**, **`lg: max-w-[36ch]`** (trimmed upper ch count).
- **`lg:leading-[1.08]`** layered on **`text-display-lg`** for **airy architectural headlines**.

### Cinematic story captions (`CinematicStoryMoment`)

- Copy column narrowed to **`max-w-[min(56rem,...)]`** expanding to **`58rem`** on **`xl`** — **optical measure** tighter to premium editorial spreads.

### Homepage pull-aside (`ProjectOverviewSection`)

- **Second body paragraph** featured as **`font-display`** **pull-quote** scale in sticky rail — reinforces **dual-speed reading**: scan left, dwell right.

## Readability safeguards

- **`.lux-body`** / **`readable`** widths unchanged at token level — still **~42rem** ideal line length.
- **Container tightening** indirectly reduces **over-long lines** in multi-column layouts that previously spanned an effective 90rem shell.

## Follow-up (optional)

- Introduce **`text-balance`** selectively on **long display heads** in hub pages if hyphenation artefacts appear in Arabic/English mixed content (not observed in build).
