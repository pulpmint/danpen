import { Box } from "@chakra-ui/layout";
import { FC } from "react";
import usePanelSettings from "../hooks/usePanelSettings";
import CodeEditor from "./CodeEditor";
import WindowControls from "./WindowControls";

const CodeWindow: FC = () => {
  const { darkMode, background, color, padding } = usePanelSettings();

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
    <Box id="danpen">
      <Box
        zIndex="-1"
        position="fixed"
        top="0"
        bottom="0"
        left="0"
        right="0"
        bgGradient={getGradient()}
      ></Box>

      <Box width="full" padding={padding} backgroundColor="blackAlpha.50">
        <Box
          width="full"
          minHeight="max-content"
          padding="4"
          borderRadius="md"
          boxShadow="xl"
          backgroundColor={getBackgroundColor()}
        >
          <WindowControls />

          <CodeEditor />
        </Box>
      </Box>
    </Box>
  );
};

export default CodeWindow;
