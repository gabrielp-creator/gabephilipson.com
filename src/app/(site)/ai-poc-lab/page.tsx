import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import SectionLabel from '@/components/SectionLabel/SectionLabel';
import { getProjects } from '@/sanity/queries';
import ProjectList from './ProjectList';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'AI / POC Lab',
  description: 'Real AI projects built to solve real problems. Job search agents, college decision tools, ecommerce platforms, and more.',
  openGraph: {
    title: 'AI / POC Lab — Gabriel Philipson',
    description: 'Not demos for the sake of demos. Each project started with a genuine need and is either in active use or in progress.',
    url: 'https://gabephilipson.com/ai-poc-lab',
  },
};

const comingSoon = [
  { badge: 'BC1', title: 'Business Central POC #1', stack: 'Microsoft Dynamics 365 Business Central' },
  { badge: 'BC2', title: 'Business Central POC #2', stack: 'Microsoft Dynamics 365 Business Central' },
  { badge: 'ERP', title: 'AI-Assisted ERP Documentation', stack: 'Claude, Business Central, Azure' },
];

export default async function AiPocLabPage() {
  const projects = await getProjects();

  return (
    <>
      <Hero
        eyebrow="AI / POC Lab"
        headline="Not Just Aware of AI. Using It."
        intro="This section documents what I've actually built, working systems applied to real problems. Not demos for the sake of demos. Each project started with a genuine need, got built across multiple sessions, and is either in active use or in progress. The stack varies. The approach is the same: figure out what AI can actually do by building something that has to work."
      />

      <section className={styles.featured}>
        <SectionLabel>Active projects</SectionLabel>
        <ProjectList projects={projects} />
      </section>

      <section className={styles.coming}>
        <SectionLabel>Coming soon</SectionLabel>
        <div className={styles.comingGrid}>
          {comingSoon.map((item) => (
            <div className={styles.comingCard} key={item.badge}>
              <div className={styles.comingBadge}>{item.badge}</div>
              <div className={styles.comingTitle}>{item.title}</div>
              <div className={styles.comingStack}>{item.stack}</div>
              <span className={styles.comingPill}>Coming Soon</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
