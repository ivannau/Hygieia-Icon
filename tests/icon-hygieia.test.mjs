import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as Hygieia from '../dist/lib/index.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const require = createRequire(import.meta.url);

test('Test 1: Catalog & Component Count matches >= 265 clinical icons', () => {
  const { ICON_CATALOG, CATEGORIES } = Hygieia;
  assert.ok(Array.isArray(ICON_CATALOG), 'ICON_CATALOG must be an array');
  assert.ok(ICON_CATALOG.length >= 265, `Expected >= 265 icons, got ${ICON_CATALOG.length}`);
  assert.equal(CATEGORIES.length, 11, 'Expected 11 medical categories');

  const seenIds = new Set();
  for (const entry of ICON_CATALOG) {
    assert.ok(/^[a-z0-9]+(-[a-z0-9]+)*$/.test(entry.id), `Invalid kebab-case id: ${entry.id}`);
    assert.ok(!seenIds.has(entry.id), `Duplicate id: ${entry.id}`);
    seenIds.add(entry.id);

    assert.ok(
      typeof entry.component === 'function' || (typeof entry.component === 'object' && entry.component !== null),
      `Invalid React component for ${entry.componentName}`,
    );
    assert.ok(entry.name.trim().length > 0, `Empty name for ${entry.componentName}`);
    assert.ok(entry.description.trim().endsWith('.'), `Description must end with period for ${entry.componentName}`);
    assert.ok(Array.isArray(entry.tags) && entry.tags.length >= 5, `Expected >= 5 tags for ${entry.componentName}`);
    assert.equal(new Set(entry.tags).size, entry.tags.length, `Duplicate tags for ${entry.componentName}`);
  }
});

test('Test 2: React SSR rendering produces valid 24x24 monoline SVG for all icons', () => {
  for (const entry of Hygieia.ICON_CATALOG) {
    const html = renderToStaticMarkup(React.createElement(entry.component));
    assert.ok(html.startsWith('<svg '), `${entry.componentName} output must start with <svg`);
    assert.ok(html.endsWith('</svg>'), `${entry.componentName} output must end with </svg>`);
    assert.ok(html.includes('viewBox="0 0 24 24"'), `${entry.componentName} missing viewBox="0 0 24 24"`);
    assert.ok(html.includes('fill="none"'), `${entry.componentName} missing fill="none"`);
    assert.ok(html.includes('stroke="currentColor"'), `${entry.componentName} missing stroke="currentColor"`);
    assert.ok(html.includes('stroke-width="2"'), `${entry.componentName} missing default stroke-width="2"`);
    assert.ok(html.includes('stroke-linecap="round"'), `${entry.componentName} missing stroke-linecap="round"`);
    assert.ok(html.includes('stroke-linejoin="round"'), `${entry.componentName} missing stroke-linejoin="round"`);

    const innerMatch = html.match(/^<svg[^>]*>([\s\S]*)<\/svg>$/);
    assert.ok(innerMatch && innerMatch[1].trim().length > 0, `${entry.componentName} has empty SVG body`);
  }
});

test('Test 3: Props customization and Lucide-compatible absoluteStrokeWidth scaling', () => {
  const { Stethoscope, BowlOfHygieia, SterileBarrier } = Hygieia;

  const custom = renderToStaticMarkup(
    React.createElement(Stethoscope, {
      size: 32,
      strokeWidth: 1.5,
      color: '#0284c7',
      className: 'custom-cls',
    }),
  );
  assert.ok(custom.includes('width="32"'), 'Custom width not applied');
  assert.ok(custom.includes('height="32"'), 'Custom height not applied');
  assert.ok(custom.includes('stroke="#0284c7"'), 'Custom color not applied');
  assert.ok(custom.includes('stroke-width="1.5"'), 'Custom strokeWidth not applied');
  assert.ok(custom.includes('custom-cls'), 'Custom className not applied');

  const abs32 = renderToStaticMarkup(
    React.createElement(BowlOfHygieia, {
      size: 32,
      strokeWidth: 1.5,
      absoluteStrokeWidth: true,
    }),
  );
  assert.ok(abs32.includes('stroke-width="1.125"'), `Expected stroke-width="1.125" at 32px/1.5, got: ${abs32}`);

  const abs48 = renderToStaticMarkup(
    React.createElement(SterileBarrier, {
      size: 48,
      strokeWidth: 2,
      absoluteStrokeWidth: true,
    }),
  );
  assert.ok(abs48.includes('stroke-width="1"'), `Expected stroke-width="1" at 48px/2, got: ${abs48}`);
});

test('Test 4: Raw SVG files in dist/svg and dist/icons.json manifest stay in sync', () => {
  const svgDir = path.join(rootDir, 'dist', 'svg');
  const manifestPath = path.join(rootDir, 'dist', 'icons.json');

  assert.ok(fs.existsSync(svgDir), 'dist/svg directory missing (run pnpm build)');
  assert.ok(fs.existsSync(manifestPath), 'dist/icons.json missing (run pnpm build)');

  const svgFiles = fs.readdirSync(svgDir).filter((f) => f.endsWith('.svg'));
  assert.equal(svgFiles.length, Hygieia.ICON_CATALOG.length, 'SVG file count mismatch');

  for (const entry of Hygieia.ICON_CATALOG) {
    const filePath = path.join(svgDir, `${entry.id}.svg`);
    assert.ok(fs.existsSync(filePath), `Missing SVG file for ${entry.id}`);
    const content = fs.readFileSync(filePath, 'utf8');
    assert.ok(content.startsWith('<svg'), `SVG file ${entry.id}.svg does not start with <svg`);
    assert.ok(content.endsWith('</svg>'), `SVG file ${entry.id}.svg does not end with </svg>`);
    assert.ok(content.includes('viewBox="0 0 24 24"'), `SVG file ${entry.id}.svg missing viewBox`);
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  assert.equal(manifest.length, Hygieia.ICON_CATALOG.length, 'icons.json manifest length mismatch');
  for (const item of manifest) {
    assert.ok(item.svg.startsWith('<svg') && item.svg.endsWith('</svg>'), `Invalid svg in manifest for ${item.id}`);
  }
});

test('Test 5: CommonJS bundle (dist/lib/index.cjs) exports all icons and utilities', () => {
  const cjs = require(path.join(rootDir, 'dist', 'lib', 'index.cjs'));
  assert.equal(typeof cjs.createIcon, 'function', 'createIcon missing from CJS export');
  assert.ok(Array.isArray(cjs.ICON_CATALOG), 'ICON_CATALOG missing from CJS export');
  assert.ok(Array.isArray(cjs.CATEGORIES), 'CATEGORIES missing from CJS export');
  assert.equal(cjs.ICON_CATALOG.length, Hygieia.ICON_CATALOG.length, 'CJS catalog length mismatch');

  for (const entry of cjs.ICON_CATALOG) {
    assert.ok(cjs[entry.componentName], `Missing CJS export for ${entry.componentName}`);
  }
});
