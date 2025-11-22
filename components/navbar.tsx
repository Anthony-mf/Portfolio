import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Accueil' },
  { href: '/projets', label: 'Projets' },
  { href: '/competences', label: 'Compétences' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <Link href="/" className="text-white text-2xl font-bold hover:text-blue-400 transition">
          Anthony MARQUES FELIX
        </Link>
        
        <div className="flex space-x-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}