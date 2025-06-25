"use client";

import IMask from "imask";
import { useEffect, useRef } from "react";

export default function PhoneInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      IMask(inputRef.current, {
        mask: "+{7} (000) 000 00-00",
      });
    }
  }, []);

  return (
    <input
      ref={inputRef}
      type="tel"
      name="phone"
      className="w-410 max-lg:w-250 max-sm:w-48 py-3 max-lg:py-2 px-4 bg-background text-foreground rounded-15 max-lg:text-2xl max-md:text-xl"
      placeholder="+7 (___) ___ __-__"
      autoComplete="tel"
    />
  );
}
