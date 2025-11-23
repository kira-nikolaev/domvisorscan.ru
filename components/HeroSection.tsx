import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const PROPERTY_TYPES = ['недвижимость', 'квартиру', 'дом', 'участок', 'коттедж', 'таунхаус'];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROPERTY_TYPES.length);
    }, 3000); // меняем каждые 3 секунды

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Flex container for centered content */}
      <div className="hero-container">
        <button
          className="group teaser-button"
          style={{
            alignItems: 'center',
            appearance: 'none',
            backgroundColor: 'rgb(255, 255, 255)',
            border: '0px solid oklch(0.928 0.006 264.531)',
            borderRadius: '9999px',
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 15px 0px',
            boxSizing: 'border-box',
            color: 'rgb(113, 113, 122)',
            columnGap: '8px',
            cursor: 'pointer',
            display: 'flex',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            justifyContent: 'center',
            lineHeight: '20px',
            minWidth: '80px',
            rowGap: '8px',
            textAlign: 'center',
            touchAction: 'manipulation',
            transitionDuration: '0.25s',
            transitionProperty: 'transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke, opacity',
            transitionTimingFunction: 'ease',
            userSelect: 'none',
            width: 'auto',
          }}
        >
          Онлайн-проверка недвижимости
          <svg
            className="transition-transform duration-200 group-hover:translate-x-1"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <h1
          className="hero-title"
          style={{
            boxSizing: 'border-box',
            color: 'rgb(17, 24, 28)',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 800,
            padding: '0 40px',
            textAlign: 'center',
          }}
        >
          {/* Desktop version - one line */}
          <span className="static-word-desktop">
            Проверь{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, rgb(69, 243, 255) 0%, rgb(54, 255, 131) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              недвижимость
            </span>
            {' '}за 15 минут
          </span>

          {/* Mobile version - three lines */}
          <span className="mobile-word-wrapper">
            <span style={{ display: 'block', marginBottom: '-11px' }}>Проверь</span>
            <span style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '56px',
              overflow: 'visible',
              margin: '-11px 0'
            }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mobile-word"
                >
                  {PROPERTY_TYPES[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span style={{ display: 'block', marginTop: '-11px' }}>за 15 минут</span>
          </span>
        </h1>

        <p
          className="hero-subtitle"
          style={{
            boxSizing: 'border-box',
            color: 'rgb(82, 82, 91)',
            textAlign: 'center',
          }}
        >
          Автопроверка квартиры по реестрам и судам. Обременения, споры, история объекта и готовый отчёт по рискам сделки
        </p>

        <div className="cta-buttons">
          <a href="#pricing" style={{ textDecoration: 'none' }}>
            <button
              className="cta-button-dark"
              style={{
                alignItems: 'center',
                appearance: 'none',
                backgroundColor: 'rgb(17, 24, 28)',
                border: '0px solid oklch(0.928 0.006 264.531)',
                borderRadius: '9999px',
                boxSizing: 'border-box',
                color: 'rgb(255, 255, 255)',
                columnGap: '8px',
                cursor: 'pointer',
                display: 'flex',
                fontSize: '14px',
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 600,
                height: '40px',
                justifyContent: 'center',
                lineHeight: '20px',
                margin: 0,
                minWidth: '80px',
                opacity: 1,
                overflow: 'hidden',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '0px',
                paddingBottom: '0px',
                position: 'relative',
                rowGap: '8px',
                textAlign: 'center',
                touchAction: 'manipulation',
                transform: 'matrix(1, 0, 0, 1, 0, 0)',
                transitionDuration: '0.25s',
                transitionProperty: 'transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke, opacity',
                transitionTimingFunction: 'ease',
                userSelect: 'none',
                width: 'auto',
                zIndex: 0,
              }}
            >
              Начать проверку
            </button>
          </a>

          <button
            className="cta-button-outline"
            style={{
              alignItems: 'center',
              appearance: 'none',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '9999px',
              boxSizing: 'border-box',
              color: 'rgb(17, 24, 28)',
              columnGap: '8px',
              cursor: 'pointer',
              display: 'flex',
              fontSize: '14px',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              height: '40px',
              justifyContent: 'center',
              lineHeight: '20px',
              margin: 0,
              minWidth: '80px',
              opacity: 1,
              overflow: 'hidden',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: '0px',
              paddingBottom: '0px',
              position: 'relative',
              rowGap: '8px',
              textAlign: 'center',
              touchAction: 'manipulation',
              transform: 'matrix(1, 0, 0, 1, 0, 0)',
              transitionDuration: '0.25s',
              transitionProperty: 'transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke, opacity',
              transitionTimingFunction: 'ease',
              userSelect: 'none',
              width: 'auto',
              zIndex: 0,
            }}
          >
            Пример отчета
            <span
              className="arrow-icon"
              style={{
                backgroundColor: 'rgb(255, 255, 255)',
                display: 'flex',
                height: '22px',
                width: '22px',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '9999px',
                transition: 'transform 0.2s ease',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Browser screenshot mockup block */}
      <div
        className="browser-mockup"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.6)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
          borderRight: '1px solid rgba(255, 255, 255, 0.6)',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          boxSizing: 'border-box',
          maxWidth: '1152px',
          margin: 0,
          overflow: 'hidden',
          paddingTop: '24px',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingBottom: '1px',
          zIndex: 10,
        }}
      >
        {/* Browser mockup with screenshot */}
        <div
          style={{
            backgroundColor: 'rgb(255, 255, 255)',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 20px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Browser header */}
          <div
            className="browser-header"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '52px',
              backgroundColor: 'rgb(249, 250, 251)',
              borderBottom: '1px solid rgb(229, 231, 235)',
              paddingLeft: '16px',
              paddingRight: '16px',
              position: 'relative',
            }}
          >
            {/* Left side - control buttons + navigation */}
            <div style={{ position: 'absolute', left: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Window control buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'rgb(255, 95, 86)' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'rgb(255, 189, 46)' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'rgb(39, 201, 63)' }} />
              </div>

              {/* Tabs button */}
              <button style={{ width: '24px', height: '24px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(156, 163, 175)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                </svg>
              </button>

              {/* Navigation buttons */}
              <div style={{ display: 'flex', gap: '4px' }}>
                <button style={{ width: '24px', height: '24px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(156, 163, 175)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button style={{ width: '24px', height: '24px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(156, 163, 175)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button style={{ width: '24px', height: '24px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(156, 163, 175)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Center - address bar */}
            <div
              className="browser-address-bar"
              style={{
                height: '32px',
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: '8px',
                border: '1px solid rgb(229, 231, 235)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: '12px',
                paddingRight: '12px',
                minWidth: '300px',
                position: 'relative',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(156, 163, 175)" strokeWidth="2" style={{ position: 'absolute', left: '12px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span style={{ fontSize: '13px', color: 'rgb(107, 114, 128)', fontWeight: 400 }}>domvisorscan.ru</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(156, 163, 175)" strokeWidth="2" style={{ position: 'absolute', right: '12px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>

            {/* Right side - action buttons */}
            <div style={{ position: 'absolute', right: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button style={{ width: '24px', height: '24px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(156, 163, 175)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
              <button style={{ width: '24px', height: '24px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(156, 163, 175)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Screenshot content */}
          <div
            style={{
              width: '100%',
              padding: '8px',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/screenshot.png"
              alt="DomVisor Scan Screenshot"
              width={2880}
              height={1152}
              priority
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
