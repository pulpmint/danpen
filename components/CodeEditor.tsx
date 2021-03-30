import _ from "lodash";
import * as hljs from "highlight.js";
import { FC, useEffect, useRef, useState } from "react";
import { hljsLanguages, ILanguage, LANGUAGES } from "../constants/languages";
import usePanelSettings from "../hooks/usePanelSettings";
import { CDN_LINK, DEF_CODE } from "../constants/misc";

const CodeEditor: FC = () => {
  const { lineNumber, language, setPredictions } = usePanelSettings();
  const editorRef = useRef(null);

  const [code, setCode] = useState<string>(DEF_CODE);
  const [memoiztion, setMemoization] = useState<string[]>([]);

  const detectLanguage = (): ILanguage => {
    let hljsPred = null;
    let lang = null;

    hljsPred = hljs.highlightAuto(code, hljsLanguages);

    if (hljsPred.language) {
      lang = _.find(LANGUAGES, lang => lang.highlight.includes(hljsPred.language));
    }

    if (language.mode === "auto") {
      setPredictions(lang);
    } else {
      setPredictions(null);
    }

    return lang;
  };

  const loadMode = (lang: ILanguage) => {
    if (lang.mode !== "auto") {
      if (!memoiztion.includes(lang.mode)) {
        // @ts-expect-error
        window.CodeMirror.autoLoadMode(window.editor, lang.mode);
        setMemoization([...memoiztion, lang.mode]);
      }

      // @ts-expect-error
      window.editor.setOption("mode", lang.mode);
    }
  };

  const handleChange = () => {
    const lang = detectLanguage();
    if (lang) loadMode(lang);
  };

  useEffect(() => {
    // @ts-expect-error
    if (editorRef.current && !window.editor) {
      editorRef.current.classList.remove("chakra-textarea");
      editorRef.current.classList.remove("css-ofmset");
      editorRef.current.classList.add("code-editor");

      // @ts-expect-error
      window.CodeMirror.modeURL = CDN_LINK;

      // @ts-expect-error
      window.editor = window.CodeMirror.fromTextArea(editorRef.current, {
        lineNumbers: true,
        lineWrapping: true,
        theme: "dracula"
      });

      // @ts-expect-error
      window.editor.on("change", () => {
        // @ts-expect-error
        setCode(window.editor.getValue());
      });
    }
  }, []);

  useEffect(() => {
    if (language.mode === "auto") {
      handleChange();
    }
  }, [code]);

  useEffect(() => {
    if (language.mode === "auto") {
      handleChange();
    } else {
      loadMode(language);
    }
  }, [language]);

  useEffect(() => {
    // @ts-expect-error
    window.editor.setOption("lineNumbers", lineNumber);
  }, [lineNumber]);

  return (
    <textarea
      ref={editorRef}
      value={code}
      onChange={() => console.warn("Something has changed!")}
    />
  );
};

export default CodeEditor;
