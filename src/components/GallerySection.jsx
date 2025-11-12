import styles from '../styles/gallery.module.css';

export default function GallerySection() {
  const images = [
    '/assets/gallery/1.jpg',
    '/assets/gallery/2.jpg',
    '/assets/gallery/3.jpg',
    '/assets/gallery/4.jpg',
    '/assets/gallery/5.jpg',
    '/assets/gallery/6.jpg',
  ];

  return (
    <section className={styles.gallery} id="gallery">
      <h2 className={styles.heading}>Gallery of Dreams</h2>
      <div className={styles.grid}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Wedding ${i + 1}`} className={styles.image} />
        ))}
      </div>
    </section>
  );
}