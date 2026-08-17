'use client';

/**
 * JourneySection.tsx
 * A compact, creative company timeline.
 *
 * Design: A single self-contained card with a heartbeat-style SVG arc
 * that visually embodies rise → dip → rise again, with 5 milestone dots.
 * CSS animation draws the line on scroll-enter. Simple, premium, small.
 */

import { useEffect, useRef, useState } from 'react';
import styles from './JourneySection.module.css';

const milestones = [
  {
    year: '2020',
    title: 'The Beginning',
    note: 'Founded in Colombo. First multinational & household brand partnerships.',
    color: '#FF6A00',
  },
  {
    year: '2021',
    title: 'Early Traction',
    note: '50+ active clients. Expanded into education & corporate sectors.',
    color: '#FF8533',
  },
  {
    year: '2022',
    title: 'The Crisis',
    note: "Sri Lanka's economic storm hit. Brands stepped back. We chose resilience.",
    color: '#6b7280',
    isDip: true,
  },
  {
    year: '2023',
    title: 'Global Pivot',
    note: 'Expanded to UK, Australia, UAE & Europe. Launched 3 specialized studios.',
    color: '#3B82F6',
  },
  {
    year: 'Today',
    title: 'Dreaming Big 2.0',
    note: '200+ clients, 600+ campaigns, 30K+ leads across 6+ countries.',
    color: '#FF6A00',
    isLast: true,
  },
];

// Heartbeat-style SVG arc — rise→dip→soar
// ViewBox: 0 0 800 140
// The path traces the emotional arc of the company journey
const ARC_PATH =
  'M 30,100 C 80,100 110,40 160,40 C 210,40 220,60 250,80 C 285,105 295,125 340,125 C 385,125 395,35 450,18 C 500,3 540,10 590,10 C 640,10 670,18 770,18';

export default function JourneySection() {
  const pathRef = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Set up the dashoffset on the path upfront
    const path = pathRef.current;
    if (path) {
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Dot positions along the path (pre-calculated for the arc above)
  // x-position spread evenly, y matched to the SVG curve
  const dotPositions = [
    { x: 160, y: 40 },   // 2020 — peak
    { x: 250, y: 80 },   // 2021
    { x: 340, y: 125 },  // 2022 — dip
    { x: 450, y: 18 },   // 2023 — soar
    { x: 680, y: 18 },   // Today — top
  ];

  return (
    <section ref={sectionRef} className={styles.section} id="journey" aria-label="Company Journey">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Journey of Dreaming Big · 2020 – Present</p>
          <h2 className={styles.title}>
            <span className={styles.lightWord}>Rise, dip, pivot,</span>{' '}
            <span className={styles.boldWord}>breakthrough.</span>
          </h2>
        </div>

        {/* The Arc Card */}
        <div className={styles.arcCard}>
          {/* SVG Arc — the entire story in one visual */}
          <div className={styles.svgWrapper}>
            <svg
              viewBox="0 0 800 140"
              className={styles.svg}
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"   stopColor="#FF6A00" />
                  <stop offset="42%"  stopColor="#6b7280" />
                  <stop offset="55%"  stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#FFD166" />
                </linearGradient>
                <filter id="arcGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Ghost track — always visible, anchors layout */}
              <path
                d={ARC_PATH}
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Animated foreground arc */}
              <path
                ref={pathRef}
                d={ARC_PATH}
                stroke="url(#arcGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#arcGlow)"
                className={`${styles.arcPath} ${isVisible ? styles.arcPathVisible : ''}`}
              />

              {/* Crisis dip annotation */}
              <text x="320" y="144" textAnchor="middle" className={styles.svgAnnotation}>
                ↓ 2022 crisis
              </text>

              {/* Milestone dots */}
              {dotPositions.map((pos, i) => (
                <g
                  key={i}
                  className={styles.dotGroup}
                  onMouseEnter={() => setActiveIdx(i)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="10"
                    fill="transparent"
                    stroke="transparent"
                    style={{ cursor: 'pointer' }}
                  />
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={activeIdx === i ? 6 : 4.5}
                    fill={milestones[i]?.color ?? '#FF6A00'}
                    stroke="#0a0a0f"
                    strokeWidth="2"
                    style={{ transition: 'r 0.2s ease' }}
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* Milestone Row — 5 columns under the arc */}
          <div className={styles.milestoneRow}>
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`${styles.milestone} ${activeIdx === i ? styles.milestoneHovered : ''} ${m.isDip ? styles.milestoneDip : ''}`}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                <span className={styles.milestoneYear} style={{ color: m.color }}>
                  {m.year}
                </span>
                <span className={styles.milestoneTitle}>{m.title}</span>
                <p className={styles.milestoneNote}>{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
