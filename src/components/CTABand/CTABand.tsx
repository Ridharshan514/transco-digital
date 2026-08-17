'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './CTABand.module.css';

export default function CTABand() {
  return (
    <section className={styles.band} id="cta-band" aria-label="Get in touch — Call to action">
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.content}>
          <p className={styles.eyebrow}>Ready to grow?</p>
          <h2 className={styles.headline}>
            Ready to move your<br />brand forward?
          </h2>
          <p className={styles.subtext}>
            Schedule your call now to power up your brand&apos;s digital success.
          </p>
        </div>
        <div className={styles.actions}>
          <Link href="/contact" className={styles.primaryBtn} id="cta-band-schedule">
            Schedule a Call with Us
          </Link>
          <Link href="/contact" className={styles.iconBtn} aria-label="Get in touch">
            <ArrowUpRight size={20} strokeWidth={2} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
