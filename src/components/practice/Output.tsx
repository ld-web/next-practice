import { useMemo } from "react";

interface OutputProps {
  lines: string[];
  error: boolean;
}

const Output = ({ lines, error }: OutputProps) => {
  const cssClasses = useMemo(() => {
    let classes =
      "max-w-full text-wrap mt-2 border-[1px] p-3 border-gray-500 leading-5 max-h-72 overflow-y-scroll";

    if (error) {
      classes += " border-red-600 text-red-600 bg-red-100 font-bold";
    }

    return classes;
  }, [error]);

  return (
    <div className="mt-2">
      <p className="text-sm">Sortie du script :</p>
      <pre className={cssClasses} role="alert">
        {lines.map((l) => `${l}\n`)}
      </pre>
    </div>
  );
};

export default Output;
