import { ReactNode } from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  eyebrow: string;
  headline: string;
  intro?: string;
  children?: ReactNode;
}

export default function Hero({ eyebrow, headline, intro, children }: HeroProps) {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 className={styles.headline}>{headline}</h1>
      {intro && <p className={styles.intro}>{intro}</p>}
      {children}
    </section>
  );
}
