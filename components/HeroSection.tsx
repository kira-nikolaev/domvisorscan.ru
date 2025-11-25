import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { dadataService, isCadastralNumber, type DaDataSuggestion } from '@/services/dadata';

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M4 12h16m0 0l-6-6m6 6l-6 6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);


function HeroSearchBlock() {
  const [address, setAddress] = useState('');
  const [mounted, setMounted] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<DaDataSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCadnum, setSelectedCadnum] = useState<string | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Запрос подсказок из DaData API
  const fetchSuggestions = useCallback(async (query: string) => {
    if (query.length < 2 || isCadastralNumber(query)) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setIsLoading(true);
    try {
      const results = await dadataService.suggest(query);
      setSuggestions(results);
      setShowSuggestions(results.length > 0);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Debounce для запросов
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      fetchSuggestions(address);
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [address, fetchSuggestions]);

  const examples = [
    '77:08:0011001:1316',
    'г Москва, ул Маршала Бирюзова, д 41, кв 23',
  ];

  const handleExampleClick = (example: string) => {
    setAddress(example);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: DaDataSuggestion) => {
    console.log('DaData suggestion selected:', suggestion);
    setAddress(suggestion.value);
    setSelectedCadnum(suggestion.data.house_cadnum);
    setShowSuggestions(false);
  };

  const handleSearch = async () => {
    if (!address.trim()) return;

    const utm = 'utm_source=domvisorscan';

    // Если уже есть кадастровый номер из выбранной подсказки
    if (selectedCadnum) {
      window.location.href = `https://domvisor.ru/object/${selectedCadnum}?${utm}`;
      return;
    }

    // Если введён кадастровый номер напрямую
    if (isCadastralNumber(address)) {
      window.location.href = `https://domvisor.ru/object/${address.trim()}?${utm}`;
      return;
    }

    // Запрашиваем кадастровый номер для введённого адреса
    const cadnum = await dadataService.findCadnum(address);
    if (cadnum) {
      window.location.href = `https://domvisor.ru/object/${cadnum}?${utm}`;
      return;
    }

    // Fallback - переход с адресом
    window.location.href = `https://domvisor.ru/proverka?address=${encodeURIComponent(address)}&${utm}`;
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative">
        <Input
          value={address}
          onValueChange={(val) => {
            setAddress(val);
            setSelectedCadnum(null);
          }}
          onFocus={() => address.length >= 2 && suggestions.length > 0 && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          classNames={{
            label: "text-black/50",
            input: [
              "bg-transparent",
              "text-black/90",
              "placeholder:text-default-700/50",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-md",
              address ? "!bg-white" : "bg-white/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:!bg-[#ffffff]",
              "group-data-[focus=true]:!bg-[#ffffff]",
              "!cursor-text",
              "pr-1",
              "gap-2",
            ],
          }}
          placeholder="Введите адрес или кадастровый номер"
          radius="lg"
          size="lg"
          startContent={
            <SearchIcon className="text-black/40 pointer-events-none shrink-0 text-lg" />
          }
          endContent={
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setAddress(''); setShowSuggestions(false); }}
                className={`p-1 rounded-full hover:bg-black/10 transition-all ${mounted && address ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <Button
                isIconOnly
                radius="full"
                size="sm"
                className="bg-black text-white hover:bg-gray-800"
                onPress={handleSearch}
              >
                <ArrowRightIcon className="text-lg" />
              </Button>
            </div>
          }
        />

        {/* Suggestions dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div
            className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50"
          >
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 flex items-center gap-3"
                onMouseDown={() => handleSuggestionClick(suggestion)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-800 text-sm">{suggestion.value}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <p className="mt-3 text-sm text-gray-500 text-center">
        Например{' '}
        <button
          onClick={() => handleExampleClick(examples[0])}
          className="text-gray-700 hover:text-black transition-colors"
          style={{
            textDecoration: 'underline',
            textDecorationStyle: 'dotted',
            textDecorationColor: 'rgba(0,0,0,0.3)',
            textUnderlineOffset: '3px',
          }}
        >
          {examples[0]}
        </button>
        {' '}или{' '}
        <button
          onClick={() => handleExampleClick(examples[1])}
          className="text-gray-700 hover:text-black transition-colors"
          style={{
            textDecoration: 'underline',
            textDecorationStyle: 'dotted',
            textDecorationColor: 'rgba(0,0,0,0.3)',
            textUnderlineOffset: '3px',
          }}
        >
          {examples[1]}
        </button>
      </p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <>
      {/* Flex container for centered content */}
      <div className="hero-container" style={{ paddingTop: '24px' }}>
        {/* Tagline */}
        <p
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgb(107, 114, 128)',
            textAlign: 'center',
            marginBottom: '0px',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
          }}
        >
          Быстрая и безопасная проверка по 27 источникам
        </p>

        <h1
          className="hero-title"
          style={{
            boxSizing: 'border-box',
            color: 'rgb(17, 24, 28)',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 800,
            padding: '0 40px',
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
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
        </h1>

        {/* Search Block */}
        <HeroSearchBlock />

        {/* CTA Buttons */}
        <div className="cta-buttons" style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '48px' }}>
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
                paddingLeft: '16px',
                paddingRight: '16px',
                textAlign: 'center',
                transitionDuration: '0.25s',
                transitionProperty: 'transform, scale, color, background, background-color',
                transitionTimingFunction: 'ease',
                userSelect: 'none',
              }}
            >
              Выбрать тариф
            </button>
          </a>

          <Link href="/report">
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
                paddingLeft: '16px',
                paddingRight: '16px',
                textAlign: 'center',
                transitionDuration: '0.25s',
                transitionProperty: 'transform, scale, color, background, background-color',
                transitionTimingFunction: 'ease',
                userSelect: 'none',
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
          </Link>
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

          {/* Screenshot content - Property data */}
          <div
            style={{
              width: '100%',
              padding: '32px',
              background: 'linear-gradient(135deg, #ffffff 0%, #d9ebff 100%)',
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
                    17 500 000 р. — 19 500 000 р.
                  </p>
                </div>

                {/* Full Address */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Адрес объекта</p>
                  <p className="text-base font-semibold text-gray-900">г. Москва, ул. Тверская, д. 12, кв. 45</p>
                </div>

                {/* Property Type */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Тип помещения</p>
                  <p className="text-base font-semibold text-gray-900">Квартира, Жилое помещение</p>
                </div>

                {/* Area */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Площадь объекта</p>
                  <p className="text-base font-semibold text-gray-900">65.5 м²</p>
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
                  <p className="text-base font-semibold text-gray-900">12 340 000 р.</p>
                </div>

                {/* Cadastral Number */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Кадастровый номер</p>
                  <p className="text-base font-mono font-semibold text-gray-900">77:01:0001001:1234</p>
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
                    <p className="text-sm font-semibold text-gray-900 underline decoration-dotted decoration-gray-400">1 человек</p>
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
                    <p className="text-sm font-semibold text-gray-900 underline decoration-dotted decoration-gray-400">Найдено 5</p>
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
                    <p className="text-sm font-semibold text-gray-900 underline decoration-dotted decoration-gray-400">Найдено 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
