'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope, FaMobile, FaPhone } from 'react-icons/fa';
import { useState } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Resume' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

/**
 * Composant de Barre Latérale (Sidebar) avec effet de survol.
 */
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); 
  
  const triggerWidth = '40px'; 

  return (
    <>
      <div
        className="fixed top-0 left-0 h-full bg-gray-900 z-50 transition-all duration-300"
        style={{ width: triggerWidth }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      ></div>

      {/* 2. La Sidebar elle-même */}
      <div
        className={`fixed top-0 h-full w-75 bg-gray-900 text-white flex flex-col items-center p-6 z-50 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full' 
                  }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        
        <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4">
          <Image src="/images/profile.jpg" alt="Anthony MARQUES FELIX" layout="fill" objectFit="cover" />
        </div>
        <h1 className="text-xl font-semibold mb-2">Anthony MARQUES FELIX</h1>
        
      <div className="flex space-x-3 mb-10 text-xl">
        <a href="https://github.com/Anthony-mf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/anthmf/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaLinkedinIn /></a>
        <a href="mailto:anthonymarquesfelix@gmail.com" className="hover:text-blue-400 transition"><FaEnvelope /></a>
        <a href="tel:+33778253969" className="hover:text-blue-400 transition"><FaPhone /></a>
      </div>

        <nav className="w-full">
            <ul className="space-y-2">
                {navLinks.map((link) => (
                <li key={link.href}>
                    <Link 
                    href={link.href} 
                    className="flex items-center p-3 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition w-full"
                    >
                    {link.label}
                    </Link>
                </li>
                ))}
            </ul>
        </nav>
      </div>
    </>
  );
}