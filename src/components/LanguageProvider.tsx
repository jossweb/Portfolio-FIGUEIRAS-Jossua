'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { en } from '../translations/en'
import { fr } from '../translations/fr'

const LanguageContext = createContext({
  language: 'en',
  translations: en,
  setLanguage: (lang: string) => {}
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('en')
  const [translations, setTranslations] = useState(en)

  useEffect(() => {
    // En production, vous pourriez utiliser navigator.language ou une API de géolocalisation
    const userLanguage = navigator.language.split('-')[0]
    if (userLanguage === 'fr') {
      setLanguage('fr')
      setTranslations(fr)
    }
  }, [])

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang)
    setTranslations(lang === 'fr' ? fr : en)
  }

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
