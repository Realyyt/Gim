'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle } from 'lucide-react'

interface DemoRequestFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function DemoRequestForm({ isOpen, onClose }: DemoRequestFormProps) {
  const [formData, setFormData] = useState({
    model: '',
    name: '',
    organization: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true);
    setStatus('loading');

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send demo request');
      
      setStatus('success');
      document.body.style.overflow = 'unset'
      
      // Clear form
      setFormData({
        model: '',
        name: '',
        organization: '',
        phone: '',
        email: '',
        preferredDate: '',
        preferredTime: ''
      });

      // Show success modal instead of redirecting
      onClose();
      setShowSuccessModal(true);

    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleClose = () => {
    document.body.style.overflow = 'unset' // Re-enable scrolling on close
    onClose()
  }

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
    document.body.style.overflow = 'unset';
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99999] p-4 overflow-y-auto"
            onClick={handleClose}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#293241] p-8 rounded-xl shadow-xl max-w-md w-full relative my-auto z-[99999]"
            >
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>

              <h2 className="text-3xl font-bold text-white mb-6 text-center">Schedule a Demo</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-white text-sm mb-1 block">Select Model</label>
                  <select
                    required
                    value={formData.model}
                    onChange={e => setFormData({...formData, model: e.target.value})}
                    className="w-full p-3 rounded-md bg-[#1e2530] text-white border border-gray-700 focus:border-[#ee6c4d] focus:ring-1 focus:ring-[#ee6c4d] outline-none"
                  >
                    <option value="">Choose a model...</option>
                    <option value="SJ150">Katana SJ150</option>
                    <option value="SJ450">Katana SJ450</option>
                    <option value="SJ700">Katana SJ700</option>
                  </select>
                </div>

                {/* Name field */}
                <div>
                  <label className="text-white text-sm mb-1 block">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 rounded-md bg-[#1e2530] text-white border border-gray-700 focus:border-[#ee6c4d] focus:ring-1 focus:ring-[#ee6c4d] outline-none"
                    placeholder="Your Name"
                  />
                </div>

                {/* Organization field */}
                <div>
                  <label className="text-white text-sm mb-1 block">Organization</label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={e => setFormData({...formData, organization: e.target.value})}
                    className="w-full p-3 rounded-md bg-[#1e2530] text-white border border-gray-700 focus:border-[#ee6c4d] focus:ring-1 focus:ring-[#ee6c4d] outline-none"
                    placeholder="Your Organization"
                  />
                </div>

                {/* Contact fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm mb-1 block">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-3 rounded-md bg-[#1e2530] text-white border border-gray-700 focus:border-[#ee6c4d] focus:ring-1 focus:ring-[#ee6c4d] outline-none"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-1 block">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full p-3 rounded-md bg-[#1e2530] text-white border border-gray-700 focus:border-[#ee6c4d] focus:ring-1 focus:ring-[#ee6c4d] outline-none"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                {/* Date and Time fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm mb-1 block">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={e => setFormData({...formData, preferredDate: e.target.value})}
                      className="w-full p-3 rounded-md bg-[#1e2530] text-white border border-gray-700 focus:border-[#ee6c4d] focus:ring-1 focus:ring-[#ee6c4d] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-1 block">Preferred Time</label>
                    <input
                      type="time"
                      required
                      value={formData.preferredTime}
                      onChange={e => setFormData({...formData, preferredTime: e.target.value})}
                      className="w-full p-3 rounded-md bg-[#1e2530] text-white border border-gray-700 focus:border-[#ee6c4d] focus:ring-1 focus:ring-[#ee6c4d] outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-[#ee6c4d] text-white font-semibold rounded-md hover:bg-[#e85d3d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
                  ) : (
                    'Schedule Demo'
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center mt-2">
                    Failed to send request. Please try again.
                  </p>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99999] p-4"
            onClick={handleCloseSuccess}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full relative"
            >
              <button
                onClick={handleCloseSuccess}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mx-auto w-16 h-16 mb-6"
              >
                <CheckCircle className="w-16 h-16 text-green-500" />
              </motion.div>
              
              <h2 className="text-3xl font-bold text-[#293241] mb-4 text-center">
                Thank You for Requesting a Demo!
              </h2>
              
              <p className="text-[#293241]/80 mb-8 text-center">
                We have received your demo request and our team will contact you shortly to schedule your demonstration.
              </p>
              
              <button
                onClick={handleCloseSuccess}
                className="w-full bg-[#ee6c4d] hover:bg-[#ee6c4d]/90 text-white py-3 px-8 rounded-lg
                  transition-all duration-300 transform hover:scale-[1.02] text-center"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}