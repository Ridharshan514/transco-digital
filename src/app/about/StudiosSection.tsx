'use client';

/**
 * StudiosSection.tsx — The Studio Control Deck & Visual Artifact Viewport
 *
 * Distinct Architecture:
 * - 3-Way Interactive Studio Command Switcher
 * - Split Stage: Left Blueprint Engine + Right Live Studio Artifact Mockup
 * - Tailored visual mockups for each studio (9:16 Reel, 16:9 YouTube, Brand Board)
 * - 100% White & Black Editorial Aesthetic with Subtle Orange Accents
 */

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Video,
  PlaySquare,
  Layers,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Zap,
  Film,
  Music,
  BarChart3,
  Flame,
  Palette,
  Calendar,
} from 'lucide-react';
import styles from './StudiosSection.module.css';

const studios = [
  {
    id: 'tiktok',
    number: '01',
    name: 'TikTok Makers Viral Engine',
    shortName: 'TikTok Makers',
    tagline: 'Hook Architecture & High-Velocity Short-Form Production',
    category: 'Short-Form Video',
    stat: 'Avg. 35%+ Hook Retention',
    statDesc: 'First 3-second algorithmic drop-off benchmark',
    desc: 'A high-velocity video production studio engineered specifically for the TikTok, Instagram Reels, and YouTube Shorts algorithms. We combine behavioral psychology, trend-jacking, and fast-paced editing to turn passive scrollers into hyper-engaged buyers.',
    deliverables: [
      'Hook Architecture & High-Retention Scripting',
      'Batch Video Production Studio (30–60 assets/mo)',
      'Trend-Jacking & Native Audio Curation',
      'Multi-Platform 9:16 Aspect Ratio Deployment',
      'Weekly Drop-Off & Retention Curve Analytics',
    ],
    mockupType: 'tiktok',
    slug: 'content-marketing',
  },
  {
    id: 'youtube',
    number: '02',
    name: 'YouTuber Channel Automation',
    shortName: 'YouTube Automation',
    tagline: 'Creator Economy Infrastructure & Packaging Mastery',
    category: 'Creator Media',
    stat: '1.7M+ Organic Views',
    statDesc: 'Delivered across managed creator channels',
    desc: 'Turn your channel into an automated media asset. We handle packaging, high-CTR thumbnail psychology, pacing-focused retention curve editing, keyword search SEO, and audience monetization funnels — freeing creators to focus entirely on their vision.',
    deliverables: [
      'High-CTR 3D & Vector Thumbnail Design (A/B Tested)',
      'Retention Curve Pacing & Sound Design Editing',
      'Search-Intent SEO, Chapters & Tag Architecture',
      'Audience Lead-Magnet & Newsletter Integration',
      'Sponsorship Deck & Monetization Strategy',
    ],
    mockupType: 'youtube',
    slug: 'content-marketing',
  },
  {
    id: 'psc',
    number: '03',
    name: 'Premium Social Content (PSC)',
    shortName: 'Premium Social (PSC)',
    tagline: 'Turnkey Social Media Management & Visual Architecture',
    category: 'Brand Ecosystem',
    stat: '30K+ Qualified Inbound Leads',
    statDesc: 'Generated across enterprise client campaigns',
    desc: 'A dedicated growth squad managing your complete visual storytelling, editorial calendar, carousel motion graphics, and cross-channel community building — all unified under one strategic partner.',
    deliverables: [
      '30-Day Forward Editorial & Campaign Calendar',
      'High-End Brand Graphic Design & Motion Carousels',
      'Platform-Native Copywriting & Community Engagement',
      'Multi-Format Asset Distribution (LinkedIn, IG, X)',
      'Monthly Strategic Performance & Growth Reviews',
    ],
    mockupType: 'psc',
    slug: 'content-marketing',
  },
];

export default function StudiosSection() {
  const [activeTab, setActiveTab] = useState<string>('tiktok');

  const currentStudio = studios.find((s) => s.id === activeTab) || studios[0];

  return (
    <section className={styles.section} id="studios" aria-label="Growth Studios">
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.badgeDot} />
            <span>Proprietary Production Squads</span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.lightWord}>Three specialized </span>
            <span className={styles.boldWord}>growth studios.</span>
          </h2>
          <p className={styles.subtitle}>
            Independent creative capabilities unified under one seamless execution partner.
          </p>
        </div>

        {/* ── Studio Command Deck ── */}
        <div className={styles.deckCard}>
          {/* 3-Way Mode Switcher */}
          <div className={styles.switcherRow}>
            {studios.map((s) => {
              const isActive = activeTab === s.id;
              return (
                <button
                  key={s.id}
                  className={`${styles.switchBtn} ${isActive ? styles.switchBtnActive : ''}`}
                  onClick={() => setActiveTab(s.id)}
                  type="button"
                >
                  <span className={styles.switchNum}>{s.number}</span>
                  <div className={styles.switchText}>
                    <strong className={styles.switchName}>{s.shortName}</strong>
                    <span className={styles.switchCat}>{s.category}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Master Viewport Grid */}
          <div className={styles.viewportGrid}>
            {/* Left Column: Studio Blueprint & Deliverables */}
            <div className={styles.blueprintCol}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStudio.id}
                  className={styles.blueprintContent}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className={styles.studioMetaTagRow}>
                    <span className={styles.studioIndexBadge}>Studio {currentStudio.number}</span>
                    <span className={styles.studioCatTag}>{currentStudio.category}</span>
                  </div>

                  <h3 className={styles.studioTitle}>{currentStudio.name}</h3>
                  <p className={styles.studioTagline}>{currentStudio.tagline}</p>
                  <p className={styles.studioDesc}>{currentStudio.desc}</p>

                  {/* Deliverables List */}
                  <div className={styles.delivSection}>
                    <span className={styles.delivHeader}>Core Deliverables Shipped:</span>
                    <ul className={styles.delivList}>
                      {currentStudio.deliverables.map((item) => (
                        <li key={item} className={styles.delivItem}>
                          <CheckCircle2 size={15} color="#FF6A00" className={styles.checkIcon} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metric Lift Box */}
                  <div className={styles.metricLiftBox}>
                    <div className={styles.metricGlowDot} />
                    <div>
                      <strong className={styles.metricStat}>{currentStudio.stat}</strong>
                      <span className={styles.metricDesc}>{currentStudio.statDesc}</span>
                    </div>
                  </div>

                  {/* CTA Link */}
                  <div className={styles.blueprintFooter}>
                    <Link href={`/services`} className={styles.blueprintCta}>
                      <span>Explore {currentStudio.shortName} Blueprint</span>
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Tailored Interactive Studio Visual Mockup */}
            <div className={styles.visualMockupCol}>
              <AnimatePresence mode="wait">
                {/* ── Mockup 1: TikTok 9:16 Vertical Phone Reel ── */}
                {currentStudio.mockupType === 'tiktok' && (
                  <motion.div
                    key="tiktok"
                    className={styles.phoneMockupWrap}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className={styles.phoneFrame}>
                      {/* Phone Screen Notch */}
                      <div className={styles.phoneNotch} />

                      {/* Screen Content */}
                      <div className={styles.phoneScreen}>
                        <div className={styles.screenBgGradient} />

                        {/* Top Live Status */}
                        <div className={styles.screenTopBar}>
                          <span className={styles.livePill}>
                            <Flame size={12} color="#FF6A00" />
                            <span>Viral Hook #04</span>
                          </span>
                          <span className={styles.aspectPill}>9:16 Reel</span>
                        </div>

                        {/* Center Visual Wave Graphic */}
                        <div className={styles.screenCenterVisual}>
                          <div className={styles.audioWaveRing}>
                            <Video size={28} color="#ffffff" />
                          </div>
                          <span className={styles.hookRetentionTag}>38.4% 3-Sec Retention</span>
                        </div>

                        {/* Bottom Overlay Card */}
                        <div className={styles.phoneBottomCard}>
                          <div className={styles.audioTrackRow}>
                            <Music size={12} color="#FF6A00" />
                            <span>♫ Original Trending Audio · Transco Studio</span>
                          </div>
                          <p className={styles.phoneCaption}>
                            Batch Asset #12: &ldquo;The 3 mistakes stopping your brand from scaling on TikTok in 2026...&rdquo;
                          </p>
                          <div className={styles.phoneStatsRow}>
                            <span>❤️ 142.8K</span>
                            <span>💬 3.4K</span>
                            <span>↗️ 18.2K</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ── Mockup 2: YouTube 16:9 Creator Studio Player ── */}
                {currentStudio.mockupType === 'youtube' && (
                  <motion.div
                    key="youtube"
                    className={styles.youtubeMockupWrap}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className={styles.youtubePlayerCard}>
                      {/* Top Player Bar */}
                      <div className={styles.playerTopBar}>
                        <div className={styles.playerDotRow}>
                          <span className={styles.pDot} />
                          <span className={styles.pDot} />
                          <span className={styles.pDot} />
                        </div>
                        <span className={styles.playerTitle}>YouTube Automation · Studio 4K</span>
                      </div>

                      {/* Video Thumbnail Stage */}
                      <div className={styles.playerScreen}>
                        <div className={styles.ytGradientBackdrop} />

                        {/* CTR Badge */}
                        <div className={styles.ctrBadge}>
                          <BarChart3 size={14} color="#FF6A00" />
                          <span>CTR: 14.8% (Top 1% Tier)</span>
                        </div>

                        {/* Center Play Icon */}
                        <div className={styles.ytPlayCenter}>
                          <PlaySquare size={44} color="#ffffff" />
                        </div>

                        {/* Bottom Timeline & Chapters */}
                        <div className={styles.ytTimelineRow}>
                          <div className={styles.ytProgressBar}>
                            <div className={styles.ytProgressFill} />
                          </div>
                          <div className={styles.ytTimeLabels}>
                            <span>14:20 / 22:45 · 4K 60FPS</span>
                            <span>Retention Curve: 54% at 10:00</span>
                          </div>
                        </div>
                      </div>

                      {/* Video Metadata Box */}
                      <div className={styles.ytMetaCard}>
                        <h4 className={styles.ytVideoTitle}>How to Scale an Automated YouTube Channel to 1.7M+ Views</h4>
                        <div className={styles.ytTagsRow}>
                          <span className={styles.ytTag}>Search SEO: #1 Ranked</span>
                          <span className={styles.ytTag}>High-CTR 3D Thumbnail</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ── Mockup 3: Premium Social (PSC) Brand System ── */}
                {currentStudio.mockupType === 'psc' && (
                  <motion.div
                    key="psc"
                    className={styles.pscMockupWrap}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className={styles.brandBoardCard}>
                      {/* Top Bar */}
                      <div className={styles.boardTopBar}>
                        <Palette size={14} color="#FF6A00" />
                        <span>Brand Visual Architecture · 30-Day Calendar</span>
                      </div>

                      {/* Mini Swatches Grid */}
                      <div className={styles.swatchGrid}>
                        <div className={styles.swatchBox} style={{ background: '#18181b' }}>
                          <span>#18181B</span>
                        </div>
                        <div className={styles.swatchBox} style={{ background: '#FF6A00' }}>
                          <span>#FF6A00</span>
                        </div>
                        <div className={styles.swatchBox} style={{ background: '#F4F4F5', color: '#18181b' }}>
                          <span>#F4F4F5</span>
                        </div>
                      </div>

                      {/* Carousel Post Stack Layer */}
                      <div className={styles.carouselStack}>
                        <div className={styles.cStackCard}>
                          <div className={styles.cStackHeader}>
                            <span className={styles.cStackBadge}>Carousel Slide 01</span>
                            <span className={styles.cStackDate}>Weekly Sprint</span>
                          </div>
                          <h4 className={styles.cStackTitle}>The Complete Modern Brand Growth Blueprint</h4>
                          <p className={styles.cStackSub}>Custom motion typography & editorial layout.</p>
                        </div>
                      </div>

                      {/* 30-Day Forward Timeline Strip */}
                      <div className={styles.calendarStrip}>
                        <Calendar size={13} color="#FF6A00" />
                        <span>30-Day Editorial & Ad Creative Assets Synchronized</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
