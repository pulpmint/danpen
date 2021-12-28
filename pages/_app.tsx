import { Box, ChakraProvider, CSSReset } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import PissOff from "../components/PissOff";
import { theme } from "../config/theme";
import { SEO_TITLE } from "../constants/seo";
import { PanelContextProvider } from "../context/PanelContext";
import useWindowSize from "../hooks/useWindowSize";
import CodeMirrorTheme from "../styles/CodeMirrorTheme";
import FontFaces from "../styles/FontFaces";
import MarkDownTheme from "../styles/MarkDownTheme";
import Misc from "../styles/Misc";

function App({ Component, pageProps }: AppProps) {
  const { height } = useWindowSize();

  return (
    <>
      <Head>
        <title>{SEO_TITLE}</title>
      </Head>

      <main>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <PanelContextProvider>
            <Box minH={height}>
              <Box minH="inherit" display={["none", "none", "block"]}>
                <FontFaces />
                <MarkDownTheme />
                <CodeMirrorTheme />
                <Misc />
                <Component {...pageProps} />
              </Box>
              <Box minH="inherit" display={["block", "block", "none"]}>
                <PissOff />
              </Box>
            </Box>
          </PanelContextProvider>
        </ChakraProvider>
      </main>
    </>
  );
}

export default App;
