'use client';

import { useState } from 'react';
import ExpandableCard from '@/components/ExpandableCard/ExpandableCard';
import Lightbox from '@/components/Lightbox/Lightbox';
import { projectScreenshots } from '@/data/screenshots';
import styles from './page.module.css';

interface WorkflowStep {
  _key: string;
  title: string;
  body: string;
}

interface Project {
  title: string;
  badgeText: string;
  badgeColor: string;
  status: string;
  shortDescription: string;
  problem: string;
  tags: string[];
  detailSections: { _key: string; label: string; body: string }[];
  workflow?: WorkflowStep[];
  screenshots?: string[];
  demoUrl?: string;
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; title: string; images: { url: string; alt?: string }[] }>({
    isOpen: false,
    title: '',
    images: [],
  });
  const [activeTab, setActiveTab] = useState<Record<string, number>>({});

  return (
    <>
      {projects.map((p, i) => {
        const projectKey = p.badgeText.toLowerCase();
        const htmlShots = projectScreenshots[projectKey];
        const activeTabIndex = activeTab[projectKey] ?? 0;

        return (
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
              {p.workflow && p.workflow.length > 0 && (
                <div className={styles.detailSection}>
                  <div className={styles.detailLabel}>The {p.workflow.length}-step workflow</div>
                  <ol className={styles.workflowList}>
                    {p.workflow.map((step, idx) => (
                      <li key={step._key || idx} className={styles.workflowStep}>
                        <div className={styles.workflowNum}>{idx + 1}</div>
                        <div className={styles.workflowContent}>
                          <div className={styles.workflowTitle}>{step.title}</div>
                          <div className={styles.workflowBody}>{step.body}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              <div className={styles.screenshots}>
                <div className={styles.detailLabel}>Screenshots</div>
                {htmlShots ? (
                  <div className={styles.htmlScreenshots}>
                    <div className={styles.screenshotTabs}>
                      {htmlShots.map((s, idx) => (
                        <button
                          key={s.label}
                          className={`${styles.screenshotTab} ${activeTabIndex === idx ? styles.screenshotTabActive : ''}`}
                          onClick={(e) => { e.stopPropagation(); setActiveTab(prev => ({ ...prev, [projectKey]: idx })); }}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                    <div
                      className={styles.htmlScreenshotFrame}
                      dangerouslySetInnerHTML={{ __html: htmlShots[activeTabIndex].html }}
                    />
                    <div className={styles.screenshotCaption}>
                      {htmlShots[activeTabIndex].caption}
                    </div>
                  </div>
                ) : p.screenshots && p.screenshots.length > 0 ? (
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
        );
      })}

      <Lightbox
        isOpen={lightbox.isOpen}
        title={lightbox.title}
        images={lightbox.images}
        onClose={() => setLightbox({ isOpen: false, title: '', images: [] })}
      />
    </>
  );
}
