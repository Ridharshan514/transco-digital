'use client';

/**
 * Testimonials.tsx — Adaptive Client Stories Component
 * Desktop: Scroll-Driven Stacked Card Peel Effect (340vh track)
 * Mobile: Compact 3D Stacked Card Deck with Touch Peeling & Tab Switcher (0 Blank Space)
 */

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    id: 'bankhill',
    company: 'Bankhill Educare',
    shortName: 'Bankhill',
    badge: 'Education Sector',
    rating: 5,
    quote:
      'From start to finish we were blown away by the quality and strategic execution with which Transco Digital delivered our digital growth.',
    highlight: 'blown away by the quality and strategic execution',
    author: 'Kushan De Silva',
    role: 'Managing Director · Bankhill Educare',
    initials: 'KD',
    accentColor: '#FF6A00',
  },
  {
    id: 'kinetic',
    company: 'Kinetic Cycle Coaching',
    shortName: 'Kinetic UK',
    badge: 'Athletic Brand & YouTube',
    rating: 5,
    quote:
      'Transco Digital transformed our digital presence with a strategy that attracts, engages, and converts. Over 1.7M+ views and 20K new subscribers.',
    highlight: 'Over 1.7M+ views and 20K new subscribers in a single year.',
    author: 'Scott Maclean',
    role: 'Head Coach · Kinetic UK',
    initials: 'SM',
    accentColor: '#FF6A00',
  },
  {
    id: 'welkin',
    company: 'Welkin Constructions',
    shortName: 'Welkin',
    badge: 'Commercial Enterprise',
    rating: 5,
    quote:
      'They consistently deliver exactly what we envision, with seamless execution and clear communication. A premier digital agency partner.',
    highlight: 'consistently deliver exactly what we envision',
    author: 'Chamindu Kalansooriya',
    role: 'Managing Director · Welkin',
    initials: 'CK',
    accentColor: '#FF6A00',
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ── Desktop Scroll Tracking ──
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Card transforms for desktop
  const card1Y = useTransform(scrollYProgress, [0, 0.32, 0.46], [0, 0, -580]);
  const card1Rotate = useTransform(scrollYProgress, [0, 0.32, 0.46], [-2, -2, -16]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.38, 0.46], [1, 1, 0]);
  const card1Scale = useTransform(scrollYProgress, [0, 0.32, 0.46], [1, 1, 0.92]);

  const card2Y = useTransform(scrollYProgress, [0, 0.32, 0.42, 0.70, 0.82], [24, 24, 0, 0, -580]);
  const card2Rotate = useTransform(scrollYProgress, [0, 0.32, 0.42, 0.70, 0.82], [3, 3, 0, 0, 16]);
  const card2Scale = useTransform(scrollYProgress, [0, 0.32, 0.42, 0.70, 0.82], [0.94, 0.94, 1, 1, 0.92]);
  const card2Opacity = useTransform(scrollYProgress, [0, 0.74, 0.82], [1, 1, 0]);

  const card3Y = useTransform(scrollYProgress, [0, 0.68, 0.80], [48, 48, 0]);
  const card3Rotate = useTransform(scrollYProgress, [0, 0.68, 0.80], [-4, -4, 0]);
  const card3Scale = useTransform(scrollYProgress, [0, 0.68, 0.80], [0.88, 0.88, 1]);

  const handleNext = () => {
    setActiveMobileIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveMobileIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Background layered cards in mobile 3D stack
  const nextIdx1 = (activeMobileIdx + 1) % testimonialsData.length;
  const nextIdx2 = (activeMobileIdx + 2) % testimonialsData.length;
  const activeTestimonial = testimonialsData[activeMobileIdx];
  const bgCard1 = testimonialsData[nextIdx1];
  const bgCard2 = testimonialsData[nextIdx2];

  return (
    <section
      ref={containerRef}
      className={isMobile ? styles.mobileSection : styles.scrollTrack}
      id="testimonials"
      aria-label="Client Testimonials"
    >
      {/* ── MOBILE VIEW: Compact 3D Stacked Deck with Peeling Exit & Zero Dead Space ── */}
      {isMobile ? (
        <div className={styles.mobileContainer}>
          {/* Header */}
          <div className={styles.header}>
            <p className={styles.eyebrow}>Client Stories</p>
            <h2 className={styles.heading}>
              <span className={styles.lightText}>Trusted by </span>
              <span className={styles.boldText}>ambitious brands.</span>
            </h2>
          </div>

          {/* Client Selector Tabs */}
          <div className={styles.mobileTabsRow}>
            {testimonialsData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveMobileIdx(idx)}
                className={`${styles.mobileTab} ${activeMobileIdx === idx ? styles.mobileTabActive : ''}`}
              >
                <span>{item.shortName}</span>
              </button>
            ))}
          </div>

          {/* Stacked 3D Cards Area */}
          <div className={styles.mobileStackWrapper}>
            {/* Background Layer 2 (Bottom-most in stack) */}
            <div
              className={`${styles.mobileCard} ${styles.mobileCardBg2}`}
              aria-hidden="true"
            >
              <div className={styles.cardHeader}>
                <div className={styles.avatar} style={{ background: '#18181b' }}>
                  {bgCard2.initials}
                </div>
                <div>
                  <h3 className={styles.companyName}>{bgCard2.company}</h3>
                  <span className={styles.companyBadge}>{bgCard2.badge}</span>
                </div>
              </div>
            </div>

            {/* Background Layer 1 (Middle in stack) */}
            <div
              className={`${styles.mobileCard} ${styles.mobileCardBg1}`}
              aria-hidden="true"
            >
              <div className={styles.cardHeader}>
                <div className={styles.avatar} style={{ background: '#18181b' }}>
                  {bgCard1.initials}
                </div>
                <div>
                  <h3 className={styles.companyName}>{bgCard1.company}</h3>
                  <span className={styles.companyBadge}>{bgCard1.badge}</span>
                </div>
              </div>
            </div>

            {/* Active Top Card (Peels away upwards on exit, swipeable) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 20, scale: 0.95, rotate: 2 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                exit={{
                  opacity: 0,
                  y: -180,
                  rotate: -14,
                  scale: 0.9,
                  transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -50) {
                    handleNext();
                  } else if (info.offset.x > 50) {
                    handlePrev();
                  }
                }}
                className={`${styles.mobileCard} ${styles.mobileCardActive}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.avatar} style={{ background: '#18181b' }}>
                    {activeTestimonial.initials}
                  </div>
                  <div>
                    <h3 className={styles.companyName}>{activeTestimonial.company}</h3>
                    <span className={styles.companyBadge}>{activeTestimonial.badge}</span>
                  </div>
                  <div className={styles.stars}>
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#FF6A00" color="#FF6A00" />
                    ))}
                  </div>
                </div>

                <p className={styles.quoteText}>
                  &ldquo;{activeTestimonial.quote.split(activeTestimonial.highlight)[0]}
                  <strong className={styles.highlight}>{activeTestimonial.highlight}</strong>
                  {activeTestimonial.quote.split(activeTestimonial.highlight)[1] || ''}&rdquo;
                </p>

                <div className={styles.authorRow}>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{activeTestimonial.author}</span>
                    <span className={styles.authorRole}>{activeTestimonial.role}</span>
                  </div>

                  <div className={styles.mobileNavArrows}>
                    <button
                      onClick={handlePrev}
                      className={styles.navArrowBtn}
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      className={styles.navArrowBtn}
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Action Button */}
          <div className={styles.bottomBar}>
            <Link href="/case-studies" className={styles.reviewsBtn}>
              <span>Read All Case Studies</span>
              <span className={styles.btnIcon}>
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      ) : (
        /* ── DESKTOP VIEW: Full Scroll-Driven Stacked Card Peel Effect ── */
        <div className={styles.stickyContainer}>
          {/* Giant Watermark */}
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
            <p className={styles.scrollHint}>Scroll down to explore reviews ↓</p>
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
                <div className={styles.avatar} style={{ background: '#18181b' }}>
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
                <div className={styles.avatar} style={{ background: '#18181b' }}>
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
                <div className={styles.avatar} style={{ background: '#18181b' }}>
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

          {/* Bottom Action Button */}
          <div className={styles.bottomBar}>
            <Link href="/case-studies" className={styles.reviewsBtn}>
              <span>Read All Case Studies</span>
              <span className={styles.btnIcon}>
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
