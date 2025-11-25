import { useState, useMemo } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { Card, CardBody, CardHeader, CardFooter } from '@heroui/card';
import { Image as HeroImage } from '@heroui/image';
import { Button } from '@heroui/button';
import { Chip } from '@heroui/chip';
import { Progress } from '@heroui/progress';
import { Link } from '@heroui/link';
import { Alert } from '@heroui/alert';
import { Avatar, AvatarGroup } from '@heroui/avatar';
import { Accordion, AccordionItem } from '@heroui/accordion';
import { Modal, ModalContent, ModalBody, useDisclosure } from '@heroui/modal';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/dropdown';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@heroui/table';
import { Pagination } from '@heroui/pagination';
import Image from 'next/image';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Price history data for the chart
const priceHistoryData = [
  { month: "Янв '23", price: 16.2 },
  { month: "Фев '23", price: 16.8 },
  { month: "Мар '23", price: 16.4 },
  { month: "Апр '23", price: 17.1 },
  { month: "Май '23", price: 16.7 },
  { month: "Июн '23", price: 17.3 },
  { month: "Июл '23", price: 17.8 },
  { month: "Авг '23", price: 17.2 },
  { month: "Сен '23", price: 17.6 },
  { month: "Окт '23", price: 18.1 },
  { month: "Ноя '23", price: 17.5 },
  { month: "Дек '23", price: 17.9 },
  { month: "Янв '24", price: 17.4 },
  { month: "Фев '24", price: 18.0 },
  { month: "Мар '24", price: 17.6 },
  { month: "Апр '24", price: 18.3 },
  { month: "Май '24", price: 17.9 },
  { month: "Июн '24", price: 18.6 },
  { month: "Июл '24", price: 18.2 },
  { month: "Авг '24", price: 18.8 },
  { month: "Сен '24", price: 18.3 },
  { month: "Окт '24", price: 18.7 },
  { month: "Ноя '24", price: 18.5 },
];

// Sales history data
const salesHistoryData = [
  { id: 1, type: 'Квартира', area: 66, rooms: 2, floor: 2, price: 20299999, pricePerM2: 307575, date: '05.08.2025', year: 2025, image: '/images/apartments/apt1.jpg' },
  { id: 2, type: 'Квартира', area: 63.5, rooms: 2, floor: 3, price: 27000000, pricePerM2: 425196, date: '01.07.2025', year: 2025, image: '/images/apartments/apt2.jpg' },
  { id: 3, type: 'Квартира', area: 66, rooms: 2, floor: 2, price: 19999000, pricePerM2: 303015, date: '06.06.2025', year: 2025, image: '/images/apartments/apt3.jpg' },
  { id: 4, type: 'Квартира', area: 67, rooms: 2, floor: 1, price: 17000000, pricePerM2: 253731, date: '05.02.2025', year: 2025, image: '/images/apartments/apt4.jpg' },
  { id: 5, type: 'Квартира', area: 65, rooms: 2, floor: 2, price: 16900000, pricePerM2: 260000, date: '30.10.2024', year: 2024, image: '/images/apartments/apt5.jpg' },
  { id: 6, type: 'Квартира', area: 72, rooms: 3, floor: 5, price: 22500000, pricePerM2: 312500, date: '15.09.2024', year: 2024, image: '/images/apartments/apt1.jpg' },
  { id: 7, type: 'Квартира', area: 58, rooms: 2, floor: 7, price: 18200000, pricePerM2: 313793, date: '20.08.2024', year: 2024, image: '/images/apartments/apt2.jpg' },
  { id: 8, type: 'Квартира', area: 45, rooms: 1, floor: 3, price: 14500000, pricePerM2: 322222, date: '10.07.2024', year: 2024, image: '/images/apartments/apt3.jpg' },
  { id: 9, type: 'Квартира', area: 80, rooms: 3, floor: 9, price: 25800000, pricePerM2: 322500, date: '05.06.2024', year: 2024, image: '/images/apartments/apt4.jpg' },
  { id: 10, type: 'Квартира', area: 55, rooms: 2, floor: 4, price: 17100000, pricePerM2: 310909, date: '28.05.2024', year: 2024, image: '/images/apartments/apt5.jpg' },
  { id: 11, type: 'Квартира', area: 68, rooms: 2, floor: 6, price: 19800000, pricePerM2: 291176, date: '15.04.2024', year: 2024, image: '/images/apartments/apt1.jpg' },
  { id: 12, type: 'Квартира', area: 42, rooms: 1, floor: 2, price: 13200000, pricePerM2: 314285, date: '01.03.2024', year: 2024, image: '/images/apartments/apt2.jpg' },
  { id: 13, type: 'Квартира', area: 75, rooms: 3, floor: 8, price: 23500000, pricePerM2: 313333, date: '20.12.2023', year: 2023, image: '/images/apartments/apt3.jpg' },
  { id: 14, type: 'Квартира', area: 60, rooms: 2, floor: 5, price: 17800000, pricePerM2: 296666, date: '10.11.2023', year: 2023, image: '/images/apartments/apt4.jpg' },
  { id: 15, type: 'Квартира', area: 50, rooms: 1, floor: 1, price: 14000000, pricePerM2: 280000, date: '05.10.2023', year: 2023, image: '/images/apartments/apt5.jpg' },
  { id: 16, type: 'Квартира', area: 85, rooms: 4, floor: 10, price: 28000000, pricePerM2: 329411, date: '25.08.2023', year: 2023, image: '/images/apartments/apt1.jpg' },
  { id: 17, type: 'Квартира', area: 62, rooms: 2, floor: 3, price: 18500000, pricePerM2: 298387, date: '15.06.2023', year: 2023, image: '/images/apartments/apt2.jpg' },
  { id: 18, type: 'Квартира', area: 70, rooms: 3, floor: 7, price: 21000000, pricePerM2: 300000, date: '01.04.2023', year: 2023, image: '/images/apartments/apt3.jpg' },
];

// Rental history data
const rentalHistoryData = [
  { id: 1, type: 'Квартира', area: 44, rooms: 2, floor: 3, price: 70000, date: '25.08.2025', year: 2025, term: 'long', image: '/images/apartments/apt3.jpg' },
  { id: 2, type: 'Квартира', area: 63.5, rooms: 2, floor: 3, price: 110000, date: '30.07.2025', year: 2025, term: 'long', image: '/images/apartments/apt1.jpg' },
  { id: 3, type: 'Квартира', area: 67, rooms: 2, floor: 4, price: 130000, date: '17.05.2025', year: 2025, term: 'long', image: '/images/apartments/apt5.jpg' },
  { id: 4, type: 'Квартира', area: 65, rooms: 2, floor: 4, price: 150000, date: '15.04.2025', year: 2025, term: 'daily', image: '/images/apartments/apt2.jpg' },
  { id: 5, type: 'Квартира', area: 63, rooms: 2, floor: 3, price: 85600, date: '13.04.2025', year: 2025, term: 'long', image: '/images/apartments/apt4.jpg' },
  { id: 6, type: 'Квартира', area: 55, rooms: 2, floor: 5, price: 95000, date: '01.03.2025', year: 2025, term: 'long', image: '/images/apartments/apt1.jpg' },
  { id: 7, type: 'Квартира', area: 72, rooms: 3, floor: 6, price: 140000, date: '15.02.2025', year: 2025, term: 'long', image: '/images/apartments/apt2.jpg' },
  { id: 8, type: 'Квартира', area: 40, rooms: 1, floor: 2, price: 65000, date: '28.01.2025', year: 2025, term: 'long', image: '/images/apartments/apt3.jpg' },
  { id: 9, type: 'Квартира', area: 80, rooms: 3, floor: 8, price: 180000, date: '10.12.2024', year: 2024, term: 'daily', image: '/images/apartments/apt4.jpg' },
  { id: 10, type: 'Квартира', area: 58, rooms: 2, floor: 4, price: 100000, date: '25.11.2024', year: 2024, term: 'long', image: '/images/apartments/apt5.jpg' },
  { id: 11, type: 'Квартира', area: 45, rooms: 1, floor: 3, price: 75000, date: '05.10.2024', year: 2024, term: 'long', image: '/images/apartments/apt1.jpg' },
  { id: 12, type: 'Квартира', area: 68, rooms: 2, floor: 7, price: 120000, date: '20.09.2024', year: 2024, term: 'long', image: '/images/apartments/apt2.jpg' },
  { id: 13, type: 'Квартира', area: 50, rooms: 1, floor: 1, price: 80000, date: '15.08.2024', year: 2024, term: 'daily', image: '/images/apartments/apt3.jpg' },
  { id: 14, type: 'Квартира', area: 75, rooms: 3, floor: 9, price: 160000, date: '01.07.2024', year: 2024, term: 'long', image: '/images/apartments/apt4.jpg' },
  { id: 15, type: 'Квартира', area: 60, rooms: 2, floor: 5, price: 105000, date: '20.05.2024', year: 2024, term: 'long', image: '/images/apartments/apt5.jpg' },
  { id: 16, type: 'Квартира', area: 42, rooms: 1, floor: 2, price: 70000, date: '10.04.2024', year: 2024, term: 'long', image: '/images/apartments/apt1.jpg' },
  { id: 17, type: 'Квартира', area: 85, rooms: 4, floor: 10, price: 200000, date: '25.02.2024', year: 2024, term: 'daily', image: '/images/apartments/apt2.jpg' },
  { id: 18, type: 'Квартира', area: 62, rooms: 2, floor: 6, price: 110000, date: '15.01.2024', year: 2024, term: 'long', image: '/images/apartments/apt3.jpg' },
];

// ChevronDown icon for dropdowns
const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Mock data for the report
const mockPropertyData = {
  address: 'г. Москва, ул. Тверская, д. 12, кв. 45',
  cadastralNumber: '77:01:0001001:1234',
  area: '65.5 м²',
  rooms: '2 комнаты',
  floor: '5 этаж из 12',
  yearBuilt: '2018',
  marketValue: '18 500 000 р.',
  cadastralValue: '12 340 000 р.',
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
  const { isOpen: isPlanOpen, onOpen: onPlanOpen, onClose: onPlanClose } = useDisclosure();

  // Filter states for sales table
  const [salesYearFilter, setSalesYearFilter] = useState<string>('all');
  const [salesRoomsFilter, setSalesRoomsFilter] = useState<string>('all');
  const [salesPage, setSalesPage] = useState(1);
  const salesRowsPerPage = 6;

  // Filter states for rental table
  const [rentalYearFilter, setRentalYearFilter] = useState<string>('all');
  const [rentalTermFilter, setRentalTermFilter] = useState<string>('all');
  const [rentalPage, setRentalPage] = useState(1);
  const [showPromoCard, setShowPromoCard] = useState(true);
  const rentalRowsPerPage = 6;

  // Filtered sales data
  const filteredSalesData = useMemo(() => {
    return salesHistoryData.filter(item => {
      const yearMatch = salesYearFilter === 'all' || item.year.toString() === salesYearFilter;
      const roomsMatch = salesRoomsFilter === 'all' ||
        (salesRoomsFilter === '>5' ? item.rooms > 5 : item.rooms.toString() === salesRoomsFilter);
      return yearMatch && roomsMatch;
    });
  }, [salesYearFilter, salesRoomsFilter]);

  // Paginated sales data
  const paginatedSalesData = useMemo(() => {
    const start = (salesPage - 1) * salesRowsPerPage;
    return filteredSalesData.slice(start, start + salesRowsPerPage);
  }, [filteredSalesData, salesPage]);

  const salesPages = Math.ceil(filteredSalesData.length / salesRowsPerPage) || 1;

  // Filtered rental data
  const filteredRentalData = useMemo(() => {
    return rentalHistoryData.filter(item => {
      const yearMatch = rentalYearFilter === 'all' || item.year.toString() === rentalYearFilter;
      const termMatch = rentalTermFilter === 'all' || item.term === rentalTermFilter;
      return yearMatch && termMatch;
    });
  }, [rentalYearFilter, rentalTermFilter]);

  // Paginated rental data
  const paginatedRentalData = useMemo(() => {
    const start = (rentalPage - 1) * rentalRowsPerPage;
    return filteredRentalData.slice(start, start + rentalRowsPerPage);
  }, [filteredRentalData, rentalPage]);

  const rentalPages = Math.ceil(filteredRentalData.length / rentalRowsPerPage) || 1;

  // Format price
  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' ₽';
  };

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
              Полный отчет об объекте недвижимости
            </h1>

            {/* Sources block */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                marginTop: '8px',
              }}
            >
              <span style={{ fontSize: '14px', color: 'rgb(82, 82, 91)', fontWeight: 500 }}>
                Использовано источников:
              </span>

              {/* Avatars/Logos */}
              <AvatarGroup
                isBordered
                max={5}
                size="sm"
              >
                <Avatar src="/logos/fssp.png" name="ФССП" className="bg-white" />
                <Avatar src="/logos/fns.png" name="ФНС" className="bg-white" />
                <Avatar src="/logos/mvd.svg" name="МВД" className="bg-white" />
                <Avatar src="/logos/minjust.png" name="Минюст" className="bg-white" />
                <Avatar src="/logos/rosstat.png" name="Росстат" className="bg-white" />
              </AvatarGroup>

              <span style={{ fontSize: '14px', color: 'rgb(82, 82, 91)', fontWeight: 500 }}>
                ...и ещё 22 источника
              </span>
            </div>

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
                  Скачать отчет
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '4px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6M9 17h6" />
                  </svg>
                </button>
              </a>

              <a href="#main-info" style={{ textDecoration: 'none' }}>
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
                  gap: '36px',
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

                {/* Краткая сводка по объекту недвижимости - centered */}
                <span
                  className="text-xs text-gray-500 uppercase tracking-wide"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  Краткая сводка по объекту недвижимости
                </span>
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
        </div>
      </section>

      {/* Main Information Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <h2 id="main-info" className="text-3xl font-bold text-gray-900 text-left mb-8">
                Основная информация об объекте недвижимости
              </h2>

          {/* Property Info Card */}
          <Card
            className="w-full"
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
            }}
          >
            <CardBody className="p-6">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Помещение</p>
              <p className="text-2xl font-mono font-bold text-gray-900 mb-3">77:08:0011001:1316</p>
              <p className="text-base text-gray-700">
                Российская Федерация, город Москва, вн.тер.г. муниципальный округ Щукино, улица Маршала Бирюзова, дом 41, квартира 23
              </p>
            </CardBody>
          </Card>

          {/* Section: Data from official registries */}
          <h2 id="registry-data" className="text-3xl font-bold text-gray-900 text-left mt-16 mb-8 w-full">
            Данные из официальных реестров
          </h2>

          {/* Registry Data Card */}
          <Card
            className="w-full"
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
            }}
          >
            <CardBody className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <p className="text-sm text-gray-500">Тип объекта:</p>
                  <p className="text-base font-semibold text-gray-900">Помещение</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Площадь:</p>
                  <p className="text-base font-semibold text-gray-900">79,9 м²</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Статус:</p>
                  <p className="text-base font-semibold text-gray-900">Учтенный</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Виды разрешенного использования:</p>
                  <p className="text-base font-semibold text-gray-900">Квартира, Жилое помещение, Жилые помещения</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Дата постановки на кадастр. учет:</p>
                  <p className="text-base font-semibold text-gray-900">23.05.2012</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Дата обновления:</p>
                  <p className="text-base font-semibold text-gray-900">24.11.2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Кадастровая стоимость:</p>
                  <p className="text-base font-semibold text-gray-900">15 119 083,89 ₽</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Дата внесения стоимости:</p>
                  <p className="text-base font-semibold text-gray-900">01.01.2023</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Кадастровый квартал:</p>
                  <p className="text-base font-mono font-semibold text-gray-900">77:08:0011001</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Кадастровый номер здания:</p>
                  <p className="text-base font-mono font-semibold text-gray-900">77:08:0011001:1007</p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Section: Check Results */}
          <h2 id="check-results" className="text-3xl font-bold text-gray-900 text-left mt-16 mb-8 w-full">
            Результаты проверки
          </h2>

          {/* Check Results Accordion */}
          <div className="w-full">
            <Accordion variant="bordered" selectionMode="multiple">
              <AccordionItem
                key="1"
                aria-label="Обременения"
                startContent={
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                }
                subtitle="Залог, ипотека, арест"
                title="Обременения"
                disableIndicatorAnimation
                indicator={({ isOpen }) => (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="text-green-600 font-semibold text-sm">Не найдено</span>
                    </div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`text-gray-400 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              >
                На объект не зарегистрировано никаких обременений (ипотека, залог, арест и т.д.)
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Ограничения"
                disableIndicatorAnimation
                startContent={
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                }
                subtitle="Запреты на сделки"
                title="Ограничения"
                indicator={({ isOpen }) => (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="text-green-600 font-semibold text-sm">Не найдено</span>
                    </div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`text-gray-400 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              >
                Ограничения прав на объект не зарегистрированы.
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Текущие собственники"
                disableIndicatorAnimation
                startContent={
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                }
                subtitle="Владельцы объекта"
                title="Текущие собственники"
                indicator={({ isOpen }) => (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-green-600 font-semibold text-sm">Собственников: 1</span>
                    </div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`text-gray-400 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              >
                <Card
                  className="w-full"
                  style={{
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                  }}
                >
                  <CardBody className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Дата регистрации</p>
                        <p className="text-sm font-semibold text-gray-900">06.07.2009</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Собственник</p>
                        <p className="text-sm font-semibold text-gray-900">Физическое лицо</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Вид (доля в праве)</p>
                        <p className="text-sm font-semibold text-gray-900">Собственность (001001000000)</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Номер</p>
                        <p className="text-sm font-mono font-semibold text-gray-900">77-77-08/035/2009-542</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-start gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <p className="text-sm text-gray-700">
                          Принято заявление о невозможности государственной регистрации перехода, прекращения, ограничения права и обременения на объект недвижимости без личного участия правообладателя или его законного представителя.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="История владения"
                disableIndicatorAnimation
                startContent={
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                }
                subtitle="Переходы права собственности"
                title="История владения"
                indicator={({ isOpen }) => (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span className="text-blue-600 font-semibold text-sm">Найдено: 5</span>
                    </div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`text-gray-400 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              >
                <div className="space-y-3">
                  {/* Запись 1 - Текущий собственник */}
                  <Card
                    className="w-full"
                    style={{
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                    }}
                  >
                    <CardBody className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Chip size="sm" color="success" variant="flat">Текущий</Chip>
                        <span className="text-xs text-gray-500">с 06.07.2009</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Дата регистрации</p>
                          <p className="text-sm font-semibold text-gray-900">06.07.2009</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Собственник</p>
                          <p className="text-sm font-semibold text-gray-900">Физическое лицо</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Вид (доля в праве)</p>
                          <p className="text-sm font-semibold text-gray-900">Собственность (001001000000)</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Номер регистрации</p>
                          <p className="text-sm font-mono font-semibold text-gray-900">77-77-08/035/2009-542</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Документы</p>
                          <p className="text-sm font-semibold text-gray-900">Свидетельство о праве на наследство по завещанию</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  {/* Запись 2 - Доля 2/3 */}
                  <Card
                    className="w-full"
                    style={{
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                    }}
                  >
                    <CardBody className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-gray-500">15.04.2002 — 06.07.2009</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Дата регистрации</p>
                          <p className="text-sm font-semibold text-gray-900">15.04.2002</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Собственник</p>
                          <p className="text-sm font-semibold text-gray-900">Физическое лицо</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Вид (доля в праве)</p>
                          <p className="text-sm font-semibold text-gray-900">Общая долевая собственность (001002000000)</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Описание доли</p>
                          <p className="text-sm font-semibold text-gray-900">2/3</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Номер регистрации</p>
                          <p className="text-sm font-mono font-semibold text-gray-900">77-01/18-70/2002-3588.2-5</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Дата прекращения права</p>
                          <p className="text-sm font-semibold text-gray-900">06.07.2009</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Документы</p>
                          <p className="text-sm font-semibold text-gray-900">Свидетельство о праве на наследство по закону</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  {/* Запись 3 - Доля 1/3 (до 06.07.2009) */}
                  <Card
                    className="w-full"
                    style={{
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                    }}
                  >
                    <CardBody className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-gray-500">15.04.2002 — 06.07.2009</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Дата регистрации</p>
                          <p className="text-sm font-semibold text-gray-900">15.04.2002</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Собственник</p>
                          <p className="text-sm font-semibold text-gray-900">Физическое лицо</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Вид (доля в праве)</p>
                          <p className="text-sm font-semibold text-gray-900">Общая долевая собственность (001002000000)</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Описание доли</p>
                          <p className="text-sm font-semibold text-gray-900">1/3</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Номер регистрации</p>
                          <p className="text-sm font-mono font-semibold text-gray-900">77-01/18-70/2002-3588.2-2</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Дата прекращения права</p>
                          <p className="text-sm font-semibold text-gray-900">06.07.2009</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Документы</p>
                          <p className="text-sm font-semibold text-gray-900">Свидетельство о праве на наследство по закону</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  {/* Запись 4 - Доля 1/3 (прекращено в тот же день) */}
                  <Card
                    className="w-full"
                    style={{
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                    }}
                  >
                    <CardBody className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-gray-500">15.04.2002</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Дата регистрации</p>
                          <p className="text-sm font-semibold text-gray-900">15.04.2002</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Собственник</p>
                          <p className="text-sm font-semibold text-gray-900">Физическое лицо</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Вид (доля в праве)</p>
                          <p className="text-sm font-semibold text-gray-900">Общая долевая собственность (001002000000)</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Описание доли</p>
                          <p className="text-sm font-semibold text-gray-900">1/3</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Номер регистрации</p>
                          <p className="text-sm font-mono font-semibold text-gray-900">77-01/18-70/2002-3588.2-3</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Дата прекращения права</p>
                          <p className="text-sm font-semibold text-gray-900">15.04.2002</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Документы</p>
                          <p className="text-sm font-semibold text-gray-900">Свидетельство о праве на наследство по закону</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  {/* Запись 5 - Доля 1/3 (прекращено в тот же день) */}
                  <Card
                    className="w-full"
                    style={{
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                    }}
                  >
                    <CardBody className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-gray-500">15.04.2002</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Дата регистрации</p>
                          <p className="text-sm font-semibold text-gray-900">15.04.2002</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Собственник</p>
                          <p className="text-sm font-semibold text-gray-900">Физическое лицо</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Вид (доля в праве)</p>
                          <p className="text-sm font-semibold text-gray-900">Общая долевая собственность (001002000000)</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Описание доли</p>
                          <p className="text-sm font-semibold text-gray-900">1/3</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Номер регистрации</p>
                          <p className="text-sm font-mono font-semibold text-gray-900">77-01/18-70/2002-3588.2-4</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Дата прекращения права</p>
                          <p className="text-sm font-semibold text-gray-900">15.04.2002</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Документы</p>
                          <p className="text-sm font-semibold text-gray-900">Свидетельство о праве на наследство по закону</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Ранее присвоенные номера"
                disableIndicatorAnimation
                startContent={
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                  </div>
                }
                subtitle="Условные и старые номера"
                title="Ранее присвоенные номера"
                indicator={({ isOpen }) => (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span className="text-blue-600 font-semibold text-sm">Найдено: 2</span>
                    </div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`text-gray-400 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Инвентарный номер:</span>
                    <span className="text-sm font-mono font-semibold text-gray-900">23</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Условный номер:</span>
                    <span className="text-sm font-mono font-semibold text-gray-900">2-691380</span>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="Кадастровые работы"
                disableIndicatorAnimation
                startContent={
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                }
                subtitle="Межевание и технические работы"
                title="Кадастровые работы"
                indicator={({ isOpen }) => (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span className="text-blue-600 font-semibold text-sm">Найдено: 1</span>
                    </div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`text-gray-400 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              >
                <Card
                  className="w-full"
                  style={{
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                  }}
                >
                  <CardBody className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Дата</p>
                        <p className="text-sm font-semibold text-gray-900">15.12.2008</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Кадастровый инженер</p>
                        <p className="text-sm font-semibold text-gray-900">Иванов Иван Иванович</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Произведенные работы</p>
                        <p className="text-sm font-semibold text-gray-900">Капитальный ремонт подъезда</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </AccordionItem>
              <AccordionItem
                key="7"
                aria-label="План объекта"
                disableIndicatorAnimation
                startContent={
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                }
                subtitle="Поэтажный план и схема"
                title="План объекта"
                indicator={({ isOpen }) => (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span className="text-blue-600 font-semibold text-sm">Найдено: 1</span>
                    </div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`text-gray-400 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              >
                <div
                  className="cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={onPlanOpen}
                >
                  <img
                    src="/images/plan.png"
                    alt="План объекта"
                    className="w-full max-w-md rounded-lg border border-gray-200"
                  />
                  <p className="text-xs text-gray-500 mt-2">Нажмите для увеличения</p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Section: Conclusions and Recommendations */}
          <h2 id="conclusions" className="text-3xl font-bold text-gray-900 text-left mt-16 mb-2 w-full">
            Заключения и рекомендации
          </h2>
          <p className="text-base text-gray-600 mb-8 w-full">
            Результат проверки на риски, рекомендации по их уменьшению
          </p>

          {/* Recommendations Card 1 */}
          <Card
            className="w-full"
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
            }}
          >
            <CardBody className="p-6">
              <h3 id="contract-points" className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0"></span>
                Пункты в договор купли-продажи
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Внесите в договор купли-продажи недвижимости следующие пункты, чтобы вы смогли ссылаться на них в суде, если заинтересованные или третьи лица направят исковое заявление о признании сделки по недвижимости недействительной
              </p>

              <Accordion variant="splitted" selectionMode="multiple">
                {/* Пункт 1 - Банкротство */}
                <AccordionItem
                  key="contract-1"
                  aria-label="Банкротство продавца"
                  title={
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center">1</span>
                      <span className="text-sm font-semibold">Для подтверждения, что покупатель не знал о банкротстве продавца или намерении его обанкротить(-ся)</span>
                    </div>
                  }
                  className="border border-gray-200 rounded-lg mb-2"
                >
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      <span className="font-semibold">1.</span> Продавец подтверждает и гарантирует, что в отношении него не возбуждено производство по делу о банкротстве, отсутствуют признаки несостоятельности (банкротства) в соответствии с действующим законодательством РФ, являющиеся следствием неисполнения или возможного будущего неисполнения договорных и иных обязательств, судебных решений, решений государственных или муниципальных органов и должностных лиц, также отсутствуют основания и признаки возникновения таких оснований в будущем для признания Договора купли-продажи недействительным в соответствии со статьями 61.2 и 61.3 Федерального закона от 26.10.2002 No 127-ФЗ «О несостоятельности (банкротстве)».
                    </p>
                    <p>
                      <span className="font-semibold">2.</span> Продавец подтверждает и гарантирует, что не имеет долгов и/или любых иных не исполненных обязательств, которые могут повлечь его банкротство как физического лица в течение трех лет с момента подписания настоящего Договора, что ему ничего не известно о кредиторах, которые могут обратиться в суд с иском о признании банкротом физических лиц и что он сам не планирует обращаться в суд о признании себя банкротами. В противном случае, он обязан возместить покупателю все убытки, понесенные в результате рассмотрения дела по оспариванию сделки по настоящему Договору.
                    </p>
                  </div>
                </AccordionItem>

                {/* Пункт 2 - Наследники */}
                <AccordionItem
                  key="contract-2"
                  aria-label="Наследники"
                  title={
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center">2</span>
                      <span className="text-sm font-semibold">Для подтверждения, что покупатель не знал о наличии наследников, имеющих право притязания на имущество</span>
                    </div>
                  }
                  className="border border-gray-200 rounded-lg mb-2"
                >
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      <span className="font-semibold">1.</span> Продавец гарантирует, что наследников по закону или по завещанию, претендующих на недвижимое имущество не имеется. В противном случае, он обязан возместить покупателю все убытки, понесенные в результате рассмотрения дела по оспариванию сделки по настоящему Договору.
                    </p>
                  </div>
                </AccordionItem>

                {/* Пункт 3 - Третьи лица */}
                <AccordionItem
                  key="contract-3"
                  aria-label="Третьи лица"
                  title={
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center">3</span>
                      <span className="text-sm font-semibold">Для подтверждения, что покупатель не знал о наличии право притязаний на недвижимое имущество со стороны третьих лиц</span>
                    </div>
                  }
                  className="border border-gray-200 rounded-lg"
                >
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      <span className="font-semibold">1.</span> Продавец гарантирует, что на момент подписания настоящего договора является полноправным и законным собственником недвижимого имущества, недвижимое имущество не отчуждено, не заложено, в споре, под арестом не состоит, в аренду (наем) не сдано, возмездное или безвозмездное пользование не передано, не обременено правами третьих лиц, право собственности Продавца никем не оспаривается.
                    </p>
                    <p>
                      <span className="font-semibold">2.</span> В соответствии с ч.1 ст. 431.2 ГК РФ, сторона, которая при заключении договора либо до или после его заключения дала другой стороне недостоверные заверения об обстоятельствах, имеющих значение для заключения договора, его исполнения или прекращения, обязана возместить другой стороне по ее требованию убытки, причиненные недостоверностью таких заверений.
                    </p>
                    <p>
                      <span className="font-semibold">3.</span> Договор содержит весь объем соглашений между сторонами в отношении предмета настоящего договора, отменяет и делает недействительными все другие обязательства или предложения, которые могли быть приняты или сделаны сторонами, будь то в устной или письменной форме, до государственной регистрации перехода права по настоящему договору.
                    </p>
                  </div>
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>

          {/* Recommendations Card 2 - Безопасная сделка */}
          <Card
            className="w-full mt-4"
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
            }}
          >
            <CardBody className="p-6">
              <h3 id="safe-deal" className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0"></span>
                Безопасная сделка
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Рекомендуем применить стандартную процедуру правовой защиты: безналичный расчёт по рыночной (полной, оценочной) стоимости, c помощью «безопасной сделки», например в ПАО «Сбербанк» вы можете провести сделку, безопасно и без посещения МФЦ (продавец получит деньги, автоматически после регистрации объекта недвижимости). Безналичный расчет является доказательством получения денег и безналичный расчет не оспорить в суде, а расписку оспорить очень легко.
              </p>
            </CardBody>
          </Card>

          {/* Recommendations Card 3 - Использование мат.капитала */}
          <Card
            className="w-full mt-4"
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
            }}
          >
            <CardBody className="p-6">
              <h3 id="matcapital" className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0"></span>
                Использование мат.капитала
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                При наличии у собственников детей, родившихся после 1 января 2007 года, уточните об использовании материнского капитала на приобретение указанного объекта недвижимости.
              </p>

              <div className="space-y-3">
                <Alert
                  color="danger"
                  variant="faded"
                  title={<span className="font-semibold">Риски</span>}
                  description="Не наделили детей долей в собственности, а значит суд может изъять доли в пользу детей прошлого собственника."
                />
                <Alert
                  color="success"
                  variant="faded"
                  title={<span className="font-semibold">Рекомендации</span>}
                  description="Для уменьшения рисков, попросите собственника предоставить сертификат на материнский капитал и предъявить справку из территориального отделения Пенсионного фонда РФ о том, что вся сумма этого капитала ранее не использовалась, или была использована им на другие цели."
                />
              </div>
            </CardBody>
          </Card>

          {/* Recommendations Card 4 - Справка о прописанных */}
          <Card
            className="w-full mt-4"
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
            }}
          >
            <CardBody className="p-6">
              <h3 id="registered-persons" className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0"></span>
                Справка о прописанных
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Рекомендуем получить сведения о зарегистрированных лицах на момент сделки. Попросите продавца показать выписку из домовой книги или справку из паспортного стола (МФЦ) о зарегистрированных лицах на момент сделки.
              </p>

              <div className="space-y-3">
                <Alert
                  color="danger"
                  variant="faded"
                  title={<span className="font-semibold">Риски</span>}
                  description="Если люди откажутся выписываться после успешной сделки, то вам придется их выписывать через суд, что повлечет за собой определенные расходы. Или в выписке указаны временно выбывшие, например военнослужащие или осужденные, проконсультируйтесь с юристом. После возвращения они могут оспорить сделку или получить право пользоваться квартирой вместе с новым собственником."
                />
                <Alert
                  color="success"
                  variant="faded"
                  title={<span className="font-semibold">Рекомендации</span>}
                  description="По общему правилу, члены семьи собственника должны выписаться из квартиры/дома при ее продаже. Если снятие с прописки возможно только после сделки (например, при альтернативной продаже) укажите в договоре купли-продажи обязательства продавца выписать всех в течение определенного времени, а также что все денежные средства за сделку продавец получит только после снятия всех жильцов с регистрации по данному объекту недвижимости."
                />
              </div>
            </CardBody>
          </Card>

          {/* Recommendations Card 5 - Брачные отношения */}
          <Card
            className="w-full mt-4"
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
            }}
          >
            <CardBody className="p-6">
              <h3 id="marriage" className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0"></span>
                Брачные отношения
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Для заключения сделки нужно согласие каждого собственника, в том числе их супругов. Даже если супруг(а) не являются собственником объекта, все равно требуется нотариальное согласие на продажу.
              </p>

              <div className="space-y-3">
                <Alert
                  color="danger"
                  variant="faded"
                  title={<span className="font-semibold">Риски</span>}
                  description="Если собственник продаст недвижимость без согласия супруга, то суд может забрать у вас половину объекта недвижимости, и передать в собственность другого супруга, без согласия, которого совершили сделку купли-продажи."
                />
                <Alert
                  color="success"
                  variant="faded"
                  title={<span className="font-semibold">Рекомендации</span>}
                  description="Посмотрите паспорт у продавца о наличии брака. При наличии брачных отношений необходимо согласие супруга/супруги, декларирование в договоре купли-продажи отсутствия брачного договора и/или иного соглашения, изменяющего законный режим совместной собственности супругов."
                />
              </div>
            </CardBody>
          </Card>

          {/* Recommendations Card 6 - Прошлая оплата погашена */}
          <Card
            className="w-full mt-4"
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
            }}
          >
            <CardBody className="p-6">
              <h3 id="past-payment" className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0"></span>
                Прошлая оплата погашена
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Попросите собственника показать предыдущий договор купли-продажи объекта и передаточный акт. В договоре или акте должно быть указано, что продавец получил оплату, покупатель — ключи и стороны не имеют друг к другу претензий. Иногда договор и акт-приема передачи - это один документ, так же вы можете запросить расписку или чек о получении денежных средств, по договору купли-продажи объекта.
              </p>

              <div className="space-y-3">
                <Alert
                  color="danger"
                  variant="faded"
                  title={<span className="font-semibold">Риски</span>}
                  description="Если собственник не рассчитался, за этот объект недвижимости, перед прошлым владельцем, то сделку могут аннулировать в пользу прошлого владельца. В идеале вам нужно проверить, факт передачи денежных средств, всех прошлых владельцев."
                />
              </div>
            </CardBody>
          </Card>

          {/* Recommendations Card 7 - Доверенность */}
          <Card
            className="w-full mt-4"
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
            }}
          >
            <CardBody className="p-6">
              <h3 id="power-of-attorney" className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0"></span>
                Доверенность
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Если сделка будет проходить через доверенное лицо, рекомендуем проверить доверенность в реестре доверенностей нотариуса на официальном сайте.
              </p>

              <div className="space-y-3">
                <Alert
                  color="danger"
                  variant="faded"
                  title={<span className="font-semibold">Риски</span>}
                  description="Встречаются случаи, когда арендаторы подделывают доверенности от собственника и продают квартиры. Поэтому, если квартира продается по доверенности, необходимо установить, действительно ли собственник эту доверенность выдавал и по какой причине потребовалось участие представителя. Особенно внимательно нужно подойти к проверке доверенности в тех случаях, когда доверитель живет в одном городе с тем, кто представляет его интересы при проведении сделки."
                />
              </div>
            </CardBody>
          </Card>

            </div>

            {/* Table of Contents - Sticky Sidebar */}
            <div className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-4">
                {/* Promo Card */}
                {showPromoCard && (
                <Card isFooterBlurred className="border-none h-[200px] relative" radius="lg">
                  <button
                    onClick={() => setShowPromoCard(false)}
                    className="absolute top-2 right-2 z-20 w-6 h-6 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                    aria-label="Закрыть"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white uppercase font-semibold">Получить свой отчет</p>
                    <h4 className="text-white font-bold text-large">Полная проверка недвижимости</h4>
                  </CardHeader>
                  <HeroImage
                    removeWrapper
                    alt="Проверка недвижимости"
                    className="z-0 w-full h-full object-cover"
                    src="/images/promo-card.jpg"
                  />
                  <div
                    className="absolute inset-x-0 top-0 h-24 backdrop-blur-[2px] z-[1]"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)',
                    }}
                  ></div>
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 via-black/15 via-50% to-transparent z-[1]"></div>
                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span>
                      27 источников, от 30 мин
                    </p>
                    <Button
                      className="text-tiny text-white bg-black/20"
                      color="default"
                      radius="lg"
                      size="sm"
                      variant="flat"
                    >
                      Заказать
                    </Button>
                  </CardFooter>
                </Card>
                )}

                {/* TOC Card */}
                <Card
                  style={{
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                  }}
                >
                  <CardBody className="p-5">
                    <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Оглавление</h3>
                    <nav className="space-y-1">
                      <a href="#main-info" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-1" style={{ textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: '#CBD5E1', textUnderlineOffset: '3px' }}>
                        Основная информация
                      </a>
                      <a href="#registry-data" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-1" style={{ textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: '#CBD5E1', textUnderlineOffset: '3px' }}>
                        Данные из реестров
                      </a>
                      <a href="#check-results" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-1" style={{ textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: '#CBD5E1', textUnderlineOffset: '3px' }}>
                        Результаты проверки
                      </a>
                      <a href="#conclusions" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-1" style={{ textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: '#CBD5E1', textUnderlineOffset: '3px' }}>
                        Заключения и рекомендации
                      </a>
                      <div className="pl-3 space-y-1 mt-1">
                        <a href="#contract-points" className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-0.5" style={{ textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: '#E2E8F0', textUnderlineOffset: '2px' }}>
                          Пункты в договор
                        </a>
                        <a href="#safe-deal" className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-0.5" style={{ textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: '#E2E8F0', textUnderlineOffset: '2px' }}>
                          Безопасная сделка
                        </a>
                        <a href="#matcapital" className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-0.5" style={{ textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: '#E2E8F0', textUnderlineOffset: '2px' }}>
                          Мат.капитал
                        </a>
                        <a href="#registered-persons" className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-0.5" style={{ textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: '#E2E8F0', textUnderlineOffset: '2px' }}>
                          Справка о прописанных
                        </a>
                        <a href="#marriage" className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-0.5" style={{ textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: '#E2E8F0', textUnderlineOffset: '2px' }}>
                          Брачные отношения
                        </a>
                        <a href="#past-payment" className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-0.5" style={{ textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: '#E2E8F0', textUnderlineOffset: '2px' }}>
                          Прошлая оплата
                        </a>
                        <a href="#power-of-attorney" className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-0.5" style={{ textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: '#E2E8F0', textUnderlineOffset: '2px' }}>
                          Доверенность
                        </a>
                      </div>
                      <a href="#valuation" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-1" style={{ textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: '#CBD5E1', textUnderlineOffset: '3px' }}>
                        Оценка стоимости
                      </a>
                      <a href="#sales-history" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-1" style={{ textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: '#CBD5E1', textUnderlineOffset: '3px' }}>
                        История продаж и аренды
                      </a>
                    </nav>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Property Valuation Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 id="valuation" className="text-3xl font-bold text-gray-900 text-left mb-8">
            Оценка стоимости
          </h2>

          <Card
            className="w-full"
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
            }}
          >
            <CardBody className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Стоимость объекта недвижимости</p>
                  <p className="text-3xl font-bold text-gray-900">18 500 000 ₽</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-sm text-gray-500 mb-1">Диапазон стоимости</p>
                  <p className="text-xl font-semibold text-gray-700">17 500 000 ₽ — 19 500 000 ₽</p>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-4">Динамика стоимости</p>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={priceHistoryData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22C55E" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#22C55E" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" horizontal={true} vertical={false} />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                      tickLine={false}
                      axisLine={false}
                      interval={2}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `${value} млн`}
                      domain={[15, 20]}
                      ticks={[16, 17, 18, 19, 20]}
                    />
                    <Tooltip
                      formatter={(value: number) => [`${value} млн ₽`, 'Стоимость']}
                      labelStyle={{ color: '#1F2937' }}
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #E2E8F0',
                        borderRadius: '8px',
                      }}
                    />
                    <Area
                      type="natural"
                      dataKey="price"
                      stroke="#22C55E"
                      strokeWidth={2.5}
                      fill="url(#priceGradient)"
                      dot={false}
                      activeDot={{ r: 5, fill: '#22C55E', stroke: '#fff', strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardBody>
          </Card>

        </div>
      </section>

      {/* Sales and Rental History Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 id="sales-history" className="text-3xl font-bold text-gray-900 text-left mb-8">
            История продаж и аренды в доме
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sales History Table */}
            <Card
              style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
              }}
            >
              <CardBody className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <h3 className="text-lg font-bold text-gray-900">История продаж</h3>
                  <div className="flex gap-2">
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="flat" size="sm" endContent={<ChevronDownIcon />}>
                          {salesYearFilter === 'all' ? 'Дата' : salesYearFilter}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Фильтр по году"
                        selectionMode="single"
                        selectedKeys={new Set([salesYearFilter])}
                        onSelectionChange={(keys) => setSalesYearFilter(Array.from(keys)[0] as string)}
                      >
                        <DropdownItem key="all">Все</DropdownItem>
                        <DropdownItem key="2025">2025</DropdownItem>
                        <DropdownItem key="2024">2024</DropdownItem>
                        <DropdownItem key="2023">2023</DropdownItem>
                        <DropdownItem key="2022">2022</DropdownItem>
                        <DropdownItem key="2021">2021</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="flat" size="sm" endContent={<ChevronDownIcon />}>
                          {salesRoomsFilter === 'all' ? 'Комнаты' : salesRoomsFilter === '>5' ? '>5' : `${salesRoomsFilter} комн.`}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Фильтр по комнатам"
                        selectionMode="single"
                        selectedKeys={new Set([salesRoomsFilter])}
                        onSelectionChange={(keys) => setSalesRoomsFilter(Array.from(keys)[0] as string)}
                      >
                        <DropdownItem key="all">Все</DropdownItem>
                        <DropdownItem key="1">1</DropdownItem>
                        <DropdownItem key="2">2</DropdownItem>
                        <DropdownItem key="3">3</DropdownItem>
                        <DropdownItem key="4">4</DropdownItem>
                        <DropdownItem key="5">5</DropdownItem>
                        <DropdownItem key=">5">&gt;5</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-2 px-2 text-left w-16"></th>
                        <th className="py-2 px-2 text-left text-xs font-semibold text-gray-500 uppercase">Объект</th>
                        <th className="py-2 px-2 text-left text-xs font-semibold text-gray-500 uppercase">Стоимость</th>
                        <th className="py-2 px-2 text-left text-xs font-semibold text-gray-500 uppercase">Дата</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedSalesData.length > 0 ? (
                        paginatedSalesData.map((item, index) => (
                          <tr key={item.id} className={index < paginatedSalesData.length - 1 ? "border-b border-gray-100" : ""}>
                            <td className="py-3 px-2">
                              <img src={item.image} alt={item.type} className="w-12 h-12 rounded-lg object-cover" />
                            </td>
                            <td className="py-3 px-2">
                              <p className="text-sm font-semibold text-gray-900">{item.type}</p>
                              <p className="text-xs text-gray-500">{item.area} м², {item.rooms} комн., {item.floor} этаж</p>
                            </td>
                            <td className="py-3 px-2">
                              <p className="text-sm font-semibold text-gray-900">{formatPrice(item.price)}</p>
                              <p className="text-xs text-gray-500">{formatPrice(item.pricePerM2)}/м²</p>
                            </td>
                            <td className="py-3 px-2 text-sm text-gray-600">{item.date}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4} className="py-8 text-center text-gray-500">Нет данных</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center mt-4">
                  <Pagination
                    total={salesPages}
                    page={salesPage}
                    onChange={setSalesPage}
                    size="sm"
                    showShadow
                    showControls
                    color="primary"
                  />
                </div>
              </CardBody>
            </Card>

            {/* Rental History Table */}
            <Card
              style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
              }}
            >
              <CardBody className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <h3 className="text-lg font-bold text-gray-900">История аренды</h3>
                  <div className="flex gap-2">
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="flat" size="sm" endContent={<ChevronDownIcon />}>
                          {rentalYearFilter === 'all' ? 'Дата' : rentalYearFilter}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Фильтр по году"
                        selectionMode="single"
                        selectedKeys={new Set([rentalYearFilter])}
                        onSelectionChange={(keys) => setRentalYearFilter(Array.from(keys)[0] as string)}
                      >
                        <DropdownItem key="all">Все</DropdownItem>
                        <DropdownItem key="2025">2025</DropdownItem>
                        <DropdownItem key="2024">2024</DropdownItem>
                        <DropdownItem key="2023">2023</DropdownItem>
                        <DropdownItem key="2022">2022</DropdownItem>
                        <DropdownItem key="2021">2021</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="flat" size="sm" endContent={<ChevronDownIcon />}>
                          {rentalTermFilter === 'all' ? 'Срок' : rentalTermFilter === 'long' ? 'Длительно' : 'Посуточно'}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Фильтр по сроку"
                        selectionMode="single"
                        selectedKeys={new Set([rentalTermFilter])}
                        onSelectionChange={(keys) => setRentalTermFilter(Array.from(keys)[0] as string)}
                      >
                        <DropdownItem key="all">Все</DropdownItem>
                        <DropdownItem key="long">Длительно</DropdownItem>
                        <DropdownItem key="daily">Посуточно</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-2 px-2 text-left w-16"></th>
                        <th className="py-2 px-2 text-left text-xs font-semibold text-gray-500 uppercase">Объект</th>
                        <th className="py-2 px-2 text-left text-xs font-semibold text-gray-500 uppercase">Стоимость</th>
                        <th className="py-2 px-2 text-left text-xs font-semibold text-gray-500 uppercase">Дата</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedRentalData.length > 0 ? (
                        paginatedRentalData.map((item, index) => (
                          <tr key={item.id} className={index < paginatedRentalData.length - 1 ? "border-b border-gray-100" : ""}>
                            <td className="py-3 px-2">
                              <img src={item.image} alt={item.type} className="w-12 h-12 rounded-lg object-cover" />
                            </td>
                            <td className="py-3 px-2">
                              <p className="text-sm font-semibold text-gray-900">{item.type}</p>
                              <p className="text-xs text-gray-500">{item.area} м², {item.rooms} комн., {item.floor} этаж</p>
                            </td>
                            <td className="py-3 px-2">
                              <p className="text-sm font-semibold text-gray-900">{formatPrice(item.price)}/мес</p>
                            </td>
                            <td className="py-3 px-2 text-sm text-gray-600">{item.date}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4} className="py-8 text-center text-gray-500">Нет данных</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center mt-4">
                  <Pagination
                    total={rentalPages}
                    page={rentalPage}
                    onChange={setRentalPage}
                    size="sm"
                    showShadow
                    showControls
                    color="primary"
                  />
                </div>
              </CardBody>
            </Card>
          </div>

        </div>
      </section>

      {/* Modal для увеличенного плана */}
      <Modal
        isOpen={isPlanOpen}
        onClose={onPlanClose}
        size="5xl"
        scrollBehavior="inside"
      >
        <ModalContent>
          <ModalBody className="p-4">
            <img
              src="/images/plan.png"
              alt="План объекта"
              className="w-full h-auto"
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Footer />
    </>
  );
}
