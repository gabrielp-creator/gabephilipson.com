import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'qeo7nx39',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const doc = {
  _type: 'blogPost',
  _id: 'blogPost-is-ai-too-big-to-fail',
  title: 'Is AI Too Big to Fail?',
  slug: { _type: 'slug', current: 'is-ai-too-big-to-fail' },
  eyebrow: 'Blog',
  publishDate: '2026-03-27',
  readTime: '7 min read',
  authorName: 'Gabriel Philipson',
  authorBio: 'Founder of IES Consulting Group. 20 years in enterprise technology. Currently building AI systems and taking on the right consulting engagements. Based in Brooklyn.',
  ctaLabel: 'See what is being built',
  ctaTitle: 'The AI/POC Lab documents what is possible at today\'s prices.',
  ctaBody: 'Working systems built for real problems, while the window is open. Job search agent, college decision tracker, ecommerce platform, and more.',
  body: [
    {
      _type: 'block',
      _key: 'b1',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 's1',
          text: 'I pay $100 a month for Claude Max. For that I get what amounts to an extremely capable executive assistant, a coding partner, a research analyst, a copywriter, and a systems architect, available around the clock, with no learning curve and no onboarding. By any reasonable measure, it is one of the best deals in the history of business software.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b2',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 's2',
          text: 'It is also not the real price. Not even close.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b3',
      style: 'normal',
      markDefs: [
        {
          _key: 'link1',
          _type: 'link',
          href: 'https://www.ksred.com/claude-code-pricing-guide-which-plan-actually-saves-you-money/',
        },
      ],
      children: [
        {
          _type: 'span',
          _key: 's3a',
          text: 'One developer documented their Claude Code usage over eight months',
          marks: ['link1'],
        },
        {
          _type: 'span',
          _key: 's3b',
          text: ' and found the API equivalent of their $100 Max subscription would have cost $15,000. A single month of heavy usage would have run $5,623 at API rates. For the many people on the standard $20 Claude Pro subscription, the gap is similar in proportion. The compute cost of what a heavy Pro user actually consumes runs multiples of what they pay. The subscription pricing exists not because AI is cheap to deliver, but because the companies providing it are absorbing the difference, funded by billions in venture capital, while they compete for market share.',
          marks: [],
        },
      ],
    },
    {
      _type: 'statRow',
      _key: 'b4',
      stats: [
        { _type: 'stat', _key: 'stat1', number: '$14B', label: "OpenAI's projected cash burn in 2026, up from $8–9B in 2025" },
        { _type: 'stat', _key: 'stat2', number: '17:1', label: 'Ratio of AI infrastructure investment to consumer AI revenue in 2025' },
        { _type: 'stat', _key: 'stat3', number: '$3T', label: 'Morgan Stanley estimate for global data center spending between 2025 and 2028' },
      ],
    },
    {
      _type: 'block',
      _key: 'b5',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 's5',
          text: 'This is not a secret, exactly. The numbers are out there for anyone who looks. OpenAI is projected to burn $14 billion in 2026. Anthropic\'s margins remain under pressure from higher than expected inference costs. A 2025 analysis found a 17:1 mismatch between AI infrastructure investment and consumer AI revenue, over $200 billion going in and roughly $12 billion coming back out from direct subscriptions. Morgan Stanley puts global data center spending at $3 trillion between 2025 and 2028. Someone is paying for all of that. Right now it is investors. Eventually it is us.',
          marks: [],
        },
      ],
    },
    {
      _type: 'pullQuote',
      _key: 'pq1',
      text: 'Every time you send a complex query, the AI lab is effectively losing money on the transaction.',
    },
    {
      _type: 'block',
      _key: 'b6',
      style: 'normal',
      markDefs: [
        {
          _key: 'link2',
          _type: 'link',
          href: 'https://www.axios.com/2026/03/12/ai-models-costs-ipo-pricing',
        },
      ],
      children: [
        {
          _type: 'span',
          _key: 's6a',
          text: 'That line is not rhetorical. It is from ',
          marks: [],
        },
        {
          _type: 'span',
          _key: 's6b',
          text: 'an Axios report published earlier this month',
          marks: ['link2'],
        },
        {
          _type: 'span',
          _key: 's6c',
          text: '. The economics of the current AI market closely resemble what happened with Uber and DoorDash in the 2010s, the so-called millennial lifestyle subsidy, where venture capital underwrote artificially cheap prices long enough to build habits, then prices adjusted to reality once the market was locked in. AI is following the same playbook, at a scale that dwarfs anything the gig economy attempted.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b7',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 's7',
          text: 'What makes this different, and more concerning, is the degree to which businesses and individuals have already restructured their work around AI tools. The gig economy subsidy affected how you got a ride. The AI subsidy is affecting how companies hire, how small businesses operate, how freelancers price their services, and how individuals build things they could not have built a few years ago. The dependency runs deeper and the blast radius of a repricing is correspondingly larger.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b8',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 's8',
          text: 'So what actually happens when the subsidy ends?',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b9',
      style: 'normal',
      markDefs: [
        {
          _key: 'link3',
          _type: 'link',
          href: 'https://ardalis.com/ai-benefits---but-at-what-cost/',
        },
      ],
      children: [
        {
          _type: 'span',
          _key: 's9a',
          text: 'The most direct answer is that prices go up. ',
          marks: [],
        },
        {
          _type: 'span',
          _key: 's9b',
          text: 'One analyst has predicted that agentic AI subscriptions like Claude Code and Copilot could increase by 10x to 100x from their early 2026 levels by end of 2027.',
          marks: ['link3'],
        },
        {
          _type: 'span',
          _key: 's9c',
          text: ' That is a wide range but both ends are uncomfortable. A 10x increase on a $20 Claude Pro subscription means $200 a month. On a $100 Max subscription, $1,000. For a solo consultant or small business owner, that is a real decision, not a rounding error. A 100x increase prices out most of the people currently getting the most creative value from these tools.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b10',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 's10',
          text: 'The ripple effects extend well beyond anyone with a direct AI subscription. Small businesses that restructured operations around AI tools, eliminating headcount and repricing their services based on AI-assisted margins, would face a painful adjustment. The freelancers and side-hustle operators who built their entire value proposition around current AI economics would find the math no longer works. Larger companies that baked AI productivity into financial projections would need to restate assumptions they thought were settled. And because AI has become embedded in so much of how work gets done across the broader economy, a sharp repricing would not stay contained to the technology sector. The consultancies, the agencies, the small businesses, the individual operators who have retooled around AI at current prices would all feel it. The potential for a meaningful economic shock, the kind that moves beyond a single industry, is not something most of the optimistic AI coverage is willing to sit with.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b11',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 's11',
          text: 'There is also a reasonable counterargument, and it is worth taking seriously. Compute costs have been falling consistently, and hardware efficiency is improving. But this is where the counterargument runs into a structural problem. Even as the cost per query falls, the frontier model race keeps accelerating. Building a more capable model requires dramatically more compute, more training data, and more engineering hours. The efficiency gains on individual inference do not keep pace with the cost increases required to push models to the next level. And critically, there is no natural incentive for AI companies to slow down. So long as capital is flowing freely, the competitive logic demands more capability, more features, and more complexity, regardless of whether the economics of delivering it sustainably have been solved. This is the treadmill. Costs per token fall, but the ambition of what gets built keeps rising, and the total bill keeps growing.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b12',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 's12',
          text: 'The hiring question sits underneath all of this and almost nobody is asking it directly. If AI reprices significantly, does the calculus shift back toward human labor for the tasks AI is currently performing on the cheap? Or has enough structural change already happened, in headcount, in workflows, in expectations, that a reversal is effectively impossible? The honest answer is probably somewhere in between, which is its own kind of problem.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b13',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 's13',
          text: 'The 2008 financial crisis was not primarily about bad banks. It was about how deeply embedded those banks had become in systems that could not function without them. When Lehman failed, the damage spread not because Lehman was uniquely important but because the financial system had been built around assumptions of continuity that evaporated overnight. The question worth asking about AI is structurally similar. Not whether any single company fails, but whether the broader economy has become dependent enough on AI at current prices that a significant repricing creates damage that travels far beyond the technology sector. The honest answer is that we are closer to that threshold than most coverage suggests.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b14',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 's14',
          text: 'The difference from 2008 is not reassuring. The financial system had been regulated and monitored for decades. There were playbooks, imperfect ones, but playbooks. The Federal Reserve had tools. Governments could move, and did. AI has none of that infrastructure. There is no regulator standing by with a stabilization mechanism, no equivalent of deposit insurance for the businesses and individuals who have restructured their operations around tools that could reprice or disappear. If pricing eventually reflects real cost, the adjustment will not be gradual or orderly. It will move through the economy the way these things always do: faster than anyone planned for, hitting hardest the people and businesses that built the deepest dependency without the resources to absorb the shock.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b15',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 's15',
          text: 'That is the context in which to think about the pace of AI development today. People who are actively building with AI often describe feeling overwhelmed, that the technology is moving faster than they can absorb it. That feeling is real. But given what is at stake economically if the subsidy window closes, perhaps the real risk is not that AI is moving too fast. Perhaps it is that we are not moving fast enough.',
          marks: [],
        },
      ],
    },
  ],
};

async function run() {
  const result = await client.createOrReplace(doc);
  console.log('Created:', result._id, result.title);
}

run().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
