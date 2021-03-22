import { useColorMode } from "@chakra-ui/color-mode";
import { createContext, FC, useState } from "react";

export interface IPanelContext {
  darkMode: boolean;
  lineNumber: boolean;
  background: boolean;
  setDarkMode: Function;
  setLineNumber: Function;
  setBackground: Function;
}

const initialContext: IPanelContext = {
  darkMode: false,
  lineNumber: false,
  background: true,
  setDarkMode: () => {},
  setLineNumber: () => {},
  setBackground: () => {}
};

const PanelContext = createContext<IPanelContext>(initialContext);

export const PanelContextProvider: FC = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [lineNumber, setLineNumber] = useState<boolean>(initialContext.lineNumber);
  const [background, setBackground] = useState<boolean>(initialContext.background);

  return (
    <PanelContext.Provider
      value={{
        darkMode: colorMode === "dark" ? true : false,
        lineNumber,
        background,
        setDarkMode: toggleColorMode,
        setLineNumber,
        setBackground
      }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export default PanelContext;
