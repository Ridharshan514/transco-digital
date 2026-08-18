'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './Brands.module.css';

const studios = [
  {
    id: 'psc',
    slug: 'content-marketing',
    name: 'Premium Social Content',
    tag: 'PSC',
    badge: 'Social & Editorial',
    metric: '30K+ Qualified Leads',
    description:
      'Social media marketing, content marketing, digital strategy, content creation, and paid ad campaign management for businesses of all sizes.',
    image: '/brand-psc.jpg',
    imageAlt: 'Premium Social Content',
    accentColor: '#FF6A00',
  },
  {
    id: 'youtuber',
    slug: 'content-marketing',
    name: 'YouTubeR Automation',
    tag: 'YTA',
    badge: 'Creator Media',
    metric: '1.7M+ Organic Views',
    description:
      'An all-in-one service for YouTube creators and businesses: video editing, thumbnail design, and YouTube ad management.',
    image: '/brand-youtuber.jpg',
    imageAlt: 'YouTubeR Automation',
    accentColor: '#FF0000',
  },
  {
    id: 'tiktok',
    slug: 'content-marketing',
    name: 'TikTok Makers',
    tag: 'TTM',
    badge: 'Viral Short-Form',
    metric: '35%+ Hook Retention',
    description:
      'A done-for-you short-form video service, turning raw footage into scroll-stopping content for TikTok, Instagram Reels, and YouTube Shorts.',
    image: '/brand-tiktok.jpg',
    imageAlt: 'TikTok Makers',
    accentColor: '#69C9D0',
  },
];

export default function Brands() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (scrollRef.current) {
      const cards = scrollRef.current.querySelectorAll(`.${styles.cardWrapper}`);
      if (cards[index]) {
        cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

  return (
    <section className={`${styles.section} section`} id="brands" aria-label="Our Specialized Studios">
      <div className="container">
        <motion.div
          className={styles.header}
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Our Studios</p>
          <h2 className={styles.headline}>
            <span className="headline-light">One network,</span>
            <span className="headline-bold">three specialists.</span>
          </h2>
        </motion.div>

        {/* Mobile Quick Studio Selector Tabs */}
        <div className={styles.mobileTabsRow}>
          {studios.map((brand, i) => (
            <button
              key={brand.id}
              className={`${styles.mobileTabBtn} ${activeTab === i ? styles.mobileTabBtnActive : ''}`}
              onClick={() => handleTabClick(i)}
              type="button"
            >
              <span>{brand.tag}</span>
            </button>
          ))}
        </div>

        {/* Studios Grid / Mobile Snap Carousel */}
        <div className={styles.grid} ref={scrollRef}>
          {studios.map((brand, i) => (
            <motion.div
              key={brand.id}
              className={styles.cardWrapper}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <Link href={`/services/${brand.slug}`} className={styles.card}>
                {/* Image */}
                <div className={styles.imageWrap}>
                  <Image
                    src={brand.image}
                    alt={brand.imageAlt}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 85vw, 33vw"
                  />
                  <div className={styles.imageOverlay} />
                  {/* Brand tag */}
                  <div className={styles.tag}>{brand.tag}</div>
                  <div className={styles.metricBadge}>{brand.metric}</div>
                </div>

                {/* Content */}
                <div className={styles.content}>
                  <div className={styles.metaRow}>
                    <span className={styles.categoryBadge}>{brand.badge}</span>
                  </div>
                  <h3 className={styles.brandName}>{brand.name}</h3>
                  <p className={styles.brandDesc}>{brand.description}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.learnMore}>Explore capability</span>
                    <div className={styles.arrowIcon}>
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
