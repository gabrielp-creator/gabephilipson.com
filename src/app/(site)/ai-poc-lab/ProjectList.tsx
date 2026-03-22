'use client';

import { useState } from 'react';
import ExpandableCard from '@/components/ExpandableCard/ExpandableCard';
import Lightbox from '@/components/Lightbox/Lightbox';
import styles from './page.module.css';

interface Project {
  title: string;
  badgeText: string;
  badgeColor: string;
  status: string;
  shortDescription: string;
  problem: string;
  tags: string[];
  detailSections: { _key: string; label: string; body: string }[];
  screenshots?: string[];
  demoUrl?: string;
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; title: string; images: { url: string; alt?: string }[] }>({
    isOpen: false,
    title: '',
    images: [],
  });

  return (
    <>
      {projects.map((p, i) => (
        <ExpandableCard
          key={p.title}
          id={`proj-${i}`}
          header={
            <>
              <div className={styles.cardHeader}>
                <div className={styles.badge} style={{ background: p.badgeColor, color: p.badgeColor === '#37A3D8' ? '#fff' : '#CCEAFC' }}>
                  {p.badgeText}
                </div>
                <div className={styles.cardMeta}>
                  <div className={styles.cardTop}>
                    <div className={styles.cardTitle}>{p.title}</div>
                    <span className={`${styles.status} ${p.status === 'Fully Operational' ? styles.statusLive : styles.statusProgress}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className={styles.cardDesc}>{p.shortDescription}</div>
                </div>
              </div>
              <p className={styles.cardProblem}>{p.problem}</p>
              <div className={styles.tags}>
                {p.tags?.map((tag) => (
                  <span className={styles.tag} key={tag}>{tag}</span>
                ))}
              </div>
            </>
          }
          detail={
            <>
              {p.detailSections?.map((d) => (
                <div className={styles.detailSection} key={d._key || d.label}>
                  <div className={styles.detailLabel}>{d.label}</div>
                  <div className={styles.detailBody}>{d.body}</div>
                </div>
              ))}
              <div className={styles.screenshots}>
                <div className={styles.detailLabel}>Screenshots</div>
                {p.screenshots && p.screenshots.length > 0 ? (
                  <div
                    className={styles.screenshotThumb}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightbox({
                        isOpen: true,
                        title: p.title,
                        images: p.screenshots!.map((url, j) => ({ url, alt: `${p.title} screenshot ${j + 1}` })),
                      });
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.screenshots[0]}
                      alt={`${p.title} preview`}
                      className={styles.screenshotPreview}
                    />
                    {p.screenshots.length > 1 && (
                      <div className={styles.screenshotCount}>+{p.screenshots.length - 1} more</div>
                    )}
                  </div>
                ) : (
                  <div className={styles.screenshotThumb}>
                    <div className={styles.screenshotPlaceholder}>
                      <div className={styles.screenshotIcon}>{'\u25A3'}</div>
                      <div className={styles.screenshotText}>Add screenshots in Sanity Studio</div>
                      <div className={styles.screenshotHint}>Upload images via /studio to populate</div>
                    </div>
                  </div>
                )}
              </div>
            </>
          }
        />
      ))}

      <Lightbox
        isOpen={lightbox.isOpen}
        title={lightbox.title}
        images={lightbox.images}
        onClose={() => setLightbox({ isOpen: false, title: '', images: [] })}
      />
    </>
  );
}
