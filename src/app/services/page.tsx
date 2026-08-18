'use client';

/**
 * ServicesPage.tsx — Minimal, High-Efficiency Capabilities Showcase
 * Features:
 * 1. Minimal Hero
 * 2. Animated Social Media Ecosystem Marquee & Interactive Platform Cloud
 * 3. 6 Core Capabilities with Blueprint Routing
 * 4. 4-Step Sprint Workflow
 * 5. High-Contrast Obsidian CTA
 */

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Video,
  PlaySquare,
  TrendingUp,
  Palette,
  Compass,
  Layers,
} from 'lucide-react';
import ParallaxSocials from '@/components/ParallaxSocials/ParallaxSocials';
import styles from './services.module.css';

// ── Inline High-Precision Social Media SVGs ──────────────────────────────────
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.28 8.28 0 0 0 4.84 1.56V6.86a4.87 4.87 0 0 1-1.07-.17z" />
  </svg>
);

const YouTubeIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const MetaIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GoogleIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.24 10.285V13.4h6.887C18.2 16.03 15.645 18 12.24 18c-3.315 0-6-2.685-6-6s2.685-6 6-6c1.47 0 2.805.54 3.84 1.425l2.4-2.4C16.89 3.48 14.7 2.6 12.24 2.6 7.05 2.6 2.85 6.8 2.85 12s4.2 9.4 9.39 9.4c5.43 0 9.03-3.81 9.03-9.195 0-.615-.06-1.215-.18-1.92H12.24z" />
  </svg>
);

const services = [
  {
    number: '01',
    title: 'TikTok Makers Viral Engine',
    category: 'Short-Form Video',
    platformIcon: TikTokIcon,
    tagline: 'Hook architecture & batch 9:16 production.',
    desc: 'High-velocity vertical video production built specifically for TikTok, Reels, and Shorts algorithms with rapid trend-jacking.',
    metric: 'Avg. 35%+ Hook Retention',
    tags: ['Hook Scripting', 'Batch Production', '9:16 Distribution'],
    linkHref: '/services/content-marketing',
    icon: Video,
  },
  {
    number: '02',
    title: 'YouTuber Channel Automation',
    category: 'Creator Media',
    platformIcon: YouTubeIcon,
    tagline: 'Full-pipeline editing, high-CTR thumbnails & SEO.',
    desc: 'Turn your channel into an automated media asset. We handle pacing edits, high-CTR 3D packaging, and audience monetization.',
    metric: '1.7M+ Organic Views',
    tags: ['3D Thumbnails', 'Retention Curve Editing', 'SEO Ranking'],
    linkHref: '/services/content-marketing',
    icon: PlaySquare,
  },
  {
    number: '03',
    title: 'Paid Performance Media Buying',
    category: 'Revenue Scaling',
    platformIcon: MetaIcon,
    tagline: 'Profitable customer acquisition across Meta & Google.',
    desc: 'Full-funnel media buying backed by rapid creative testing, first-party CAPI attribution, and aggressive scaling.',
    metric: '4.1× Average ROAS',
    tags: ['Creative Testing', 'Meta & Google Ads', 'CAPI Attribution'],
    linkHref: '/services/paid-campaigns',
    icon: TrendingUp,
  },
  {
    number: '04',
    title: 'Premium Social Content (PSC)',
    category: 'Brand Content',
    platformIcon: InstagramIcon,
    tagline: 'Turnkey social media management & brand asset creation.',
    desc: 'A dedicated growth squad managing your complete visual storytelling, editorial calendar, and cross-channel community.',
    metric: '30K+ Qualified Leads',
    tags: ['Editorial Calendars', 'Motion Carousels', 'Community Growth'],
    linkHref: '/services/content-marketing',
    icon: Layers,
  },
  {
    number: '05',
    title: 'Brand Architecture & Identity',
    category: 'Brand Strategy',
    platformIcon: LinkedInIcon,
    tagline: 'Distinctive visual systems built for global authority.',
    desc: 'From core strategic positioning to complete visual bibles, typography systems, and pitch-ready corporate collateral.',
    metric: '2× Post-Rebrand Lift',
    tags: ['Logo Systems', 'Brand Guidelines', 'Corporate Collateral'],
    linkHref: '/services/branding',
    icon: Palette,
  },
  {
    number: '06',
    title: 'Digital Consultation & Growth Audits',
    category: 'Advisory Sprint',
    platformIcon: GoogleIcon,
    tagline: 'Actionable roadmaps tailored to your growth stage.',
    desc: 'Deep-dive competitive teardowns and channel prioritization matrices that eliminate guesswork and focus your budget.',
    metric: '94% Client Retention',
    tags: ['Competitor Audits', '90-Day Roadmaps', 'KPI Frameworks'],
    linkHref: '/services/digital-consultation',
    icon: Compass,
  },
];

const workflowSteps = [
  { step: '01', title: 'Audit & Discovery', time: 'Week 1', desc: 'Dissecting current assets, audience drop-offs, and competitor white-spaces.' },
  { step: '02', title: 'Hook Architecture', time: 'Week 2', desc: 'Engineering high-retention scripting angles and visual design systems.' },
  { step: '03', title: 'Batch Production', time: 'Weeks 3–4', desc: 'Filming, editing, color-grading, and deploying 30–60 batch assets.' },
  { step: '04', title: 'Attribution & Scale', time: 'Ongoing', desc: 'Weekly optimization sprints killing underperformers and scaling winners.' },
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      {/* ── Floating Social Media Parallax Ecosystem (TikTok, Insta, YT, Meta, LinkedIn) ── */}
      <ParallaxSocials />

      {/* ── 1. Clean Minimal Hero ─────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            <span>Capabilities & Execution</span>
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.lightWord}>Specialized capabilities.</span>{' '}
            <span className={styles.boldWord}>Unified execution.</span>
          </h1>

          <p className={styles.heroSub}>
            Six focused growth engines built to capture attention, maximize retention, and scale commercial revenue.
          </p>
        </div>
      </section>

      {/* ── 2. The 6 Core Services (Clean 2-Column Grid) ─────────── */}
      <section className={styles.servicesSection} aria-label="Services Grid">
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((item) => {
              const PlatformIcon = item.platformIcon;
              return (
                <article key={item.number} className={styles.serviceCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIndexWrap}>
                      <span className={styles.cardNum}>{item.number}</span>
                      <span className={styles.cardCat}>{item.category}</span>
                    </div>

                    {/* Animated Social Platform Badge */}
                    <div className={styles.animatedPlatformBadge} title={item.category}>
                      <PlatformIcon size={16} />
                    </div>
                  </div>

                  <h2 className={styles.cardTitle}>{item.title}</h2>
                  <p className={styles.cardTagline}>{item.tagline}</p>
                  <p className={styles.cardDesc}>{item.desc}</p>

                  {/* Metric Box */}
                  <div className={styles.metricPill}>
                    <span className={styles.metricDot} />
                    <strong>{item.metric}</strong>
                  </div>

                  {/* Quick Tags */}
                  <div className={styles.tagsRow}>
                    {item.tags.map((t) => (
                      <span key={t} className={styles.tagPill}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer Link */}
                  <div className={styles.cardFooter}>
                    <Link href={item.linkHref} className={styles.cardLink}>
                      <span>Explore Blueprint</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. 4-Step Sprint Workflow ─────────────────────────────── */}
      <section className={styles.workflowSection} aria-label="Our Delivery Workflow">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>The 4-Step Sprint</span>
            <h2 className={styles.sectionTitle}>How we execute and scale.</h2>
          </div>

          <div className={styles.workflowGrid}>
            {workflowSteps.map((ws) => (
              <div key={ws.step} className={styles.workflowCard}>
                <div className={styles.stepTopRow}>
                  <span className={styles.stepNum}>{ws.step}</span>
                  <span className={styles.stepTime}>{ws.time}</span>
                </div>
                <h3 className={styles.stepTitle}>{ws.title}</h3>
                <p className={styles.stepDesc}>{ws.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Call to Action ─────────────────────────────────────── */}
      <section className={styles.ctaSection} aria-label="Start Your Program">
        <div className="container">
          <div className={styles.ctaCard}>
            <span className={styles.ctaEyebrow}>Ready to grow?</span>
            <h2 className={styles.ctaTitle}>
              Let&apos;s engineer your brand&apos;s next growth chapter.
            </h2>
            <p className={styles.ctaDesc}>
              Schedule a strategic consultation to map out the exact squad and channels for your business.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimary}>
                <span>Schedule a Strategic Call</span>
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
