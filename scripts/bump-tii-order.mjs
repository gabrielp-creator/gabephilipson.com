/**
 * Minimal order fix: TII 5 -> 6, Compass 6 -> 7.
 * Resolves a tie at order 5 between BGB and TII.
 *
 * Usage:
 *   node --env-file=.env.local scripts/bump-tii-order.mjs
 */

import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'qeo7nx39',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

async function run() {
  // Bump Compass first so there is no transient tie at 6.
  const cmp = await client.patch('project-cmp').set({ order: 7 }).commit();
  console.log('Compass  order ->', cmp.order);

  const tii = await client.patch('project-tii').set({ order: 6 }).commit();
  console.log('TII      order ->', tii.order);

  console.log('\nFinal featured order:');
  const featured = await client.fetch(
    `*[_type == "project" && featured == true] | order(order asc) {_id, title, badgeText, order, status}`
  );
  for (const p of featured) {
    console.log(`  [${p.order}] ${p.badgeText} | ${p.status} | ${p.title}`);
  }
}

run().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
