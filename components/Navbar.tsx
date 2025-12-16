'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaLightbulb, FaGamepad, FaCode, FaGraduationCap } from 'react-icons/fa';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = (lang: 'fr' | 'en') => {
    if (lang !== language) {
      setLanguage(lang);
    }
  };

  const menuItems = [
    { href: '/', label: 'nav.home', icon: FaHome },
    { href: '/about', label: 'nav.about', icon: FaUser },
    { href: '/skills', label: 'nav.skills', icon: FaCode },
    { href: '/strengths', label: 'nav.strengths', icon: FaLightbulb },
    { href: '/hobbies', label: 'nav.hobbies', icon: FaGamepad },
    { href: '/experiences/projects', label: 'nav.projects', icon: FaProjectDiagram },
    { href: '/experiences/jobs', label: 'nav.jobs', icon: FaBriefcase },
    { href: '/experiences/internships', label: 'nav.internships', icon: FaGraduationCap },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Burger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-orange-400 transition-colors duration-300 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            <a href="/">Anthony.</a>
          </h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 text-sm font-medium">
              <button
                onClick={() => handleToggle('fr')}
                className={`px-3 py-1 rounded-full transition-all flex items-center gap-2 ${language === 'fr'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-gray-300 hover:text-white'
                  }`}
                aria-pressed={language === 'fr'}
              >
                <Image
                  src="/images/svg/French_Flag.svg"
                  alt="Français"
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
              </button>
              <button
                onClick={() => handleToggle('en')}
                className={`px-3 py-1 rounded-full transition-all flex items-center gap-2 ${language === 'en'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-gray-300 hover:text-white'
                  }`}
                aria-pressed={language === 'en'}
              >
                <Image
                  src="/images/svg/UK_Flag.svg"
                  alt="English"
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-96 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg font-medium">{t(item.label)}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}