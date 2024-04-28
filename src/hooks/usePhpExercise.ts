import { getCode, getMetadata } from "@/app/php/utils";
import path from "path";

const usePhpExercise = async (
  initialCodePath: string,
  statementPath: string
) => {
  const initialCode = await getCode(path.join(process.cwd(), initialCodePath));
  const metadata = getMetadata(path.join(process.cwd(), statementPath));

  return { initialCode, metadata };
};

export default usePhpExercise;
