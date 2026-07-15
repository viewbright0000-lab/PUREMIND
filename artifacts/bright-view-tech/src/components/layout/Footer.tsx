import React from 'react';
import { Link } from 'wouter';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent text-white rounded-lg flex items-center justify-center font-bold text-xl">
                BV
              </div>
              <div className="font-bold text-xl tracking-tight">
                BRIGHT VIEW
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Developing reliable communication and digital interaction platforms.
            </p>
            <div className="space-y-3">
              <a href="mailto:viewbright0000@gmail.com" className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent transition-colors">
                <Mail size={16} className="text-accent" />
                viewbright0000@gmail.com
              </a>
              <a href="tel:+918714449047" className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent transition-colors">
                <Phone size={16} className="text-accent" />
                +91 8714449047
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin size={16} className="text-accent" />
                India
              </div>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-6">
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms and Conditions</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2026 BRIGHT VIEW TECH SOLUTIONS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
