"use client";

import PhpPractice from "@/components/practice/PhpPractice";

interface PracticeProps {
  initialCode: string;
  hints: React.ReactNode;
}

const Practice = ({ initialCode, hints }: PracticeProps) => {
  const checkCode = (code: string) => code.indexOf("count") > 0;

  const checkResult = (output: string[]): boolean => {
    return output.length === 1 && output[0] === "20";
  };

  return (
    <PhpPractice
      initialCode={initialCode}
      hint={hints}
      checkCode={checkCode}
      checkOutput={checkResult}
    />
  );
};

export default Practice;
