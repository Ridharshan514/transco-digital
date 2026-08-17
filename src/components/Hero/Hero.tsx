'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero3DBackground = dynamic(() => import('./Hero3DBackground'), { ssr: false });

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-label="Transco Digital — Hero">

      {/* LEFT — text content, absolutely placed on left half */}
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
          <Link href="/services" className={styles.secondaryBtn}>
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
            <span className={styles.trustNum}>6+</span>
            <span className={styles.trustLabel}>Years of growth</span>
          </div>
        </div>
      </motion.div>

      {/* RIGHT — globe fills the full right half, nothing clips it */}
      <motion.div
        className={styles.rightCol}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Hero3DBackground />
      </motion.div>

    </section>
  );
}
