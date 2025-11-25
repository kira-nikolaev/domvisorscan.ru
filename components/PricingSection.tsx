import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";

interface PricingFeature {
  text: string;
}

interface PricingTier {
  title: string;
  subtitle: string;
  price: number;
  period?: string;
  features: PricingFeature[];
  badge?: string;
  highlighted?: boolean;
  duration?: string;
}

const pricingTiers: PricingTier[] = [
  {
    title: "Отчет о переходе прав",
    subtitle: "История сделок и смены собственников с датами и основаниями перехода прав.",
    price: 849,
    duration: "от 15 минут",
    features: [
      { text: "Все зарегистрированные сделки с объектом" },
      { text: "Информация о предыдущих собственниках и долях" },
      { text: "Даты и основания перехода прав (купля-продажа, дарение, наследство и т.п.)" },
      { text: "Выписка из официальных реестров о переходе прав в составе отчёта" },
    ],
  },
  {
    title: "Отчет об объекте",
    subtitle: "Текущий юридический статус недвижимости: запреты, аресты, обременения, ограничения.",
    price: 849,
    duration: "от 15 минут",
    features: [
      { text: "Запреты, аресты, обременения и ограничения" },
      { text: "Основные характеристики и параметры объекта" },
      { text: "Кадастровая стоимость и базовые сведения из официальных реестров" },
      { text: "Актуальный статус объекта на момент проверки" },
    ],
  },
  {
    title: "Полная проверка",
    subtitle: "Полный разбор объекта и собственников с заключением о юридической чистоте.",
    price: 3500,
    duration: "от 30 минут",
    highlighted: true,
    features: [
      { text: "Проверка объекта" },
      { text: "Проверка всех собственников*" },
      { text: "Юридическое заключение" },
      { text: "Включает документы-отчеты из всех официальных реестров" },
      { text: "О доме / оценка стоимости" },
    ],
  },
];

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

const CheckIcon = ({ gradient }: { gradient?: boolean }) => (
  <svg
    className="w-5 h-5 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <defs>
      {gradient && (
        <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#45F3FF", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#36FF83", stopOpacity: 1 }} />
        </linearGradient>
      )}
    </defs>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M5 13l4 4L19 7"
      stroke={gradient ? "url(#checkGradient)" : "currentColor"}
    />
  </svg>
);

const InfoIconSuccess = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

export default function PricingSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgb(69, 243, 255) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgb(54, 255, 131) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-[1360px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[64px] font-[800] leading-tight md:leading-[72px] mb-4 text-[#11181C]">
            Выберите подходящий тариф
          </h2>
          <p className="text-lg md:text-xl text-[#52525B] max-w-2xl mx-auto font-[400]">
            Прозрачные цены без скрытых платежей. Все отчеты формируются на
            основе официальных данных
          </p>
        </div>

        {/* Pricing Cards Container with glass effect */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            borderRadius: '24px',
            padding: '24px',
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className="relative p-3 overflow-hidden"
              style={{
                backgroundColor: tier.highlighted ? "#11181C" : "rgba(0, 0, 0, 0)",
                border: tier.highlighted
                  ? "2px solid rgba(69, 243, 255, 0.3)"
                  : "2px solid rgba(17, 17, 17, 0.15)",
                borderRadius: "14px",
                boxShadow: tier.highlighted
                  ? "0 20px 60px rgba(69, 243, 255, 0.2)"
                  : "none",
                transition: "transform 0.25s ease, scale 0.25s ease, background 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <CardHeader
                className="flex flex-col items-start justify-start"
                style={{
                  padding: "12px 12px 24px 12px",
                  gap: "8px",
                  borderTopLeftRadius: "14px",
                  borderTopRightRadius: "14px",
                  border: "0px",
                }}
              >
                <h3
                  className={`font-bold ${tier.highlighted ? "text-white" : "text-[#11181C]"} flex items-center gap-2`}
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "26px",
                    lineHeight: 1,
                  }}
                >
                  <span>{tier.title}</span>
                  {tier.highlighted && (
                    <Popover placement="top">
                      <PopoverTrigger>
                        <button
                          className="flex items-center justify-center text-green-500 cursor-pointer hover:opacity-80 transition-opacity animate-pulse"
                          aria-label="Информация"
                        >
                          <InfoIconSuccess />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="px-3 py-2">
                          <div className="text-sm font-[600]">Рекомендуется перед сделкой</div>
                          <div className="text-xs text-gray-600 mt-1">
                            Максимальная защита при покупке недвижимости
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  )}
                </h3>
                <p
                  className={`text-sm font-[400] ${
                    tier.highlighted ? "text-gray-300" : "text-[#687076]"
                  }`}
                >
                  {tier.subtitle}
                </p>
              </CardHeader>

              <Divider
                style={tier.highlighted ? {
                  background: "linear-gradient(90deg, rgb(69, 243, 255) 0%, rgb(54, 255, 131) 100%)"
                } : {}}
              />

              <CardBody
                className="flex flex-col relative"
                style={{
                  padding: "12px",
                  border: "0px",
                  gap: "32px",
                  flexGrow: 1,
                  flexShrink: 1,
                  overflowY: "auto",
                }}
              >
                {/* Price and Duration */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-5xl md:text-[56px] font-[700] ${
                        tier.highlighted ? "text-white" : "text-[#11181C]"
                      }`}
                    >
                      {tier.price.toLocaleString("ru-RU")}
                    </span>
                    <span
                      className={`text-5xl md:text-[56px] font-[700] ${
                        tier.highlighted ? "text-white" : "text-[#11181C]"
                      }`}
                    >
                      {" "}руб.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={tier.highlighted ? "text-gray-400" : "text-[#687076]"}>
                      <ClockIcon />
                    </div>
                    <span className={`text-sm font-[400] ${tier.highlighted ? "text-gray-400" : "text-[#687076]"}`}>
                      {tier.duration || "от 30 минут"}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <CheckIcon gradient={true} />
                      </div>
                      <span
                        className={`text-sm font-[400] leading-relaxed ${
                          tier.highlighted
                            ? "text-gray-200"
                            : "text-[#11181C]"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardBody>

              <CardFooter className="pt-4 pb-8">
                <Button
                  size="lg"
                  onPress={onOpen}
                  className={`w-full font-[600] text-sm transition-all duration-300 ${
                    tier.highlighted
                      ? "text-white hover:scale-[1.02]"
                      : "bg-[#11181C] text-white hover:bg-[#2D3438]"
                  }`}
                  style={
                    tier.highlighted
                      ? {
                          background: `
                            linear-gradient(#11181C, #11181C) padding-box,
                            linear-gradient(90deg, rgb(69, 243, 255) 0%, rgb(54, 255, 131) 100%) border-box
                          `,
                          border: "2px solid transparent",
                          borderRadius: "9999px",
                        }
                      : { borderRadius: "9999px" }
                  }
                >
                  Заказать и оплатить
                </Button>
              </CardFooter>
            </Card>
          ))}
          </div>
        </div>
      </div>

      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Заказать проверку
              </ModalHeader>
              <ModalBody>
                <p>
                  Здесь будет форма заказа проверки недвижимости.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Закрыть
                </Button>
                <Button
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(69, 243, 255) 0%, rgb(54, 255, 131) 100%)",
                  }}
                  className="text-white"
                  onPress={onClose}
                >
                  Оформить заказ
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
