import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}>
        <h3 className={styles.brand}>Dream Delicacies Events</h3>
        <p className={styles.contact}>
          📍 Mutare, Zimbabwe<br />
          📞 +263 77 123 4567<br />
          📧 dreamdelicacies.events@gmail.com
        </p>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/dreamdelicaciesevents" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/dreamdelicaciesevents" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://wa.me/263771234567" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Dream Delicacies Events. All rights reserved.
        </p>
      </div>
    </footer>
  );
}