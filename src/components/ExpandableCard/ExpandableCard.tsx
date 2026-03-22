'use client';

import { useState, ReactNode } from 'react';
import styles from './ExpandableCard.module.css';

interface ExpandableCardProps {
  header: ReactNode;
  detail: ReactNode;
  id: string;
}

export default function ExpandableCard({ header, detail, id }: ExpandableCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.card} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.header}>
        {header}
        <div>
          <button className={styles.readMore} id={`${id}-btn`}>
            {isOpen ? 'Read less \u2212' : 'Read more +'}
          </button>
        </div>
      </div>
      <div className={`${styles.detail} ${isOpen ? styles.detailOpen : ''}`}>
        {detail}
      </div>
    </div>
  );
}
