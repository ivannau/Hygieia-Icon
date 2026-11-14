import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ICON_CATALOG } from '../dist/lib/index.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const svgDir = path.join(rootDir, 'dist', 'svg');
const manifestPath = path.join(rootDir, 'dist', 'icons.json');

fs.rmSync(svgDir, { recursive: true, force: true });
fs.mkdirSync(svgDir, { recursive: true });

const manifest = ICON_CATALOG.map((entry) => {
  const rawMarkup = renderToStaticMarkup(React.createElement(entry.component));
  const svg = rawMarkup.replace(/\s+class="[^"]*"/, '');
  const outPath = path.join(svgDir, `${entry.id}.svg`);
  fs.writeFileSync(outPath, svg, 'utf8');

  return {
    id: entry.id,
    componentName: entry.componentName,
    name: entry.name,
    category: entry.category,
    tags: entry.tags,
    description: entry.description,
    svg,
  };
});

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
console.log(`Exported ${manifest.length} raw SVG files to dist/svg and manifest to dist/icons.json`);
