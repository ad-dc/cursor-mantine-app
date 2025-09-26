import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec as execCb } from 'child_process';
import { promisify } from 'util';

const exec = promisify(execCb);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '..');
const templateDir = path.join(root, 'templates', 'base');
const outputDir = path.join(root, 'output', 'figma-make-template');
const zipPath = path.join(root, 'figma-make-template.zip');

async function rimraf(dir) {
  await fs.rm(dir, { recursive: true, force: true });
}

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(s, d);
    } else {
      await fs.copyFile(s, d);
    }
  }
}

async function zipDir(src, zipFile) {
  const cwd = src;
  const cmd = `zip -r ${JSON.stringify(zipFile)} .`;
  await exec(cmd, { cwd });
}

async function main() {
  await rimraf(outputDir);
  await fs.mkdir(outputDir, { recursive: true });
  await copyDir(templateDir, outputDir);
  // Create zip from inside outputDir so files are at root in zip
  await zipDir(outputDir, zipPath);
  console.log(`Wrote ${zipPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
