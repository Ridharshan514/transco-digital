'use client';

/**
 * LeadershipSection.tsx
 *
 * Design concept: A large asymmetric spotlight layout.
 * Left side: a tall featured photo that fills vertical space with name/role overlaid.
 * Right side: compact name-card grid of the remaining team members.
 * Clicking any grid card makes them the featured spotlight on the left.
 *
 * Photos sourced directly from transcodigital.com/about-us/
 */

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Globe } from 'lucide-react';
import styles from './LeadershipSection.module.css';

const team = [
  {
    id: 'dineth',
    name: 'Dineth Silva',
    role: 'Director / CEO',
    dept: 'Executive Leadership',
    photo: 'https://transcodigital.com/wp-content/uploads/2023/12/dineth.jpg',
    color: '#FF6A00',
    bio: 'Driving Transco Digital\'s global vision, Dineth leads the agency\'s expansion into UK, Australia, UAE and beyond — turning ambitious ideas into measurable market outcomes.',
    focus: ['Global Expansion', 'Business Strategy', 'Client Relations'],
  },
  {
    id: 'charitha',
    name: 'Charitha Perera',
    role: 'Director',
    dept: 'Executive Board',
    photo: 'https://transcodigital.com/wp-content/uploads/2024/01/charitha-perera.jpg',
    color: '#3B82F6',
    bio: 'Guiding institutional strategy, corporate governance, and forging enterprise partnerships that anchor the Transco Digital network\'s long-term growth.',
    focus: ['Corporate Strategy', 'Governance', 'Partnerships'],
  },
  {
    id: 'maas',
    name: 'Maas Shamil',
    role: 'Chief Operating Officer',
    dept: 'Operations',
    photo: 'https://transcodigital.com/wp-content/uploads/2023/12/maas.jpg',
    color: '#10B981',
    bio: "Orchestrating the operational engine that powers 600+ campaigns — building scalable delivery systems and cross-studio workflows that keep Transco Digital consistently performing.",
    focus: ['Operations', 'Delivery Systems', 'Studio Workflows'],
  },
  {
    id: 'maduranga',
    name: 'Srinath Maduranga',
    role: 'Head of Creative',
    dept: 'Creative Studio',
    photo: 'https://transcodigital.com/wp-content/uploads/2023/12/maduranga.jpg',
    color: '#F59E0B',
    bio: "Architecting the creative vision across all three studios — from brand identity systems to viral short-form scripts — ensuring every output reflects premium craft.",
    focus: ['Creative Direction', 'Brand Identity', 'Content Strategy'],
  },
  {
    id: 'ashen',
    name: 'Ashen Hettiarachchi',
    role: 'Manager – Creative',
    dept: 'Creative Studio',
    photo: 'https://transcodigital.com/wp-content/uploads/2023/12/ashen-1.jpg',
    color: '#8B5CF6',
    bio: "Translating brand narratives into scroll-stopping visual stories — leading the production team across short-form content, editorial design, and motion.",
    focus: ['Production Management', 'Visual Design', 'Motion Content'],
  },
];

export default function LeadershipSection() {
  const [featured, setFeatured] = useState(team[0]);

  return (
    <section className={styles.section} id="leadership" aria-label="Leadership Team">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Executive Management
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className={styles.lightWord}>The leadership behind </span>
            <span className={styles.boldWord}>Transco Digital.</span>
          </motion.h2>
        </div>

        {/* Main Grid: Featured Photo + Team Roster */}
        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* ── Left: Featured Spotlight ── */}
          <div className={styles.featuredCol}>
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                className={styles.featuredCard}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Photo */}
                <div className={styles.featuredImgWrap}>
                  <Image
                    src={featured.photo}
                    alt={featured.name}
                    fill
                    className={styles.featuredImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                  {/* Gradient overlay for text legibility */}
                  <div className={styles.featuredOverlay} />
                </div>

                {/* Dept badge */}
                <span
                  className={styles.featuredDeptBadge}
                  style={{ background: featured.color + '22', color: featured.color, borderColor: featured.color + '44' }}
                >
                  {featured.dept}
                </span>

                {/* Bottom info */}
                <div className={styles.featuredInfo}>
                  <h3 className={styles.featuredName}>{featured.name}</h3>
                  <p className={styles.featuredRole} style={{ color: featured.color }}>
                    {featured.role}
                  </p>
                  <p className={styles.featuredBio}>{featured.bio}</p>

                  {/* Focus tags */}
                  <div className={styles.focusTags}>
                    {featured.focus.map((f) => (
                      <span key={f} className={styles.focusTag}>
                        {f}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact" className={styles.connectBtn} style={{ color: featured.color }}>
                    <span>Connect</span>
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Right: Team Roster ── */}
          <div className={styles.rosterCol}>
            <p className={styles.rosterLabel}>Our Team</p>
            <div className={styles.rosterList}>
              {team.map((member, i) => {
                const isActive = featured.id === member.id;
                return (
                  <motion.button
                    key={member.id}
                    className={`${styles.rosterCard} ${isActive ? styles.rosterCardActive : ''}`}
                    onClick={() => setFeatured(member)}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    style={isActive ? { borderColor: member.color + '55' } : {}}
                  >
                    {/* Avatar photo */}
                    <div
                      className={styles.rosterThumb}
                      style={{ outline: isActive ? `2px solid ${member.color}` : 'none' }}
                    >
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className={styles.rosterThumbImg}
                        sizes="80px"
                        unoptimized
                      />
                    </div>

                    {/* Meta */}
                    <div className={styles.rosterMeta}>
                      <span className={styles.rosterName}>{member.name}</span>
                      <span className={styles.rosterRole} style={{ color: isActive ? member.color : undefined }}>
                        {member.role}
                      </span>
                    </div>

                    {/* Active indicator line */}
                    {isActive && (
                      <motion.div
                        className={styles.activeBar}
                        style={{ background: member.color }}
                        layoutId="activeBar"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* CTA card */}
            <div className={styles.ctaCard}>
              <p className={styles.ctaCardText}>
                Built by people who love the craft.
              </p>
              <Link href="/contact" className={styles.ctaCardBtn}>
                <span>Work With Us</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
