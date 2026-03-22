import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import SectionLabel from '@/components/SectionLabel/SectionLabel';
import Button from '@/components/Button/Button';
import ExpandableCard from '@/components/ExpandableCard/ExpandableCard';
import { getCaseStudies } from '@/sanity/queries';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real ERP and digital transformation engagements. SEC-deadline divestment, payment automation for 250+ franchisees, aviation lease management, and more.',
  openGraph: {
    title: 'Case Studies — IES Consulting Group',
    description: 'Real problems, real systems, measurable results. ERP divestments, payment automation, aviation lease management, and global inventory reengineering.',
    url: 'https://gabephilipson.com/case-studies',
  },
};

interface CaseStudy {
  title: string;
  industry: string;
  badgeText: string;
  badgeColor: string;
  summary: string;
  results: { metric: string; description: string; _key: string }[];
  problem: string;
  solution: string;
  order: number;
}

export default async function CaseStudiesPage() {
  const caseStudies: CaseStudy[] = await getCaseStudies();

  return (
    <>
      <Hero
        eyebrow="Case Studies"
        headline="Real Problems. Real Systems. Measurable Results."
        intro="Every engagement below involved a system the business couldn't afford to get wrong. The clients are anonymized but the work is real. These are the kinds of problems IES takes on."
      />

      <section className={styles.list}>
        <SectionLabel>Selected engagements</SectionLabel>

        {caseStudies.map((cs, i) => (
          <ExpandableCard
            key={cs.title}
            id={`cs-${i}`}
            header={
              <>
                <div className={styles.cardTop}>
                  <div className={styles.cardLeft}>
                    <div className={styles.badge} style={{ background: cs.badgeColor }}>{cs.badgeText}</div>
                    <div>
                      <div className={styles.cardTitle}>{cs.title}</div>
                      <div className={styles.cardIndustry}>{cs.industry}</div>
                    </div>
                  </div>
                </div>
                <p className={styles.cardSummary}>{cs.summary}</p>
                <div className={styles.results}>
                  {cs.results?.map((r) => (
                    <div className={styles.resultPill} key={r._key || r.metric}>
                      <strong>{r.metric}</strong>{r.description}
                    </div>
                  ))}
                </div>
              </>
            }
            detail={
              <div className={styles.detailGrid}>
                <div>
                  <div className={styles.detailLabel}>The problem</div>
                  <div className={styles.detailBody}>{cs.problem}</div>
                </div>
                <div>
                  <div className={styles.detailLabel}>What was built</div>
                  <div className={styles.detailBody}>{cs.solution}</div>
                </div>
              </div>
            }
          />
        ))}
      </section>

      <div className={styles.cta}>
        <h2 className={styles.ctaTitle}>Working on something complex?</h2>
        <p className={styles.ctaBody}>These engagements are representative of the kind of work IES takes on. If you&apos;re dealing with a system problem that has real business consequences, reach out.</p>
        <Button href="/contact">Schedule a 20-Minute Call</Button>
      </div>
    </>
  );
}
