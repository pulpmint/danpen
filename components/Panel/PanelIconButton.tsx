import { IconButtonProps, IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import {
  ICON_BACKGROUND,
  ICON_BACKGROUND_HOVER,
  TEXT
} from "../../config/colors";

interface PanelIconButtonProps {
  buttonProps?: IconButtonProps;
  label?: string;
}

const PanelIconButton: FC<PanelIconButtonProps> = ({
  buttonProps,
  label = "",
  children
}) => {
  // colors
  const iconBackground = useColorModeValue(
    ICON_BACKGROUND.light,
    ICON_BACKGROUND.dark
  );
  const iconBackgroundHover = useColorModeValue(
    ICON_BACKGROUND_HOVER.light,
    ICON_BACKGROUND_HOVER.dark
  );
  const textColor = useColorModeValue(TEXT.light, TEXT.dark);

  return (
    <Tooltip
      bg={iconBackground}
      textColor={textColor}
      fontWeight="normal"
      label={label}
    >
      <IconButton
        variant="unstyled"
        size="lg"
        bg={iconBackground}
        _hover={{ backgroundColor: iconBackgroundHover }}
        {...buttonProps}
        w="12"
        h="12"
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default PanelIconButton;
