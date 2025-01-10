'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto w-16 h-16 mb-6"
        >
          <CheckCircle className="w-16 h-16 text-green-500" />
        </motion.div>
        
        <h1 className="text-3xl font-bold text-white mb-4">
          Thank You for Contacting Us!
        </h1>
        
        <p className="text-white mb-8">
          We have received your message and will get back to you as soon as possible.
        </p>
        
        <Link 
          href="/"
          className="inline-block bg-[#ee6c4d] hover:bg-[#ee6c4d]/90 text-white py-3 px-8 rounded-lg
            transition-all duration-300 transform hover:scale-[1.02]"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
} 