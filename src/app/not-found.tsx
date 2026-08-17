'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import styles from './notFound.module.css';

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={14} className={styles.badgeIcon} />
            <span>404 — Hidden Vector</span>
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            This page doesn&apos;t exist yet.
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            But you do. And that means you have an eye for detail.
          </motion.p>

          <motion.div
            className={styles.secretBox}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className={styles.secretText}>
              &ldquo;In digital strategy, taking an unmapped path is often where true competitive advantage is discovered.&rdquo;
            </p>
            <span className={styles.secretTag}>— Transco Digital Engineering Note</span>
          </motion.div>

          <motion.div
            className={styles.actionRow}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link href="/" className={styles.homeBtn}>
              <ArrowLeft size={16} />
              Return to Home Platform
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
