'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const tools = [
  {
    name: 'Cursor',
    description: 'AI-powered code editor',
    icon: '💻',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    name: 'Replit',
    description: 'Collaborative coding platform',
    icon: '🚀',
    gradient: 'from-orange-600 to-red-600',
  },
  {
    name: 'Zapier',
    description: 'Automation & workflow integration',
    icon: '⚡',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    name: 'HubSpot',
    description: 'CRM & marketing automation',
    icon: '🎯',
    gradient: 'from-rose-600 to-pink-600',
  },
]

export default function ToolsPage() {
  const router = useRouter()

  const handleBackClick = () => {
    router.push('/')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <button
            onClick={handleBackClick}
            className="mb-8 text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
            aria-label="Back to home"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
            <span>Back to Home</span>
          </button>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            🛠️ My Tools
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            The tools I'm comfortable with and use to build stuff
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-start gap-4">
                <div className={`text-5xl bg-gradient-to-br ${tool.gradient} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {tool.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {tool.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span>💡</span>
            <span>Why These Tools?</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I focus on tools that help me ship fast and iterate quickly. Each of these platforms 
            enables me to build, automate, and deploy without unnecessary complexity. The goal is 
            always to destroy BS and bring helpful truth to light—efficiently.
          </p>
        </motion.div>
      </div>
    </main>
  )
}

