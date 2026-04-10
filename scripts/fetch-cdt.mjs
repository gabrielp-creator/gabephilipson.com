/**
 * List all featured projects to understand current ordering.
 * Usage: node --env-file=.env.local scripts/fetch-cdt.mjs
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
  const all = await client.fetch(
    `*[_type == "project"] | order(order asc) {_id, title, badgeText, order, featured, status}`
  );
  console.log('All projects (ordered):');
  for (const p of all) {
    console.log(`  [${p.order}] ${p.featured ? '*' : ' '} ${p.badgeText} | ${p.title} | ${p.status}`);
  }
  console.log('\n* = featured (shown in AI/POC Lab)');
}

run().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
