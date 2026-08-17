'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight, Send } from 'lucide-react';
import styles from './Footer.module.css';

// Dynamically import the 3D sphere — no SSR (WebGL needs browser)
const FooterSphere = dynamic(() => import('./FooterSphere'), { ssr: false });

// Inline SVG brand icons (Lucide removed brand icons in v0.x)
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
  </svg>
);


const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#expertise' },
  { label: 'Our Brands', href: '#brands' },
  { label: 'Case Studies', href: '#results' },
];
const companyLinks = [
  { label: 'About Us', href: 'https://transcodigital.com/about' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Schedule a Call', href: 'mailto:info@transcodigital.com?subject=Schedule%20a%20Call' },
  { label: 'Careers', href: 'mailto:info@transcodigital.com?subject=Careers%20Enquiry' },
];
const legalLinks = [
  { label: 'Terms & Conditions', href: 'https://transcodigital.com/terms' },
  { label: 'Privacy Policy', href: 'https://transcodigital.com/privacy' },
];


const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://web.facebook.com/transcodigital' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/transco_digital/' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/transco-digital-pvt-ltd/' },
  { icon: YouTubeIcon, label: 'YouTube', href: 'https://www.youtube.com/@transcodigital/videos' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Transco Digital — Footer">
      {/* ── 3D Background Sphere (centered) ── */}
      <div className={styles.sphereContainer} aria-hidden="true">
        <FooterSphere />
      </div>

      <div className={styles.inner}>
        {/* ── Top section ── */}
        <div className={styles.top}>
          {/* Left: Logo + tagline + newsletter */}
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
                onSubmit={(e) => e.preventDefault()}
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
                  />
                  <button
                    type="submit"
                    className={styles.sendBtn}
                    aria-label="Subscribe"
                  >
                    <Send size={14} strokeWidth={2} />
                  </button>
                </div>
                <button type="submit" className={styles.subscribeBtn}>
                  Subscribe
                </button>
              </form>
            </div>

            {/* Socials */}
            <div className={styles.socials}>
              <span className={styles.socialsLabel}>Follow Us</span>
              <div className={styles.socialIcons}>
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className={styles.socialIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Transco Digital on ${label}`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Link columns */}
          <div className={styles.topRight}>
            <div className={styles.linkCol}>
              <h3 className={styles.colTitle}>Quick Links</h3>
              <ul role="list">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className={styles.footerLink}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.linkCol}>
              <h3 className={styles.colTitle}>Company</h3>
              <ul role="list">
                {companyLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className={styles.footerLink}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.linkCol}>
              <h3 className={styles.colTitle}>Legal</h3>
              <ul role="list">
                {legalLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className={styles.footerLink}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Schedule a call CTA */}
              <div className={styles.footerCta}>
                <Link href="mailto:info@transcodigital.com?subject=Schedule%20a%20Call" className={styles.footerCtaBtn}>
                  Schedule a Call
                  <ArrowRight size={14} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className={styles.divider} />

        {/* ── Oversized wordmark ── */}
        <div className={styles.wordmarkWrap} aria-hidden="true">
          <div className={styles.wordmark}>
            {'TRANSCO'.split('').map((char, index) => (
              <span
                key={index}
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
