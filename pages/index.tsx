import { Container } from "@chakra-ui/layout";
import Head from "next/head";
import { FC } from "react";
import CodeWindow from "../components/CodeWindow";
import Panel from "../components/Panel";
import { SEO_DESCRIPTION, SEO_TITLE } from "../constants/seo";
import usePanelSettings from "../hooks/usePanelSettings";

const Home: FC = () => {
  const { maxWidth } = usePanelSettings();

  return (
    <>
      <Head>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
      </Head>

      <main>
        <Container
          zIndex="popover"
          minHeight="100vh"
          maxWidth={maxWidth ? "container.lg" : "container.md"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <CodeWindow />
        </Container>

        <Panel />
      </main>
    </>
  );
};

export default Home;
