'use client';

/**
 * LeadershipSection.tsx — Minimal, High-Impact Editorial Leadership Showcase
 *
 * Design Concept:
 * - Kinetic Expanding Monograph Pillars (5-Column Interactive Editorial Stage)
 * - Minimal, punchy, confident typography (No walls of text)
 * - High-fashion portrait cards with smooth hover expansion & monochrome-to-warmth reveal
 * - Real photography sourced from transcodigital.com/about-us/
 */

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './LeadershipSection.module.css';

const leaders = [
  {
    id: 'dineth',
    name: 'Dineth Silva',
    role: 'Director / CEO',
    focus: 'Global Vision & Expansion',
    tagline: 'Leading Transco’s expansion across UK, Australia, UAE & Asia.',
    photo: 'https://transcodigital.com/wp-content/uploads/2023/12/dineth.jpg',
    index: '01',
  },
  {
    id: 'charitha',
    name: 'Charitha Perera',
    role: 'Director',
    focus: 'Corporate Strategy & Governance',
    tagline: 'Anchoring long-term institutional growth and global alliances.',
    photo: 'https://transcodigital.com/wp-content/uploads/2024/01/charitha-perera.jpg',
    index: '02',
  },
  {
    id: 'maas',
    name: 'Maas Shamil',
    role: 'Chief Operating Officer',
    focus: 'Operations & Execution',
    tagline: 'Orchestrating the delivery engine behind 600+ campaigns.',
    photo: 'https://transcodigital.com/wp-content/uploads/2023/12/maas.jpg',
    index: '03',
  },
  {
    id: 'maduranga',
    name: 'Srinath Maduranga',
    role: 'Head of Creative',
    focus: 'Brand Systems & Visual Craft',
    tagline: 'Setting creative standards and viral hook architecture.',
    photo: 'https://transcodigital.com/wp-content/uploads/2023/12/maduranga.jpg',
    index: '04',
  },
  {
    id: 'ashen',
    name: 'Ashen Hettiarachchi',
    role: 'Manager – Creative',
    focus: 'Motion & Short-Form Studio',
    tagline: 'Translating brand narratives into high-retention video.',
    photo: 'https://transcodigital.com/wp-content/uploads/2023/12/ashen-1.jpg',
    index: '05',
  },
];

export default function LeadershipSection() {
  const [activeId, setActiveId] = useState<string>('dineth');

  return (
    <section className={styles.section} id="leadership" aria-label="Leadership Team">
      <div className="container">
        {/* Minimal Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>Executive Leadership</span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.lightWord}>The minds behind </span>
            <span className={styles.boldWord}>Transco Digital.</span>
          </h2>
        </div>

        {/* ── Expanding Editorial Pillars ── */}
        <div className={styles.pillarsTrack}>
          {leaders.map((leader) => {
            const isActive = activeId === leader.id;
            return (
              <motion.div
                key={leader.id}
                className={`${styles.pillar} ${isActive ? styles.pillarActive : ''}`}
                onMouseEnter={() => setActiveId(leader.id)}
                onClick={() => setActiveId(leader.id)}
                layout
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* Background Portrait Photo */}
                <div className={styles.photoWrap}>
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    className={styles.portraitPhoto}
                    sizes="(max-width: 900px) 100vw, 400px"
                    priority
                    unoptimized
                  />
                  <div className={styles.photoGradient} />
                </div>

                {/* Top Index */}
                <div className={styles.topBar}>
                  <span className={styles.indexTag}>{leader.index}</span>
                </div>

                {/* Vertical Name (Idle State) */}
                <div className={styles.verticalMeta}>
                  <span className={styles.vName}>{leader.name}</span>
                  <span className={styles.vRole}>{leader.role}</span>
                </div>

                {/* Expanded Content (Hover / Active State) */}
                <div className={styles.expandedMeta}>
                  <span className={styles.focusBadge}>{leader.focus}</span>
                  <h3 className={styles.leaderName}>{leader.name}</h3>
                  <p className={styles.leaderRole}>{leader.role}</p>
                  <p className={styles.leaderTagline}>{leader.tagline}</p>

                  <div className={styles.bottomLink}>
                    <Link href="/contact" className={styles.connectBtn}>
                      <span>Connect with Leadership</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Bottom Active Glow Accent Bar */}
                <div className={styles.bottomAccent} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
