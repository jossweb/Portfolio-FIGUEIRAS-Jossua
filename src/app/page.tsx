"use client"

import { useState } from "react";
import Image from "next/image";
import {WobbleCard} from "../components/ui/wobble-card";
import { Spotlight } from "../components/ui/Spotlight"
import { Progress } from "@/components/ui/progress"
import { Button } from "../components/ui/button"
import { Github } from 'lucide-react'
import { Navbar} from "../components/ui/navbar"
import Popup from '../components/ui/popup';
import AppleCardsCarouselDemo from "../components/apple-card"
import { ContactUs } from '../components/contact-us';
import Footer from "../components/ui/footer"

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center sm:items-start bg-[#000] min-h-screen font-[family-name:var(--font-geist-sans)] p-0">
        <section className="h-screen w-full flex items-center justify-center bg-cover bg-center bg-[url('/img/welcome-bg.webp')]">
          <h1 className="text-6xl font-bold text-white max-w-[70%] text-center">Welcome to the portfolio of FIGUEIRAS Jossua</h1>
        </section>
        <section className=" w-full p-4" id="about-me">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl w-full mx-auto">
            <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-gray-700 min-h-[180px] lg:min-h-[150px]">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white">
                Github
              </h2>
              <p className="mt-2 text-left text-sm/5 text-neutral-200">
                Discover my github profile, with the code of each of my public projects
              </p>
              <a href="https://github.com/jossweb" target="_blank" className="flex justify-center items-center relative z-10 inline-flex items-center px-4 py-2 bg-white text-black rounded-md mt-4">
                <Image
                  src="/img/github-logo.svg"
                  alt="GitHub Logo"
                  width={20}
                  height={20}
                  className="mr-2"/>
                Github
              </a>
            </div>
            <Image
              src="/img/github.webp"
              width={425}
              height={425}
              alt="Repo github illustration"
              className="absolute -right-4 lg:-right-[20%] grayscale filter -bottom-6 object-contain rounded-2xl"/>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[150px] bg-gray-700">
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
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gray-700 min-h-[200px] lg:min-h-[200px] mb-20">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white">
                About me
              </h2>
              <p className="mt-4 max-w-[20rem] text-left text-sm/5 text-neutral-200">
              Hi, my name is Jossua. I’m currently studying computer science at the University of Tours in France, where I’m in my first year of a computer science degree for the 2024/25 academic year. I have a strong passion for hardware and emerging technologies, particularly in the field of AI.
              </p>
            </div>
            <Image
              src="/img/profil-git.webp"
              width={500}
              height={350}
              alt="linear demo image"
              className="absolute -right-6 -bottom-6 object-contain rounded-2xl grayscale filter"
            />
          </WobbleCard>
        </div>
        <p className="text-center text-white mt-8 pb-2">Discover my projects</p>
        <Image
              src="/img/scroll-arrow.jpg"
              width={50}
              height={50}
              alt="linear demo image"
              className="mx-auto block"
            />
        </section>
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-visible -mt-20">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="lightgray" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Local Ai <br /> rediscover AI
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          discover my work on less polluting artificial intelligence tools that respect your confidentiality...
        </p>
        <Progress value={10} className="w-[60%] mt-8 mb-2" />
        <p className="mt-2 text-sm text-neutral-400 mb-5">Progress: 10%</p>
        <p className="mt-2 text-sm text-neutral-400">Current step: adding llama to the mac application with coreml</p>
        <Button variant="outline" className="mt-8" onClick={() => setIsPopupOpen(true)}>
          <Github className="mr-2 h-4 w-4" />View on GitHub
        </Button>
        <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </div>
  </div>
  <section className="w-full bg-black" id="other-projects">
    <AppleCardsCarouselDemo/>
  </section>
  <ContactUs/>
  <Footer />
</main>
    </div>
  );
}