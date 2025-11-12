import { useState } from 'react';
import styles from '../styles/contactform.module.css';

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', date: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch('https://formspree.io/f/xdkyoyvq', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(e.target),
    });
    if (response.ok) setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className={styles.contact} id="form">
      <h2 className={styles.heading}>Let’s Connect</h2>
      {submitted ? (
        <p className={styles.success}>Thank you! We'll be in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          {step === 0 && (
            <div className={styles.field}>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              <label>Your Name</label>
              <button type="button" onClick={nextStep}>Next</button>
            </div>
          )}
          {step === 1 && (
            <div className={styles.field}>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              <label>Your Email</label>
              <button type="button" onClick={prevStep}>Back</button>
              <button type="button" onClick={nextStep}>Next</button>
            </div>
          )}
          {step === 2 && (
            <div className={styles.field}>
              <input type="text" name="date" value={formData.date} onChange={handleChange} />
              <label>Event Date</label>
              <button type="button" onClick={prevStep}>Back</button>
              <button type="button" onClick={nextStep}>Next</button>
            </div>
          )}
          {step === 3 && (
            <div className={styles.field}>
              <textarea name="message" value={formData.message} onChange={handleChange} required />
              <label>Your Message</label>
              <button type="button" onClick={prevStep}>Back</button>
              <button type="submit" disabled={loading}>
                {loading ? 'Sending…' : 'Send'}
              </button>
            </div>
          )}
        </form>
      )}
    </section>
  );
}