import { FormEvent, useContext, useEffect, useMemo, useState } from "react";
import PhpEditor from "../editor/PhpEditor";
import { PhpContext } from "@/context/PhpContext";
import CheckBadge from "../utils/CheckBadge";

interface PhpPracticeProps {
  initialCode: string;
  checkOutput: (output: string[]) => boolean;
}

const PhpPractice = ({ initialCode, checkOutput }: PhpPracticeProps) => {
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [code, setCode] = useState(initialCode);

  const php = useContext(PhpContext);

  const cssClasses = useMemo(() => {
    if (success === null) {
      return "bg-orange-500 hover:bg-orange-700";
    }

    return success
      ? "bg-green-500 hover:bg-green-700"
      : "bg-red-500 hover:bg-red-700";
  }, [success]);

  useEffect(() => {
    if (output.length > 0) {
      setSuccess(checkOutput(output));
    }
  }, [output, checkOutput]);

  const onCodeChange = (value: string) => setCode(value);

  const feedOutput = (event: any) => {
    const lines = event.detail
      .map((line: string) => line.replace("\n", ""))
      .filter((line: string) => line !== "");
    setOutput((output) => [...output, ...lines]);
  };

  const submitCode = async (e: FormEvent) => {
    e.preventDefault();

    if (php) {
      php.addEventListener("output", feedOutput);
    }

    setOutput([]);
    setError(false);
    setSuccess(null);
    // beforeExecute(code);
    const retVal: any = await php.run(code);
    if (retVal > 0) {
      setError(true);
    }
    if (php) {
      php.removeEventListener("output", feedOutput);
    }
  };

  return (
    <div>
      <form onSubmit={submitCode}>
        <div>
          <PhpEditor code={code} onCodeChange={onCodeChange} />
        </div>
        <div>
          <button
            type="submit"
            className={`${cssClasses} px-3 text-white w-full font-bold uppercase py-4 text-xl flex justify-center items-center disabled:bg-gray-400 transition-all duration-300`}
          >
            {success && <CheckBadge />}
            Tester
          </button>
        </div>
      </form>
      {output.length > 0 && (
        <pre
          className={`max-w-full text-wrap mt-2 border-[1px] p-3 border-gray-500 leading-5${
            error ? " border-red-600 text-red-600 bg-red-100 font-bold" : ""
          }`}
        >
          {output.map((line) => `${line}\n`)}
        </pre>
      )}
    </div>
  );
};

export default PhpPractice;
