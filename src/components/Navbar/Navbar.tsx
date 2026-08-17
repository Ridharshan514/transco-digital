'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const desktopNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Brands', href: '/brands' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Careers', href: '/careers' },
];

const mobileNavLinks = [
  ...desktopNavLinks,
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  const handleLogoClick = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('transco-logo-click'));
    }
  };

  return (
    <>
      <motion.header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className={styles.nav}>
          {/* Logo */}
          <Link
            href="/"
            className={styles.logo}
            aria-label="Transco Digital — Home"
            onClick={handleLogoClick}
          >
            <span className={styles.logoMark}>TD</span>
            <span className={styles.logoText}>Transco Digital</span>
          </Link>

          {/* Center nav links */}
          <ul className={styles.navLinks} role="list">
            {desktopNavLinks.map(({ label, href }) => {
              const isActive =
                href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <li key={label}>
                  <Link
                    href={href}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right CTA */}
          <div className={styles.navActions}>
            <Link
              href="/contact"
              className={styles.iconBtn}
              aria-label="Contact us"
              title="Contact"
            >
              <ArrowUpRight size={16} strokeWidth={2} />
            </Link>
            <Link href="/contact" className={styles.ctaBtn} id="nav-cta">
              Schedule a Call
            </Link>
            <button
              className={styles.mobileMenuBtn}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        className={styles.mobileMenu}
        initial={false}
        animate={
          mobileOpen
            ? { opacity: 1, y: 0, pointerEvents: 'auto' }
            : { opacity: 0, y: -16, pointerEvents: 'none' }
        }
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={!mobileOpen}
      >
        <ul role="list">
          {mobileNavLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className={styles.mobileCta}
          onClick={() => setMobileOpen(false)}
        >
          Schedule a Call
        </Link>
      </motion.div>
    </>
  );
}
