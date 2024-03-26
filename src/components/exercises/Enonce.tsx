import { ReactNode } from "react";

const Enonce = ({ children }: { children: ReactNode }) => (
  <p className="p-2 border-l-4 border-blue-800 bg-slate-200 dark:bg-slate-700">
    {children}
  </p>
);

export default Enonce;
