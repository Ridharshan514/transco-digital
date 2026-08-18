'use client';

/**
 * ParallaxSocials.tsx — Black & White Monochrome Floating 3D Logos
 *
 * All social marks styled in a pure, high-contrast Swiss Monochrome palette:
 * - TikTok (Layered Obsidian & Charcoal chromatic offset)
 * - Instagram (Crisp Obsidian Camera Glyph)
 * - YouTube (Obsidian 3D Play with White Core)
 * - Meta (Deep Obsidian Infinity Loop)
 */

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styles from './ParallaxSocials.module.css';

export default function ParallaxSocials() {
  const { scrollYProgress } = useScroll();

  // Spring smoothing for butter-soft scroll responsiveness
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.8,
  });

  // ── 1. Meta / FB (Top-Left: top ~10vh) ──
  const metaY = useTransform(smoothProgress, [0, 1], [0, 180]);
  const metaRotate = useTransform(smoothProgress, [0, 1], [-8, 14]);

  // ── 2. TikTok (Top-Right: top ~18vh) ──
  const tiktokY = useTransform(smoothProgress, [0, 1], [0, 220]);
  const tiktokRotate = useTransform(smoothProgress, [0, 1], [-12, 18]);

  // ── 3. Instagram (Mid-Left: top ~54vh) ──
  const instaY = useTransform(smoothProgress, [0, 1], [0, 200]);
  const instaRotate = useTransform(smoothProgress, [0, 1], [10, -14]);

  // ── 4. YouTube (Lower-Right: top ~72vh) ──
  const ytY = useTransform(smoothProgress, [0, 1], [0, 190]);
  const ytRotate = useTransform(smoothProgress, [0, 1], [-6, 16]);

  return (
    <div className={styles.wrapper} aria-hidden="true">
      {/* ── 1. Meta / Facebook (Top Left — Monochrome) ── */}
      <motion.div
        className={`${styles.floatingItem} ${styles.posMeta}`}
        style={{ y: metaY, rotate: metaRotate }}
        animate={{
          y: [0, -10, 0],
          rotate: [-4, 2, -4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className={styles.ambientGlowMono} />
        <svg className={styles.logoSvg} viewBox="0 0 24 24" fill="none">
          <path
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            fill="#18181B"
          />
        </svg>
      </motion.div>

      {/* ── 2. TikTok 3D (Top Right — Monochrome) ── */}
      <motion.div
        className={`${styles.floatingItem} ${styles.posTikTok}`}
        style={{ y: tiktokY, rotate: tiktokRotate }}
        animate={{
          y: [0, -14, 0],
          rotate: [-8, 4, -8],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <div className={styles.ambientGlowMono} />
        <svg className={styles.logoSvg} viewBox="0 0 448 512" fill="none">
          {/* Subtle Silver Offset */}
          <path
            d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V258.2a92.51 92.51 0 1 0 57.76 86.19V0h69.47a139.73 139.73 0 0 0 135.77 135.77v74.14z"
            fill="#A1A1AA"
            className={styles.layerSilver}
          />
          {/* Dark Charcoal Offset */}
          <path
            d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V258.2a92.51 92.51 0 1 0 57.76 86.19V0h69.47a139.73 139.73 0 0 0 135.77 135.77v74.14z"
            fill="#3F3F46"
            className={styles.layerCharcoal}
          />
          {/* Obsidian Core */}
          <path
            d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V258.2a92.51 92.51 0 1 0 57.76 86.19V0h69.47a139.73 139.73 0 0 0 135.77 135.77v74.14z"
            fill="#18181B"
            className={styles.layerMain}
          />
        </svg>
      </motion.div>

      {/* ── 3. Instagram Camera (Mid Left — Monochrome) ── */}
      <motion.div
        className={`${styles.floatingItem} ${styles.posInstagram}`}
        style={{ y: instaY, rotate: instaRotate }}
        animate={{
          y: [0, -12, 0],
          rotate: [6, -4, 6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <div className={styles.ambientGlowMono} />
        <svg className={styles.logoSvg} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="#18181B" strokeWidth="2.2" />
          <circle cx="12" cy="12" r="4.2" stroke="#18181B" strokeWidth="2.2" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="#18181B" />
        </svg>
      </motion.div>

      {/* ── 4. YouTube Play (Lower Right — Monochrome) ── */}
      <motion.div
        className={`${styles.floatingItem} ${styles.posYouTube}`}
        style={{ y: ytY, rotate: ytRotate }}
        animate={{
          y: [0, -10, 0],
          rotate: [-4, 6, -4],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      >
        <div className={styles.ambientGlowMono} />
        <svg className={styles.logoSvg} viewBox="0 0 24 24" fill="none">
          <path
            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
            fill="#18181B"
          />
          <polygon points="9.545 15.568 9.545 8.432 15.818 12" fill="#ffffff" />
        </svg>
      </motion.div>
    </div>
  );
}
