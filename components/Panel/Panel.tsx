import { Box, Container, ScaleFade, useColorModeValue } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { List, Moon } from "react-feather";
import { BACKGROUND_COLOR, ICON_BACKGROUND } from "../../config/colors";
import { FONTSTYLE } from "../../constants/panelSettings";
import { IToggleButton } from "../../types/ToggleButton";
import ColorPicker from "./ColorPicker";
import CustomSelect from "./CustomSelect";
import DownloadDialog from "./DownloadDialog";
import LanguagePicker from "./LanguagePicker";
import PanelDividers from "./PanelDividers";
import ToggleButton from "./ToggleButton";
import usePanelSettings from "../../hooks/usePanelSettings";
import PaddingPicker from "./PaddingPicker";

const Panel: FC = () => {
  const { darkMode, lineNumber, font, setDarkMode, setLineNumber, setFont } =
    usePanelSettings();

  // colors
  const backgroundColor = useColorModeValue(
    BACKGROUND_COLOR.light,
    BACKGROUND_COLOR.dark
  );
  const iconBackground = useColorModeValue(
    ICON_BACKGROUND.light,
    ICON_BACKGROUND.dark
  );

  const [mounted, setMounted] = useState<boolean>(false);

  const toggleOptions: IToggleButton[] = [
    {
      label: "Toggle Dark / Light Mode",
      icon: <Moon size={20} />,
      toggleValue: darkMode,
      toggle: () => setDarkMode(!darkMode)
    },
    {
      label: "Toggle Line Number",
      icon: <List size={20} />,
      toggleValue: lineNumber,
      toggle: () => setLineNumber(!lineNumber)
    }
  ];

  useEffect(() => {
    setTimeout(() => setMounted(true), 500);
    document.querySelector("body").style.overflowY = "auto";
  }, []);

  return (
    <ScaleFade in={mounted}>
      <Container position="fixed" bottom="8" maxWidth="full" zIndex="1000">
        <Container
          w="full"
          maxWidth="container.md"
          p="6"
          borderColor={iconBackground}
          borderStyle="solid"
          borderWidth="thin"
          borderRadius="3xl"
          backgroundColor={backgroundColor}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          overflowX="auto"
        >
          <Box display="flex" alignItems="center" w="full">
            <ColorPicker />

            <PanelDividers />

            <Box display="flex" alignItems="center" w="full">
              <Box pl="6" pr="2" display="flex" alignItems="center">
                {toggleOptions.map(({ label, icon, toggleValue, toggle }) => (
                  <ToggleButton
                    key={label}
                    label={label}
                    toggleValue={toggleValue}
                    icon={icon}
                    toggle={toggle}
                  />
                ))}
              </Box>

              <PanelDividers />

              <Box px="6" display="flex" alignItems="center" gridGap="4">
                <PaddingPicker />

                <CustomSelect
                  label="Font Face"
                  value={font}
                  list={FONTSTYLE}
                  changeValue={item => setFont(item)}
                />

                <LanguagePicker />
              </Box>
            </Box>
          </Box>

          <Box display="flex" alignItems="center">
            <PanelDividers />

            <DownloadDialog />
          </Box>
        </Container>
      </Container>
    </ScaleFade>
  );
};

export default Panel;
