import { useColorMode } from "@chakra-ui/color-mode";
import { createContext, FC, useState } from "react";

export interface IPanelContext {
  darkMode: boolean;
  lineNumber: boolean;
  setDarkMode: Function;
  setLineNumber: Function;
}

const initialContext: IPanelContext = {
  darkMode: false,
  lineNumber: false,
  setDarkMode: () => {},
  setLineNumber: () => {}
};

const PanelContext = createContext<IPanelContext>(initialContext);

export const PanelContextProvider: FC = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [lineNumber, setLineNumber] = useState<boolean>(false);

  return (
    <PanelContext.Provider
      value={{
        darkMode: colorMode === "dark" ? true : false,
        lineNumber,
        setDarkMode: toggleColorMode,
        setLineNumber
      }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export default PanelContext;
