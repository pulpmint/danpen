import { Box, ChakraProvider, CSSReset, ThemeProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import PissOff from "../components/PissOff";
import { theme } from "../config/theme";
import { PanelContextProvider } from "../context/PanelContext";
import useWindowSize from "../hooks/useWindowSize";
import CodeMirrorTheme from "../styles/CodeMirrorTheme";
import FontFaces from "../styles/FontFaces";

function App({ Component, pageProps }: AppProps) {
  const { width } = useWindowSize();

  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => setOpacity(1), []);

  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <PanelContextProvider>
          <Box opacity={opacity}>
            {!!width && width > 768 ? (
              <>
                <FontFaces />
                <CodeMirrorTheme />
                <Component {...pageProps} />
              </>
            ) : (
              <PissOff />
            )}
          </Box>
        </PanelContextProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
