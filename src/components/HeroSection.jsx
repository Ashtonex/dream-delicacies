import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/hero.module.css';

export default function HeroSection() {
  const tagline = ['Crafting', 'unforgettable', 'moments', 'with', 'grace', 'and', 'glamour'];
  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWords((prev) => (prev < tagline.length ? prev + 1 : prev));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className={styles.hero}
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.overlay}>
        <motion.h1
          className={styles.title}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Dream Delicacies Events
        </motion.h1>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {tagline.slice(0, visibleWords).join(' ')}
        </motion.p>
        <motion.a
          href="#contact"
          className={styles.cta}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Book Your Dream Day
        </motion.a>
        <div className={styles.scrollCue}>↓</div>
      </div>
      <img src="/assets/floral-left.svg" className={styles.floralLeft} alt="" />
      <img src="/assets/floral-right.svg" className={styles.floralRight} alt="" />
    </motion.section>
  );
}