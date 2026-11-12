/**
 * Icon Hygieia template — copy into src/icons/icons.tsx, never import this file.
 *
 * Before pasting, decide:
 *   1. A PascalCase component name, identical to the displayName.
 *   2. One clear clinical idea (see references/clinical-semantics.md).
 *   3. A comment per element group, in Bahasa Indonesia, naming the clinical part.
 */

// <Clinical title> (<why this metaphor was chosen>)
export const IconName = createIcon('IconName', (
  <>
    {/* Main form — the object read first */}
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8h8" />

    {/* Supporting detail — at most two more stroke events */}
    <path d="m8 14 2 2 4-4" />
  </>
));
