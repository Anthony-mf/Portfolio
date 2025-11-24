'use client';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
          Anthony.
        </h1>
        <div className="hidden md:flex gap-8">
          {['Home', 'About', 'Work', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
        <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
          Let's talk
        </button>
      </div>
    </nav>
  );
}