/**
 * Deactivate CDT and create new AdmitKit project in Sanity.
 *
 * Usage:
 *   node --env-file=.env.local scripts/seed-admitkit.mjs
 */

import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'qeo7nx39',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const admDoc = {
  _type: 'project',
  _id: 'project-adm',
  title: 'AdmitKit \u2014 College Discovery & Decision Platform',
  badgeText: 'ADM',
  badgeColor: '#1C75BC',
  status: 'In Progress',
  shortDescription:
    "A father built a college decision tracker for his son. Now generalized into AdmitKit, a two-tool platform: Discovery generates personalized school lists from a behavioral survey using Common Data Set percentile data \u2014 not acceptance rates. Decision drives the final choice after admissions arrive. Phase 1 deployed with ~1,945 schools indexed from the College Scorecard API.",
  problem:
    "Most families navigate college admissions with anecdotes, gut feel, and acceptance-rate proxies that don't account for the individual student. AdmitKit replaces that with personalized probability estimates from each school's 25th/75th percentile data, behavioral survey questions instead of preference scales, and risk-tolerance-adjusted list composition. Phase 1 (survey, profile model, magic-link auth, anonymous-first flow) complete and deployed. Phase 2 Part 1 (school database with ~1,945 schools, autocomplete search) complete. Phase 2 Part 2 (probability engine with risk-adjusted tier thresholds and test-optional handling) in progress.",
  tags: [
    'Next.js',
    'React',
    'TypeScript',
    'Supabase',
    'Vercel',
    'Anthropic API',
    'Resend',
    'College Scorecard API',
    'Magic Link Auth',
    'Behavioral Survey',
  ],
  detailSections: [
    {
      _key: 'd1',
      label: 'What it does',
      body:
        "Two tools sharing one student profile. AdmitKit Discovery (spring junior year through fall senior year) takes a behavioral survey across academic profile, intended major, extracurriculars, campus preferences, financial reality, and risk tolerance \u2014 never asking students to rate importance on a 1-to-10 scale, because anchored answers produce noise. From that, it generates personalized parameter weights, estimates admission probability at each school using Common Data Set 25th/75th percentile data (not acceptance rates), and recommends a list composition (safeties/targets/reaches) calibrated to the student's risk tolerance score. AdmitKit Decision (December senior year through May 1st) inherits the profile, lets the student mark admission status, researches admitted schools against the personalized parameter set, and drives the final choice with weighted fit scores. The original father-built tool made a real decision for one family across 12 schools and 19 weighted parameters. AdmitKit generalizes that approach with parameter labels generated dynamically from survey responses, not hardcoded categories.",
    },
    {
      _key: 'd2',
      label: "How it's built",
      body:
        "Next.js (React, TypeScript) on Vercel free tier. Supabase (PostgreSQL) for profile, school list, and result persistence shared across both tools. Magic-link auth via Resend \u2014 email only, no password, same account for both tools. Anthropic API via Vercel Edge Functions for survey weight inference, school discovery, and profile recalculation \u2014 key never exposed in browser. ~1,945 schools pre-indexed from the U.S. Department of Education's College Scorecard API (free, federal, no approval needed), refreshed annually each August when new CDS data lands. Phase 1 (multi-step survey UI, profile data model with Provided/Estimated/Missing completeness flags, magic-link auth, anonymous-first flow with AccountGate modal) deployed at admitkit.sandbox.gabephilipson.com. Phase 2 Part 1 (school database ingestion, autocomplete search) complete. Phase 2 Part 2 (probability engine, list composition tracker, test-optional handling) in progress. Phase 3 adds AI survey analysis and school discovery calls. Phase 4 adds the Tool 1 \u2192 Tool 2 handoff and Stripe donation flow.",
    },
  ],
  sandboxUrl: 'https://admitkit.sandbox.gabephilipson.com',
  order: 3,
  featured: true,
};

async function run() {
  // 1) Deactivate the old CDT project
  console.log('Deactivating project-cdt...');
  const cdt = await client.getDocument('project-cdt');
  if (cdt) {
    await client.patch('project-cdt').set({ featured: false }).commit();
    console.log('  project-cdt: featured -> false');
  } else {
    console.log('  project-cdt not found, skipping');
  }

  // 2) Create the new AdmitKit project
  console.log('\nCreating project-adm...');
  const result = await client.createOrReplace(admDoc);
  console.log('  Created:', result._id, result.title);
  console.log('  badgeText:', result.badgeText);
  console.log('  order:', result.order);
  console.log('  featured:', result.featured);
  console.log('  sandboxUrl:', result.sandboxUrl);
  console.log('  tags:', result.tags?.join(', '));

  // 3) Verify the visual ordering
  console.log('\nFinal featured order:');
  const featured = await client.fetch(
    `*[_type == "project" && featured == true] | order(order asc) {_id, title, badgeText, order}`
  );
  for (const p of featured) {
    console.log(`  [${p.order}] ${p.badgeText} | ${p.title}`);
  }
}

run().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
