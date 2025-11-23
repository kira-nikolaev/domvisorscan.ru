import React from 'react';

export default function JTBDSection() {
  return (
    <section className="jtbd-gradient jtbd-section">
      <div className="jtbd-grid-container">
        {/* Central Heading */}
        <div className="jtbd-heading-container" style={{ gridRow: 11, gridColumn: '8 / 27' }}>
          <h2 className="jtbd-heading" style={{ letterSpacing: '0.02em' }}>
            В каких случаях нужен Домвизор
          </h2>
        </div>

        {/* Card 1 - Покупатель */}
        <div className="jtbd-card-wrapper" style={{ gridRow: 1, gridColumn: 7 }}>
          <div className="jtbd-card">
            <div>
              <h3 className="jtbd-card-title" style={{ paddingRight: '15%' }}>
                Покупаете квартиру
              </h3>
              <p className="jtbd-card-text">
                Пока­жем обре­мене­ния, спо­ры и рис­ки, по­ка вы не вне­сли аванс.
              </p>
            </div>
            <div
              className="jtbd-card-icon"
              style={{
                top: '-40px',
                right: '-40px',
                transform: 'matrix(0.965926, -0.258819, 0.258819, 0.965926, 0, 0)',
              }}
            >
              <img src="/images/icons/1.png" alt="" className="jtbd-icon-image" />
            </div>
          </div>
        </div>

        {/* Card 2 - Продавец */}
        <div className="jtbd-card-wrapper" style={{ gridRow: 5, gridColumn: 24 }}>
          <div className="jtbd-card">
            <div>
              <h3 className="jtbd-card-title" style={{ paddingRight: '15%' }}>
                Продаёте свой объект
              </h3>
              <p className="jtbd-card-text">
                На­хо­дим воз­мож­ные юр-сюр­при­зы, что­бы по­ку­па­тель не сор­вал сдел­ку.
              </p>
            </div>
            <div
              className="jtbd-card-icon"
              style={{
                top: '-45px',
                right: '-45px',
                transform: 'rotate(-10deg)',
              }}
            >
              <img src="/images/icons/2.png" alt="" className="jtbd-icon-image" />
            </div>
          </div>
        </div>

        {/* Card 3 - Инвестор (иконка за карточкой) */}
        <div className="jtbd-card-wrapper" style={{ gridRow: 12, gridColumn: 6 }}>
          <div
            className="jtbd-card-icon"
            style={{
              top: '132px',
              left: '-60px',
              transform: 'rotate(-10deg)',
            }}
          >
            <img src="/images/icons/3.png" alt="" className="jtbd-icon-image" />
          </div>
          <div className="jtbd-card">
            <div>
              <h3 className="jtbd-card-title">
                Инвестируете в недвижимость
              </h3>
              <p className="jtbd-card-text">
                По­мо­га­ем про­ве­рить пач­ку квар­тир и за­ра­нее от­се­ять рис­ко­ван­ные ва­ри­ан­ты.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 - Риелтор */}
        <div className="jtbd-card-wrapper" style={{ gridRow: 13, gridColumn: 22 }}>
          <div className="jtbd-card">
            <div>
              <h3 className="jtbd-card-title" style={{ paddingRight: '15%' }}>
                Вы риелтор или брокер
              </h3>
              <p className="jtbd-card-text">
                Быст­ро про­ве­ря­ем объ­ек­ты по ба­зам, что­бы не вес­ти кли­ен­тов в проб­ле­мы.
              </p>
            </div>
            <div
              className="jtbd-card-icon"
              style={{
                top: '-45px',
                right: '-45px',
                transform: 'rotate(-10deg)',
              }}
            >
              <img src="/images/icons/4.png" alt="" className="jtbd-icon-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
