import { Container } from "@chakra-ui/layout";
import { FC } from "react";
import { Layers, List, Moon } from "react-feather";
import usePanelSettings from "../hooks/usePanelSettings";
import { IToggleButton } from "../types/ToggleButton";
import ToggleButton from "./ToggleButton";

const Panel: FC = () => {
  const {
    darkMode,
    lineNumber,
    background,
    setDarkMode,
    setLineNumber,
    setBackground
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
    }
  ];

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
        {toggleOptions.map(({ label, icon, toggleValue, toggle }) => (
          <ToggleButton
            key={label}
            label={label}
            toggleValue={toggleValue}
            icon={icon}
            toggle={toggle}
          />
        ))}
      </Container>
    </Container>
  );
};

export default Panel;
