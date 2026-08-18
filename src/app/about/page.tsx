'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  Sprout,
} from 'lucide-react';
import JourneySection from './JourneySection';
import StudiosSection from './StudiosSection';
import LeadershipSection from './LeadershipSection';
import styles from './about.module.css';

// Lazy load 3D Background
const About3DBackground = dynamic(() => import('./About3DBackground'), { ssr: false });

// ── Real Statistics from Transco Digital ─────────────────────────────────────
const stats = [
  { value: 200, suffix: '+', label: 'Global Clients', detail: 'Across UK, Australia, UAE & Asia' },
  { value: 600, suffix: '+', label: 'Campaigns Launched', detail: 'High-ROI multi-channel execution' },
  { value: 30, suffix: 'K+', label: 'Leads Generated', detail: 'Measurable client revenue growth' },
  { value: 3, suffix: 'M+', label: 'Views Delivered', detail: 'Short-form & creator ecosystem' },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* ── 1. Cinematic 3D Hero ─────────────────────────────────── */}
      <section className={styles.heroSection} aria-label="About Transco Digital">
        <About3DBackground />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            <span>INTERNATIONAL DIGITAL MARKETING AGENCY NETWORK</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className={styles.heroTitleLight}>Making waves</span>
            <span className={styles.heroTitleBold}>globally.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From our founding in 2020 through resilient international expansion, Transco Digital has grown like a seed into a flourishing global tree — turning bold ideas into market leadership for over 200+ ambitious brands worldwide.
          </motion.p>

          {/* Quick Anchor CTA row */}
          <motion.div
            className={styles.heroCtaRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="#growth-timeline" className={styles.heroPrimaryBtn}>
              <Sprout size={16} />
              <span>Watch The Growth Timeline</span>
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
            <a href="#leadership" className={styles.heroSecondaryBtn}>
              <span>Meet The Leadership</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Animated Impact Metrics Bar ────────────────────────── */}
      <section className={styles.metricsSection} aria-label="Key Performance Indicators">
        <div className="container">
          <div className={styles.metricsGrid}>
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                className={styles.metricCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className={styles.metricTopRow}>
                  <div className={styles.metricValue}>
                    {s.value}
                    <span className={styles.metricSuffix}>{s.suffix}</span>
                  </div>
                  <div className={styles.metricAccentGlow} />
                </div>
                <div className={styles.metricLabel}>{s.label}</div>
                <div className={styles.metricDetail}>{s.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Journey of Dreaming Big — GSAP Scroll-Driven Scrollytelling ── */}
      <JourneySection />

      {/* ── 4. Three Specialized Growth Studios ────────────────────── */}
      <StudiosSection />

      {/* ── 5. Leadership Team Spotlight ─────────────────────────────── */}
      <LeadershipSection />

      {/* ── 6. Full-Width Obsidian Call to Action ──────────────────── */}
      <section className={styles.ctaSection} aria-label="Start Your Journey">
        <div className="container">
          <motion.div
            className={styles.ctaCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.ctaBadge}>
              <Sparkles size={14} color="#FF6A00" />
              <span>Partner with Transco Digital</span>
            </div>

            <h2 className={styles.ctaTitle}>
              Ready to make waves with an international digital agency?
            </h2>

            <p className={styles.ctaSub}>
              Let&apos;s engineer your brand&apos;s next major growth chapter. Partner with Transco Digital and tap into foreign market opportunities worldwide.
            </p>

            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimaryBtn} id="about-schedule-cta">
                <span>Schedule a Strategic Call</span>
                <ArrowUpRight size={18} />
              </Link>
              <Link href="/services" className={styles.ctaSecondaryBtn}>
                <span>Explore All Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
