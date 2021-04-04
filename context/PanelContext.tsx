import { useColorMode } from "@chakra-ui/color-mode";
import { createContext, FC, useState } from "react";
import { GRADIENTS } from "../constants/gradients";
import { ILanguage, LANGUAGES } from "../constants/languages";
import { PADDING, FONTSTYLE } from "../constants/panelSettings";
import { FontSetting, Gradient, PaddingSetting, ExportSize } from "../types/PanelSettings";

export interface IPanelContext {
  darkMode: boolean;
  lineNumber: boolean;
  background: boolean;
  maxWidth: boolean;
  color: Gradient;
  padding: PaddingSetting;
  font: FontSetting;
  language: ILanguage;
  predictions: ILanguage;
  exportSize: ExportSize;
  setDarkMode: Function;
  setLineNumber: Function;
  setBackground: Function;
  setMaxWidth: Function;
  setColor: Function;
  setPadding: Function;
  setFont: Function;
  setLanguage: Function;
  setPredictions: Function;
  setExportSize: Function;
}

const initialContext: IPanelContext = {
  darkMode: false,
  lineNumber: false,
  background: true,
  maxWidth: false,
  padding: PADDING[0],
  color: GRADIENTS[0],
  font: FONTSTYLE[0],
  language: LANGUAGES[0],
  predictions: null,
  exportSize: 3,
  setDarkMode: () => {},
  setLineNumber: () => {},
  setBackground: () => {},
  setMaxWidth: () => {},
  setColor: () => {},
  setPadding: () => {},
  setFont: () => {},
  setLanguage: () => {},
  setPredictions: () => {},
  setExportSize: () => {}
};

const PanelContext = createContext<IPanelContext>(initialContext);

export const PanelContextProvider: FC = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [lineNumber, setLineNumber] = useState<boolean>(initialContext.lineNumber);
  const [background, setBackground] = useState<boolean>(initialContext.background);
  const [maxWidth, setMaxWidth] = useState<boolean>(initialContext.maxWidth);
  const [color, setColor] = useState<Gradient>(initialContext.color);
  const [padding, setPadding] = useState<PaddingSetting>(initialContext.padding);
  const [font, setFont] = useState<FontSetting>(initialContext.font);
  const [language, setLanguage] = useState<ILanguage>(initialContext.language);
  const [predictions, setPredictions] = useState<ILanguage>(initialContext.predictions);
  const [exportSize, setExportSize] = useState<ExportSize>(initialContext.exportSize);

  return (
    <PanelContext.Provider
      value={{
        darkMode: colorMode === "dark" ? true : false,
        lineNumber,
        background,
        maxWidth,
        color,
        padding,
        font,
        language,
        predictions,
        exportSize,
        setDarkMode: toggleColorMode,
        setLineNumber,
        setBackground,
        setMaxWidth,
        setColor,
        setPadding,
        setFont,
        setLanguage,
        setPredictions,
        setExportSize
      }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export default PanelContext;
