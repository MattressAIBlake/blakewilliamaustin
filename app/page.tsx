'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const navigateToPage = (page: string) => {
    router.push(`/${page}`)
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to subscribe. Please try again.')
        setIsSubmitting(false)
        return
      }

      setIsSubmitted(true)
      setIsSubmitting(false)
      setEmail('')
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setError('Something went wrong. Please try again.')
      setIsSubmitting(false)
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (error) setError('')
  }

  // Define precise coordinates as percentages of image dimensions
  // These percentages will maintain perfect alignment regardless of screen size
  const iconPositions = {
    mattress: { left: '49.0%', top: '26.0%' },   // Left pyramid peak
    clients: { left: '46.0%', top: '49.0%' },    // Center pyramid peak
    other: { left: '68.5%', top: '8.0%' },       // Right pyramid peak
    tools: { left: '20.0%', top: '50.0%' },      // Man's backpack
    aboutMe: { left: '66.0%', top: '68.3%' }     // Round building door
  }

  return (
    <main className="min-h-screen relative">
      {/* Desktop Layout - Perfectly Responsive at Any Aspect Ratio */}
      <section className="hidden lg:block relative w-full min-h-screen bg-black overflow-hidden">
        {/* Full viewport container */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Aspect-ratio-locked container that scales to fit */}
          <div className="relative w-full h-full max-w-[177.78vh] max-h-[56.25vw]">
            {/* Background Image fills this exact container */}
            <div className="absolute inset-0">
              <Image
                src="/Personalheroimage.png"
                alt="Futuristic landscape with mountains"
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Icon Layer - Icons position relative to image dimensions */}
            <div className="absolute inset-0 z-10">
              {/* Mattress Industry - Left Pyramid Peak */}
              <motion.button
                onClick={() => navigateToPage('mattress')}
                className="absolute text-6xl transition-all duration-300 cursor-pointer group"
                style={{
                  left: iconPositions.mattress.left,
                  top: iconPositions.mattress.top,
                  transform: 'translate(-50%, -50%)'
                }}
                aria-label="Navigate to Mattress Industry projects"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] animate-pulse">
                  🛏️
                </span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  Mattress Stuff
                </div>
              </motion.button>

              {/* Client Work - Center Pyramid Peak */}
              <motion.button
                onClick={() => navigateToPage('clients')}
                className="absolute text-6xl transition-all duration-300 cursor-pointer group"
                style={{
                  left: iconPositions.clients.left,
                  top: iconPositions.clients.top,
                  transform: 'translate(-50%, -50%)'
                }}
                aria-label="Navigate to Client work"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="drop-shadow-[0_0_30px_rgba(255,215,0,1)] animate-pulse">
                  💵
                </span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  Client Stuff
                </div>
              </motion.button>

              {/* Other Projects - Right Pyramid Peak */}
              <motion.button
                onClick={() => navigateToPage('other')}
                className="absolute text-6xl transition-all duration-300 cursor-pointer group"
                style={{
                  left: iconPositions.other.left,
                  top: iconPositions.other.top,
                  transform: 'translate(-50%, -50%)'
                }}
                aria-label="Navigate to Other projects"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] animate-pulse">
                  🧠
                </span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  Other Stuff
                </div>
              </motion.button>

              {/* Tools - On the Man's Backpack */}
              <motion.button
                onClick={() => navigateToPage('tools')}
                className="absolute text-6xl transition-all duration-300 cursor-pointer group"
                style={{
                  left: iconPositions.tools.left,
                  top: iconPositions.tools.top,
                  transform: 'translate(-50%, -50%)'
                }}
                aria-label="Navigate to Tools"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] animate-pulse">
                  🛠️
                </span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  Tools
                </div>
              </motion.button>

              {/* About Me Button - Round Building Door */}
              <motion.button
                onClick={() => navigateToPage('about')}
                className="absolute bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/30"
                style={{
                  left: iconPositions.aboutMe.left,
                  top: iconPositions.aboutMe.top,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium">👋 About Me</span>
              </motion.button>
            </div>

            {/* Text Overlay - Positioned relative to viewport, not image */}
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
            <p className="text-xs font-mono font-bold drop-shadow-lg opacity-90">
              p(doom)=25%
            </p>
            </motion.div>

            {/* Newsletter - Positioned relative to viewport */}
            <motion.div
              className="absolute bottom-20 left-8 z-20 w-full max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                <h3 className="text-white text-lg font-bold mb-2">📬 Monthly Newsletter</h3>
                <p className="text-gray-200 text-sm mb-4 opacity-90">
                  Work, life, family, opinions—everything. Join the vibe.
                </p>
                
{isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/20 border border-green-400/50 rounded-lg p-3 text-center"
                  >
                    <p className="text-green-200 font-medium">✓ You're in! Check your email.</p>
                  </motion.div>
                ) : (
                  <>
                    <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="your@email.com"
                        className="flex-1 bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                        required
                        aria-label="Email address for newsletter"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                        aria-label="Subscribe to newsletter"
                      >
                        {isSubmitting ? '...' : 'Join'}
                      </button>
                    </form>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-300 text-sm mt-2"
                      >
                        {error}
                      </motion.p>
                    )}
                  </>
                )}
              </div>
            </motion.div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-30">
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
              <button
                onClick={() => navigateToPage('tools')}
                className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300 hover:scale-125"
                aria-label="Tools"
              />
            </div>
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

              {/* Tools */}
              <motion.button
                onClick={() => navigateToPage('tools')}
                className="bg-gradient-to-br from-emerald-900/60 to-teal-900/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:from-emerald-800/70 hover:to-teal-800/70 transition-all duration-300 border border-emerald-500/30 shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-5xl mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">🛠️</span>
                <h3 className="text-white text-xl font-bold mb-1">Tools</h3>
                <p className="text-gray-300 text-sm">My tech stack</p>
              </motion.button>

              {/* About */}
              <motion.button
                onClick={() => navigateToPage('about')}
                className="bg-gradient-to-br from-blue-900/60 to-cyan-900/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:from-blue-800/70 hover:to-cyan-800/70 transition-all duration-300 border border-blue-500/30 shadow-xl col-span-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-5xl mb-3">👋</span>
                <h3 className="text-white text-xl font-bold mb-1">About Me</h3>
                <p className="text-gray-300 text-sm">Get to know me</p>
              </motion.button>
            </div>

            {/* Tablet Newsletter */}
            <motion.div
              className="max-w-2xl mx-auto mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                <h3 className="text-white text-xl font-bold mb-2">📬 Monthly Newsletter</h3>
                <p className="text-gray-200 text-base mb-4 opacity-90">
                  Work, life, family, opinions—everything. Join the vibe.
                </p>
                
{isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/20 border border-green-400/50 rounded-lg p-4 text-center"
                  >
                    <p className="text-green-200 font-medium text-lg">✓ You're in! Check your email.</p>
                  </motion.div>
                ) : (
                  <>
                    <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="your@email.com"
                        className="flex-1 bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-base"
                        required
                        aria-label="Email address for newsletter"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 text-base"
                        aria-label="Subscribe to newsletter"
                      >
                        {isSubmitting ? '...' : 'Join'}
                      </button>
                    </form>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-300 text-base mt-3"
                      >
                        {error}
                      </motion.p>
                    )}
                  </>
                )}
              </div>
            </motion.div>
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
              onClick={() => navigateToPage('tools')}
              className="w-full bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-xl p-4 text-left group active:scale-95 transition-all duration-200 border border-emerald-500/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🛠️</span>
                  <div>
                    <h3 className="text-white font-bold">Tools</h3>
                    <p className="text-gray-400 text-sm">My tech stack</p>
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
              transition={{ duration: 0.5, delay: 0.6 }}
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

          {/* Mobile Newsletter */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md rounded-xl p-5 border border-gray-700/50">
              <h3 className="text-white text-lg font-bold mb-2">📬 Monthly Newsletter</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Work, life, family, opinions—everything. Join the vibe.
              </p>
              
{isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-400/50 rounded-lg p-3 text-center"
                >
                  <p className="text-green-200 font-medium">✓ You're in! Check your email.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="your@email.com"
                    className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    required
                    aria-label="Email address for newsletter"
                  />
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-300 text-sm"
                    >
                      {error}
                    </motion.p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                    aria-label="Subscribe to newsletter"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Newsletter'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

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