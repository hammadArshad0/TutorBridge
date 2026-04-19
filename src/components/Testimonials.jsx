import React from 'react';
import { MessageSquareQuote } from 'lucide-react';
import { C, testimonials } from '../data';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '96px 24px', background: C.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader icon={MessageSquareQuote} tag="Reviews" title="What People Are Saying" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{ padding: 28, borderRadius: 20, border: `1px solid ${C.border}`, background: C.white, boxShadow: '0 4px 20px rgba(26,58,143,0.06)', transition: 'all 0.3s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(26,58,143,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(26,58,143,0.06)'; }}
              >
                <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} viewBox="0 0 24 24" style={{ width: 16, height: 16 }} fill={j < t.rating ? '#F5A623' : 'none'} stroke="#F5A623" strokeWidth="2">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: C.muted, fontStyle: 'italic', marginBottom: 20 }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: C.blue, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15, flexShrink: 0 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 13, color: C.text }}>{t.name}</p>
                    <p style={{ fontSize: 12, color: C.muted }}>{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
