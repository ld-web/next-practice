import {
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import PhpEditor from "../editor/PhpEditor";
import { PhpContext } from "@/context/PhpContext";
import CheckBadge from "../utils/CheckBadge";
import ExclamationCircle from "../utils/ExclamationCircle";
import LightBulb from "../utils/LightBulb";
import Loading from "../utils/Loading";

interface PhpPracticeProps {
  initialCode: string;
  hint?: ReactNode;
  checkCode: (code: string) => boolean;
  checkOutput: (output: string[]) => boolean;
}

const PhpPractice = ({
  initialCode,
  hint,
  checkCode,
  checkOutput,
}: PhpPracticeProps) => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [code, setCode] = useState(initialCode);
  const [displayHint, setDisplayHint] = useState(false);

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
    if (output.length > 0 && !loading) {
      setSuccess(checkOutput(output));
    }
  }, [output, loading, checkOutput]);

  const onCodeChange = (value: string) => setCode(value);

  const feedOutput = (event: any) => {
    const lines = event.detail
      .map((line: string) => line.replace("\n", ""))
      .filter((line: string) => line !== "");
    setOutput((output) => [...output, ...lines]);
  };

  const submitCode = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (php) {
      php.addEventListener("output", feedOutput);
    }

    setOutput([]);
    setDisplayHint(false);
    setError(false);
    setSuccess(null);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (checkCode(code)) {
      const retVal: any = await php.run(code);
      if (retVal > 0) {
        setError(true);
      }
    } else {
      if (hint) {
        setDisplayHint(true);
      }
      setSuccess(false);
    }

    if (php) {
      php.removeEventListener("output", feedOutput);
    }
    setLoading(false);
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
            disabled={loading}
            className={`${cssClasses} px-3 text-white w-full font-bold uppercase py-4 text-xl flex justify-center items-center disabled:bg-gray-400 transition-all duration-300`}
          >
            {loading && <Loading />}
            {success && <CheckBadge />}
            {success === false && (
              <>
                <ExclamationCircle /> Réessayer
              </>
            )}
            {success && "OK"}
            {success === null && !loading && "Tester"}
          </button>
        </div>
      </form>
      {displayHint && (
        <div className="mt-2 bg-blue-600 p-3 text-gray-200 flex items-start gap-x-2">
          <span>
            <LightBulb />
          </span>
          <div className="hint">{hint}</div>
        </div>
      )}
      {output.length > 0 && !loading && (
        <pre
          className={`max-w-full text-wrap mt-2 border-[1px] p-3 border-gray-500 leading-5 max-h-72 overflow-y-scroll${
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
