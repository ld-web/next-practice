import ThemeSwitcher from "@/components/utils/ThemeSwitcher";
import { PhpProvider } from "@/context/PhpContext";
import { ReactNode } from "react";

export default function PhpLayout({ children }: { children: ReactNode }) {
  return (
    <section className="max-w-[1000px] mx-auto mt-6">
      <header className="mb-6 md:mb-12 flex justify-between items-center">
        <h1 className="text-3xl md:text-5xl uppercase">PHP - Exercices</h1>
        <ThemeSwitcher />
      </header>

      <PhpProvider>{children}</PhpProvider>
    </section>
  );
}
