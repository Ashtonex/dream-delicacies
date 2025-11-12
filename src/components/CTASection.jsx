import { motion } from 'framer-motion';
import styles from '../styles/cta.module.css';

export default function CTASection() {
  return (
    <motion.section
      className={styles.cta}
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className={styles.heading}>Let’s Plan Your Dream Day</h2>
      <p className={styles.subtext}>We’d love to hear your vision and bring it to life.</p>
      <div className={styles.buttons}>
        <a
          href="https://wa.me/263771234567?text=Hi%20Dream%20Delicacies%2C%20I%27d%20love%20to%20plan%20my%20wedding%20with%20you!"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsapp}
        >
          Chat on WhatsApp
        </a>
        <a href="/#form" className={styles.form}>Fill Contact Form</a>
      </div>
    </motion.section>
  );
}