'use client';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCode, FaCoffee } from 'react-icons/fa';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Card */}
        <div 
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 group"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <p className="text-gray-400 mb-2">A Future Developer</p>
          <h2 className="text-4xl font-bold mb-4">
            Anthony <br />MARQUES FELIX
          </h2>
          <p className="text-sm text-gray-400 italic leading-relaxed mb-6">
            A B.Tech IT student passionate about full-stack development, game design, and UI/UX. I enjoy creating interactive experiences and building efficient web applications.
          </p>
        </div>

        {/* Right Hero */}
        <div className="space-y-6">
          <div className="flex gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 text-gray-400 rounded-2xl flex items-center justify-center border border-white/10 hover:border-white hover:text-white cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-6">
              <a href="https://github.com/Anthony-mf" target="_blank" rel="noopener noreferrer"><FaGithub className="w-7 h-7" /></a>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 text-gray-400 rounded-2xl flex items-center justify-center border border-white/10 hover:border-blue-400 hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-6">
              <a href="https://www.linkedin.com/in/anthmf/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-7 h-7" /></a>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 text-gray-400 rounded-2xl flex items-center justify-center border border-white/10 hover:border-orange-400 hover:text-orange-400 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-6">
              <a href="mailto:anthonymarquesfelix@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope className="w-7 h-7" /></a>
            </div>
          </div>        
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
              Building Skills
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent animate-gradient">
              For Future.
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
