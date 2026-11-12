/**
 * Catalog entry template — copy into the ICON_CATALOG array in
 * src/data/metadata.ts, inside the matching category block.
 * Never import this file.
 */

  {
    // kebab-case, the kebab form of componentName
    id: 'example-icon',

    // Bahasa Indonesia, optionally with a clinical abbreviation in parentheses
    name: 'Clinical Name (Abbreviation)',

    // PascalCase, exactly the export name in icons.tsx
    componentName: 'ExampleIcon',

    // mirrors the component name
    component: Icons.ExampleIcon,

    // one of the IconCategory values in src/types.ts
    category: 'diagnostik',

    // 5–8 tags: Indonesian synonyms, abbreviations users type, English terms
    tags: ['keyword', 'sinonim', 'akronim', 'english-term'],

    // one sentence on clinical meaning and workflow context, never on shape
    description: 'One sentence describing what this icon means in the hospital workflow.',
  },
