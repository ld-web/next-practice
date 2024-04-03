import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

interface PhpEditorProps {
  code: string;
  onCodeChange: (value: string) => void;
}

const PhpEditor = ({ code, onCodeChange }: PhpEditorProps) => {
  return (
    <AceEditor
      placeholder="Code Editor"
      mode="php"
      theme="monokai"
      name="code"
      fontSize={20}
      minLines={12}
      maxLines={12}
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
