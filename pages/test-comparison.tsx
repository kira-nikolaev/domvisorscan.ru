import { Chip } from '@heroui/chip';

export default function TestComparisonPage() {
  return (
    <div className="w-full min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <h1 className="text-4xl font-bold text-center mb-4">
          Сравнение способов проверки недвижимости
        </h1>

        {/* Подзаголовок */}
        <p className="text-lg text-gray-600 text-center mb-12">
          Domvisor vs традиционные методы
        </p>

        {/* Таблица */}
        <div className="w-full overflow-x-auto shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-4 text-lg font-semibold border-b border-gray-200" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, lineHeight: 1.3, color: '#11181C' }}>
                  Критерий
                </th>
                <th className="text-left p-4 text-lg border-b border-gray-200" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, lineHeight: 1.3, color: '#11181C' }}>
                  Домвизор
                </th>
                <th className="text-left p-4 text-lg font-semibold border-b border-gray-200" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, lineHeight: 1.3, color: '#11181C' }}>
                  Официальные реестры
                </th>
                <th className="text-left p-4 text-lg font-semibold border-b border-gray-200" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, lineHeight: 1.3, color: '#11181C' }}>
                  Онлайн-выписки
                </th>
                <th className="text-left p-4 text-lg font-semibold border-b border-gray-200" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, lineHeight: 1.3, color: '#11181C' }}>
                  Знакомый юрист
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Строка 1: Что это по сути */}
              <tr className="hover:bg-gray-50">
                <td className="p-4 text-sm text-gray-700 font-semibold border-b border-gray-100">
                  Что это по сути
                </td>
                <td className="p-4 text-sm text-gray-700 border-b border-gray-100">
                  Сервис проверки объекта и продавца с готовым заключением.
                </td>
                <td className="p-4 text-sm text-gray-700 border-b border-gray-100">
                  Госдокумент с сырыми данными по объекту.
                </td>
                <td className="p-4 text-sm text-gray-700 border-b border-gray-100">
                  Магазин выписок, тот же документ в обёртке.
                </td>
                <td className="p-4 text-sm text-gray-700 border-b border-gray-100">
                  Разовый эксперт, который смотрит ваши документы.
                </td>
              </tr>

              {/* Строка 2: Формат результата */}
              <tr className="hover:bg-gray-50">
                <td className="p-4 text-sm text-gray-700 font-semibold border-b border-gray-100">
                  Формат результата
                </td>
                <td className="p-4 border-b border-gray-100">
                  <div className="flex flex-col gap-2">
                    <Chip size="sm" variant="flat" color="success">Отчёт</Chip>
                    <Chip size="sm" variant="flat" color="success">Пояснения человеческим языком</Chip>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-100">
                  <div className="flex flex-col gap-2">
                    <Chip size="sm" variant="flat" color="default">PDF/выписка</Chip>
                    <Chip size="sm" variant="flat" color="default">Юр. язык</Chip>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-100">
                  <div className="flex flex-col gap-2">
                    <Chip size="sm" variant="flat" color="default">PDF/выписка</Chip>
                    <Chip size="sm" variant="flat" color="default">Красивая подача</Chip>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-100">
                  <div className="flex flex-col gap-2">
                    <Chip size="sm" variant="flat" color="default">Комментарий</Chip>
                    <Chip size="sm" variant="flat" color="default">Без стандарта формата</Chip>
                  </div>
                </td>
              </tr>

              {/* Строка 3: Разбор рисков */}
              <tr className="hover:bg-gray-50">
                <td className="p-4 text-sm text-gray-700 font-semibold border-b border-gray-100">
                  Разбор рисков
                </td>
                <td className="p-4 text-sm text-gray-700 border-b border-gray-100">
                  Методика анализа: выделяем ключевые риски и пишем, что может пойти не так.
                </td>
                <td className="p-4 text-sm text-gray-700 border-b border-gray-100">
                  Анализа нет: факты есть, смысла нет — разбираетесь сами.
                </td>
                <td className="p-4 text-sm text-gray-700 border-b border-gray-100">
                  Иногда подсвечивают 1–2 очевидные вещи, глубоко не копают.
                </td>
                <td className="p-4 text-sm text-gray-700 border-b border-gray-100">
                  Зависит от человека: где-то глубоко, где-то очень поверхностно.
                </td>
              </tr>

              {/* Строка 4: Кого реально проверяют */}
              <tr className="hover:bg-gray-50">
                <td className="p-4 text-sm text-gray-700 font-semibold border-b border-gray-100">
                  Кого реально проверяют
                </td>
                <td className="p-4 border-b border-gray-100">
                  <div className="flex flex-col gap-2">
                    <Chip size="sm" variant="flat" color="success">Объект</Chip>
                    <Chip size="sm" variant="flat" color="success">Все текущие собственники</Chip>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-100">
                  <div className="flex flex-col gap-2">
                    <Chip size="sm" variant="flat" color="default">Только объект</Chip>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-100">
                  <div className="flex flex-col gap-2">
                    <Chip size="sm" variant="flat" color="default">Только объект</Chip>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-100">
                  <div className="flex flex-col gap-2">
                    <Chip size="sm" variant="flat" color="default">Объект</Chip>
                    <Chip size="sm" variant="flat" color="default">Иногда продавец</Chip>
                  </div>
                </td>
              </tr>

              {/* Строка 5: Время и морока для вас */}
              <tr className="hover:bg-gray-50">
                <td className="p-4 text-sm text-gray-700 font-semibold border-b border-gray-100">
                  Время и морока для вас
                </td>
                <td className="p-4 border-b border-gray-100">
                  <div className="flex flex-col gap-2">
                    <div>
                      <Chip size="sm" variant="flat" color="success">10–60 минут</Chip>
                    </div>
                    <p className="text-sm text-gray-600">
                      Вы ввели данные, отчёт пришёл — разбор уже внутри.
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-100">
                  <div className="flex flex-col gap-2">
                    <div>
                      <Chip size="sm" variant="flat" color="default">10–60 минут</Chip>
                    </div>
                    <p className="text-sm text-gray-600">
                      Потом ещё часами читать, гуглить и советоваться.
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-100">
                  <div className="flex flex-col gap-2">
                    <div>
                      <Chip size="sm" variant="flat" color="default">10–60 минут</Chip>
                    </div>
                    <p className="text-sm text-gray-600">
                      Документ быстро, но все вопросы после выписки остаются на вас.
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-100">
                  <div className="flex flex-col gap-2">
                    <div>
                      <Chip size="sm" variant="flat" color="default">1–3 дня</Chip>
                    </div>
                    <p className="text-sm text-gray-600">
                      Созвониться, переслать документы, ждать комментарий.
                    </p>
                  </div>
                </td>
              </tr>

              {/* Строка 6: Боль, которая всё равно останется */}
              <tr className="hover:bg-gray-50">
                <td className="p-4 text-sm text-gray-700 font-semibold">
                  Боль, которая всё равно останется
                </td>
                <td className="p-4 text-sm text-gray-700">
                  <span style={{ fontSize: '2em' }}>🙂</span> Придётся принять решение самому, но картина по объекту и продавцу уже разложена по полочкам.
                </td>
                <td className="p-4 text-sm text-gray-700">
                  <span style={{ fontSize: '2em' }}>😬</span> Вы всё равно не уверены, правильно ли поняли документ и ничего ли не пропустили.
                </td>
                <td className="p-4 text-sm text-gray-700">
                  <span style={{ fontSize: '2em' }}>😬</span> Заплатили, получили выписку — и дальше те же вопросы, что и до оплаты.
                </td>
                <td className="p-4 text-sm text-gray-700">
                  <span style={{ fontSize: '2em' }}>😬</span> Зависимость от одной головы: завтра занят, уехал, сменился — весь процесс разваливается.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
