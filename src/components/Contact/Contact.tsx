'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import styles from './Contact.module.css';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email us',
    value: 'info@transcodigital.com',
    href: 'mailto:info@transcodigital.com',
  },
  {
    icon: MapPin,
    label: 'Based in',
    value: 'Malabe, Sri Lanka · Global reach',
    href: null,
  },
  {
    icon: Phone,
    label: 'Call us',
    value: 'Schedule via email',
    href: 'mailto:info@transcodigital.com?subject=Schedule%20a%20Call',
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '', service: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — wire to your backend/Formspree/etc.
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const services = [
    'Digital Consultation',
    'Branding',
    'Content Marketing',
    'Paid Campaigns',
    'Premium Social Content (PSC)',
    'YouTubeR Automation',
    'TikTok Makers',
  ];

  return (
    <section className={`${styles.section} section`} id="contact" aria-label="Contact Transco Digital">
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {/* ── Left panel ── */}
          <div className={styles.left}>
            <p className="eyebrow">Get in Touch</p>
            <h2 className={styles.headline}>
              <span className="headline-light">Let&apos;s start</span>
              <span className="headline-bold">something great.</span>
            </h2>
            <p className={styles.subtext}>
              Whether you&apos;re looking to grow your brand, launch a campaign, or build your
              content engine — we&apos;re ready to talk.
            </p>

            <div className={styles.details}>
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className={styles.detailItem}>
                  <div className={styles.detailIcon}>
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>{label}</span>
                    {href ? (
                      <a href={href} className={styles.detailValue}>
                        {value}
                      </a>
                    ) : (
                      <span className={styles.detailValuePlain}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick email CTA */}
            <a
              href="mailto:info@transcodigital.com?subject=Schedule%20a%20Call%20%E2%80%94%20Transco%20Digital"
              className={styles.emailCta}
              id="contact-email-cta"
            >
              <span>Email us directly</span>
              <span className={styles.emailCtaIcon}>
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </a>
          </div>

          {/* ── Right panel: form ── */}
          <div className={styles.right}>
            {submitted ? (
              <motion.div
                className={styles.successState}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <div className={styles.successIcon}>
                  <CheckCircle2 size={32} strokeWidth={1.5} />
                </div>
                <h3 className={styles.successTitle}>Message sent!</h3>
                <p className={styles.successText}>
                  Thanks for reaching out. The Transco Digital team will get back to you within
                  one business day.
                </p>
                <button
                  className={styles.resetBtn}
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', message: '', service: '' });
                  }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="contact-name" className={styles.label}>
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className={styles.input}
                      placeholder="Jane Smith"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      autoComplete="name"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-email" className={styles.label}>
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className={styles.input}
                      placeholder="jane@company.com"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-service" className={styles.label}>
                    Service you&apos;re interested in
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    className={styles.select}
                    value={formState.service}
                    onChange={(e) => setFormState((s) => ({ ...s, service: e.target.value }))}
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>
                    Tell us about your project
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={styles.textarea}
                    placeholder="Give us a brief overview of your brand, goals, and timeline…"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  />
                </div>

                <button
                  type="submit"
                  className={`${styles.submitBtn} ${loading ? styles.loading : ''}`}
                  disabled={loading}
                  id="contact-submit"
                >
                  {loading ? (
                    <span className={styles.spinner} aria-hidden="true" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowUpRight size={16} strokeWidth={2.5} />
                    </>
                  )}
                </button>

                <p className={styles.formNote}>
                  We typically respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
