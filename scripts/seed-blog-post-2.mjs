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
  _id: 'blogPost-ai-writes-what-youre-excited-about',
  title: "AI Writes What You're Excited About. That's Not Always What You Want to Say.",
  slug: { _type: 'slug', current: 'ai-writes-what-youre-excited-about' },
  eyebrow: 'Blog',
  publishDate: '2026-03-25',
  readTime: '5 min read',
  authorName: 'Gabriel Philipson',
  authorBio: 'Founder of IES Consulting Group. 20 years in enterprise technology. Currently building AI systems and taking on the right consulting engagements. Based in Brooklyn.',
  ctaLabel: 'See what was built',
  ctaTitle: 'The AI/POC Lab documents the projects behind this post.',
  ctaBody: 'The job search agent, the college decision tracker, the site itself. Working systems built for real problems, with honest write-ups on how each one came together.',
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
          text: "I built this site using AI heavily throughout. Strategy, positioning, copy, HTML prototypes, the full technical build. When it launched I was pleased with how it came together. Then I read it the way a stranger would, and something was off.",
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
          text: "The site was supposed to position me as a senior technology executive with 20 years of enterprise delivery experience, who also happens to be building serious AI systems. What it actually communicated, if you read it fresh with no context, was closer to: AI enthusiast who also has a consulting background.",
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b3',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 's3',
          text: "That's a meaningful difference. And it happened because of something specific about how AI writing tools work that's worth understanding before you use one for anything strategic.",
          marks: [],
        },
      ],
    },
    {
      _type: 'pullQuote',
      _key: 'pq1',
      text: "AI amplifies what you're most excited about in your input. Not what you most need to communicate.",
    },
    {
      _type: 'block',
      _key: 'b4',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 's4',
          text: "When I was working with Claude to build this site, I was genuinely energized by the AI work. The job search agent, the college decision tracker, the POC Lab. Those projects were fresh, interesting, and I talked about them a lot across dozens of sessions. The AI picked up on that enthusiasm and it shows in the output. The word AI appears in the hero section, the What I Do section, the About teaser, and the section label on the POC Lab preview. All on the homepage, before you scroll.",
          marks: [],
        },
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
          text: "The consulting work, the actual reason a client would hire me or an employer would want me, got less airtime in the inputs and proportionally less emphasis in the outputs. Not because the AI made a mistake. Because it was doing exactly what it was built to do: reflect back what you gave it, amplified.",
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b6',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 's6',
          text: "Here's what the homepage subhead looked like when we finished:",
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
          _key: 's7a',
          text: 'Before: ',
          marks: ['strong'],
        },
        {
          _type: 'span',
          _key: 's7b',
          text: "\"I've spent 20 years leading technology at the executive level, managing teams, owning roadmaps, partnering with the C-suite. At this point in my career, I delegate what should be delegated. But AI has changed what one person can build, and I've been building. This site documents both sides: the client work and the AI systems I've put together myself.\"",
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
          _key: 's8a',
          text: 'After: ',
          marks: ['strong'],
        },
        {
          _type: 'span',
          _key: 's8b',
          text: "\"20 years leading enterprise technology at the executive level. ERP strategy, platform modernization, digital transformation. I've built and led teams, owned roadmaps, and partnered with the C-suite across financial services, retail, aviation, and ecommerce. I also build AI systems. This site documents both sides of that.\"",
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b9',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 's9',
          text: "Both versions are accurate. The difference is what leads and what follows. The first version gets to the leadership career in sentence one and then pivots to AI in sentence three. The revised version establishes the career in full first and positions AI as an additional capability in the second-to-last sentence. A stranger reading each version for five seconds gets a different impression of who this person is.",
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
          text: "The meta title had the same problem. The original read: \"Gabriel Philipson -- ERP Consultant & AI Builder.\" That gives equal billing to consulting and AI building. The suggested fix: \"Gabriel Philipson -- Technology Executive & ERP Consultant.\" Same person. Clearer primary identity.",
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
          text: "Even the navigation order reflected the drift. The original nav led with Services, which is fine -- it's what I offer. But Case Studies, the page with the actual proof of delivery, was second. If you're trying to establish credibility before asking someone to evaluate your services, lead with the evidence. Case Studies should be first. The AI didn't make that call badly. I didn't specify it clearly enough upfront, and the default was fine on its own. It just wasn't optimized for the goal.",
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
          text: "None of this is a criticism of using AI for strategic copy. I'd do it the same way again. The output was good. The issue is that reviewing AI-assisted copy requires a specific kind of skepticism that's easy to skip when you've been close to the material for a long time. You need to read it as someone who has never heard of you, has no investment in the work, and is making a fast judgment about whether to keep reading.",
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
          text: "The questions worth asking before you publish anything AI has helped you write:",
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
          text: "What is the first impression a stranger gets from this page in five seconds? Is that the impression you want? What are you most excited about in this material, and is that enthusiasm appropriately weighted against the things that matter more to your audience? If you stripped out every AI reference, what would be left -- and is that enough to stand on its own?",
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
          text: "The AI did its job. The job of reading the output with strategic distance is still yours.",
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
