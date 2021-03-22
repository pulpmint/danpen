import { IconButton } from "@chakra-ui/button";
import { Tooltip } from "@chakra-ui/tooltip";
import { FC } from "react";
import usePanelSettings from "../hooks/usePanelSettings";
import { IToggleButton } from "../types/ToggleButton";

const ToggleButton: FC<IToggleButton> = ({ label, icon, toggleValue, toggle }) => {
  const { darkMode } = usePanelSettings();

  const getBackgroundColor = (): string => {
    return darkMode ? "gray.700" : "gray.300";
  };

  return (
    <Tooltip label={label}>
      <IconButton
        marginRight="4"
        borderRadius="full"
        icon={icon}
        aria-label={label}
        backgroundColor={toggleValue ? getBackgroundColor() : "transparent"}
        onClick={() => toggle()}
      />
    </Tooltip>
  );
};

export default ToggleButton;
