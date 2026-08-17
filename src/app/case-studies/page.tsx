'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import styles from './caseStudies.module.css';

export default function CaseStudiesPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>Client Impact & Growth Stories</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="headline-light">Real results engineered for</span>
            <span className="headline-bold">ambitious brands worldwide.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore how we combine strategic positioning, production-grade video, and performance media to transform brand outcomes.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className={`${styles.studiesSection} section`}>
        <div className="container">
          <div className={styles.studiesGrid}>
            {caseStudies.map((cs, idx) => (
              <motion.div
                key={cs.slug}
                className={styles.studyCard}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={cs.coverImage}
                    alt={cs.client}
                    fill
                    className={styles.coverImage}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <span className={styles.industryTag}>{cs.industry}</span>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.clientName}>{cs.client}</span>
                  <h2>{cs.title}</h2>
                  <p>{cs.summary}</p>

                  <div className={styles.metricsRow}>
                    {cs.metrics.map((m) => (
                      <div key={m.label} className={styles.metricItem}>
                        <span className={styles.metricStat}>{m.stat}</span>
                        <span className={styles.metricLabel}>{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.tagsRow}>
                    {cs.tags.map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={styles.cardAction}>
                    <Link href={`/case-studies/${cs.slug}`} className={styles.readMoreBtn}>
                      Read Full Case Study
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
