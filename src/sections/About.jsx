import React from 'react';
import { C } from '../constants/theme';
import FadeIn from '../components/FadeIn';
import SectionHeader from '../components/SectionHeader';

const cards = [
  {
    emoji: '🛡️',
    title: 'Verified Leads Only',
    desc: 'Every student request is reviewed before being shared with tutors — ensuring quality over quantity.',
  },
  {
    emoji: '⭐',
    title: 'Quality Focused',
    desc: 'We prioritise long-term student success and tutor satisfaction over raw numbers.',
  },
  {
    emoji: '🔗',
    title: 'Direct Connection',
    desc: 'We bridge tutors and students with full transparency — no hidden middlemen, no confusion.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="About Us"
          title="Who is TutorBridge?"
          subtitle="An independent platform dedicated to connecting passionate tutors with students who need them — built on quality, trust, and results."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div
                className="p-8 rounded-2xl border text-center group hover:-translate-y-2 transition-all duration-300"
                style={{
                  background: C.white,
                  borderColor: C.border,
                  boxShadow: '0 4px 20px rgba(26,58,143,0.06)',
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: C.bluePale }}
                >
                  {card.emoji}
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: C.text, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {card.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
