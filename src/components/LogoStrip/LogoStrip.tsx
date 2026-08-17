'use client';

import styles from './LogoStrip.module.css';

// Placeholder client/partner logos using styled text chips
const logos = [
  'Kinetic Cycle', 'SLIM', 'Carys Ecclesall', 'Bankhill Educare',
  'Welkin Constructions', 'Scott Maclean', 'Partner Co.', 'Growth Studio',
  'Brand Agency', 'Digital Works', 'Creative Labs', 'Media Group',
];

export default function LogoStrip() {
  // Duplicate for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <section className={styles.strip} aria-label="Clients and partners">
      <div className={styles.fadeLeft} aria-hidden="true" />
      <div className={styles.fadeRight} aria-hidden="true" />
      <div className={styles.track}>
        {allLogos.map((name, i) => (
          <div key={i} className={styles.logoChip} aria-hidden={i >= logos.length}>
            <div className={styles.logoDot} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
