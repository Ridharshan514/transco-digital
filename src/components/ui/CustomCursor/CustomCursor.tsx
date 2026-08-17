'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './CustomCursor.module.css';

export const CustomCursor: React.FC<{ isIdleTrailActive?: boolean }> = ({
  isIdleTrailActive = false,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const trailDotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    setIsVisible(true);

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;

    const trailHistory: { x: number; y: number }[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check hover targets
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor]');
        if (interactiveEl) {
          setIsHovered(true);
          const cursorAttr = interactiveEl.getAttribute('data-cursor');
          setHoverText(cursorAttr || '');
        } else {
          setIsHovered(false);
          setHoverText('');
        }
      }
    };

    let animationFrameId: number;

    const animate = () => {
      // Lerp for outer ring
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }

      if (isIdleTrailActive) {
        trailHistory.unshift({ x: mouseX, y: mouseY });
        if (trailHistory.length > 8) trailHistory.pop();

        trailDotsRef.current.forEach((dot, index) => {
          if (dot && trailHistory[index]) {
            const pos = trailHistory[index];
            const opacity = 1 - index / 8;
            const scale = 1 - index * 0.1;
            dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${scale})`;
            dot.style.opacity = opacity.toString();
          }
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isIdleTrailActive]);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`${styles.cursorDot} ${isHovered ? styles.cursorDotHover : ''}`}
      />
      <div
        ref={cursorRef}
        className={`${styles.cursorRing} ${isHovered ? styles.cursorRingHover : ''}`}
      >
        {hoverText && <span className={styles.cursorText}>{hoverText}</span>}
      </div>

      {isIdleTrailActive &&
        Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) trailDotsRef.current[i] = el;
            }}
            className={styles.trailDot}
          />
        ))}
    </>
  );
};
