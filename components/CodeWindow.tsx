import { Box, Container } from "@chakra-ui/layout";
import { FC } from "react";
import usePanelSettings from "../hooks/usePanelSettings";
import WindowControls from "./WindowControls";

const CodeWindow: FC = () => {
  const { darkMode, background, lineNumber, maxWidth, color } = usePanelSettings();

  const getBackgroundColor = (): string => {
    return darkMode ? "gray.800" : "gray.200";
  };

  const getGradient = (): string => {
    const getThemeGradient = (): string => {
      const color = darkMode ? "gray.400" : "gray.600";
      return `linear(to-br, ${color} 0%, ${color} 100%)`;
    };

    const gradient = background ? color : getThemeGradient();

    return gradient;
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
        bgGradient={getGradient()}
      ></Box>

      <Container
        maxWidth={`container.${maxWidth ? "lg" : "md"}`}
        minHeight="md"
        marginTop="32"
        marginBottom="32"
        marginLeft="auto"
        marginRight="auto"
        padding="4"
        borderRadius="md"
        boxShadow="xl"
        backgroundColor={getBackgroundColor()}
      >
        <WindowControls />

        <code>
          <span style={{ opacity: 0.5 }}>{lineNumber ? `1. ` : null}</span>
          console.log("Hello");
        </code>
      </Container>
    </>
  );
};

export default CodeWindow;
