import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  eyebrow: string;
  headline: string;
  intro?: string;
  children?: ReactNode;
  headshot?: string;
}

export default function Hero({ eyebrow, headline, intro, children, headshot }: HeroProps) {
  return (
    <section className={headshot ? styles.heroWithPhoto : styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.headline}>{headline}</h1>
        {intro && <p className={styles.intro}>{intro}</p>}
        {children}
      </div>
      {headshot && (
        <div className={styles.headshot}>
          <Image
            src={headshot}
            alt="Gabriel Philipson"
            width={200}
            height={200}
            priority
          />
        </div>
      )}
    </section>
  );
}
