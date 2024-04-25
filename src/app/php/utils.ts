import fs from "node:fs/promises";

export const getCode = async (path: string) => {
  const codeFile = await fs.readFile(path);
  return codeFile.toString();
};
