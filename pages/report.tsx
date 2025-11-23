import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { Button } from '@heroui/button';
import { Chip } from '@heroui/chip';
import { Progress } from '@heroui/progress';
import { Link } from '@heroui/link';
import { Alert } from '@heroui/alert';

// Mock data for the report
const mockPropertyData = {
  address: 'г. Москва, ул. Тверская, д. 12, кв. 45',
  cadastralNumber: '77:01:0001001:1234',
  area: '65.5 м²',
  rooms: '2 комнаты',
  floor: '5 этаж из 12',
  yearBuilt: '2018',
  marketValue: '18 500 000 ₽',
  cadastralValue: '12 340 000 ₽',
  lastUpdate: '23 ноября 2024',
};

const propertyChecks = [
  {
    title: 'Обременения',
    status: 'success',
    description: 'Обременения отсутствуют',
    details: 'На объект не зарегистрировано никаких обременений',
  },
  {
    title: 'Ограничения',
    status: 'warning',
    description: 'Найдено 1 ограничение',
    details: 'Запрет на перепланировку без согласования',
  },
  {
    title: 'Текущие собственники',
    status: 'success',
    description: '1 собственник',
    details: 'Иванов Иван Иванович (100% доля)',
  },
  {
    title: 'История владения',
    status: 'success',
    description: '3 владельца за 5 лет',
    details: 'Все сделки проведены законно',
  },
  {
    title: 'Ранее присвоенные номера',
    status: 'success',
    description: 'Изменений не было',
    details: 'Кадастровый номер не менялся',
  },
  {
    title: 'Кадастровые работы',
    status: 'success',
    description: 'Проведены в 2018 году',
    details: 'Все документы в порядке',
  },
  {
    title: 'План объекта',
    status: 'success',
    description: 'План соответствует',
    details: 'Фактическая планировка соответствует документам',
  },
];

const recommendations = [
  {
    title: 'Юридическая чистота',
    status: 'excellent',
    text: 'Объект юридически чист, рисков не выявлено',
  },
  {
    title: 'Рыночная стоимость',
    status: 'good',
    text: 'Цена соответствует рынку, торг возможен до 5%',
  },
  {
    title: 'Инвестиционная привлекательность',
    status: 'excellent',
    text: 'Высокий потенциал роста стоимости (15-20% в год)',
  },
  {
    title: 'Техническое состояние',
    status: 'good',
    text: 'Хорошее состояние, ремонт не требуется',
  },
  {
    title: 'Инфраструктура',
    status: 'excellent',
    text: 'Развитая инфраструктура, все необходимое в шаговой доступности',
  },
  {
    title: 'Документы',
    status: 'good',
    text: 'Все документы в порядке, готовы к сделке',
  },
  {
    title: 'Общая рекомендация',
    status: 'excellent',
    text: 'Рекомендуем к покупке. Отличный вариант для проживания или инвестиций',
  },
];

export default function ReportPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'success';
      case 'warning':
        return 'warning';
      case 'danger':
        return 'danger';
      default:
        return 'default';
    }
  };

  const getRecommendationColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'success';
      case 'good':
        return 'primary';
      case 'warning':
        return 'warning';
      case 'danger':
        return 'danger';
      default:
        return 'default';
    }
  };

  return (
    <>
      {/* Navbar */}
      <section className="page-container relative flex flex-col items-center justify-start bg-white">
        <div
          className="gradient-container"
          style={{
            alignItems: 'center',
            backgroundColor: '#F0FFFE',
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(69, 243, 255, 0.4) 0%, rgba(69, 243, 255, 0.2) 25%, rgba(69, 243, 255, 0.1) 50%, transparent 70%),
              radial-gradient(circle at 80% 60%, rgba(54, 255, 131, 0.35) 0%, rgba(54, 255, 131, 0.15) 30%, rgba(54, 255, 131, 0.05) 50%, transparent 70%),
              radial-gradient(circle at 50% 80%, rgba(161, 251, 255, 0.3) 0%, rgba(161, 251, 255, 0.1) 40%, transparent 65%)
            `,
            boxSizing: 'border-box',
            color: 'rgb(17, 24, 28)',
            display: 'flex',
            flexDirection: 'column',
            lineHeight: '24px',
            paddingBottom: '60px',
          }}
        >
          <Navbar />

          {/* Hero Section - Same as main page */}
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
              Пример отчета
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
              {mockPropertyData.address}
            </h1>

            <p
              className="hero-subtitle"
              style={{
                boxSizing: 'border-box',
                color: 'rgb(82, 82, 91)',
                textAlign: 'center',
              }}
            >
              {mockPropertyData.address} • Отчет от {mockPropertyData.lastUpdate}
            </p>

            <div className="cta-buttons">
              <a href="/" style={{ textDecoration: 'none' }}>
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
                  Заказать отчет
                </button>
              </a>

              <a href="#table-of-contents" style={{ textDecoration: 'none' }}>
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
                  Смотреть детали
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </a>
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
                  justifyContent: 'flex-start',
                  height: '52px',
                  backgroundColor: 'rgb(249, 250, 251)',
                  borderBottom: '1px solid rgb(229, 231, 235)',
                  paddingLeft: '32px',
                  paddingRight: '32px',
                  position: 'relative',
                  gap: '12px',
                }}
              >
                {/* Обременения */}
                <div className="flex items-start gap-1.5">
                  <div className="w-2 h-2 rounded-full flex-shrink-0 mt-[2px]" style={{ backgroundColor: '#17C964' }} />
                  <div className="flex flex-col gap-0">
                    <span style={{ fontSize: '10px', color: 'rgb(107, 114, 128)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px', lineHeight: '1.2' }}>
                      Обременения
                    </span>
                    <span style={{ fontSize: '11px', color: 'rgb(17, 24, 28)', fontWeight: 600, lineHeight: '1.2' }}>
                      Отсутствуют
                    </span>
                  </div>
                </div>

                {/* Ограничения */}
                <div className="flex items-start gap-1.5">
                  <div className="w-2 h-2 rounded-full flex-shrink-0 mt-[2px]" style={{ backgroundColor: '#17C964' }} />
                  <div className="flex flex-col gap-0">
                    <span style={{ fontSize: '10px', color: 'rgb(107, 114, 128)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px', lineHeight: '1.2' }}>
                      Ограничения
                    </span>
                    <span style={{ fontSize: '11px', color: 'rgb(17, 24, 28)', fontWeight: 600, lineHeight: '1.2' }}>
                      Не найдены
                    </span>
                  </div>
                </div>

                {/* Краткое саммари - centered */}
                <span style={{
                  fontSize: '14px',
                  color: 'rgb(17, 24, 28)',
                  fontWeight: 600,
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}>
                  Краткое саммари
                </span>
              </div>

              {/* Screenshot content - Property data */}
              <div
                style={{
                  width: '100%',
                  padding: '32px',
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                  minHeight: '400px',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    {/* Price Estimate */}
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Оценка стоимости</p>
                      <p className="text-3xl font-bold text-gray-900">
                        17 500 000 ₽ — 19 500 000 ₽
                      </p>
                    </div>

                    {/* Full Address */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Адрес объекта</p>
                      <p className="text-base font-semibold text-gray-900">{mockPropertyData.address}</p>
                    </div>

                    {/* Property Type */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Тип помещения</p>
                      <p className="text-base font-semibold text-gray-900">Квартира, Жилое помещение</p>
                    </div>

                    {/* Area */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Площадь объекта</p>
                      <p className="text-base font-semibold text-gray-900">{mockPropertyData.area}</p>
                    </div>

                    {/* Map Link */}
                    <div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Смотреть на карте
                      </a>
                    </div>
                  </div>

                  {/* Middle Column */}
                  <div className="space-y-4">
                    {/* Cadastral Value */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Кадастровая стоимость</p>
                      <p className="text-base font-semibold text-gray-900">{mockPropertyData.cadastralValue}</p>
                    </div>

                    {/* Cadastral Number */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Кадастровый номер</p>
                      <p className="text-base font-mono font-semibold text-gray-900">{mockPropertyData.cadastralNumber}</p>
                    </div>

                    {/* Building Cadastral Number */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Кадастровый номер здания</p>
                      <p className="text-base font-mono font-semibold text-gray-900">77:08:0011001:1007</p>
                    </div>

                    {/* Cadastral Quarter */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Кадастровый квартал</p>
                      <p className="text-base font-mono font-semibold text-gray-900">77:08:0011001</p>
                    </div>
                  </div>

                  {/* Third Column - Status Info */}
                  <div className="space-y-4">
                    {/* Текущие собственники */}
                    <div className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5" style={{ color: '#6B7280' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Текущие собственники</p>
                        <p className="text-sm font-semibold text-gray-900">1 человек</p>
                      </div>
                    </div>

                    {/* История владения */}
                    <div className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5" style={{ color: '#6B7280' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">История владения</p>
                        <p className="text-sm font-semibold text-gray-900">Найдено 5</p>
                      </div>
                    </div>

                    {/* План объекта */}
                    <div className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5" style={{ color: '#6B7280' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">План объекта</p>
                        <p className="text-sm font-semibold text-gray-900">Найдено 1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50" id="table-of-contents">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Содержание отчета</h2>
          <Card className="bg-white">
            <CardBody className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="#property-checks" color="foreground" className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-medium">1. Проверка объекта недвижимости</span>
                </Link>
                <Link href="#owner-check" color="foreground" className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-medium">2. Проверка собственников</span>
                </Link>
                <Link href="#recommendations" color="foreground" className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-medium">3. Заключения и рекомендации</span>
                </Link>
                <Link href="#price-history" color="foreground" className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-medium">4. История изменения цены</span>
                </Link>
                <Link href="#sales-history" color="foreground" className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-medium">5. История продаж в доме</span>
                </Link>
                <Link href="#sources" color="foreground" className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-medium">6. Источники данных</span>
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Property Checks Section */}
      <section className="py-12 bg-white" id="property-checks">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Проверка объекта недвижимости</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {propertyChecks.map((check, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start w-full">
                    <h3 className="font-semibold text-lg">{check.title}</h3>
                    <Chip size="sm" color={getStatusColor(check.status)} variant="flat">
                      {check.status === 'success' ? '✓' : check.status === 'warning' ? '!' : '✗'}
                    </Chip>
                  </div>
                </CardHeader>
                <CardBody className="pt-2">
                  <p className="font-medium mb-2">{check.description}</p>
                  <p className="text-sm text-gray-600">{check.details}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Check Section */}
      <section className="py-12 bg-gray-50" id="owner-check">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Проверка собственников</h2>
          <Card className="bg-white">
            <CardBody className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Текущий собственник</h3>
                    <p className="text-gray-700">Иванов Иван Иванович</p>
                    <p className="text-sm text-gray-500 mt-1">Доля: 100% | С 15.03.2022</p>
                  </div>
                  <Chip color="success" variant="flat">Проверено</Chip>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Проверка собственника:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Chip size="sm" color="success" variant="dot">✓</Chip>
                      <span>Банкротство не найдено</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Chip size="sm" color="success" variant="dot">✓</Chip>
                      <span>Судебные дела отсутствуют</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Chip size="sm" color="success" variant="dot">✓</Chip>
                      <span>Исполнительные производства не найдены</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Chip size="sm" color="success" variant="dot">✓</Chip>
                      <span>Паспорт действителен</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3">История владельцев:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium">Петров Петр Петрович</p>
                        <p className="text-sm text-gray-500">01.06.2020 - 15.03.2022</p>
                      </div>
                      <Chip size="sm" variant="flat">Предыдущий</Chip>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium">ООО "СтройИнвест"</p>
                        <p className="text-sm text-gray-500">12.09.2018 - 01.06.2020</p>
                      </div>
                      <Chip size="sm" variant="flat">Застройщик</Chip>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-12 bg-white" id="recommendations">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Заключения и рекомендации</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendations.map((rec, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardBody className="p-6">
                  <div className="flex items-start gap-3">
                    <Chip
                      size="sm"
                      color={getRecommendationColor(rec.status)}
                      variant="flat"
                      className="mt-1"
                    >
                      {rec.status === 'excellent' ? '★★★' : rec.status === 'good' ? '★★' : '★'}
                    </Chip>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{rec.title}</h3>
                      <p className="text-gray-700">{rec.text}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Overall Score */}
          <Card className="mt-8 bg-gradient-to-r from-green-50 to-blue-50">
            <CardBody className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Общая оценка объекта</h3>
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="text-5xl font-bold text-green-600">9.2</span>
                <span className="text-2xl text-gray-500">/ 10</span>
              </div>
              <Progress
                value={92}
                color="success"
                size="lg"
                className="max-w-md mx-auto mb-4"
              />
              <p className="text-lg text-gray-700">
                Отличный объект для покупки. Минимальные риски, высокий потенциал.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Price History Section */}
      <section className="py-12 bg-gray-50" id="price-history">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">История изменения цены</h2>
          <Card className="bg-white">
            <CardBody className="p-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border-l-4 border-green-500 bg-green-50">
                  <div>
                    <p className="font-semibold">Текущая цена</p>
                    <p className="text-2xl font-bold">18 500 000 ₽</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">23 ноября 2024</p>
                    <Chip size="sm" color="success" variant="flat">+2.8%</Chip>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 border-l-4 border-gray-300">
                  <div>
                    <p className="text-gray-600">18 000 000 ₽</p>
                  </div>
                  <p className="text-sm text-gray-500">15 октября 2024</p>
                </div>
                <div className="flex justify-between items-center p-4 border-l-4 border-gray-300">
                  <div>
                    <p className="text-gray-600">17 500 000 ₽</p>
                  </div>
                  <p className="text-sm text-gray-500">1 сентября 2024</p>
                </div>
                <div className="flex justify-between items-center p-4 border-l-4 border-gray-300">
                  <div>
                    <p className="text-gray-600">16 800 000 ₽</p>
                  </div>
                  <p className="text-sm text-gray-500">15 июля 2024</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm">
                  <span className="font-semibold">Анализ:</span> За последние 4 месяца цена выросла на 10.1%.
                  Средний рост по району составляет 7%, что говорит о высоком спросе на данный объект.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Sales History Section */}
      <section className="py-12 bg-white" id="sales-history">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">История продаж в доме</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Последние продажи</h3>
              </CardHeader>
              <CardBody>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Квартира 23, 2 комнаты</p>
                        <p className="text-sm text-gray-500">58 м²</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">17 200 000 ₽</p>
                        <p className="text-xs text-gray-500">15.10.2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Квартира 67, 3 комнаты</p>
                        <p className="text-sm text-gray-500">82 м²</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">23 500 000 ₽</p>
                        <p className="text-xs text-gray-500">02.09.2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Квартира 12, 1 комната</p>
                        <p className="text-sm text-gray-500">42 м²</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">12 800 000 ₽</p>
                        <p className="text-xs text-gray-500">20.08.2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="font-semibold">Статистика продаж</h3>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Средняя цена за м²</p>
                    <p className="text-2xl font-bold">282 400 ₽</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Продано за последний год</p>
                    <p className="text-xl font-semibold">12 квартир</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Средний срок продажи</p>
                    <p className="text-xl font-semibold">45 дней</p>
                  </div>
                  <div className="pt-3 border-t">
                    <Chip color="success" variant="flat" className="w-full justify-center">
                      Высокая ликвидность
                    </Chip>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-12 bg-gray-50" id="sources">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Источники данных</h2>
          <Card className="bg-white">
            <CardBody className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Государственные реестры</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Chip size="sm" color="success" variant="dot">✓</Chip>
                      <span>ЕГРН (Росреестр)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Chip size="sm" color="success" variant="dot">✓</Chip>
                      <span>ГИС ЖКХ</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Chip size="sm" color="success" variant="dot">✓</Chip>
                      <span>ФССП (судебные приставы)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Chip size="sm" color="success" variant="dot">✓</Chip>
                      <span>Арбитражные суды</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Дополнительные источники</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Chip size="sm" color="primary" variant="dot">○</Chip>
                      <span>База объявлений о продаже</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Chip size="sm" color="primary" variant="dot">○</Chip>
                      <span>История цен недвижимости</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Chip size="sm" color="primary" variant="dot">○</Chip>
                      <span>Кадастровая карта</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Chip size="sm" color="primary" variant="dot">○</Chip>
                      <span>Реестр залогов</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm">
                  <span className="font-semibold">Актуальность данных:</span> Все данные получены из официальных источников
                  и актуальны на {mockPropertyData.lastUpdate}. Рекомендуем повторить проверку перед совершением сделки.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужен полный отчет по вашему объекту?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Получите детальную проверку любой недвижимости за 5 минут
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-semibold"
              style={{
                background: 'linear-gradient(90deg, rgba(69, 243, 255, 1) 0%, rgba(54, 255, 131, 1) 100%)',
                color: 'black',
              }}
              onClick={() => window.location.href = 'https://domvisor.ru/proverka'}
            >
              Проверить недвижимость
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="font-semibold"
            >
              Узнать больше о сервисе
            </Button>
          </div>

          {/* Tariff Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <h3 className="font-semibold">Базовый</h3>
              </CardHeader>
              <CardBody>
                <p className="text-3xl font-bold mb-2">299 ₽</p>
                <p className="text-sm text-gray-600 mb-4">Основная проверка</p>
                <ul className="text-left space-y-1 text-sm">
                  <li>✓ Проверка обременений</li>
                  <li>✓ История владельцев</li>
                  <li>✓ Кадастровые данные</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-primary">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Расширенный</h3>
                  <Chip size="sm" color="primary" variant="flat">Популярный</Chip>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-3xl font-bold mb-2">599 ₽</p>
                <p className="text-sm text-gray-600 mb-4">Полная проверка</p>
                <ul className="text-left space-y-1 text-sm">
                  <li>✓ Всё из базового</li>
                  <li>✓ Проверка собственников</li>
                  <li>✓ Судебные дела</li>
                  <li>✓ Анализ цены</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <h3 className="font-semibold">Премиум</h3>
              </CardHeader>
              <CardBody>
                <p className="text-3xl font-bold mb-2">999 ₽</p>
                <p className="text-sm text-gray-600 mb-4">Максимальная защита</p>
                <ul className="text-left space-y-1 text-sm">
                  <li>✓ Всё из расширенного</li>
                  <li>✓ Юридическое заключение</li>
                  <li>✓ Проверка застройщика</li>
                  <li>✓ Консультация эксперта</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}