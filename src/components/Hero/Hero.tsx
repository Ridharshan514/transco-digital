'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero3DBackground = dynamic(() => import('./Hero3DBackground'), { ssr: false });

export default function Hero() {
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - 2020;

  return (
    <section className={styles.hero} id="home" aria-label="Transco Digital — Hero">
      {/* LEFT — text content */}
      <motion.div
        className={styles.leftCol}
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>Founded 2020 · Sri Lanka</span>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.lightLine}>Move forward</span>
          <span className={styles.lightLine}>your brand.</span>
          <span className={styles.boldLine}>Powered by digital.</span>
        </h1>

        <p className={styles.subtext}>
          Powering over 200+ clients worldwide. Your premier international digital marketing agency network.
        </p>

        <div className={styles.ctaRow}>
          <Link href="/contact" className={styles.iconBtn} aria-label="Schedule a call">
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </Link>
          <Link href="/contact" className={styles.primaryBtn} id="hero-cta">
            Schedule a Call
          </Link>
          <Link href="/case-studies" className={styles.secondaryBtn}>
            See our work
          </Link>
        </div>

        <div className={styles.trustRow}>
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>200+</span>
            <span className={styles.trustLabel}>Clients worldwide</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>3M+</span>
            <span className={styles.trustLabel}>Views generated</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>{yearsActive}+</span>
            <span className={styles.trustLabel}>Years of growth</span>
          </div>
        </div>
      </motion.div>

      {/* RIGHT — globe in sleek black box */}
      <motion.div
        className={styles.rightCol}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div className={styles.globeBox}>
          <Hero3DBackground />
        </div>
      </motion.div>
    </section>
  );
}
