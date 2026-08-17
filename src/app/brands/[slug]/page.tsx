'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { getBrandBySlug } from '@/data/brands';
import styles from './brandDetail.module.css';

interface BrandPageProps {
  params: Promise<{ slug: string }>;
}

export default function BrandDetailPage({ params }: BrandPageProps) {
  const resolvedParams = use(params);
  const brand = getBrandBySlug(resolvedParams.slug);

  if (!brand) {
    notFound();
  }

  return (
    <main className={styles.page}>
      {/* Header */}
      <section className={styles.heroSection}>
        <div className="container">
          <Link href="/brands" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>All Sub-Brands</span>
          </Link>

          <div className={styles.heroGrid}>
            <div>
              <motion.div
                className={styles.heroBadge}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ color: brand.accentColor, borderColor: `${brand.accentColor}40` }}
              >
                <span>{brand.subtitle}</span>
              </motion.div>

              <motion.h1
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {brand.name}
              </motion.h1>

              <motion.p
                className={styles.heroTagline}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {brand.tagline}
              </motion.p>

              <motion.p
                className={styles.heroDesc}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {brand.longDescription}
              </motion.p>
            </div>

            <motion.div
              className={styles.heroImageWrap}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src={brand.heroImage}
                alt={brand.name}
                fill
                className={styles.heroImage}
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className={styles.metricsBanner}>
        <div className="container">
          <div className={styles.metricsGrid}>
            {brand.stats.map((s) => (
              <div key={s.label} className={styles.metricCard}>
                <span className={styles.metricStat}>{s.stat}</span>
                <span className={styles.metricLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className={`${styles.pillarsSection} section`}>
        <div className="container">
          <p className="eyebrow">Studio Methodology</p>
          <h2 className={styles.sectionTitle}>Core Pillars of {brand.name}.</h2>

          <div className={styles.pillarsGrid}>
            {brand.pillars.map((p, idx) => (
              <motion.div
                key={p.title}
                className={styles.pillarCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div
                  className={styles.pillarDot}
                  style={{ backgroundColor: brand.accentColor }}
                />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights & Scope */}
      <section className={`${styles.highlightsSection} section`}>
        <div className="container">
          <div className={styles.highlightsBox}>
            <h2>Full Scope & Deliverables</h2>
            <ul className={styles.highlightsList}>
              {brand.highlights.map((h) => (
                <li key={h}>
                  <CheckCircle2 size={20} className={styles.checkIcon} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className={styles.ctaRow}>
              <Link href="/contact" className={styles.primaryBtn}>
                Partner with {brand.name}
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
