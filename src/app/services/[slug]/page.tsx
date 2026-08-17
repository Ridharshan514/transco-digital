'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { getServiceBySlug } from '@/data/services';
import styles from './serviceDetail.module.css';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = use(params);
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className={styles.page}>
      {/* Header / Breadcrumb */}
      <section className={styles.heroSection}>
        <div className="container">
          <Link href="/services" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>All Services</span>
          </Link>

          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>Service Overview</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {service.title}
          </motion.h1>

          <motion.p
            className={styles.heroTagline}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {service.tagline}
          </motion.p>
        </div>
      </section>

      {/* Deep Overview */}
      <section className={`${styles.overviewSection} section`}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewText}>
              <p className="eyebrow">The Approach</p>
              <h2>How we execute {service.shortTitle}.</h2>
              <p>{service.longDescription}</p>
            </div>

            <div className={styles.statsCard}>
              <h3>Proven Performance Metrics</h3>
              <div className={styles.metricsList}>
                {service.results.map((r) => (
                  <div key={r.label} className={styles.metricItem}>
                    <span className={styles.metricStat}>{r.stat}</span>
                    <span className={styles.metricLabel}>{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className={`${styles.stepsSection} section`}>
        <div className="container">
          <p className="eyebrow">Execution Framework</p>
          <h2 className={styles.sectionTitle}>Step-by-step process.</h2>

          <div className={styles.stepsGrid}>
            {service.steps.map((s, idx) => (
              <motion.div
                key={s.step}
                className={styles.stepCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <span className={styles.stepNum}>{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Target Audience */}
      <section className={`${styles.deliverablesSection} section`}>
        <div className="container">
          <div className={styles.twoColGrid}>
            {/* Left: Who it's for */}
            <div className={styles.infoCard}>
              <p className="eyebrow">Target Audience</p>
              <h2>Who this service is for.</h2>
              <ul className={styles.checkList}>
                {service.forWho.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Deliverables */}
            <div className={styles.infoCard}>
              <p className="eyebrow">Tangible Output</p>
              <h2>Key deliverables included.</h2>
              <ul className={styles.checkList}>
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.bottomCta}>
            <Link href="/contact" className={styles.primaryBtn}>
              Discuss {service.shortTitle} Project
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
