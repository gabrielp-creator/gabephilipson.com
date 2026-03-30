import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

// Simple static file server for the public directory
const server = http.createServer((req, res) => {
  const filePath = path.join(publicDir, req.url === '/' ? 'og-preview.html' : req.url);
  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
  };
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

await new Promise(resolve => server.listen(0, resolve));
const port = server.address().port;

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630 });
await page.goto(`http://localhost:${port}/og-preview.html`, { waitUntil: 'networkidle0' });

const card = await page.$('.og-card');
const outputPath = path.join(publicDir, 'og-image.png');
await card.screenshot({ path: outputPath, type: 'png' });

await browser.close();
server.close();
console.log('Done! og-image.png regenerated.');
