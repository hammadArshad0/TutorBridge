import React from 'react';
import { C } from '../data';
import Logo from './Logo';

export default function Loader() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: C.blue, flexDirection: 'column', gap: 24 }}>
      <div style={{ animation: 'spin 1.2s linear infinite' }}>
        <Logo size={72} />
      </div>
      <p style={{ color: C.white, fontSize: 13, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Playfair Display', Georgia, serif" }}>
        TutorBridge
      </p>
      <div style={{ width: 160, height: 3, borderRadius: 99, background: 'rgba(255,255,255,0.15)', overflow: 'hidden' }}>
        <div style={{ height: '100%', borderRadius: 99, background: C.gold, animation: 'load 1.8s ease forwards' }} />
      </div>
    </div>
  );
}
