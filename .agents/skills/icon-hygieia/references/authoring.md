# Authoring Workflow

## Scenarios and the files they touch

| Scenario | Files |
| :--- | :--- |
| Add an icon | `src/icons/icons.tsx` + `src/data/metadata.ts` |
| Revise a shape | `src/icons/icons.tsx` only |
| Rename | `icons.tsx` (export + displayName), `metadata.ts` (`id`, `componentName`, `name`), `README.md` if listed |
| Add a category | `src/types.ts` (`IconCategory` union) + `src/data/metadata.ts` (`CATEGORIES` and the catalog block) + `README.md` |
| Remove an icon | Delete the export, the catalog entry, and the README row; check first with `grep -rn "IconName" src` |

## 1. `src/icons/icons.tsx`

Insert at the end of the matching category block, never in the middle. Numbered comments (`// 17. ...`) follow file order — do not renumber the whole file for one icon. Add an unnumbered comment in the same style:

```tsx
// <Clinical title> (<why this metaphor>)
export const IconName = createIcon('IconName', (
  <>
    {/* Main form */}
    <path d="..." />
    {/* Supporting detail */}
    <circle cx="12" cy="12" r="2" />
  </>
));
```

- Always wrap in a fragment `<>...</>`, even for a single element.
- Comment each group of elements in Bahasa Indonesia, naming the clinical part ("Manset tensimeter", "Kepala pasien"), never the geometric shape.
- Geometry elements only: `path`, `circle`, `rect`, `line`, `ellipse`, `polyline`, `polygon`. No `<g>`, `<text>`, `<defs>`, or presentation attributes.
- Order the elements main form first, supporting detail after, so the icon is understood quickly.

## 2. `src/data/metadata.ts`

Append the object at the end of the same category block, following `templates/metadata-entry.ts`.

| Field | Rule |
| :--- | :--- |
| `id` | kebab-case, the kebab form of `componentName`, unique |
| `name` | Bahasa Indonesia, optionally with a clinical abbreviation in parentheses |
| `componentName` | PascalCase, identical to the export in `icons.tsx` |
| `component` | `Icons.<componentName>` |
| `category` | one of the `IconCategory` values in `src/types.ts` |
| `tags` | 5–8 tags: Indonesian synonyms, abbreviations users type, English terms |
| `description` | one sentence, ends with a period, ≤ 220 characters, about clinical meaning |

The order of category blocks in `ICON_CATALOG` follows `CATEGORIES` in the same file. A new category is added to the `IconCategory` union in `src/types.ts` **and** to `CATEGORIES`, then its block is inserted in the matching position. Never reorder existing categories just to tidy things up.

## 3. `README.md`

- The number in the "Katalog N Ikon" heading must equal **the number of catalog entries**, not the number of components in `icons.tsx`. The checker warns when they diverge.
- Add the component name to the category table when the icon represents a new concept. For a variant of an icon already listed, update its description instead.
- A new category needs its own table row, and a mention in the philosophy section when relevant.

## 4. `src/types.ts`

Only for a new category: add the value to the `IconCategory` union in `src/types.ts`, then add `{ id, label }` to `CATEGORIES` in `src/data/metadata.ts`. Labels are Bahasa Indonesia, short, and match the existing style ("CPPT & Rekam Medis", "SatuSehat & BPJS").

## Accessibility

`createIcon` forwards any SVG prop, so labeling belongs to the consumer.

- Decorative icon next to visible text: leave it alone, no `aria-label` needed.
- Icon that is the only label on a button: `<IconName role="img" aria-label="Open medical record" />`.
- Never put `<title>` inside the icon body; it forces every consumer to carry the same text.
- Icons are never interactive: no `tabIndex`, `onClick`, or `cursor` at the icon level. Wrap it in a `<button>`.

## Verification

```bash
pnpm build                                                   # TypeScript + Vite
node .agents/skills/icon-hygieia/scripts/check-catalog.mjs   # catalog consistency
pnpm dev                                                     # visual check in the showcase
```

What the script checks: displayName against export name, forbidden attributes in icon bodies, kebab-case and unique ids, `componentName` values with no export, categories outside the union, duplicate tags, empty or overlong descriptions, and the README count. Unregistered components are reported as **warnings**, not errors, so unfinished work still builds.

When checking visuals: sizes 16 and 24, light and dark mode, DPR 1. Never judge an icon from a retina screenshot.

## Definition of done

- [ ] One clinical idea, passing the three guess-test questions
- [ ] Content within 2–22, with no stub, kiss, pile, double, or ghost
- [ ] Export and catalog entry both present and consistent
- [ ] `tags` 5–8, `description` one sentence ending in a period
- [ ] README accurate if this is a new category or concept
- [ ] `pnpm build` passes
- [ ] `check-catalog.mjs` reports 0 errors; any new warning is explained
- [ ] Inspected at 16px and 24px, light and dark

## Commit conventions

```
feat(icons): add <IconName> for <workflow>
fix(icons): correct <geometry issue> on <IconName>
docs(readme): sync catalog table with metadata
```

One commit per icon or per icon family. Never mix showcase changes into an icon commit.
