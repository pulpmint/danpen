import { useColorMode } from "@chakra-ui/react";
import { createContext, FC, useEffect, useState } from "react";
import { GRADIENTS } from "../constants/gradients";
import { ILanguage, LANGUAGES } from "../constants/languages";
import { PADDING, FONTSTYLE } from "../constants/panelSettings";
import useKeyboardListener from "../hooks/useKeyboardListener";
import {
  FontSetting,
  Gradient,
  PaddingSetting,
  ExportSize
} from "../types/PanelSettings";

export interface IPanelContext {
  darkMode: boolean;
  lineNumber: boolean;
  background: boolean;
  color: Gradient;
  padding: PaddingSetting;
  font: FontSetting;
  language: ILanguage;
  predictions: ILanguage;
  exportSize: ExportSize;
  rendering: boolean;
  setDarkMode: Function;
  setLineNumber: Function;
  setBackground: Function;
  setColor: Function;
  setPadding: Function;
  setFont: Function;
  setLanguage: Function;
  setPredictions: Function;
  setExportSize: Function;
  setRendering: Function;
}

const initialContext: IPanelContext = {
  darkMode: false,
  lineNumber: false,
  background: false,
  padding: PADDING[0],
  color: GRADIENTS[0],
  font: FONTSTYLE[0],
  language: LANGUAGES[0],
  predictions: null,
  exportSize: 3,
  rendering: false,
  setDarkMode: () => {},
  setLineNumber: () => {},
  setBackground: () => {},
  setColor: () => {},
  setPadding: () => {},
  setFont: () => {},
  setLanguage: () => {},
  setPredictions: () => {},
  setExportSize: () => {},
  setRendering: () => {}
};

const PanelContext = createContext<IPanelContext>(initialContext);

export const PanelContextProvider: FC = ({ children }) => {
  const b = useKeyboardListener({ key: "b" });
  const d = useKeyboardListener({ key: "d" });
  const n = useKeyboardListener({ key: "n" });
  const f = useKeyboardListener({ key: "f" });
  const g = useKeyboardListener({ key: "g" });
  const sSize = useKeyboardListener({ key: "1" });
  const mSize = useKeyboardListener({ key: "2" });
  const lSize = useKeyboardListener({ key: "3" });
  const sPadding = useKeyboardListener({ key: "s" });
  const mPadding = useKeyboardListener({ key: "m" });
  const lPadding = useKeyboardListener({ key: "l" });

  const { colorMode, toggleColorMode } = useColorMode();

  const [lineNumber, setLineNumber] = useState<boolean>(
    initialContext.lineNumber
  );
  const [background, setBackground] = useState<boolean>(
    initialContext.background
  );
  const [color, setColor] = useState<Gradient>(initialContext.color);
  const [padding, setPadding] = useState<PaddingSetting>(
    initialContext.padding
  );
  const [font, setFont] = useState<FontSetting>(initialContext.font);
  const [language, setLanguage] = useState<ILanguage>(initialContext.language);
  const [predictions, setPredictions] = useState<ILanguage>(
    initialContext.predictions
  );
  const [exportSize, setExportSize] = useState<ExportSize>(
    initialContext.exportSize
  );
  const [rendering, setRendering] = useState<boolean>(initialContext.rendering);

  useEffect(() => {
    // background
    if (b) setBackground(!background);

    // dark / light theme
    if (d) toggleColorMode();

    // line number
    if (n) setLineNumber(!lineNumber);

    // font
    if (f) setFont(FONTSTYLE[Math.floor(Math.random() * FONTSTYLE.length)]);

    // gradient
    if (g) {
      if (!background) setBackground(true);
      setColor(GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)]);
    }

    // small
    if (sSize) setExportSize(2);

    // medium
    if (mSize) setExportSize(3);

    // large
    if (lSize) setExportSize(4);

    // padding - small
    if (sPadding) setPadding(PADDING[0]);

    // padding - medium
    if (mPadding) setPadding(PADDING[1]);

    // padding - large
    if (lPadding) setPadding(PADDING[2]);
  }, [b, d, n, f, g, sSize, mSize, lSize, sPadding, mPadding, lPadding]);

  return (
    <PanelContext.Provider
      value={{
        darkMode: colorMode === "dark" ? true : false,
        lineNumber,
        background,
        color,
        padding,
        font,
        language,
        predictions,
        exportSize,
        rendering,
        setDarkMode: toggleColorMode,
        setLineNumber,
        setBackground,
        setColor,
        setPadding,
        setFont,
        setLanguage,
        setPredictions,
        setExportSize,
        setRendering
      }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export default PanelContext;
