import { useState } from 'react';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import SearchBlock from '@/components/SearchBlock';

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
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
};

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
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
};

function GlassSearchBlock() {
  const [address, setAddress] = useState('');

  const examples = [
    '77:08:0011001:1316',
    'г Москва, ул Маршала Бирюзова, д 41, кв 23',
  ];

  const handleExampleClick = (example: string) => {
    setAddress(example);
  };

  const handleSearch = () => {
    if (address.trim()) {
      window.location.href = `https://domvisor.ru/proverka?address=${encodeURIComponent(address)}`;
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <Input
        isClearable
        value={address}
        onValueChange={setAddress}
        onClear={() => setAddress('')}
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-sm",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
            "pr-1",
            "gap-2",
          ],
        }}
        label="Адрес"
        placeholder="Введите адрес объекта..."
        radius="lg"
        size="lg"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none shrink-0" />
        }
        endContent={
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAddress('')}
              className={`p-1 rounded-full hover:bg-black/10 transition-all ${address ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <Button
              isIconOnly
              radius="full"
              size="sm"
              className="bg-white/80 hover:bg-white text-gray-700"
              onPress={handleSearch}
            >
              <ArrowRightIcon className="text-lg" />
            </Button>
          </div>
        }
      />
      <p className="mt-3 text-sm text-white/70 text-center">
        Например{' '}
        <button
          onClick={() => handleExampleClick(examples[0])}
          className="text-white/90 hover:text-white transition-colors"
          style={{
            textDecoration: 'underline',
            textDecorationStyle: 'dotted',
            textDecorationColor: 'rgba(255,255,255,0.5)',
            textUnderlineOffset: '3px',
          }}
        >
          {examples[0]}
        </button>
        {' '}или{' '}
        <button
          onClick={() => handleExampleClick(examples[1])}
          className="text-white/90 hover:text-white transition-colors"
          style={{
            textDecoration: 'underline',
            textDecorationStyle: 'dotted',
            textDecorationColor: 'rgba(255,255,255,0.5)',
            textUnderlineOffset: '3px',
          }}
        >
          {examples[1]}
        </button>
      </p>
    </div>
  );
}

export default function SearchTestPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          Тестовая страница блока поиска
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Компонент SearchBlock
        </p>

        {/* Вариант 1: На светлом фоне */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold mb-4 text-center text-gray-700">
            Вариант 1: Светлый фон
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <SearchBlock />
          </div>
        </div>

        {/* Вариант 2: На градиентном фоне */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold mb-4 text-center text-gray-700">
            Вариант 2: Градиентный фон (как на главной)
          </h2>
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: '#F0FFFE',
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(69, 243, 255, 0.4) 0%, rgba(69, 243, 255, 0.2) 25%, rgba(69, 243, 255, 0.1) 50%, transparent 70%),
                radial-gradient(circle at 80% 60%, rgba(54, 255, 131, 0.35) 0%, rgba(54, 255, 131, 0.15) 30%, rgba(54, 255, 131, 0.05) 50%, transparent 70%)
              `,
            }}
          >
            <SearchBlock />
          </div>
        </div>

        {/* Вариант 3: На тёмном фоне */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold mb-4 text-center text-gray-700">
            Вариант 3: Тёмный фон
          </h2>
          <div className="bg-gray-900 rounded-2xl p-8">
            <SearchBlock />
          </div>
        </div>

        {/* Вариант 4: Glass-эффект с иконкой поиска */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold mb-4 text-center text-gray-700">
            Вариант 4: Glass-эффект (backdrop-blur)
          </h2>
          <div
            className="rounded-2xl p-8 flex justify-center items-center"
            style={{
              background: 'linear-gradient(to right, #ec4899, #eab308)',
            }}
          >
            <GlassSearchBlock />
          </div>
        </div>
      </div>
    </div>
  );
}
