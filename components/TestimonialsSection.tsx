import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Avatar } from "@heroui/avatar";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Анна Петрова",
    role: "Пользователь",
    avatar: "https://ui-avatars.com/api/?name=АП&background=45F3FF&color=fff&size=150&bold=true",
    text: "Ребята, это просто топ!!! Нашли какое-то обременение, про которое даже продавец не знал)) спасли мои нервы и деньги",
    rating: 5,
    date: "2 дня назад"
  },
  {
    id: 2,
    name: "Дмитрий Соколов",
    role: "Пользователь",
    avatar: "https://ui-avatars.com/api/?name=ДС&background=36FF83&color=fff&size=150&bold=true",
    text: "Я вообще в шоке от скорости работы. 15 минут и готово! Раньше по 3 дня сидел, все эти росреестры проверял... теперь клиентам сразу показываю отчет, они такие довольные))",
    rating: 5,
    date: "5 дней назад"
  },
  {
    id: 3,
    name: "Елена Морозова",
    role: "Пользователь",
    avatar: "https://ui-avatars.com/api/?name=ЕМ&background=A1FBFF&color=fff&size=150&bold=true",
    text: "спасибо огромное! нашли долг по жкх который остался от бывшего, я даже не знала... успела погасить до сделки",
    rating: 5,
    date: "1 неделю назад"
  },
  {
    id: 4,
    name: "Сергей Волков",
    role: "Пользователь",
    avatar: "https://ui-avatars.com/api/?name=СВ&background=45F3FF&color=fff&size=150&bold=true",
    text: "Пользуюсь постоянно. Удобно что сразу видно где подвох. Из 23 квартир 7 оказались с проблемами - представляете сколько денег сэкономил!!!",
    rating: 5,
    date: "2 недели назад"
  },
  {
    id: 5,
    name: "Ольга Смирнова",
    role: "Пользователь",
    avatar: "https://ui-avatars.com/api/?name=ОС&background=36FF83&color=fff&size=150&bold=true",
    text: "блин, чуть не попали... квартира дешевая была, оказалось хозяин банкрот и арест на квартире. риелтор говорил все норм будет. хорошо проверили!",
    rating: 5,
    date: "3 недели назад"
  },
  {
    id: 6,
    name: "Максим Лебедев",
    role: "Пользователь",
    avatar: "https://ui-avatars.com/api/?name=МЛ&background=A1FBFF&color=fff&size=150&bold=true",
    text: "Все супер! Буду пользоваться еще)",
    rating: 5,
    date: "3 недели назад"
  },
  {
    id: 7,
    name: "Наталья Григорьева",
    role: "Пользователь",
    avatar: "https://ui-avatars.com/api/?name=НГ&background=45F3FF&color=fff&size=150&bold=true",
    text: "Не видел еще, чтобы отчеты были настолько полными, хотя пробовал уже много чего и кого. Нашли кучу проблем с домом, сбили цену на 800к! Это просто вау",
    rating: 5,
    date: "1 месяц назад"
  },
  {
    id: 8,
    name: "Андрей Новиков",
    role: "Пользователь",
    avatar: "https://ui-avatars.com/api/?name=АН&background=36FF83&color=fff&size=150&bold=true",
    text: "норм сервис. проверяет и квартиру и застройщика сразу. два раза уже отказался от покупки благодаря вам",
    rating: 5,
    date: "1 месяц назад"
  },
  {
    id: 9,
    name: "Виктория Павлова",
    role: "Пользователь",
    avatar: "https://ui-avatars.com/api/?name=ВП&background=A1FBFF&color=fff&size=150&bold=true",
    text: "Первый раз покупала квартиру, вообще ничего не понимала... Ваш отчет прям все разжевал - что где как. Даже юрист не понадобился в итоге! Спасибо большое",
    rating: 5,
    date: "1 месяц назад"
  },
  {
    id: 10,
    name: "Игорь Кузнецов",
    role: "Пользователь",
    avatar: "https://ui-avatars.com/api/?name=ИК&background=45F3FF&color=fff&size=150&bold=true",
    text: "подключили на все агентство. экономия дикая просто - раньше юристу по 20к платили за каждую сделку, теперь за 2к сами все проверяем))",
    rating: 5,
    date: "2 месяца назад"
  },
  {
    id: 11,
    name: "Мария Белова",
    role: "Пользователь",
    avatar: "https://ui-avatars.com/api/?name=МБ&background=36FF83&color=fff&size=150&bold=true",
    text: "Оч удобно что можно удаленно проверить! Мы из другого города, заказали отчет, все чисто оказалось. Рекомендую 👍",
    rating: 5,
    date: "2 месяца назад"
  },
  {
    id: 12,
    name: "Александр Орлов",
    role: "Пользователь",
    avatar: "https://ui-avatars.com/api/?name=АО&background=A1FBFF&color=fff&size=150&bold=true",
    text: "Выкупаем проблемную недвигу. С вами работать одно удовольствие - сразу видно что брать а что нет. 4 токсичных обьекта уже отсеяли благодаря вашим отчетам",
    rating: 5,
    date: "2 месяца назад"
  }
];

// Разделяем отзывы на 3 колонки
const column1 = testimonials.filter((_, i) => i % 3 === 0);
const column2 = testimonials.filter((_, i) => i % 3 === 1);
const column3 = testimonials.filter((_, i) => i % 3 === 2);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="bg-white border-1 border-gray-100 mb-6 flex-shrink-0 shadow-none">
    <CardHeader className="justify-between pb-0">
      <div className="flex gap-3">
        <Avatar
          size="md"
          src={testimonial.avatar}
        />
        <div className="flex flex-col gap-1 items-start justify-center">
          <h4 className="text-sm font-semibold leading-none text-gray-900">
            {testimonial.name}
          </h4>
          <h5 className="text-xs tracking-tight text-gray-500">
            {testimonial.role}
          </h5>
        </div>
      </div>
    </CardHeader>

    <CardBody className="px-4 py-4">
      <p className="text-sm text-gray-700 leading-relaxed">
        {testimonial.text}
      </p>
    </CardBody>

    <CardFooter className="gap-3 pt-0">
      <div className="flex items-center gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
      </div>
      <div className="flex-1" />
      <p className="text-xs text-gray-400">{testimonial.date}</p>
    </CardFooter>
  </Card>
);

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Проверили уже &gt;100 000 объектов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            В России каждый день покупается и продается 10 410 квартир. Проводите сделки безопасно вместе с Домвизором
          </p>
        </div>

        {/* Карусель отзывов */}
        <div className="relative overflow-hidden" style={{ height: '600px' }}>
          {/* Scroll shadows */}
          <div
            className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0) 100%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
          />

          {/* Колонки с отзывами */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {/* Колонка 1 - снизу вверх */}
            <div className="testimonials-column testimonials-column-up overflow-hidden">
              <div className="testimonials-track">
                {[...column1, ...column1].map((testimonial, index) => (
                  <TestimonialCard key={`col1-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Колонка 2 - сверху вниз */}
            <div className="testimonials-column testimonials-column-down overflow-hidden hidden md:block">
              <div className="testimonials-track">
                {[...column2, ...column2].map((testimonial, index) => (
                  <TestimonialCard key={`col2-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Колонка 3 - снизу вверх */}
            <div className="testimonials-column testimonials-column-up overflow-hidden hidden md:block">
              <div className="testimonials-track">
                {[...column3, ...column3].map((testimonial, index) => (
                  <TestimonialCard key={`col3-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-column {
          position: relative;
          height: 100%;
        }

        .testimonials-track {
          display: flex;
          flex-direction: column;
        }

        .testimonials-column-up .testimonials-track {
          animation: scrollUp 40s linear infinite;
        }

        .testimonials-column-down .testimonials-track {
          animation: scrollDown 40s linear infinite;
        }

        .testimonials-column:hover .testimonials-track {
          animation-play-state: paused;
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .testimonials-column-up .testimonials-track {
            animation: scrollUp 30s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
