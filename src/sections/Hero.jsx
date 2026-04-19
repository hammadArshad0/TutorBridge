import React, { useState, useEffect } from 'react';
import { C, slides } from '../constants/theme';
import { ChevronLeftIcon, ChevronRightIcon } from '../components/Icons';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: slide.bg, transition: 'background 1s ease' }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-[-80px] right-[-80px] w-96 h-96 rounded-full opacity-10"
        style={{ background: C.gold }}
      />
      <div
        className="absolute bottom-[-60px] left-[-60px] w-72 h-72 rounded-full opacity-10"
        style={{ background: C.goldLight }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(${C.goldLight} 1px, transparent 1px), linear-gradient(90deg, ${C.goldLight} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(245,166,35,0.25)', color: slide.accent }}
            >
              {slide.tag}
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                whiteSpace: 'pre-line',
                textShadow: '0 2px 20px rgba(0,0,0,0.15)',
              }}
            >
              {slide.title}
            </h1>
            <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {slide.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{ background: C.gold, color: C.blue }}
              >
                Join as Tutor
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-3.5 rounded-2xl font-bold text-sm border-2 text-white transition-all duration-200 hover:scale-105 hover:bg-white hover:text-blue-900"
                style={{ borderColor: 'rgba(255,255,255,0.6)' }}
              >
                Find a Tutor →
              </button>
            </div>
          </div>

          {/* Illustration card */}
          <div className="flex-1 flex justify-center">
            <div
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl flex items-center justify-center animate-float"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              }}
            >
              <span
                className="text-9xl select-none"
                style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))' }}
              >
                {slide.emoji}
              </span>
              {/* Floating badge — verified */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2">
                <span style={{ color: C.gold }}>⭐</span>
                <span className="text-xs font-bold" style={{ color: C.blue }}>Verified</span>
              </div>
              {/* Floating badge — tutors */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2">
                <span>👨‍🎓</span>
                <span className="text-xs font-bold" style={{ color: C.blue }}>500+ Tutors</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slider controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.2)' }}
          >
            <ChevronLeftIcon />
          </button>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 28 : 10,
                height: 10,
                background: i === current ? C.gold : 'rgba(255,255,255,0.4)',
              }}
            />
          ))}
          <button
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.2)' }}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
