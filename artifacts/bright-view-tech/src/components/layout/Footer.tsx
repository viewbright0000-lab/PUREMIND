import React from 'react';
import { Link } from 'wouter';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-10 h-10 shrink-0">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="40" height="40" rx="10" fill="#1e3a5f" />
                  <polyline points="7,13 14,27 20,16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <polyline points="14,13 21,27 33,13" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-base tracking-wide text-white uppercase">Bright View</span>
                <span className="font-semibold text-[10px] tracking-[0.18em] text-accent uppercase">Solutions</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Voice-based wellness applications helping individuals relax, reduce stress, and enhance their overall well-being.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@pureminds.in" className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent transition-colors">
                <Mail size={16} className="text-accent" /> info@pureminds.in
              </a>
              <a href="tel:+918714449047" className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent transition-colors">
                <Phone size={16} className="text-accent" /> +91 8714449047
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin size={16} className="text-accent" /> India
              </div>
            </div>
          </div>

          {/* Company links */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {[['/', 'Home'], ['/about', 'About Us'], ['/products', 'Our Apps'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products + Legal */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-4 text-white">Our Apps</h3>
            <ul className="space-y-3 mb-8">
              {['Bestie Talk', 'New Talk', 'Pure Minds'].map((app) => (
                <li key={app}>
                  <Link href="/products" className="text-sm text-gray-400 hover:text-white transition-colors">{app}</Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms and Conditions</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2026 BRIGHT VIEW TECH SOLUTIONS. All rights reserved.</p>
          <p className="text-xs text-gray-500 text-center md:text-left">Pure Minds is owned and operated by Bright View Tech Solutions.</p>
          <p className="text-xs text-gray-500 text-center md:text-left">
            Developed &amp; Maintained by{' '}
            <a href="https://www.zartek.in/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Zartek Technologies
            </a>
          </p>
          <div className="flex gap-2 flex-wrap">
            {['Bestie Talk', 'New Talk', 'Pure Minds'].map((app) => (
              <span key={app} className="text-xs bg-white/7 border border-white/10 text-gray-400 px-3 py-1 rounded-full">{app}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
