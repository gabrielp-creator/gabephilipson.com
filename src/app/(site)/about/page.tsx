import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import SectionLabel from '@/components/SectionLabel/SectionLabel';
import Button from '@/components/Button/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Gabriel Philipson',
  description: '25 years in enterprise technology. Founder of IES Consulting Group. ERP strategy, digital transformation, and AI. NYU Stern MBA. Based in Brooklyn, NY.',
  openGraph: {
    title: 'About Gabriel Philipson — IES Consulting',
    description: 'Senior technology executive and founder of IES Consulting. 25 years in ERP, platform modernization, and digital transformation. Currently building with AI.',
    url: 'https://gabephilipson.com/about',
  },
};

const timeline = [
  {
    date: '2019–Present',
    role: 'President & Founder',
    company: 'IES Consulting Group Corp.',
    desc: 'ERP strategy, digital transformation, and platform modernization for mid-market clients. Led engagements across financial services, ecommerce, aviation, retail, and wholesale. Onshore and offshore delivery team.',
  },
  {
    date: '2025–2026',
    role: 'VP, Product Strategy',
    company: 'Adaptive Business Solutions',
    desc: 'Led product strategy to reposition a complex enterprise jewelry ERP/POS platform as a focused mid-market offering. Defined scope, pricing, go-to-market, and implementation model.',
  },
  {
    date: '2016–2019',
    role: 'Senior Consultant, CBC Retail Practice',
    company: 'Cognizant',
    desc: 'Led enterprise mobility, GDPR compliance, and change management for 700+ reps. Developed go-to-market strategy for blockchain in retail and co-authored a published white paper on blockchain applications.',
  },
  {
    date: '1998–2016',
    role: 'Systems Analyst to Project Manager Lead, IT',
    company: 'Harry Winston',
    desc: '18 years building the technology infrastructure that supported growth from $60M to $250M in annual revenue. Owned the ERP roadmap, POS systems, supply chain, and global retail technology across eight international locations.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        headline="Some Executives Manage the Work. I've Always Done Both."
        intro="I started as a systems analyst and spent the next 25 years getting closer to the hard problems, not further away. ERP implementations, financial system splits, supply chain overhauls, platform modernization. The work that takes years to get right and costs real money when it doesn't. That's where I've spent my career, and it's what I bring to every engagement."
      />

      <section className={styles.section}>
        <SectionLabel>How I work</SectionLabel>
        <h2 className={styles.sectionTitle}>Strategy without execution is just a deck.</h2>
        <p className={styles.body}>I&apos;ve been on both sides of the table. I&apos;ve sat in the C-suite conversations where the roadmap gets set, and I&apos;ve been the person who had to make it work when the reality didn&apos;t match the plan. That experience shapes how I approach every engagement.</p>
        <p className={styles.body}>I don&apos;t hand off a strategy document and disappear. I stay in the work. I manage the team, make the technical calls, and partner with your internal stakeholders to get things across the line. At my level, that combination of executive judgment and hands-on delivery is not common. It&apos;s what IES is built around.</p>
        <p className={styles.body}>I&apos;m also direct. If a project is heading in the wrong direction, I&apos;ll say so. If the budget doesn&apos;t match the scope, we&apos;ll figure that out before we start. I&apos;d rather have a hard conversation early than a harder one later.</p>
      </section>

      <section className={styles.section}>
        <SectionLabel>IES Consulting</SectionLabel>
        <h2 className={styles.sectionTitle}>Why I went independent.</h2>
        <p className={styles.body}>I spent three years at Cognizant doing work I was proud of, but it came with a fly-in, fly-out lifestyle that wasn&apos;t sustainable for my family. When a consulting opportunity came along that offered better work and significantly better compensation, the timing was right. I founded IES in 2019 and haven&apos;t looked back.</p>
        <p className={styles.body}>IES is a specialized firm. We focus on ERP strategy, digital transformation, and platform modernization for mid-market companies. I lead a delivery team across onshore and offshore resources and take on engagements where the complexity is real and the stakes are high. We&apos;ve worked across financial services, ecommerce, aviation, retail, and wholesale. In every case, the work involved systems the business couldn&apos;t afford to get wrong.</p>
      </section>

      <section className={styles.section}>
        <SectionLabel>AI and what I&apos;m building now</SectionLabel>
        <h2 className={styles.sectionTitle}>AI changed what one person can build.</h2>
        <p className={styles.body}>I&apos;ve been paying attention to AI for years. But paying attention and actually building are different things. Over the past year I&apos;ve been building: a job search agent that runs daily, tracks every application, surfaces custom fit analysis for each role, and keeps follow-ups and deadlines on schedule so nothing falls through. A college decision tool built for a real family navigating 12 schools. A full-stack ecommerce platform built from scratch with Claude Code. The AI/POC Lab on this site documents the work.</p>
        <p className={styles.body}>This matters professionally for two reasons. First, AI is changing what a single operator can deliver, and I want to understand that from the inside, not from a conference recap. Second, the executives who figure out how to use AI as a force multiplier are going to have a real advantage over those who don&apos;t. I&apos;m working on being in the first group.</p>
      </section>

      <section className={styles.section}>
        <SectionLabel>Career timeline</SectionLabel>
        <h2 className={styles.sectionTitle}>From Systems Analyst to Founder. Same Work, Bigger Scope.</h2>
        <div className={styles.timeline}>
          {timeline.map((item) => (
            <div className={styles.timelineItem} key={item.date}>
              <div className={styles.timelineDate}>{item.date}</div>
              <div>
                <div className={styles.timelineRole}>{item.role}</div>
                <div className={styles.timelineCompany}>{item.company}</div>
                <div className={styles.timelineDesc}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel>Outside of work</SectionLabel>
        <h2 className={styles.sectionTitle}>Brooklyn. Photography. Woodworking.</h2>
        <p className={styles.body}>I&apos;ve lived in Brooklyn for years and have no plans to leave. Outside of work I shoot photography, mostly concerts, mostly from 15 to 20 years ago when getting close to the stage was easier than it is now. I&apos;ve also been teaching myself woodworking, which turns out to have a lot in common with software: measure twice, cut once, and the joints either fit or they don&apos;t. Both are in the Hobbies section if you want to see the work.</p>
      </section>

      <div className={styles.ctas}>
        <Button href="/contact">Schedule a 20-Minute Call</Button>
        <Button href="/case-studies" variant="secondary">See the Work</Button>
      </div>
    </>
  );
}
