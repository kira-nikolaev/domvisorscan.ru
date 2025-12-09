import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardBody } from '@heroui/card';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Divider } from '@heroui/divider';
import { Chip } from '@heroui/chip';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@heroui/modal';

// Данные об объекте (заглушка)
const objectData = {
  cadastralNumber: '77:08:0011001:1316',
  status: 'Учтенный',
  address: 'Российская Федерация, город Москва, вн.тер.г. муниципальный округ Щукино, улица Маршала Бирюзова, дом 41, квартира 23',
  area: '79,9',
  type: 'Помещение',
  cadastralValue: '15 119 083,89',
  valueDate: '01.01.2023',
};

// Тарифы
interface PricingTier {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  duration: string;
  features: string[];
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'transition',
    title: 'Отчет о переходе прав',
    subtitle: 'История сделок и смены собственников с датами и основаниями перехода прав.',
    price: 849,
    duration: 'от 15 минут',
    features: [],
  },
  {
    id: 'full',
    title: 'Полная проверка',
    subtitle: 'Полный анализ объекта и собственников с заключением о юридической чистоте.',
    price: 3500,
    duration: 'от 30 минут',
    highlighted: true,
    features: [],
  },
  {
    id: 'object',
    title: 'Отчет об объекте',
    subtitle: 'Текущий юридический статус недвижимости: запреты, аресты, обременения, ограничения.',
    price: 849,
    duration: 'от 15 минут',
    features: [],
  },
];

const CheckIcon = () => (
  <svg
    className="w-5 h-5 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <defs>
      <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#45F3FF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#36FF83', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M5 13l4 4L19 7"
      stroke="url(#checkGradient)"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    className="w-4 h-4 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Browser Mockup компонент для информации об объекте
function ObjectInfoBrowser() {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        borderRadius: '16px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        padding: '16px',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgb(255, 255, 255)',
          borderRadius: '12px',
          boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 20px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        {/* Browser header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '44px',
            backgroundColor: 'rgb(249, 250, 251)',
            borderBottom: '1px solid rgb(229, 231, 235)',
            paddingLeft: '16px',
            paddingRight: '16px',
            position: 'relative',
          }}
        >
          {/* Left side - control buttons */}
          <div style={{ position: 'absolute', left: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'rgb(255, 95, 86)' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'rgb(255, 189, 46)' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'rgb(39, 201, 63)' }} />
          </div>

          {/* Title */}
          <span style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#11181C',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            Заказ отчета о недвижимости
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: '24px', background: 'linear-gradient(135deg, #ffffff 0%, #f0fffe 100%)' }}>
          {/* Header with status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Chip
              size="sm"
              style={{
                background: '#10B981',
                color: 'white',
                fontWeight: 600,
              }}
            >
              {objectData.status}
            </Chip>
            <span style={{ fontSize: '14px', color: '#687076' }}>
              Кадастровый номер: <strong style={{ color: '#11181C', fontFamily: 'monospace' }}>{objectData.cadastralNumber}</strong>
            </span>
          </div>

          {/* Address */}
          <h2 style={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#11181C',
            marginBottom: '20px',
            lineHeight: 1.4,
            fontFamily: "'Open Sans', sans-serif",
          }}>
            {objectData.address}
          </h2>

          {/* Property details grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            <div>
              <p style={{ fontSize: '12px', color: '#687076', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Площадь</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#11181C' }}>{objectData.area} м²</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#687076', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Тип объекта</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#11181C' }}>{objectData.type}</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#687076', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Кадастровая стоимость</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#11181C' }}>{objectData.cadastralValue} ₽</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#687076', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Дата оценки</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#11181C' }}>{objectData.valueDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderPage() {
  const [selectedTier, setSelectedTier] = useState<string>('full');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const selectedPricing = pricingTiers.find((t) => t.id === selectedTier);

  return (
    <>
      {/* Main Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-start bg-white">
        <div
          style={{
            width: '100%',
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
            alignItems: 'center',
            lineHeight: '24px',
            paddingTop: '56px',
            paddingBottom: '60px',
            minHeight: '100vh',
          }}
        >
          <Navbar />

          {/* Main Content */}
          <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-12 mt-8">
            {/* Object Info Browser Mockup */}
            <div className="mb-8">
              <ObjectInfoBrowser />
            </div>

            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#11181C] text-center mb-6">
              Выберите тип отчёта
            </h2>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {pricingTiers.map((tier) => (
                <Card
                  key={tier.id}
                  isPressable
                  onPress={() => setSelectedTier(tier.id)}
                  className="relative p-3 cursor-pointer transition-all duration-200"
                  style={{
                    backgroundColor: tier.highlighted ? '#11181C' : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(12px)',
                    border: selectedTier === tier.id
                      ? '3px solid transparent'
                      : tier.highlighted
                        ? '2px solid rgba(69, 243, 255, 0.3)'
                        : '2px solid rgba(17, 17, 17, 0.15)',
                    borderRadius: '16px',
                    boxShadow: selectedTier === tier.id
                      ? '0 0 0 3px rgba(69, 243, 255, 0.5), 0 8px 32px rgba(69, 243, 255, 0.3)'
                      : tier.highlighted
                        ? '0 8px 32px rgba(69, 243, 255, 0.2)'
                        : 'none',
                    transform: selectedTier === tier.id ? 'scale(1.02)' : 'scale(1)',
                  }}
                >
                  {/* Selection indicator */}
                  {selectedTier === tier.id && (
                    <div
                      className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: '#10B981',
                      }}
                    >
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}

                  <CardHeader className="flex flex-col items-start pb-2 pt-2 px-3">
                    <h3
                      className={`font-bold text-lg text-left ${tier.highlighted ? 'text-white' : 'text-[#11181C]'}`}
                    >
                      {tier.title}
                    </h3>
                    <p className={`text-sm text-left ${tier.highlighted ? 'text-gray-300' : 'text-[#687076]'}`}>
                      {tier.subtitle}
                    </p>
                  </CardHeader>

                  <div
                    className="my-2 mx-3"
                    style={{
                      background: tier.highlighted
                        ? 'linear-gradient(90deg, rgb(69, 243, 255) 0%, rgb(54, 255, 131) 100%)'
                        : 'rgba(0, 0, 0, 0.1)',
                      height: '1px',
                    }}
                  />

                  <CardBody className="px-3 py-3">
                    <div className="flex items-start justify-between">
                      {/* Left: Price + Duration */}
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-1 mb-1">
                          <span
                            className={`text-3xl font-bold ${tier.highlighted ? 'text-white' : 'text-[#11181C]'}`}
                          >
                            {tier.price.toLocaleString('ru-RU')}
                          </span>
                          <span className={`text-lg ${tier.highlighted ? 'text-white' : 'text-[#11181C]'}`}>
                            ₽
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={tier.highlighted ? 'text-gray-400' : 'text-[#687076]'}>
                            <ClockIcon />
                          </div>
                          <span className={`text-sm ${tier.highlighted ? 'text-gray-400' : 'text-[#687076]'}`}>
                            {tier.duration}
                          </span>
                        </div>
                      </div>

                      {/* Right: Included reports */}
                      {tier.highlighted && (
                        <div className="flex flex-col gap-1 items-end">
                          <span className="text-xs text-gray-400 mb-0.5">Входит в стоимость:</span>
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(69, 243, 255, 0.2)', color: '#45F3FF' }}>
                            + Переход прав
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(54, 255, 131, 0.2)', color: '#36FF83' }}>
                            + Объект
                          </span>
                        </div>
                      )}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>

            {/* Contact Form & Payment */}
            <Card
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                borderRadius: '20px',
              }}
            >
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-[#11181C] mb-4">
                  Контактные данные
                </h3>
                <p className="text-sm text-[#687076] mb-6">
                  Укажите телефон и email — на них придёт готовый отчёт
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <Input
                    type="tel"
                    label="Телефон"
                    placeholder="+7 (999) 123-45-67"
                    value={phone}
                    onValueChange={setPhone}
                    variant="bordered"
                    size="lg"
                    classNames={{
                      inputWrapper: 'border-[#E4E4E7] hover:border-[#45F3FF] focus-within:border-[#45F3FF]',
                    }}
                  />
                  <Input
                    type="email"
                    label="Email"
                    placeholder="example@mail.ru"
                    value={email}
                    onValueChange={setEmail}
                    variant="bordered"
                    size="lg"
                    classNames={{
                      inputWrapper: 'border-[#E4E4E7] hover:border-[#45F3FF] focus-within:border-[#45F3FF]',
                    }}
                  />
                </div>

                <Divider className="mb-6" />

                {/* Order Summary */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-sm text-[#687076]">К оплате:</p>
                    <p className="text-3xl font-bold text-[#11181C]">
                      {selectedPricing?.price.toLocaleString('ru-RU')} ₽
                    </p>
                    <p className="text-sm text-[#687076]">
                      {selectedPricing?.title}
                    </p>
                  </div>
                  <Button
                    size="lg"
                    onPress={onOpen}
                    className="w-full sm:w-auto text-white font-semibold px-12"
                    style={{
                      background: '#11181C',
                      borderRadius: '9999px',
                      fontSize: '16px',
                    }}
                  >
                    Оплатить
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        classNames={{
          backdrop: 'bg-black/50',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h3 className="text-xl font-bold">Оплата заказа</h3>
                <p className="text-sm font-normal text-[#687076]">
                  {selectedPricing?.title} — {selectedPricing?.price.toLocaleString('ru-RU')} ₽
                </p>
              </ModalHeader>
              <ModalBody>
                <div className="space-y-4">
                  {/* Order summary */}
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-[#687076] mb-2">Объект проверки:</p>
                    <p className="text-sm font-semibold text-[#11181C]">{objectData.address}</p>
                    <p className="text-xs text-[#687076] mt-1">Кадастровый номер: {objectData.cadastralNumber}</p>
                  </div>

                  {/* Contact info */}
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-[#687076] mb-2">Отчёт будет отправлен на:</p>
                    <p className="text-sm font-semibold text-[#11181C]">{email || 'Email не указан'}</p>
                    <p className="text-sm text-[#11181C]">{phone || 'Телефон не указан'}</p>
                  </div>

                  {/* Payment method placeholder */}
                  <div className="p-4 border-2 border-dashed border-gray-200 rounded-xl text-center">
                    <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <p className="text-sm text-[#687076]">
                      Здесь будет форма оплаты
                    </p>
                    <p className="text-xs text-[#A1A1AA] mt-1">
                      Интеграция с платёжной системой
                    </p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Отмена
                </Button>
                <Button
                  onPress={onClose}
                  className="text-white font-semibold"
                  style={{
                    background: 'linear-gradient(90deg, rgb(69, 243, 255) 0%, rgb(54, 255, 131) 100%)',
                  }}
                >
                  Перейти к оплате
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Footer />
    </>
  );
}
