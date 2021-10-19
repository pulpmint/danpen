import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { ScaleFade } from "@chakra-ui/transition";
import { FC, useEffect, useState } from "react";
import usePanelSettings from "../hooks/usePanelSettings";
import CodeEditor from "./CodeEditor";
import WindowControls from "./WindowControls";

const CodeWindow: FC = () => {
  const { background, color, padding } = usePanelSettings();

  const bg = useColorModeValue("gray.100", "gray.900");

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 250);
  }, []);

  return (
    <Box id="danpen">
      {background && (
        <Box
          zIndex="-1"
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg={color.value}
          bgSize="cover"
          bgPos="center"
        ></Box>
      )}

      <ScaleFade in={mounted}>
        <Box width="full" p={padding} backgroundColor="blackAlpha.100">
          <Box
            width="full"
            minHeight="max-content"
            p="4"
            borderRadius="md"
            boxShadow="xl"
            backgroundColor={bg}
          >
            <WindowControls />

            <CodeEditor />
          </Box>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export default CodeWindow;
