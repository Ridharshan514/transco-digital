'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe2, ShieldCheck, Zap, Target, Users, Award } from 'lucide-react';
import styles from './about.module.css';

const milestones = [
  { year: '2020', title: 'Founded in Sri Lanka', desc: 'Established Transco Digital with a mission to bridge high-end creative direction with performance digital marketing.' },
  { year: '2021', title: 'First 50 Clients & SLIM Partnership', desc: 'Scaled across corporate, e-commerce, and education sectors, establishing agency performance benchmarks.' },
  { year: '2022', title: 'Launch of YouTubeR & PSC', desc: 'Pioneered specialized sub-studios for YouTube channel growth and short-form Premium Social Content.' },
  { year: '2024', title: '200+ Global Clients Milestone', desc: 'Expanded client footprint across Australia, UK, UAE, and Southeast Asia.' },
  { year: '2026', title: 'Enterprise Digital Network', desc: 'Operating full-stack digital consultation, AI-assisted video production, and multi-channel paid growth.' },
];

const values = [
  { icon: Target, title: 'Strategy First', desc: 'We never produce content or run ads without a proven positioning hypothesis and audience research.' },
  { icon: Zap, title: 'Speed & Execution', desc: 'Agile production cycles that deliver broadcast-quality assets without corporate bureaucracy.' },
  { icon: ShieldCheck, title: 'Measurable Accountability', desc: 'Clear KPI reporting, ROAS tracking, and transparent client communication on every campaign.' },
];

const team = [
  { name: 'Kushan De Silva', role: 'Executive Board Member', bio: 'Institutional strategy & regional expansion leader.' },
  { name: 'Dan Co-Director', role: 'Head of Content & YouTubeR', bio: 'Scaled channels to millions of organic views.' },
  { name: 'Creative Strategy Lead', role: 'Branding & PSC Studio', bio: 'Architecting visual identities & viral creative frameworks.' },
  { name: 'Performance Director', role: 'Paid Media & Analytics', bio: 'Managing high-ROAS multi-channel media budgets.' },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>Company Profile & Philosophy</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="headline-light">We build digital presence with</span>
            <span className="headline-bold">restraint, speed, and precision.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Founded in Sri Lanka in 2020, Transco Digital is an international agency network engineered for brands that demand Silicon Valley-tier execution and real commercial impact.
          </motion.p>
        </div>
      </section>

      {/* Origin Story */}
      <section className={`${styles.originSection} section`}>
        <div className="container">
          <div className={styles.originGrid}>
            <motion.div
              className={styles.originText}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="eyebrow">Our Story</p>
              <h2>From Colombo to a Global Agency Network.</h2>
              <p>
                Transco Digital began with a clear realization: traditional advertising agencies were too slow, while budget freelancers lacked strategic cohesion. Brands needed a modern product team approach to marketing.
              </p>
              <p>
                We built Transco Digital as a full-service agency network, combining strategic consultation, high-production video studios, and performance media under one roof. Today we power over 200+ clients across 6 countries.
              </p>
              <div className={styles.statsRow}>
                <div>
                  <span className={styles.statNum}>2020</span>
                  <span className={styles.statLabel}>Founded</span>
                </div>
                <div>
                  <span className={styles.statNum}>200+</span>
                  <span className={styles.statLabel}>Global Clients</span>
                </div>
                <div>
                  <span className={styles.statNum}>3M+</span>
                  <span className={styles.statLabel}>Views Delivered</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.originImageWrap}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/about-hero.jpg"
                alt="Transco Digital Headquarters Workspace"
                fill
                className={styles.originImage}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`${styles.valuesSection} section`}>
        <div className="container">
          <p className="eyebrow">Core Principles</p>
          <h2 className={styles.sectionTitle}>What drives our work.</h2>

          <div className={styles.valuesGrid}>
            {values.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className={styles.valueIcon}>
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`${styles.timelineSection} section`}>
        <div className="container">
          <p className="eyebrow">Milestones</p>
          <h2 className={styles.sectionTitle}>Six years of momentum.</h2>

          <div className={styles.timelineList}>
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className={styles.timelineYear}>{m.year}</div>
                <div className={styles.timelineContent}>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`${styles.teamSection} section`}>
        <div className="container">
          <p className="eyebrow">Leadership</p>
          <h2 className={styles.sectionTitle}>Engineers, strategists & creators.</h2>

          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className={styles.avatarPlaceholder}>
                  <span>{member.name.charAt(0)}</span>
                </div>
                <h3>{member.name}</h3>
                <span className={styles.teamRole}>{member.role}</span>
                <p>{member.bio}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.ctaWrap}>
            <Link href="/contact" className={styles.primaryCta}>
              Work with Transco Digital
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
