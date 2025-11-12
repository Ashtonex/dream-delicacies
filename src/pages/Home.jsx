import HeroSection from '../components/HeroSection';
import ServicesPreview from '../components/ServicesPreview';
import TestimonialsPreview from '../components/TestimonialsPreview';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import GallerySection from '../components/GallerySection';


export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <TestimonialsPreview />
      <CTASection />
      <ContactForm />
      <GallerySection />
     
    </>
  );
}