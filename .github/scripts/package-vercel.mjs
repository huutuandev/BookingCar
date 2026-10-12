import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';

// Deploy the same static files that passed CI using Vercel Build Output API v3.
// Keep unknown URLs as 404s: the current app only has a home page.
await readFile('Frontend/dist/index.html');
await mkdir('.vercel/output', { recursive: true });
await cp('Frontend/dist', '.vercel/output/static', { recursive: true });
await writeFile(
  '.vercel/output/config.json',
  `${JSON.stringify({ version: 3 }, null, 2)}\n`,
);
