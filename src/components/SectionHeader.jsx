import React from 'react';
import { C } from '../data';
import FadeIn from './FadeIn';
import Heading from './Heading';
import SubHeading from './SubHeading';

/**
 * @param {string} tag — small uppercase label
 * @param {string} title — section title (H2)
 * @param {string} [subtitle]
 * @param {import('lucide-react').LucideIcon} [icon] — optional Lucide icon before title
 */
export default function SectionHeader({ tag, title, subtitle, icon }) {
  return (
    <FadeIn className="tb-heading-stack">
      <div style={{ textAlign: 'center' }}>
        <div
          className="section-header__tag"
          style={{
            display: 'inline-block',
            padding: '6px 22px',
            borderRadius: 10,
            fontSize: 11,
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.28em',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
            background: 'rgba(245,166,35,0.08)',
            color: C.gold,
            borderBottom: `2px solid ${C.gold}`,
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          {tag}
        </div>

        <Heading level={2} icon={icon} iconSize={22} center tone="default">
          {title}
        </Heading>

        {subtitle && (
          <div style={{ position: 'relative', display: 'block', marginTop: 'clamp(0.5rem, 1.5vw, 0.75rem)' }}>
            <SubHeading center narrow>
              {subtitle}
            </SubHeading>
            <div
              style={{
                width: 80,
                height: 4,
                background: C.gold,
                margin: 'clamp(1rem, 2vw, 1.25rem) auto 0',
                borderRadius: 10,
              }}
            />
          </div>
        )}
      </div>
    </FadeIn>
  );
}
