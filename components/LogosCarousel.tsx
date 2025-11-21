import { LOGOS } from '@/constants/logos';

export default function LogosCarousel() {
  return (
    <section
      style={{
        backgroundColor: 'transparent',
        paddingTop: '20px',
        paddingBottom: '60px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          paddingLeft: '0',
          paddingRight: '0',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          {/* Left shadow */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '100px',
              background: 'linear-gradient(to right, rgb(255, 255, 255), transparent)',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          />
          {/* Right shadow */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '100px',
              background: 'linear-gradient(to left, rgb(255, 255, 255), transparent)',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <div
              className="scroll-container"
              style={{
                display: 'flex',
                gap: '30px',
                width: 'fit-content',
              }}
            >
              {/* First set of logos */}
              {LOGOS.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="logos-carousel"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '120px',
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-image logos-carousel"
                    style={{
                      width: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {LOGOS.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="logos-carousel"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '120px',
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-image logos-carousel"
                    style={{
                      width: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
