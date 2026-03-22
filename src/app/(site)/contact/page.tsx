import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import SectionLabel from '@/components/SectionLabel/SectionLabel';
import Button from '@/components/Button/Button';
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Gabriel Philipson',
  description: 'Schedule a 20-minute intro call or send a message. Open to consulting engagements and senior leadership roles. Based in Brooklyn, NY.',
  openGraph: {
    title: 'Contact Gabriel Philipson — IES Consulting',
    description: 'Schedule a 20-minute call or send a message. Open to consulting engagements and senior technology or product leadership roles.',
    url: 'https://gabephilipson.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        headline="Open to the Right Conversation."
        intro="If you're evaluating IES for a consulting engagement or considering me for a senior leadership role, reach out. A 20-minute call is the fastest way to find out if there's a fit."
      />

      <div className={styles.body}>
        <div>
          <SectionLabel>Schedule a call</SectionLabel>
          <h2 className={styles.sectionTitle}>20-Minute Intro Call</h2>
          <p className={styles.text}>Pick a time that works for you. No prep required. We&apos;ll figure out quickly whether there&apos;s a reason to talk further.</p>
          <Button href="/contact">Schedule on Calendly</Button>

          <hr className={styles.divider} />

          <ContactForm />
        </div>

        <div>
          <SectionLabel>Details</SectionLabel>

          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>{'\uD83D\uDCCD'}</div>
            <div>
              <div className={styles.detailLabel}>Location</div>
              <div className={styles.detailValue}>Brooklyn, NY</div>
              <div className={styles.note}>Available for remote engagements and in-person meetings in the New York metro area.</div>
            </div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>{'\uD83D\uDC65'}</div>
            <div>
              <div className={styles.detailLabel}>LinkedIn</div>
              <div className={styles.detailValue}>
                <a href="https://linkedin.com/in/gabrielphilipson" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/gabrielphilipson
                </a>
              </div>
              <div className={styles.note}>Connect or message directly on LinkedIn.</div>
            </div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>{'\uD83C\uDFE2'}</div>
            <div>
              <div className={styles.detailLabel}>Company</div>
              <div className={styles.detailValue}>
                <a href="https://gabephilipson.com" target="_blank" rel="noopener noreferrer">
                  IES Consulting Group Corp.
                </a>
              </div>
              <div className={styles.note}>Specialized ERP strategy, digital transformation, and platform modernization for mid-market companies.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
