'use client';
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const handleToggle = (lang: 'fr' | 'en') => {
    if (lang !== language) {
      setLanguage(lang);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
          <a href="/">Anthony.</a>
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 text-sm font-medium">
            <button
              onClick={() => handleToggle('fr')}
              className={`px-3 py-1 rounded-full transition-all ${language === 'fr'
                ? 'bg-white text-black shadow-lg'
                : 'text-gray-300 hover:text-white'
                }`}
              aria-pressed={language === 'fr'}
            >
              🇫🇷
            </button>
            <button
              onClick={() => handleToggle('en')}
              className={`px-3 py-1 rounded-full transition-all ${language === 'en'
                ? 'bg-white text-black shadow-lg'
                : 'text-gray-300 hover:text-white'
                }`}
              aria-pressed={language === 'en'}
            >
              🇬🇧
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}