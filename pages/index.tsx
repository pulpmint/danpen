import { Container } from "@chakra-ui/layout";
import Head from "next/head";
import { FC } from "react";
import Panel from "../components/Panel";
import { SEO_DESCRIPTION, SEO_TITLE } from "../constants/seo";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
      </Head>

      <main>
        <Container
          minHeight="100vh"
          maxWidth="container.lg"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <code>console.log("Hello");</code>
        </Container>

        <Panel />
      </main>
    </>
  );
};

export default Home;
