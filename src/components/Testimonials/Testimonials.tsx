'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    id: 'fairtrade',
    company: 'Bankhill Educare',
    badge: 'Education Sector',
    rating: 5,
    quote:
      'From start to finish we were blown away by the quality and strategic execution with which Transco Digital delivered our digital growth.',
    highlight: 'blown away by the quality and strategic execution',
    author: 'Kushan De Silva',
    role: 'Director · Bankhill Educare',
    initials: 'KD',
    accentColor: '#FF6A00',
  },
  {
    id: 'kinetic',
    company: 'Kinetic Cycle Coaching',
    badge: 'Athletic Brand',
    rating: 5,
    quote:
      'Transco Digital transformed our digital presence with a strategy that attracts, engages, and converts. Over 1.7M+ views and 20K new subscribers.',
    highlight: 'Over 1.7M+ views and 20K new subscribers in a single year.',
    author: 'Scott Maclean',
    role: 'Head Coach · Kinetic UK',
    initials: 'SM',
    accentColor: '#3B82F6',
  },
  {
    id: 'welkin',
    company: 'Welkin Constructions',
    badge: 'Commercial Enterprise',
    rating: 5,
    quote:
      'They consistently deliver exactly what we envision, with seamless execution and clear communication. A premier digital agency partner.',
    highlight: 'consistently deliver exactly what we envision',
    author: 'Chamindu Kalansooriya',
    role: 'Managing Director · Welkin',
    initials: 'CK',
    accentColor: '#10B981',
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Card 1 Animations: peels away first
  const card1Y = useTransform(scrollYProgress, [0, 0.28, 0.42], [0, 0, -600]);
  const card1Rotate = useTransform(scrollYProgress, [0, 0.28, 0.42], [-2, -2, -18]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.35, 0.42], [1, 1, 0]);
  const card1Scale = useTransform(scrollYProgress, [0, 0.28, 0.42], [1, 1, 0.9]);

  // Card 2 Animations: starts tilted, straightens, then peels away
  const card2Y = useTransform(scrollYProgress, [0, 0.3, 0.42, 0.65, 0.78], [24, 24, 0, 0, -600]);
  const card2Rotate = useTransform(scrollYProgress, [0, 0.3, 0.42, 0.65, 0.78], [3, 3, 0, 0, 18]);
  const card2Scale = useTransform(scrollYProgress, [0, 0.3, 0.42, 0.65, 0.78], [0.94, 0.94, 1, 1, 0.9]);
  const card2Opacity = useTransform(scrollYProgress, [0, 0.7, 0.78], [1, 1, 0]);

  // Card 3 Animations: starts deeper in stack, scales up to front
  const card3Y = useTransform(scrollYProgress, [0, 0.65, 0.8], [48, 48, 0]);
  const card3Rotate = useTransform(scrollYProgress, [0, 0.65, 0.8], [-4, -4, 0]);
  const card3Scale = useTransform(scrollYProgress, [0, 0.65, 0.8], [0.88, 0.88, 1]);

  return (
    <section ref={containerRef} className={styles.scrollTrack} id="testimonials" aria-label="Client Testimonials">
      {/* Sticky Viewport Container */}
      <div className={styles.stickyContainer}>
        {/* Giant Watermark Heading (Ignite Agency Style) */}
        <div className={styles.watermarkWrap} aria-hidden="true">
          <span className={styles.watermarkText}>testimonials</span>
        </div>

        {/* Section Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Client Stories</p>
          <h2 className={styles.heading}>
            <span className={styles.lightText}>Trusted by </span>
            <span className={styles.boldText}>ambitious brands.</span>
          </h2>
        </div>

        {/* Stacked Cards Area */}
        <div className={styles.cardsStack}>
          {/* Card 3 (Bottom of stack) */}
          <motion.div
            className={`${styles.card} ${styles.card3}`}
            style={{
              y: card3Y,
              rotate: card3Rotate,
              scale: card3Scale,
              zIndex: 1,
            }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.avatar} style={{ background: testimonialsData[2].accentColor }}>
                {testimonialsData[2].initials}
              </div>
              <div>
                <h3 className={styles.companyName}>{testimonialsData[2].company}</h3>
                <span className={styles.companyBadge}>{testimonialsData[2].badge}</span>
              </div>
              <div className={styles.stars}>
                {[...Array(testimonialsData[2].rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#FF6A00" color="#FF6A00" />
                ))}
              </div>
            </div>

            <p className={styles.quoteText}>
              &ldquo;They <strong className={styles.highlight}>{testimonialsData[2].highlight}</strong>, with seamless execution and clear communication. A premier digital agency partner.&rdquo;
            </p>

            <div className={styles.authorRow}>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{testimonialsData[2].author}</span>
                <span className={styles.authorRole}>{testimonialsData[2].role}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 (Middle of stack) */}
          <motion.div
            className={`${styles.card} ${styles.card2}`}
            style={{
              y: card2Y,
              rotate: card2Rotate,
              scale: card2Scale,
              opacity: card2Opacity,
              zIndex: 2,
            }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.avatar} style={{ background: testimonialsData[1].accentColor }}>
                {testimonialsData[1].initials}
              </div>
              <div>
                <h3 className={styles.companyName}>{testimonialsData[1].company}</h3>
                <span className={styles.companyBadge}>{testimonialsData[1].badge}</span>
              </div>
              <div className={styles.stars}>
                {[...Array(testimonialsData[1].rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#FF6A00" color="#FF6A00" />
                ))}
              </div>
            </div>

            <p className={styles.quoteText}>
              &ldquo;Transco Digital transformed our digital presence. <strong className={styles.highlight}>{testimonialsData[1].highlight}</strong>&rdquo;
            </p>

            <div className={styles.authorRow}>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{testimonialsData[1].author}</span>
                <span className={styles.authorRole}>{testimonialsData[1].role}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 1 (Top of stack) */}
          <motion.div
            className={`${styles.card} ${styles.card1}`}
            style={{
              y: card1Y,
              rotate: card1Rotate,
              scale: card1Scale,
              opacity: card1Opacity,
              zIndex: 3,
            }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.avatar} style={{ background: testimonialsData[0].accentColor }}>
                {testimonialsData[0].initials}
              </div>
              <div>
                <h3 className={styles.companyName}>{testimonialsData[0].company}</h3>
                <span className={styles.companyBadge}>{testimonialsData[0].badge}</span>
              </div>
              <div className={styles.stars}>
                {[...Array(testimonialsData[0].rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#FF6A00" color="#FF6A00" />
                ))}
              </div>
            </div>

            <p className={styles.quoteText}>
              &ldquo;From start to finish we were <strong className={styles.highlight}>{testimonialsData[0].highlight}</strong> with which Transco delivered our digital growth.&rdquo;
            </p>

            <div className={styles.authorRow}>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{testimonialsData[0].author}</span>
                <span className={styles.authorRole}>{testimonialsData[0].role}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Action Button (Ignite Agency Style) */}
        <div className={styles.bottomBar}>
          <Link href="/case-studies" className={styles.reviewsBtn}>
            <span>Read All Case Studies</span>
            <span className={styles.btnIcon}>
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
