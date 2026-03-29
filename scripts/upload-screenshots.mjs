/**
 * Upload screenshots to Sanity and patch project documents.
 *
 * Usage:
 *   SANITY_TOKEN=<token> node scripts/upload-screenshots.mjs
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

const SCREENSHOTS_DIR =
  'C:\\Users\\gabri\\OneDrive\\Documents\\IES\\Website\\GabrielPhilipson\\Screenshots\\Website';

const uploads = [
  {
    projectId: 'project-gps',
    files: ['gabephilipson - This Site.png'],
  },
  {
    projectId: 'project-jsa',
    files: [
      'screenshot_1_daily_scan.png',
      'screenshot_2_jd_analysis.png',
      'screenshot_3_tracker_pipeline.png',
    ],
  },
];

async function uploadImage(filename) {
  const filepath = path.join(SCREENSHOTS_DIR, filename);
  const buffer = fs.readFileSync(filepath);
  console.log(`  Uploading ${filename}...`);
  const asset = await client.assets.upload('image', buffer, {
    filename,
    contentType: 'image/png',
  });
  console.log(`  ✅ Uploaded → ${asset._id}`);
  return asset._id;
}

async function run() {
  for (const { projectId, files } of uploads) {
    console.log(`\nProcessing ${projectId}...`);

    const imageRefs = [];
    for (const filename of files) {
      const assetId = await uploadImage(filename);
      imageRefs.push({
        _type: 'image',
        _key: assetId,
        asset: { _type: 'reference', _ref: assetId },
      });
    }

    await client.patch(projectId).set({ screenshots: imageRefs }).commit();
    console.log(`  ✅ Patched ${projectId} with ${imageRefs.length} screenshot(s)`);
  }

  console.log('\n✅ All done!');
}

run().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
