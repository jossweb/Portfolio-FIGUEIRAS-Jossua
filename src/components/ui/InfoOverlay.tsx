import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { useLanguage } from '../LanguageProvider'

export default function InfoOverlay() {
  const { translations } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 10000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-x-0 bottom-8 z-[100] flex justify-center items-center px-4"
        >
          <div className="bg-black/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/10 shadow-lg max-w-2xl w-full mx-auto">
            <p className="text-white/90 text-base text-center">
              {translations.cookie.message}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
