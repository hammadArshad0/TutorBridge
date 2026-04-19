import React, { useState } from 'react';
import { C, faqs } from '../constants/theme';
import FadeIn from '../components/FadeIn';
import SectionHeader from '../components/SectionHeader';
import { ChevronDownIcon } from '../components/Icons';

export default function Terms() {
  const [open, setOpen] = useState(null);

  return (
    <section id="terms" className="py-24" style={{ background: C.white }}>
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          tag="Legal"
          title="Terms & Conditions"
          subtitle="Transparent policies that protect both tutors and students."
        />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div
                className="rounded-2xl border overflow-hidden"
                style={{ borderColor: C.border }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
                  style={{ background: open === i ? C.bluePale : C.white }}
                >
                  <span className="font-semibold text-sm" style={{ color: C.text }}>
                    {f.q}
                  </span>
                  <span
                    className="flex-shrink-0 ml-4 transition-transform duration-300"
                    style={{
                      transform: open === i ? 'rotate(180deg)' : 'rotate(0)',
                      color: C.blue,
                    }}
                  >
                    <ChevronDownIcon />
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5" style={{ background: C.bluePale }}>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {f.a}
                    </p>
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
