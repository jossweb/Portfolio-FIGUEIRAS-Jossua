"use client"

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {WobbleCard} from "../components/ui/wobble-card"; // Importez votre composant ici
// Importez votre composant ici

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
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full h-screen">
          <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[300px] lg:min-h-[300px]"
          className="">
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Gippity AI powers the entire universe
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"/>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] w-[80%]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Signup for blazing-fast cutting-edge state of the art Gippity AI
              wrapper today!
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>


        </section>
      </main>
    </div>
  );
}