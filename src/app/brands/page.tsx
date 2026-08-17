'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { brands } from '@/data/brands';
import styles from './brands.module.css';

export default function BrandsPage() {
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
            <span>Sub-Studios & Brand Network</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="headline-light">Purpose-built brand studios for</span>
            <span className="headline-bold">specialized digital media dominance.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transco Digital operates dedicated sub-brands focused on short-form viral creative, YouTube automated channels, and trend-first TikTok production.
          </motion.p>
        </div>
      </section>

      {/* Brands List */}
      <section className={`${styles.brandsSection} section`}>
        <div className="container">
          <div className={styles.brandsList}>
            {brands.map((brand, idx) => (
              <motion.div
                key={brand.slug}
                className={styles.brandCard}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
              >
                <div className={styles.cardImageWrap}>
                  <Image
                    src={brand.heroImage}
                    alt={brand.name}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className={styles.imageOverlay} />
                  <span
                    className={styles.accentBadge}
                    style={{ backgroundColor: brand.accentColor }}
                  >
                    {brand.name}
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.subtitle}>{brand.subtitle}</span>
                  <h2>{brand.name}</h2>
                  <p className={styles.tagline}>{brand.tagline}</p>
                  <p className={styles.desc}>{brand.description}</p>

                  <div className={styles.statsRow}>
                    {brand.stats.map((s) => (
                      <div key={s.label} className={styles.statItem}>
                        <span className={styles.statNum}>{s.stat}</span>
                        <span className={styles.statLabel}>{s.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.cardAction}>
                    <Link href={`/brands/${brand.slug}`} className={styles.brandBtn}>
                      View Brand Profile
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
