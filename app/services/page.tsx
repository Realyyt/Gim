'use client'

import { useState } from 'react';
import { CheckCircle, Leaf, Gauge, Shield, Target, Droplets, Recycle, Clock, Award, HeartHandshake, BadgeCheck, Ship } from 'lucide-react';
import { services } from './data/services';
import ContactForm2 from '../components/contactform2';
import ServiceSection from './components/ServiceSection';

export default function ServicesPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactFormType, setContactFormType] = useState<'contact' | 'quote'>('contact');

  const openContactModal = (type: 'contact' | 'quote') => {
    setContactFormType(type);
    setIsContactModalOpen(true);
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[#293241] flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6">Maritime Waterjet Services</h1>
          <p className="text-xl mb-8">
            Advanced Waterjet Technology for Maritime Excellence | Professional Solutions for Ship Maintenance and Repair
          </p>
          <button 
            onClick={() => openContactModal('quote')}
            className="bg-[#ee6c4d] text-white px-8 py-3 rounded-lg hover:bg-[#ee6c4d]/90 transition-colors"
          >
            Get Your Quote Today
          </button>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#293241]">
              Why Choose Our Waterjet Technology?
            </h2>
            <p className="text-xl text-[#293241]/70 max-w-3xl mx-auto">
              With over two decades of maritime expertise, we deliver unparalleled waterjet solutions 
              that combine precision, sustainability, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Core Benefits */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#1890d5]">
              <div className="text-[#1890d5] mb-6">
                <Target className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#293241]">Precision Excellence</h3>
              <p className="text-[#293241]/70 mb-4">
                Our advanced waterjet systems deliver unmatched accuracy with tolerances down to ±0.1mm, 
                ensuring perfect results every time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                  <span>Computer-controlled precision cutting</span>
                </li>
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                  <span>Consistent quality across projects</span>
                </li>
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <CheckCircle className="h-5 w-5 text-[#ee6c4d]" />
                  <span>Complex shape capabilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#1890d5]">
              <div className="text-[#1890d5] mb-6">
                <Leaf className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#293241]">Environmental Leadership</h3>
              <p className="text-[#293241]/70 mb-4">
                Our eco-friendly approach sets new standards in sustainable maritime operations, 
                minimizing environmental impact while maximizing efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <Droplets className="h-5 w-5 text-[#ee6c4d]" />
                  <span>Zero harmful chemicals</span>
                </li>
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <Recycle className="h-5 w-5 text-[#ee6c4d]" />
                  <span>98% water recycling rate</span>
                </li>
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <Shield className="h-5 w-5 text-[#ee6c4d]" />
                  <span>EPA compliant processes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#1890d5]">
              <div className="text-[#1890d5] mb-6">
                <Gauge className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#293241]">Operational Efficiency</h3>
              <p className="text-[#293241]/70 mb-4">
                Our streamlined processes and advanced technology ensure faster completion times 
                without compromising on quality.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <Clock className="h-5 w-5 text-[#ee6c4d]" />
                  <span>Rapid project completion</span>
                </li>
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <Ship className="h-5 w-5 text-[#ee6c4d]" />
                  <span>Minimal downtime</span>
                </li>
                <li className="flex items-center gap-2 text-[#293241]/70">
                  <BadgeCheck className="h-5 w-5 text-[#ee6c4d]" />
                  <span>Quality assurance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Certified Excellence",
                description: "ISO 9001:2015 certified operations ensuring highest quality standards"
              },
              {
                icon: HeartHandshake,
                title: "Customer Focus",
                description: "Dedicated project managers for personalized service"
              },
              {
                icon: Shield,
                title: "Safety First",
                description: "Comprehensive safety protocols exceeding industry standards"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock technical assistance and emergency response"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/50 p-6 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="text-[#1890d5] mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#293241]">{item.title}</h3>
                <p className="text-[#293241]/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#293241]">Our Services</h2>
          <p className="text-xl text-center mb-16 text-[#293241]/80">
            Elevating Maritime Solutions with Advanced Waterjet Technology
          </p>
        </div>
        {services.map((service, index) => (
          <ServiceSection key={service.title} service={service} index={index} />
        ))}
      </section>

      {/* Materials Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-[#293241]">Materials We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Steel',
              'Aluminum',
              'Stainless Steel',
              'Marine-grade Materials',
              'Composite Materials',
              'High-strength Alloys',
              'Specialized Coatings',
              'Maritime Components'
            ].map((material) => (
              <div key={material} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-[#293241] font-medium">{material}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm2 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialTab={contactFormType}
        variant="modal"
      />
    </main>
  );
}
