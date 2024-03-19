"use client";

import { FormEvent, useState } from "react";
import AceEditor from "react-ace";
import Loading from "@/components/utils/Loading";

import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

export default function Exercises() {
  const [code, setCode] = useState(`<?php

echo "Hello world !";
`);
  const [loading, setLoading] = useState(false);

  const onCodeChange = (value: string) => setCode(value);

  const submitCode = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });
    console.log(await res.json());

    setLoading(false);
  };

  return (
    <section className="max-w-[900px] mx-auto mt-6">
      <header className="mb-16">
        <h2 className="text-center text-4xl uppercase">PHP - Exercices</h2>
      </header>

      <form onSubmit={submitCode}>
        <div>
          <AceEditor
            placeholder="Code Editor"
            mode="php"
            theme="monokai"
            name="code"
            fontSize={24}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={code}
            onChange={onCodeChange}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: true,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
            width="100%"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-500 text-white px-3 hover:bg-green-700 w-full font-bold uppercase py-4 text-xl flex justify-center disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? <Loading /> : "Évaluer"}
          </button>
        </div>
      </form>
    </section>
  );
}
