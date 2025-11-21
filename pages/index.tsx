import { Link } from "@heroui/link";

export default function IndexPage() {
  const navbarButtonStyle = `
    .navbar-button:hover {
      background-color: rgba(255, 255, 255, 0.7) !important;
    }
    .cta-button-dark:hover {
      background-color: rgb(45, 52, 56) !important;
    }
    .cta-button-outline:hover .arrow-icon {
      transform: translateX(4px);
    }
  `;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: navbarButtonStyle }} />
      <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-white"
      style={{
        paddingTop: '34px',
        paddingBottom: '34px',
        paddingLeft: '40px',
        paddingRight: '40px',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          backgroundColor: '#F0FFFE',
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(69, 243, 255, 0.4) 0%, rgba(69, 243, 255, 0.2) 25%, rgba(69, 243, 255, 0.1) 50%, transparent 70%),
            radial-gradient(circle at 80% 60%, rgba(54, 255, 131, 0.35) 0%, rgba(54, 255, 131, 0.15) 30%, rgba(54, 255, 131, 0.05) 50%, transparent 70%),
            radial-gradient(circle at 50% 80%, rgba(161, 251, 255, 0.3) 0%, rgba(161, 251, 255, 0.1) 40%, transparent 65%)
          `,
          borderRadius: '24px',
          boxSizing: 'border-box',
          color: 'rgb(17, 24, 28)',
          display: 'flex',
          flexDirection: 'column',
          height: '974px',
          lineHeight: '24px',
          margin: 0,
          padding: 0,
          position: 'relative',
          width: '1360px',
          overflow: 'visible',
        }}
      >
        <nav
          style={{
            position: 'absolute',
            top: '37px',
            left: '50%',
            transform: 'translateX(-50%)',
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
            minWidth: '620px',
            justifyContent: 'space-between',
            zIndex: 40,
          }}
        >
            <div className="flex items-center gap-2.5" style={{ marginLeft: '-4px' }}>
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
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-sm font-medium text-white transition-colors"
              >
                Как работает
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Примеры отчётов
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Тарифы
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </div>

            <button
              className="navbar-button"
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
                display: 'inline-flex',
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
        </nav>

        {/* Flex container for centered content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            rowGap: '24px',
            paddingTop: '120px',
            width: '100%',
            height: 'calc(974px - 455px)',
          }}
        >
        <button
          className="group"
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
            fontSize: '14px',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            height: '36px',
            justifyContent: 'center',
            lineHeight: '20px',
            minWidth: '80px',
            paddingLeft: '18px',
            paddingRight: '18px',
            paddingTop: '0px',
            paddingBottom: '0px',
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
          style={{
            boxSizing: 'border-box',
            color: 'rgb(17, 24, 28)',
            fontSize: '64px',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            lineHeight: '64px',
            padding: '0 40px',
            textAlign: 'center',
            width: '70%',
          }}
        >
          Проверь недвижимость за 15 минут
        </h1>

        <p
          style={{
            boxSizing: 'border-box',
            color: 'rgb(82, 82, 91)',
            fontSize: '18px',
            lineHeight: '24px',
            textAlign: 'center',
            width: '500px',
          }}
        >
          Автопроверка квартиры по реестрам и судам. Обременения, споры, история объекта и готовый отчёт по рискам сделки
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
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

        <div
          style={{
            position: 'absolute',
            bottom: '0',
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
            width: '1152px',
            height: '455.148px',
            maxWidth: '1152px',
            margin: 0,
            overflow: 'hidden',
            paddingTop: '24px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingBottom: '16px',
            zIndex: 10,
          }}
        >
          {/* Browser mockup with screenshot */}
          <div
            style={{
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: '12px',
              boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 20px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              width: '100%',
              height: '100%',
            }}
          >
          {/* Browser header */}
          <div
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
              width: '1099px',
              height: '368px',
              backgroundColor: 'rgb(243, 244, 246)',
              backgroundImage: 'linear-gradient(to bottom right, rgb(243, 244, 246), rgb(229, 231, 235))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 0,
              padding: 0,
              position: 'relative',
              left: '8px',
              top: '8px',
            }}
          >
            <div style={{ textAlign: 'center', color: 'rgb(156, 163, 175)' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto' }}>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <p style={{ marginTop: '12px', fontSize: '14px' }}>Screenshot placeholder</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    </>
  );
}
