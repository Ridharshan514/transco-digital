'use client';

/**
 * CaseStudiesPage.tsx — Modernized Work & Campaign Showcase
 * Features:
 * 1. Interactive Category Filter Bar
 * 2. Visual Device Mockups with High-Impact Badges
 * 3. Metric Lift Cards (Verified Impact)
 * 4. Client Testimonials & Strategic Breakdown
 */

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  Play,
  TrendingUp,
  Quote,
  CheckCircle2,
  Filter,
} from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import styles from './caseStudies.module.css';

const categories = [
  { id: 'all', label: 'All Verified Work' },
  { id: 'youtube', label: 'YouTube & Creator' },
  { id: 'leadgen', label: 'B2B & Lead Gen' },
  { id: 'branding', label: 'Personal & Brand Identity' },
];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredStudies = caseStudies.filter((cs) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'youtube') return cs.tags.includes('YouTube Automation');
    if (activeFilter === 'leadgen') return cs.tags.includes('Lead Gen') || cs.tags.includes('Paid Campaigns');
    if (activeFilter === 'branding') return cs.tags.includes('Branding') || cs.tags.includes('Personal Branding');
    return true;
  });

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
            <span>Proven Global Track Record</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className={styles.lightWord}>Real numbers engineered for</span>{' '}
            <span className={styles.boldWord}>ambitious global brands.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Explore how we combine algorithm-native video production, strategic positioning, and performance media to transform commercial outcomes.
          </motion.p>
        </div>
      </section>

      {/* ── 2. Filter Bar & Interactive Case Studies ───────────────── */}
      <section className={styles.showcaseSection} aria-label="Case Studies Gallery">
        <div className="container">
          {/* Category Filter Bar */}
          <div className={styles.filterBar}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Case Studies Stack */}
          <motion.div layout className={styles.studiesStack}>
            <AnimatePresence>
              {filteredStudies.map((cs, idx) => (
                <motion.article
                  key={cs.slug}
                  layout
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 32 }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className={styles.studyCard}
                >
                  {/* Left Column: Device Media Mockup */}
                  <div className={styles.mediaCol}>
                    <div className={styles.deviceFrame}>
                      <Image
                        src={cs.coverImage}
                        alt={cs.client}
                        fill
                        className={styles.deviceImg}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        unoptimized
                      />
                      <div className={styles.mediaOverlay} />

                      {/* Floating Category Tag */}
                      <span className={styles.mediaBadge}>{cs.industry}</span>

                      {/* Video Play Overlay */}
                      <div className={styles.playButtonWrap}>
                        <div className={styles.playIconBox}>
                          <Play size={20} fill="#ffffff" stroke="#ffffff" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Case Details & Metrics Lift */}
                  <div className={styles.infoCol}>
                    <div className={styles.clientMeta}>
                      <span className={styles.clientTag}>{cs.client}</span>
                      <span className={styles.caseNumber}>Case 0{idx + 1}</span>
                    </div>

                    <h2 className={styles.studyTitle}>{cs.title}</h2>
                    <p className={styles.studySummary}>{cs.summary}</p>

                    {/* Verified Metrics Lift Grid */}
                    <div className={styles.metricsBox}>
                      <p className={styles.metricsHeader}>
                        <TrendingUp size={14} color="#FF6A00" />
                        <span>Verified Performance Lift</span>
                      </p>
                      <div className={styles.metricsGrid}>
                        {cs.metrics.map((m) => (
                          <div key={m.label} className={styles.metricItem}>
                            <span className={styles.metricStat}>{m.stat}</span>
                            <span className={styles.metricLabel}>{m.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Quote Pill */}
                    {cs.testimonial && (
                      <div className={styles.quotePill}>
                        <Quote size={16} color="#FF6A00" className={styles.quoteIcon} />
                        <div>
                          <p className={styles.quoteText}>&ldquo;{cs.testimonial.quote}&rdquo;</p>
                          <p className={styles.quoteAuthor}>
                            — {cs.testimonial.author}, <span className={styles.quoteRole}>{cs.testimonial.role}</span>
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Tags & Action */}
                    <div className={styles.cardFooter}>
                      <div className={styles.tagsGroup}>
                        {cs.tags.map((t) => (
                          <span key={t} className={styles.tag}>
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link href={`/case-studies/${cs.slug}`} className={styles.deepDiveBtn}>
                        <span>Read Full Case Study</span>
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Bottom Call to Action ───────────────────────────────── */}
      <section className={styles.ctaSection} aria-label="Partner With Us">
        <div className="container">
          <div className={styles.ctaCard}>
            <p className={styles.ctaEyebrow}>Your Brand Next</p>
            <h2 className={styles.ctaTitle}>
              Want to see numbers like this for your own company?
            </h2>
            <p className={styles.ctaDesc}>
              Let&apos;s evaluate your current growth bottleneck and engineer an execution roadmap.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimary}>
                <span>Schedule a Strategic Discovery Call</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
