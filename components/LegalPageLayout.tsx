import React from "react";
import { Link } from "@heroui/link";

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with back link */}
      <div className="bg-[#F0FFFE] border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-[#45F3FF] transition-colors mb-4 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Вернуться на главную
          </Link>
          <h1 className="text-3xl md:text-4xl font-[800] text-[#11181C] mt-2">
            {title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              <strong>ООО «Домвизор»</strong>
            </p>
            <p className="text-sm text-gray-600">
              ИНН 9722067716 | КПП 772201001 | ОГРН 1247700060772
            </p>
            <p className="text-sm text-gray-600">
              Адрес: 111024, город Москва, Авиамоторная ул, д. 50 стр. 2, помещ. 9/н
            </p>
            <p className="text-sm text-gray-600">
              E-mail:{" "}
              <Link
                href="mailto:support@domvisor.ru"
                className="text-[#45F3FF] hover:text-[#36FF83] transition-colors"
              >
                support@domvisor.ru
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
