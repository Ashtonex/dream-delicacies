import styles from '../styles/services.module.css';

export default function ServicesPreview() {
  const services = [
    {
      title: 'Full Wedding Planning',
      description: 'From venue to vows, we handle every detail so you can enjoy your day stress-free.',
    },
    {
      title: 'Day-of Coordination',
      description: 'Perfect for DIY couples—let us run the show while you soak in the magic.',
    },
    {
      title: 'Destination Weddings',
      description: 'Planning a wedding abroad? We’ll make it seamless, stunning, and unforgettable.',
    },
  ];

  return (
    <section className={styles.services}>
      <h2 className={styles.heading}>Our Signature Services</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}