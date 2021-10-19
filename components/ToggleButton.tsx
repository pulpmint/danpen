import { IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Tooltip } from "@chakra-ui/tooltip";
import { FC } from "react";
import { IToggleButton } from "../types/ToggleButton";

const ToggleButton: FC<IToggleButton> = ({
  label,
  icon,
  toggleValue,
  toggle
}) => {
  const buttonBg = useColorModeValue("gray.300", "gray.700");

  return (
    <Tooltip label={label}>
      <IconButton
        mr="4"
        borderRadius="full"
        icon={icon}
        aria-label={label}
        backgroundColor={toggleValue ? buttonBg : "transparent"}
        onClick={() => toggle()}
      />
    </Tooltip>
  );
};

export default ToggleButton;
