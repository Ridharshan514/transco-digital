'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, Quote } from 'lucide-react';
import { getCaseStudyBySlug } from '@/data/caseStudies';
import styles from './caseStudyDetail.module.css';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const resolvedParams = use(params);
  const cs = getCaseStudyBySlug(resolvedParams.slug);

  if (!cs) {
    notFound();
  }

  return (
    <main className={styles.page}>
      {/* Header */}
      <section className={styles.heroSection}>
        <div className="container">
          <Link href="/case-studies" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>All Case Studies</span>
          </Link>

          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>{cs.industry} · Case Study</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {cs.title}
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Client: <strong>{cs.client}</strong>
          </motion.p>

          <motion.div
            className={styles.coverImageWrap}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src={cs.coverImage}
              alt={cs.client}
              fill
              className={styles.coverImage}
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Banner */}
      <section className={styles.statsBanner}>
        <div className="container">
          <div className={styles.statsGrid}>
            {cs.metrics.map((m) => (
              <div key={m.label} className={styles.statCard}>
                <span className={styles.statNum}>{m.stat}</span>
                <span className={styles.statLabel}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className={`${styles.narrativeSection} section`}>
        <div className="container">
          <div className={styles.narrativeGrid}>
            <div className={styles.narrativeCol}>
              <div className={styles.block}>
                <p className="eyebrow">The Challenge</p>
                <h2>Background & Obstacles</h2>
                <p>{cs.challenge}</p>
              </div>

              <div className={styles.block}>
                <p className="eyebrow">The Solution</p>
                <h2>Transco Digital Framework</h2>
                <p>{cs.solution}</p>
              </div>

              <div className={styles.block}>
                <p className="eyebrow">The Outcome</p>
                <h2>Commercial & Brand Impact</h2>
                <p>{cs.resultsSummary}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              {cs.testimonial && (
                <div className={styles.quoteCard}>
                  <Quote size={28} className={styles.quoteIcon} />
                  <p className={styles.quoteText}>&ldquo;{cs.testimonial.quote}&rdquo;</p>
                  <div className={styles.quoteAuthor}>
                    <strong>{cs.testimonial.author}</strong>
                    <span>{cs.testimonial.role}</span>
                  </div>
                </div>
              )}

              <div className={styles.metaCard}>
                <h4>Services Used</h4>
                <div className={styles.tagsGroup}>
                  {cs.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className={styles.metaCta}>
                  <Link href="/contact" className={styles.sideCtaBtn}>
                    Build Similar Growth
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
