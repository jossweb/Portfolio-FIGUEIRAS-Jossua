"use client"

import { useState } from "react";
import { Spotlight } from "../components/ui/Spotlight";
import { Progress } from "@/components/ui/progress";
import { Button } from "../components/ui/button";
import { Github } from "lucide-react";
import Navbar from "../components/ui/navbar";
import Popup from "../components/ui/popup";
import AppleCardsCarouselDemo from "../components/apple-card";
import { ContactUs } from "../components/contact-us";
import Footer from "../components/ui/footer";
import { motion } from "framer-motion";
import LandingPage from "../components/landing-page";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { useLanguage } from '../components/LanguageProvider'
import AppleSwiftChallenge from "../components/apple-swift-challenge";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { translations } = useLanguage()
  const skills = translations.skills.items;
  const languages = translations.skills.languages;
  
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center sm:items-start bg-[#000] min-h-screen font-[family-name:var(--font-geist-sans)] p-0">
        <section className="w-full h-screen relative" id="home">
          <LandingPage />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-transparent to-black z-10"></div>
        </section>
        <section className="w-full p-4" id="about-me">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="w-full bg-white/10 text-[#fafafa]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                <Github className="h-7 w-7" />
                {translations.github.title}
              </CardTitle>
              <CardDescription className="text-[#a3a3a3] text-base md:text-lg">
                {translations.github.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-muted-foreground text-[#a3a3a3]">
                {translations.github.content}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="text-sm">
                <a href="https://github.com/jossweb" target="_blank" rel="noopener noreferrer">
                  {translations.github.button}
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card className="w-full bg-white/10 text-[#fafafa]">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">{translations.about.title}</CardTitle>
              <CardDescription className="text-[#a3a3a3] text-base md:text-lg">
                {translations.about.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-muted-foreground text-[#a3a3a3]">
                {translations.about.content}
              </p>
            </CardContent>
          </Card>
          </div>
        </div>
        </section>
        <section id="skills" className="py-20 bg-black flex items-center justify-center w-full">
          <div className="container max-w-4xl mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {translations.skills.title}
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-b from-neutral-50 to-neutral-400 rounded-full px-8 py-4 text-lg font-semibold"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="languages" className="py-20 bg-black flex items-center justify-center w-full">
          <div className="container max-w-4xl mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {translations.skills.languagesTitle} {/* Correction: utiliser le bon chemin */}
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-8">
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-b from-neutral-50 to-neutral-400 rounded-full px-8 py-4 text-lg font-semibold"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  {language}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <AppleSwiftChallenge />
        <section className="w-full bg-black" id="other-projects">
          <AppleCardsCarouselDemo />
        </section>
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}