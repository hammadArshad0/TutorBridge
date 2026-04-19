import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { C, faqs } from '../data';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

export default function Terms() {
  const [open, setOpen] = useState(null);

  return (
    <section id="terms" style={{ padding: '96px 24px', background: C.white }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <SectionHeader
          icon={FileText}
          tag="Legal"
          title="Terms & Conditions"
          subtitle="Transparent policies that protect both tutors and students."
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div style={{ borderRadius: 16, border: `1px solid ${C.border}`, overflow: 'hidden' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', textAlign: 'left', background: open === i ? C.bluePale : C.white, border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
                >
                  <span style={{ fontWeight: 600, fontSize: 14, color: C.text }}>{f.q}</span>
                  <span style={{ color: C.blue, fontSize: 20, transform: open === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s', marginLeft: 16, flexShrink: 0 }}>⌄</span>
                </button>
                {open === i && (
                  <div style={{ padding: '0 24px 18px', background: C.bluePale }}>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: C.muted }}>{f.a}</p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
