'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    quote:
      '"Working with Transco Digital has been transformational for Bankhill Educare. Their strategic approach to our digital presence completely changed how we reach students and parents. The results have been outstanding."',
    name: 'Kushan De Silva',
    title: 'Director',
    company: 'Bankhill Educare',
    initials: 'KD',
  },
  {
    id: 2,
    quote:
      '"The team at Transco Digital understood exactly what we needed for Kinetic Cycle Coaching. Over 1.7 million views and 20,000 new subscribers in a single year — these numbers speak louder than any testimonial."',
    name: 'Scott Maclean',
    title: 'Founder & Head Coach',
    company: 'Kinetic Cycle Coaching',
    initials: 'SM',
  },
  {
    id: 3,
    quote:
      '"Transco Digital brought genuine expertise and a creative energy that elevated our brand presence significantly. A professional, results-focused team that delivers on every commitment."',
    name: 'Chamindu Kalansooriya',
    title: 'Director',
    company: 'Welkin Constructions',
    initials: 'CK',
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function Testimonials() {
  const [[index, direction], setSlide] = useState([0, 0]);
  const ref = useRef<HTMLDivElement>(null);

  const paginate = (dir: number) => {
    setSlide(([i]) => {
      const next = (i + dir + testimonials.length) % testimonials.length;
      return [next, dir];
    });
  };

  const current = testimonials[index];

  return (
    <section className={`${styles.section} section`} id="testimonials" aria-label="Client Testimonials">
      <div className="container">
        <motion.div
          className={styles.header}
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">What Clients Say</p>
          <h2 className={styles.headline}>
            <span className="headline-light">Trusted by brands</span>
            <span className="headline-bold">worldwide.</span>
          </h2>
        </motion.div>

        <div className={styles.carouselWrap}>
          <div className={styles.quoteIcon}>
            <Quote size={32} strokeWidth={1} />
          </div>

          {/* Quote */}
          <div className={styles.quoteArea} aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={index}
                className={styles.quote}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {current.quote}
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Author + Controls */}
          <div className={styles.footer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${index}`}
                className={styles.author}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.avatar} aria-label={current.name}>
                  {current.initials}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{current.name}</span>
                  <span className={styles.authorTitle}>
                    {current.title} · {current.company}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className={styles.controls}>
              {/* Dots */}
              <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                    onClick={() => setSlide([i, i > index ? 1 : -1])}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Testimonial ${i + 1} from ${t.name}`}
                  />
                ))}
              </div>

              {/* Prev / Next */}
              <div className={styles.arrows}>
                <button
                  className={styles.arrowBtn}
                  onClick={() => paginate(-1)}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} strokeWidth={2} />
                </button>
                <button
                  className={styles.arrowBtn}
                  onClick={() => paginate(1)}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
