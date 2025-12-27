'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/98 shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="cursor-pointer flex items-center hover:opacity-90 transition-opacity">
              <Image 
                src="/logo.png" 
                alt="NY Home Owner Logo" 
                width={200}
                height={67}
                className="h-14 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <Link 
                href="/" 
                className={`font-semibold transition-colors ${
                  isActive('/') ? 'text-blue-600' : 'hover:text-blue-600'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/deal" 
                className={`font-semibold transition-colors ${
                  isActive('/deal') ? 'text-blue-600' : 'hover:text-blue-600'
                }`}
              >
                DEAL
              </Link>
            </li>
            <li>
              <Link 
                href="/invest" 
                className={`font-semibold transition-colors ${
                  isActive('/invest') ? 'text-blue-600' : 'hover:text-blue-600'
                }`}
              >
                INVEST
              </Link>
            </li>
            <li>
              <Link 
                href="/manage" 
                className={`font-semibold transition-colors ${
                  isActive('/manage') ? 'text-blue-600' : 'hover:text-blue-600'
                }`}
              >
                MANAGE
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`font-semibold transition-colors ${
                  isActive('/contact') ? 'text-blue-600' : 'hover:text-blue-600'
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
            <Link
              href="/"
              className={`block font-semibold transition-colors py-2 ${
                isActive('/') ? 'text-blue-600' : 'hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/deal"
              className={`block font-semibold transition-colors py-2 ${
                isActive('/deal') ? 'text-blue-600' : 'hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              DEAL
            </Link>
            <Link
              href="/invest"
              className={`block font-semibold transition-colors py-2 ${
                isActive('/invest') ? 'text-blue-600' : 'hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              INVEST
            </Link>
            <Link
              href="/manage"
              className={`block font-semibold transition-colors py-2 ${
                isActive('/manage') ? 'text-blue-600' : 'hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              MANAGE
            </Link>
            <Link
              href="/contact"
              className={`block font-semibold transition-colors py-2 ${
                isActive('/contact') ? 'text-blue-600' : 'hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}