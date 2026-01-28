'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-zinc-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold text-white hover:text-blue-400 transition-colors" aria-label="Alex Rezvov - Home">
            Alex Rezvov
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="text-zinc-400 hover:text-white transition-colors">
              Services
            </a>
            <a href="#expertise" className="text-zinc-400 hover:text-white transition-colors">
              Expertise
            </a>
            <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden" 
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            <div id="mobile-menu" role="dialog" aria-label="Mobile navigation" className="absolute top-16 left-0 right-0 z-50 bg-[#0a0a0a] py-4 px-4 space-y-4 border-t border-zinc-800 md:hidden">
              <a
                href="#about"
                className="block text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="block text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#expertise"
                className="block text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Expertise
              </a>
              <a
                href="#projects"
                className="block text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
