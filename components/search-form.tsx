"use client";

import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

export default function SearchForm() {
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: заменить на реальный URL из env
    const redirectUrl = process.env.NEXT_PUBLIC_REDIRECT_URL || "https://domvisor.ru/proverka";

    // Редирект на основной сайт
    window.location.href = `${redirectUrl}?address=${encodeURIComponent(address)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Введите адрес недвижимости..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          size="lg"
          classNames={{
            input: "text-base",
            inputWrapper: "h-14",
          }}
          required
        />
        <Button
          type="submit"
          color="primary"
          size="lg"
          className="px-8"
        >
          Проверить
        </Button>
      </div>
    </form>
  );
}
