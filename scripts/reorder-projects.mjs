import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'qeo7nx39',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

async function run() {
  await client.patch('project-gps').set({ order: 1 }).commit();
  console.log('gabephilipson.com — This Site -> 1');
  await client.patch('project-cdt').set({ order: 2 }).commit();
  console.log('College Decision Tracker -> 2');
  await client.patch('project-jsa').set({ order: 3 }).commit();
  console.log('Job Search Agent -> 3');
  await client.patch('project-bgb').set({ order: 4 }).commit();
  console.log('BuyGiveBack -> 4');
  await client.patch('project-ops').set({ order: 5 }).commit();
  console.log('Job Search Daily Ops Skill -> 5');
  console.log('Done!');
}

run();
