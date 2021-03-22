import { Box, Container } from "@chakra-ui/layout";
import { FC } from "react";
import usePanelSettings from "../hooks/usePanelSettings";

const CodeWindow: FC = () => {
  const { darkMode, lineNumber } = usePanelSettings();

  const getBackgroundColor = (): string => {
    return darkMode ? "gray.800" : "gray.200";
  };

  return (
    <>
      <Box
        zIndex="-1"
        position="fixed"
        top="0"
        bottom="0"
        left="0"
        right="0"
        bgGradient="linear(to-br, #2F80ED 0%, #B2FFDA 100%)"
      ></Box>

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
        boxShadow="xl"
        opacity="0.9"
        backgroundColor={getBackgroundColor()}
      >
        <code>
          <span style={{ opacity: 0.5 }}>{lineNumber ? `1. ` : null}</span>
          console.log("Hello");
        </code>
      </Container>
    </>
  );
};

export default CodeWindow;
