import React from 'react';
import { C, requirements } from '../constants/theme';
import FadeIn from '../components/FadeIn';
import SectionHeader from '../components/SectionHeader';

export default function Requirements() {
  return (
    <section id="requirements" className="py-24" style={{ background: C.bluePale }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Requirements"
          title="What You'll Need"
          subtitle="To deliver great tuition sessions, make sure you have these essentials ready."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((r, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div
                className="p-6 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  boxShadow: '0 4px 20px rgba(26,58,143,0.05)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform duration-300"
                  style={{ background: C.goldPale }}
                >
                  {r.emoji}
                </div>
                <h3
                  className="font-bold text-sm mb-2"
                  style={{ color: C.text }}
                >
                  {r.label}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
                  {r.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
