import React from 'react';
import {
  ArrowRight,
  BookOpen,
  Layers,
  Mail,
  Settings,
  Sparkles,
  User,
} from 'lucide-react';
import { C } from '../data';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';

const btnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  padding: '12px 22px',
  borderRadius: 12,
  fontSize: 14,
  fontWeight: 700,
  fontFamily: "'Inter', system-ui, sans-serif",
  border: 'none',
  cursor: 'pointer',
};

export default function TypographySample() {
  return (
    <div style={{ minHeight: '100vh', background: C.bg, color: C.text }}>
      <header
        style={{
          padding: '20px 24px',
          background: C.white,
          borderBottom: `1px solid ${C.border}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 15, color: C.blue }}>Typography sample</span>
        <a
          href="/"
          style={{
            ...btnBase,
            background: C.bluePale,
            color: C.blue,
            textDecoration: 'none',
            border: `1px solid ${C.border}`,
          }}
        >
          <ArrowRight size={18} strokeWidth={2} style={{ transform: 'rotate(180deg)' }} />
          Back to site
        </a>
      </header>

      <main style={{ maxWidth: 880, margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 24px 4rem' }}>
        <div className="tb-heading-stack">
          <Heading level={1} icon={Sparkles} iconSize={24}>
            Heading hierarchy demo
          </Heading>
          <SubHeading narrow>
            H1 is the page title; H2 marks sections; H3 is for subsections. Icons are optional Lucide
            components, sized between 16px and 24px.
          </SubHeading>
        </div>

        <section style={{ marginTop: 48, padding: 32, background: C.white, borderRadius: 20, border: `1px solid ${C.border}` }}>
          <Heading level={2} icon={Layers} iconSize={22} tightBottom>
            Section title (H2)
          </Heading>
          <SubHeading narrow tone="default" style={{ marginBottom: 24 }}>
            Subheading under an H2 uses muted theme colour and comfortable line height.
          </SubHeading>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: C.muted, margin: 0 }}>
            Body copy after headings keeps clear vertical rhythm. Spacing above and below headings is handled
            with utility classes like{' '}
            <code style={{ fontSize: 13, color: C.blue }}>tb-heading-stack</code>.
          </p>
        </section>

        <section style={{ marginTop: 32, padding: 32, background: C.blue, borderRadius: 20, color: C.white }}>
          <Heading level={2} icon={BookOpen} iconSize={22} tone="onDark" tightBottom>
            On dark background
          </Heading>
          <SubHeading tone="onDark" narrow style={{ marginBottom: 20 }}>
            Use tone=&quot;onDark&quot; on Heading and SubHeading so contrast stays readable without changing
            brand blues or gold.
          </SubHeading>
          <button type="button" style={{ ...btnBase, background: C.gold, color: C.blue }}>
            <User size={18} strokeWidth={2} />
            Primary action
            <ArrowRight size={18} strokeWidth={2} />
          </button>
        </section>

        <section style={{ marginTop: 32, padding: 32, background: C.white, borderRadius: 20, border: `1px solid ${C.border}` }}>
          <Heading level={3} icon={Settings} iconSize={18} tightBottom>
            Subsection (H3)
          </Heading>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: C.text, margin: 0 }}>
            Smaller heading for cards, accordions, or nested content.
          </p>
        </section>

        <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" style={{ ...btnBase, background: C.blue, color: C.white }}>
            <Mail size={18} strokeWidth={2} />
            Contact
          </button>
          <button
            type="button"
            style={{
              ...btnBase,
              background: 'transparent',
              color: C.blue,
              border: `2px solid ${C.gold}`,
            }}
          >
            <Settings size={18} strokeWidth={2} />
            Settings
          </button>
        </div>
      </main>
    </div>
  );
}
