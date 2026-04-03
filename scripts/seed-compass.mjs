/**
 * Seed Compass project into Sanity and upload the status screenshot.
 *
 * Usage:
 *   node --env-file=.env.local scripts/seed-compass.mjs
 */

import { createClient } from 'next-sanity';
import fs from 'fs';
import path from 'path';

const client = createClient({
  projectId: 'qeo7nx39',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const doc = {
  _type: 'project',
  _id: 'project-cmp',
  title: 'Compass \u2014 PM Agent Pipeline',
  badgeText: 'CMP',
  badgeColor: '#0B4F6C',
  status: 'In Progress',
  shortDescription:
    'A multi-agent AI pipeline that guides a product manager through the full product lifecycle, from problem discovery to delivery, with configurable automation that grows more autonomous as confidence increases.',
  problem:
    'Design complete. Architecture locked. Agent specs and build in progress.',
  tags: ['React', 'Claude', 'OpenAI', 'Gemini', 'Node.js', 'GitHub JSON persistence', 'Provider abstraction layer'],
  detailSections: [
    {
      _key: 'd1',
      label: 'What it does',
      body: 'Takes a PM from raw problem statement to approved PRD through a structured multi-agent pipeline. Each stage (Discovery, Strategy, Requirements) produces structured outputs the PM can review, edit, and approve before advancing. An Orchestrator agent manages state, routes rejections back to the earliest affected upstream stage, and maintains a running session dossier stored as JSON in GitHub. Gate modes are configurable per stage: manual, supervised, or auto with a countdown timer. Discovery is permanently locked to manual \u2014 it is the foundation, and wrong problem means wrong everything.',
    },
    {
      _key: 'd2',
      label: "How it's built",
      body: "React single-page app with a provider abstraction layer supporting Claude (default), OpenAI, and Gemini \u2014 swappable per agent without touching agent logic. Session state persists as a structured JSON dossier in a private GitHub repo. Each agent reads the full dossier and writes only to its own block. The Orchestrator carries a hybrid context model: structured JSON state plus a running narrative summary. A pre-flight intake form (with optional /cmp:brief free-text command) scores project size before firing the pipeline. Phase I covers three functional agents plus the Orchestrator. Full pipeline (Execution, Launch, Analytics) comes in Phase II. Auth, hosting, and monetization in Phase III.",
    },
  ],
  order: 5,
  featured: true,
};

async function run() {
  // Create the project document
  const result = await client.createOrReplace(doc);
  console.log('Created:', result._id, result.title);

  // Upload the status screenshot
  const screenshotPath = path.resolve('C:\\Users\\gabri\\Downloads\\compass-status-screenshot.png');
  if (fs.existsSync(screenshotPath)) {
    console.log('Uploading screenshot...');
    const buffer = fs.readFileSync(screenshotPath);
    const asset = await client.assets.upload('image', buffer, {
      filename: 'compass-status-screenshot.png',
      contentType: 'image/png',
    });
    console.log('Uploaded:', asset._id);

    await client.patch('project-cmp').set({
      screenshots: [{
        _type: 'image',
        _key: asset._id,
        asset: { _type: 'reference', _ref: asset._id },
      }],
    }).commit();
    console.log('Screenshot attached to project.');
  } else {
    console.log('Screenshot not found at:', screenshotPath);
  }
}

run().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
