import { ButtonProps, Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import { ICON_BACKGROUND, ICON_BACKGROUND_HOVER } from "../../config/colors";

interface PanelIconButtonProps {
  buttonProps?: ButtonProps;
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
  const textColor = useColorModeValue("black", "white");

  return (
    <Tooltip
      bg={iconBackground}
      textColor={textColor}
      fontWeight="normal"
      label={label}
    >
      <Button
        variant="unstyled"
        size="lg"
        w="12"
        h="12"
        p="3"
        rounded="2xl"
        bg={iconBackground}
        _hover={{ backgroundColor: iconBackgroundHover }}
        {...buttonProps}
      >
        {children}
      </Button>
    </Tooltip>
  );
};

export default PanelIconButton;
