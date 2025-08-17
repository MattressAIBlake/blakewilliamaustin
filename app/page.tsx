'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Home() {
  const router = useRouter()

  const navigateToPage = (page: string) => {
    router.push(`/${page}`)
  }

  // Define precise mountain peak coordinates based on your image dimensions (1425x900)
  // These coordinates should match the exact pixel positions of the mountain peaks
  // Measurements: 1 inch ≈ 96 pixels at standard DPI
  const mountainPeaks = {
    mattress: { x: 712, y: 225 }, // Left mountain peak 
    clients: { x: 653, y: 450 },  // Center mountain - moved up 0.5" (48px) from previous position
    other: { x: 998, y: 63 },     // Right mountain peak - moved up 1" (96px) from previous position
    aboutMe: { x: 898, y: 666 }   // About button - moved down 1" (96px) from previous position
  }

  // Helper function to convert image coordinates to responsive percentages
  const getResponsivePosition = (coord: {x: number, y: number}) => ({
    left: `${(coord.x / 1425) * 100}%`,
    top: `${(coord.y / 900) * 100}%`,
    transform: 'translate(-50%, -50%)' // Centers icon on exact coordinate
  })

  return (
    <main className="min-h-screen relative">
      {/* Desktop Layout - Optimized with Precise Positioning */}
      <section className="hidden lg:block relative w-full min-h-screen bg-black flex items-center justify-center">
        {/* Aspect Ratio Container - Locks to 1425:900 ratio and centers in viewport */}
        <div className="relative w-full max-w-none aspect-[1425/900] max-h-screen">
          {/* Background Image - Maintains aspect ratio within container */}
          <div className="absolute inset-0">
            <Image
              src="/Personalheroimage.png"
              alt="Futuristic landscape with mountains"
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Precisely Positioned Icons */}
          <div className="absolute inset-0 z-10">
            {/* Mattress Industry - Left Mountain Peak */}
            <motion.button
              onClick={() => navigateToPage('mattress')}
              className="absolute text-6xl hover:scale-110 transition-all duration-300 cursor-pointer group"
              style={getResponsivePosition(mountainPeaks.mattress)}
              aria-label="Navigate to Mattress Industry projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.2 }}
            >
              <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">
                🛏️
              </span>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Mattress Stuff
              </div>
            </motion.button>

            {/* Client Work - Center Mountain */}
            <motion.button
              onClick={() => navigateToPage('clients')}
              className="absolute text-6xl hover:scale-110 transition-all duration-300 cursor-pointer group"
              style={getResponsivePosition(mountainPeaks.clients)}
              aria-label="Navigate to Client work"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileHover={{ scale: 1.2 }}
            >
              <span className="drop-shadow-[0_0_30px_rgba(255,215,0,1)] animate-pulse">
                💵
              </span>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Client Stuff
              </div>
            </motion.button>

            {/* Other Projects - Right Mountain Peak */}
            <motion.button
              onClick={() => navigateToPage('other')}
              className="absolute text-6xl hover:scale-110 transition-all duration-300 cursor-pointer group"
              style={getResponsivePosition(mountainPeaks.other)}
              aria-label="Navigate to Other projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              whileHover={{ scale: 1.2 }}
            >
              <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">
                🧠
              </span>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Other Stuff
              </div>
            </motion.button>

            {/* About Me Button */}
            <motion.button
              onClick={() => navigateToPage('about')}
              className="absolute bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 border border-white/30"
              style={getResponsivePosition(mountainPeaks.aboutMe)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-medium">👋 About Me</span>
            </motion.button>
          </div>

          {/* Desktop Text */}
          <motion.div 
            className="absolute top-8 left-8 z-20 text-white max-w-md"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl font-bold drop-shadow-lg mb-2">
              Blake William Austin
            </h1>
            <p className="text-base font-medium drop-shadow-lg leading-relaxed opacity-90 mb-2">
              I can build simple apps (its easy), I enjoy building things that destroy BS and bring helpful truth to light
            </p>
            <p className="text-lg font-mono font-bold drop-shadow-lg opacity-90">
              p(doom)=25%
            </p>
          </motion.div>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-30">
            <button
              onClick={() => navigateToPage('about')}
              className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300 hover:scale-125"
              aria-label="About"
            />
            <button
              onClick={() => navigateToPage('mattress')}
              className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300 hover:scale-125"
              aria-label="Mattress"
            />
            <button
              onClick={() => navigateToPage('other')}
              className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300 hover:scale-125"
              aria-label="Other"
            />
            <button
              onClick={() => navigateToPage('clients')}
              className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300 hover:scale-125"
              aria-label="Clients"
            />
          </div>
        </div>
      </section>

      {/* Tablet Layout - Simplified Grid */}
      <section className="hidden md:block lg:hidden relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="relative h-screen flex flex-col">
          {/* Hero Section */}
          <div className="relative h-1/2 overflow-hidden">
            <Image
              src="/Personalheroimage.png"
              alt="Futuristic landscape with mountains"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
            
            <motion.div 
              className="absolute top-8 left-8 right-8 z-20 text-white text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold drop-shadow-lg mb-3">
                Blake William Austin
              </h1>
              <p className="text-lg font-medium drop-shadow-lg leading-relaxed opacity-90 max-w-2xl mx-auto">
                I can build simple apps (its easy), I enjoy building things that destroy BS and bring helpful truth to light
              </p>
            </motion.div>
          </div>

          {/* Navigation Grid */}
          <div className="flex-1 p-8">
            <div className="grid grid-cols-2 gap-6 h-full">
              {/* Mattress */}
              <motion.button
                onClick={() => navigateToPage('mattress')}
                className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border border-gray-600/50 shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-5xl mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">🛏️</span>
                <h3 className="text-white text-xl font-bold mb-1">Mattress Stuff</h3>
                <p className="text-gray-300 text-sm">Sleep solutions</p>
              </motion.button>

              {/* Clients */}
              <motion.button
                onClick={() => navigateToPage('clients')}
                className="bg-gradient-to-br from-yellow-900/60 to-orange-900/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:from-yellow-800/70 hover:to-orange-800/70 transition-all duration-300 border border-yellow-600/30 shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-5xl mb-3 drop-shadow-[0_0_30px_rgba(255,215,0,1)] animate-pulse">💵</span>
                <h3 className="text-white text-xl font-bold mb-1">Client Stuff</h3>
                <p className="text-gray-300 text-sm">Custom solutions</p>
              </motion.button>

              {/* Other */}
              <motion.button
                onClick={() => navigateToPage('other')}
                className="bg-gradient-to-br from-purple-900/60 to-indigo-900/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:from-purple-800/70 hover:to-indigo-800/70 transition-all duration-300 border border-purple-500/30 shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-5xl mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">🧠</span>
                <h3 className="text-white text-xl font-bold mb-1">Other Stuff</h3>
                <p className="text-gray-300 text-sm">Experiments</p>
              </motion.button>

              {/* About */}
              <motion.button
                onClick={() => navigateToPage('about')}
                className="bg-gradient-to-br from-blue-900/60 to-cyan-900/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:from-blue-800/70 hover:to-cyan-800/70 transition-all duration-300 border border-blue-500/30 shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-5xl mb-3">👋</span>
                <h3 className="text-white text-xl font-bold mb-1">About Me</h3>
                <p className="text-gray-300 text-sm">Get to know me</p>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Layout - Completely Redesigned */}
      <section className="md:hidden relative min-h-screen bg-black">
        {/* Mobile Hero - Compact */}
        <div className="relative h-[40vh] overflow-hidden">
          <Image
            src="/Personalheroimage.png"
            alt="Futuristic landscape with mountains"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          <motion.div 
            className="absolute bottom-6 left-6 right-6 z-20 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl font-bold drop-shadow-lg mb-2">
              Blake William Austin
            </h1>
            <p className="text-sm font-medium drop-shadow-lg leading-relaxed opacity-90">
              Building apps that destroy BS and bring truth to light
            </p>
          </motion.div>
        </div>

        {/* Mobile Navigation - Modern Cards */}
        <div className="flex-1 px-4 py-6 space-y-4">
          {/* Main Navigation */}
          <div className="space-y-3">
            <motion.button
              onClick={() => navigateToPage('mattress')}
              className="w-full bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-4 text-left group active:scale-95 transition-all duration-200 border border-gray-700/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🛏️</span>
                  <div>
                    <h3 className="text-white font-bold">Mattress Industry</h3>
                    <p className="text-gray-400 text-sm">Sleep tech & solutions</p>
                  </div>
                </div>
                <div className="text-gray-500 group-active:text-white transition-colors">→</div>
              </div>
            </motion.button>

            <motion.button
              onClick={() => navigateToPage('clients')}
              className="w-full bg-gradient-to-r from-yellow-900/40 to-orange-900/40 rounded-xl p-4 text-left group active:scale-95 transition-all duration-200 border border-yellow-600/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">💵</span>
                  <div>
                    <h3 className="text-white font-bold">Client Work</h3>
                    <p className="text-gray-400 text-sm">Custom solutions & apps</p>
                  </div>
                </div>
                <div className="text-gray-500 group-active:text-white transition-colors">→</div>
              </div>
            </motion.button>

            <motion.button
              onClick={() => navigateToPage('other')}
              className="w-full bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-xl p-4 text-left group active:scale-95 transition-all duration-200 border border-purple-500/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🧠</span>
                  <div>
                    <h3 className="text-white font-bold">Other Projects</h3>
                    <p className="text-gray-400 text-sm">Experiments & fun stuff</p>
                  </div>
                </div>
                <div className="text-gray-500 group-active:text-white transition-colors">→</div>
              </div>
            </motion.button>

            <motion.button
              onClick={() => navigateToPage('about')}
              className="w-full bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-xl p-4 text-left group active:scale-95 transition-all duration-200 border border-blue-500/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">👋</span>
                  <div>
                    <h3 className="text-white font-bold">About Me</h3>
                    <p className="text-gray-400 text-sm">Get to know the vibe coder</p>
                  </div>
                </div>
                <div className="text-gray-500 group-active:text-white transition-colors">→</div>
              </div>
            </motion.button>
          </div>

          {/* Footer */}
          <motion.div 
            className="pt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-gray-500 text-xs">
              Tap to explore my work
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 