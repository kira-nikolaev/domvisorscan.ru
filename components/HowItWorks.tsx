import React, { useEffect, useState, useRef } from 'react';
import { Avatar, AvatarGroup } from "@heroui/avatar";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Progress } from "@heroui/progress";
import { Spinner } from "@heroui/spinner";
import { Skeleton } from "@heroui/skeleton";
import { Card, CardBody, CardFooter } from "@heroui/card";

export default function HowItWorks() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Состояние для анимации первой карточки
  const [searchText, setSearchText] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);

  // Состояние для анимации второй карточки
  const [dataScreen, setDataScreen] = useState(0); // 0: подключение, 1: загрузка, 2: успех
  const [connectionStatus, setConnectionStatus] = useState<number[]>([]); // индексы подключенных источников
  const [progressValues, setProgressValues] = useState<number[]>(new Array(7).fill(0)); // прогресс для каждого источника

  // Состояние для анимации третьей карточки (анализ рисков)
  const [riskAnalysisStep, setRiskAnalysisStep] = useState(0); // 0: начало, 1-4: анализ категорий, 5: финальный вердикт

  // Состояние для анимации четвертой карточки (формирование отчета)
  const [reportStep, setReportStep] = useState(0); // 0: начало, 1-3: загрузка плашек, 4: готово

  // Отслеживаем появление секции на экране
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setActiveCard(0); // Начинаем с первой карточки
        }
      },
      { threshold: 0.3 } // Триггер когда 30% секции видно
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Переключаем активную карточку (карточка 2 - 5 сек, остальные - 4 сек)
  // Останавливаем автоматическую анимацию при ховере
  useEffect(() => {
    if (!isVisible || activeCard === null || hoveredCard !== null) return;

    const duration = activeCard === 1 ? 6000 : 4000; // Вторая карточка - 6 сек

    const timer = setTimeout(() => {
      setActiveCard((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % 4; // Циклически: 0, 1, 2, 3, 0, 1...
      });
    }, duration);

    return () => clearTimeout(timer);
  }, [activeCard, isVisible, hoveredCard]);

  // Анимация печатания для первой карточки
  useEffect(() => {
    const displayCard = hoveredCard !== null ? hoveredCard : activeCard;

    if (displayCard !== 0) {
      setSearchText('');
      setButtonPressed(false);
      return;
    }

    const fullText = 'ул. Пушкина, д. Колотушкина';
    let currentIndex = 0;
    const timers: NodeJS.Timeout[] = [];

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setSearchText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // После завершения печатания - нажимаем кнопку
        const buttonTimer1 = setTimeout(() => {
          setButtonPressed(true);
          // Сбрасываем через 300ms
          const buttonTimer2 = setTimeout(() => setButtonPressed(false), 300);
          timers.push(buttonTimer2);
        }, 200);
        timers.push(buttonTimer1);
      }
    }, 50); // 50ms на символ

    return () => {
      clearInterval(typingInterval);
      timers.forEach(clearTimeout);
    };
  }, [activeCard, hoveredCard]);

  // Анимация экранов для второй карточки
  useEffect(() => {
    const displayCard = hoveredCard !== null ? hoveredCard : activeCard;

    if (displayCard !== 1) {
      setDataScreen(0);
      setConnectionStatus([]);
      setProgressValues(new Array(7).fill(0));
      return;
    }

    // Экран 1: Подключение к базам (последовательное подключение)
    // НЕ делаем setDataScreen(0) здесь, чтобы избежать rerender и двойного запуска

    const connectionTimers: NodeJS.Timeout[] = [];
    dataSources.forEach((_, idx) => {
      const timer = setTimeout(() => {
        setConnectionStatus(prev => [...prev, idx]);
      }, idx * 300); // Каждый источник подключается через 300ms
      connectionTimers.push(timer);
    });

    // Экран 2: Загрузка данных (после подключения всех)
    const screen2Timer = setTimeout(() => {
      setDataScreen(1);
    }, dataSources.length * 300 + 500);

    // Экран 3: Успех (после загрузки)
    const screen3Timer = setTimeout(() => {
      setDataScreen(2);
    }, dataSources.length * 300 + 3500);

    return () => {
      connectionTimers.forEach(clearTimeout);
      clearTimeout(screen2Timer);
      clearTimeout(screen3Timer);
    };
  }, [activeCard, hoveredCard]);

  // Анимация прогресса загрузки для экрана 2
  useEffect(() => {
    if (dataScreen !== 1) {
      setProgressValues(new Array(7).fill(0));
      return;
    }

    const timers: NodeJS.Timeout[] = [];

    dataSources.forEach((_, idx) => {
      // Задержка перед началом загрузки для каждого источника
      const startDelay = setTimeout(() => {
        let progress = 0;

        const interval = setInterval(() => {
          progress += 1;
          if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
          }

          setProgressValues(prev => {
            const newValues = [...prev];
            newValues[idx] = progress;
            return newValues;
          });
        }, 18); // обновляем каждые 18ms, итого ~1.8 секунды на полную загрузку

        timers.push(interval);
      }, idx * 100); // Каждый источник начинает загрузку с задержкой 100ms

      timers.push(startDelay);
    });

    return () => {
      timers.forEach(clearInterval);
      setProgressValues(new Array(7).fill(0));
    };
  }, [dataScreen]);

  // Анимация анализа рисков для третьей карточки
  useEffect(() => {
    const displayCard = hoveredCard !== null ? hoveredCard : activeCard;

    if (displayCard !== 2) {
      setRiskAnalysisStep(0);
      return;
    }

    const timers: NodeJS.Timeout[] = [];

    // Сначала показываем спиннер 1 секунду
    // Потом последовательно показываем карточки (каждая через 600ms)
    riskCategories.forEach((_, idx) => {
      const timer = setTimeout(() => {
        setRiskAnalysisStep(idx + 1);
      }, 1000 + idx * 600); // 1000ms спиннер, потом по 600ms на карточку
      timers.push(timer);
    });

    return () => {
      timers.forEach(clearTimeout);
      // Не делаем setState в cleanup, чтобы избежать rerender
    };
  }, [activeCard, hoveredCard]);

  // Анимация формирования отчета для четвертой карточки
  useEffect(() => {
    const displayCard = hoveredCard !== null ? hoveredCard : activeCard;

    if (displayCard !== 3) {
      setReportStep(0);
      return;
    }

    const timers: NodeJS.Timeout[] = [];

    // Последовательное появление плашек
    [1, 2, 3].forEach((step) => {
      const timer = setTimeout(() => {
        setReportStep(step);
      }, step * 800); // Каждая плашка через 800ms
      timers.push(timer);
    });

    // Финальный экран "Готово"
    const finalTimer = setTimeout(() => {
      setReportStep(4);
    }, 3000);
    timers.push(finalTimer);

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [activeCard, hoveredCard]);

  // Логотипы источников данных (7 источников для анимации)
  const dataSources = [
    { name: 'ФССП', src: '/logos/fssp.png' },
    { name: 'ФНС', src: '/logos/fns.png' },
    { name: 'МВД', src: '/logos/mvd.svg' },
    { name: 'Росстат', src: '/logos/rosstat.png' },
    { name: 'ГИС ЖКХ', src: '/logos/gisjkh.jpg' },
    { name: 'ГИС ГМП', src: '/logos/gisgmp.png' },
    { name: 'Минюст', src: '/logos/minjust.png' },
  ];

  // Категории рисков для анализа (третья карточка)
  const riskCategories = [
    {
      name: 'Права собственности',
      status: 'success' as const,
      result: 'Проверено',
      analyzing: 'Анализируем права собственности'
    },
    {
      name: 'Обременения',
      status: 'success' as const,
      result: 'Не обнаружены',
      analyzing: 'Анализируем обременения'
    },
    {
      name: 'Судебные споры',
      status: 'warning' as const,
      result: 'Найдены споры',
      analyzing: 'Анализируем судебные споры'
    },
    {
      name: 'История сделок',
      status: 'success' as const,
      result: 'Проверено',
      analyzing: 'Анализируем историю сделок'
    },
  ];

  const steps = [
    {
      number: '1. Объект',
      title: 'Указываете объект',
      description: 'Адрес, тип недвижимости и ваш контакт — этого достаточно, чтобы запустить проверку. Без сканов, доверенностей и регистрации на госпорталах.',
    },
    {
      number: '2. Сбор данных',
      title: 'Тянем данные из реестров и своих баз',
      description: 'Автоматически сверяем объект с госреестрами, судебными делами, открытыми источниками и собственными базами Domvisor по проблемным объектам и собственникам.',
    },
    {
      number: '3. Анализ рисков',
      title: 'Складываем полную картину по объекту',
      description: 'Анализируем историю перехода прав, обременения, ограничения, споры, связи собственников и типовые риск-схемы. Находим места, где сделка может поехать.',
    },
    {
      number: '4. Формируем отчёт',
      title: 'Даем понятный вердикт по сделке',
      description: 'Вы получаете отчёт с оценкой риска и конкретными выводами: «идём спокойно», «только с юристом» или «не связываться». Плюс аргументы, которые можно показать клиенту.',
    },
  ];

  return (
    <section ref={sectionRef} className="how-it-works-wrapper">
      <div className="how-it-works-container">
        {/* Заголовок и подзаголовок */}
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">
            Как Domvisor проверяет объект
          </h2>
          <p className="how-it-works-subtitle">
            От адреса до честного вердикта по рискам — за 10–15 минут, без ручного копания в реестрах и судах.
          </p>
        </div>

        {/* Основной контент: шаги + скриншот */}
        <div className="how-it-works-content">
          {/* 4 шага */}
          <div className="steps-container">
            {steps.map((step, index) => {
              const isActive = hoveredCard !== null ? hoveredCard === index : activeCard === index;
              return (
                <div
                  key={step.number}
                  className={`step-card ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                {/* Группа логотипов для второй карточки */}
                {step.number === '2. Сбор данных' && (
                  <div className="card-logos">
                    <AvatarGroup
                      isBordered
                      max={5}
                      size="sm"
                    >
                      {dataSources.slice(0, 5).map((source) => (
                        <Avatar
                          key={source.name}
                          src={source.src}
                          name={source.name}
                          className="bg-white"
                        />
                      ))}
                    </AvatarGroup>
                    <div className="sources-text">
                      ...и еще 22 источника
                    </div>
                  </div>
                )}

                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              );
            })}
          </div>

          {/* Скриншот интерфейса */}
          <div className="interface-screenshot">
            <div className="screenshot-container">
              {(() => {
                const displayCard = hoveredCard !== null ? hoveredCard : activeCard;

                if (displayCard === 0) {
                  return (
                    <div className="search-demo">
                      <h3 className="demo-title">Проверка объекта</h3>
                      <div className="search-form">
                        <Input
                          type="text"
                          placeholder="Введите адрес объекта"
                          value={searchText}
                          readOnly
                          size="lg"
                          radius="md"
                          classNames={{
                            input: "text-base",
                            inputWrapper: "h-12"
                          }}
                        />
                        <Button
                          color="primary"
                          size="lg"
                          radius="md"
                          className={`search-button ${buttonPressed ? 'pressed' : ''}`}
                        >
                          Найти
                        </Button>
                      </div>
                    </div>
                  );
                } else if (displayCard === 1) {
                  if (dataScreen === 0) {
                    // Экран 1: Подключение к базам - простой список
                    return (
                      <div className="data-animation-screen">
                        <h3 className="screen-title mb-6">Подключаемся к базам</h3>
                        <div className="sources-list">
                          {dataSources.slice(0, 6).map((source, idx) => (
                            <div key={source.name} className="source-item">
                              <div className="flex items-center gap-3 flex-1">
                                <img
                                  src={source.src}
                                  alt={source.name}
                                  className="w-6 h-6 object-contain opacity-60"
                                />
                                <span className="text-sm text-default-700 font-medium">{source.name}</span>
                              </div>
                              {connectionStatus.includes(idx) ? (
                                <div className="flex items-center gap-1.5">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="text-sm text-success-600 font-semibold">OK</span>
                                </div>
                              ) : (
                                <Spinner color="success" size="sm" />
                              )}
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-center text-default-500 mt-4">...и еще 22 источника</p>
                      </div>
                    );
                  } else if (dataScreen === 1) {
                    // Экран 2: Загрузка данных
                    return (
                      <div className="data-animation-screen">
                        <h3 className="screen-title">Получение данных</h3>
                        <div className="progress-list">
                          {dataSources.map((source, idx) => (
                            <div key={source.name} className="progress-item">
                              <img src={source.src} alt={source.name} className="source-avatar" />
                              <Progress
                                label={source.name}
                                value={progressValues[idx]}
                                size="sm"
                                radius="sm"
                                classNames={{
                                  base: "flex-1",
                                  track: "bg-default-100",
                                  indicator: "bg-gradient-to-br from-[#45F3FF] to-[#36FF83] !transition-none",
                                  label: "text-sm font-medium text-default-600",
                                  value: "text-sm text-foreground-600",
                                }}
                                showValueLabel={true}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  } else {
                    // Экран 3: Успех - большая карточка с blur footer
                    return (
                      <div className="data-animation-screen flex items-center justify-center">
                        <Card
                          isFooterBlurred
                          className="border-none w-full max-w-[400px] h-[280px] success-card-animated"
                          radius="lg"
                        >
                          {/* Градиентный фон */}
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 dark:from-emerald-950 dark:to-cyan-950" />

                          {/* Центральная иконка успеха - поднята выше для центрирования */}
                          <div className="absolute top-0 left-0 right-0 bottom-[80px] flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full bg-success-500/20 flex items-center justify-center">
                              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>

                          {/* Blur Footer с сообщением */}
                          <CardFooter className="absolute bg-white/10 bottom-8 border-t-1 border-zinc-100/50 z-10 justify-center flex-col py-3 w-[calc(100%_-_8px)] ml-1">
                            <p className="text-lg font-bold text-success-700 mb-1">Данные получены!</p>
                            <p className="text-tiny text-success-600">Все 27 источников обработаны</p>
                          </CardFooter>
                        </Card>
                      </div>
                    );
                  }
                } else if (displayCard === 2) {
                  // Этап загрузки - показываем спиннер
                  if (riskAnalysisStep === 0) {
                    return (
                      <div className="risk-analysis-demo">
                        <div className="analysis-loading">
                          <Spinner size="lg" className="gradient-spinner mb-4" />
                          <h3 className="demo-title mb-2">Анализируем риски</h3>
                          <p className="text-sm text-default-500">Проверяем объект по всем категориям...</p>
                        </div>
                      </div>
                    );
                  }

                  // Показываем результаты в виде карточек
                  return (
                    <div className="risk-analysis-demo">
                      <h3 className="demo-title mb-6">Анализ рисков</h3>
                      <div className="risk-cards-grid">
                        {riskCategories.map((category, idx) => {
                          // Показываем карточку только если её шаг уже прошел
                          if (riskAnalysisStep <= idx) return null;

                          return (
                            <Card
                              key={category.name}
                              isBlurred
                              className="border-none bg-white/60 dark:bg-default-100/50 risk-card-animated"
                              shadow="sm"
                            >
                              <CardBody className="p-4">
                                <div className="flex items-center gap-3">
                                  {/* Иконка статуса */}
                                  <div className={`risk-icon-modern ${category.status}`}>
                                    {category.status === 'success' ? (
                                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                    ) : (
                                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                      </svg>
                                    )}
                                  </div>

                                  {/* Текст */}
                                  <div className="flex-1">
                                    <p className="text-sm font-medium text-default-700">{category.name}</p>
                                    <p className={`text-xs mt-0.5 ${category.status === 'success' ? 'text-success-600' : 'text-warning-600'}`}>
                                      {category.result}
                                    </p>
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          );
                        })}
                      </div>
                    </div>
                  );
                } else if (displayCard === 3) {
                  // Финальный экран - отчет готов
                  if (reportStep >= 4) {
                    return (
                      <div className="report-demo">
                        <h3 className="demo-title mb-6">Отчет сформирован</h3>

                        <div className="report-content space-y-3">
                          {/* Плашка 1: Документ (готовый) */}
                          <div className="report-skeleton-card p-4 rounded-xl bg-white/80 border border-default-100">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-default-300 flex items-center justify-center">
                                <span className="text-2xl">📄</span>
                              </div>
                              <div className="flex-1">
                                <div className="document-name">Отчет о проверке</div>
                                <div className="document-size">PDF • 2.4 МБ</div>
                              </div>
                            </div>
                          </div>

                          {/* Плашка 2: Статус (готовый) */}
                          <div className="report-skeleton-card p-4 rounded-xl bg-white/80 border border-default-100">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-default-200 flex items-center justify-center">
                                <span className="status-indicator moderate">●</span>
                              </div>
                              <div className="flex-1">
                                <div className="status-title">Умеренный риск</div>
                                <div className="status-subtitle">Рекомендуется консультация</div>
                              </div>
                            </div>
                          </div>

                          {/* Плашка 3: Готовность (готовая) */}
                          <div className="report-skeleton-card p-4 rounded-xl bg-white/80 border border-default-100 space-y-3">
                            <div className="ready-badge">
                              <span className="ready-icon">✓</span>
                              Готов к скачиванию
                            </div>
                            <Button
                              color="primary"
                              size="lg"
                              radius="md"
                              className="download-button-final w-full"
                            >
                              Скачать отчет
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Анимация скелетонов (reportStep < 4)
                  return (
                    <div className="report-demo">
                      <h3 className="demo-title mb-6">Формирование отчета</h3>

                      <div className="report-content space-y-3">
                        {/* Плашка 1: Документ */}
                        {reportStep >= 1 && (
                          <div className="report-skeleton-card p-4 rounded-xl bg-white/80 border border-default-100">
                            <div className="flex items-center gap-4">
                              <Skeleton className="rounded-full">
                                <div className="w-12 h-12 rounded-full bg-default-300 flex items-center justify-center" />
                              </Skeleton>
                              <div className="flex-1 space-y-2">
                                <Skeleton className="w-3/5 rounded-lg">
                                  <div className="h-4 w-3/5 rounded-lg bg-default-200" />
                                </Skeleton>
                                <Skeleton className="w-2/5 rounded-lg">
                                  <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                                </Skeleton>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Плашка 2: Статус */}
                        {reportStep >= 2 && (
                          <div className="report-skeleton-card p-4 rounded-xl bg-white/80 border border-default-100">
                            <div className="flex items-center gap-3">
                              <Skeleton className="rounded-full">
                                <div className="w-8 h-8 rounded-full bg-default-200 flex items-center justify-center" />
                              </Skeleton>
                              <div className="flex-1 space-y-2">
                                <Skeleton className="w-2/5 rounded-lg">
                                  <div className="h-4 w-2/5 rounded-lg bg-default-300" />
                                </Skeleton>
                                <Skeleton className="w-3/5 rounded-lg">
                                  <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                                </Skeleton>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Плашка 3: Готовность */}
                        {reportStep >= 3 && (
                          <div className="report-skeleton-card p-4 rounded-xl bg-white/80 border border-default-100 space-y-3">
                            <Skeleton className="rounded-lg">
                              <div className="h-12 rounded-lg bg-default-200" />
                            </Skeleton>
                            <Skeleton className="rounded-lg">
                              <div className="h-12 rounded-lg bg-default-300" />
                            </Skeleton>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }

                return (
                  <div className="placeholder-content">
                    <span className="placeholder-text">Интерфейс проверки</span>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

        {/* CTA кнопка */}
        <div className="how-it-works-cta">
          <button className="how-it-works-cta-button">
            Начать проверку
          </button>
        </div>
      </div>
    </section>
  );
}
