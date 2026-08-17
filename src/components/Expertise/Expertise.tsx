'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Compass, Palette, FileText, Target } from 'lucide-react';
import styles from './Expertise.module.css';

const pillars = [
  {
    slug: 'digital-consultation',
    icon: Compass,
    title: 'Digital Consultation',
    description:
      'Helping clients figure out the right digital strategy for their business — from market research to channel selection and roadmap planning.',
  },
  {
    slug: 'branding',
    icon: Palette,
    title: 'Branding',
    description:
      'Logo design and comprehensive brand guidelines: colours, fonts, and the complete visual identity that makes your business unforgettable.',
  },
  {
    slug: 'content-marketing',
    icon: FileText,
    title: 'Content Marketing',
    description:
      'Planning and creating content that authentically connects with your target audience, building trust and driving long-term organic growth.',
  },
  {
    slug: 'paid-campaigns',
    icon: Target,
    title: 'Paid Campaigns',
    description:
      'Running high-performance paid ad campaigns laser-focused on driving qualified traffic and maximising your conversion rates.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Expertise() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={`${styles.section} section`} id="expertise" aria-label="Our Expertise">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          ref={ref}
        >
          <p className="eyebrow">Our Expertise</p>
          <h2 className={styles.headline}>
            <span className="headline-light">What</span>
            <span className="headline-bold">we do.</span>
          </h2>
          <p className={styles.subtext}>
            Four focused disciplines. One integrated network that takes your brand from
            strategy to execution.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Link href={`/services/${pillar.slug}`} className={styles.card}>
                  <div className={styles.cardIcon}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.cardTitle}>{pillar.title}</h3>
                  <p className={styles.cardDesc}>{pillar.description}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.learnMore}>Explore service →</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
