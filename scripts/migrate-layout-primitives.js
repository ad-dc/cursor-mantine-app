#!/usr/bin/env node

/**
 * Migration Script: Layout Primitives
 * 
 * This script helps migrate from Mantine layout components to Design System primitives.
 * It performs the following replacements:
 * - Group → Inline
 * - SimpleGrid → Grid  
 * - Stack → Stack (DS version)
 * - Box → Box (DS version)
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const DRY_RUN = process.argv.includes('--dry-run');
const VERBOSE = process.argv.includes('--verbose');

// Patterns to find TypeScript/TSX files
const FILE_PATTERNS = [
  'components/**/*.{ts,tsx}',
  'app/**/*.{ts,tsx}',
  '!node_modules/**',
  '!.next/**',
  '!dist/**'
];

// Migration mappings
const MIGRATIONS = [
  {
    name: 'Group → Inline',
    pattern: /import\s*{([^}]*?)Group([^}]*?)}\s*from\s*['"]@mantine\/core['"];?/g,
    replacement: (match, before, after) => {
      // Remove Group from Mantine import
      const cleanBefore = before.replace(/,\s*$/, '').trim();
      const cleanAfter = after.replace(/^\s*,/, '').trim();
      
      let mantineImports = [cleanBefore, cleanAfter].filter(Boolean).join(',').trim();
      if (mantineImports.endsWith(',')) mantineImports = mantineImports.slice(0, -1);
      
      const mantineImport = mantineImports ? `import { ${mantineImports} } from '@mantine/core';` : '';
      const dsImport = `import { Inline } from '@/components/DesignSystem';`;
      
      return mantineImport ? `${mantineImport}\n${dsImport}` : dsImport;
    }
  },
  {
    name: 'SimpleGrid → Grid',
    pattern: /import\s*{([^}]*?)SimpleGrid([^}]*?)}\s*from\s*['"]@mantine\/core['"];?/g,
    replacement: (match, before, after) => {
      const cleanBefore = before.replace(/,\s*$/, '').trim();
      const cleanAfter = after.replace(/^\s*,/, '').trim();
      
      let mantineImports = [cleanBefore, cleanAfter].filter(Boolean).join(',').trim();
      if (mantineImports.endsWith(',')) mantineImports = mantineImports.slice(0, -1);
      
      const mantineImport = mantineImports ? `import { ${mantineImports} } from '@mantine/core';` : '';
      const dsImport = `import { Grid } from '@/components/DesignSystem';`;
      
      return mantineImport ? `${mantineImport}\n${dsImport}` : dsImport;
    }
  },
  {
    name: 'Component Usage: Group → Inline',
    pattern: /<Group(\s[^>]*)?>/g,
    replacement: '<Inline$1>'
  },
  {
    name: 'Component Usage: </Group> → </Inline>',
    pattern: /<\/Group>/g,
    replacement: '</Inline>'
  },
  {
    name: 'Component Usage: SimpleGrid → Grid',
    pattern: /<SimpleGrid(\s[^>]*)?>/g,
    replacement: '<Grid$1>'
  },
  {
    name: 'Component Usage: </SimpleGrid> → </Grid>',
    pattern: /<\/SimpleGrid>/g,
    replacement: '</Grid>'
  }
];

// Utility functions
function log(message, level = 'info') {
  if (level === 'verbose' && !VERBOSE) return;
  
  const prefix = {
    info: '📝',
    success: '✅',
    warning: '⚠️',
    error: '❌',
    verbose: '🔍'
  }[level] || '📝';
  
  console.log(`${prefix} ${message}`);
}

function findFiles() {
  const files = [];
  FILE_PATTERNS.forEach(pattern => {
    const matches = glob.sync(pattern, { ignore: ['node_modules/**', '.next/**'] });
    files.push(...matches);
  });
  return [...new Set(files)]; // Remove duplicates
}

function migrateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  let hasChanges = false;
  const appliedMigrations = [];

  MIGRATIONS.forEach(migration => {
    const matches = newContent.match(migration.pattern);
    if (matches) {
      if (typeof migration.replacement === 'function') {
        newContent = newContent.replace(migration.pattern, migration.replacement);
      } else {
        newContent = newContent.replace(migration.pattern, migration.replacement);
      }
      hasChanges = true;
      appliedMigrations.push(migration.name);
    }
  });

  if (hasChanges) {
    if (!DRY_RUN) {
      fs.writeFileSync(filePath, newContent);
    }
    log(`${filePath}`, 'success');
    appliedMigrations.forEach(name => log(`  - ${name}`, 'verbose'));
  }

  return hasChanges;
}

function main() {
  log('🚀 Starting Layout Primitives Migration');
  log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`);
  log('');

  const files = findFiles();
  log(`Found ${files.length} files to check`);
  log('');

  let migratedCount = 0;
  
  files.forEach(file => {
    if (migrateFile(file)) {
      migratedCount++;
    }
  });

  log('');
  log(`Migration complete! ${migratedCount} files modified.`, 'success');
  
  if (DRY_RUN) {
    log('This was a dry run. Use without --dry-run to apply changes.', 'warning');
  }
  
  log('');
  log('Next steps:', 'info');
  log('1. Review the changes');
  log('2. Test your application');
  log('3. Update any remaining manual imports');
  log('4. Run your linter to catch any issues');
}

// Run the migration
if (require.main === module) {
  main();
}

module.exports = { migrateFile, MIGRATIONS }; 