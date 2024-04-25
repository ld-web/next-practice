"use client";

import { createContext, useEffect, useState } from "react";
//@ts-expect-error
import { PhpWeb } from "php-wasm/PhpWeb.mjs";

interface PhpContextData {
  phpWasm: PhpWeb | null;
  loading: boolean;
}

export const PhpContext = createContext<PhpContextData>({
  phpWasm: null,
  loading: true,
});

export const PhpProvider = ({ children }: { children: React.ReactNode }) => {
  const [phpWasm, setPhpWasm] = useState<PhpWeb | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const php = new PhpWeb();
    setPhpWasm(php);

    php.addEventListener("ready", () => {
      if (process.env.NODE_ENV === "development") {
        console.log("php-wasm ready");
      }
      setLoading(false);
    });
  }, []);

  return (
    <PhpContext.Provider value={{ phpWasm, loading }}>
      {children}
    </PhpContext.Provider>
  );
};
