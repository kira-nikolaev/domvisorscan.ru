import React from "react";
import { Link } from "@heroui/link";

export default function Footer() {
  return (
    <footer className="bg-[#11181C] text-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-12 md:py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Technical Support */}
          <div>
            <h3 className="text-lg font-[700] mb-4 text-white">
              Техническая поддержка
            </h3>
            <p className="text-sm text-gray-300 mb-3 font-[400] leading-relaxed">
              По всем вопросам работы сервиса, обращайтесь в службу поддержки
            </p>
            <Link
              href="mailto:support@domvisor.ru"
              className="text-sm font-[600] text-white hover:text-gray-300 transition-colors"
            >
              support@domvisor.ru
            </Link>
          </div>

          {/* Partnership */}
          <div>
            <h3 className="text-lg font-[700] mb-4 text-white">
              Партнерство и сотрудничество
            </h3>
            <p className="text-sm text-gray-300 mb-3 font-[400] leading-relaxed">
              Мы всегда открыты новым предложениям и партнерствам
            </p>
            <Link
              href="mailto:support@domvisor.ru"
              className="text-sm font-[600] text-white hover:text-gray-300 transition-colors"
            >
              support@domvisor.ru
            </Link>
          </div>

          {/* Postal Address */}
          <div>
            <h3 className="text-lg font-[700] mb-4 text-white">
              Почтовые отправления
            </h3>
            <p className="text-sm text-gray-300 mb-3 font-[400] leading-relaxed">
              Адрес для получения корреспонденции и почтовых отправлений:
            </p>
            <p className="text-sm text-gray-400 font-[400] leading-relaxed">
              111024 Россия, Москва, ул. Авиамоторная д 50 стр 2 пом 9/Н
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] mb-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="space-y-4">
          {/* Company Info */}
          <div className="text-center">
            <p className="text-sm text-gray-400 font-[400] mb-2">
              ООО «Домвизор». ИНН 9722067716 | КПП 772201001 | ОГРН 1247700060772
            </p>
            <p className="text-sm text-gray-400 font-[400]">
              По всем вопросам пишите:{" "}
              <Link
                href="mailto:support@domvisor.ru"
                className="text-white hover:text-gray-300 transition-colors font-[600]"
              >
                support@domvisor.ru
              </Link>
            </p>
          </div>

          {/* Legal Links */}
          <div className="text-center flex justify-center gap-6">
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-white transition-colors font-[400]"
            >
              Пользовательское соглашение
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-white transition-colors font-[400]"
            >
              Политика конфиденциальности
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4">
            <p className="text-xs text-gray-500 font-[400]">
              © Все права защищены. Использование материалов с данного сайта
              запрещено без разрешения администрации.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
