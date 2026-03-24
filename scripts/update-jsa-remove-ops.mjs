import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'qeo7nx39',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

async function run() {
  const tx = client.transaction();

  // 1. Update JSA with full HTML prototype content
  tx.createOrReplace({
    _type: 'project',
    _id: 'project-jsa',
    title: 'Autonomous Job Search Agent',
    badgeText: 'JSA',
    badgeColor: '#005C8F',
    status: 'Fully Operational',
    featured: true,
    order: 3,
    shortDescription:
      'A fully autonomous Claude agent that manages an active VP-level job search end to end -- daily Gmail triage, web-indexed ATS search across 6 platforms, quick-filter screening, tracker management, and follow-up discipline, all triggered by a custom /scan slash command or a weekday cron schedule.',
    problem:
      "An active VP-level job search generates more moving parts than most project management systems are built to handle. Dozens of open applications across multiple platforms. Recruiter messages, networking contacts, referral threads. Follow-up deadlines that shift daily. Screening criteria that vary by role, industry, and comp band. ATS portals that don't surface roles in email alerts. Without a system holding all of this together, context gets lost between sessions. Good roles get missed. Follow-ups slip. The search slows down at exactly the point it needs to speed up.",
    tags: [
      'Claude',
      'Cowork Plugin',
      'Custom Slash Command',
      'Gmail MCP',
      'Web Search',
      'openpyxl',
      'Excel',
    ],
    detailSections: [
      {
        _type: 'object',
        _key: 'ds1',
        label: 'What it does',
        body: 'The agent runs as a Cowork plugin with a custom /scan slash command that triggers the full workflow with zero preamble -- no clarifying questions, no recap, just execution. It also runs automatically at 8:02 AM ET on weekdays via cron. The /scan command accepts natural language variants ("run the scan," "check my job alerts," "any new jobs," "daily scan") and fires the same 7-step workflow every time.',
      },
      {
        _type: 'object',
        _key: 'ds2',
        label: 'The 7-step workflow',
        body: '1. Loads context -- reads the candidate profile, dynamic glossary, and Job Search Tracker spreadsheet to establish full session awareness before any action is taken.\n\n2. Scans Gmail -- searches for LinkedIn and Indeed alerts, ATS status updates, recruiter responses, and rejection notices.\n\n3. Searches ATS platforms -- runs indexed web queries across Workday, Greenhouse, Lever, SmartRecruiters, iCIMS, and Nigel Frank to catch roles that bypass email alerts entirely. Results are flagged "Verify still open" when posting date cannot be confirmed.\n\n4. Triages new roles -- runs two-pass deduplication against the tracker, applies quick filters (level, location, function, industry, comp), and classifies each role by AI relevance: core AI role, AI-component, or AI-mentioned. AI-component roles are parked in a holding status rather than closed outright.\n\n5. Checks follow-ups -- reviews every open application row by row, flags overdue follow-ups and upcoming deadlines. A 5-day rule flags "To Apply" roles that have aged out. A 10-business-day rule surfaces applications with no response.\n\n6. Drafts summary email -- compiles a structured HTML report with clickable job description links and drafts it directly to Gmail.\n\n7. Updates the tracker -- writes new rows, status changes, and closures to Job_Search_Tracker_MASTER.xlsx via openpyxl, and timestamps the update.',
      },
      {
        _type: 'object',
        _key: 'ds3',
        label: 'How it is built',
        body: 'The /scan command is defined as a custom skill mapping to a 237-line SKILL.md containing the full execution spec -- every step, every rule, every edge case. CLAUDE.md holds working context between sessions. A memory directory stores the candidate profile, dynamic glossary, and project details. The glossary controls search sources, industry priorities, exclusion rules, and screening thresholds -- all editable without touching code. The Excel tracker is read and written programmatically via openpyxl. A family of related scheduled tasks (job-search-apply, job-search-review, job-search-update, job-search-save) extends the system for specific sub-workflows. The scan skill includes an evals directory for quality testing.',
      },
    ],
  });

  // 2. Delete OPS
  tx.delete('project-ops');
  tx.delete('drafts.project-ops');

  // 3. Fix case study order: ERP(1), Payment(2), Aviation(3), SQL(4)
  tx.patch('caseStudy-erp', { set: { order: 1 } });
  tx.patch('caseStudy-pay', { set: { order: 2 } });
  tx.patch('caseStudy-avi', { set: { order: 3 } });
  tx.patch('drafts.caseStudy-avi', { set: { order: 3 } });
  tx.patch('caseStudy-sql', { set: { order: 4 } });

  // 4. Fix project order: GPS(1), CDT(2), JSA(3), BGB(4)
  tx.patch('project-gps', { set: { order: 1 } });
  tx.patch('project-cdt', { set: { order: 2 } });
  // JSA order set above in createOrReplace (3)
  tx.patch('project-bgb', { set: { order: 4 } });

  const result = await tx.commit();
  console.log('Transaction committed:', result.transactionId);
  console.log('Done! JSA updated, OPS deleted, case studies and projects reordered.');
}

run().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
