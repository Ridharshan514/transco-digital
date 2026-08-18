'use client';

/**
 * Navbar.tsx — Creative Floating Island Navigation & Mobile App Bottom Nav Dock
 * Features:
 * 1. Bold company brand identity
 * 2. Sliding Pill Glider (`layoutId="navGlider"`) for desktop
 * 3. Mobile Top Floating Island Header
 * 4. Mobile Bottom App Dock Navigation Bar with Agency Icons
 * 5. Glassmorphism backdrop with specular border shine
 */

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Menu,
  X,
  Home,
  Globe2,
  Layers,
  TrendingUp,
  PhoneCall,
} from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
];

const mobileBottomNavItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/about', icon: Globe2 },
  { label: 'Services', href: '/services', icon: Layers },
  { label: 'Case Studies', href: '/case-studies', icon: TrendingUp },
  { label: 'Contact', href: '/contact', icon: PhoneCall },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLogoClick = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('transco-logo-click'));
    }
  };

  return (
    <>
      {/* ── Desktop & Mobile Top Floating Island Header ──────────────── */}
      <motion.header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className={styles.nav} aria-label="Main Navigation">
          {/* Left: Bold Clear Company Brand Logo */}
          <Link
            href="/"
            className={styles.logo}
            aria-label="Transco Digital — Home"
            onClick={handleLogoClick}
          >
            <span className={styles.logoMark}>
              <span className={styles.logoMarkText}>TD</span>
              <span className={styles.logoMarkGlow} />
            </span>
            <span className={styles.logoText}>
              Transco <span className={styles.logoHighlight}>Digital</span>
            </span>
          </Link>

          {/* Center: Interactive Sliding Nav Links with Magnetic Glider (Desktop Only) */}
          <ul
            className={styles.navLinks}
            role="list"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {navLinks.map(({ label, href }, idx) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
              const isHovered = hoveredIdx === idx;

              return (
                <li key={label} className={styles.navItem}>
                  <Link
                    href={href}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    onMouseEnter={() => setHoveredIdx(idx)}
                  >
                    {/* Magnetic Glider Pill */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavGlider"
                        className={styles.activeGlider}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    {isHovered && !isActive && (
                      <motion.span
                        layoutId="hoverNavGlider"
                        className={styles.hoverGlider}
                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      />
                    )}

                    <span className={styles.navLinkLabel}>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right: Quick Action CTAs */}
          <div className={styles.navActions}>
            <Link
              href="/contact"
              className={styles.scheduleBtn}
              id="nav-cta"
            >
              <span className={styles.btnText}>Schedule a Call</span>
              <span className={styles.btnIconWrap}>
                <ArrowUpRight size={14} className={styles.arrowIcon} strokeWidth={2.5} />
              </span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className={styles.mobileMenuBtn}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Fullscreen Flyout Drawer ─────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              className={styles.mobileDrawer}
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.drawerHeader}>
                <span className={styles.drawerLogoText}>
                  Transco <span className={styles.logoHighlight}>Digital</span>
                </span>
              </div>

              <ul className={styles.drawerLinksList} role="list">
                {navLinks.map(({ label, href }, i) => {
                  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
                  return (
                    <motion.li
                      key={label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        href={href}
                        className={`${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className={styles.drawerIndex}>0{i + 1}</span>
                        <span className={styles.drawerText}>{label}</span>
                        <ArrowUpRight size={16} className={styles.drawerArrow} />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className={styles.drawerFooter}>
                <Link
                  href="/contact"
                  className={styles.drawerCtaBtn}
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Schedule a Strategic Call</span>
                  <ArrowUpRight size={16} />
                </Link>
                <p className={styles.drawerOfficeNote}>
                  International Digital Marketing Agency Network
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile App Bottom Navigation Dock (Shown ONLY on Mobile) ── */}
      <nav className={styles.mobileBottomNav} aria-label="Mobile Navigation Dock">
        {mobileBottomNavItems.map(({ label, href, icon: Icon }) => {
          const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
          return (
            <Link
              key={label}
              href={href}
              className={`${styles.mobileBottomItem} ${isActive ? styles.mobileBottomItemActive : ''}`}
            >
              <div className={styles.mobileBottomIconWrap}>
                <Icon
                  size={19}
                  strokeWidth={isActive ? 2.3 : 1.75}
                  color={isActive ? '#FF6A00' : '#71717a'}
                />
                {isActive && <span className={styles.activeGlowDot} />}
              </div>
              <span className={styles.mobileBottomLabel}>{label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
