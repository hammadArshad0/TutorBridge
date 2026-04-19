import React, { useState } from 'react';
import { C } from '../constants/theme';
import FadeIn from '../components/FadeIn';
import SectionHeader from '../components/SectionHeader';

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
    <section id="commission" className="py-24" style={{ background: C.bg }}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          tag="Commission"
          title="Transparent Commission Policy"
          subtitle="Know exactly what to expect — no hidden fees, no surprises."
        />

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex rounded-2xl p-1.5"
            style={{ background: C.bluePale }}
          >
            {['A', 'B'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: tab === t ? C.blue : 'transparent',
                  color: tab === t ? C.white : C.muted,
                  boxShadow: tab === t ? '0 4px 12px rgba(26,58,143,0.3)' : 'none',
                }}
              >
                Option {t}
              </button>
            ))}
          </div>
        </div>

        <FadeIn>
          <div
            className="rounded-3xl overflow-hidden border"
            style={{
              borderColor: C.border,
              boxShadow: '0 8px 40px rgba(26,58,143,0.08)',
            }}
          >
            {/* Header */}
            <div className="p-8 pb-6" style={{ background: C.blue }}>
              <h3
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {d.label}
              </h3>
              <p className="text-blue-200 text-sm">{d.desc}</p>
            </div>

            {/* Table */}
            <div className="bg-white p-6">
              <table className="w-full">
                <thead>
                  <tr>
                    {['Salary Range', 'Commission Rate', 'Duration'].map((h) => (
                      <th
                        key={h}
                        className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider"
                        style={{ color: C.muted }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {d.rows.map((r, i) => (
                    <tr key={i} className="border-t" style={{ borderColor: C.border }}>
                      <td
                        className="py-4 px-4 text-sm font-semibold"
                        style={{ color: C.text }}
                      >
                        {r.range}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className="px-3 py-1 rounded-full text-sm font-bold"
                          style={{ background: C.goldPale, color: C.gold }}
                        >
                          {r.rate}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm" style={{ color: C.muted }}>
                        {r.months}
                      </td>
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
