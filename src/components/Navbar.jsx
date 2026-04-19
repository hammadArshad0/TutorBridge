import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, UserPlus, X } from 'lucide-react';
import { C, navLinks } from '../data';
import Logo from './Logo';

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
    document.getElementById(id.toLowerCase().replace(/ /g, '-'))?.scrollIntoView({ behavior: 'smooth' });
  };

  const navBtn = () => ({
    padding: '10px 20px',
    borderRadius: 12,
    fontSize: 13,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'inherit',
  });

  return (
    <nav
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(26,58,143,0.10)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.35s ease',
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo size={44} />
          <span style={{ fontWeight: 700, fontSize: 20, color: scrolled ? C.blue : C.white, fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '-0.5px' }}>
            TutorBridge
          </span>
        </div>

        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {navLinks.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => scrollTo(l)}
              style={{
                padding: '8px 16px', borderRadius: 10, fontSize: 14, fontWeight: 500,
                color: scrolled ? C.text : C.white, background: 'none', border: 'none',
                cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => { e.target.style.background = C.bluePale; }}
              onMouseLeave={(e) => { e.target.style.background = 'none'; }}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            type="button"
            onClick={() => scrollTo('Contact')}
            style={{
              ...navBtn(scrolled),
              border: `2px solid ${C.gold}`,
              color: scrolled ? C.blue : C.white,
              background: 'none',
            }}
          >
            <UserPlus size={18} strokeWidth={2} aria-hidden />
            Join as Tutor
          </button>
          <button
            type="button"
            onClick={() => scrollTo('Contact')}
            style={{
              ...navBtn(scrolled),
              background: C.gold,
              color: C.blue,
              border: 'none',
              boxShadow: '0 4px 14px rgba(245,166,35,0.35)',
            }}
          >
            Find a Tutor
            <ArrowRight size={18} strokeWidth={2} aria-hidden />
          </button>
        </div>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{ background: 'none', border: 'none', color: scrolled ? C.blue : C.white, display: 'none', padding: 8 }}
        >
          {open ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </div>

      {open && (
        <div style={{ background: C.white, borderTop: `1px solid ${C.border}`, padding: '16px 24px' }}>
          {navLinks.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => scrollTo(l)}
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 0', fontSize: 14, fontWeight: 500, color: C.text, background: 'none', border: 'none', borderBottom: `1px solid ${C.border}`, cursor: 'pointer', fontFamily: 'inherit' }}
            >
              {l}
            </button>
          ))}
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <button
              type="button"
              onClick={() => scrollTo('Contact')}
              style={{ flex: 1, padding: '10px', borderRadius: 12, fontSize: 13, fontWeight: 600, border: `2px solid ${C.gold}`, color: C.blue, background: 'none', cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
            >
              <UserPlus size={18} strokeWidth={2} aria-hidden />
              Join
            </button>
            <button
              type="button"
              onClick={() => scrollTo('Contact')}
              style={{ flex: 1, padding: '10px', borderRadius: 12, fontSize: 13, fontWeight: 600, background: C.gold, color: C.blue, border: 'none', cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
            >
              Find
              <ArrowRight size={18} strokeWidth={2} aria-hidden />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
