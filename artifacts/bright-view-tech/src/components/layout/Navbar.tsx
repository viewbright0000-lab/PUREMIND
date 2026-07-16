import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home',     href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Apps', href: '/products' },
  { name: 'Contact',  href: '/contact' },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [location]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-white py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 shrink-0">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect width="40" height="40" rx="10" className="fill-primary group-hover:fill-accent transition-colors duration-300" />
              <polyline points="7,13 14,27 20,16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <polyline points="14,13 21,27 33,13" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-base tracking-wide text-primary group-hover:text-accent transition-colors duration-300 uppercase">Bright View</span>
            <span className="font-semibold text-[10px] tracking-[0.18em] text-accent uppercase">Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location === link.href ? 'text-accent' : 'text-muted-foreground'
              }`}>
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="ml-4">
            <Button className="bg-primary hover:bg-accent text-white transition-colors">Get in Touch</Button>
          </Link>
        </nav>

        {/* Hamburger */}
        <button className="md:hidden p-2 text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col py-4 px-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={`py-3 text-base font-medium border-b border-gray-50 ${
                  location === link.href ? 'text-accent' : 'text-foreground'
                }`}>
                {link.name}
              </Link>
            ))}
            <Link href="/privacy-policy" className="py-3 text-base font-medium border-b border-gray-50 text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="py-3 text-base font-medium border-b border-gray-50 text-foreground">Terms and Conditions</Link>
            <Link href="/contact" className="mt-6 mb-2">
              <Button className="w-full bg-primary hover:bg-accent text-white">Get in Touch</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
