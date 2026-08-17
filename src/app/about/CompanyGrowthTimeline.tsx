'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Globe2,
  TrendingUp,
  Award,
  Zap,
  ArrowDown,
  Layers,
} from 'lucide-react';
import styles from './CompanyGrowthTimeline.module.css';

// ── Complete Year-by-Year Growth Milestones (2020 → Present Year 2026) ──────
const timelineMilestones = [
  {
    year: '2020',
    phase: 'Seed & Inception',
    stageName: 'Stage 1 · The Planted Seed',
    badgeIcon: '🌱',
    themeColor: '#FF6A00',
    title: 'The Journey of Dreaming Big',
    location: 'Colombo, Sri Lanka',
    tagline: 'The Spark of Ambition & First Multinational Partners',
    description:
      'Transco Digital was founded in Colombo with a young, enthusiastic team and a bold vision. During this foundational year, we welcomed prominent multinational corporations and premier household brands, laying the groundwork for our high-velocity agency culture.',
    achievements: [
      'Founded Transco Digital in Colombo, Sri Lanka',
      'Onboarded first prominent multinational enterprise clients',
      'Established high-speed creative & digital execution standards',
    ],
    metric: '10+ Founding Brands',
  },
  {
    year: '2021',
    phase: 'Early Sprout & Traction',
    stageName: 'Stage 2 · Sprouting Roots',
    badgeIcon: '🌿',
    themeColor: '#10B981',
    title: 'Scaling Regional Client Footprint',
    location: 'Sri Lanka & South Asia',
    tagline: 'Rapid Expansion Across Corporate & Education Sectors',
    description:
      'Building upon initial momentum, we accelerated client acquisition across corporate, e-commerce, and education sectors. We engineered bespoke social media frameworks that delivered measurable revenue and enrollment growth for our partners.',
    achievements: [
      'Scaled to 50+ active client engagements',
      'Forged institutional partnerships in the education sector',
      'Launched performance analytics and ROAS tracking pipelines',
    ],
    metric: '50+ Clients Scaled',
  },
  {
    year: '2022',
    phase: 'Resilient Roots & Global Pivot',
    stageName: 'Stage 3 · Deep Anchoring Roots',
    badgeIcon: '⚓',
    themeColor: '#3B82F6',
    title: 'The Crucible & The Global Pivot',
    location: 'UK · Australia · Europe · UAE',
    tagline: 'Turning Economic Adversity into International Expansion',
    description:
      'When the economic crisis created widespread domestic market uncertainty in Sri Lanka, we chose resilience over retreat. We looked beyond national boundaries, offering our elite digital engineering to foreign clientele across the UK, Australia, Europe, and the UAE.',
    achievements: [
      'Expanded cross-border operations into 4 global markets',
      'Onboarded first wave of high-value international clientele',
      'Engineered 24/7 remote production infrastructure',
    ],
    metric: '4 New Global Markets',
  },
  {
    year: '2023',
    phase: 'Branching Limbs (Dreaming Big 2.0)',
    stageName: 'Stage 4 · Three Specialized Branches',
    badgeIcon: '🌳',
    themeColor: '#8B5CF6',
    title: 'Dreaming Big 2.0 & Studio Ecosystems',
    location: 'Global Creator & Brand Economy',
    tagline: 'Pioneering TikTok Makers, YouTuber Automation & PSC',
    description:
      'We launched ‘Dreaming Big 2.0’ with three pioneering service verticals: TikTok Makers for high-converting short-form viral video, YouTuber Automation for creator channel monetization, and Premium Social Content (PSC) for all-in-one digital marketing.',
    achievements: [
      'Launched TikTok Makers (TikTok, Reels & Shorts studio)',
      'Introduced YouTuber Automation for high-retention creator growth',
      'Established Premium Social Content (PSC) all-in-one suite',
    ],
    metric: '3 Specialized Studios',
  },
  {
    year: '2024',
    phase: 'Canopy Expansion',
    stageName: 'Stage 5 · Broadening Canopy',
    badgeIcon: '🍃',
    themeColor: '#EC4899',
    title: 'Multi-Million View Milestones',
    location: 'International Digital Network',
    tagline: '150+ Clients & Viral Creator Dominance',
    description:
      'Our specialized studios reached exponential momentum, delivering millions of organic views and thousands of high-converting leads for athletic brands, commercial enterprises, and global YouTube creators across continents.',
    achievements: [
      'Surpassed 150+ active international brand clients',
      'Generated over 2,000,000+ views across viral video campaigns',
      'Expanded team of strategists, motion designers, and media buyers',
    ],
    metric: '2M+ Organic Views',
  },
  {
    year: '2025',
    phase: 'Mature Tree & Enterprise Scale',
    stageName: 'Stage 6 · Mature Limbs & 500+ Campaigns',
    badgeIcon: '🌟',
    themeColor: '#F59E0B',
    title: 'Enterprise Scalability & 500+ Campaigns',
    location: 'Worldwide Agency Network',
    tagline: 'Crossing 500+ Campaigns and 25,000+ Qualified Leads',
    description:
      'Transco Digital matured into an enterprise-grade digital powerhouse, integrating cutting-edge AI production workflows, full-funnel paid advertising, and broadcast-quality media production for market leaders.',
    achievements: [
      'Delivered over 500+ high-ROI digital campaigns',
      'Generated 25,000+ qualified revenue leads for clients',
      'Formed enterprise cross-border creative partnerships',
    ],
    metric: '500+ Campaigns Executed',
  },
  {
    year: '2026',
    phase: 'Flowering World Tree (Present)',
    stageName: 'Stage 7 · Full Flowering Bloom 🌸',
    badgeIcon: '🌸',
    themeColor: '#FF6A00',
    title: 'An International Agency Network',
    location: '6+ Countries · Global Footprint',
    tagline: '200+ Clients, 600+ Campaigns & Global Leadership',
    description:
      'Today, Transco Digital stands in full, vibrant bloom as a trusted international agency network. Powering over 200+ brands worldwide with 600+ campaigns and 30,000+ leads generated, our journey of dreaming big continues to make waves globally.',
    achievements: [
      '200+ Prominent Global Clients across 6+ Countries',
      '600+ Successful International Marketing Campaigns',
      '30,000+ Qualified High-Intent Leads Generated',
      'Full-Scale Creative, Studio Automation & Media Network',
    ],
    metric: '200+ Clients · 600+ Campaigns · 30K+ Leads',
  },
];

export default function CompanyGrowthTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  // Track vertical scroll progress across the entire timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  // Calculate current active milestone based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const index = Math.min(
        timelineMilestones.length - 1,
        Math.floor(v * timelineMilestones.length)
      );
      setActiveYearIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Derived growth stages for SVG plant visualization
  // 0.0 - 0.2: Seed & Soil Roots (2020)
  // 0.2 - 0.4: Sprout with Leaves (2021-2022)
  // 0.4 - 0.6: Trunk & 3 Studio Branches (2023)
  // 0.6 - 0.8: Full Canopy & Sub-Branches (2024-2025)
  // 0.8 - 1.0: Full Flowering Bloom with Blossoms (2026 / Present)
  const currentMilestone = timelineMilestones[activeYearIndex] || timelineMilestones[0];

  return (
    <section ref={containerRef} className={styles.timelineSection} id="growth-timeline" aria-label="Company Growth Timeline">
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <motion.div
            className={styles.headerBadge}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles size={14} color="#FF6A00" />
            <span>Interactive Growth Journey · 2020 to 2026</span>
          </motion.div>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className={styles.lightText}>Year-by-year </span>
            <span className={styles.boldText}>company growth.</span>
          </motion.h2>
          <motion.p
            className={styles.sectionSubtitle}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Scroll down to watch our journey unfold in real-time — from a small planted seed in 2020, developing resilient roots and specialized branches, to a fully flowered global agency tree today.
          </motion.p>
        </div>

        {/* Side-by-Side Timeline Layout */}
        <div className={styles.timelineLayout}>
          {/* ── LEFT COLUMN: Sticky Dynamic Seed-to-Flowering Tree Visualizer ── */}
          <div className={styles.treeStickyCol}>
            <div className={styles.treeCard}>
              {/* Top Status Header */}
              <div className={styles.treeCardHeader}>
                <div className={styles.growthBadge}>
                  <span className={styles.growthDot} style={{ background: currentMilestone.themeColor }} />
                  <span className={styles.growthPhase}>{currentMilestone.stageName}</span>
                </div>
                <div className={styles.yearPill}>
                  <Calendar size={13} />
                  <span>{currentMilestone.year}</span>
                </div>
              </div>

              {/* Dynamic SVG Tree Art */}
              <div className={styles.svgContainer}>
                <svg
                  viewBox="0 0 460 480"
                  className={styles.treeSvg}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Gradients */}
                    <linearGradient id="seedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFA048" />
                      <stop offset="100%" stopColor="#FF6A00" />
                    </linearGradient>

                    <linearGradient id="trunkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#18181b" />
                      <stop offset="50%" stopColor="#27272a" />
                      <stop offset="100%" stopColor="#FF6A00" />
                    </linearGradient>

                    <linearGradient id="flowerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFD166" />
                      <stop offset="50%" stopColor="#FF6A00" />
                      <stop offset="100%" stopColor="#FF0055" />
                    </linearGradient>

                    <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(255, 106, 0, 0.35)" />
                      <stop offset="60%" stopColor="rgba(255, 133, 51, 0.12)" />
                      <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
                    </radialGradient>

                    <filter id="bloomGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* ── Ground Soil Level ── */}
                  <line x1="30" y1="410" x2="430" y2="410" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 100 410 Q 230 418 360 410" stroke="#52525b" strokeWidth="3" strokeLinecap="round" />

                  {/* ── Root System (Always Anchoring) ── */}
                  <g>
                    <motion.path
                      d="M 230 410 Q 230 440 225 465"
                      stroke="#FF6A00"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <motion.path
                      d="M 228 418 Q 180 445 140 455"
                      stroke="#a1a1aa"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <motion.path
                      d="M 232 418 Q 280 445 320 455"
                      stroke="#a1a1aa"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Deeper lateral roots in later stages */}
                    {activeYearIndex >= 2 && (
                      <>
                        <motion.path
                          d="M 180 440 Q 120 460 80 470"
                          stroke="#FF6A00"
                          strokeWidth="2"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                        />
                        <motion.path
                          d="M 280 440 Q 340 460 380 470"
                          stroke="#FF6A00"
                          strokeWidth="2"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                        />
                      </>
                    )}
                  </g>

                  {/* ── STAGE 1: 2020 (The Glowing Seed) ── */}
                  {activeYearIndex === 0 && (
                    <g>
                      <circle cx="230" cy="405" r="28" fill="rgba(255, 106, 0, 0.2)" />
                      <ellipse cx="230" cy="405" rx="14" ry="18" fill="url(#seedGrad)" filter="url(#bloomGlow)" />
                      {/* Tiny emerging shoot */}
                      <path d="M 230 390 Q 226 365 232 345" stroke="#FF6A00" strokeWidth="3.5" strokeLinecap="round" />
                      <path d="M 232 345 Q 215 335 218 325 Q 228 330 232 345" fill="#FF6A00" />
                      <path d="M 232 345 Q 248 335 245 325 Q 236 330 232 345" fill="#FF6A00" />
                    </g>
                  )}

                  {/* ── STAGE 2: 2021-2022 (The Growing Sprout & Young Stem) ── */}
                  {activeYearIndex >= 1 && (
                    <g>
                      {/* Main Stem Trunk */}
                      <motion.path
                        d="M 226 410 Q 228 320 230 230 Q 230 170 230 140"
                        stroke="url(#trunkGrad)"
                        strokeWidth={activeYearIndex === 1 ? 10 : activeYearIndex === 2 ? 14 : activeYearIndex <= 4 ? 18 : 22}
                        strokeLinecap="round"
                      />
                    </g>
                  )}

                  {activeYearIndex === 1 && (
                    <g>
                      {/* Young Sprout Side Shoots */}
                      <path d="M 228 320 Q 180 290 150 280" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
                      <path d="M 229 270 Q 280 240 310 230" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
                      {/* Sprout Leaves */}
                      <circle cx="150" cy="280" r="9" fill="#10B981" />
                      <circle cx="310" cy="230" r="9" fill="#10B981" />
                      <circle cx="230" cy="140" r="11" fill="#FF6A00" filter="url(#bloomGlow)" />
                    </g>
                  )}

                  {/* ── STAGE 3: 2022 (The Resilient Trunk & Global Lateral Branches) ── */}
                  {activeYearIndex === 2 && (
                    <g>
                      <path d="M 228 310 Q 160 270 120 250" stroke="#3B82F6" strokeWidth="5.5" strokeLinecap="round" />
                      <path d="M 230 260 Q 300 220 340 200" stroke="#3B82F6" strokeWidth="5.5" strokeLinecap="round" />
                      {/* Global Crossing Node Buds */}
                      <circle cx="120" cy="250" r="12" fill="#3B82F6" filter="url(#bloomGlow)" />
                      <circle cx="340" cy="200" r="12" fill="#3B82F6" filter="url(#bloomGlow)" />
                      <circle cx="230" cy="140" r="14" fill="#FF6A00" filter="url(#bloomGlow)" />
                    </g>
                  )}

                  {/* ── STAGE 4: 2023 (Three Studio Branches: TikTok, YouTube, PSC) ── */}
                  {activeYearIndex >= 3 && (
                    <g>
                      {/* Left: TikTok Makers Branch */}
                      <path d="M 228 270 Q 160 230 90 200 Q 65 185 45 175" stroke="#FF6A00" strokeWidth="7" strokeLinecap="round" />
                      {/* Right: YouTuber Automation Branch */}
                      <path d="M 230 250 Q 300 200 370 175 Q 395 165 415 155" stroke="#3B82F6" strokeWidth="7" strokeLinecap="round" />
                      {/* Center Top: PSC Branch */}
                      <path d="M 230 180 Q 215 120 230 75" stroke="#10B981" strokeWidth="7" strokeLinecap="round" />

                      {/* Branch Badges */}
                      <g>
                        <circle cx="45" cy="175" r="15" fill="#FF6A00" filter="url(#bloomGlow)" />
                        <text x="45" y="179" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">TT</text>
                      </g>
                      <g>
                        <circle cx="415" cy="155" r="15" fill="#3B82F6" filter="url(#bloomGlow)" />
                        <text x="415" y="159" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">YT</text>
                      </g>
                      <g>
                        <circle cx="230" cy="75" r="15" fill="#10B981" filter="url(#bloomGlow)" />
                        <text x="230" y="79" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">PSC</text>
                      </g>
                    </g>
                  )}

                  {/* ── STAGE 5 & 6: 2024-2025 (Expanding Mature Canopy) ── */}
                  {activeYearIndex >= 4 && (
                    <g>
                      {/* Sub-Branch Network */}
                      <path d="M 90 200 Q 60 130 100 100 Q 160 75 190 100" stroke="#FF8533" strokeWidth="4.5" strokeLinecap="round" />
                      <path d="M 370 175 Q 400 110 360 80 Q 300 65 270 90" stroke="#60A5FA" strokeWidth="4.5" strokeLinecap="round" />
                      <path d="M 230 100 Q 180 50 230 35 Q 280 50 230 75" stroke="#34D399" strokeWidth="4.5" strokeLinecap="round" />

                      {/* Leaf Clusters */}
                      {[
                        { cx: 70, cy: 130, col: '#10B981', r: 7 },
                        { cx: 140, cy: 80, col: '#FF6A00', r: 8 },
                        { cx: 320, cy: 65, col: '#3B82F6', r: 8 },
                        { cx: 390, cy: 120, col: '#10B981', r: 7 },
                        { cx: 180, cy: 140, col: '#FF8533', r: 6 },
                        { cx: 280, cy: 130, col: '#60A5FA', r: 6 },
                      ].map((leaf, idx) => (
                        <circle key={idx} cx={leaf.cx} cy={leaf.cy} r={leaf.r} fill={leaf.col} />
                      ))}
                    </g>
                  )}

                  {/* ── STAGE 7: 2026 / PRESENT (FULL FLOWERING WORLD TREE 🌸✨) ── */}
                  {activeYearIndex === 6 && (
                    <g className={styles.floweringCanopyGroup}>
                      {/* Sunburst Radiant Glow */}
                      <circle cx="230" cy="150" r="180" fill="url(#sunGlow)" />

                      {/* Golden Blossoms / Flowers Blooming in Full Splendor */}
                      {[
                        { cx: 230, cy: 30, scale: 1.3, label: '★ 200+' },
                        { cx: 100, cy: 85, scale: 1.1, label: 'UK' },
                        { cx: 360, cy: 75, scale: 1.1, label: 'UAE' },
                        { cx: 160, cy: 55, scale: 1.15, label: 'AUS' },
                        { cx: 300, cy: 50, scale: 1.15, label: '600+' },
                        { cx: 60, cy: 145, scale: 1.0, label: '30K+' },
                        { cx: 400, cy: 130, scale: 1.0, label: '3M+' },
                      ].map((flower, i) => (
                        <g key={flower.label} transform={`translate(${flower.cx}, ${flower.cy})`}>
                          {/* Flower Petals */}
                          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                            <ellipse
                              key={angle}
                              cx="0"
                              cy="0"
                              rx="5"
                              ry="13"
                              fill="url(#flowerGrad)"
                              transform={`rotate(${angle})`}
                              filter="url(#bloomGlow)"
                              opacity="0.9"
                            />
                          ))}
                          {/* Flower Core */}
                          <circle cx="0" cy="0" r="11" fill="#FFD166" />
                          <text x="0" y="3.5" textAnchor="middle" fill="#18181b" fontSize="7" fontWeight="900">
                            {flower.label}
                          </text>
                        </g>
                      ))}

                      {/* Sparkling Pollen Particles */}
                      {[
                        { cx: 130, cy: 30 },
                        { cx: 330, cy: 30 },
                        { cx: 200, cy: 110 },
                        { cx: 260, cy: 100 },
                        { cx: 80, cy: 90 },
                        { cx: 380, cy: 95 },
                      ].map((p, idx) => (
                        <circle
                          key={idx}
                          cx={p.cx}
                          cy={p.cy}
                          r="3.5"
                          fill="#FFD166"
                          filter="url(#bloomGlow)"
                        />
                      ))}
                    </g>
                  )}
                </svg>
              </div>

              {/* Bottom Progress Bar */}
              <div className={styles.treeProgressArea}>
                <div className={styles.progressBarTrack}>
                  <motion.div
                    className={styles.progressBarFill}
                    style={{
                      width: `${((activeYearIndex + 1) / timelineMilestones.length) * 100}%`,
                      background: currentMilestone.themeColor,
                    }}
                  />
                </div>
                <div className={styles.progressFooter}>
                  <span className={styles.progressPercent}>
                    Growth: {Math.round(((activeYearIndex + 1) / timelineMilestones.length) * 100)}%
                  </span>
                  <span className={styles.progressStatus}>
                    {activeYearIndex === timelineMilestones.length - 1 ? 'Full Bloom 🌸' : 'Growing...'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Scroll-Synchronized Vertical Milestone Cards ── */}
          <div className={styles.milestonesCol}>
            {/* Continuous Vertical Glowing Stem Line */}
            <div className={styles.verticalStemLine} aria-hidden="true">
              <motion.div
                className={styles.verticalStemFill}
                style={{
                  height: useTransform(
                    smoothProgress,
                    [0, 1],
                    ['5%', '100%']
                  ),
                }}
              />
            </div>

            {/* List of 7 Yearly Milestone Cards */}
            <div className={styles.milestoneCardsList}>
              {timelineMilestones.map((m, idx) => {
                const isActive = activeYearIndex === idx;
                const isPast = activeYearIndex > idx;

                return (
                  <motion.div
                    key={m.year}
                    className={`${styles.milestoneCard} ${isActive ? styles.milestoneActive : ''} ${isPast ? styles.milestonePassed : ''}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                  >
                    {/* Node Anchor on Stem Line */}
                    <div
                      className={`${styles.milestoneNode} ${isActive ? styles.nodeActive : ''}`}
                      style={{
                        borderColor: isActive || isPast ? m.themeColor : '#e4e4e7',
                        background: isActive ? m.themeColor : '#ffffff',
                      }}
                    >
                      <span className={styles.nodeIcon}>{m.badgeIcon}</span>
                    </div>

                    {/* Card Content Box */}
                    <div className={styles.cardBox}>
                      <div className={styles.cardTopRow}>
                        <div className={styles.yearBadgeWrap}>
                          <span className={styles.cardYear}>{m.year}</span>
                          <span className={styles.cardPhase} style={{ color: m.themeColor }}>
                            {m.phase}
                          </span>
                        </div>
                        <div className={styles.metricPill}>
                          <Award size={13} color={m.themeColor} />
                          <span>{m.metric}</span>
                        </div>
                      </div>

                      <h3 className={styles.cardTitle}>{m.title}</h3>
                      <p className={styles.cardTagline}>{m.tagline}</p>
                      <p className={styles.cardDescription}>{m.description}</p>

                      <div className={styles.achievementsWrap}>
                        <p className={styles.achievementsTitle}>Key Achievements:</p>
                        <div className={styles.achievementsList}>
                          {m.achievements.map((item) => (
                            <div key={item} className={styles.achievementItem}>
                              <CheckCircle2 size={15} color={m.themeColor} className={styles.checkIcon} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={styles.cardFooter}>
                        <div className={styles.locationTag}>
                          <Globe2 size={13} />
                          <span>{m.location}</span>
                        </div>
                        <span className={styles.stageTag}>{m.stageName}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
