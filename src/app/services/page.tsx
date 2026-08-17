'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Palette, FileText, TrendingUp, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';
import styles from './services.module.css';

const iconMap = {
  Compass: Compass,
  Palette: Palette,
  FileText: FileText,
  TrendingUp: TrendingUp,
};

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      {/* Header */}
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>Full-Service Agency Capabilities</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="headline-light">Core pillars designed for</span>
            <span className="headline-bold">sustainable brand acceleration.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From initial positioning strategy to multi-channel execution, our services operate as an integrated growth engine for modern digital brands.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`${styles.servicesSection} section`}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, idx) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Compass;
              return (
                <motion.div
                  key={service.slug}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                >
                  <div className={styles.cardHeader}>
                    <div
                      className={styles.iconBox}
                      style={{ backgroundColor: `${service.accentColor}15`, color: service.accentColor }}
                    >
                      <IconComponent size={24} />
                    </div>
                    <span className={styles.serviceNumber}>0{idx + 1}</span>
                  </div>

                  <h2 className={styles.cardTitle}>{service.title}</h2>
                  <p className={styles.cardTagline}>{service.tagline}</p>
                  <p className={styles.cardDesc}>{service.description}</p>

                  <div className={styles.deliverablesList}>
                    <h4>Key Deliverables:</h4>
                    <ul>
                      {service.deliverables.slice(0, 4).map((d) => (
                        <li key={d}>
                          <CheckCircle2 size={15} className={styles.checkIcon} />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <Link href={`/services/${service.slug}`} className={styles.learnMoreBtn}>
                      Explore Service Detail
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className={`${styles.ctaSection} section`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Not sure which service fits your current stage?</h2>
            <p>Schedule a 30-minute strategic consultation with our team to map out your digital roadmap.</p>
            <Link href="/contact" className={styles.ctaBtn}>
              Schedule Strategic Consultation
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
