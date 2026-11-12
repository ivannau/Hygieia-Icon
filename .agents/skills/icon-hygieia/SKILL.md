---
name: icon-hygieia
description: Use when adding, revising, reviewing, or verifying any icon in the Icon Hygieia repo (src/icons/icons.tsx, src/data/metadata.ts) — the 24×24 monoline clinical icon set for Indonesian HIS/EMR workflows such as CPPT/SOAP, SBAR, ED triage, DPJP, SEP BPJS, and SatuSehat. Covers vector geometry, clinical disambiguation, naming, and catalog consistency.
---

# Icon Hygieia

A monoline clinical icon set for the Hygieia ecosystem (Indonesia-first HIS/EMR, FHIR R4). One principle outranks every other rule in this document: **an icon must be recognizable without its label, by an Indonesian nurse or doctor, at 16px.**

Every component in `src/icons/icons.tsx` needs a matching entry in `src/data/metadata.ts`. After any change, `check-catalog.mjs` reports unregistered components as warnings — that list is the remaining work.

## File map

| File | Contents | Edit it? |
| :--- | :--- | :--- |
| `src/icons/icons.tsx` | All SVG drawings, grouped by category under banner comments | Yes, for new icons or shape revisions |
| `src/data/metadata.ts` | Catalog entries (`id`, `name`, `componentName`, `category`, `tags`, `description`) plus `CATEGORIES` | Yes, always alongside `icons.tsx` |
| `src/components/createIcon.tsx` | Wrapper that sets `viewBox`, `strokeWidth`, `linecap`, `linejoin`, `currentColor` | No, unless changing the system itself |
| `src/types.ts` | `IconProps` and the `IconCategory` union | Only when adding a category |
| `src/App.tsx` | Showcase; reads `ICON_CATALOG` automatically | No, unless changing showcase UI |
| `README.md` | Catalog table per category | Yes, for a new category or a notable icon |

## Non-negotiables

1. **24 grid, 2 stroke, no fill, round caps and joins.** All inherited from `createIcon`. Never write `strokeWidth`, `stroke`, `fill`, `transform`, `filter`, `mask`, `clipPath`, `<text>`, or `style` inside an icon body.
2. **Content stays within 2–22.** Bleed to 1.5–22.5 is allowed only for diagonal forms (diamonds, crosses) that read optically smaller; never beyond that.
3. **One idea per icon.** If the symbol needs its label to be understood, the drawing is wrong — change the metaphor instead of adding detail.
4. **No stacked strokes.** Two strokes on the same coordinates make a 4px weight that breaks the set's rhythm. Use one path, or offset by ≥1.
5. **One icon, two files.** An export without a catalog entry never appears in the showcase, search, or docs.
6. **`name`, `description`, and `tags` are written in Bahasa Indonesia.** `componentName` is PascalCase, `id` is kebab-case, both in technical English.

## Adding an icon (5 steps)

1. **Test the metaphor.** Read `references/clinical-semantics.md`, then run the three guess-test questions. If another icon could be mistaken for it, change or sharpen the metaphor — do not proceed.
2. **Draw it.** Read `references/geometry.md` and follow `templates/icon.tsx`. Favor legibility at 16px over detail at 64px.
3. **Export it.** Add `export const IconName = createIcon('IconName', (<>...</>));` at the end of the right category block in `src/icons/icons.tsx`. `src/icons/index.ts` re-exports automatically.
4. **Catalog it.** Add an entry in `src/data/metadata.ts` following `templates/metadata-entry.ts` — kebab-case id, clinical name in Bahasa Indonesia, 5–8 tags (Indonesian synonyms, abbreviations users type, English terms), and a one-sentence description of clinical meaning rather than of the shape.
5. **Verify.** Run `pnpm build`, then `node .agents/skills/icon-hygieia/scripts/check-catalog.mjs`, then inspect at 16 and 24 in `pnpm dev` (not 32 and above), in light and dark mode.

## Reviewing an existing icon

| Check | Passes when |
| :--- | :--- |
| Readability at 16px | The main form still reads at 16px without the label |
| Guess test | The three questions in `clinical-semantics.md` answer cleanly |
| Weight | No segment looks twice as heavy as its neighbours |
| Tangency | Parallel strokes sit ≥1.5 apart; no curve merely touches another |
| Cleanliness | No stub under 1.5px, dead tail, or purposeless floating element |
| Category | `category` follows the clinical workflow, not visual similarity |
| Metadata | `id`, `componentName`, `name`, and `tags` exist and agree |
| Docs | The README row stays accurate if the icon represents a new concept |

## References

| Read | When |
| :--- | :--- |
| `references/geometry.md` | Before drawing: grid, curves, optical corrections, detail budget, shape-failure catalog |
| `references/clinical-semantics.md` | Before choosing a metaphor: guess test, metaphor decisions, pairs at risk of collision, brand and color rules, naming |
| `references/authoring.md` | When editing files: snippets, metadata schema, accessibility, verification commands, definition of done, commit conventions |
| `scripts/check-catalog.mjs` | After every change: export ↔ catalog consistency, forbidden SVG features, README count |

## When a concept does not fit at 24px monoline

Never force it with tiny detail. Better options, most preferred first:

1. Switch to a metaphor that is more iconic and still clinically correct.
2. Split into two icons with distinct roles (e.g. `CpptSoap` for the note, `VerifiedDpjp` for verification).
3. Add a status layer — badge or check — so the extra meaning reads as a layer rather than as detail.
4. Tell the user the concept needs a duotone or filled treatment, and get a decision before drawing.
