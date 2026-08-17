'use client';

/**
 * CareersPage.tsx — Modernized Agency Careers & Talent Hub
 */

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  Send,
  Zap,
  Award,
  Globe2,
  Laptop,
  HeartHandshake,
  CheckCircle2,
} from 'lucide-react';
import styles from './careers.module.css';

const perks = [
  { icon: Globe2, title: 'International Impact', desc: 'Work with brands across the UK, USA, UAE, Australia, and Asia.' },
  { icon: Laptop, title: 'Top-Tier Gear & Tooling', desc: 'Full access to cutting-edge AI suites, Adobe Cloud, cinema gear, and hardware stipends.' },
  { icon: Zap, title: 'High Autonomy & Ownership', desc: 'No micro-management. Direct ownership over client campaigns and creative outputs.' },
  { icon: Award, title: 'Mastery & Growth Budget', desc: 'Annual education allowances for courses, masterclasses, and global industry certifications.' },
];

const openPositions = [
  {
    id: 'motion-designer',
    title: 'Senior Motion Designer & Video Editor',
    team: 'Short-Form Studio (TikTok Makers / PSC)',
    type: 'Full-time · Hybrid (Colombo HQ) or Remote',
    exp: '3+ Years Experience',
    desc: 'We are seeking a high-velocity video editor and motion designer with mastery of kinetic typography, pacing psychology, dynamic sound design, and viral short-form retention architectures for TikTok, Reels, and Shorts.',
    requirements: [
      'Expert proficiency in Premiere Pro, After Effects, and DaVinci Resolve',
      'Deep understanding of TikTok and Reels hook retention curves',
      'Portfolio demonstrating high-engagement commercial or creator video work',
    ],
  },
  {
    id: 'performance-marketer',
    title: 'Senior Performance Media Buyer',
    team: 'Paid Growth Studio',
    type: 'Full-time · Hybrid / Remote',
    exp: '4+ Years Experience',
    desc: 'Seeking an analytical paid acquisition specialist to manage multi-million rupee & international dollar ad budgets across Meta Ads Manager, TikTok Spark Ads, and Google Ads, with a strict focus on ROAS.',
    requirements: [
      'Proven track record managing $20K+/month in profitable ad spend',
      'Mastery of conversion attribution (CAPI, GA4, TripleWhale)',
      'Ability to build rapid creative testing frameworks with our design squad',
    ],
  },
  {
    id: 'creative-copywriter',
    title: 'Short-Form Scriptwriter & Creative Strategist',
    team: 'Creative Strategy & Scripting',
    type: 'Full-time · Hybrid / Remote',
    exp: '2+ Years Experience',
    desc: 'You will write high-converting video hooks, storyboards, and short-form scripts that stop scrollers in their tracks and deliver direct-response brand engagement.',
    requirements: [
      'Native fluency in current internet culture, memes, and viral hooks',
      'Experience writing for YouTube creators or direct-to-consumer brands',
      'Exceptional research capabilities to extract unique brand angles',
    ],
  },
];

export default function CareersPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <main className={styles.page}>
      {/* ── 1. Hero Header ────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={14} color="#FF6A00" />
            <span>Join The Transco Digital Collective</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className={styles.lightWord}>Do the best work of your career with a</span>{' '}
            <span className={styles.boldWord}>world-class creative team.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We are assembling an elite international network of video creators, motion designers, growth strategists, and performance marketers.
          </motion.p>
        </div>
      </section>

      {/* ── 2. Culture & Perks ────────────────────────────────────── */}
      <section className={styles.perksSection} aria-label="Why Work Here">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>The Transco Standard</p>
            <h2 className={styles.sectionTitle}>
              <span className={styles.lightWord}>Engineered for</span>{' '}
              <span className={styles.boldWord}>craft, autonomy & growth.</span>
            </h2>
          </div>

          <div className={styles.perksGrid}>
            {perks.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  className={styles.perkCard}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className={styles.perkIconBox}>
                    <Icon size={22} color="#FF6A00" />
                  </div>
                  <h3 className={styles.perkTitle}>{p.title}</h3>
                  <p className={styles.perkDesc}>{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Open Positions Accordion ───────────────────────────── */}
      <section className={styles.rolesSection} aria-label="Open Opportunities">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Immediate Openings</p>
            <h2 className={styles.sectionTitle}>
              <span className={styles.lightWord}>Explore our</span>{' '}
              <span className={styles.boldWord}>current vacancies.</span>
            </h2>
            <p className={styles.sectionSub}>
              Direct hiring with quick 2-round interview turnaround.
            </p>
          </div>

          <div className={styles.rolesStack}>
            {openPositions.map((pos, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={pos.id} className={styles.roleCard}>
                  <button
                    className={styles.roleHeader}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.roleMeta}>
                      <span className={styles.roleTeam}>{pos.team}</span>
                      <h3 className={styles.roleTitle}>{pos.title}</h3>
                      <div className={styles.rolePills}>
                        <span className={styles.rolePill}>{pos.type}</span>
                        <span className={styles.rolePill}>{pos.exp}</span>
                      </div>
                    </div>
                    <div className={`${styles.chevronBox} ${isOpen ? styles.chevronOpen : ''}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className={styles.roleBody}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className={styles.roleDesc}>{pos.desc}</p>

                        <div className={styles.reqBlock}>
                          <strong className={styles.reqHeader}>What we look for:</strong>
                          <ul className={styles.reqList}>
                            {pos.requirements.map((req) => (
                              <li key={req}>
                                <CheckCircle2 size={15} color="#FF6A00" className={styles.checkIcon} />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className={styles.applyAction}>
                          <a
                            href={`mailto:info@transcodigital.com?subject=Application:%20${encodeURIComponent(pos.title)}`}
                            className={styles.applyBtn}
                          >
                            <span>Apply for this Position</span>
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

          {/* Speculative Application Card */}
          <div className={styles.speculativeCard}>
            <div className={styles.speculativeInfo}>
              <h3 className={styles.speculativeTitle}>Don&apos;t see your exact specialty?</h3>
              <p className={styles.speculativeDesc}>
                We are always seeking exceptional talent in viral scripting, 3D motion, media buying, and client strategy. Send us your portfolio directly.
              </p>
            </div>
            <a
              href="mailto:info@transcodigital.com?subject=Speculative%20Application%20%E2%80%94%20Transco%20Digital"
              className={styles.speculativeBtn}
            >
              <span>Submit General Application</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
