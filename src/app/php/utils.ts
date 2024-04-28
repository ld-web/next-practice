import { StatementMeta } from "@/index";
import matter from "gray-matter";
import fs from "node:fs/promises";

export const getCode = async (path: string) => {
  const codeFile = await fs.readFile(path);
  return codeFile.toString();
};

export const getMetadata = (path: string): StatementMeta => {
  const { data } = matter.read(path);
  return data as StatementMeta;
};
