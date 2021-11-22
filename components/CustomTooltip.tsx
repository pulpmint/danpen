import { useColorModeValue } from "@chakra-ui/color-mode";
import { Tooltip } from "@chakra-ui/react";
import { TooltipProps } from "@chakra-ui/tooltip";
import { FC } from "react";
import { ICON_BACKGROUND } from "../config/colors";

const CustomTooltip: FC<TooltipProps> = ({ children, ...props }) => {
  // colors
  const iconBackground = useColorModeValue(
    ICON_BACKGROUND.light,
    ICON_BACKGROUND.dark
  );
  const textColor = useColorModeValue("black", "white");

  return (
    <Tooltip
      bg={iconBackground}
      textColor={textColor}
      fontWeight="normal"
      {...props}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
