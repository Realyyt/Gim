'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('loading');
    
    try {
      // Commenting out the API setup
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // Simulating sending email to admin@gimsindia.in
      const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nMessage: ${formData.message}`;
      const mailtoLink = `mailto:admin@gimsindia.in?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      
      // Wait a brief moment before redirecting
      setTimeout(() => {
        router.push('/contact/thank-you');
      }, 1000);
    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 w-full bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-[#3d5a80] mb-6">Get in Touch</h2>
            <p className="text-[#3d5a80]/80 mb-12 text-lg">
              Ready to revolutionize your manufacturing process? Contact us today for a consultation.
            </p>

            <div className="space-y-8">
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-[#20B1FB] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#e0fbfc]" />
                </div>
                <div>
                  <h3 className="text-[#3d5a80] font-semibold mb-1">Email Us</h3>
                  <a href="mailto:Sales@gimsindia.in" className="text-[#3d5a80] hover:text-[#ee6c4d] transition">
                    Sales@gimsindia.in
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-[#20B1FB] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#e0fbfc]" />
                </div>
                <div>
                  <h3 className="text-[#3d5a80] font-semibold mb-1">Call Us</h3>
                  <a href="tel:+918925559983" className="text-[#3d5a80] hover:text-[#ee6c4d] transition">
                    +91 8925559983
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-[#20B1FB] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#e0fbfc]" />
                </div>
                <div>
                  <h3 className="text-[#3d5a80] font-semibold mb-1">Visit Us</h3>
                  <p className="text-[#3d5a80]">
                    22-25, Sri Sai Nagar Main Rd,<br />
                    Sri Sai Nagar, Pallikaranai,<br />
                    Thoraipakkam, Chennai,<br />
                    Tamil Nadu 600096
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border border-white/10 shadow-lg 
              backdrop-blur-sm hover:border-white/20 transition-colors"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#293241] mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#293241]/10 border border-[#293241]/20 
                      text-[#293241] placeholder-[#293241]/50 focus:outline-none focus:border-[#293241]/40
                      transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#293241] mb-2 text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#293241]/10 border border-[#293241]/20 
                      text-[#293241] placeholder-[#293241]/50 focus:outline-none focus:border-[#293241]/40
                      transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-[#293241] mb-2 text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#293241]/10 border border-[#293241]/20 
                      text-[#293241] placeholder-[#293241]/50 focus:outline-none focus:border-[#293241]/40
                      transition-colors"
                    placeholder="+91 123 456 7890"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-[#293241] mb-2 text-sm font-medium">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#293241]/10 border border-[#293241]/20 
                      text-[#293241] placeholder-[#293241]/50 focus:outline-none focus:border-[#293241]/40
                      transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#293241] mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[#293241]/10 border border-[#293241]/20 
                    text-[#293241] placeholder-[#293241]/50 focus:outline-none focus:border-[#293241]/40
                    transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ee6c4d] hover:bg-[#ee6c4d]/90 text-[#0a4165] py-3 px-6 rounded-lg
                  transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center
                  disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-[#1890d5] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>

              {status === 'loading' && <p>Sending...</p>}
              {status === 'success' && <p>Message sent successfully!</p>}
              {status === 'error' && <p>Failed to send message. Please try again.</p>}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 