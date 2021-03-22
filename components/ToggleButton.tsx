import { IconButton, IconButtonProps } from "@chakra-ui/button";
import { FC } from "react";
import usePanelSettings from "../hooks/usePanelSettings";

interface ComponentProps extends IconButtonProps {
  toggleValue: boolean;
  toggle: Function;
}

const ToggleButton: FC<ComponentProps> = ({ toggleValue, toggle, ...props }) => {
  const { darkMode } = usePanelSettings();

  const getBackgroundColor = (): string => {
    return darkMode ? "gray.700" : "gray.300";
  };

  return (
    <IconButton
      {...props}
      marginRight="4"
      borderRadius="full"
      backgroundColor={toggleValue ? getBackgroundColor() : "transparent"}
      onClick={() => toggle()}
    />
  );
};

export default ToggleButton;
