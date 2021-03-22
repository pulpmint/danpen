import { IconButton } from "@chakra-ui/button";
import { FC } from "react";
import usePanelSettings from "../hooks/usePanelSettings";
import { IToggleButton } from "../types/ToggleButton";

const ToggleButton: FC<IToggleButton> = ({ label, icon, toggleValue, toggle }) => {
  const { darkMode } = usePanelSettings();

  const getBackgroundColor = (): string => {
    return darkMode ? "gray.700" : "gray.300";
  };

  return (
    <IconButton
      marginRight="4"
      borderRadius="full"
      icon={icon}
      aria-label={label}
      backgroundColor={toggleValue ? getBackgroundColor() : "transparent"}
      onClick={() => toggle()}
    />
  );
};

export default ToggleButton;
