'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Sparkles, Send } from 'lucide-react';
import styles from './careers.module.css';

const culturePillars = [
  { title: 'High Autonomy & Ownership', desc: 'No micromanagement. We hire talent and give them the space, budget, and trust to execute at their best.' },
  { title: 'Silicon Valley Standards', desc: 'We benchmark our output against the global tech & agency elite — from visual aesthetics to code architecture.' },
  { title: 'Continuous Growth & Mastery', desc: 'We sponsor tools, courses, and experiments so our team stays ahead of AI, video production, and media algorithm shifts.' },
];

const openPositions = [
  {
    title: 'Senior Motion Designer & Editor',
    type: 'Full-time · Remote / Hybrid (Sri Lanka)',
    team: 'PSC & YouTubeR Studio',
    desc: 'Looking for a master of kinetic typography, dynamic pacing, and broadcast-quality video editing to lead creative cuts for global YouTube and TikTok campaigns.',
  },
  {
    title: 'Performance Marketing Strategist',
    type: 'Full-time · Hybrid (Colombo / Malabe)',
    team: 'Paid Media Group',
    desc: 'Seeking an analytical paid media buyer experienced in Meta Ads Manager, TikTok Spark Ads, and Google PPC with a proven track record scaling ROAS.',
  },
  {
    title: 'Digital Account Manager',
    type: 'Full-time · On-site (Malabe HQ)',
    team: 'Client Operations',
    desc: 'Seeking an empathetic, highly structured digital account lead to manage international client relationships, timelines, and strategy alignment.',
  },
];

export default function CareersPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>Careers at Transco Digital</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="headline-light">Do the best work of your career</span>
            <span className="headline-bold">with a global creative team.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We are building an elite network of strategists, video creators, performance marketers, and visual designers. Join us in shaping digital media.
          </motion.p>
        </div>
      </section>

      {/* Culture */}
      <section className={`${styles.cultureSection} section`}>
        <div className="container">
          <p className="eyebrow">Life at Transco Digital</p>
          <h2 className={styles.sectionTitle}>Built for creators & thinkers.</h2>

          <div className={styles.cultureGrid}>
            {culturePillars.map((p, idx) => (
              <motion.div
                key={p.title}
                className={styles.cultureCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className={styles.cultureBadge}>
                  <Sparkles size={18} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions Accordion */}
      <section className={`${styles.positionsSection} section`}>
        <div className="container">
          <p className="eyebrow">Open Opportunities</p>
          <h2 className={styles.sectionTitle}>Current open roles.</h2>

          <div className={styles.accordionList}>
            {openPositions.map((pos, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={pos.title} className={styles.accordionItem}>
                  <button
                    className={styles.accordionHeader}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <h3>{pos.title}</h3>
                      <div className={styles.positionMeta}>
                        <span>{pos.type}</span>
                        <span>·</span>
                        <span className={styles.teamTag}>{pos.team}</span>
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className={styles.accordionBody}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{pos.desc}</p>
                        <div className={styles.applyRow}>
                          <a
                            href={`mailto:info@transcodigital.com?subject=Application%20for%20${encodeURIComponent(pos.title)}`}
                            className={styles.applyBtn}
                          >
                            Apply for this Role
                            <Send size={14} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* General Application */}
          <div className={styles.generalBox}>
            <div>
              <h3>Don&apos;t see your exact role listed?</h3>
              <p>We are always open to exceptional talent in video, copy, design, and performance media.</p>
            </div>
            <a
              href="mailto:info@transcodigital.com?subject=Speculative%20Application%20%E2%80%94%20Transco%20Digital"
              className={styles.generalBtn}
            >
              Send Speculative Application
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
