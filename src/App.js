import React, { useState, useEffect } from 'react';

import Loader from './components/Loader';
import TypographySample from './pages/TypographySample';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatsAppCta from './components/WhatsAppCta';
import WhatsAppIcon from './components/WhatsAppIcon';
import About from './components/About';
import Packages from './components/Packages';
import Commission from './components/Commission';
import HowItWorks from './components/HowItWorks';
import Requirements from './components/Requirements';
import Terms from './components/Terms';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CONTACT_PHONE_DISPLAY, WHATSAPP_CHAT_URL } from './data';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [typographyDemo, setTypographyDemo] = useState(
    () =>
      typeof window !== 'undefined' &&
      new URLSearchParams(window.location.search).get('demo') === 'typography'
  );

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onPop = () =>
      setTypographyDemo(new URLSearchParams(window.location.search).get('demo') === 'typography');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (typographyDemo) {
    return <TypographySample />;
  }

  return (
    <>
      {loading && <Loader />}

      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.5s ease 0.2s',
        }}
      >
        <Navbar />
        <Hero />
        {/* <WhatsAppCta /> */}
        <About />
        <Packages />
        <Commission />
        <HowItWorks />
        <Requirements />
        <Terms />
        <Testimonials />
        <Contact />
        <Footer />

        {/* Floating WhatsApp button (sticky) */}
        <a
          href={WHATSAPP_CHAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="tb-wa-fab"
          aria-label={`Open WhatsApp chat: ${CONTACT_PHONE_DISPLAY}`}
          title="Chat on WhatsApp"
        >
          <span className="tb-wa-fab__ring" aria-hidden="true" />
          <span className="tb-wa-fab__btn" aria-hidden="true">
            <WhatsAppIcon size={26} />
          </span>
          <span className="tb-wa-fab__tip">Chat on WhatsApp</span>
        </a>
      </div>
    </>
  );
}