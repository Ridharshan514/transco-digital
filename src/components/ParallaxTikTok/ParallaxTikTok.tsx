'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ParallaxTikTok.module.css';

export default function ParallaxTikTok() {
  // Track window scroll across the main page
  const { scrollYProgress } = useScroll();

  // Scroll visibility range: active between ~15% and ~75% of page scroll (Expertise -> Brands -> TrackRecord)
  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.18, 0.65, 0.78],
    [0, 0.45, 0.45, 0]
  );

  // Smooth rotational and vertical drift as you scroll
  const rotate = useTransform(scrollYProgress, [0.15, 0.75], [-18, 24]);
  const y = useTransform(scrollYProgress, [0.15, 0.75], [-60, 80]);
  const scale = useTransform(scrollYProgress, [0.15, 0.45, 0.75], [0.9, 1.08, 0.95]);

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <motion.div
        className={styles.parallaxContainer}
        style={{ opacity, rotate, y, scale }}
      >
        {/* Ambient Neon Chromatic Glow */}
        <div className={styles.tiktokGlow} />

        {/* Chromatic TikTok Logo Mark */}
        <svg
          className={styles.tiktokSvg}
          viewBox="0 0 448 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cyan Layer Offset */}
          <path
            d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V258.2a92.51 92.51 0 1 0 57.76 86.19V0h69.47a139.73 139.73 0 0 0 135.77 135.77v74.14z"
            fill="#00F2FE"
            className={styles.layerCyan}
          />
          {/* Magenta Layer Offset */}
          <path
            d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V258.2a92.51 92.51 0 1 0 57.76 86.19V0h69.47a139.73 139.73 0 0 0 135.77 135.77v74.14z"
            fill="#FE2C55"
            className={styles.layerMagenta}
          />
          {/* Dark Charcoal Core */}
          <path
            d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V258.2a92.51 92.51 0 1 0 57.76 86.19V0h69.47a139.73 139.73 0 0 0 135.77 135.77v74.14z"
            fill="#111113"
            className={styles.layerMain}
          />
        </svg>
      </motion.div>
    </div>
  );
}
