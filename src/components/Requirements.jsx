import React from 'react';
import { MonitorPlay } from 'lucide-react';
import { C, requirements } from '../data';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

export default function Requirements() {
  return (
    <section id="requirements" style={{ padding: '96px 24px', background: C.bluePale }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader
          icon={MonitorPlay}
          tag="Requirements"
          title="What You'll Need"
          subtitle="To deliver great tuition sessions, make sure you have these essentials."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {requirements.map((r, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div
                style={{ padding: 28, borderRadius: 20, textAlign: 'center', background: C.white, border: `1px solid ${C.border}`, transition: 'all 0.3s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(26,58,143,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', background: C.goldPale, fontSize: 26 }}>
                  {r.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 14, marginBottom: 8, color: C.text }}>{r.label}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: C.muted }}>{r.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
