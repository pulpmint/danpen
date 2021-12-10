import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { ScaleFade } from "@chakra-ui/transition";
import { FC, useEffect, useState } from "react";
import { BACKGROUND_COLOR } from "../config/colors";
import { theme } from "../config/theme";
import usePanelSettings from "../hooks/usePanelSettings";
import CodeEditor from "./CodeEditor";
import ResizePoints from "./ResizePoints";
import WindowControls from "./WindowControls";

const CodeWindow: FC = () => {
  const { background, color, padding } = usePanelSettings();

  const bg = useColorModeValue(BACKGROUND_COLOR.light, BACKGROUND_COLOR.dark);
  const hg = useColorModeValue("blackAlpha.50", "whiteAlpha.50");

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 250);
  }, []);

  useEffect(() => {
    const main = document.querySelector("#main") as any;

    const left = document.querySelector("#w") as any;
    const right = document.querySelector("#e") as any;

    const resizers = [left, right];

    for (let i = 0; i < resizers.length; i++) {
      const currentResizer = resizers[i];

      currentResizer.addEventListener("dblclick", () => {
        main.style.width = theme.breakpoints.md;
      });

      currentResizer.addEventListener("mousedown", e => {
        e.preventDefault();

        document.body.style.cursor = `${currentResizer.id}-resize`;
        currentResizer.style.transform = "scale(1.25)";

        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", () => stopResize(currentResizer));
      });

      const resize = e => {
        if (currentResizer.id === "e") {
          main.style.width = e.pageX - main.getBoundingClientRect().left + "px";
        }

        if (currentResizer.id === "w") {
          main.style.width =
            main.getBoundingClientRect().right - e.pageX + "px";
        }
      };

      const stopResize = (currentResizer: any) => {
        currentResizer.style.transform = "";
        document.body.style.cursor = "default";

        window.removeEventListener("mousemove", resize);
      };
    }
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

      <ResizePoints id="w" cursor="w-resize" left="3"></ResizePoints>
      <ResizePoints id="e" cursor="e-resize" right="3"></ResizePoints>

      <ScaleFade in={mounted}>
        <Box
          id="pic-area"
          width="full"
          p={padding}
          backgroundColor={background ? "blackAlpha.100" : hg}
        >
          <Box
            width="full"
            minHeight="max-content"
            p="4"
            borderRadius="md"
            boxShadow="2xl"
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
