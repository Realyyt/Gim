'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import DemoRequestForm from './DemoRequestForm'

export default function TradeUpProgram() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          {/*<motion.div 
            className="text-2xl sm:text-4xl font-bold text-[#ee6c4d] mb-4"
            initial={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            35% discount for this NEW YEAR!
          </motion.div>*/}
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xl sm:text-3xl font-bold">
            <span className="text-black">Upgrade Your </span>
            {/*<span className="text-gray-500 line-through">15 Lakhs</span>*/}
            <span className="text-[#ee6c4d]">CNC Router/Plasma </span>
            <span className="text-black">with KATANA Waterjet series </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start px-4 sm:px-0">
          {/* Left Column */}
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-black">Why Limit Yourself to One Material When You Can Cut Them All?</h3>
              {/*<p className="text-base sm:text-lg text-gray-600">
                Get Katana SJ150 for <span className="text-[#ee6c4d] font-bold">JUST ₹5 LAKH</span> down 
              </p>*/}
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => setIsFormOpen(true)}
                className="w-full sm:w-auto inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#ee6c4d] text-white text-base sm:text-lg font-semibold rounded-md hover:bg-[#e85d3d] transition-colors"
              >
                SCHEDULE A DEMO
              </button>
            </div>
          </div>

          {/* Center Column - Machine Image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8 
            }}
            className="relative h-[250px] sm:h-[400px] w-full transform hover:scale-105 transition-transform duration-300"
            style={{
              filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
            }}
          >
            <Image
              src="/sj451.png"
              alt="KATANA SJ150 Waterjet"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          {/* Right Column */}
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-3">
              <h3 className="text-xl sm:text-3xl font-bold text-black">Zero Downtime Promise</h3>
              <p className="text-base sm:text-lg text-gray-600">
                Experience smooth transition and increase your productivity.
              </p>
            </div>
          </div>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xl sm:text-3xl font-bold mb-8 mt-8 sm:mt-0 px-4 sm:px-0">
          {['Revolutionize Your Workshop', 'Upgrade the Way You Cut', 'Cut anything, Including your cost!'].map((text, index) => (
            <motion.h2 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                  delay: index * 0.3
                }
              }}
              viewport={{ once: true }}
              className="text-black text-center"
            >
              {text}
            </motion.h2>
          ))}
        </div>

      </div>

      <DemoRequestForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </div>
  )
} 