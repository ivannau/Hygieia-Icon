#!/usr/bin/env node
/**
 * Icon Hygieia consistency check.
 *
 * Run from the repo root:
 *   node .agents/skills/icon-hygieia/scripts/check-catalog.mjs
 *
 * Exit code 0 = no errors (warnings may remain), 1 = errors found.
 */

import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../../..');
const read = (p) => readFileSync(join(root, p), 'utf8');

const iconsSrc = read('src/icons/icons.tsx');
const metaSrc = read('src/data/metadata.ts');
const typesSrc = read('src/types.ts');
const readmeSrc = read('README.md');

const errors = [];
const warnings = [];
const error = (m) => errors.push(m);
const warn = (m) => warnings.push(m);
const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

/* ---------------------------------------------------------------- exports */

const exportsFound = [
  ...iconsSrc.matchAll(/export const (\w+) = createIcon\('(\w+)',\s*\(([\s\S]*?)\n\)\);/g),
].map(([, exportName, displayName, body]) => ({ exportName, displayName, body }));

if (exportsFound.length === 0) {
  error('No icons found in src/icons/icons.tsx — did the createIcon format change?');
}

const forbidden = [
  [/\bfill="(?!none")/g, 'fill other than "none"'],
  [/\bstroke="/g, 'explicit stroke (breaks currentColor)'],
  [/\bstrokeWidth=/g, 'inline strokeWidth (inherited from createIcon)'],
  [/\btransform=/g, 'transform'],
  [/\bfilter=/g, 'filter'],
  [/\bmask=/g, 'mask'],
  [/\bclipPath=/g, 'clipPath'],
  [/\bstyle=/g, 'inline style'],
  [/<text\b/g, '<text>'],
  [/<g\b/g, 'a <g> wrapper'],
];

for (const { exportName, displayName, body } of exportsFound) {
  if (exportName !== displayName) {
    error(`${exportName}: displayName "${displayName}" does not match the export name`);
  }
  if (body.trim().length === 0) {
    error(`${exportName}: empty body`);
  }
  for (const [pattern, label] of forbidden) {
    if (pattern.test(body)) {
      error(`${exportName}: uses ${label} inside the icon body`);
    }
    pattern.lastIndex = 0;
  }
}

/* --------------------------------------------------------------- metadata */

const entryPattern =
  /id:\s*'([^']+)',\s*name:\s*'([^']*)',\s*componentName:\s*'([^']+)',\s*component:[^\n]*\n\s*category:\s*'([^']+)',\s*tags:\s*\[([^\]]*)\],\s*description:\s*'([^']*)',/g;

const entries = [...metaSrc.matchAll(entryPattern)].map(([, id, name, componentName, category, tags, description]) => ({
  id,
  name,
  componentName,
  category,
  tags: [...tags.matchAll(/'([^']*)'/g)].map((m) => m[1]),
  description,
}));

const exportNames = new Set(exportsFound.map((i) => i.exportName));

if (entries.length === 0) {
  error('No catalog entries found in src/data/metadata.ts — did the format change?');
}

const seenIds = new Map();
const seenComponents = new Map();

for (const entry of entries) {
  const where = entry.componentName || entry.id;

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(entry.id)) {
    error(`${where}: id "${entry.id}" is not kebab-case`);
  }
  if (seenIds.has(entry.id)) {
    error(`${where}: id "${entry.id}" is a duplicate (also used by ${seenIds.get(entry.id)})`);
  }
  seenIds.set(entry.id, where);

  if (seenComponents.has(entry.componentName)) {
    error(`${where}: componentName "${entry.componentName}" is duplicated`);
  }
  seenComponents.set(entry.componentName, where);

  if (!exportNames.has(entry.componentName)) {
    error(`${where}: componentName has no export in src/icons/icons.tsx`);
  }
  if (!entry.name.trim()) {
    error(`${where}: empty name`);
  }
  if (entry.tags.length < 3) {
    warn(`${where}: only ${plural(entry.tags.length, 'tag')} (5–8 recommended)`);
  }
  if (new Set(entry.tags).size !== entry.tags.length) {
    error(`${where}: duplicate tags`);
  }
  if (!entry.description.trim()) {
    error(`${where}: empty description`);
  } else {
    if (!entry.description.trim().endsWith('.')) {
      warn(`${where}: description does not end with a period`);
    }
    if (entry.description.length > 220) {
      warn(`${where}: description is ${entry.description.length} characters, too long for the catalog`);
    }
  }
}

/* ------------------------------------------------------------- categories */

const categoryBlock = typesSrc.match(/IconCategory\s*=([\s\S]*?);/);
const validCategories = new Set(
  [...(categoryBlock?.[1] ?? '').matchAll(/'([\w-]+)'/g)].map((m) => m[1]),
);

if (validCategories.size === 0) {
  error('Could not read the IconCategory union in src/types.ts');
}
for (const entry of entries) {
  if (validCategories.size && !validCategories.has(entry.category)) {
    error(`${entry.componentName}: category "${entry.category}" is not in IconCategory`);
  }
}

/* ------------------------------------------------- exports with no entry */

const cataloged = new Set(entries.map((e) => e.componentName));
const uncataloged = [...exportNames].filter((n) => !cataloged.has(n)).sort();
if (uncataloged.length) {
  warn(
    `${plural(uncataloged.length, 'component')} not registered in the catalog (invisible in the showcase and search): ${uncataloged.join(', ')}`,
  );
}

/* ------------------------------------------------------------------ README */

const readmeCount =
  readmeSrc.match(/Katalog\s+(\d+)\s+Ikon/i) ??
  readmeSrc.match(/Catalog\s+of\s+(\d+)\s+[\w\s-]*?Icons/i);
if (!readmeCount) {
  warn('README does not state an icon count ("Catalog of N ... Icons")');
} else if (Number(readmeCount[1]) !== entries.length) {
  warn(`README claims ${readmeCount[1]} icons, catalog holds ${entries.length} entries`);
}

/* ----------------------------------------------------------------- report */

const entryWord = entries.length === 1 ? 'catalog entry' : 'catalog entries';
console.log(`Icon Hygieia — ${plural(exportsFound.length, 'component')}, ${entries.length} ${entryWord}`);
for (const message of warnings) console.log(`  warning  ${message}`);
for (const message of errors) console.log(`  error    ${message}`);

if (errors.length) {
  console.log(`\n${plural(errors.length, 'error')}, ${plural(warnings.length, 'warning')}.`);
  process.exit(1);
}
console.log(`\nOK — 0 errors, ${plural(warnings.length, 'warning')}.`);
