'use client';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Meditation Course',
    category: 'Web Application',
    image: '🧘',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'E-commerce Platform',
    category: 'Full Stack',
    image: '🛒',
    tags: ['Next.js', 'Stripe', 'Prisma']
  },
  {
    title: '3D Portfolio',
    category: '3D Art',
    image: '🎨',
    tags: ['Three.js', 'Blender', 'WebGL']
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <p className="text-gray-400 text-sm mb-1">Showcase</p>
        <h3 className="text-3xl font-bold">My Works</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 overflow-hidden group cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
          >
            <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
              {project.image}
            </div>
            <div className="p-6">
              <p className="text-gray-400 text-sm mb-2">{project.category}</p>
              <h4 className="text-xl font-bold mb-4 group-hover:text-orange-400 transition-colors">{project.title}</h4>
              <div className="flex gap-2 flex-wrap mb-4">
                {project.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center ml-auto group-hover:scale-110 transition-transform">
                <FaExternalLinkAlt className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}