import React, { useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { C, CONTACT_PHONE_DISPLAY, WHATSAPP_CHAT_URL } from '../data';
import WhatsAppIcon from './WhatsAppIcon';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: '', email: '', message: '' });
    }
  };

  const inputStyle = {
    background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 12,
    padding: '13px 16px', fontSize: 14, color: C.text, width: '100%', outline: 'none', fontFamily: 'inherit', display: 'block', transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ padding: '96px 24px', background: C.white }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <SectionHeader
          icon={MessageCircle}
          tag="Contact"
          title="Get In Touch"
          subtitle="Have questions or ready to join? Reach out and we'll respond within 24 hours."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'start' }}>
          <FadeIn>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <input
                style={inputStyle} placeholder="Your Name"
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                onFocus={e => e.target.style.borderColor = C.blue} onBlur={e => e.target.style.borderColor = C.border}
              />
              <input
                style={inputStyle} placeholder="Email Address" type="email"
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                onFocus={e => e.target.style.borderColor = C.blue} onBlur={e => e.target.style.borderColor = C.border}
              />
              <textarea
                style={{ ...inputStyle, resize: 'none', height: 140 }}
                placeholder="Your message..."
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={e => e.target.style.borderColor = C.blue} onBlur={e => e.target.style.borderColor = C.border}
              />
              <button
                type="button"
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: 16,
                  fontWeight: 700,
                  fontSize: 14,
                  border: 'none',
                  cursor: 'pointer',
                  background: sent ? '#22C55E' : C.blue,
                  color: C.white,
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 16px rgba(26,58,143,0.25)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontFamily: 'inherit',
                }}
              >
                {sent ? (
                  'Message sent!'
                ) : (
                  <>
                    <Send size={18} strokeWidth={2} aria-hidden />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { Icon: Mail, label: 'Email', val: 'info@tutorbridge.pk' },
                { Icon: Phone, label: 'Phone / WhatsApp', val: CONTACT_PHONE_DISPLAY, showWhatsAppCta: true },
                { Icon: MapPin, label: 'Location', val: 'Islamabad, Pakistan' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: C.bluePale, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: C.blue }}>
                    <row.Icon size={20} strokeWidth={2} aria-hidden />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.muted, marginBottom: 2 }}>{row.label}</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{row.val}</p>
                    {row.showWhatsAppCta ? (
                      <a
                        href={WHATSAPP_CHAT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 8,
                          marginTop: 10,
                          padding: '10px 16px',
                          borderRadius: 12,
                          background: '#25D366',
                          color: '#fff',
                          fontSize: 13,
                          fontWeight: 700,
                          textDecoration: 'none',
                          transition: 'filter 0.2s',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.06)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; }}
                      >
                        <WhatsAppIcon size={18} />
                        Message on WhatsApp
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
              <div style={{ paddingTop: 8 }}>
                <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.muted, marginBottom: 16 }}>Follow Us</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {['📘 Facebook', '📸 Instagram', '🔗 LinkedIn'].map((s, i) => (
                    <button key={i} style={{ padding: '8px 16px', borderRadius: 12, fontSize: 13, fontWeight: 600, border: `1.5px solid ${C.border}`, color: C.text, background: C.white, cursor: 'pointer', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.color = C.blue; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.text; }}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
