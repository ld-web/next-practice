"use client";

import PhpPractice from "@/components/practice/PhpPractice";

interface PracticeProps {
  initialCode: string;
  hints: React.ReactNode;
}

const Practice = ({ initialCode, hints }: PracticeProps) => {
  const checkCode = (code: string) => code.match(/\$notes\s*\[3\]/) !== null;

  const checkResult = (output: string[]): boolean => {
    return output.length === 1 && output[0] === "18";
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
