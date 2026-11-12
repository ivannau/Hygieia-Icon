# Geometry & Optical Correction

Required reading before drawing. Every number here is calibrated against the icons already in the set — if you deviate, say why in the icon's comment.

## Canvas and what a coordinate means

`viewBox="0 0 24 24"`, so 1 unit = 1px at `size={24}`.

A 2px stroke is **centered on the path**: a line at `x="2"` paints the 1–3 band, a line at `x="22"` paints 21–23. That is why content is kept within 2–22 — the drawing ends up with a 1px margin on each side.

| Area | Value | Note |
| :--- | :--- | :--- |
| Safe area | 2–22 | Every existing icon respects it |
| Diagonal bleed | 1.5–22.5 | Diamonds and crosses only, because diagonals read smaller |
| Center | 12 | Vertical and horizontal symmetry |
| Smallest detail | 2×2 units | Below this it disappears at 16px |

## Coordinates

- **Integers** for most points. **Halves** (`.5`) for optical compensation. **Long decimals** are legitimate only when they come from an arc radius — see `EyeVision` (`2.062`, `10.75`) and `SatuSehatSynced` (`3.85`, `8.62`). Never round them: rounding an arc breaks its tangency.
- **One radius system per icon.** If one form uses radius 10.75, the other forms in that icon follow the same multiples. Mixing radius 3 and 10.75 without reason makes the joints look broken.
- **Corners:** `rx=2` for cards, documents, sheets; `rx=1.5` for secondary elements; `rx=1` for micro detail. Never use different `rx` values for two boxes of the same kind in one icon.
- **Shift by 0.5** when visual mass is heavy on one side; `Wheelchair` and `Thermometer` use this correction.

## Curves

- **Arcs (`a`)** for forms that must be geometrically true: eye lens, octagonal badge, wheelchair wheel, dome.
- **Cubics (`c`)** for organic forms: lungs, brain, neonatal face. Place control points at one-third intervals so the curve stays calm.
- **Never mix `q` and `a`** in one silhouette. The joint between the two curve types is almost always visible.
- **Tangency:** two shapes that touch, drawn with a 2px stroke, stack exactly at the contact point and read as a smudge. Leave a gap of ≥1, or merge them into one path. When contact is unavoidable (a ring and a bar, for example), cut one of them with a gap of 1.

## Detail budget

Element count is **not** the budget. The budget is **stroke events**: intersections, free ends, and sharp turns. At 16px, 1 unit = 0.67px, so any gap under 1.5 units collapses into a blob.

- Target: ≤ 10 stroke events readable at 16px.
- `DnaHelix` has 11 elements and stays clean because every one belongs to a single continuous helix. `CpptSbar` has 10 and still reads because all of them are orthogonal.
- Never add ornament that carries no clinical meaning. Every element must answer "which part of the object is this?".

## Optical corrections

1. **Circles read smaller** than a square with the same bounding box. `circle r="3"` matches a 5×5 square, not a 6×6 one. Increase the diameter by 1 when it needs to balance.
2. **Solid areas read heavier.** Give them `rx`, or reduce by 0.5.
3. **Diagonals read thinner** than verticals and horizontals at the same stroke. For a cross, make the ends truly meet at the center so it never reads as broken.
4. **Optical center is not geometric center.** A ring with a gap at the top feels low; nudge it up by 0.5. A shape with a tail on the right feels heavy on the right; nudge it left by 0.5.
5. **Free ends** (round line caps) add 1 unit at each end of the visual length. A `M12 4v3` segment measuring 3 units reads as 5, spanning 3 to 8.

## Shape-failure catalog

| Name | Symptom | Fix |
| :--- | :--- | :--- |
| Stub | Segment under 1.5 units, reads as a dot | Delete it or lengthen it |
| Kiss | Two curves merely touch | Leave a gap of 1, or merge into one path |
| Pile | 3+ strokes meeting at one point | Move one intersection outward |
| Float | Element with no relation to the main form | Connect it or remove it |
| Ghost | Leaves the safe area, clipped at 16px | Shrink it; never raise the bleed |
| Double | Stacked strokes, 4px weight | One path, or offset by ≥1 |
| Ladder | Many parallel strokes packed tight (fins, rungs) | Cut to 3, or switch to a solid silhouette |
| Mosh | Detail under 2 units inside the form | Delete the detail, keep the silhouette |

## Reference icons in this repo

Read these five before drawing:

- `CpptSoap` — four-quadrant grid, dividers exactly at 12, one mark per quadrant.
- `DnaHelix` — 11 segments, all part of one helix; discipline without ornament.
- `Wheelchair` — wheels drawn as two arcs rather than full circles; it reads as motion.
- `SatuSehatSynced` — octagon built from 8 arcs; decimals left untouched.
- `TriageP1Resus` — diamond from 2 to 22 with a zigzag inside; legitimate diagonal bleed.

## Visual verification

- Render at 16, 20, 24, and 32 — never 48 and above. If it only looks good at 48, the drawing is unfinished.
- Check at DPR 1 (a non-retina screen). At DPR 2, every 1.5-unit gap looks safe when it is not.
- Zoom to 800% to inspect tangency and free ends.
- Check light and dark mode. Icons use `currentColor`, so never rely on color contrast.
