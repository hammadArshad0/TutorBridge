import React from 'react';
import { GraduationCap, ShieldCheck, Star, Users } from 'lucide-react';
import { C } from '../data';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import Heading from './Heading';

const cards = [
  { 
    icon: <ShieldCheck size={28} strokeWidth={1.5} />, 
    title: 'Verified Leads Only', 
    desc: 'Every student request is manually reviewed before being shared with our tutor network to ensure quality.' 
  },
  { 
    icon: <Star size={28} strokeWidth={1.5} />, 
    title: 'Quality Focused', 
    desc: 'We prioritize long-term student success and sustainable growth over raw lead numbers.' 
  },
  { 
    icon: <Users size={28} strokeWidth={1.5} />, 
    title: 'Direct Connection', 
    desc: 'We bridge tutors and students directly with zero middleman and 100% transparency.' 
  },
];

export default function About() {
  return (
    <section id="about" style={{ 
      padding: '120px 24px', 
      background: '#ffffff', // Pure White Background
      position: 'relative' 
    }}>
      
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          icon={GraduationCap}
          tag="Our Mission"
          title="Who is TutorBridge?"
          subtitle="An independent platform dedicated to connecting passionate tutors with students who need them — built on quality, trust, and results."
        />

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 32,
          marginTop: 64 
        }}>
          {cards.map((c, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div
                style={{ 
                  padding: '48px 32px', 
                  borderRadius: 24, 
                  border: '1px solid #f0f0f0', // Very light border
                  background: '#ffffff', // Card background also White
                  textAlign: 'center', 
                  transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)', 
                  cursor: 'default',
                  height: '100%',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)' // Subtle shadow
                }}
                onMouseEnter={e => { 
                  e.currentTarget.style.transform = 'translateY(-10px)'; 
                  e.currentTarget.style.borderColor = C.gold;
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.08)`;
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.transform = 'translateY(0)'; 
                  e.currentTarget.style.borderColor = '#f0f0f0';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                }}
              >
                {/* Icon Container with subtle color */}
                <div style={{ 
                  width: 64, 
                  height: 64, 
                  borderRadius: '50%', // Circular icons for a clean look
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 24px', 
                  background: '#f8fafc', // Light blue-grey tint
                  color: '#1e3a8a', // Deep Blue icon color
                  border: '1px solid #e2e8f0'
                }}>
                  {c.icon}
                </div>

                <Heading level={3} center tightBottom style={{ color: C.text, marginBottom: 12 }}>
                  {c.title}
                </Heading>

                <p style={{ 
                  fontSize: 15, 
                  lineHeight: 1.7, 
                  color: '#6b7280', // Soft Muted text
                  fontWeight: 400 
                }}>
                  {c.desc}
                </p>
                
                {/* Subtle Decorative Line */}
                <div style={{ 
                  width: '40px', 
                  height: '2px', 
                  background: C.gold, 
                  margin: '20px auto 0',
                  borderRadius: '2px'
                }} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}