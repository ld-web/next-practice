"use client";

import PhpPractice from "@/components/practice/PhpPractice";

interface PracticeProps {
  initialCode: string;
  hints: React.ReactNode;
}

const Practice = ({ initialCode, hints }: PracticeProps) => {
  const checkCode = (code: string) => code.match(/for\s*\(/) !== null;

  const checkResult = (output: string[]): boolean => {
    return (
      output.length === 7 && output[0] === "Amanda" && output[6] === "Calvin"
    );
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
