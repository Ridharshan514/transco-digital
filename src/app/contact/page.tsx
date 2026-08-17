'use client';

/**
 * DedicatedContactPage.tsx — Smart Interactive Project Planner & Global Hub
 * Features:
 * 1. Step-by-Step Interactive Project Scope Configurator (Objective, Budget, Timeline, Brief)
 * 2. Live Global Office Hub with Real-Time Timezones (USA, Sri Lanka, UK, UAE)
 * 3. Instant Discovery Calendar Access
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Globe,
  Clock,
  Mail,
  MapPin,
  Phone,
  Calendar,
  Send,
  Zap,
} from 'lucide-react';
import styles from './contactPage.module.css';

// ── Scope Builder Options ────────────────────────────────────────────────────
const objectives = [
  { id: 'tiktok', label: 'TikTok & Short-Form Viral', desc: 'Hook architecture & batch video production' },
  { id: 'youtube', label: 'YouTube Channel Automation', desc: 'Full editing, CTR thumbnails & SEO growth' },
  { id: 'paid', label: 'Paid Performance Media', desc: 'Meta, Google & TikTok ads scaling' },
  { id: 'branding', label: 'Brand Identity & Rebrand', desc: 'Visual systems, style guides & positioning' },
  { id: 'custom', label: 'Full-Service Growth Sprint', desc: 'Custom integrated multi-channel strategy' },
];

const budgetRanges = [
  { id: 'starter', label: '$1,500 – $3,000 / mo', desc: 'Single channel or early-stage sprint' },
  { id: 'growth', label: '$3,000 – $7,500 / mo', desc: 'Multi-channel production & media buying' },
  { id: 'scale', label: '$7,500 – $15,000 / mo', desc: 'Aggressive viral output & paid scaling' },
  { id: 'enterprise', label: '$15,000+ / mo', desc: 'Enterprise partner with dedicated squad' },
];

const timelines = [
  { id: 'asap', label: 'Immediately (Next 1–2 Weeks)' },
  { id: 'month', label: 'Within Next 30 Days' },
  { id: 'quarter', label: 'Planning for Next Quarter' },
];

// ── Global Hub Offices & Timezones ───────────────────────────────────────────
const offices = [
  {
    city: 'Cheyenne',
    country: 'USA (Wyoming)',
    address: '525 Randall Ave #439, Cheyenne, WY 82001',
    timeZone: 'America/Denver',
    tzLabel: 'MT (UTC-6)',
    phone: '+1-307-5004-888',
    type: 'US Regional Office',
  },
  {
    city: 'Colombo',
    country: 'Sri Lanka',
    address: '2nd Floor, 162 Nawala Rd, Nugegoda 10100',
    timeZone: 'Asia/Colombo',
    tzLabel: 'IST (UTC+5:30)',
    phone: '+94 112 885 979',
    type: 'Global Execution HQ',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: 'Serving UK & European Enterprise Clients',
    timeZone: 'Europe/London',
    tzLabel: 'GMT (UTC+0)',
    phone: 'Direct via Email Desk',
    type: 'European Desk',
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'Serving GCC & Middle East Partners',
    timeZone: 'Asia/Dubai',
    tzLabel: 'GST (UTC+4)',
    phone: 'Direct via Email Desk',
    type: 'Middle East Desk',
  },
];

export default function DedicatedContactPage() {
  // Planner State
  const [selectedObjective, setSelectedObjective] = useState(objectives[0].id);
  const [selectedBudget, setSelectedBudget] = useState(budgetRanges[1].id);
  const [selectedTimeline, setSelectedTimeline] = useState(timelines[0].id);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Live Clocks
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
    // Simulate brief submission
    await new Promise((res) => setTimeout(res, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const currentObjectiveObj = objectives.find((o) => o.id === selectedObjective);
  const currentBudgetObj = budgetRanges.find((b) => b.id === selectedBudget);
  const currentTimelineObj = timelines.find((t) => t.id === selectedTimeline);

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
            <Sparkles size={14} color="#FF6A00" />
            <span>Interactive Project Discovery & Scope Builder</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className={styles.lightWord}>Let&apos;s engineer your</span>{' '}
            <span className={styles.boldWord}>next growth chapter.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Configure your project parameters below to get an estimated execution strategy, or connect directly with our executive team.
          </motion.p>
        </div>
      </section>

      {/* ── 2. Smart Interactive Project Scope Builder ─────────────── */}
      <section className={styles.plannerSection} aria-label="Project Scope Configurator">
        <div className="container">
          <div className={styles.plannerGrid}>
            {/* Left: Interactive Configurator */}
            <div className={styles.configuratorCol}>
              {isSubmitted ? (
                <motion.div
                  className={styles.successCard}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className={styles.successIconBox}>
                    <CheckCircle2 size={36} color="#FF6A00" />
                  </div>
                  <h2 className={styles.successTitle}>Scope Brief Received!</h2>
                  <p className={styles.successDesc}>
                    Thank you, <strong>{formData.name || 'there'}</strong>. Our strategic directors have received your project parameters and will prepare a tailored proposal within 24 hours.
                  </p>
                  <button
                    className={styles.resetBtn}
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                  >
                    Build Another Scope
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.plannerForm}>
                  {/* Step 1: Objective */}
                  <div className={styles.stepBlock}>
                    <div className={styles.stepHeader}>
                      <span className={styles.stepNum}>01</span>
                      <div>
                        <h3 className={styles.stepTitle}>What is your primary commercial objective?</h3>
                        <p className={styles.stepSub}>Select the focus area that aligns with your 90-day targets.</p>
                      </div>
                    </div>

                    <div className={styles.optionsGrid}>
                      {objectives.map((obj) => (
                        <button
                          type="button"
                          key={obj.id}
                          className={`${styles.optionCard} ${selectedObjective === obj.id ? styles.optionCardActive : ''}`}
                          onClick={() => setSelectedObjective(obj.id)}
                        >
                          <span className={styles.optionLabel}>{obj.label}</span>
                          <span className={styles.optionDesc}>{obj.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Budget */}
                  <div className={styles.stepBlock}>
                    <div className={styles.stepHeader}>
                      <span className={styles.stepNum}>02</span>
                      <div>
                        <h3 className={styles.stepTitle}>What is your target monthly investment?</h3>
                        <p className={styles.stepSub}>Helps us allocate the right creative squad & production capacity.</p>
                      </div>
                    </div>

                    <div className={styles.optionsGridTwoCol}>
                      {budgetRanges.map((b) => (
                        <button
                          type="button"
                          key={b.id}
                          className={`${styles.optionCard} ${selectedBudget === b.id ? styles.optionCardActive : ''}`}
                          onClick={() => setSelectedBudget(b.id)}
                        >
                          <span className={styles.optionLabel}>{b.label}</span>
                          <span className={styles.optionDesc}>{b.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Timeline */}
                  <div className={styles.stepBlock}>
                    <div className={styles.stepHeader}>
                      <span className={styles.stepNum}>03</span>
                      <div>
                        <h3 className={styles.stepTitle}>When are you looking to launch?</h3>
                        <p className={styles.stepSub}>We sprint quickly, typically within 7–14 days from briefing.</p>
                      </div>
                    </div>

                    <div className={styles.timelineRow}>
                      {timelines.map((t) => (
                        <button
                          type="button"
                          key={t.id}
                          className={`${styles.timelineBtn} ${selectedTimeline === t.id ? styles.timelineBtnActive : ''}`}
                          onClick={() => setSelectedTimeline(t.id)}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Contact Information */}
                  <div className={styles.stepBlock}>
                    <div className={styles.stepHeader}>
                      <span className={styles.stepNum}>04</span>
                      <div>
                        <h3 className={styles.stepTitle}>Where should we send your custom blueprint?</h3>
                        <p className={styles.stepSub}>Your information is protected under strict client confidentiality.</p>
                      </div>
                    </div>

                    <div className={styles.fieldsGrid}>
                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={styles.textInput}
                        />
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Work Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="sarah@brand.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={styles.textInput}
                        />
                      </div>

                      <div className={styles.inputGroupFull}>
                        <label className={styles.inputLabel}>Company / Website URL</label>
                        <input
                          type="text"
                          placeholder="https://yourbrand.com"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className={styles.textInput}
                        />
                      </div>

                      <div className={styles.inputGroupFull}>
                        <label className={styles.inputLabel}>Brief Notes / Specific Growth Goals</label>
                        <textarea
                          rows={3}
                          placeholder="Tell us about your audience, current roadblocks, or key deliverables..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={styles.textArea}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                    {isSubmitting ? (
                      <span>Analyzing & Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Project Scope & Request Strategy Call</span>
                        <ArrowUpRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Live Scope Summary & Instant Booking */}
            <div className={styles.summaryCol}>
              <div className={styles.summaryCard}>
                <div className={styles.summaryTop}>
                  <Zap size={16} color="#FF6A00" />
                  <span>Live Scope Summary</span>
                </div>

                <div className={styles.summaryBody}>
                  <div className={styles.summaryItem}>
                    <span className={styles.sumLabel}>Focus Objective</span>
                    <span className={styles.sumVal}>{currentObjectiveObj?.label}</span>
                  </div>

                  <div className={styles.summaryItem}>
                    <span className={styles.sumLabel}>Allocated Budget</span>
                    <span className={styles.sumVal}>{currentBudgetObj?.label}</span>
                  </div>

                  <div className={styles.summaryItem}>
                    <span className={styles.sumLabel}>Target Timeline</span>
                    <span className={styles.sumVal}>{currentTimelineObj?.label}</span>
                  </div>
                </div>

                <div className={styles.guaranteeBox}>
                  <CheckCircle2 size={16} color="#10B981" />
                  <span>Guaranteed 24-hour response with a tailored proposal.</span>
                </div>
              </div>

              {/* Instant Discovery Sprint Booking */}
              <div className={styles.bookingCard}>
                <div className={styles.bookIconWrap}>
                  <Calendar size={22} color="#FF6A00" />
                </div>
                <h3 className={styles.bookTitle}>Prefer an immediate call?</h3>
                <p className={styles.bookDesc}>
                  Skip the form and book a 15-minute strategic discovery session with our managing directors directly.
                </p>
                <a
                  href="mailto:info@transcodigital.com?subject=Schedule%2015-Min%20Discovery%20Call"
                  className={styles.bookBtn}
                >
                  <span>Book Strategic Discovery Call</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Global Office Hub & Live Timezones ──────────────────── */}
      <section className={styles.globalSection} aria-label="Global Presence">
        <div className="container">
          <div className={styles.globalHeader}>
            <div className={styles.globalBadge}>
              <Globe size={14} color="#FF6A00" />
              <span>International Agency Presence</span>
            </div>
            <h2 className={styles.globalTitle}>
              Operating across four major time zones seamlessly.
            </h2>
            <p className={styles.globalSub}>
              Our decentralized structure ensures continuous campaign monitoring and high-velocity delivery worldwide.
            </p>
          </div>

          <div className={styles.officesGrid}>
            {offices.map((off) => (
              <div key={off.city} className={styles.officeCard}>
                <div className={styles.officeTop}>
                  <span className={styles.officeType}>{off.type}</span>
                  <div className={styles.liveClock}>
                    <Clock size={12} color="#FF6A00" />
                    <span>{times[off.city] || 'Loading...'}</span>
                  </div>
                </div>

                <h3 className={styles.officeCity}>{off.city}</h3>
                <p className={styles.officeCountry}>{off.country}</p>
                <p className={styles.officeAddress}>{off.address}</p>

                <div className={styles.officeFooter}>
                  <span className={styles.tzBadge}>{off.tzLabel}</span>
                  <span className={styles.phoneLink}>{off.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
