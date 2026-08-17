'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useToast } from '../Toast/Toast';
import { CustomCursor } from '../CustomCursor/CustomCursor';
import { Modal } from '../Modal/Modal';
import { Sparkles, Terminal, Code, Heart, Award, Video, Volume2, VolumeX } from 'lucide-react';
import styles from './EasterEggEngine.module.css';

export const EasterEggEngine: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { showToast } = useToast();
  const [activeModal, setActiveModal] = useState<'behindTheBuild' | 'foundersNote' | 'secretVideo' | null>(null);
  const [isSecretMode, setIsSecretMode] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const keySequenceRef = useRef<string[]>([]);
  const logoClickCountRef = useRef(0);
  const logoClickTimerRef = useRef<NodeJS.Timeout | null>(null);
  const clickedLettersRef = useRef<Set<string>>(new Set());
  const videoRef = useRef<HTMLVideoElement>(null);

  // 1. Keyboard Sequences (Konami Code, "transco", "video", "cinema", "secret", "reel")
  useEffect(() => {
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore inputs in text fields
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      keySequenceRef.current.push(e.key.length === 1 ? e.key.toLowerCase() : e.key);
      if (keySequenceRef.current.length > 20) {
        keySequenceRef.current.shift();
      }

      const recentKeys = keySequenceRef.current.join('');

      // Check Konami Code
      if (recentKeys.endsWith(konamiCode.map((k) => (k.length === 1 ? k : k)).join(''))) {
        setIsSecretMode(true);
        showToast({
          title: '🎮 KONAMI CODE DETECTED!',
          description: 'Secret Mode Enabled: High-energy Amber Cyber Protocol engaged.',
          type: 'easter-egg',
        });
        setTimeout(() => setIsSecretMode(false), 6000);
        keySequenceRef.current = [];
      }

      // Check "video", "cinema", "reel", or "secret" string
      if (
        recentKeys.endsWith('video') ||
        recentKeys.endsWith('cinema') ||
        recentKeys.endsWith('reel') ||
        recentKeys.endsWith('secret')
      ) {
        setActiveModal('secretVideo');
        showToast({
          title: '🎬 Secret Cinema Reel Unlocked!',
          description: 'You typed the secret video code! Enjoy the Transco Digital Cinema Reel.',
          type: 'easter-egg',
        });
        keySequenceRef.current = [];
      }

      // Check "transco" string
      if (recentKeys.endsWith('transco')) {
        showToast({
          title: '⚡ "TRANSCO" Code Typed!',
          description: 'Hello curious explorer. We see you paying attention to details.',
          type: 'easter-egg',
        });
        keySequenceRef.current = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showToast]);

  // 2. Custom Event Listeners (Logo 5x Click & Footer Letters)
  useEffect(() => {
    const handleLogoClick = () => {
      logoClickCountRef.current += 1;
      if (logoClickTimerRef.current) clearTimeout(logoClickTimerRef.current);

      if (logoClickCountRef.current >= 5) {
        logoClickCountRef.current = 0;
        setActiveModal('behindTheBuild');
        showToast({
          title: '🏆 Secret Unlocked!',
          description: 'You discovered the Behind the Build panel.',
          type: 'easter-egg',
        });
      } else {
        logoClickTimerRef.current = setTimeout(() => {
          logoClickCountRef.current = 0;
        }, 2000);
      }
    };

    const handleFooterLetterClick = (e: Event) => {
      const customEvent = e as CustomEvent<{ letter: string }>;
      if (customEvent.detail?.letter) {
        clickedLettersRef.current.add(customEvent.detail.letter.toUpperCase());
        if (clickedLettersRef.current.size >= 7) {
          // T-R-A-N-S-C-O all clicked
          setActiveModal('foundersNote');
          showToast({
            title: '✨ Wordmark Puzzle Completed!',
            description: 'You clicked all 7 letters of the wordmark!',
            type: 'easter-egg',
          });
          clickedLettersRef.current.clear();
        }
      }
    };

    window.addEventListener('transco-logo-click', handleLogoClick);
    window.addEventListener('transco-footer-letter-click', handleFooterLetterClick);

    return () => {
      window.removeEventListener('transco-logo-click', handleLogoClick);
      window.removeEventListener('transco-footer-letter-click', handleFooterLetterClick);
    };
  }, [showToast]);

  return (
    <div className={isSecretMode ? styles.secretMode : ''}>
      <CustomCursor isIdleTrailActive={false} />
      {children}

      {/* Modal 1: Behind the Build */}
      <Modal
        isOpen={activeModal === 'behindTheBuild'}
        onClose={() => setActiveModal(null)}
        title="Behind the Build — Engineering Specs"
        subtitle="Designed & Engineered for Transco Digital (2026)"
      >
        <div className={styles.modalBody}>
          <div className={styles.specGrid}>
            <div className={styles.specCard}>
              <Code size={20} className={styles.specIcon} />
              <div>
                <strong>Framework</strong>
                <p>Next.js 16 (App Router) + React 19</p>
              </div>
            </div>
            <div className={styles.specCard}>
              <Sparkles size={20} className={styles.specIcon} />
              <div>
                <strong>3D & FX</strong>
                <p>React Three Fiber + R3F Drei + GSAP ScrollTrigger</p>
              </div>
            </div>
            <div className={styles.specCard}>
              <Terminal size={20} className={styles.specIcon} />
              <div>
                <strong>Smooth Motion</strong>
                <p>Lenis Scroll + Framer Motion 13</p>
              </div>
            </div>
            <div className={styles.specCard}>
              <Award size={20} className={styles.specIcon} />
              <div>
                <strong>Aesthetics</strong>
                <p>Silicon Valley MNC White/Dark Amber System</p>
              </div>
            </div>
          </div>
          <p className={styles.note}>
            <Heart size={14} className={styles.heartIcon} /> Crafted with meticulous precision by the Transco Digital creative engineering group.
          </p>
        </div>
      </Modal>

      {/* Modal 2: Founders' Note */}
      <Modal
        isOpen={activeModal === 'foundersNote'}
        onClose={() => setActiveModal(null)}
        title="Founders' Note — Transco Digital"
        subtitle="Founded in Sri Lanka, 2020 · Expanding Worldwide"
      >
        <div className={styles.modalBody}>
          <p>
            When we launched Transco Digital in 2020, our ambition was clear: prove that world-class strategy, high-production creative content, and algorithm-driven digital growth could be built natively in Sri Lanka and scaled to the world.
          </p>
          <p>
            Six years later, having grown over 200+ global clients and generated millions of views across YouTube, TikTok, and Meta, our mission remains unchanged — helping brands move forward with clarity, speed, and distinct visual authority.
          </p>
          <div className={styles.signatureBlock}>
            <div className={styles.sigTitle}>The Transco Digital Executive Team</div>
            <div className={styles.sigSub}>Sri Lanka · Global Agency Network</div>
          </div>
        </div>
      </Modal>

      {/* Modal 3: Secret Video Player */}
      <Modal
        isOpen={activeModal === 'secretVideo'}
        onClose={() => setActiveModal(null)}
        title="🎬 Secret Brand Cinema Reel"
        subtitle="Unlocked by secret keyword trigger ('video' / 'cinema' / 'secret')"
      >
        <div className={styles.videoContainer}>
          <div className={styles.videoWrap}>
            <video
              ref={videoRef}
              className={styles.videoElement}
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              controls
              autoPlay
              muted={isMuted}
              loop
              playsInline
            />
          </div>
          <div className={styles.videoControlsRow}>
            <div className={styles.videoTag}>
              <Video size={16} />
              <span>Transco Digital PSC & Production Studio</span>
            </div>
            <button
              className={styles.soundBtn}
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              <span>{isMuted ? 'Unmute Sound' : 'Mute Sound'}</span>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
