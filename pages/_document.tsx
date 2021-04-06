import { ColorModeScript, theme } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CDN_VERSION_CONSTANT } from "../constants/misc";
import { SEO_DESCRIPTION, SEO_TITLE } from "../constants/seo";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content={SEO_DESCRIPTION} />

          <meta property="og:title" content={SEO_TITLE} />
          <meta property="og:description" content={SEO_TITLE} />
          <meta property="og:image" content="/cover.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={SEO_TITLE} />
          <meta name="twitter:description" content={SEO_DESCRIPTION} />
          <meta property="twitter:image" content="/cover.png" />

          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
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
