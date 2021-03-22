import { Container } from "@chakra-ui/layout";
import { FC } from "react";
import { List, Moon } from "react-feather";
import usePanelSettings from "../hooks/usePanelSettings";
import ToggleButton from "./ToggleButton";

const Panel: FC = () => {
  const { darkMode, lineNumber, setDarkMode, setLineNumber } = usePanelSettings();

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

        <ToggleButton
          aria-label="Toggle Line Number"
          toggleValue={lineNumber}
          icon={<List size={20} />}
          toggle={() => setLineNumber(!lineNumber)}
        />
      </Container>
    </Container>
  );
};

export default Panel;
