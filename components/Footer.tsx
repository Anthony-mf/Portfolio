'use client';
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-3">
            <a href="https://github.com/Anthony-mf" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/anthmf/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </a>
            <a href="mailto:anthonymarquesfelix@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            </a>
          </div>
          <p className="text-center text-gray-500">
            © {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}