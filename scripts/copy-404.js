import { copyFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = join(__dirname, '..', 'dist');
const indexHtml = join(distPath, 'index.html');
const notFoundHtml = join(distPath, '404.html');
const noJekyllSrc = join(__dirname, '..', '.nojekyll');
const noJekyllDest = join(distPath, '.nojekyll');

try {
  copyFileSync(indexHtml, notFoundHtml);
  console.log('✓ Copied index.html to 404.html');
  
  copyFileSync(noJekyllSrc, noJekyllDest);
  console.log('✓ Copied .nojekyll to dist');
} catch (error) {
  console.error('Error copying file:', error);
  process.exit(1);
}

