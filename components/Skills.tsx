'use client';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
  { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-500' },
  { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-indigo-500' },
  { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-gray-900' },
  { name: 'Tailwind', icon: '🎨', color: 'from-cyan-400 to-teal-500' },
  { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-800' },
  { name: 'Git', icon: '📦', color: 'from-orange-500 to-red-500' },
  { name: 'Figma', icon: '🎯', color: 'from-purple-500 to-pink-500' }
];

export default function Skills() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-gray-400 text-sm mb-1">Most Use</p>
            <h3 className="text-3xl font-bold">Skills</h3>
          </div>
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <FaExternalLinkAlt className="w-5 h-5 text-black" />
          </button>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="aspect-square bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl flex flex-col items-center justify-center border border-white/10 hover:border-orange-500/50 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-2 group"
            >
              <span className="text-3xl mb-2 group-hover:scale-125 transition-transform">{skill.icon}</span>
              <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}