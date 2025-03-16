import type { FC } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { useLanguage } from '../LanguageProvider'

interface BurgerMenuProps {
  isOpen: boolean
  toggleMenu: () => void
  isLargeScreen: boolean
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, toggleMenu, isLargeScreen }) => {
  const { language, setLanguage, translations } = useLanguage()
  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuItems = [
    { id: "about-me", text: translations.navigation.aboutMe },
    { id: "skills", text: translations.navigation.skills },
    { id: "apple-swift-challenge", text: translations.navigation.Studentdev },
    { id: "other-projects", text: translations.navigation.otherProjects },
    { id: "contact", text: translations.navigation.contact }
  ]

  const containerVariants = {
    closed: {
      width: 0,
      transition: { 
        duration: 1.2,
        ease: "easeInOut"
      }
    },
    open: {
      width: isLargeScreen ? "33.333333%" : "100%",
      transition: { 
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  }

  const menuItemVariants = {
    closed: {
      x: -100,
      opacity: 0,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 1 + (i * 0.2),
        duration: 0.8,
        ease: "easeOut"
      }
    })
  }

  return (
    <>
      {/* Overlay pour fermer au clic */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={toggleMenu}
        />
      )}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={containerVariants}
        className="fixed top-0 left-0 h-full backdrop-blur-lg bg-black/30 z-50 rounded-r-lg overflow-hidden"
      >
        <div className="flex flex-col items-end justify-between h-full p-8">
          <div className="flex flex-col items-end justify-center w-full h-full">
            <AnimatePresence mode="wait">
              {isOpen && menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="w-full mb-8 pr-8" // Ajout de padding-right
                >
                  <Link
                    href={`#${item.id}`}
                    className="text-2xl text-white hover:text-gray-300 transition-all duration-500 text-right block w-full"
                    onClick={toggleMenu}
                  >
                    {item.text}
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Language Switcher */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ delay: isOpen ? 1.5 : 0 }}
            className="flex gap-4 pr-8"
          >
            <button
              onClick={() => setLanguage('en')}
              className={`text-white px-3 py-1 rounded-full transition-all ${
                language === 'en'
                  ? 'bg-white/20 scale-110'
                  : 'hover:bg-white/10'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`text-white px-3 py-1 rounded-full transition-all ${
                language === 'fr'
                  ? 'bg-white/20 scale-110'
                  : 'hover:bg-white/10'
              }`}
            >
              FR
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default BurgerMenu