import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'qeo7nx39',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

async function run() {
  await client.patch('caseStudy-erp').set({ order: 1 }).commit();
  console.log('ERP Divestment -> 1');
  await client.patch('caseStudy-pay').set({ order: 2 }).commit();
  console.log('Payment Automation -> 2');
  await client.patch('caseStudy-avi').set({ order: 3 }).commit();
  console.log('Aviation Lease -> 3');
  await client.patch('caseStudy-sql').set({ order: 4 }).commit();
  console.log('Global Inventory Search -> 4');
  console.log('Done!');
}

run();
