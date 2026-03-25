#!/usr/bin/env node

/**
 * Export prototype pages for use in micro-ui-ts or other React projects.
 *
 * Extracts page content components, rewrites DS imports, and generates
 * a connections document describing page relationships.
 *
 * Usage:
 *   node tools/export-page.js --out ./export
 *   node tools/export-page.js --out ./export --pages customers,customer-detail
 *   node tools/export-page.js --out ./export --import-path @appdirect/ds-components
 *
 * Options:
 *   --out          Output directory (required)
 *   --pages        Comma-separated page slugs to export (default: all)
 *   --import-path  Rewrite DS import to this path (default: @appdirect/ds-components)
 *   --copy-ds      Copy referenced DS components into output (flag, no value)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const MANIFEST_PATH = path.join(ROOT, 'prototype-manifest.json');
const PAGES_DIR = path.join(ROOT, 'app', 'prototype');
const DS_DIR = path.join(ROOT, 'components', 'DesignSystem');

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const key = argv[i].replace(/^--/, '').replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) {
        args[key] = argv[++i];
      } else {
        args[key] = true;
      }
    }
  }
  return args;
}

function extractDSImports(source) {
  const importRegex = /import\s*\{([^}]+)\}\s*from\s*['"]@\/components\/DesignSystem['"]/g;
  const imports = new Set();
  let match;
  while ((match = importRegex.exec(source)) !== null) {
    match[1].split(',').forEach((s) => {
      const cleaned = s.replace(/\s+as\s+\w+/, '').trim();
      if (cleaned && !cleaned.startsWith('type ')) {
        imports.add(cleaned);
      }
    });
  }
  return Array.from(imports);
}

const SHELL_COMPONENTS = new Set([
  'AppShellLayout',
  'HeaderBar',
  'SidebarNav',
  'SidebarNavLink',
  'SingleColumnLayout',
  'TertiaryColumnLayout',
]);

function transformPageSource(source, importPath) {
  let result = source;

  // Remove 'use client' directive
  result = result.replace(/^\s*['"]use client['"];\s*\n?/, '');

  // Rewrite DS import path
  result = result.replace(
    /@\/components\/DesignSystem/g,
    importPath
  );

  // Remove shell component imports that aren't needed in production
  // We remove them from import statements but leave the JSX references
  // so developers can see what was used and decide what to keep
  const shellImportComment =
    '// Shell components (AppShellLayout, SingleColumnLayout, TertiaryColumnLayout) are prototype-only.\n' +
    '// Remove shell wrappers and keep only the page content for production use.\n';

  // Add guidance comment at the top
  result = shellImportComment + result;

  // Replace default export with named export
  result = result.replace(
    /export default function (\w+)/,
    'export function $1'
  );

  return result;
}

function detectConnections(source, slug) {
  const connections = [];

  // Detect href references to other prototype pages
  const hrefRegex = /href=['"]\/prototype\/([^'"]+)['"]/g;
  let match;
  while ((match = hrefRegex.exec(source)) !== null) {
    const target = match[1];
    if (target !== slug) {
      connections.push({ target, type: 'link' });
    }
  }

  // Detect onClick handlers that might navigate
  const onClickNavRegex = /onClick\s*=\s*\{[^}]*(?:push|navigate|router)[^}]*\/prototype\/([^'"}\s]+)/g;
  while ((match = onClickNavRegex.exec(source)) !== null) {
    connections.push({ target: match[1], type: 'programmatic-navigation' });
  }

  return connections;
}

function generateConnectionsDoc(pagesData) {
  const lines = [
    '# Prototype Page Connections',
    '',
    'This document describes the navigation relationships between exported prototype pages.',
    'Use it as a guide when wiring up React Router routes in the target application.',
    '',
    '## Pages',
    '',
  ];

  for (const { slug, title, connections, template, contentLayout } of pagesData) {
    lines.push(`### ${title} (\`${slug}\`)`);
    lines.push('');
    lines.push(`- **Template:** ${template}`);
    lines.push(`- **Content Layout:** ${contentLayout}`);
    lines.push(`- **Source File:** \`${slug}/page.tsx\``);
    lines.push('');

    if (connections.length > 0) {
      lines.push('**Navigates to:**');
      lines.push('');
      for (const conn of connections) {
        const typeLabel = conn.type === 'link' ? 'Link' : 'Programmatic';
        lines.push(`- \`${conn.target}\` (${typeLabel})`);
      }
      lines.push('');
    } else {
      lines.push('No outbound navigation detected.');
      lines.push('');
    }
  }

  lines.push('---');
  lines.push('');
  lines.push('## Suggested React Router Setup');
  lines.push('');
  lines.push('```tsx');
  lines.push('// src/navigation/router.tsx');
  lines.push('import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";');
  lines.push('');

  for (const { slug, title } of pagesData) {
    const componentName = slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join('');
    lines.push(`import { ${componentName}Page } from "../pages/${componentName}/${componentName}";`);
  }

  lines.push('');
  lines.push('const router = createBrowserRouter(');
  lines.push('  createRoutesFromElements(');
  lines.push('    <>');

  for (const { slug } of pagesData) {
    const componentName = slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join('');
    lines.push(`      <Route path="/${slug}" element={<${componentName}Page />} />`);
  }

  lines.push('    </>');
  lines.push('  )');
  lines.push(');');
  lines.push('```');
  lines.push('');

  return lines.join('\n');
}

function main() {
  const args = parseArgs(process.argv);

  if (!args.out) {
    console.error('Error: --out is required.\n');
    console.error('Usage: node tools/export-page.js --out ./export [--pages slug1,slug2] [--import-path @appdirect/ds-components]');
    process.exit(1);
  }

  const outDir = path.resolve(args.out);
  const importPath = args.importPath || '@appdirect/ds-components';

  let manifest = { pages: [] };
  if (fs.existsSync(MANIFEST_PATH)) {
    manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'));
  }

  let pageSlugs = manifest.pages.map((p) => p.slug);
  if (args.pages) {
    pageSlugs = args.pages.split(',').map((s) => s.trim());
  }

  const pagesData = [];
  const allDSImports = new Set();

  for (const slug of pageSlugs) {
    const pageFile = path.join(PAGES_DIR, slug, 'page.tsx');
    if (!fs.existsSync(pageFile)) {
      console.warn(`Warning: Page not found, skipping: ${slug}`);
      continue;
    }

    const source = fs.readFileSync(pageFile, 'utf-8');
    const manifestEntry = manifest.pages.find((p) => p.slug === slug) || {};

    // Extract info
    const dsImports = extractDSImports(source);
    dsImports.forEach((i) => allDSImports.add(i));

    const connections = detectConnections(source, slug);

    // Transform
    const transformed = transformPageSource(source, importPath);

    // Write
    const pageOutDir = path.join(outDir, 'pages', slug);
    fs.mkdirSync(pageOutDir, { recursive: true });
    fs.writeFileSync(path.join(pageOutDir, 'page.tsx'), transformed, 'utf-8');

    pagesData.push({
      slug,
      title: manifestEntry.title || slug,
      template: manifestEntry.template || 'unknown',
      contentLayout: manifestEntry.contentLayout || 'unknown',
      connections,
    });
  }

  // Generate connections document
  const connectionsDoc = generateConnectionsDoc(pagesData);
  fs.writeFileSync(path.join(outDir, 'CONNECTIONS.md'), connectionsDoc, 'utf-8');

  // Copy DS components if requested
  if (args.copyDs) {
    const dsOutDir = path.join(outDir, 'components', 'DesignSystem');
    copyDirSync(DS_DIR, dsOutDir);
    console.log(`  DS components copied to: ${path.relative(process.cwd(), dsOutDir)}`);
  }

  console.log(`\nExported ${pagesData.length} page(s) to: ${path.relative(process.cwd(), outDir)}`);
  console.log(`  Pages: ${pagesData.map((p) => p.slug).join(', ')}`);
  console.log(`  Import path: ${importPath}`);
  console.log(`  Connections doc: ${path.relative(process.cwd(), path.join(outDir, 'CONNECTIONS.md'))}`);
  console.log(`\n  DS components used: ${Array.from(allDSImports).filter((i) => !SHELL_COMPONENTS.has(i)).join(', ')}\n`);
}

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      // Skip Shell directory -- it's prototype-only
      if (entry.name === 'Shell') continue;
      copyDirSync(srcPath, destPath);
    } else {
      // Skip stories, figma files, and test files
      if (/\.(stories|test|spec|figma)\.[tj]sx?$/.test(entry.name)) continue;
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

main();
