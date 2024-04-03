import {
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import PhpEditor from "../editor/PhpEditor";
import { PhpContext } from "@/context/PhpContext";
import SubmitButton from "./SubmitButton";
import Hint from "./Hint";
import Output from "./Output";
import { delay } from "@/utils";
import { practiceStateReducer } from "./state";

interface PhpPracticeProps {
  initialCode: string;
  hint?: ReactNode;
  checkCode: (code: string) => boolean;
  checkOutput: (output: string[]) => boolean;
}

const PhpPractice = ({
  initialCode,
  hint,
  checkCode = () => true,
  checkOutput,
}: PhpPracticeProps) => {
  const [state, dispatch] = useReducer(practiceStateReducer, "init");
  const [output, setOutput] = useState<string[]>([]);
  const [code, setCode] = useState(initialCode);

  const php = useContext(PhpContext);

  useEffect(() => {
    if (state === "executed") {
      if (checkOutput(output)) {
        dispatch("succeed");
      } else {
        dispatch("fail");
      }
    }
  }, [output, state, checkOutput]);

  const removePhpOutputListener = () => {
    if (php) {
      php.removeEventListener("output", feedOutput);
    }
  };

  const onCodeChange = (value: string) => setCode(value);

  const feedOutput = (event: any) => {
    const lines = event.detail
      .map((line: string) => line.replace("\n", ""))
      .filter((line: string) => line !== "");
    setOutput((output) => [...output, ...lines]);
  };

  const submitCode = async (e: FormEvent) => {
    e.preventDefault();
    dispatch("run");
    setOutput([]);

    if (php) {
      php.addEventListener("output", feedOutput);
    }

    await delay(850);

    if (!checkCode(code)) {
      dispatch("fail");
      removePhpOutputListener();
      return;
    }

    const retVal: any = await php.run(code);

    if (retVal > 0) {
      dispatch("error");
      removePhpOutputListener();
      return;
    }

    removePhpOutputListener();
    dispatch("finished");
  };

  return (
    <div>
      <form onSubmit={submitCode}>
        <div>
          <PhpEditor code={code} onCodeChange={onCodeChange} />
        </div>
        <div>
          <SubmitButton state={state} />
        </div>
      </form>
      {state === "failed" && <Hint hint={hint} />}
      {output.length > 0 && state !== "running" && (
        <Output lines={output} error={state === "error"} />
      )}
    </div>
  );
};

export default PhpPractice;
