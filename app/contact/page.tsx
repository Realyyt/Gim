'use client'
import { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
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
      {/* Contact Header Section */}
      <div className="relative bg-gradient-to-r from-stone-100 to-stone-200 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.03)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.03)_75%)] bg-[length:128px_128px]" />
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for inquiries about our products, services, or support.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative bg-gradient-to-r from-stone-100 to-stone-200">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.01),rgba(0,0,0,0.01)_2px,transparent_2px,transparent_8px)]" />
        <ContactForm />
      </div>

      {/* 
      <div className="relative bg-gradient-to-r from-stone-200 to-stone-300 h-[400px]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.02)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.02)_75%)] bg-[length:128px_128px]" />
        <div className="h-full w-full">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-600">Map placeholder</p>
          </div>
        </div>
      </div> */}

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