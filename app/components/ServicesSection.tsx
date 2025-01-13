'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TradeUpProgram() {
  return (
    <div className="relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black">KATANA </span>
            <span className="text-[#ee6c4d]">PRO </span>
            <span className="text-black">TRADE-UP PROGRAM</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-black">
            32% discount for current KATANA owners!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-black">BUY A NEW KATANA PRO</h3>
              <p className="text-gray-600">
                KATANA Pro is our most powerful and productive waterjet.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-black">GET 32% IMMEDIATE DISCOUNT!</h3>
              <p className="text-gray-600">
                Trade-in your current KATANA, and we&apos;ll take 32% off the price of a KATANA Pro. You save upfront (not a rebate or refund).
              </p>
              <Link 
                href="/contact"
                className="inline-block px-6 py-3 bg-[#ee6c4d] text-white font-semibold rounded-md hover:bg-[#e85d3d] transition-colors"
              >
                GET 32% OFF →
              </Link>
            </motion.div>
          </div>

          {/* Center Column - Machine Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <Image
              src="/sj700.png"
              alt="KATANA Pro Waterjet"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Right Column */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-black">NO DOWNTIME</h3>
              <p className="text-gray-600">
                We&apos;ll ship your KATANA Pro first. Return your current KATANA after you get the new KATANA Pro.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-black">WE PAY SHIPPING OF BOTH MACHINES</h3>
              <p className="text-gray-600">
                We cover shipping of both your new KATANA Pro, plus return of your current machine
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}