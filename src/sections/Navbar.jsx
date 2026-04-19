import React, { useState, useEffect } from 'react';
import { C, navLinks } from '../constants/theme';
import Logo from '../components/Logo';
import { MenuIcon, XIcon } from '../components/Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase().replace(/ /g, '-'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(26,58,143,0.10)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.35s ease',
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Logo size={44} />
          <span
            className="font-bold text-xl tracking-tight"
            style={{
              color: scrolled ? C.blue : C.white,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            TutorBridge
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50"
              style={{ color: scrolled ? C.text : C.white }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => scrollTo('Contact')}
            className="px-5 py-2 rounded-xl text-sm font-semibold border-2 transition-all duration-200 hover:scale-105"
            style={{
              borderColor: C.gold,
              color: scrolled ? C.blue : C.white,
            }}
          >
            Join as Tutor
          </button>
          <button
            onClick={() => scrollTo('Contact')}
            className="px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ background: C.gold, color: C.blue }}
          >
            Find a Tutor
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          style={{ color: scrolled ? C.blue : C.white }}
          onClick={() => setOpen(!open)}
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t px-6 py-4" style={{ borderColor: C.border }}>
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block w-full text-left py-3 text-sm font-medium border-b last:border-0"
              style={{ color: C.text, borderColor: C.border }}
            >
              {l}
            </button>
          ))}
          <div className="flex gap-3 mt-4">
            <button
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold border-2 text-center"
              style={{ borderColor: C.gold, color: C.blue }}
            >
              Join as Tutor
            </button>
            <button
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-center"
              style={{ background: C.gold, color: C.blue }}
            >
              Find a Tutor
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
