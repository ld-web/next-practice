import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { EDITOR_LINES_DEFAULT } from "@/constants";

interface PhpEditorProps {
  code: string;
  onCodeChange: (value: string) => void;
  lines?: number;
}

const PhpEditor = ({
  code,
  onCodeChange,
  lines = EDITOR_LINES_DEFAULT,
}: PhpEditorProps) => {
  return (
    <AceEditor
      placeholder="Code Editor"
      mode="php"
      theme="monokai"
      name="code"
      fontSize={20}
      minLines={lines}
      maxLines={lines}
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
        useWorker: false,
      }}
      width="100%"
    />
  );
};

export default PhpEditor;
