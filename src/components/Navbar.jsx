import { useState, useEffect } from 'react';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.disconnect());
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>✨ Dream Delicacies</div>
      <button className={styles.toggle} onClick={() => setOpen(!open)}>☰</button>
      <ul className={`${styles.links} ${open ? styles.show : ''}`}>
        {['home', 'services', 'testimonials', 'contact', 'form'].map(link => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={active === link ? styles.active : ''}
              onClick={() => setOpen(false)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}