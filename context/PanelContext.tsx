import { useColorMode } from "@chakra-ui/color-mode";
import { createContext, FC, useState } from "react";
import { GRADIENTS } from "../constants/gradients";
import { PaddingSetting } from "../types/PanelSettings";

export interface IPanelContext {
  darkMode: boolean;
  lineNumber: boolean;
  background: boolean;
  maxWidth: boolean;
  color: string;
  padding: PaddingSetting;
  setDarkMode: Function;
  setLineNumber: Function;
  setBackground: Function;
  setMaxWidth: Function;
  setColor: Function;
  setPadding: Function;
}

const initialContext: IPanelContext = {
  darkMode: false,
  lineNumber: false,
  background: true,
  maxWidth: false,
  padding: 16,
  color: GRADIENTS[GRADIENTS.length - 1],
  setDarkMode: () => {},
  setLineNumber: () => {},
  setBackground: () => {},
  setMaxWidth: () => {},
  setColor: () => {},
  setPadding: () => {}
};

const PanelContext = createContext<IPanelContext>(initialContext);

export const PanelContextProvider: FC = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [lineNumber, setLineNumber] = useState<boolean>(initialContext.lineNumber);
  const [background, setBackground] = useState<boolean>(initialContext.background);
  const [maxWidth, setMaxWidth] = useState<boolean>(initialContext.maxWidth);
  const [color, setColor] = useState<string>(initialContext.color);
  const [padding, setPadding] = useState<PaddingSetting>(initialContext.padding);

  return (
    <PanelContext.Provider
      value={{
        darkMode: colorMode === "dark" ? true : false,
        lineNumber,
        background,
        maxWidth,
        color,
        padding,
        setDarkMode: toggleColorMode,
        setLineNumber,
        setBackground,
        setMaxWidth,
        setColor,
        setPadding
      }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export default PanelContext;
