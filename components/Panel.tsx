import { Container } from "@chakra-ui/layout";
import { FC } from "react";
import { Moon } from "react-feather";
import usePanelSettings from "../hooks/usePanelSettings";
import ToggleButton from "./ToggleButton";

const Panel: FC = () => {
  const { darkMode, setDarkMode } = usePanelSettings();

  const getBackgroundColor = (): string => {
    return darkMode ? "gray.900" : "gray.100";
  };

  return (
    <Container position="fixed" bottom="8" maxWidth="full">
      <Container
        maxWidth="container.lg"
        padding="4"
        borderRadius="lg"
        boxShadow="md"
        backgroundColor={getBackgroundColor()}
      >
        <ToggleButton
          aria-label="Toggle Dark / Light Mode"
          toggleValue={darkMode}
          icon={<Moon size={20} />}
          toggle={() => setDarkMode()}
        />
      </Container>
    </Container>
  );
};

export default Panel;
