'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#vacations', label: 'חופשות' },
  { href: '#flights', label: 'טיסות' },
  { href: '#hotels', label: 'מלונות' },
  { href: '#tours', label: 'טיולים מאורגנים' },
  { href: '#car-rental', label: 'השכרת רכב' },
  { href: '#deals', label: 'דילים' },
  { href: '#contact', label: 'צור קשר' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-tal-offwhite/90 backdrop-blur-md border-b border-tal-sand/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col items-center group">
              <span className="text-2xl font-serif font-bold text-tal-navy tracking-tight group-hover:text-tal-sky transition-colors">
                טל fly ✈️
              </span>
              <span className="text-sm font-sans text-tal-navy/80 font-medium">
                תיירות ונופש
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 rtl:space-x-reverse">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-tal-navy transition-colors hover:text-tal-sky"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="bg-tal-navy text-tal-offwhite px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-tal-navy/90 transition-all shadow-sm"
            >
              בניית חופשה
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-tal-navy hover:text-tal-sky focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-tal-offwhite absolute top-20 left-0 w-full border-b border-tal-sand/50 shadow-lg z-40">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-tal-navy hover:bg-tal-sand/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-tal-navy text-tal-offwhite px-5 py-3 rounded-xl text-base font-bold shadow-md"
              >
                נבנה לכם חופשה
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
