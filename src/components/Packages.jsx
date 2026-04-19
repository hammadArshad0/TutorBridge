import React from 'react';
import { ArrowRight, Package2 } from 'lucide-react';
import { C, packages } from '../data';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import Heading from './Heading';

export default function Packages() {
  return (
    <section id="packages" style={{ padding: '96px 24px', background: C.white }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          icon={Package2}
          tag="Pricing"
          title="Choose Your Package"
          subtitle="Flexible plans designed for every stage of your tutoring journey."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, alignItems: 'stretch' }}>
          {packages.map((pkg, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div
                style={{
                  position: 'relative', borderRadius: 28, padding: 32, display: 'flex', flexDirection: 'column', height: '100%',
                  background: pkg.recommended ? C.blue : pkg.bg,
                  border: `2px solid ${pkg.recommended ? C.gold : C.border}`,
                  boxShadow: pkg.recommended ? '0 20px 60px rgba(26,58,143,0.25)' : '0 4px 20px rgba(26,58,143,0.06)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-12px)'; e.currentTarget.style.boxShadow = pkg.recommended ? '0 30px 70px rgba(26,58,143,0.35)' : '0 20px 40px rgba(26,58,143,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = pkg.recommended ? '0 20px 60px rgba(26,58,143,0.25)' : '0 4px 20px rgba(26,58,143,0.06)'; }}
              >
                {pkg.recommended && (
                  <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', padding: '6px 20px', borderRadius: 99, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', background: C.gold, color: C.blue, whiteSpace: 'nowrap' }}>
                    ✨ Recommended
                  </div>
                )}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, background: pkg.recommended ? 'rgba(245,166,35,0.2)' : C.bluePale, fontSize: 24 }}>
                    {pkg.emoji}
                  </div>
                  <Heading
                    level={3}
                    tone="inherit"
                    tightBottom
                    style={{
                      fontSize: 'clamp(1.25rem, 1vw + 1.1rem, 1.625rem)',
                      marginBottom: 4,
                      color: pkg.recommended ? C.white : C.text,
                    }}
                  >
                    {pkg.name}
                  </Heading>
                  <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, color: pkg.recommended ? C.goldLight : pkg.color }}>{pkg.price}</p>
                </div>
                <ul style={{ listStyle: 'none', flex: 1, marginBottom: 32 }}>
                  {pkg.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, fontSize: 14 }}>
                      <div style={{ width: 20, height: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: pkg.recommended ? C.gold : C.bluePale, color: C.blue, fontSize: 11, fontWeight: 700 }}>✓</div>
                      <span style={{ color: pkg.recommended ? 'rgba(255,255,255,0.9)' : C.muted }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: 16,
                    fontWeight: 700,
                    fontSize: 14,
                    border: 'none',
                    cursor: 'pointer',
                    background: pkg.recommended ? C.gold : C.blue,
                    color: pkg.recommended ? C.blue : C.white,
                    transition: 'all 0.2s',
                    boxShadow: pkg.recommended ? '0 4px 16px rgba(245,166,35,0.4)' : '0 4px 16px rgba(26,58,143,0.25)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  {pkg.cta}
                  <ArrowRight size={18} strokeWidth={2} aria-hidden />
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
