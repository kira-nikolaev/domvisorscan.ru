'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { Link } from "@heroui/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const isReportPage = router.pathname === '/report';

  const menuItems = [
    { name: 'Как работает', href: '/#how-it-works' },
    { name: 'Примеры отчётов', href: '/report' },
    { name: 'Отзывы', href: '/#testimonials' },
    { name: 'Тарифы', href: '/#pricing' },
    { name: 'FAQ', href: '/#faq' },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className="navbar-container"
        style={{
          backgroundColor: 'rgb(0, 0, 0)',
          backdropFilter: 'blur(16px) saturate(1.5)',
          borderRadius: '9999px',
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 15px 0px',
          height: '50px',
          paddingTop: '5px',
          paddingBottom: '5px',
          paddingLeft: '20px',
          paddingRight: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          justifyContent: 'space-between',
          zIndex: 40,
        }}
      >
        <Link href="/" className="flex items-center gap-2.5" style={{ marginLeft: '-4px' }}>
          <svg width="20" height="18" viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 50.5C0 49.6716 0.661624 49 1.47778 49H54.5222C55.3384 49 56 49.6716 56 50.5C56 51.3284 55.3384 52 54.5222 52H1.47778C0.661624 52 0 51.3284 0 50.5Z" fill="url(#paint0_linear_logo)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M19.943 11.332L35.1348 23.3828V45.98C35.1348 46.9242 34.3642 47.6896 33.4135 47.6896C32.4629 47.6896 31.6923 46.9242 31.6923 45.98V25.0279L19.8877 15.664L7.41368 25.0547V45.98C7.41368 46.9242 6.64305 47.6896 5.69244 47.6896C4.74182 47.6896 3.97119 46.9242 3.97119 45.98V23.356L19.943 11.332Z" fill="url(#paint1_linear_logo)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M23.3306 0H49.7724V45.9801C49.7724 46.9243 49.0125 47.6897 48.0751 47.6897C47.1377 47.6897 46.3778 46.9243 46.3778 45.9801V3.41926H26.7251V45.9801C26.7251 46.9243 25.9652 47.6897 25.0278 47.6897C24.0905 47.6897 23.3306 46.9243 23.3306 45.9801V0Z" fill="url(#paint2_linear_logo)"/>
            <defs>
              <linearGradient id="paint0_linear_logo" x1="0" y1="49" x2="56" y2="52" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgba(69, 243, 255, 1)"/>
                <stop offset="1" stopColor="rgba(54, 255, 131, 1)"/>
              </linearGradient>
              <linearGradient id="paint1_linear_logo" x1="3.97119" y1="11.332" x2="35.1348" y2="47.6896" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgba(69, 243, 255, 1)"/>
                <stop offset="1" stopColor="rgba(54, 255, 131, 1)"/>
              </linearGradient>
              <linearGradient id="paint2_linear_logo" x1="23.3306" y1="0" x2="49.7724" y2="47.6897" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgba(69, 243, 255, 1)"/>
                <stop offset="1" stopColor="rgba(54, 255, 131, 1)"/>
              </linearGradient>
            </defs>
          </svg>
          <span
            className="font-bold text-base"
            style={{
              background: 'linear-gradient(90deg, rgba(69, 243, 255, 1) 0%, rgba(54, 255, 131, 1) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Домвизор
          </span>
        </Link>

        <div className="navbar-menu flex items-center gap-4">
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Как работает
          </Link>
          <Link
            href="/report"
            className={`text-sm font-medium transition-colors ${isReportPage ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
          >
            Примеры отчётов
          </Link>
          <Link
            href="/#testimonials"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Отзывы
          </Link>
          <Link
            href="/#pricing"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Тарифы
          </Link>
          <Link
            href="/#faq"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            FAQ
          </Link>
        </div>

        <Link href="/#pricing">
          <button
            className="navbar-button navbar-button-desktop"
            style={{
              alignItems: 'center',
              appearance: 'none',
              backgroundColor: 'rgb(255, 255, 255)',
              border: '0px solid oklch(0.928 0.006 264.531)',
              borderRadius: '9999px',
              boxSizing: 'border-box',
              color: 'rgb(0, 0, 0)',
              columnGap: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              height: '40px',
              justifyContent: 'center',
              lineHeight: '20px',
              margin: 0,
              marginRight: '-14px',
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
              width: '131.742px',
              zIndex: 0,
            }}
          >
            Проверить
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Link>

        {/* Burger menu button for mobile */}
        <button
          className="navbar-burger"
          onClick={handleMenuToggle}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
            marginRight: '0px',
          }}
        >
          {/* Burger icon with 2 lines */}
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 2h20M2 14h20"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: 'fixed',
            top: '90px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '400px',
            backgroundColor: 'rgb(0, 0, 0)',
            backdropFilter: 'blur(16px) saturate(1.5)',
            borderRadius: '16px',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 15px 0px',
            padding: '16px',
            zIndex: 30,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {menuItems.map((item, index) => {
            const isActive = item.href === '/report' && isReportPage;
            return (
              <Link
                key={index}
                href={item.href}
                onClick={handleMenuItemClick}
                className={`text-base font-medium transition-colors ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  display: 'block',
                }}
              >
                {item.name}
              </Link>
            );
          })}

          <Link href="/#pricing" onClick={handleMenuItemClick}>
            <button
              style={{
                width: '100%',
                alignItems: 'center',
                appearance: 'none',
                backgroundColor: 'rgb(255, 255, 255)',
                border: '0px',
                borderRadius: '9999px',
                boxSizing: 'border-box',
                color: 'rgb(0, 0, 0)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                fontSize: '14px',
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 600,
                height: '40px',
                marginTop: '8px',
                padding: '0 16px',
                gap: '8px',
              }}
            >
              Проверить
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      )}

      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div
          onClick={handleMenuToggle}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 20,
          }}
        />
      )}
    </>
  );
}
