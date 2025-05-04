'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    'Model S', 'Model 3', 'Model X', 'Model Y', 'Solar Roof', 'Solar Panels'
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-gray-900">Tesla</div>
        
        <nav className="space-x-6 hidden md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link}
              href="#" 
              className="text-gray-700 hover:text-gray-900 transition"
            >
              {link}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu" 
            className="text-gray-700 focus:outline-none"
          >
            <i className="fas fa-bars fa-lg"></i>
          </button>
        </div>
      </div>

      <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-md md:hidden`}>
        {navLinks.map((link) => (
          <Link
            key={link}
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            {link}
          </Link>
        ))}
      </nav>
    </header>
  );
}