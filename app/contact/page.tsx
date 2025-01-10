'use client'
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <main>
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-white mb-4">CONTACT US</h1>
        <p className="text-white mb-12 text-lg">
          Get in touch with our team for inquiries about our products, services, or support.
        </p>
      </div>
      <ContactForm />
    </main>
  );
} 