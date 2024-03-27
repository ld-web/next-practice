import { FormEvent, ReactNode, useContext, useEffect, useState } from "react";
import PhpEditor from "../editor/PhpEditor";
import { PhpContext } from "@/context/PhpContext";
import SubmitButton from "./SubmitButton";
import Hint from "./Hint";
import Output from "./Output";
import { delay } from "@/utils";

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
    await delay(850);

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
          <SubmitButton loading={loading} success={success} />
        </div>
      </form>
      {displayHint && <Hint hint={hint} />}
      {output.length > 0 && !loading && <Output lines={output} error={error} />}
    </div>
  );
};

export default PhpPractice;
