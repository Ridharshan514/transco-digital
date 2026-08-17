'use client';

/**
 * ServicesPage.tsx — Modernized Agency Capabilities
 * Features:
 * 1. Interactive Capability Switcher / Matrix
 * 2. Transco 4-Step Agency Sprint (Operating System)
 * 3. Enterprise Tech Stack & Tooling Grid
 * 4. Flexible Engagement Models & CTA
 */

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  Compass,
  Palette,
  FileText,
  TrendingUp,
  Video,
  PlaySquare,
  Layers,
  CheckCircle2,
  Cpu,
  Workflow,
  Zap,
  BarChart3,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import styles from './services.module.css';

// ── Extended Capabilities List ────────────────────────────────────────────────
const capabilityCategories = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'short-form', label: 'TikTok & Short-Form' },
  { id: 'creator', label: 'YouTube Automation' },
  { id: 'paid', label: 'Paid Performance Media' },
  { id: 'brand', label: 'Strategy & Brand Identity' },
];

const capabilityCards = [
  {
    id: 'tiktok-makers',
    category: 'short-form',
    badge: 'Proprietary Studio',
    title: 'TikTok Makers Viral Engine',
    tagline: 'Hook architecture & batch short-form production',
    desc: 'High-velocity short-form video production built specifically for TikTok, Instagram Reels, and YouTube Shorts. Engineered with algorithm-native pacing, trend jacking, and high-retention editing.',
    accentColor: '#FF6A00',
    icon: Video,
    targetKpi: 'Avg. 35%+ Hook Retention',
    deliverables: [
      'Hook Architecture & Scripting',
      'Batch Video Production Studio',
      'Trend-Jacking & Native Sound Curation',
      'Multi-Platform Distribution (TikTok, Reels, Shorts)',
      'Weekly Retention & Drop-Off Analytics',
    ],
    slug: 'content-marketing',
  },
  {
    id: 'youtube-automation',
    category: 'creator',
    badge: 'Creator Infrastructure',
    title: 'YouTuber Channel Automation',
    tagline: 'Full-pipeline video editing, CTR thumbnails & SEO',
    desc: 'Turn your channel into an automated media asset. We manage packaging, high-CTR thumbnail psychology, pacing-focused editing, keyword research, and audience monetization strategy.',
    accentColor: '#3B82F6',
    icon: PlaySquare,
    targetKpi: '1.7M+ Organic Views Delivered',
    deliverables: [
      'High-CTR 3D/Graphic Thumbnail Design',
      'Retention Curve Video Editing',
      'SEO Keyword & Title Optimisation',
      'Audience Funnel & Lead Magnets',
      'Sponsorship & Monetization Consulting',
    ],
    slug: 'content-marketing',
  },
  {
    id: 'paid-media',
    category: 'paid',
    badge: 'Performance Growth',
    title: 'Paid Campaigns & Media Buying',
    tagline: 'Profitable customer acquisition across Meta, TikTok & Google',
    desc: 'Full-funnel media buying backed by rapid creative testing. We build structured audience architectures, conversion tracking, and high-converting ad formats that maximize ROAS.',
    accentColor: '#F59E0B',
    icon: TrendingUp,
    targetKpi: '4.1x Average Account ROAS',
    deliverables: [
      'Account Audit & Full Restructure',
      'Creative Testing Matrix (Static & Video)',
      'Meta, Google & TikTok Ad Management',
      'Server-Side CAPI & GA4 Attribution',
      'Weekly Spend & CAC Optimization Reports',
    ],
    slug: 'paid-campaigns',
  },
  {
    id: 'psc-social',
    category: 'short-form',
    badge: 'All-In-One Studio',
    title: 'Premium Social Content (PSC)',
    tagline: 'Turnkey social media management & brand asset creation',
    desc: 'A dedicated growth squad managing your visual storytelling, content calendar, graphic design, and cross-channel community building — all unified under one strategic partner.',
    accentColor: '#10B981',
    icon: Layers,
    targetKpi: '30K+ Qualified Inbound Leads',
    deliverables: [
      'Full Editorial Content Calendar',
      'High-End Visual Identity Assets',
      'Motion Graphics & Carousel Design',
      'Community Engagement & Copywriting',
      'Monthly Strategic Growth Reviews',
    ],
    slug: 'content-marketing',
  },
  {
    id: 'brand-identity',
    category: 'brand',
    badge: 'Identity System',
    title: 'Branding & Visual Architecture',
    tagline: 'Distinctive brand identities built to scale globally',
    desc: 'From naming and strategic positioning to complete visual bibles, typography systems, and pitch-ready corporate collateral that command immediate authority in international markets.',
    accentColor: '#EC4899',
    icon: Palette,
    targetKpi: '2x Engagement Post-Rebrand',
    deliverables: [
      'Brand Strategy & Positioning Statement',
      'Logo System (Primary, Secondary, Badges)',
      'Color Palette & Typography Hierarchy',
      'Comprehensive Brand Style Guidelines',
      'Social & Corporate Collateral Templates',
    ],
    slug: 'branding',
  },
  {
    id: 'digital-consultation',
    category: 'brand',
    badge: 'Strategic Advisory',
    title: 'Digital Consultation & Growth Audits',
    tagline: 'Actionable roadmaps tailored to your market & growth stage',
    desc: 'Deep-dive competitive teardowns, audience psychology analysis, and channel prioritization matrices that eliminate guesswork and focus your resources on the highest-leverage opportunities.',
    accentColor: '#4F46E5',
    icon: Compass,
    targetKpi: '94% Client Retention Rate',
    deliverables: [
      'Comprehensive Digital Footprint Audit',
      'Competitor Landscape & White-Space Map',
      'Audience Persona & Psychology Profiles',
      '90-Day Priority Action Roadmap',
      'Measurement Framework & KPI Dashboards',
    ],
    slug: 'digital-consultation',
  },
];

// ── 4-Step Agency Sprint Workflow ─────────────────────────────────────────────
const sprintSteps = [
  {
    step: '01',
    phase: 'Week 1',
    title: 'Algorithmic & Brand Audit',
    desc: 'We dissect your existing assets, analyze competitor white-spaces, and define your channel architecture and core commercial objectives.',
    accent: '#FF6A00',
  },
  {
    step: '02',
    phase: 'Week 2',
    title: 'Hook Architecture & Blueprint',
    desc: 'Our creative directors engineer your high-retention scripting angles, visual design systems, and audience targeting frameworks.',
    accent: '#3B82F6',
  },
  {
    step: '03',
    phase: 'Weeks 3–4',
    title: 'Batch Production & Launch',
    desc: 'High-volume production kicks in. Videos are filmed, edited, color-graded, and deployed across designated channels with real-time tracking.',
    accent: '#10B981',
  },
  {
    step: '04',
    phase: 'Ongoing',
    title: 'Attribution & Algorithmic Scale',
    desc: 'Weekly optimization sprints kill underperformers, double down on viral hooks, and scale profitable ad spend systematically.',
    accent: '#F59E0B',
  },
];

// ── Tech & Tool Stack Grid ───────────────────────────────────────────────────
const techStack = [
  { name: 'TikTok Creative Center', category: 'Trend Intelligence', icon: '⚡' },
  { name: 'Meta Ads Manager', category: 'Paid Performance', icon: '🎯' },
  { name: 'Google Ads & YouTube', category: 'Search & Video Intent', icon: '🔍' },
  { name: 'DaVinci Resolve & Premiere', category: 'Cinema Post-Production', icon: '🎬' },
  { name: 'After Effects & Cinema 4D', category: 'Motion Graphics', icon: '✨' },
  { name: 'Figma', category: 'UI & Brand Systems', icon: '📐' },
  { name: 'Google Analytics 4 & CAPI', category: 'Attribution & Tracking', icon: '📊' },
  { name: 'TripleWhale & Northbeam', category: 'E-Commerce Intelligence', icon: '📈' },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCards =
    activeCategory === 'all'
      ? capabilityCards
      : capabilityCards.filter((c) => c.category === activeCategory);

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
            <span>Full-Service International Growth Architecture</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className={styles.lightWord}>Specialized capabilities for</span>{' '}
            <span className={styles.boldWord}>high-velocity market dominance.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            From viral short-form studios to enterprise performance media, Transco Digital operates
            as an agile growth engine engineered for measurable commercial return.
          </motion.p>
        </div>
      </section>

      {/* ── 2. Interactive Capability Switcher / Matrix ────────────── */}
      <section className={styles.matrixSection} aria-label="Capabilities Matrix">
        <div className="container">
          {/* Category Tabs */}
          <div className={styles.tabBar}>
            {capabilityCategories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.tabBtn} ${activeCategory === cat.id ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Capability Grid */}
          <motion.div layout className={styles.capabilitiesGrid}>
            <AnimatePresence>
              {filteredCards.map((card) => {
                const IconComp = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35 }}
                    className={styles.card}
                    style={{ '--card-accent': card.accentColor } as React.CSSProperties}
                  >
                    {/* Top Row: Icon + Badge */}
                    <div className={styles.cardTop}>
                      <div
                        className={styles.cardIconBox}
                        style={{
                          background: `${card.accentColor}18`,
                          color: card.accentColor,
                        }}
                      >
                        <IconComp size={22} strokeWidth={2} />
                      </div>
                      <span className={styles.cardBadge}>{card.badge}</span>
                    </div>

                    {/* Content */}
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardTagline} style={{ color: card.accentColor }}>
                      {card.tagline}
                    </p>
                    <p className={styles.cardDesc}>{card.desc}</p>

                    {/* KPI Target Pill */}
                    <div className={styles.kpiPill}>
                      <span className={styles.kpiDot} style={{ background: card.accentColor }} />
                      <span>{card.targetKpi}</span>
                    </div>

                    {/* Deliverables List */}
                    <div className={styles.deliverablesList}>
                      <p className={styles.delivHeader}>Included Deliverables:</p>
                      <ul>
                        {card.deliverables.map((item) => (
                          <li key={item}>
                            <CheckCircle2 size={14} color={card.accentColor} className={styles.checkIcon} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action */}
                    <div className={styles.cardFooter}>
                      <Link href={`/services/${card.slug}`} className={styles.cardLink}>
                        <span>Explore Deep-Dive</span>
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Transco 4-Step Agency Sprint (Operating System) ────── */}
      <section className={styles.sprintSection} aria-label="Our Delivery System">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>The Transco Operating System</p>
            <h2 className={styles.sectionTitle}>
              <span className={styles.lightWord}>How we engineer growth in</span>{' '}
              <span className={styles.boldWord}>four structured sprints.</span>
            </h2>
            <p className={styles.sectionSub}>
              A battle-tested production rhythm that eliminates delays and guarantees repeatable velocity.
            </p>
          </div>

          <div className={styles.sprintGrid}>
            {sprintSteps.map((s, idx) => (
              <motion.div
                key={s.step}
                className={styles.sprintCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={styles.sprintTop}>
                  <span className={styles.sprintNum} style={{ color: s.accent }}>
                    {s.step}
                  </span>
                  <span className={styles.sprintPhase}>{s.phase}</span>
                </div>
                <h3 className={styles.sprintTitle}>{s.title}</h3>
                <p className={styles.sprintDesc}>{s.desc}</p>
                <div className={styles.sprintBottomLine} style={{ background: s.accent }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Enterprise Tech Stack & Tools ──────────────────────── */}
      <section className={styles.techSection} aria-label="Tooling & Stack">
        <div className="container">
          <div className={styles.techCard}>
            <div className={styles.techHeader}>
              <div className={styles.techBadge}>
                <Cpu size={14} color="#FF6A00" />
                <span>Enterprise Technology Ecosystem</span>
              </div>
              <h2 className={styles.techTitle}>Powered by top-tier creative & analytics infrastructure</h2>
              <p className={styles.techSub}>
                We combine industry-leading media buying suites, cinema-grade editing pipelines, and first-party attribution software.
              </p>
            </div>

            <div className={styles.techGrid}>
              {techStack.map((tech) => (
                <div key={tech.name} className={styles.techItem}>
                  <span className={styles.techEmoji}>{tech.icon}</span>
                  <div className={styles.techMeta}>
                    <span className={styles.techName}>{tech.name}</span>
                    <span className={styles.techCat}>{tech.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Bottom Call to Action ───────────────────────────────── */}
      <section className={styles.ctaSection} aria-label="Get Started">
        <div className="container">
          <div className={styles.ctaCard}>
            <p className={styles.ctaEyebrow}>Ready to make waves?</p>
            <h2 className={styles.ctaTitle}>
              Let&apos;s build a custom growth program for your brand.
            </h2>
            <p className={styles.ctaDesc}>
              Whether you need high-velocity TikTok content or a complete brand overhaul, our team is ready.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimary}>
                <span>Build Your Project Scope</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link href="/case-studies" className={styles.ctaSecondary}>
                <span>View Verified Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
