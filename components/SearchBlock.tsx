'use client';

import { useState } from 'react';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';

export default function SearchBlock() {
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      // Редирект на основной сайт с адресом
      window.location.href = `https://domvisor.ru/proverka?address=${encodeURIComponent(address)}`;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="text"
          placeholder="Введите адрес объекта недвижимости"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          size="lg"
          classNames={{
            base: "flex-1",
            inputWrapper: "bg-white shadow-md",
            input: "text-base",
          }}
        />
        <Button
          type="submit"
          color="primary"
          size="lg"
          className="px-8 font-semibold"
        >
          Проверить
        </Button>
      </form>
    </div>
  );
}
