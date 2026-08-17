'use client';

import { motion } from 'framer-motion';
import Contact from '@/components/Contact/Contact';
import styles from './contactPage.module.css';

export default function DedicatedContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>Direct Client Consultation</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="headline-light">Let&apos;s build something</span>
            <span className="headline-bold">extraordinary together.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Schedule a strategy call or send our execution team a brief overview of your brand goals.
          </motion.p>
        </div>
      </section>

      {/* Main Form Component */}
      <Contact />
    </main>
  );
}
