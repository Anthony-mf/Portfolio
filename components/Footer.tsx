'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Joed.
          </h2>
          <div className="flex gap-8 text-gray-400">
            {['Home', 'About', 'Work', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-8">
          © All rights reserved by harshal
        </p>
      </div>
    </footer>
  );
}