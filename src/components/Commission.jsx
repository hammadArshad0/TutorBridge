import React, { useState } from 'react';
import { Percent } from 'lucide-react';
import { C } from '../data';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const data = {
  A: {
    label: 'Option A — Standard',
    desc: 'Commission applies over the first 2 months of the tutor\'s salary.',
    rows: [
      { range: '≤ 20,000 PKR', rate: '30%', months: '2 months' },
      { range: '> 20,000 PKR', rate: '40%', months: '2 months' },
    ],
  },
  B: {
    label: 'Option B — Full Settlement',
    desc: 'Commission applies only on the first month\'s salary.',
    rows: [
      { range: '≤ 20,000 PKR', rate: '50%', months: '1st month' },
      { range: '> 20,000 PKR', rate: '60%', months: '1st month' },
    ],
  },
};

export default function Commission() {
  const [tab, setTab] = useState('A');
  const d = data[tab];

  return (
    <section id="commission" style={{ padding: '96px 24px', background: C.bg }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <SectionHeader
          icon={Percent}
          tag="Commission"
          title="Transparent Commission Policy"
          subtitle="Know exactly what to expect — no hidden fees, no surprises."
        />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', padding: 6, borderRadius: 16, background: C.bluePale }}>
            {['A', 'B'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: '10px 24px', borderRadius: 12, fontSize: 14, fontWeight: 600, border: 'none', cursor: 'pointer',
                  background: tab === t ? C.blue : 'transparent',
                  color: tab === t ? C.white : C.muted,
                  boxShadow: tab === t ? '0 4px 12px rgba(26,58,143,0.3)' : 'none',
                  transition: 'all 0.2s',
                }}
              >
                Option {t}
              </button>
            ))}
          </div>
        </div>
        <FadeIn>
          <div style={{ borderRadius: 24, overflow: 'hidden', border: `1px solid ${C.border}`, boxShadow: '0 8px 40px rgba(26,58,143,0.08)' }}>
            <div style={{ padding: 32, background: C.blue }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.white, marginBottom: 8, fontFamily: "'Playfair Display', Georgia, serif" }}>{d.label}</h3>
              <p style={{ fontSize: 14, color: 'rgba(219,234,254,0.8)' }}>{d.desc}</p>
            </div>
            <div style={{ background: C.white, padding: 24 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['Salary Range', 'Commission Rate', 'Duration'].map((h) => (
                      <th key={h} style={{ textAlign: 'left', padding: '12px 16px', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.muted }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {d.rows.map((r, i) => (
                    <tr key={i} style={{ borderTop: `1px solid ${C.border}` }}>
                      <td style={{ padding: '16px', fontSize: 14, fontWeight: 600, color: C.text }}>{r.range}</td>
                      <td style={{ padding: '16px' }}>
                        <span style={{ padding: '4px 12px', borderRadius: 99, fontSize: 14, fontWeight: 700, background: C.goldPale, color: C.gold }}>{r.rate}</span>
                      </td>
                      <td style={{ padding: '16px', fontSize: 14, color: C.muted }}>{r.months}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
