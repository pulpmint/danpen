import { Container } from "@chakra-ui/layout";
import { FC } from "react";
import NavBar from "../components/NavBar";
import CodeWindow from "../components/CodeWindow";
import Panel from "../components/Panel/Panel";
import usePanelSettings from "../hooks/usePanelSettings";

const Home: FC = () => {
  const { maxWidth } = usePanelSettings();

  return (
    <>
      <main>
        <NavBar />

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
