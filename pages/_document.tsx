import { ColorModeScript, theme } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CDN_VERSION_CONSTANT } from "../constants/misc";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href={`${CDN_VERSION_CONSTANT}/codemirror.min.css`} />
          <script src={`${CDN_VERSION_CONSTANT}/codemirror.min.js`}></script>
          <script src={`${CDN_VERSION_CONSTANT}/mode/meta.min.js`}></script>
          <script src={`${CDN_VERSION_CONSTANT}/addon/mode/loadmode.min.js`}></script>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
