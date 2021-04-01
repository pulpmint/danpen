import { ChakraProvider, CSSReset, ThemeProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { theme } from "../config/theme";
import { PanelContextProvider } from "../context/PanelContext";
import CodeMirrorTheme from "../styles/CodeMirrorTheme";
import FontFaces from "../styles/FontFaces";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <PanelContextProvider>
          <FontFaces />
          <CodeMirrorTheme />
          <Component {...pageProps} />
        </PanelContextProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
