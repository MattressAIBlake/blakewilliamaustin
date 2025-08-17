'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export default function Other() {
  const router = useRouter()

  return (
    <main className="min-h-screen relative">
      {/* Hero Section with Same Background as Home */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Same as home page */}
        <div className="absolute inset-0">
          <Image
            src="/Personalheroimage.png"
            alt="Futuristic landscape with mountains"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Header Navigation */}
        <div className="absolute top-8 left-8 z-50">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 border border-white/30"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>

        {/* Content Container */}
        <div className="relative z-20 flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 max-w-6xl mx-auto">
          
          {/* CLI Terminal Container */}
          <motion.div
            className="bg-gray-900 rounded-xl shadow-2xl max-w-5xl mx-auto border border-gray-700 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono ml-4">blake@terminal ~ cat other-projects.md</div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-8 text-left">
              <motion.div
                className="font-mono text-sm leading-relaxed space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <div className="text-green-400"># Other Projects</div>
                <div className="text-gray-300">
                  Experimental and fun projects that explore new ideas and push boundaries.
                </div>
                
                <div className="text-blue-400 mt-6">## Featured Projects</div>
                
                <div className="text-yellow-400 mt-4">### Clinical Trials AI</div>
                <div className="text-gray-300">
                  **URL**: <a href="https://clinicaltrials.replit.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">clinicaltrials.replit.app</a>
                </div>
                <div className="text-gray-300">
                  **Description**: AI for searching clinical trials
                </div>
                
                <div className="text-yellow-400 mt-4">### MyAppStarter</div>
                <div className="text-gray-300">
                  **URL**: <a href="https://myappstarter.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">myappstarter.com</a>
                </div>
                <div className="text-gray-300">
                  **Description**: Solving the idea maze
                </div>

                <div className="text-blue-400 mt-6">## Philosophy</div>
                <div className="text-gray-300">
                  Where we are going there are no codes
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  )
} 