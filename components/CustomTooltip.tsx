import { Tooltip, TooltipProps, useColorModeValue } from "@chakra-ui/react";
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
      fontSize="xs"
      {...props}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
