import React from 'react';
import { ListOrdered } from 'lucide-react';
import { C, steps } from '../data';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import Heading from './Heading';

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '96px 24px', background: C.white }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader
          icon={ListOrdered}
          tag="Process"
          title="How TutorBridge Works"
          subtitle="From signup to first session in four simple steps."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, position: 'relative' }}>
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div
                  style={{ position: 'relative', width: 88, height: 88, borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, background: C.blue, boxShadow: '0 8px 24px rgba(26,58,143,0.25)', fontSize: 36, transition: 'all 0.3s', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 16px 36px rgba(26,58,143,0.35)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,58,143,0.25)'; }}
                >
                  {s.icon}
                  <div style={{ position: 'absolute', top: -8, right: -8, width: 24, height: 24, borderRadius: '50%', background: C.gold, color: C.blue, fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {i + 1}
                  </div>
                </div>
                <Heading
                  level={3}
                  center
                  tightBottom
                  as="h3"
                  style={{ fontSize: 15, marginBottom: 8, color: C.text, fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  {s.label}
                </Heading>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: C.muted }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
