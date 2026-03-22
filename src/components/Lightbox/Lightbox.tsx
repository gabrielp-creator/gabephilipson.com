'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './Lightbox.module.css';

interface LightboxProps {
  isOpen: boolean;
  title: string;
  images?: { url: string; alt?: string }[];
  onClose: () => void;
}

export default function Lightbox({ isOpen, title, images = [], onClose }: LightboxProps) {
  const [idx, setIdx] = useState(0);
  const total = images.length;

  useEffect(() => {
    if (isOpen) setIdx(0);
  }, [isOpen]);

  const prev = useCallback(() => setIdx((i) => (i > 0 ? i - 1 : total - 1)), [total]);
  const next = useCallback(() => setIdx((i) => (i < total - 1 ? i + 1 : 0)), [total]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    },
    [onClose, prev, next],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
      onClick={onClose}
    >
      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>{'\u2715'}</button>
        <div className={styles.title}>{title} — Screenshots</div>

        {total > 0 ? (
          <>
            <div className={styles.imgArea}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.img}
                src={images[idx].url}
                alt={images[idx].alt || `${title} screenshot ${idx + 1}`}
              />
            </div>
            {total > 1 && (
              <div className={styles.nav}>
                <button className={styles.navBtn} onClick={prev}>&larr; Prev</button>
                <span className={styles.counter}>{idx + 1} of {total}</span>
                <button className={styles.navBtn} onClick={next}>Next &rarr;</button>
              </div>
            )}
          </>
        ) : (
          <div className={styles.imgArea}>
            <div className={styles.imgText}>
              No screenshots yet.<br />
              Upload images in Sanity Studio to populate this gallery.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
