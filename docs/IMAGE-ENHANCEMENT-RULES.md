# Image enhancement rules — Solana West New Zayed

**Scope:** post-production on **existing** project photography or issuer-approved renders — **not** generative redesign.  
**Companion:** grading and slot strategy live in [`LUXURY-IMAGE-CAMPAIGN-DIRECTIVE.md`](./LUXURY-IMAGE-CAMPAIGN-DIRECTIVE.md).

---

## Preserve (non-negotiable)

All of the following must remain **truthful to the issued project** after any pass:

- Architecture, buildings, massing, façade logic  
- Layout, master plan relationship, roads, paths  
- Perspective, camera station, lens character  
- Composition (reframe only via **crop**, not generative fill that invents pixels)  
- Landscaping position and volume (no added groves, lakes, or features that are not built / approved)  
- Pools — shape, edge, position  
- Windows, openings, mullion rhythm  
- **Lighting direction** — sun angle must stay consistent with shadows in frame  
- Materials and colour of major surfaces (stone, glass, paint)  
- **Project identity** — must read as the same compound the buyer will visit  
- **Realism** — photographic or high-fidelity render that already matches site truth  

---

## Do not

- Redesign architecture or “improve” design in post  
- Generate or paste **fake** buildings, wings, or towers  
- Add **unrealistic** luxury props (yachts, exotic cars, fantasy fountains)  
- Change project **shape**, footprint, or neighbourhood context  
- Produce **AI-looking** or plastic-smooth surfaces as a substitute for real detail  
- Over-stylize (HDR glow, clarity slam, neon split-toning)  
- Create **fake** sunsets, skies, or weather that contradict shadow direction  
- Alter **geometry** (warp, liquify structure)  
- Invent views the camera never had  
- Add **fake people** or crowd stock  
- Introduce **fantasy** lighting inconsistent with time of day  

---

## Only improve (allowed)

Adjustments that refine **readability and print-quality** without lying about the project:

- Sharpness and **edge-aware** clarity (no halos)  
- **Dynamic range** — shadow recovery and highlight roll-off that match natural film response  
- **Cinematic depth** via **tonal** separation (not fake fog or AI depth)  
- Shadow **quality** — cleaner noise, retained detail, natural falloff  
- Highlight **balance** — recover clipping on stone/glass where data exists  
- **Realistic** reflections — enhance only what is already in the plate; no painted highlights  
- Greenery **richness** — HSL and luminance on **existing** trees/lawn; no new trees  
- Water **quality** — noise control, white balance, gentle contrast; **no** fake caustics  
- Sky **quality** — if and only if replacing sky: use a **plate that matches sun direction and lens**; no fantasy gradients  
- **Subtle** luxury atmosphere — colour science, print-style curve, grain if desired  
- **Premium realism** and **architectural readability** (contrast local to façades without cartoon edges)  

**Target feel:** professionally photographed, ultra-premium, cinematic, realistic, natural, expensive — **not** AI-generated, overprocessed, fake, cartoonish, or oversaturated.

---

## Acceptance check (before ship)

1. Side-by-side with **issuer master** / site photo: same geometry, same sun side, same pool outline.  
2. No new permanent objects in frame.  
3. Sky (if changed) **shadow match** test passes.  
4. Zoom 100%: no halos, no plastic skin on any human if present, no wavy verticals.  
5. Mobile crop is **reframe only** — no inpainting new content.

---

## Website code note

In-browser overlays (`LuxuryFillImage`, hero atmosphere) are **presentation** only. They must **not** compensate for fake skies or wrong lighting in source files. Source masters stay honest; CSS stays **subtle** so it does not read as a filter mask for bad plates.
