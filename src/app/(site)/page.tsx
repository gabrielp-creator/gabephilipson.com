import Image from 'next/image';
import SectionLabel from '@/components/SectionLabel/SectionLabel';
import Button from '@/components/Button/Button';
import StatsCarousel from '@/components/StatsCarousel/StatsCarousel';
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './page.module.css';

const servicePills = [
  'ERP Strategy',
  'Digital Transformation',
  'Custom Integrations',
  'Platform Modernization',
  'Offshore Delivery',
];

const aiTags = ['Claude', 'React', 'Gmail MCP', 'Next.js', 'Claude Code'];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Gabriel Philipson</p>
        <h1 className={styles.headline}>I&apos;ve Led the Strategy and Done the Work.</h1>
        <p className={styles.subhead}>20 years leading enterprise technology at the executive level. ERP strategy, platform modernization, digital transformation. I&apos;ve built and led teams, owned roadmaps, and partnered with the C-suite across financial services, retail, aviation, and ecommerce. I also build AI systems. This site documents both sides of that.</p>
        <div className={styles.ctas}>
          <Button href="/case-studies">See the Work</Button>
          <Button href="/ai-poc-lab" variant="secondary">Explore AI Projects</Button>
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel>By the numbers</SectionLabel>
        <StatsCarousel />
      </section>

      <section className={styles.section}>
        <SectionLabel>What I do</SectionLabel>
        <h2 className={styles.sectionTitle}>End-to-end technology leadership</h2>
        <p className={styles.body}>From ERP strategy through implementation, integration, and platform modernization. With 20 years of hands-on experience across finance, retail, aviation, and ecommerce, leading both onshore and offshore delivery teams.</p>
        <div className={styles.servicesGrid}>
          {servicePills.map((s) => (
            <div className={styles.servicePill} key={s}>{s}</div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel>AI / POC Lab</SectionLabel>
        <h2 className={styles.sectionTitle}>Not just aware of AI. Using it.</h2>
        <p className={styles.body}>The AI/POC Lab documents what I&apos;ve actually built — working systems, not opinions about what AI can do. A job search agent that tracks an active pipeline of applications across multiple platforms. A college decision tool built for a real family navigating 12 schools. A full-stack ecommerce platform built with Claude Code from the ground up. More in progress.</p>
        <div style={{ marginBottom: '1.25rem' }}>
          {aiTags.map((tag) => (
            <span className={styles.tag} key={tag}>{tag}</span>
          ))}
        </div>
        <Button href="/ai-poc-lab" variant="secondary">View AI Projects</Button>
      </section>

      <section className={styles.section}>
        <SectionLabel>About</SectionLabel>
        <div className={styles.aboutRow}>
          <div>
            <h2 className={styles.sectionTitle}>Senior operator. Still gets his hands dirty.</h2>
            <p className={styles.body}>Started as a systems analyst. Spent 18 years at Harry Winston, including a decade where the business grew from $60M to $250M in annual revenue, and built the technology infrastructure that made that scale possible. Ran consulting engagements at Cognizant. Founded IES in 2019. I build and lead teams, manage onshore and offshore delivery, and partner with C-suite stakeholders. NYU Stern MBA. Based in Brooklyn.</p>
            <Button href="/about" variant="secondary">Full Background</Button>
          </div>
          <div className={styles.aboutPhoto}>
            <Image src="/headshot.png" alt="Gabriel Philipson" width={120} height={120} />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel>Get in touch</SectionLabel>
        <h2 className={styles.sectionTitle}>Open to the right conversation.</h2>
        <p className={styles.body}>If you&apos;re evaluating IES for a consulting engagement or considering me for a senior technology role, reach out. A 20-minute call is the fastest way to find out if there&apos;s a fit.</p>
        <Button href="/contact" style={{ marginBottom: '2rem' }}>Schedule a 20-Minute Call</Button>
        <div className={styles.formSection}>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
