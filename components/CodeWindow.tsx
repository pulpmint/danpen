import { Container } from "@chakra-ui/layout";
import { FC } from "react";
import usePanelSettings from "../hooks/usePanelSettings";

const CodeWindow: FC = () => {
  const { darkMode, lineNumber } = usePanelSettings();

  const getBackgroundColor = (): string => {
    return darkMode ? "gray.800" : "gray.200";
  };

  return (
    <Container
      maxWidth="container.md"
      minHeight="md"
      marginTop="32"
      marginBottom="32"
      marginLeft="auto"
      marginRight="auto"
      paddingLeft="4"
      paddingRight="4"
      paddingTop="2"
      paddingBottom="2"
      borderRadius="md"
      backgroundColor={getBackgroundColor()}
    >
      <code>
        <span style={{ opacity: 0.5 }}>{lineNumber ? `1. ` : null}</span>
        console.log("Hello");
      </code>
    </Container>
  );
};

export default CodeWindow;
