import { Box, ChakraProvider, CSSReset, ThemeProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { initialize } from "react-ga";
import PissOff from "../components/PissOff";
import { theme } from "../config/theme";
import { SEO_TITLE } from "../constants/seo";
import { PanelContextProvider } from "../context/PanelContext";
import useWindowSize from "../hooks/useWindowSize";
import CodeMirrorTheme from "../styles/CodeMirrorTheme";
import FontFaces from "../styles/FontFaces";
import MarkDownTheme from "../styles/MarkDownTheme";

function App({ Component, pageProps }: AppProps) {
  const { width } = useWindowSize();

  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => setOpacity(1), []);

  useEffect(() => {
    try {
      initialize(process.env.NEXT_PUBLIC_GA);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{SEO_TITLE}</title>
      </Head>

      <main>
        <ChakraProvider>
          <ThemeProvider theme={theme}>
            <CSSReset />
            <PanelContextProvider>
              <Box opacity={opacity}>
                {!!width && width >= 768 ? (
                  <>
                    <FontFaces />
                    <MarkDownTheme />
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
      </main>
    </>
  );
}

export default App;
