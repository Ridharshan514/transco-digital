'use client';

/**
 * StudiosSection.tsx
 *
 * Design concept: Three full-bleed "studio panels" stacked horizontally.
 * Each panel is its own immersive world — a large dark card with:
 *   - A giant background number (01, 02, 03) as a watermark
 *   - A color-coded vertical accent bar on the left edge
 *   - The studio identity, description, and capability tags
 *   - On hover: the card expands, the background number glows
 *
 * On click/hover the active card expands and the others contract — a
 * classic "accordion" with a premium feel. No third-party libs needed.
 */

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, PlaySquare, Layers } from 'lucide-react';
import styles from './StudiosSection.module.css';

const studios = [
  {
    id: 'tiktok',
    number: '01',
    name: 'TikTok\nMakers',
    nameFlat: 'TikTok Makers',
    tagline: 'Viral short-form content studio',
    color: '#FF6A00',
    colorMuted: 'rgba(255, 106, 0, 0.08)',
    colorBorder: 'rgba(255, 106, 0, 0.25)',
    Icon: Play,
    description:
      'A production ecosystem built specifically for the short-form era. We engineer scroll-stopping hooks, trend-native edits, and batch content pipelines that keep TikTok, Instagram Reels, and YouTube Shorts feeds full and audiences growing.',
    capabilities: [
      'Hook Architecture & Script Writing',
      'Trend-Jacking Frameworks',
      'Batch Content Production',
      'Multi-Platform Distribution',
      'Performance Analytics',
    ],
    stat: '3M+ Views Delivered',
  },
  {
    id: 'youtube',
    number: '02',
    name: 'YouTuber\nAutomation',
    nameFlat: 'YouTuber Automation',
    tagline: 'Creator economy infrastructure',
    color: '#3B82F6',
    colorMuted: 'rgba(59, 130, 246, 0.08)',
    colorBorder: 'rgba(59, 130, 246, 0.25)',
    Icon: PlaySquare,
    description:
      'End-to-end production automation that lets YouTube creators focus on ideas while we handle everything else — high-CTR thumbnails, retention-engineered editing, keyword research, scripting, and channel monetization strategy.',
    capabilities: [
      'High-CTR Thumbnail Design',
      'Retention Curve Editing',
      'Scripting & Research',
      'SEO & Channel Growth',
      'Monetization Strategy',
    ],
    stat: '600+ Campaigns',
  },
  {
    id: 'psc',
    number: '03',
    name: 'Premium\nSocial Content',
    nameFlat: 'Premium Social Content',
    tagline: 'All-in-one brand growth engine',
    color: '#10B981',
    colorMuted: 'rgba(16, 185, 129, 0.08)',
    colorBorder: 'rgba(16, 185, 129, 0.25)',
    Icon: Layers,
    description:
      'A complete brand growth partnership under one roof. Visual identity, content calendar management, paid advertising creative, full-funnel strategy, and cross-channel social media marketing — unified and seamlessly delivered.',
    capabilities: [
      'Visual Brand Identity',
      'Content Calendar Management',
      'Paid Ad Creative & Media Buying',
      'Cross-Channel Social Strategy',
      'Full-Funnel Growth Planning',
    ],
    stat: '30K+ Leads Generated',
  },
];

export default function StudiosSection() {
  const [active, setActive] = useState<string>('tiktok');

  return (
    <section className={styles.section} id="studios" aria-label="Growth Studios">
      {/* Header */}
      <div className="container">
        <div className={styles.header}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Dreaming Big 2.0 Ecosystem
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className={styles.lightWord}>Three specialized </span>
            <span className={styles.boldWord}>growth studios.</span>
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
          >
            Each studio is its own precision-built production ecosystem, engineered to dominate its category.
          </motion.p>
        </div>
      </div>

      {/* Studio Accordion Panels */}
      <motion.div
        className={styles.panelsWrap}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        {studios.map((studio) => {
          const isActive = active === studio.id;
          const Icon = studio.Icon;

          return (
            <motion.div
              key={studio.id}
              className={`${styles.panel} ${isActive ? styles.panelActive : styles.panelIdle}`}
              style={{
                '--studio-color': studio.color,
                '--studio-color-muted': studio.colorMuted,
                '--studio-color-border': studio.colorBorder,
              } as React.CSSProperties}
              layout
              onClick={() => setActive(studio.id)}
              onMouseEnter={() => setActive(studio.id)}
              transition={{ layout: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } }}
            >
              {/* Left accent bar */}
              <div className={styles.accentBar} style={{ background: studio.color }} />

              {/* Giant watermark number */}
              <div
                className={`${styles.watermark} ${isActive ? styles.watermarkActive : ''}`}
                aria-hidden="true"
              >
                {studio.number}
              </div>

              {/* Panel body */}
              <div className={styles.panelBody}>
                {/* Studio number + icon */}
                <div className={styles.topRow}>
                  <span className={styles.numBadge}>{studio.number}</span>
                  <span
                    className={styles.iconWrap}
                    style={{ background: studio.colorMuted, color: studio.color }}
                  >
                    <Icon size={18} strokeWidth={2.2} />
                  </span>
                </div>

                {/* Studio name — always visible */}
                <h3
                  className={styles.studioName}
                  style={{ color: isActive ? '#ffffff' : '#a1a1aa' }}
                >
                  {studio.name.split('\n').map((line, i) => (
                    <span key={i} className={styles.nameLine}>{line}</span>
                  ))}
                </h3>

                {/* Expanded content — only when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className={styles.expandedContent}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.32, ease: 'easeOut' }}
                    >
                      <p className={styles.tagline} style={{ color: studio.color }}>
                        {studio.tagline}
                      </p>
                      <p className={styles.description}>{studio.description}</p>

                      {/* Capability tags */}
                      <div className={styles.capabilitiesGrid}>
                        {studio.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className={styles.capTag}
                            style={{
                              border: `1px solid ${studio.colorBorder}`,
                              color: studio.color,
                            }}
                          >
                            {cap}
                          </span>
                        ))}
                      </div>

                      {/* Footer row */}
                      <div className={styles.panelFooter}>
                        <span className={styles.statBadge}>
                          <span className={styles.statDot} style={{ background: studio.color }} />
                          {studio.stat}
                        </span>
                        <Link
                          href="/services"
                          className={styles.ctaBtn}
                          style={{ color: studio.color }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Explore Studio</span>
                          <ArrowUpRight size={14} strokeWidth={2.5} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Idle tab label — visible when not active on mobile */}
                {!isActive && (
                  <span className={styles.idleHint}>Click to explore →</span>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
