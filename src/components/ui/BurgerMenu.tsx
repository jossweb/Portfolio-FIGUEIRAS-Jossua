import type { FC } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"

interface BurgerMenuProps {
  isOpen: boolean
  toggleMenu: () => void
  isLargeScreen: boolean
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, toggleMenu, isLargeScreen }) => {
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

  const menuItems = ["About me", "Skils", "Ai project", "Other projects", "Contact"]

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
        className="fixed top-0 left-0 h-full backdrop-blur-lg bg-black/30 z-40 rounded-r-lg overflow-hidden"
      >
        <div className="flex flex-col items-end justify-center h-full p-8">
          <AnimatePresence mode="wait">
            {isOpen && menuItems.map((item, index) => (
              <motion.div
                key={item}
                custom={index}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="w-full mb-8 pr-8" // Ajout de padding-right
              >
                <Link
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-2xl text-white hover:text-gray-300 transition-all duration-500 text-right block w-full"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  )
}

export default BurgerMenu