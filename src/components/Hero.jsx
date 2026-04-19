import React, { useState, useEffect } from 'react';
import { ArrowRight, UserPlus } from 'lucide-react';
import { C, slides } from '../data';
import Heading from './Heading';
import SubHeading from './SubHeading';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section id="hero" style={{ 
      background: slide.bg, 
      transition: 'background 1s ease', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      {/* Decorative Background Elements */}
      <div style={{ position: 'absolute', top: -80, right: -80, width: 380, height: 380, borderRadius: '50%', background: C.gold, opacity: 0.08, zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: `linear-gradient(${C.goldLight} 1px, transparent 1px), linear-gradient(90deg, ${C.goldLight} 1px, transparent 1px)`, backgroundSize: '60px 60px', zIndex: 0 }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '112px 24px 64px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 48 }}>
          
          {/* --- Left Side: Text --- */}
          <div style={{ flex: 1, minWidth: 320 }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: 99, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 24, background: 'rgba(245,166,35,0.25)', color: C.goldLight }}>
              {slide.tag}
            </div>
            <Heading level={1} tone="onDark" style={{ whiteSpace: 'pre-line' }}>
              {slide.title}
            </Heading>
            <SubHeading tone="onDark" style={{ fontSize: 'clamp(1rem, 0.5vw + 0.9rem, 1.125rem)', marginBottom: 40, maxWidth: 500 }}>
              {slide.subtitle}
            </SubHeading>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <button
                type="button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '16px 36px',
                  borderRadius: 12,
                  fontWeight: 700,
                  background: C.gold,
                  color: '#000',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: 15,
                }}
              >
                <UserPlus size={20} strokeWidth={2} aria-hidden />
                Join as Tutor
              </button>
              <button
                type="button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '16px 36px',
                  borderRadius: 12,
                  fontWeight: 700,
                  background: 'rgba(255,255,255,0.1)',
                  color: C.white,
                  border: '1px solid rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  fontFamily: 'inherit',
                  fontSize: 15,
                }}
              >
                Find a Tutor
                <ArrowRight size={20} strokeWidth={2} aria-hidden />
              </button>
            </div>
          </div>

          {/* --- Right Side: Seamless Image (No Card) --- */}
          <div style={{ flex: 1, minWidth: 320, display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ 
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              animation: 'float 6s ease-in-out infinite'
            }}>
              {/* Seamless Image with Fade Edges */}
              <img 
                src={slide.imageUrl} 
                alt={slide.tag} 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '40px',
                  // Isse image ke edges background mein blend ho jayenge
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%), linear-gradient(to right, black 80%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)', 
                  filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.3))'
                }} 
              />

              {/* Floating Badges directly on image edges */}
              <div style={{ position: 'absolute', top: '10%', right: '-5%', background: C.white, borderRadius: 12, padding: '10px 18px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', gap: 8, zIndex: 2 }}>
                <span style={{ color: C.gold }}>⭐</span>
                <span style={{ fontSize: 12, fontWeight: 800, color: C.blue }}>VERIFIED</span>
              </div>
              
              <div style={{ position: 'absolute', bottom: '15%', left: '-5%', background: 'rgba(255,255,255,0.95)', borderRadius: 12, padding: '10px 18px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', gap: 8, zIndex: 2 }}>
                <span>👨‍🎓</span>
                <span style={{ fontSize: 12, fontWeight: 800, color: C.blue }}>500+ TUTORS</span>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 60 }}>
          {slides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)} 
              style={{ 
                width: i === current ? 35 : 12, 
                height: 12, 
                borderRadius: 10, 
                background: i === current ? C.gold : 'rgba(255,255,255,0.2)', 
                border: 'none', 
                transition: '0.4s', 
                cursor: 'pointer' 
              }} 
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.02); }
        }
      `}</style>
    </section>
  );
}