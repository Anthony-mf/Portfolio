'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Git', icon: '📦' },
  { name: 'Figma', icon: '🎯' },
] as const;

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid gap-8 lg:grid-cols-[2.7fr_1fr]">
        <div className="bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">{t('skills.title')}</h3>
            <span className="text-gray-500 text-xs border border-white/10 rounded-full px-3 py-1">EX</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-2xl border border-white/10 flex items-center gap-4 px-4 py-5 text-gray-200 hover:border-orange-400 hover:text-white transition-all duration-300"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-sm uppercase tracking-widest">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}