/**
 * Seed The Intangibles Index (TII) project into Sanity and bump Compass order.
 *
 * Usage:
 *   node --env-file=.env.local scripts/seed-tii.mjs
 */

import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'qeo7nx39',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const doc = {
  _type: 'project',
  _id: 'project-tii',
  title: 'The Intangibles Index, A Wins Predictor',
  badgeText: 'TII',
  badgeColor: '#FF5910',
  status: 'Fully Operational',
  shortDescription:
    'A satirical 2026 Mets wins predictor built on a riff on CAPM. Live record, tunable intangibles, hardcoded fWAR.',
  problem:
    'Traditional baseball projections like PECOTA are statistically rigorous and emotionally empty. Fans know a season is not just wins above replacement. It is tabloid drama, mascot charisma, and whether the bullpen can find the strike zone in August. This project puts those variables in the equation.',
  tags: ['Vercel', 'Serverless Functions', 'MLB Stats API', 'Claude Code', 'Vanilla JS'],
  detailSections: [
    {
      _key: 'd1',
      label: 'What it does',
      body: 'Calculates projected 2026 Mets wins by summing a replacement-level floor, fWAR contributions, a tunable intangibles term, and an error bar. Current-season record, streak, and 162-game pace pull live from the free MLB Stats API. Preset buttons let visitors flip between optimistic, pessimistic, and historical scenarios.',
    },
    {
      _key: 'd2',
      label: 'How it was built',
      body: 'One HTML file with embedded CSS, JS, and base64 logo and mascot assets. A Vercel serverless function proxies the MLB Stats API with 24-hour edge caching so the public API gets hit at most once per day per edge region. The page falls back to hardcoded values silently if the API fails.',
    },
  ],
  demoUrl: '/intangibles',
  order: 5,
  featured: true,
};

async function run() {
  const result = await client.createOrReplace(doc);
  console.log('Created:', result._id, result.title);
  console.log('  badgeText:', result.badgeText);
  console.log('  order:', result.order);
  console.log('  featured:', result.featured);
  console.log('  demoUrl:', result.demoUrl);

  // Bump Compass from order 5 to 6 so TII slots in ahead of it.
  try {
    const patched = await client
      .patch('project-cmp')
      .set({ order: 6 })
      .commit();
    console.log('Compass bumped to order', patched.order);
  } catch (err) {
    console.warn('Could not bump Compass order (may not exist yet):', err.message);
  }

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
