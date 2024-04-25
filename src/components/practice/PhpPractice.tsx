"use client";

import { FormEvent, ReactNode, useContext, useEffect, useReducer } from "react";
import PhpEditor from "../editor/PhpEditor";
import { PhpContext } from "@/context/PhpContext";
import SubmitButton from "./SubmitButton";
import Hint from "./Hint";
import Output from "./Output";
import { delay } from "@/utils";
import { PracticeAction, practiceReducer } from "./state";
import { EDITOR_LINES_DEFAULT } from "@/constants";
import Loading from "../utils/Loading";

interface PhpPracticeProps {
  initialCode: string;
  lines?: number;
  hint?: ReactNode;
  checkCode?: (code: string) => boolean;
  checkOutput: (output: string[]) => boolean;
}

const PhpPractice = ({
  initialCode,
  lines = EDITOR_LINES_DEFAULT,
  hint,
  checkCode = () => true,
  checkOutput,
}: PhpPracticeProps) => {
  const [practice, dispatch] = useReducer(practiceReducer, {
    output: [],
    code: initialCode,
    status: "init",
  });

  const { phpWasm: php, loading } = useContext(PhpContext);

  useEffect(() => {
    if (practice.status === "executed") {
      if (checkOutput(practice.output)) {
        dispatch({ type: PracticeAction.STATUS, payload: "success" });
      } else {
        dispatch({ type: PracticeAction.STATUS, payload: "failed" });
      }
    }
  }, [practice.status, practice.output, checkOutput]);

  const removePhpOutputListener = () => {
    if (php) {
      php.removeEventListener("output", feedOutput);
    }
  };

  const onCodeChange = (value: string) =>
    dispatch({ type: PracticeAction.CODE, payload: value });

  const feedOutput = (event: any) => {
    const lines = event.detail
      .map((line: string) => line.replace("\n", ""))
      .filter((line: string) => line !== "");
    dispatch({ type: PracticeAction.OUTPUT, payload: lines });
  };

  const submitCode = async (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: PracticeAction.RUN });

    if (php) {
      php.addEventListener("output", feedOutput);
    }

    await delay(850);

    if (!checkCode(practice.code)) {
      dispatch({ type: PracticeAction.STATUS, payload: "failed" });
      removePhpOutputListener();
      return;
    }

    const retVal: any = await php.run(practice.code);

    if (retVal > 0) {
      dispatch({ type: PracticeAction.STATUS, payload: "error" });
      removePhpOutputListener();
      return;
    }

    removePhpOutputListener();
    dispatch({ type: PracticeAction.STATUS, payload: "executed" });
  };

  if (loading) {
    return (
      <div className="pt-8 flex justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={submitCode}>
        <div>
          <PhpEditor
            code={practice.code}
            onCodeChange={onCodeChange}
            lines={lines}
          />
        </div>
        <div>
          <SubmitButton status={practice.status} />
        </div>
      </form>
      {practice.status === "failed" && <Hint hint={hint} />}
      {practice.output.length > 0 && practice.status !== "running" && (
        <Output lines={practice.output} error={practice.status === "error"} />
      )}
    </div>
  );
};

export default PhpPractice;
