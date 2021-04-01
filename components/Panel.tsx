import { Box, Container } from "@chakra-ui/layout";
import { FC } from "react";
import { Layers, List, Maximize, Moon } from "react-feather";
import { FONTSTYLE, PADDING } from "../constants/panelSettings";
import usePanelSettings from "../hooks/usePanelSettings";
import { IToggleButton } from "../types/ToggleButton";
import ColorPicker from "./ColorPicker";
import CustomSelect from "./CustomSelect";
import DownloadDialog from "./DownloadDialog";
import LanguagePicker from "./LanguagePicker";
import ToggleButton from "./ToggleButton";

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

        <DownloadDialog />
      </Container>
    </Container>
  );
};

export default Panel;
