/**
 * Update Compass project text in Sanity.
 *
 * Usage:
 *   node --env-file=.env.local scripts/update-compass.mjs
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
  // Fetch current doc to confirm it exists
  const current = await client.getDocument('project-cmp');
  if (!current) {
    console.error('project-cmp not found in Sanity');
    process.exit(1);
  }
  console.log('Found:', current._id, current.title);

  const patch = client.patch('project-cmp');

  // Update shortDescription (one-liner)
  patch.set({
    shortDescription:
      "Your personal AI product manager. Describe a problem in plain English, get a prioritized strategy, and ship engineering-ready requirements with stakeholder-tailored documentation. 60 features live across 9 categories. Seven pipeline runs across software, creative, and business domains.",
  });

  // Update problem paragraph
  patch.set({
    problem:
      "Phase I complete. Phase II active. Stakeholder intelligence shapes agent decisions and tailors BRD/PRD exports to individual audiences. Seven documented runs across ERP forecasting, e-commerce, athletic training, furniture making, and professional networking, with 100% schema compliance since Round 2. The pipeline adapts naturally to non-software domains without special handling.",
  });

  // Update tags — add Anthropic API and Multi-Agent
  patch.set({
    tags: ['React', 'Claude', 'Anthropic API', 'OpenAI', 'Gemini', 'Multi-Agent', 'Node.js', 'GitHub JSON persistence', 'Provider abstraction layer'],
  });

  // Update detailSections
  patch.set({
    detailSections: [
      {
        _key: 'd1',
        label: 'What it does',
        body: "Takes a PM from raw problem statement to approved PRD through a structured multi-agent pipeline. Each stage (Discovery, Strategy, Requirements) produces structured outputs the PM can review, edit, and approve before advancing. An Orchestrator agent manages state, routes rejections back to the earliest affected upstream stage, and maintains a running session dossier stored as JSON in GitHub. Gate modes are configurable per stage: manual, supervised, or auto with a countdown timer. Discovery is permanently locked to manual \u2014 it is the foundation, and wrong problem means wrong everything. Each stage delivers formatted output with risk and priority badges. Stakeholder context shapes Strategy rationale and Requirements flags. /cmp:export doc generates a six-section BRD/PRD. /cmp:export doc [name] tailors the executive summary to the named stakeholder's communication style and priorities. 49 features live, 11 planned.",
      },
      {
        _key: 'd2',
        label: "How it's built",
        body: "React single-page app with a provider abstraction layer supporting Claude (default), OpenAI, and Gemini \u2014 swappable per agent without touching agent logic. Session state persists as a structured JSON dossier in a private GitHub repo. Each agent reads the full dossier and writes only to its own block. The Orchestrator carries a hybrid context model: structured JSON state plus a running narrative summary. A pre-flight intake form (with optional /cmp:brief free-text command) scores project size before firing the pipeline. Seven documented runs with consistent token efficiency (~17,800 avg). Phase II adds stakeholder intelligence, BRD/PRD export (delivered), open question answer flow, and Execution, Launch, and Analytics agents.",
      },
    ],
  });

  const result = await patch.commit();
  console.log('Updated:', result._id);
  console.log('  shortDescription:', result.shortDescription?.slice(0, 60) + '...');
  console.log('  problem:', result.problem?.slice(0, 60) + '...');
  console.log('  tags:', result.tags?.join(', '));
  console.log('  detailSections:', result.detailSections?.length, 'sections');
}

run().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
