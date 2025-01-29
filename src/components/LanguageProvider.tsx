"use client"

import React, { createContext, useState, useContext, useEffect } from 'react';
import { en } from '../translations/en';
import { fr } from '../translations/fr';

type TranslationType = typeof en;
type LanguageContextType = {
  language: string;
  translations: TranslationType;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState<TranslationType>(en);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectUserLanguage = async () => {
      setIsLoading(true);
      
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code.toLowerCase();
        const frenchSpeakingCountries = ['fr', 'be', 'ch', 'ca', 'lu', 'mc'];
        const savedLanguage = localStorage.getItem('preferred-language');
        const browserLanguage = navigator.language.split('-')[0];
        
        const detectedLanguage = 
          savedLanguage || 
          (frenchSpeakingCountries.includes(countryCode) ? 'fr' : null) ||
          (browserLanguage === 'fr' ? 'fr' : 'en');

        setLanguage(detectedLanguage);
        setTranslations(detectedLanguage === 'fr' ? fr : en);
      } catch (error) {
        console.error('Failed to detect location:', error);
        const fallbackLanguage = navigator.language.split('-')[0] === 'fr' ? 'fr' : 'en';
        setLanguage(fallbackLanguage);
        setTranslations(fallbackLanguage === 'fr' ? fr : en);
      } finally {
        setIsLoading(false);
      }
    };

    detectUserLanguage();
  }, []);

  const handleSetLanguage = (lang: string) => {
    try {
      setLanguage(lang);
      setTranslations(lang === 'fr' ? fr : en);
      localStorage.setItem('preferred-language', lang);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  const value = {
    language,
    translations,
    setLanguage: handleSetLanguage
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}