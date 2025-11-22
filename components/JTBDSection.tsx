import React from 'react';

// Общие стили для переиспользования
const CARD_CONTAINER_STYLE = {
  position: 'absolute' as const,
  width: '200px',
  height: '192px',
  background: 'rgba(12, 23, 20, 0.7)',
  borderRadius: '24px',
  boxShadow: 'rgba(0, 0, 0, 0.06) 0px 0px 8px 4px',
  padding: '20px 18px',
  display: 'flex' as const,
  flexDirection: 'column' as const,
  justifyContent: 'space-between' as const,
};

const HEADING_BASE_STYLE = {
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: '24px',
  color: 'white',
  fontFamily: "'Open Sans', sans-serif",
  margin: '0 0 12px 0',
};

const PARAGRAPH_STYLE = {
  fontSize: '13px',
  fontWeight: 400,
  lineHeight: '18px',
  color: 'rgba(255, 255, 255, 0.7)',
  fontFamily: "'Open Sans', sans-serif",
  margin: 0,
};

const ICON_IMAGE_STYLE = {
  width: '120px',
  height: '120px',
  borderRadius: '10px',
};

const ICON_CONTAINER_BASE_STYLE = {
  position: 'absolute' as const,
  width: '120px',
  height: '120px',
  borderRadius: '10px',
};

export default function JTBDSection() {
  return (
    <section
      className="jtbd-gradient"
      style={{
        height: '100vh',
        padding: '60px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(33, 1fr)',
          gridTemplateRows: 'repeat(33, 1fr)',
          gap: '20px',
          alignItems: 'center',
          justifyItems: 'center',
          height: '80vh',
        }}
      >
        {/* Central Heading */}
        <div
          style={{
            gridRow: 11,
            gridColumn: '11 / 23',
            textAlign: 'center',
            maxWidth: '768px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '64px',
              fontWeight: 600,
              lineHeight: '66px',
              letterSpacing: '-4px',
              fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              margin: 0,
              backgroundImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0) -150%, rgb(23, 36, 25))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
              color: 'rgb(38, 38, 38)',
            }}
          >
            В каких случаях нужен Domvisor
          </h2>
        </div>

        {/* Card 1 - Покупатель */}
        <div style={{ gridRow: 1, gridColumn: 7, position: 'relative' }}>
          <div style={CARD_CONTAINER_STYLE}>
            <div>
              <h3 style={{ ...HEADING_BASE_STYLE, paddingRight: '15%' }}>
                Покупаете квартиру
              </h3>
              <p style={PARAGRAPH_STYLE}>
                Покажем обременения, споры и риски, пока вы не внесли аванс.
              </p>
            </div>
            <div
              style={{
                ...ICON_CONTAINER_BASE_STYLE,
                top: '-40px',
                right: '-40px',
                transform: 'matrix(0.965926, -0.258819, 0.258819, 0.965926, 0, 0)',
              }}
            >
              <img src="/images/icons/1.png" alt="" style={ICON_IMAGE_STYLE} />
            </div>
          </div>
        </div>

        {/* Card 2 - Продавец */}
        <div style={{ gridRow: 5, gridColumn: 24, position: 'relative' }}>
          <div style={CARD_CONTAINER_STYLE}>
            <div>
              <h3 style={{ ...HEADING_BASE_STYLE, paddingRight: '15%' }}>
                Продаёте свой объект
              </h3>
              <p style={PARAGRAPH_STYLE}>
                Находим возможные юр-сюрпризы, чтобы покупатель не сорвал сделку.
              </p>
            </div>
            <div
              style={{
                ...ICON_CONTAINER_BASE_STYLE,
                top: '-45px',
                right: '-45px',
                transform: 'rotate(-10deg)',
              }}
            >
              <img src="/images/icons/2.png" alt="" style={ICON_IMAGE_STYLE} />
            </div>
          </div>
        </div>

        {/* Card 3 - Инвестор (иконка за карточкой) */}
        <div style={{ gridRow: 12, gridColumn: 6, position: 'relative' }}>
          <div
            style={{
              ...ICON_CONTAINER_BASE_STYLE,
              top: '132px',
              left: '-60px',
              transform: 'rotate(-10deg)',
            }}
          >
            <img src="/images/icons/3.png" alt="" style={ICON_IMAGE_STYLE} />
          </div>
          <div style={CARD_CONTAINER_STYLE}>
            <div>
              <h3 style={HEADING_BASE_STYLE}>
                Инвестируете в недвижимость
              </h3>
              <p style={PARAGRAPH_STYLE}>
                Помогаем проверить пачку квартир и заранее отсеять рискованные варианты.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 - Риелтор */}
        <div style={{ gridRow: 13, gridColumn: 22, position: 'relative' }}>
          <div style={CARD_CONTAINER_STYLE}>
            <div>
              <h3 style={{ ...HEADING_BASE_STYLE, paddingRight: '15%' }}>
                Вы риелтор или брокер
              </h3>
              <p style={PARAGRAPH_STYLE}>
                Быстро проверяем объекты по базам, чтобы не вести клиентов в проблемы.
              </p>
            </div>
            <div
              style={{
                ...ICON_CONTAINER_BASE_STYLE,
                top: '-45px',
                right: '-45px',
                transform: 'rotate(-10deg)',
              }}
            >
              <img src="/images/icons/4.png" alt="" style={ICON_IMAGE_STYLE} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
