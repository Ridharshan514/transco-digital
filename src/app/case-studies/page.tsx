'use client';

/**
 * CaseStudiesPage.tsx — Award-Winning Agency Showcase & Interactive Work Vault
 *
 * Distinct Creative Architecture:
 * 1. Minimal Hero with Signature Badge & Swiss Typography
 * 2. Executive Impact Tally Ticker (200+ Clients, 600+ Campaigns, 3M+ Views, 4.1x ROAS)
 * 3. Master Cinematic Case Projector (Interactive Split Stage with Metric Overlays & Real Quotes)
 * 4. Filterable High-Fashion Project Gallery with Interactive View Modes
 * 5. The Algorithmic Transformation Comparison Matrix
 * 6. High-Contrast Obsidian Final Call to Action
 */

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Play,
  TrendingUp,
  Quote,
  CheckCircle2,
  Globe2,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  Filter,
  LayoutGrid,
  Maximize2,
} from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import styles from './caseStudies.module.css';

const globalImpactStats = [
  { value: '200+', label: 'Global Clients', detail: 'UK, USA, Australia, UAE & Asia' },
  { value: '600+', label: 'Campaigns Launched', detail: 'High-velocity multi-channel sprints' },
  { value: '3M+', label: 'Organic Views', detail: 'Across YouTube & short-form video' },
  { value: '4.1×', label: 'Average ROAS', detail: 'Across managed performance accounts' },
];

const filterCategories = [
  { id: 'all', label: 'All Verified Work' },
  { id: 'youtube', label: 'YouTube & Creator' },
  { id: 'paid', label: 'Paid Performance' },
  { id: 'shortform', label: 'Short-Form Video' },
  { id: 'brand', label: 'Brand Architecture' },
];

const transformationPoints = [
  {
    channel: 'Short-Form Viral Video',
    standard: 'Random clips, low-effort trends, sub-15% 3-sec hook retention, zero attribution.',
    transco: 'Scripted hook architecture, 30–60 batch monthly assets, 35%+ hook rate, direct revenue tracking.',
    metric: '+240% Engagement Lift',
  },
  {
    channel: 'YouTube Creator Channel',
    standard: 'Inconsistent uploads, low-CTR text thumbnails, stagnant subscriber curve, ad-sense dependent.',
    transco: 'Turnkey weekly production, high-CTR 3D packaging, search-intent SEO, automated email lead magnets.',
    metric: '1.7M+ Organic Views',
  },
  {
    channel: 'Paid Media & Lead Gen',
    standard: 'Unstructured ad accounts, creative fatigue in 10 days, climbing CAC, vague blended metrics.',
    transco: 'Server-side CAPI tracking, rapid creative testing matrix, weekly budget re-allocation for 4.1x+ ROAS.',
    metric: '-45% Cost Per Lead',
  },
];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'results' | 'strategy' | 'artifacts'>('results');

  const currentFeatured = caseStudies[featuredIndex] || caseStudies[0];

  const filteredStudies = caseStudies.filter((cs) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'youtube') return cs.tags.includes('YouTube Automation');
    if (activeFilter === 'paid') return cs.tags.includes('Paid Campaigns') || cs.tags.includes('Lead Gen');
    if (activeFilter === 'shortform') return cs.tags.includes('TikTok Makers') || cs.tags.includes('Short-Form Video');
    if (activeFilter === 'brand') return cs.tags.includes('Branding') || cs.tags.includes('Premium Social Content');
    return true;
  });

  return (
    <main className={styles.page}>
      {/* ── 1. Hero Header ────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            <span>The Work Vault · 2026 Archive</span>
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.lightWord}>Impact we engineered.</span>{' '}
            <span className={styles.boldWord}>Brands we scaled.</span>
          </h1>

          <p className={styles.heroSub}>
            Explore our verified portfolio across YouTube channel automation, viral short-form content, and high-ROAS paid acquisition.
          </p>
        </div>
      </section>

      {/* ── 2. Executive Impact Tally Ticker ──────────────────────── */}
      <section className={styles.statsStripSection} aria-label="Executive Track Record">
        <div className="container">
          <div className={styles.statsGrid}>
            {globalImpactStats.map((st) => (
              <div key={st.label} className={styles.statCell}>
                <strong className={styles.statValue}>{st.value}</strong>
                <div className={styles.statMeta}>
                  <span className={styles.statLabel}>{st.label}</span>
                  <span className={styles.statDetail}>{st.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Master Cinematic Case Projector ────────────────────── */}
      <section className={styles.spotlightSection} id="featured-showcase" aria-label="Flagship Showcase">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>01 / Interactive Case Projector</span>
            <h2 className={styles.sectionTitle}>Master Transformation Blueprint</h2>
          </div>

          {/* Interactive Client Switcher Pills */}
          <div className={styles.switcherPillsRow}>
            {caseStudies.map((cs, idx) => (
              <button
                key={cs.slug}
                className={`${styles.switcherBtn} ${featuredIndex === idx ? styles.switcherBtnActive : ''}`}
                onClick={() => setFeaturedIndex(idx)}
                type="button"
              >
                <span className={styles.btnNum}>0{idx + 1}</span>
                <span className={styles.btnClient}>{cs.client}</span>
              </button>
            ))}
          </div>

          {/* Master Projector Card */}
          <div className={styles.projectorCard}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeatured.slug}
                className={styles.projectorGrid}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
              >
                {/* Left Side: Deep-Dive Details */}
                <div className={styles.projectorInfoCol}>
                  <div className={styles.clientMetaRow}>
                    <span className={styles.clientName}>{currentFeatured.client}</span>
                    <span className={styles.industryTag}>{currentFeatured.industry}</span>
                  </div>

                  <h3 className={styles.caseHeading}>{currentFeatured.title}</h3>
                  <p className={styles.caseSummary}>{currentFeatured.summary}</p>

                  {/* Teardown Navigation Tabs */}
                  <div className={styles.teardownNav}>
                    <button
                      className={`${styles.tabItem} ${activeTab === 'results' ? styles.tabItemActive : ''}`}
                      onClick={() => setActiveTab('results')}
                      type="button"
                    >
                      01. Verified Impact
                    </button>
                    <button
                      className={`${styles.tabItem} ${activeTab === 'strategy' ? styles.tabItemActive : ''}`}
                      onClick={() => setActiveTab('strategy')}
                      type="button"
                    >
                      02. Challenge & Fix
                    </button>
                    <button
                      className={`${styles.tabItem} ${activeTab === 'artifacts' ? styles.tabItemActive : ''}`}
                      onClick={() => setActiveTab('artifacts')}
                      type="button"
                    >
                      03. Shipped Assets
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className={styles.tabContentBox}>
                    <AnimatePresence mode="wait">
                      {activeTab === 'results' && (
                        <motion.div
                          key="results"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className={styles.metricsGrid}
                        >
                          {currentFeatured.metrics.map((m) => (
                            <div key={m.label} className={styles.metricCard}>
                              <strong className={styles.cardStatNum}>{m.stat}</strong>
                              <span className={styles.cardStatLabel}>{m.label}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      {activeTab === 'strategy' && (
                        <motion.div
                          key="strategy"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className={styles.strategyBlock}
                        >
                          <div className={styles.strategyRow}>
                            <strong className={styles.strategyLabel}>The Bottleneck:</strong>
                            <p>{currentFeatured.challenge}</p>
                          </div>
                          <div className={styles.strategyRow}>
                            <strong className={styles.strategyLabelTransco}>Transco Blueprint:</strong>
                            <p>{currentFeatured.solution}</p>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'artifacts' && (
                        <motion.div
                          key="artifacts"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className={styles.artifactsGrid}
                        >
                          {currentFeatured.deliveredArtifacts.map((art) => (
                            <div key={art} className={styles.artifactPill}>
                              <CheckCircle2 size={14} color="#FF6A00" />
                              <span>{art}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Testimonial Box */}
                  {currentFeatured.testimonial && (
                    <div className={styles.testimonialBox}>
                      <Quote size={16} color="#FF6A00" className={styles.quoteIcon} />
                      <div>
                        <p className={styles.quoteText}>&ldquo;{currentFeatured.testimonial.quote}&rdquo;</p>
                        <span className={styles.quoteAuthor}>
                          — {currentFeatured.testimonial.author}, {currentFeatured.testimonial.role}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Direct Link */}
                  <div className={styles.projectorFooter}>
                    <Link href={`/case-studies/${currentFeatured.slug}`} className={styles.readMoreBtn}>
                      <span>Read Complete Case Study Architecture</span>
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Media Stage with Floating Metric Badges */}
                <div className={styles.projectorMediaCol}>
                  <div className={styles.mediaCoverWrap}>
                    <Image
                      src={currentFeatured.coverImage}
                      alt={currentFeatured.client}
                      fill
                      className={styles.mediaCoverImg}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                    />
                    <div className={styles.mediaOverlay} />
                  </div>

                  {/* Top Badges */}
                  <div className={styles.mediaTopBadges}>
                    <span className={styles.badgeMarket}>
                      <Globe2 size={12} />
                      <span>{currentFeatured.market}</span>
                    </span>
                    <span className={styles.badgeTimeline}>
                      <Calendar size={12} />
                      <span>{currentFeatured.timeline}</span>
                    </span>
                  </div>

                  {/* Hero Metric Highlight Box */}
                  <div className={styles.mediaBottomHighlight}>
                    <div className={styles.glowDot} />
                    <div>
                      <strong className={styles.heroHighlightStat}>
                        {currentFeatured.metrics[0].stat}
                      </strong>
                      <span className={styles.heroHighlightLabel}>
                        {currentFeatured.metrics[0].label}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── 4. Curated Work Gallery (Clean 2-Column Grid) ─────────── */}
      <section className={styles.gallerySection} aria-label="Curated Campaigns">
        <div className="container">
          <div className={styles.galleryHeaderRow}>
            <div>
              <span className={styles.eyebrow}>02 / Portfolio Archive</span>
              <h2 className={styles.sectionTitle}>Curated Campaign Index</h2>
            </div>

            {/* Filter Pills */}
            <div className={styles.filterPills}>
              {filterCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`${styles.filterPillBtn} ${activeFilter === cat.id ? styles.filterPillActive : ''}`}
                  onClick={() => setActiveFilter(cat.id)}
                  type="button"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className={styles.cardsGrid}>
            <AnimatePresence>
              {filteredStudies.map((study, idx) => (
                <motion.article
                  key={study.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={styles.projectCard}
                >
                  {/* Media Cover Aspect */}
                  <div className={styles.projectCoverContainer}>
                    <Image
                      src={study.coverImage}
                      alt={study.client}
                      fill
                      className={styles.projectCoverImg}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                    />
                    <div className={styles.projectCoverGradient} />
                    <span className={styles.projectMarketTag}>{study.market}</span>
                    <span className={styles.projectIndexBadge}>0{idx + 1}</span>
                  </div>

                  {/* Project Body */}
                  <div className={styles.projectBody}>
                    <div className={styles.projectMetaHeader}>
                      <span className={styles.pClient}>{study.client}</span>
                      <span className={styles.pIndustry}>{study.industry}</span>
                    </div>

                    <h3 className={styles.pTitle}>{study.title}</h3>
                    <p className={styles.pSummary}>{study.summary}</p>

                    {/* Metric Lift Box */}
                    <div className={styles.pMetricsRow}>
                      {study.metrics.slice(0, 3).map((m) => (
                        <div key={m.label} className={styles.pMetricItem}>
                          <strong className={styles.pMetricStat}>{m.stat}</strong>
                          <span className={styles.pMetricLabel}>{m.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Delivered Artifacts */}
                    <div className={styles.pArtifactsRow}>
                      {study.deliveredArtifacts.slice(0, 2).map((art) => (
                        <span key={art} className={styles.pArtifactChip}>
                          ✓ {art}
                        </span>
                      ))}
                    </div>

                    {/* Card Link */}
                    <div className={styles.pFooter}>
                      <Link href={`/case-studies/${study.slug}`} className={styles.pLink}>
                        <span>Explore Deep-Dive</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── 5. The Algorithmic Transformation Comparison ─────────── */}
      <section className={styles.compareSection} aria-label="Transformation Model">
        <div className="container">
          <div className={styles.compareCard}>
            <div className={styles.sectionHeaderCenter}>
              <span className={styles.eyebrow}>03 / The Commercial Advantage</span>
              <h2 className={styles.sectionTitle}>The Algorithmic Transformation</h2>
              <p className={styles.sectionSub}>
                Why traditional marketing agencies struggle in the short-form era vs. how Transco builds repeatable velocity.
              </p>
            </div>

            <div className={styles.compareTable}>
              {transformationPoints.map((pt) => (
                <div key={pt.channel} className={styles.compareRow}>
                  <div className={styles.channelCol}>
                    <strong className={styles.channelTitle}>{pt.channel}</strong>
                    <span className={styles.liftBadge}>{pt.metric}</span>
                  </div>

                  <div className={styles.standardCol}>
                    <span className={styles.tagStandard}>Traditional Agency Model</span>
                    <p>{pt.standard}</p>
                  </div>

                  <div className={styles.transcoCol}>
                    <span className={styles.tagTransco}>Transco Operating System</span>
                    <p>{pt.transco}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Final High-Contrast Obsidian CTA ──────────────────── */}
      <section className={styles.ctaSection} aria-label="Start Your Growth Sprint">
        <div className="container">
          <div className={styles.ctaCard}>
            <span className={styles.ctaEyebrow}>YOUR BRAND NEXT</span>
            <h2 className={styles.ctaTitle}>
              Ready to engineer numbers like this for your business?
            </h2>
            <p className={styles.ctaDesc}>
              Let&apos;s evaluate your current growth bottlenecks and map a custom 90-day execution blueprint.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimary}>
                <span>Schedule a Strategic Discovery Call</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link href="/services" className={styles.ctaSecondary}>
                <span>Explore Agency Capabilities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
