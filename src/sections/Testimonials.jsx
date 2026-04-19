import React from 'react';
import { C, testimonials } from '../constants/theme';
import FadeIn from '../components/FadeIn';
import SectionHeader from '../components/SectionHeader';
import { StarIcon } from '../components/Icons';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24" style={{ background: C.bg }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Reviews"
          title="What People Are Saying"
          subtitle="Real words from real tutors and students who've used TutorBridge."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: C.white,
                  borderColor: C.border,
                  boxShadow: '0 4px 20px rgba(26,58,143,0.06)',
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} filled={j < t.rating} />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-sm leading-relaxed mb-6 italic"
                  style={{ color: C.muted }}
                >
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: C.blue }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: C.text }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: C.muted }}>
                      {t.role}
                    </p>
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
