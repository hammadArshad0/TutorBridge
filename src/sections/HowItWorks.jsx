import React from 'react';
import { C, steps } from '../constants/theme';
import FadeIn from '../components/FadeIn';
import SectionHeader from '../components/SectionHeader';

const emojis = ['👤', '📚', '🔗', '🎓'];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24" style={{ background: C.white }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Process"
          title="How TutorBridge Works"
          subtitle="From signup to first session in four simple steps."
        />

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5"
            style={{
              background: `linear-gradient(90deg, ${C.gold}, ${C.blue})`,
            }}
          />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="relative flex flex-col items-center text-center group">
                  {/* Icon circle */}
                  <div
                    className="relative w-24 h-24 rounded-3xl flex items-center justify-center mb-6 text-4xl z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                    style={{
                      background: C.blue,
                      boxShadow: '0 8px 24px rgba(26,58,143,0.25)',
                    }}
                  >
                    {emojis[i]}
                    {/* Step number badge */}
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: C.gold }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <h3
                    className="font-bold text-base mb-2"
                    style={{ color: C.text }}
                  >
                    {step.label}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
