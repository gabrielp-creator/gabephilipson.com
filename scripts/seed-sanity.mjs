/**
 * Seed script — pushes all hardcoded content into Sanity.
 *
 * Usage:
 *   SANITY_TOKEN=<your-write-token> node scripts/seed-sanity.mjs
 *
 * Get a write token from: https://sanity.io/manage → project → API → Tokens → Add token (Editor)
 */

import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'qeo7nx39';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN;

if (!token) {
  console.error('\n❌  Missing SANITY_TOKEN env var.');
  console.error('   Go to https://sanity.io/manage → your project → API → Tokens');
  console.error('   Create a token with "Editor" permissions and run:\n');
  console.error('   SANITY_TOKEN=skXXX node scripts/seed-sanity.mjs\n');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
});

// ── Blog Post ────────────────────────────────────────────────────────────────

const blogPost = {
  _type: 'blogPost',
  _id: 'blogPost-the-dangerous-advantage',
  title: 'The Dangerous Advantage: Why AI Rewards the Generalist',
  slug: { _type: 'slug', current: 'the-dangerous-advantage' },
  eyebrow: 'Blog',
  publishDate: '2026-03-01',
  readTime: '5 min read',
  authorName: 'Gabriel Philipson',
  authorBio:
    'Founder of IES Consulting Group. 20 years in enterprise technology. Currently building AI systems and taking on the right consulting engagements. Based in Brooklyn.',
  ctaLabel: 'Want to see the work?',
  ctaTitle: "The AI/POC Lab documents everything I've built.",
  ctaBody:
    'Working systems, real problems, honest write-ups. Not opinions about what AI can do, but proof of what it actually does when you put it to work.',
  body: [
    {
      _type: 'block',
      _key: 'b1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's1',
          text: "Early in my career at Harry Winston, I had a reputation for being dangerous. Not in a bad way. It meant I knew just enough about almost everything to be useful in almost any situation. I wasn't the deepest expert in any single area, but I could pick up a new system, understand a business problem, and figure out a path forward faster than most. My manager called it a gift. Some of my peers called it annoying. Either way, it worked.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'b2',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's2',
          text: "I've been thinking about that reputation a lot lately, because I think AI has turned it into a genuine competitive advantage, and not just for me.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'b3',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's3',
          text: "The conventional wisdom about AI and jobs goes something like this: specialists are safe because AI can't replicate deep expertise, and generalists are at risk because AI can do broad, shallow work faster than any human. I think that framing is exactly wrong.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'pullQuote',
      _key: 'pq1',
      text: 'The people who benefit most from AI are the ones who always knew just enough to be dangerous.',
    },
    {
      _type: 'block',
      _key: 'b4',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's4',
          text: "Here's what I've actually observed. Deep specialists are increasingly hitting a ceiling because their value is in a narrow domain, and AI is encroaching on that domain faster than most want to admit. Pure managers who delegate everything and stay out of the work are finding that the layers between them and execution are collapsing. But the person who has always been able to move fluidly across disciplines, pick up new tools quickly, and figure things out without a playbook? That person just got a force multiplier.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'b5',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's5',
          text: "AI doesn't replace range. It amplifies it. When I built a job search agent in Claude, I wasn't a software engineer. I was someone who understood the problem well enough to design a system, knew enough about how the tools worked to configure them correctly, and had enough operational experience to know what good output looked like. The AI did the heavy lifting. My range made it possible to direct that lifting toward something useful.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'b6',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's6',
          text: "The same principle applies to every project in my AI/POC Lab. A college decision tool, a full-stack ecommerce platform, a job search skill that automates daily inbox triage and follow-up tracking. None of these required deep specialization in any single area. All of them required the ability to move across domains and figure things out as you go. That's the dangerous advantage, and AI just made it worth a lot more.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'b7',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's7',
          text: "If you've spent your career being told you're too broad, that you should pick a lane, that you need to specialize: the lane is getting narrower for the specialists, and the broad path just got a lot more interesting.",
          marks: [],
        },
      ],
      markDefs: [],
    },
  ],
};

// ── Case Studies ─────────────────────────────────────────────────────────────

const caseStudies = [
  {
    _type: 'caseStudy',
    _id: 'caseStudy-erp',
    title: 'ERP Divestment Under Deadline',
    industry: 'Financial Services',
    badgeText: 'FIN SVC',
    badgeColor: '#005C8F',
    summary:
      'A public investment management company needed to split into two independent public entities in 90 days to meet an SEC filing deadline. The project required preserving all historical transactions, documents, and approvals across both entities while maintaining full GAAP compliance.',
    results: [
      { _key: 'r1', metric: '90 days', description: 'Full divestment delivered on deadline' },
      { _key: 'r2', metric: '$200K', description: 'Project delivered on time and on budget' },
      { _key: 'r3', metric: 'Zero', description: 'Loss of historical transaction data' },
    ],
    problem:
      'The company faced a hard SEC filing deadline requiring a fully compliant ERP split. Both resulting entities needed to operate independently with complete historical records intact. No data loss, no compliance gaps, no delays.',
    solution:
      'Designed and delivered a GAAP-compliant ERP divestment solution splitting the parent into two fully independent public entities. Preserved complete transaction history, document trail, and approval records for both organizations. Managed all technical execution within the 90-day window.',
    order: 1,
  },
  {
    _type: 'caseStudy',
    _id: 'caseStudy-pay',
    title: 'Payment Automation for a National Franchiser',
    industry: 'Ecommerce / Retail',
    badgeText: 'E-COM',
    badgeColor: '#1C75BC',
    summary:
      'A national franchiser was manually processing weekly payments across 250+ franchisees with no mechanism for corrections or reversals at scale. Multiple distinct payment streams including R&D, Advertising, and a company charity each required accurate recording against both the parent company and the applicable subsidiary.',
    results: [
      { _key: 'r1', metric: '40 hrs', description: 'Saved monthly through automation' },
      { _key: 'r2', metric: '250+', description: 'Franchisees on a single payment system' },
      { _key: 'r3', metric: 'Auto', description: 'Reconciliation and conflict detection' },
    ],
    problem:
      'Manual payment processing across 250+ franchisees was labor-intensive and error-prone. Multiple payment streams needed correct routing to both parent and subsidiary entities. No automated mechanism existed for flagging conflicts or processing corrections and reversals at scale.',
    solution:
      'Engineered a custom bank integration automating weekly payment collection and transmission. Built auto-reconciliation and payment correction and reversal mechanisms using a staging interface to surface conflicts from store POS systems before they hit the ledger. All payment streams routed correctly across parent and subsidiary entities.',
    order: 2,
  },
  {
    _type: 'caseStudy',
    _id: 'caseStudy-avi',
    title: 'Aviation Lease Management System',
    industry: 'Aviation / Financial Services',
    badgeText: 'AVIA',
    badgeColor: '#0B4F6C',
    summary:
      'A financial services company managing aviation assets had no connection between lease contract data, airframe and engine maintenance records, and their deal acquisition pipeline. Each system operated in isolation, creating blind spots across the asset lifecycle.',
    results: [
      { _key: 'r1', metric: 'Unified', description: 'Lease, maintenance, and deal data' },
      { _key: 'r2', metric: 'Live', description: 'Maintenance forecasting from asset data' },
      { _key: 'r3', metric: 'Two-way', description: 'Salesforce and ERP integration' },
    ],
    problem:
      'Lease contracts, maintenance records, and deal pipeline lived in separate systems with no integration. Operations teams couldn\u2019t forecast maintenance obligations from contract data. Deal acquisition in Salesforce had no visibility into financial and lease data in the ERP.',
    solution:
      'Designed and built a two-way integration between Salesforce Deal Management and Microsoft Business Central ERP with a custom aviation vertical. Built lease management with contract requirement tracking and integrated external airframe and engine data for live maintenance forecasting. Deal acquisition and financial data kept in sync across both platforms.',
    order: 3,
  },
  {
    _type: 'caseStudy',
    _id: 'caseStudy-sql',
    title: 'Global Inventory Search Reengineering',
    industry: 'Luxury Retail',
    badgeText: 'LUX',
    badgeColor: '#37A3D8',
    summary:
      'Six weeks before go-live, the vendor demonstrated a global jewelry and watch inventory search that took over 2 hours to run. The business required data no older than 15 minutes. With go-live approaching, waiting for the vendor was not an option.',
    results: [
      { _key: 'r1', metric: '2 hrs to 2 min', description: 'Search runtime after reengineering' },
      { _key: 'r2', metric: '4 weeks', description: 'Working solution under go-live pressure' },
      { _key: 'r3', metric: '15 min', description: 'Refresh cycle, avg data age under 10 min' },
    ],
    problem:
      'The vendor\u2019s NAV-based search ran in C/AL code and took over 2 hours to complete a full global inventory query. The business needed a 15-minute refresh cycle to support operations across international store locations. Six weeks before go-live, there was no time for the vendor to rebuild their solution.',
    solution:
      'Reverse engineered the NAV architecture and C/AL logic to map the underlying data model. Rebuilt the global inventory search natively in Microsoft SQL Server, bypassing NAV entirely. Solved a series of technical blockers along the way. Working solution delivered in 4 weeks, refined through go-live and beyond.',
    order: 4,
  },
];

// ── AI / POC Lab Projects ────────────────────────────────────────────────────

const projects = [
  {
    _type: 'project',
    _id: 'project-jsa',
    title: 'Job Search Agent',
    badgeText: 'JSA',
    badgeColor: '#005C8F',
    status: 'Fully Operational',
    shortDescription:
      'A configured Claude system that manages an active VP-level job search end to end.',
    problem:
      'An active VP-level job search involves dozens of open applications across multiple platforms, inbound recruiter contacts, and follow-up deadlines that slip without a system. This agent runs daily, surfaces new roles, tracks every application, surfaces custom fit analysis for each role, and keeps follow-ups and deadlines on schedule so nothing falls through.',
    tags: ['Claude', 'Claude Projects', 'Memory System', 'Web Search', 'Excel Automation'],
    detailSections: [
      {
        _key: 'd1',
        label: 'What it does',
        body: 'Searches the web daily for new postings across LinkedIn, Indeed, Built In NYC, and company career pages using targeted queries tuned to a specific candidate profile. Evaluates each role against a prioritized criteria set, adds qualifying roles to a structured Excel tracker, deduplicates against existing rows, and flags follow-up deadlines. Keeps the entire application lifecycle on schedule.',
      },
      {
        _key: 'd2',
        label: "How it's built",
        body: "Runs inside a Claude Project with persistent memory. The project holds the resume, LinkedIn profile, and a configuration document encoding the candidate profile, target criteria, search queries, and tracker schema. Memory stores running context between sessions. Output quality has been consistent across 50+ sessions.",
      },
    ],
    order: 1,
    featured: true,
  },
  {
    _type: 'project',
    _id: 'project-ops',
    title: 'Job Search Daily Ops Skill',
    badgeText: 'OPS',
    badgeColor: '#1C75BC',
    status: 'In Progress',
    shortDescription:
      'A reusable Claude skill that runs a full inbox triage and reporting cycle on demand.',
    problem:
      'Job search inboxes fill up fast. Alerts, recruiter emails, and status updates pile up daily. Without a system to process them, good roles get missed, follow-ups slip, and applications age out.',
    tags: ['Claude', 'Gmail MCP', 'Claude Projects', 'Excel', 'python-docx'],
    detailSections: [
      {
        _key: 'd1',
        label: 'What it does',
        body: 'Scans Gmail for alerts and status updates, triages against a candidate profile, enforces a 5-day expiration rule on stale items, checks follow-up deadlines, and delivers a structured daily report to Gmail drafts. Runs on demand, once or multiple times a day. On request, runs detailed fit assessments against specific roles.',
      },
      {
        _key: 'd2',
        label: 'By design',
        body: "Doesn't scrape job boards directly. Doesn't take any action without confirmation. Drafts only, never sends. Every constraint is a deliberate product decision.",
      },
    ],
    order: 2,
    featured: true,
  },
  {
    _type: 'project',
    _id: 'project-cdt',
    title: 'College Decision Tracker',
    badgeText: 'CDT',
    badgeColor: '#0B4F6C',
    status: 'In Progress',
    shortDescription:
      'A custom React tool that turns a high-stakes college choice into a data-driven scoring process.',
    problem:
      'Most families navigate college decisions with spreadsheets, gut feel, and competing opinions. This tool forces clarity by weighting every factor that matters, scoring every school, and updating rankings in real time as aid letters arrive and campus visits happen.',
    tags: ['Claude', 'React/JSX', 'Claude Projects', 'window.storage API'],
    detailSections: [
      {
        _key: 'd1',
        label: 'What it does',
        body: 'Each school is scored across 19 parameters in weighted categories: academics, financial, campus life, location, and career outcomes. The family sets weights once and composite scores calculate automatically. As new information arrives, rankings recalculate instantly. A live leaderboard shows current standings at any point.',
      },
      {
        _key: 'd2',
        label: 'How it was built',
        body: "Spec'd, built, tested, and refined across multiple Claude sessions using React/JSX with the window.storage API for persistent state. Built for a real family making a real decision across 12 schools. The process involved changing requirements mid-build, version discipline to avoid breaking existing data, and a real user pushing back on design decisions.",
      },
    ],
    order: 3,
    featured: true,
  },
  {
    _type: 'project',
    _id: 'project-bgb',
    title: 'BuyGiveBack \u2014 Mission-Driven Ecommerce',
    badgeText: 'BGB',
    badgeColor: '#37A3D8',
    status: 'In Progress',
    shortDescription:
      'A full-stack ecommerce platform built with Claude Code that donates 50% of net profit to NYC school districts.',
    problem:
      'Discount retail has no differentiation. This platform ties every purchase to a transparent, publicly auditable giving formula. Customers see exactly how their savings translate to donations for underserved NYC school districts.',
    tags: ['Claude Code', 'Next.js 15', 'Supabase', 'Stripe', 'Vercel'],
    detailSections: [
      {
        _key: 'd1',
        label: 'What it does',
        body: 'Sells below-retail products and donates 50% of net profit to underserved NYC school districts. The donation formula is public-facing and calculated transparently. At checkout, customers see their cart savings and are prompted to donate that amount. A public dashboard shows live totals by school district.',
      },
      {
        _key: 'd2',
        label: 'Tech stack',
        body: 'Next.js 15 App Router on Vercel, Supabase for database and auth, Stripe for payments, Resend for transactional email. Entire codebase built using Claude Code from initial scaffold through feature implementation.',
      },
    ],
    order: 4,
    featured: true,
  },
];

// ── Run ──────────────────────────────────────────────────────────────────────

async function seed() {
  const allDocs = [blogPost, ...caseStudies, ...projects];
  console.log(`\nSeeding ${allDocs.length} documents into Sanity (${projectId} / ${dataset})...\n`);

  const tx = client.transaction();
  for (const doc of allDocs) {
    tx.createOrReplace(doc);
  }

  const result = await tx.commit();
  console.log(`✅  Done! ${result.documentIds.length} documents created/updated.\n`);

  console.log('Documents:');
  for (const doc of allDocs) {
    console.log(`   ${doc._type.padEnd(12)} → ${doc.title}`);
  }
  console.log('');
}

seed().catch((err) => {
  console.error('❌  Seed failed:', err.message);
  process.exit(1);
});
