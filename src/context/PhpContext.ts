import { createContext } from "react";
//@ts-expect-error
import { PhpWeb } from "php-wasm/PhpWeb.mjs";

export const PhpContext = createContext<PhpWeb | null>(null);
