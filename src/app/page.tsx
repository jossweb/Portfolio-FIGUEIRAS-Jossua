"use client"

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="absolute top-0 left-0 w-full bg-white bg-opacity-25 flex justify-between items-center p-4 z-50">
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center space-x-8">
          <Link href="#about-me" className="text-black">
            About Me
          </Link>
          <Link href="#my-projects" className="text-black">
            My Projects
          </Link>
          <Link href="#contact" className="text-black">
            Contact
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="relative">
            <button 
              className="text-black p-2" 
              onClick={() => setIsOpen(!isOpen)}
            >
              EN
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg">
                <Link href="/fr" className="block px-4 py-2 text-black hover:bg-gray-200">
                  FR
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <main className="flex flex-col items-center sm:items-start bg-[#000] min-h-screen font-[family-name:var(--font-geist-sans)] p-0">
        <section className="h-screen w-full flex items-center justify-center bg-cover bg-center bg-[url('/img/welcome-bg.webp')]">
          <h1 className="text-6xl font-bold text-white max-w-[70%] text-center">Welcome to the portfolio of FIGUEIRAS Jossua</h1>
        </section>
        <section className="bg-white h-screen opacity-80 rounded-xl w-full flex items-center justify-center">
        </section>
      </main>
    </div>
  );
}