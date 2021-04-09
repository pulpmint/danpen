import { Container } from "@chakra-ui/layout";
import { FC, useEffect } from "react";
import NavBar from "../components/NavBar";
import CodeWindow from "../components/CodeWindow";
import Panel from "../components/Panel";
import usePanelSettings from "../hooks/usePanelSettings";
import { pageview } from "react-ga";

const Home: FC = () => {
  const { maxWidth } = usePanelSettings();

  useEffect(() => {
    pageview("/");
    console.log("Page viewed: /");
  }, []);

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
