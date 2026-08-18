'use client';

/**
 * ContactPage.tsx — Clean, Professional Agency Contact Page
 * Features:
 * 1. Direct, frictionless contact form (Name, Email, Service Selector, Message)
 * 2. Real contact information (USA & Sri Lanka HQ, Email, Direct Phones)
 * 3. Live Real-Time Office Timezones
 * 4. Direct 15-Minute Discovery Call booking link
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import styles from './contactPage.module.css';

const servicesList = [
  'TikTok Makers (Short-Form Viral)',
  'YouTuber Automation',
  'Premium Social Content (PSC)',
  'Paid Campaigns & Media Buying',
  'Brand Identity & Design',
  'Digital Consultation & Growth Strategy',
  'Other / General Inquiry',
];

const offices = [
  {
    city: 'Cheyenne',
    country: 'United States',
    address: '525 Randall Ave #439, Cheyenne, WY 82001',
    phone: '+1-307-5004-888',
    timeZone: 'America/Denver',
    tzLabel: 'Mountain Time (US)',
    tag: 'US Regional Office',
  },
  {
    city: 'Colombo',
    country: 'Sri Lanka',
    address: '2nd Floor, 162 Nawala Rd, Nugegoda 10100',
    phone: '+94 112 885 979',
    timeZone: 'Asia/Colombo',
    tzLabel: 'Asia/Colombo (HQ)',
    tag: 'Global Execution HQ',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: servicesList[0],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Live clocks for offices
  const [times, setTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateClocks = () => {
      const newTimes: { [key: string]: string } = {};
      offices.forEach((off) => {
        try {
          const formatter = new Intl.DateTimeFormat([], {
            timeZone: off.timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          });
          newTimes[off.city] = formatter.format(new Date());
        } catch {
          newTimes[off.city] = '--:--';
        }
      });
      setTimes(newTimes);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief message submission
    await new Promise((res) => setTimeout(res, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className={styles.page}>
      {/* ── 1. Hero Header ────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>Get in Touch with Transco Digital</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className={styles.lightWord}>Let&apos;s start a</span>{' '}
            <span className={styles.boldWord}>conversation.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Whether you&apos;re looking to scale viral short-form video, launch YouTube automation, or scale paid customer acquisition — our team is ready to talk.
          </motion.p>
        </div>
      </section>

      {/* ── 2. Main Contact Grid ──────────────────────────────────── */}
      <section className={styles.contactSection} aria-label="Contact Information & Form">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left Column: Direct Info & Locations */}
            <div className={styles.infoCol}>
              <div className={styles.infoBlock}>
                <span className={styles.eyebrow}>Direct Inquiries</span>
                <h2 className={styles.infoTitle}>Connect with our team directly.</h2>
                <p className={styles.infoDesc}>
                  We typically respond within 24 hours on business days with direct scheduling options.
                </p>

                {/* Direct Contact Items */}
                <div className={styles.contactList}>
                  <a href="mailto:info@transcodigital.com" className={styles.contactItem}>
                    <div className={styles.iconBox}>
                      <Mail size={18} color="#FF6A00" />
                    </div>
                    <div>
                      <span className={styles.contactLabel}>Email Us</span>
                      <strong className={styles.contactVal}>info@transcodigital.com</strong>
                    </div>
                  </a>

                  <div className={styles.contactItem}>
                    <div className={styles.iconBox}>
                      <Phone size={18} color="#FF6A00" />
                    </div>
                    <div>
                      <span className={styles.contactLabel}>Phone Support</span>
                      <strong className={styles.contactVal}>+1 (307) 5004-888 / +94 112 885 979</strong>
                    </div>
                  </div>
                </div>

                {/* Direct Calendar Card */}
                <div className={styles.calendarCard}>
                  <div className={styles.calTop}>
                    <Calendar size={20} color="#FF6A00" />
                    <span className={styles.calBadge}>Fastest Response</span>
                  </div>
                  <h3 className={styles.calTitle}>Schedule a 15-Minute Call</h3>
                  <p className={styles.calDesc}>
                    Skip the email thread and book a direct strategy call with our leadership.
                  </p>
                  <a
                    href="mailto:info@transcodigital.com?subject=Schedule%2015-Minute%20Strategy%20Call"
                    className={styles.calBtn}
                  >
                    <span>Schedule Strategic Call</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              {/* Office Location Cards with Live Timezones */}
              <div className={styles.officesContainer}>
                <p className={styles.eyebrow}>Our Office Locations</p>
                <div className={styles.officesGrid}>
                  {offices.map((off) => (
                    <div key={off.city} className={styles.officeCard}>
                      <div className={styles.officeTop}>
                        <span className={styles.officeTag}>{off.tag}</span>
                        <div className={styles.liveClock}>
                          <Clock size={12} color="#FF6A00" />
                          <span>{times[off.city] || 'Loading...'}</span>
                        </div>
                      </div>
                      <h4 className={styles.officeCity}>{off.city}, {off.country}</h4>
                      <p className={styles.officeAddress}>{off.address}</p>
                      <span className={styles.officePhone}>{off.phone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Clean Contact Form */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h3 className={styles.formCardTitle}>Send us a message</h3>
                <p className={styles.formCardSub}>
                  Tell us a bit about your brand and what you&apos;re looking to achieve.
                </p>

                {isSubmitted ? (
                  <motion.div
                    className={styles.successState}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className={styles.successIcon}>
                      <CheckCircle2 size={40} color="#FF6A00" />
                    </div>
                    <h4 className={styles.successTitle}>Message Sent Successfully!</h4>
                    <p className={styles.successText}>
                      Thank you, <strong>{formData.name}</strong>. The Transco Digital team will review your inquiry and get back to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      className={styles.resetBtn}
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', service: servicesList[0], message: '' });
                      }}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Johnathan Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@yourbrand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Service You Are Interested In</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={styles.select}
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Message / Project Brief *</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Tell us about your brand, current goals, or specific questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={styles.textarea}
                      />
                    </div>

                    <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>

                    <p className={styles.formNote}>
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
