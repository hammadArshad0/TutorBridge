import React from 'react';
import { CONTACT_PHONE_DISPLAY, WHATSAPP_CHAT_URL, C } from '../data';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppCta() {
  return (
    <section style={{ background: C.bg, padding: '18px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
        <a
          href={WHATSAPP_CHAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open WhatsApp chat: ${CONTACT_PHONE_DISPLAY}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 18px',
            borderRadius: 14,
            background: '#25D366',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: 14,
            boxShadow: '0 10px 30px rgba(37,211,102,0.25)',
            border: '1px solid rgba(0,0,0,0.06)',
            transition: 'filter 0.2s, transform 0.2s',
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'brightness(1.06)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'none';
            e.currentTarget.style.transform = 'none';
          }}
        >
          <WhatsAppIcon size={18} />
          WhatsApp: {CONTACT_PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}

