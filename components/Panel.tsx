import { IconButton } from "@chakra-ui/button";
import { Box, Container } from "@chakra-ui/layout";
import { FC } from "react";
import { Layers, List, Maximize, Moon, Save } from "react-feather";
import { FONTSTYLE, PADDING } from "../constants/panelSettings";
import usePanelSettings from "../hooks/usePanelSettings";
import { IToggleButton } from "../types/ToggleButton";
import ColorPicker from "./ColorPicker";
import CustomSelect from "./CustomSelect";
import LanguagePicker from "./LanguagePicker";
import ToggleButton from "./ToggleButton";

import domToImage from "../public/js/domToImage";

const Panel: FC = () => {
  const {
    darkMode,
    lineNumber,
    background,
    maxWidth,
    padding,
    font,
    setDarkMode,
    setLineNumber,
    setBackground,
    setMaxWidth,
    setPadding,
    setFont
  } = usePanelSettings();

  const exportSize: number = 2;

  const toggleOptions: IToggleButton[] = [
    {
      label: "Toggle Dark / Light Mode",
      icon: <Moon size={20} />,
      toggleValue: darkMode,
      toggle: () => setDarkMode(!darkMode)
    },
    {
      label: "Toggle Background",
      icon: <Layers size={20} />,
      toggleValue: background,
      toggle: () => setBackground(!background)
    },
    {
      label: "Toggle Line Number",
      icon: <List size={20} />,
      toggleValue: lineNumber,
      toggle: () => setLineNumber(!lineNumber)
    },
    {
      label: "Toggle Max Width",
      icon: <Maximize size={20} />,
      toggleValue: maxWidth,
      toggle: () => setMaxWidth(!maxWidth)
    }
  ];

  const getBackgroundColor = (): string => {
    return darkMode ? "gray.900" : "gray.100";
  };

  const exportImage = async () => {
    if (document && window) {
      const link = document.createElement("a");

      const config = {
        style: {
          transform: `scale(${exportSize})`,
          "transform-origin": "top left",
          background: "none"
        },
        filter: n => {
          if (n.className) {
            const className = String(n.className);
            if (className.includes("eliminateOnRender")) {
              return false;
            }
            if (className.includes("CodeMirror-cursors")) {
              return false;
            }
          }
          return true;
        },
        width: document.getElementById("danpen").offsetWidth * exportSize,
        height: document.getElementById("danpen").offsetHeight * exportSize
      };

      const base64 = await domToImage.toPng(document.getElementById("danpen"), config);

      link.href = base64;
      link.download = "Danpen.png";

      document.body.appendChild(link);

      link.click();
      link.remove();
    }
  };

  return (
    <Container position="fixed" bottom="8" maxWidth="full" zIndex="1000">
      <Container
        maxWidth="container.lg"
        padding="4"
        borderRadius="lg"
        boxShadow="md"
        backgroundColor={getBackgroundColor()}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <ColorPicker />

          {toggleOptions.map(({ label, icon, toggleValue, toggle }) => (
            <ToggleButton
              key={label}
              label={label}
              toggleValue={toggleValue}
              icon={icon}
              toggle={toggle}
            />
          ))}

          <CustomSelect
            label="Padding"
            value={`${padding} PT`}
            list={PADDING}
            changeValue={item => setPadding(item)}
          />

          <CustomSelect
            label="Font Style"
            value={font}
            list={FONTSTYLE}
            changeValue={item => setFont(item)}
          />

          <LanguagePicker />
        </Box>

        <IconButton
          colorScheme="green"
          borderRadius="full"
          aria-label="Download Image"
          icon={<Save size={20} />}
          onClick={() => exportImage()}
        />
      </Container>
    </Container>
  );
};

export default Panel;
