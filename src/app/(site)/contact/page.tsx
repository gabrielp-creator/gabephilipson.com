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
          <Button href="https://calendly.com/gabe-iesgroupco">Schedule on Calendly</Button>

          <hr className={styles.divider} />

          <ContactForm />
        </div>

        <div>
          <SectionLabel>Details</SectionLabel>

          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <svg width="20" height="20" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M128 16C80.56 16 40 53.49 40 104c0 67.42 73.65 122.47 84.57 130.15a8 8 0 009 0C144.35 226.47 216 171.42 216 104c0-50.51-40.56-88-88-88Zm0 60a28 28 0 11-28 28 28 28 0 0128-28Z" fill="#1C75BC"/></svg>
            </div>
            <div>
              <div className={styles.detailLabel}>Location</div>
              <div className={styles.detailValue}>Brooklyn, NY</div>
              <div className={styles.note}>Available for remote engagements and in-person meetings in the New York metro area.</div>
            </div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <svg width="20" height="20" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M216 24H40a16 16 0 00-16 16v176a16 16 0 0016 16h176a16 16 0 0016-16V40a16 16 0 00-16-16ZM96 176H64v-80h32Zm-16-96a16 16 0 1116-16 16 16 0 01-16 16Zm112 96h-32v-44c0-12-4-20-16-20s-20 8-20 20v44h-32v-80h32v12c6-10 16-16 28-16 24 0 40 16 40 44Z" fill="#1C75BC"/></svg>
            </div>
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
            <div className={styles.detailIcon}>
              <svg width="20" height="20" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M240 208h-16V96a16 16 0 00-16-16h-56V32a16 16 0 00-16-16H48a16 16 0 00-16 16v176H16a8 8 0 000 16h224a8 8 0 000-16ZM80 64h32a8 8 0 010 16H80a8 8 0 010-16Zm0 40h32a8 8 0 010 16H80a8 8 0 010-16Zm-8 56a8 8 0 01-8-8v-8a8 8 0 0116 0v8a8 8 0 01-8 8Zm48 48h-32v-32h32Zm8-56a8 8 0 01-8-8v-8a8 8 0 0116 0v8a8 8 0 01-8 8Zm56 56h-48v-80h48Z" fill="#1C75BC"/></svg>
            </div>
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
