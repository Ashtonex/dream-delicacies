import styles from '../styles/whatsapp.module.css';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/+48728599401?text=Hi%20Dream%20Delicacies%2C%20I%27d%20love%20to%20plan%20my%20wedding%20with%20you!"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
    >
      💬
    </a>
  );
}