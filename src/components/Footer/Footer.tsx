'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';

// Inline SVG brand icons
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YouTubeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
  </svg>
);

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Digital Consultation', href: '/services' },
  { label: 'Branding & Identity', href: '/services' },
  { label: 'Content Marketing', href: '/services' },
  { label: 'Paid Campaigns', href: '/services' },
  { label: 'YouTubeR Automation', href: '/services' },
];

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://web.facebook.com/transcodigital' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/transco_digital/' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/transco-digital-pvt-ltd/' },
  { icon: YouTubeIcon, label: 'YouTube', href: 'https://www.youtube.com/@transcodigital/videos' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer" aria-label="Transco Digital — Footer">
      {/* ── Cinematic Video Background ── */}
      <div className={styles.videoBackdrop} aria-hidden="true">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.footerVideo}
        />
        <div className={styles.videoOverlay} />
      </div>

      <div className={styles.inner}>
        {/* ── Top section ── */}
        <div className={styles.top}>
          {/* Left: Brand Identity & Newsletter */}
          <div className={styles.topLeft}>
            <div className={styles.logoWrap}>
              <div className={styles.logoMark}>TD</div>
              <span className={styles.logoText}>Transco Digital</span>
            </div>
            <p className={styles.tagline}>
              Powering brands forward through<br />intelligent digital strategy.
            </p>

            {/* Newsletter */}
            <div className={styles.newsletter}>
              <p className={styles.newsletterLabel}>Stay in the loop</p>
              <form
                className={styles.newsletterForm}
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for subscribing to Transco Digital insights!');
                }}
                aria-label="Newsletter signup"
              >
                <div className={styles.inputWrap}>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className={styles.emailInput}
                    id="footer-email"
                    name="email"
                    autoComplete="email"
                    aria-label="Email address"
                    required
                  />
                  <button
                    type="submit"
                    className={styles.sendBtn}
                    aria-label="Subscribe"
                  >
                    <Send size={14} strokeWidth={2} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: 4-Column Structured Link Grid Matching User Reference */}
          <div className={styles.topRightGrid}>
            {/* 1. Navigation */}
            <div className={styles.linkCol}>
              <h3 className={styles.colTitle}>Navigation</h3>
              <ul role="list" className={styles.linksList}>
                {navigationLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className={styles.footerLink}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Services */}
            <div className={styles.linkCol}>
              <h3 className={styles.colTitle}>Services</h3>
              <ul role="list" className={styles.linksList}>
                {serviceLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className={styles.footerLink}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Contact Info */}
            <div className={styles.linkCol}>
              <h3 className={styles.colTitle}>Contact</h3>
              <div className={styles.contactList}>
                <Link href="/contact" className={styles.contactItem}>
                  <Phone size={15} className={styles.contactIcon} />
                  <span>Schedule a Call</span>
                </Link>
                <a href="mailto:info@transcodigital.com" className={styles.contactItem}>
                  <Mail size={15} className={styles.contactIcon} />
                  <span>info@transcodigital.com</span>
                </a>
                <div className={styles.contactItemStatic}>
                  <MapPin size={15} className={styles.contactIcon} />
                  <span>No. 11, Malabe, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* 4. Follow Us */}
            <div className={styles.linkCol}>
              <h3 className={styles.colTitle}>Follow Us</h3>
              <div className={styles.socialIconsGrid}>
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className={styles.socialIconBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Transco Digital on ${label}`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
              <div className={styles.footerCta}>
                <Link href="/contact" className={styles.footerCtaBtn}>
                  <span>Get Started</span>
                  <ArrowRight size={13} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className={styles.divider} />

        {/* ── Oversized 2-Line Stacked Wordmark ── */}
        <div className={styles.wordmarkWrap} aria-hidden="true">
          <div className={styles.wordmark}>
            <div className={styles.wordmarkLine}>
              {'TRANSCO'.split('').map((char, index) => (
                <span
                  key={`transco-${index}`}
                  className={styles.wordmarkLetter}
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(
                        new CustomEvent('transco-footer-letter-click', {
                          detail: { letter: char },
                        })
                      );
                    }
                  }}
                  data-cursor={`Letter ${char}`}
                >
                  {char}
                </span>
              ))}
            </div>
            <div className={styles.wordmarkLine}>
              {'DIGITAL'.split('').map((char, index) => (
                <span
                  key={`digital-${index}`}
                  className={styles.wordmarkLetter}
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(
                        new CustomEvent('transco-footer-letter-click', {
                          detail: { letter: char },
                        })
                      );
                    }
                  }}
                  data-cursor={`Letter ${char}`}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div className={styles.copyright}>
          <span>© 2026 Transco Digital. All rights reserved.</span>
          <span className={styles.copyrightRight}>
            Founded in Sri Lanka · Global reach
          </span>
        </div>
      </div>
    </footer>
  );
}
