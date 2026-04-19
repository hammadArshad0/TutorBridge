import React from 'react';
import { C, navLinks, CONTACT_PHONE_DISPLAY, WHATSAPP_CHAT_URL } from '../data';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase().replace(/ /g, '-'))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: C.blue }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Logo size={42} />
              <span style={{ fontWeight: 700, fontSize: 20, color: C.white, fontFamily: "'Playfair Display', Georgia, serif" }}>TutorBridge</span>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(219,234,254,0.75)', lineHeight: 1.7, maxWidth: 320 }}>
              Connecting passionate educators with students across Pakistan — quality tuition, built on trust.
            </p>
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.gold, marginBottom: 20 }}>Quick Links</p>
            <ul style={{ listStyle: 'none' }}>
              {navLinks.map((l) => (
                <li key={l} style={{ marginBottom: 10 }}>
                  <button
                    onClick={() => scrollTo(l)}
                    style={{ fontSize: 14, color: 'rgba(219,234,254,0.75)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = C.white}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(219,234,254,0.75)'}
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.gold, marginBottom: 20 }}>Contact</p>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ fontSize: 14, color: 'rgba(219,234,254,0.75)', marginBottom: 10 }}>info@tutorbridge.pk</li>
              <li style={{ marginBottom: 10, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 14, color: 'rgba(219,234,254,0.75)' }}>{CONTACT_PHONE_DISPLAY}</span>
                <a
                  href={WHATSAPP_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open WhatsApp chat"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '6px 12px',
                    borderRadius: 10,
                    background: '#25D366',
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'filter 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; }}
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp
                </a>
              </li>
              <li style={{ fontSize: 14, color: 'rgba(219,234,254,0.75)', marginBottom: 10 }}>Islamabad, Pakistan</li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'rgba(219,234,254,0.5)' }}>© 2026 TutorBridge. All rights reserved.</p>
          <p style={{ fontSize: 13, color: 'rgba(219,234,254,0.5)' }}>Made with ❤️ for Pakistan's educators</p>
        </div>
      </div>
    </footer>
  );
}
