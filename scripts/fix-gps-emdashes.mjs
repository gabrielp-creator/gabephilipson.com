import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'qeo7nx39',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

async function run() {
  await client
    .patch('project-gps')
    .set({
      title: 'gabephilipson.com - This Site',
      shortDescription:
        'A production consulting website built entirely with Claude - strategy, copy, prototypes, and full-stack deployment - in under 22 hours at zero build cost.',
      problem:
        'Most senior executives either pay $15K-$30K and wait 6-10 weeks for a professional site, or settle for a generic template that undersells them. The goal was a founder-forward dual-audience site with real content and a live AI/POC Lab - without the agency timeline or cost.',
      detailSections: [
        {
          _type: 'object',
          _key: 'ds1',
          label: 'What was built',
          body: 'Two-phase build. Phase 1 (Claude chat project): full content strategy, audience positioning, copywriting for all 7 pages, 4 anonymized case studies, AI/POC Lab entries, SEO metadata, brand-consistent HTML prototypes, and a 6-sheet content tracker. Phase 2 (Claude Code, 3 sessions): converted 7 HTML files into a Next.js 15 site, built 10+ shared components, integrated Sanity CMS, wired Resend for contact form delivery, configured Vercel deployment, and connected a custom domain.',
        },
        {
          _type: 'object',
          _key: 'ds2',
          label: 'What it demonstrates',
          body: 'End-to-end AI-assisted product development - from strategy and copy through technical build and deployment. One person, two AI tools, zero agency involvement. A custom production-grade site that would typically require a 6-10 week agency engagement at $15,000-$30,000 was delivered in under 22 hours at effectively zero build cost.',
        },
      ],
    })
    .commit();
  console.log('Em dashes removed from GPS project');
}

run();
