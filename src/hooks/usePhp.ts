import { useEffect, useState } from "react";
//@ts-expect-error
import { PhpWeb } from "php-wasm/PhpWeb.mjs";

const usePhp = () => {
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

  return phpWasm;
};

export default usePhp;
