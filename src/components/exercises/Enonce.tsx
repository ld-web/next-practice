import { ReactNode } from "react";

const Enonce = ({ children }: { children: ReactNode }) => (
  <div className="p-3 border-l-4 border-blue-500 bg-slate-200 dark:bg-slate-700">
    {children}
  </div>
);

export default Enonce;
