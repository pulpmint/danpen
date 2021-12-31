import { Container } from "@chakra-ui/react";
import { FC } from "react";
import NavBar from "../components/NavBar";
import CodeWindow from "../components/CodeWindow";
import Panel from "../components/Panel/Panel";

const Home: FC = () => {
  return (
    <>
      <main>
        <NavBar />

        <Container
          id="main"
          pos="relative"
          w="container.md"
          minHeight="100vh"
          minWidth="container.sm"
          maxWidth="container.lg"
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
