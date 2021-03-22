import { useColorMode } from "@chakra-ui/color-mode";
import { createContext, FC } from "react";

export interface IPanelContext {
  darkMode: boolean;
  setDarkMode: Function;
}

const initialContext: IPanelContext = {
  darkMode: false,
  setDarkMode: () => {}
};

const PanelContext = createContext<IPanelContext>(initialContext);

export const PanelContextProvider: FC = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <PanelContext.Provider
      value={{ darkMode: colorMode === "dark" ? true : false, setDarkMode: toggleColorMode }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export default PanelContext;
