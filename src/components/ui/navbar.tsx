"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import BurgerMenu from "./BurgerMenu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 z-[60] p-4">
        <button onClick={toggleMenu} className="focus:outline-none text-white" aria-label="Toggle menu">
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>
      <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} isLargeScreen={isLargeScreen} />
    </>
  )
}

export default Navbar