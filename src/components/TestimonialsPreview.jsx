import { useState, useEffect, useRef } from 'react';
import styles from '../styles/testimonials.module.css';

const testimonials = [
  {
    name: 'Tariro & Tendai',
    quote: 'Dream Delicacies made our wedding magical. Every detail was perfect—we didn’t lift a finger!',
    image: '/assets/testimonials/tariro-tendai.jpg',
  },
  {
    name: 'Melissa & Tawanda',
    quote: 'From the first call to the final dance, they were professional, warm, and incredibly organized.',
    image: '/assets/testimonials/melissa-tawanda.jpg',
  },
  {
    name: 'Chipo & Brian',
    quote: 'We still get compliments on how beautiful and seamless our wedding was. Thank you!',
    image: '/assets/testimonials/chipo-brian.jpg',
  },
];

export default function TestimonialsPreview() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const touchStartX = useRef(null);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((index + 1) % testimonials.length);
      setFade(true);
    }, 100);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((index - 1 + testimonials.length) % testimonials.length);
      setFade(true);
    }, 100);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) prev();
    else if (deltaX < -50) next();
  };

  const { name, quote, image } = testimonials[index];

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.heading}>What Our Couples Say</h2>
      <div
        className={`${styles.carousel} ${fade ? styles.fadeIn : styles.fadeOut}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button onClick={prev} className={styles.nav}>&larr;</button>
        <div className={styles.card}>
          <img src={image} alt={name} className={styles.image} />
          <p className={styles.quote}>"{quote}"</p>
          <p className={styles.name}>— {name}</p>
        </div>
        <button onClick={next} className={styles.nav}>&rarr;</button>
      </div>
    </section>
  );
}