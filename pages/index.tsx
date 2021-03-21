import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";
import { FC } from "react";
import { Moon as MoonIcon, Sun as SunIcon } from "react-feather";
import { SEO_DESCRIPTION, SEO_TITLE } from "../constants/seo";

const Home: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
          <Heading marginBottom="2">Danpen</Heading>

          <Text fontSize="2xl" marginBottom="4">
            Take beautiful ✨ screenshots
            <br />
            of your shitty 💩 little code
          </Text>

          <Box display="flex" alignItems="center">
            <IconButton
              borderRadius="full"
              marginRight="4"
              colorScheme="green"
              aria-label="Toggle Dark / Light Mode"
              icon={colorMode === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
              onClick={() => toggleColorMode()}
            />

            <Text textColor="gray" fontWeight="medium">{`Toggle ${
              colorMode === "light" ? "Dark" : "Light"
            } Mode`}</Text>
          </Box>
        </Container>
      </main>
    </>
  );
};

export default Home;
