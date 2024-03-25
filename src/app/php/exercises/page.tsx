"use client";

import { useEffect, useState } from "react";
//@ts-expect-error
import { PhpWeb } from "php-wasm/PhpWeb.mjs";
import { PhpContext } from "@/context/PhpContext";
import ThemeSwitcher from "@/components/utils/ThemeSwitcher";
import DisplayElement from "@/components/exercises/php/arrays/DisplayElement";

export default function Exercises() {
  const [phpWasm, setPhpWasm] = useState<PhpWeb | null>(null);

  useEffect(() => {
    const php = new PhpWeb();
    setPhpWasm(php);

    php.addEventListener("ready", () => {
      if (process.env.NODE_ENV === "development") {
        console.log("php-wasm ready");
      }
    });
  }, []);

  return (
    <section className="max-w-[900px] mx-auto mt-6">
      <header className="mb-6 md:mb-12 flex justify-between items-center">
        <h1 className="text-3xl md:text-5xl uppercase">PHP - Exercices</h1>
        <ThemeSwitcher />
      </header>

      <PhpContext.Provider value={phpWasm}>
        <h2 className="text-2xl md:text-4xl border-b mb-5">Les tableaux</h2>

        <DisplayElement />
        <DisplayElement />
        <DisplayElement />
      </PhpContext.Provider>
    </section>
  );
}
