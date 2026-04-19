import React from 'react';
import { C, packages } from '../constants/theme';
import FadeIn from '../components/FadeIn';
import SectionHeader from '../components/SectionHeader';
import { CheckIcon } from '../components/Icons';

const medal = { Silver: '🥈', Gold: '🥇', Platinum: '💎' };

export default function Packages() {
  return (
    <section id="packages" className="py-24" style={{ background: C.white }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Pricing"
          title="Choose Your Package"
          subtitle="Flexible plans designed for every stage of your tutoring journey."
        />
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div
                className="relative rounded-3xl p-8 flex flex-col h-full group transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
                style={{
                  background: pkg.recommended ? C.blue : pkg.bg,
                  border: `2px solid ${pkg.recommended ? C.gold : C.border}`,
                  boxShadow: pkg.recommended
                    ? '0 20px 60px rgba(26,58,143,0.25)'
                    : '0 4px 20px rgba(26,58,143,0.06)',
                }}
              >
                {pkg.recommended && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                    style={{ background: C.gold, color: C.blue }}
                  >
                    ✨ Recommended
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl"
                    style={{ background: pkg.recommended ? 'rgba(245,166,35,0.2)' : C.bluePale }}
                  >
                    {medal[pkg.name]}
                  </div>
                  <h3
                    className="text-2xl font-bold mb-1"
                    style={{
                      color: pkg.recommended ? C.white : C.text,
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className="text-xs uppercase tracking-widest font-semibold"
                    style={{ color: pkg.recommended ? C.goldLight : pkg.color }}
                  >
                    {pkg.price}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: pkg.recommended ? C.gold : C.bluePale,
                          color: C.blue,
                        }}
                      >
                        <CheckIcon />
                      </div>
                      <span
                        style={{ color: pkg.recommended ? 'rgba(255,255,255,0.9)' : C.muted }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className="w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: pkg.recommended ? C.gold : C.blue,
                    color: pkg.recommended ? C.blue : C.white,
                  }}
                >
                  {pkg.cta}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
