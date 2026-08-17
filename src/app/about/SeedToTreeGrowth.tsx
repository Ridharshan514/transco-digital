'use client';

import { motion } from 'framer-motion';
import styles from './SeedToTreeGrowth.module.css';

interface SeedToTreeGrowthProps {
  currentStage: number; // 0: Seed (2020), 1: Sprout (2022), 2: Branching (2023), 3: Flourishing Tree (Today)
}

export default function SeedToTreeGrowth({ currentStage }: SeedToTreeGrowthProps) {
  // Stage metadata
  const stages = [
    { title: 'The Planted Seed', subtitle: '2020 · Colombo, Sri Lanka', label: 'Sprouting Vision' },
    { title: 'Deep Roots & Global Sprout', subtitle: '2022 · Weathering the Storm', label: 'Resilient Growth' },
    { title: 'Three Vibrant Branches', subtitle: '2023 · Dreaming Big 2.0', label: 'Studio Expansion' },
    { title: 'Flourishing Global Tree', subtitle: 'Today & Beyond · 200+ Brands', label: 'Global Canopy' },
  ];

  return (
    <div className={styles.treeVisualContainer} aria-label="Seed to Tree Growth Animation">
      <div className={styles.visualHeader}>
        <div className={styles.stageIndicator}>
          <span className={styles.stagePulse} />
          <span className={styles.stageName}>{stages[currentStage].title}</span>
        </div>
        <span className={styles.stageSubtitle}>{stages[currentStage].subtitle}</span>
      </div>

      <div className={styles.svgWrapper}>
        <svg
          viewBox="0 0 500 520"
          className={styles.treeSvg}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="seedGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8533" />
              <stop offset="100%" stopColor="#FF6A00" />
            </linearGradient>

            <linearGradient id="trunkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#18181b" />
              <stop offset="60%" stopColor="#27272a" />
              <stop offset="100%" stopColor="#ff6a00" />
            </linearGradient>

            <linearGradient id="branchTikTok" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6A00" />
              <stop offset="100%" stopColor="#FF0055" />
            </linearGradient>

            <linearGradient id="branchYouTube" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>

            <linearGradient id="branchPSC" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>

            <radialGradient id="canopyGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 106, 0, 0.25)" />
              <stop offset="60%" stopColor="rgba(59, 130, 246, 0.12)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
            </radialGradient>

            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ── Ground Horizon & Soil Line ────────────────────────────── */}
          <line
            x1="40"
            y1="440"
            x2="460"
            y2="440"
            stroke="#e4e4e7"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M 120 440 Q 250 448 380 440"
            stroke="#d4d4d8"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* ── Root System (Grows in Stage 1+) ───────────────────────── */}
          {currentStage >= 0 && (
            <g className={styles.rootsGroup}>
              {/* Central Root */}
              <motion.path
                d="M 250 440 Q 250 470 248 495"
                stroke="#ff6a00"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
              {/* Left Root */}
              <motion.path
                d="M 248 450 Q 200 475 160 485"
                stroke="#a1a1aa"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: currentStage >= 1 ? 1 : 0.4 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
              />
              {/* Right Root */}
              <motion.path
                d="M 252 450 Q 300 475 340 485"
                stroke="#a1a1aa"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: currentStage >= 1 ? 1 : 0.4 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
              />
              {/* Deep anchoring roots in stage 2+ */}
              {currentStage >= 1 && (
                <>
                  <motion.path
                    d="M 200 470 Q 140 495 100 505"
                    stroke="#ff6a00"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5 }}
                  />
                  <motion.path
                    d="M 300 470 Q 360 495 400 505"
                    stroke="#ff6a00"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5 }}
                  />
                </>
              )}
            </g>
          )}

          {/* ── STAGE 0: The Glowing Seed (2020) ──────────────────────── */}
          {currentStage === 0 && (
            <g>
              {/* Seed Outer Radiant Glow Pulse */}
              <motion.circle
                cx="250"
                cy="435"
                r="30"
                fill="rgba(255, 106, 0, 0.18)"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              />
              {/* Seed Body */}
              <motion.ellipse
                cx="250"
                cy="435"
                rx="14"
                ry="18"
                fill="url(#seedGlow)"
                filter="url(#glowFilter)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12 }}
              />
              {/* Sprouting Tip */}
              <motion.path
                d="M 250 420 Q 246 395 252 375"
                stroke="#ff6a00"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
              {/* First two tiny cotyledon leaves */}
              <motion.path
                d="M 252 375 Q 235 365 238 355 Q 248 360 252 375"
                fill="#ff6a00"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              />
              <motion.path
                d="M 252 375 Q 268 365 265 355 Q 256 360 252 375"
                fill="#ff6a00"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              />
            </g>
          )}

          {/* ── STAGE 1+: Rising Main Trunk (2022+) ────────────────────── */}
          {currentStage >= 1 && (
            <g>
              {/* Main Trunk */}
              <motion.path
                d="M 244 440 Q 246 340 248 240 Q 250 180 250 150"
                stroke="url(#trunkGrad)"
                strokeWidth={currentStage === 1 ? 12 : currentStage === 2 ? 16 : 20}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Base Flare */}
              <path
                d="M 235 440 Q 250 415 265 440 Z"
                fill="#18181b"
              />
            </g>
          )}

          {/* ── STAGE 1: Resilient Sprout & Lateral Shoots (2022) ──────── */}
          {currentStage === 1 && (
            <g>
              {/* Left Branch */}
              <motion.path
                d="M 248 310 Q 200 270 160 255"
                stroke="#3B82F6"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              />
              {/* Right Branch */}
              <motion.path
                d="M 249 280 Q 300 240 340 230"
                stroke="#3B82F6"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
              />
              {/* Global Crossing Sprout Buds */}
              <motion.circle
                cx="160"
                cy="255"
                r="10"
                fill="#3B82F6"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.circle
                cx="340"
                cy="230"
                r="10"
                fill="#3B82F6"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
              />
              <motion.circle
                cx="250"
                cy="150"
                r="12"
                fill="#FF6A00"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 }}
              />
            </g>
          )}

          {/* ── STAGE 2: Three Specialized Growth Branches (2023) ──────── */}
          {currentStage >= 2 && (
            <g>
              {/* Left Branch: TikTok Makers (#FF6A00) */}
              <motion.path
                d="M 248 270 Q 180 230 110 200 Q 80 185 60 175"
                stroke="url(#branchTikTok)"
                strokeWidth={currentStage === 2 ? 8 : 10}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.3, delay: 0.2 }}
              />
              {/* Right Branch: YouTuber Automation (#3B82F6) */}
              <motion.path
                d="M 250 250 Q 320 200 390 175 Q 420 165 440 155"
                stroke="url(#branchYouTube)"
                strokeWidth={currentStage === 2 ? 8 : 10}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.3, delay: 0.4 }}
              />
              {/* Top Central Branch: PSC (#10B981) */}
              <motion.path
                d="M 250 180 Q 235 120 250 70"
                stroke="url(#branchPSC)"
                strokeWidth={currentStage === 2 ? 8 : 10}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.3, delay: 0.6 }}
              />

              {/* Branch Studio Badges */}
              <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <circle cx="60" cy="175" r="16" fill="#FF6A00" filter="url(#glowFilter)" />
                <text x="60" y="179" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">TT</text>
              </motion.g>

              <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <circle cx="440" cy="155" r="16" fill="#3B82F6" filter="url(#glowFilter)" />
                <text x="440" y="159" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">YT</text>
              </motion.g>

              <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <circle cx="250" cy="70" r="16" fill="#10B981" filter="url(#glowFilter)" />
                <text x="250" y="74" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">PSC</text>
              </motion.g>
            </g>
          )}

          {/* ── STAGE 3: Full Blossoming Global Canopy (Today) ─────────── */}
          {currentStage === 3 && (
            <g className={styles.flourishingCanopy}>
              {/* Background Canopy Atmosphere Glow */}
              <circle cx="250" cy="160" r="190" fill="url(#canopyGlow)" />

              {/* Sub-branch Network connecting to global leaves */}
              <motion.path
                d="M 110 200 Q 80 120 120 90 Q 180 70 210 100"
                stroke="#FF8533"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
              <motion.path
                d="M 390 175 Q 420 110 380 75 Q 320 60 290 90"
                stroke="#60A5FA"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.7 }}
              />
              <motion.path
                d="M 250 100 Q 200 40 250 25 Q 300 40 250 70"
                stroke="#34D399"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.9 }}
              />

              {/* Glowing Fruit Nodes (200+ Clients / 600+ Campaigns) */}
              {[
                { cx: 120, cy: 90, col: '#FF6A00', label: 'UK' },
                { cx: 180, cy: 60, col: '#FF8533', label: 'AUS' },
                { cx: 250, cy: 25, col: '#10B981', label: '200+' },
                { cx: 320, cy: 60, col: '#3B82F6', label: 'UAE' },
                { cx: 380, cy: 75, col: '#60A5FA', label: '600+' },
                { cx: 160, cy: 150, col: '#FF6A00', label: '30K+' },
                { cx: 340, cy: 135, col: '#3B82F6', label: '3M+' },
              ].map((node, i) => (
                <motion.g
                  key={node.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 10, delay: 1 + i * 0.1 }}
                >
                  <circle cx={node.cx} cy={node.cy} r="14" fill={node.col} filter="url(#glowFilter)" />
                  <text
                    x={node.cx}
                    y={node.cy + 4}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="9"
                    fontWeight="800"
                  >
                    {node.label}
                  </text>
                </motion.g>
              ))}

              {/* Floating Leaf Particles */}
              {[
                { cx: 90, cy: 140, r: 5, col: '#10B981' },
                { cx: 210, cy: 40, r: 6, col: '#FF6A00' },
                { cx: 290, cy: 35, r: 5, col: '#3B82F6' },
                { cx: 410, cy: 110, r: 6, col: '#10B981' },
                { cx: 220, cy: 130, r: 4, col: '#FF8533' },
                { cx: 280, cy: 120, r: 5, col: '#60A5FA' },
              ].map((leaf, idx) => (
                <motion.circle
                  key={idx}
                  cx={leaf.cx}
                  cy={leaf.cy}
                  r={leaf.r}
                  fill={leaf.col}
                  animate={{
                    y: [-4, 4, -4],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3 + idx * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </g>
          )}
        </svg>
      </div>

      <div className={styles.growthProgressWrap}>
        <div className={styles.growthTrack}>
          <motion.div
            className={styles.growthFill}
            style={{ width: `${((currentStage + 1) / 4) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className={styles.growthLabels}>
          <span>Stage 01 · Seed</span>
          <span>Stage 02 · Sprout</span>
          <span>Stage 03 · Branches</span>
          <span>Stage 04 · World Tree</span>
        </div>
      </div>
    </div>
  );
}
