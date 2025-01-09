'use client'
import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#293241]">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-[#98c1d9]/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#ee6c4d] rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-[#ee6c4d] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-grow overflow-x-hidden">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-stone-100 to-stone-200 py-16">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.03)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.03)_75%)] bg-[length:128px_128px]" />
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-center text-black/70">
            Last Updated: {new Date().toLocaleDateString('en-IN')}
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <div className="relative bg-gradient-to-r from-stone-200 to-stone-300">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.02),rgba(0,0,0,0.02)_1px,transparent_1px,transparent_16px)]" />
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
              <p className="text-black/80">
                We at Guhan Industrial and Manufacturing Solutions Pvt Ltd (&quot;GIMS,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you interact with our website, waterjet cutting solutions, and related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Information We Collect</h2>
              <ul className="list-disc pl-6 text-black/80 space-y-2">
                <li>Contact information (name, email address, phone number, company name)</li>
                <li>Technical specifications for waterjet cutting requirements</li>
                <li>Business inquiries and correspondence</li>  
                <li>Customer feedback and product testimonials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-black/80 space-y-2">
                <li>To provide and maintain our waterjet cutting solutions and services</li>
                <li>To process and respond to your inquiries and requests</li>
                <li>To send important updates about our products and services</li>
                <li>To improve our website and customer experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Contact Information</h2>
              <p className="text-black/80 mb-4">
                For any questions or concerns about this privacy policy or our data practices, please contact us through any of the following channels:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#20B1FB] p-2 rounded-lg">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-black font-semibold mb-1">Email Us</h3>
                    <a href="mailto:Sales@gimsindia.in" className="text-black/80 hover:text-[#ee6c4d] transition">
                      Sales@gimsindia.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#20B1FB] p-2 rounded-lg">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-black font-semibold mb-1">Call Us</h3>
                    <a href="tel:+918925559983" className="text-black/80 hover:text-[#ee6c4d] transition">
                      +91 8925559983
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#20B1FB] p-2 rounded-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-black font-semibold mb-1">Visit Us</h3>
                    <p className="text-black/80">
                       22-25, Sri Sai Nagar Main Rd,<br />
                      Sri Sai Nagar, Pallikaranai,<br />
                      Thoraipakkam, Chennai,<br />
                      Tamil Nadu 600096
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Changes to This Policy</h2>
              <p className="text-black/80">
                We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated revision date. We encourage you to periodically review this page for the latest information on our privacy practices.
              </p>
            </section>
          </div>
        </div>
      </div>

      <style jsx global>{`
        section {
          position: relative;
          z-index: 1;
        }
        
        div[class*="bg-[linear-gradient"] {
          transition: background-position 0.3s ease;
        }
        
        div[class*="bg-[linear-gradient"]:hover {
          background-position: 4px 4px;
        }
      `}</style>
    </main>
  );
} 