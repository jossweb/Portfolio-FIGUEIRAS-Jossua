"use client"

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {WobbleCard} from "../components/ui/wobble-card";

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
        <section className=" w-full p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl w-full mx-auto">
            <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-red-900 min-h-[180px] lg:min-h-[150px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white">
                Gippity AI powers the entire universe
              </h2>
              <p className="mt-2 text-left text-sm/5 text-neutral-200">
                With over 100,000 monthly active bot users, Gippity AI is the most
                popular AI platform for developers.
              </p>
            </div>
            <Image
              src="/linear.webp"
              width={300}
              height={300}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[20%] grayscale filter -bottom-6 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[150px] bg-purple-900">
            <h2 className="max-w-60 text-left text-balance text-base md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white">
              Computer Skills
            </h2>
            <ul className="list-disc list-inside mt-2 max-w-[20rem] text-left text-sm/5 text-neutral-200">
              <li>Hardware</li>
              <li>Coreml tools</li>
              <li>Programming</li>
            </ul>
            <h2 className="pt-4 max-w-60 text-left text-balance text-base md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white">
              Programming languages
            </h2>
            <ul className="list-disc list-inside mt-2 max-w-[20rem] text-left text-sm/5 text-neutral-200">
              <li>Python</li>
              <li>PHP</li>
              <li>C#</li>
              <li>C</li>
            </ul>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-orange-900 min-h-[180px] lg:min-h-[150px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white">
                Signup for blazing-fast cutting-edge state of the art Gippity AI
                wrapper today!
              </h2>
              <p className="mt-2 max-w-[20rem] text-left text-sm/5 text-neutral-200">
                With over 100,000 monthly active bot users, Gippity AI is the most
                popular AI platform for developers.
              </p>
            </div>
            <Image
              src="/linear.webp"
              width={300}
              height={300}
              alt="linear demo image"
              className="absolute -right-6 md:-right-[20%] lg:-right-[10%] -bottom-6 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
        <p className="text-center text-white">Discovers my project</p>
        </section>
      </main>
    </div>
  );
}