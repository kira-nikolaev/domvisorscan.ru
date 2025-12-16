import React from 'react';
import Image from 'next/image';

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
                Вы­явим арес­ты, за­ло­ги и су­деб­ные спо­ры до вне­се­ния за­дат­ка.
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
              <Image
                src="/images/icons/1.png"
                alt="Покупка квартиры"
                width={1024}
                height={1024}
                className="jtbd-icon-image"
                loading="lazy"
              />
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
                Вы­явим скры­тые рис­ки за­ра­нее, что­бы по­ку­па­тель не сор­вал сдел­ку.
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
              <Image
                src="/images/icons/2.png"
                alt="Продажа недвижимости"
                width={1024}
                height={1024}
                className="jtbd-icon-image"
                loading="lazy"
              />
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
            <Image
              src="/images/icons/3.png"
              alt="Инвестиции в недвижимость"
              width={1024}
              height={1024}
              className="jtbd-icon-image"
              loading="lazy"
            />
          </div>
          <div className="jtbd-card">
            <div>
              <h3 className="jtbd-card-title">
                Инвестируете в недвижимость
              </h3>
              <p className="jtbd-card-text">
                Про­ана­ли­зи­ру­ем порт­фель объ­ек­тов и вы­де­лим ак­ти­вы с чис­той ис­то­ри­ей.
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
                Опе­ра­тив­ная про­вер­ка по ре­ест­рам — за­щи­ти­те ре­пу­та­цию пе­ред кли­ен­том.
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
              <Image
                src="/images/icons/4.png"
                alt="Риелторы и брокеры"
                width={1024}
                height={1024}
                className="jtbd-icon-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
