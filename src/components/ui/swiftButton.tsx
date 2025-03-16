"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

type GradientButtonProps = {
  children?: React.ReactNode
  onClick?: () => void
  href?: string
  type?: "link" | "router" | "location"
  openInNewTab?: boolean
  className?: string
  width?: string | number
  fullWidth?: boolean
}

export default function GradientButton({
  children = "Bouton",
  onClick,
  href,
  type = "link",
  openInNewTab = false,
  className = "",
  width,
  fullWidth = false,
}: GradientButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (href) {
      if (type === "router") {
        if (openInNewTab) {
          window.open(href, "_blank", "noopener,noreferrer")
        } else {
          router.push(href)
        }
      } else if (type === "location") {
        if (openInNewTab) {
          window.open(href, "_blank", "noopener,noreferrer")
        } else {
          window.location.href = href
        }
      }
    }
  }

  // Définir le style pour la largeur
  const widthStyle: React.CSSProperties = {}

  if (width) {
    // Si width est un nombre, on ajoute "px"
    widthStyle.width = typeof width === "number" ? `${width}px` : width
  } else if (fullWidth) {
    widthStyle.width = "100%"
  }

  const buttonStyle = {
    background: "linear-gradient(135deg, #2a3baa 0%, #7b42ab 100%)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
    ...widthStyle,
  }

  const buttonClasses = cn(
    "relative overflow-hidden rounded-full px-6 py-3 font-medium text-white shadow-lg",
    "transition-all duration-300 ease-in-out",
    isPressed ? "scale-95" : isHovered ? "scale-105" : "scale-100",
    fullWidth && "w-full",
    className,
  )

  const buttonContent = (
    <>
      <div className="relative z-10">{children}</div>

      {/* Orange accent shape */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 transform transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #ff7b3d 0%, #ff5e62 100%)",
          clipPath: "path('M100,0 C60,20 40,50 60,100 L100,100 Z')",
          opacity: isHovered ? 0.9 : 0.7,
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      />

      {/* Glossy overlay */}
      <div
        className="absolute left-0 top-0 h-1/2 w-full opacity-20 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)",
          opacity: isHovered ? 0.3 : 0.2,
        }}
      />
    </>
  )

  // Si nous avons un href et que le type est "link", utiliser le composant Link
  if (href && type === "link") {
    return (
      <Link
        href={href}
        className={buttonClasses}
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          setIsPressed(false)
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
      >
        {buttonContent}
      </Link>
    )
  }

  // Sinon, utiliser un bouton standard
  return (
    <button
      className={buttonClasses}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsPressed(false)
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={handleClick}
    >
      {buttonContent}
    </button>
  )
}

