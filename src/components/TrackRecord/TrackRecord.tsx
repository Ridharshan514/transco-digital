'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { useToast } from '../ui/Toast/Toast';
import styles from './TrackRecord.module.css';

const caseStudies = [
  {
    slug: 'kinetic-cycle-coaching',
    client: 'Kinetic Cycle Coaching',
    stats: [
      { value: 1700000, display: '1.7M+', label: 'YouTube Views' },
      { value: 20000, display: '20K+', label: 'New Subscribers' },
      { value: 750, display: '750+', label: 'Videos Produced' },
    ],
    description: 'In one year, we took Kinetic Cycle from obscurity to one of the fastest-growing cycling coaching channels on YouTube.',
  },
  {
    slug: 'carys-ecclesall',
    client: 'Carys Ecclesall',
    stats: [
      { value: 850000, display: '850K+', label: 'Total Views' },
      { value: 10000, display: '10K+', label: 'New Subscribers' },
      { value: 100, display: '100+', label: 'Videos Produced' },
    ],
    description: 'Systematic content planning and video production that built a loyal community around a personal brand from the ground up.',
  },
  {
    slug: 'bankhill-educare',
    client: 'Bankhill Educare',
    stats: [
      { value: 1000000, display: '1M+', label: 'Monthly Reach' },
      { value: 1000, display: '1,000+', label: 'Monthly Leads' },
      { value: 2, display: '2×', label: 'Brand Excellence Partner' },
    ],
    description:
      'Official digital partner for SLIM Brand Excellence 2021 & 2022 — driving scale for Sri Lanka\'s leading marketing institution.',
  },
];

function StatNumber({ display, label, inView }: { display: string; label: string; inView: boolean }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);
  const holdTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { showToast } = useToast();
  const [isOverloaded, setIsOverloaded] = useState(false);

  useEffect(() => {
    if (inView && !animated.current && numRef.current) {
      animated.current = true;
      const el = numRef.current;
      const match = display.match(/[\d,.]+/);
      if (match) {
        const target = parseFloat(match[0].replace(/,/g, ''));
        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            const v = Math.round(proxy.val);
            el.textContent = display.replace(/[\d,.]+/, v.toLocaleString());
          },
        });
      }
    }
  }, [inView, display]);

  // Easter egg #7: Hold stat for 3 seconds -> overload counter
  const handleHoldStart = () => {
    holdTimerRef.current = setTimeout(() => {
      setIsOverloaded(true);
      if (numRef.current) {
        const el = numRef.current;
        const proxy = { val: 9999999 };
        gsap.to(proxy, {
          val: 99999999,
          duration: 1.5,
          onUpdate: () => {
            el.textContent = `${Math.round(proxy.val).toLocaleString()}+ 🔥`;
          },
          onComplete: () => {
            el.textContent = `${display} (Overreported!)`;
            setIsOverloaded(false);
          },
        });
      }
      showToast({
        title: '📊 Stat Counter Overloaded!',
        description: 'You held the stat number! We might have underreported our actual numbers.',
        type: 'easter-egg',
      });
    }, 2500);
  };

  const handleHoldEnd = () => {
    if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
  };

  return (
    <div
      className={`${styles.stat} ${isOverloaded ? styles.overloaded : ''}`}
      onMouseDown={handleHoldStart}
      onMouseUp={handleHoldEnd}
      onTouchStart={handleHoldStart}
      onTouchEnd={handleHoldEnd}
      data-cursor="Hold 3s to Overload"
    >
      <span className={styles.statNum} ref={numRef}>{display}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export default function TrackRecord() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={`${styles.section} section`} id="results" aria-label="Track Record">
      <div className="container">
        <motion.div
          className={styles.header}
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Results</p>
          <h2 className={styles.headline}>
            <span className="headline-light">Numbers that</span>
            <span className="headline-bold">speak for themselves.</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.client}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.clientName}>{study.client}</span>
                <Link href={`/case-studies/${study.slug}`} className={styles.badge}>
                  Case Study →
                </Link>
              </div>

              <div className={styles.statsRow}>
                {study.stats.map((stat) => (
                  <StatNumber key={stat.label} display={stat.display} label={stat.label} inView={inView} />
                ))}
              </div>

              <p className={styles.desc}>{study.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
