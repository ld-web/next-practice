import { ReactNode } from "react";
import LightBulb from "../utils/LightBulb";

interface HintProps {
  hint: ReactNode;
}

const Hint = ({ hint }: HintProps) => (
  <div className="mt-2 bg-blue-600 p-3 text-gray-200 flex items-start gap-x-2">
    <span>
      <LightBulb />
    </span>
    <div className="hint">{hint}</div>
  </div>
);

export default Hint;
