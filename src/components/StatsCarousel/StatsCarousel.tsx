'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './StatsCarousel.module.css';

const sets = [
  {
    name: 'Career outcomes',
    stats: [
      { num: '$60M\u2192$250M', desc: 'Revenue growth supported over a decade at Harry Winston' },
      { num: '50%', desc: 'Reduction in WIP inventory value through supply chain improvements' },
      { num: '250+', desc: 'Franchisees connected via automated payment collection system' },
    ],
  },
  {
    name: 'Delivery results',
    stats: [
      { num: '3 mo.', desc: 'ERP divestment completed to meet SEC filing deadline' },
      { num: '80%', desc: 'Reduction in required approvals via custom workflow build' },
      { num: '40 hrs', desc: 'Saved monthly through automated bank integration' },
    ],
  },
  {
    name: 'Scale',
    stats: [
      { num: '20+', desc: 'Years leading enterprise technology at the executive level' },
      { num: '4x', desc: 'Revenue growth supported at Harry Winston over a decade' },
      { num: '6', desc: 'Companies onboarded to ERP in a single M&A consolidation' },
    ],
  },
  {
    name: 'Efficiency wins',
    stats: [
      { num: '66%', desc: 'Reduction in gemstone safety stock via supply chain improvements' },
      { num: '40%', desc: 'Year-over-year sales volume increase via Dynamics NAV forecasting' },
      { num: '$200K', desc: 'ERP divestment project delivered on time and on budget' },
    ],
  },
  {
    name: 'AI and current work',
    stats: [
      { num: '50+', desc: 'Sessions run on the job search agent with consistent output quality' },
      { num: '12', desc: 'Schools scored across 19 parameters in the college decision tracker' },
      { num: '10', desc: 'Offshore team members coordinated across active client engagements' },
    ],
  },
];

export default function StatsCarousel() {
  const [current, setCurrent] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((i: number) => {
    setOpacity(0);
    setProgress(0);
    setTimeout(() => {
      setCurrent(i);
      setOpacity(1);
    }, 200);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % sets.length);
  }, [current, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    const progressInterval = setInterval(() => {
      setProgress((p) => Math.min(p + 2, 100));
    }, 100);
    return () => { clearInterval(interval); clearInterval(progressInterval); };
  }, [next]);

  return (
    <>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>
      <div className={styles.grid} style={{ opacity }}>
        {sets[current].stats.map((s) => (
          <div className={styles.card} key={s.num}>
            <div className={styles.num}>{s.num}</div>
            <div className={styles.desc}>{s.desc}</div>
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <button
          className={styles.btn}
          onClick={() => goTo((current - 1 + sets.length) % sets.length)}
        >
          &larr; Prev
        </button>
        <div className={styles.dots}>
          {sets.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to stat set ${i + 1}`}
            />
          ))}
        </div>
        <button className={styles.btn} onClick={() => goTo((current + 1) % sets.length)}>
          Next &rarr;
        </button>
        <span className={styles.setName}>{sets[current].name}</span>
      </div>
    </>
  );
}
