import { ChakraProvider, CSSReset, ThemeProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { theme } from "../config/theme";
import { PanelContextProvider } from "../context/PanelContext";
import CodeMirrorTheme from "../styles/CodeMirrorTheme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <PanelContextProvider>
          <CodeMirrorTheme />
          <Component {...pageProps} />
        </PanelContextProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
