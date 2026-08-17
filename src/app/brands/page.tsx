'use client';

/**
 * BrandsPage.tsx — Proprietary Growth Studios & Creator IP Network
 */

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  Play,
  TrendingUp,
  CheckCircle2,
  Layers,
  Zap,
} from 'lucide-react';
import { brands } from '@/data/brands';
import styles from './brands.module.css';

export default function BrandsPage() {
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
            <span>Proprietary Production Arms & Creator IP</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className={styles.lightWord}>Purpose-built brand studios for</span>{' '}
            <span className={styles.boldWord}>specialized media dominance.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Transco Digital operates three specialized production ecosystems — engineered to dominate short-form viral feeds, automated YouTube channels, and high-end brand social creative.
          </motion.p>
        </div>
      </section>

      {/* ── 2. Studios Showcase ───────────────────────────────────── */}
      <section className={styles.brandsSection} aria-label="Our Studios">
        <div className="container">
          <div className={styles.brandsList}>
            {brands.map((brand, idx) => (
              <motion.article
                key={brand.slug}
                className={styles.brandCard}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                style={{ '--brand-accent': brand.accentColor } as React.CSSProperties}
              >
                {/* Left Column: Visual Media */}
                <div className={styles.cardImageWrap}>
                  <Image
                    src={brand.heroImage}
                    alt={brand.name}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className={styles.imageOverlay} />
                  <span className={styles.accentBadge} style={{ background: brand.accentColor }}>
                    {brand.subtitle}
                  </span>
                </div>

                {/* Right Column: Information & Pillars */}
                <div className={styles.cardContent}>
                  <span className={styles.studioIndex}>Studio 0{idx + 1}</span>
                  <h2 className={styles.studioName}>{brand.name}</h2>
                  <p className={styles.tagline} style={{ color: brand.accentColor }}>
                    {brand.tagline}
                  </p>
                  <p className={styles.desc}>{brand.longDescription}</p>

                  {/* Stats Row */}
                  <div className={styles.statsRow}>
                    {brand.stats.map((s) => (
                      <div key={s.label} className={styles.statItem}>
                        <span className={styles.statNum}>{s.stat}</span>
                        <span className={styles.statLabel}>{s.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Studio Pillars */}
                  <div className={styles.pillarsList}>
                    <p className={styles.pillarsHeader}>Core Studio Architecture:</p>
                    <div className={styles.pillarsGrid}>
                      {brand.pillars.map((p) => (
                        <div key={p.title} className={styles.pillarItem}>
                          <CheckCircle2 size={15} color={brand.accentColor} className={styles.pillarIcon} />
                          <div>
                            <strong className={styles.pillarTitle}>{p.title}</strong>
                            <p className={styles.pillarDesc}>{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className={styles.cardAction}>
                    <Link href={`/brands/${brand.slug}`} className={styles.brandBtn}>
                      <span>Explore Studio Portfolio & Capabilities</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Bottom Call to Action ───────────────────────────────── */}
      <section className={styles.ctaSection} aria-label="Studio Partnership">
        <div className="container">
          <div className={styles.ctaCard}>
            <p className={styles.ctaEyebrow}>Creator & Studio Partnerships</p>
            <h2 className={styles.ctaTitle}>
              Ready to plug your brand into our production network?
            </h2>
            <p className={styles.ctaDesc}>
              Whether you need 30 viral shorts per month or end-to-end YouTube channel automation, we have the infrastructure.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimary}>
                <span>Book a Studio Strategy Session</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
