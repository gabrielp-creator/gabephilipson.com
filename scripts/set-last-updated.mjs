/**
 * Set lastUpdated dates on AdmitKit and Compass projects.
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

const updates = [
  { id: 'project-adm', date: '2026-04-10', label: 'AdmitKit' },
  { id: 'project-cmp', date: '2026-04-08', label: 'Compass' },
];

async function run() {
  for (const u of updates) {
    const doc = await client.getDocument(u.id);
    if (!doc) {
      console.log(`  ${u.id}: NOT FOUND, skipping`);
      continue;
    }
    await client.patch(u.id).set({ lastUpdated: u.date }).commit();
    console.log(`  ${u.id} (${u.label}): lastUpdated = ${u.date}`);
  }
}

run().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
