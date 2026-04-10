/**
 * Set lastUpdated on all featured projects.
 * Uses Sanity _updatedAt as default for projects without an explicit date.
 *
 * Usage:
 *   node --env-file=.env.local scripts/set-last-updated.mjs
 */

import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'qeo7nx39',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

// Explicit overrides for projects we know specific dates for
const explicit = {
  'project-adm': '2026-04-10', // AdmitKit — created today
  'project-cmp': '2026-04-08', // Compass — sandbox redesign
};

async function run() {
  const projects = await client.fetch(
    `*[_type == "project" && featured == true] {_id, title, badgeText, _updatedAt, lastUpdated}`
  );

  for (const p of projects) {
    const fallback = p._updatedAt?.slice(0, 10); // YYYY-MM-DD
    const date = explicit[p._id] || fallback;
    if (!date) {
      console.log(`  ${p._id}: no date available, skipping`);
      continue;
    }
    await client.patch(p._id).set({ lastUpdated: date }).commit();
    const tag = explicit[p._id] ? '(explicit)' : '(from _updatedAt)';
    console.log(`  ${p.badgeText.padEnd(4)} ${p.title.slice(0, 40).padEnd(40)} -> ${date} ${tag}`);
  }
}

run().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
