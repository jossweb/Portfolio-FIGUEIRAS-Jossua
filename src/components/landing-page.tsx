"use client"
import { motion } from "framer-motion"
import { useLanguage } from './LanguageProvider'

export default function LandingPage() {
  const { translations } = useLanguage()

  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>
      <motion.div
        className="relative z-10 text-center opacity-100"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          {translations.landing.title}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          {translations.landing.subtitle}
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full inline-block"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          {translations.navigation.contact}
        </motion.a>
      </motion.div>
    </section>
  )
}