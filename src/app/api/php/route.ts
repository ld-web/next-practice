import { execSync } from "child_process";
import { randomBytes } from "crypto";
import fs from "fs";
import { NextRequest } from "next/server";
import path from "path";

const SCRIPTS_DIR = path.join(".", "php-scripts");

interface RequestBody {
  code: string;
}

export async function POST(req: NextRequest) {
  const code = ((await req.json()) as RequestBody).code;

  const filename = `${randomBytes(20).toString("hex")}.php`;
  const filepath = path.join(SCRIPTS_DIR, filename);

  fs.writeFileSync(filepath, code);

  try {
    const output = execSync(
      `docker run --rm -w /data -v ./php-scripts:/data php:8.2-alpine php ${filename}`
    );
    return Response.json(output.toString());
  } catch (err: any) {
    return Response.json({
      msg: "Échec ! ",
      output: err.stdout.toString(),
    });
  } finally {
    fs.rmSync(filepath);
  }
}
